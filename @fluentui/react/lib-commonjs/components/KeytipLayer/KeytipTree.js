"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Utilities_1 = require("../../Utilities");
var KeytipUtils_1 = require("../../utilities/keytips/KeytipUtils");
var KeytipConstants_1 = require("../../utilities/keytips/KeytipConstants");
/**
 * This class is responsible for handling the parent/child relationships between keytips
 */
var KeytipTree = /** @class */ (function () {
    /**
     * KeytipTree constructor
     */
    function KeytipTree() {
        this.nodeMap = {};
        // Root has no keytipSequence
        this.root = {
            id: KeytipConstants_1.KTP_LAYER_ID,
            children: [],
            parent: '',
            keySequences: [],
        };
        this.nodeMap[this.root.id] = this.root;
    }
    /**
     * Add a keytip node to this KeytipTree
     *
     * @param keytipProps - Keytip to add to the Tree
     * @param uniqueID - Unique ID for this keytip
     * @param persisted - T/F if this keytip should be marked as persisted
     */
    KeytipTree.prototype.addNode = function (keytipProps, uniqueID, persisted) {
        var fullSequence = this._getFullSequence(keytipProps);
        var nodeID = KeytipUtils_1.sequencesToID(fullSequence);
        // Take off the last item to calculate the parent sequence
        fullSequence.pop();
        // Parent ID is the root if there aren't any more sequences
        var parentID = this._getParentID(fullSequence);
        // Create node and add to map
        var node = this._createNode(nodeID, parentID, [], keytipProps, persisted);
        this.nodeMap[uniqueID] = node;
        // Try to add self to parents children, if they exist
        var parent = this.getNode(parentID);
        if (parent) {
            parent.children.push(nodeID);
        }
    };
    /**
     * Updates a node in the tree
     *
     * @param keytipProps - Keytip props to update
     * @param uniqueID - Unique ID for this keytip
     */
    KeytipTree.prototype.updateNode = function (keytipProps, uniqueID) {
        var fullSequence = this._getFullSequence(keytipProps);
        var nodeID = KeytipUtils_1.sequencesToID(fullSequence);
        // Take off the last item to calculate the parent sequence
        fullSequence.pop();
        // Parent ID is the root if there aren't any more sequences
        var parentID = this._getParentID(fullSequence);
        var node = this.nodeMap[uniqueID];
        var prevParent = node.parent;
        var prevParentNode = this.getNode(prevParent);
        var parent = this.getNode(parentID);
        if (node) {
            if (prevParentNode && prevParent !== parentID) {
                // If parent has changed, remove child from old parent
                var childIndex = prevParentNode.children.indexOf(node.id);
                if (childIndex >= 0) {
                    prevParentNode.children.splice(childIndex, 1);
                }
            }
            // If the ID of the node has changed, update node's parent's array of children with new ID
            if (parent && node.id !== nodeID) {
                var index = parent.children.indexOf(node.id);
                if (index >= 0) {
                    parent.children[index] = nodeID;
                }
                else {
                    parent.children.push(nodeID);
                }
            }
            // Update values
            node.id = nodeID;
            node.keySequences = keytipProps.keySequences;
            node.overflowSetSequence = keytipProps.overflowSetSequence;
            node.onExecute = keytipProps.onExecute;
            node.onReturn = keytipProps.onReturn;
            node.hasDynamicChildren = keytipProps.hasDynamicChildren;
            node.hasMenu = keytipProps.hasMenu;
            node.parent = parentID;
            node.disabled = keytipProps.disabled;
        }
    };
    /**
     * Removes a node from the KeytipTree
     *
     * @param sequence - full string of the node to remove
     */
    KeytipTree.prototype.removeNode = function (keytipProps, uniqueID) {
        var fullSequence = this._getFullSequence(keytipProps);
        var nodeID = KeytipUtils_1.sequencesToID(fullSequence);
        // Take off the last sequence to calculate the parent ID
        fullSequence.pop();
        // Parent ID is the root if there aren't any more sequences
        var parentID = this._getParentID(fullSequence);
        var parent = this.getNode(parentID);
        if (parent) {
            // Remove node from its parent's children
            parent.children.splice(parent.children.indexOf(nodeID), 1);
        }
        if (this.nodeMap[uniqueID]) {
            // Remove the node from the nodeMap
            delete this.nodeMap[uniqueID];
        }
    };
    /**
     * Searches the currentKeytip's children to exactly match a sequence. Will not match disabled nodes but
     * will match persisted nodes
     *
     * @param keySequence - string to match
     * @param currentKeytip - The keytip whose children will try to match
     * @returns The node that exactly matched the keySequence, or undefined if none matched
     */
    KeytipTree.prototype.getExactMatchedNode = function (keySequence, currentKeytip) {
        var _this = this;
        var possibleNodes = this.getNodes(currentKeytip.children);
        return Utilities_1.find(possibleNodes, function (node) {
            return _this._getNodeSequence(node) === keySequence && !node.disabled;
        });
    };
    /**
     * Searches the currentKeytip's children to find nodes that start with the given sequence. Will not match
     * disabled nodes but will match persisted nodes
     *
     * @param keySequence - string to partially match
     * @param currentKeytip - The keytip whose children will try to partially match
     * @returns List of tree nodes that partially match the given sequence
     */
    KeytipTree.prototype.getPartiallyMatchedNodes = function (keySequence, currentKeytip) {
        var _this = this;
        // Get children that are persisted
        var possibleNodes = this.getNodes(currentKeytip.children);
        return possibleNodes.filter(function (node) {
            return _this._getNodeSequence(node).indexOf(keySequence) === 0 && !node.disabled;
        });
    };
    /**
     * Get the non-persisted children of the give node
     * If no node is given, will use the 'currentKeytip'
     *
     * @param node - Node to get the children for
     * @returns List of node IDs that are the children of the node
     */
    KeytipTree.prototype.getChildren = function (node) {
        var _this = this;
        if (!node) {
            node = this.currentKeytip;
            if (!node) {
                return [];
            }
        }
        var children = node.children;
        return Object.keys(this.nodeMap).reduce(function (nodes, key) {
            if (children.indexOf(_this.nodeMap[key].id) >= 0 && !_this.nodeMap[key].persisted) {
                nodes.push(_this.nodeMap[key].id);
            }
            return nodes;
        }, []);
    };
    /**
     * Gets all nodes from their IDs
     *
     * @param ids - List of keytip IDs
     * @returns Array of nodes that match the given IDs, can be empty
     */
    KeytipTree.prototype.getNodes = function (ids) {
        var _this = this;
        return Object.keys(this.nodeMap).reduce(function (nodes, key) {
            if (ids.indexOf(_this.nodeMap[key].id) >= 0) {
                nodes.push(_this.nodeMap[key]);
            }
            return nodes;
        }, []);
    };
    /**
     * Gets a single node from its ID
     *
     * @param id - ID of the node to get
     * @returns Node with the given ID, if found
     */
    KeytipTree.prototype.getNode = function (id) {
        var nodeMapValues = Utilities_1.values(this.nodeMap);
        return Utilities_1.find(nodeMapValues, function (node) {
            return node.id === id;
        });
    };
    /**
     * Tests if the currentKeytip in this.keytipTree is the parent of 'keytipProps'
     *
     * @param keytipProps - Keytip to test the parent for
     * @returns T/F if the currentKeytip is this keytipProps' parent
     */
    KeytipTree.prototype.isCurrentKeytipParent = function (keytipProps) {
        if (this.currentKeytip) {
            var fullSequence = tslib_1.__spreadArrays(keytipProps.keySequences);
            if (keytipProps.overflowSetSequence) {
                fullSequence = KeytipUtils_1.mergeOverflows(fullSequence, keytipProps.overflowSetSequence);
            }
            // Take off the last sequence to calculate the parent ID
            fullSequence.pop();
            // Parent ID is the root if there aren't any more sequences
            var parentID = fullSequence.length === 0 ? this.root.id : KeytipUtils_1.sequencesToID(fullSequence);
            var matchesCurrWithoutOverflow = false;
            if (this.currentKeytip.overflowSetSequence) {
                var currKeytipIdWithoutOverflow = KeytipUtils_1.sequencesToID(this.currentKeytip.keySequences);
                matchesCurrWithoutOverflow = currKeytipIdWithoutOverflow === parentID;
            }
            return matchesCurrWithoutOverflow || this.currentKeytip.id === parentID;
        }
        return false;
    };
    KeytipTree.prototype._getParentID = function (fullSequence) {
        return fullSequence.length === 0 ? this.root.id : KeytipUtils_1.sequencesToID(fullSequence);
    };
    KeytipTree.prototype._getFullSequence = function (keytipProps) {
        var fullSequence = tslib_1.__spreadArrays(keytipProps.keySequences);
        if (keytipProps.overflowSetSequence) {
            fullSequence = KeytipUtils_1.mergeOverflows(fullSequence, keytipProps.overflowSetSequence);
        }
        return fullSequence;
    };
    KeytipTree.prototype._getNodeSequence = function (node) {
        var fullSequence = tslib_1.__spreadArrays(node.keySequences);
        if (node.overflowSetSequence) {
            fullSequence = KeytipUtils_1.mergeOverflows(fullSequence, node.overflowSetSequence);
        }
        return fullSequence[fullSequence.length - 1];
    };
    KeytipTree.prototype._createNode = function (id, parentId, children, keytipProps, persisted) {
        var _this = this;
        var keySequences = keytipProps.keySequences, hasDynamicChildren = keytipProps.hasDynamicChildren, overflowSetSequence = keytipProps.overflowSetSequence, hasMenu = keytipProps.hasMenu, onExecute = keytipProps.onExecute, onReturn = keytipProps.onReturn, disabled = keytipProps.disabled;
        var node = {
            id: id,
            keySequences: keySequences,
            overflowSetSequence: overflowSetSequence,
            parent: parentId,
            children: children,
            onExecute: onExecute,
            onReturn: onReturn,
            hasDynamicChildren: hasDynamicChildren,
            hasMenu: hasMenu,
            disabled: disabled,
            persisted: persisted,
        };
        node.children = Object.keys(this.nodeMap).reduce(function (array, nodeMapKey) {
            if (_this.nodeMap[nodeMapKey].parent === id) {
                array.push(_this.nodeMap[nodeMapKey].id);
            }
            return array;
        }, []);
        return node;
    };
    return KeytipTree;
}());
exports.KeytipTree = KeytipTree;
//# sourceMappingURL=KeytipTree.js.map