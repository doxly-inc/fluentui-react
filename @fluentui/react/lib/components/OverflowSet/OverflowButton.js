import { __assign } from "tslib";
import * as React from 'react';
import { KeytipManager } from '../../utilities/keytips/KeytipManager';
import { useConst } from '@fluentui/react-hooks';
var useKeytipRegistrations = function (persistedKeytips, keytipManager) {
    React.useEffect(function () {
        Object.keys(persistedKeytips).forEach(function (keytipId) {
            var keytip = persistedKeytips[keytipId];
            var uniqueID = keytipManager.register(keytip, true);
            // Update map
            persistedKeytips[uniqueID] = keytip;
            delete persistedKeytips[keytipId];
        });
        return function () {
            // Delete all persisted keytips saved
            Object.keys(persistedKeytips).forEach(function (uniqueID) {
                keytipManager.unregister(persistedKeytips[uniqueID], uniqueID, true);
                delete persistedKeytips[uniqueID];
            });
        };
    }, [persistedKeytips, keytipManager]);
};
export var OverflowButton = function (props) {
    var keytipManager = KeytipManager.getInstance();
    var className = props.className, overflowItems = props.overflowItems, keytipSequences = props.keytipSequences, itemSubMenuProvider = props.itemSubMenuProvider, onRenderOverflowButton = props.onRenderOverflowButton;
    var persistedKeytips = useConst({});
    // Gets the subMenu for an overflow item
    var getSubMenuForItem = React.useCallback(function (item) {
        // Checks if itemSubMenuProvider has been defined, if not defaults to subMenuProps
        if (itemSubMenuProvider) {
            return itemSubMenuProvider(item);
        }
        if (item.subMenuProps) {
            return item.subMenuProps.items;
        }
        return undefined;
    }, [itemSubMenuProvider]);
    var newOverflowItems = React.useMemo(function () {
        var _a;
        var currentOverflowItems = [];
        if (keytipSequences) {
            (_a = overflowItems) === null || _a === void 0 ? void 0 : _a.forEach(function (overflowItem) {
                var _a, _b, _c, _d;
                var keytip = overflowItem.keytipProps;
                if (keytip) {
                    // Create persisted keytip
                    var persistedKeytip = {
                        content: keytip.content,
                        keySequences: keytip.keySequences,
                        disabled: keytip.disabled || !!(overflowItem.disabled || overflowItem.isDisabled),
                        hasDynamicChildren: keytip.hasDynamicChildren,
                        hasMenu: keytip.hasMenu,
                    };
                    if (keytip.hasDynamicChildren || getSubMenuForItem(overflowItem)) {
                        // If the keytip has a submenu or children nodes, change onExecute to persistedKeytipExecute
                        persistedKeytip.onExecute = keytipManager.menuExecute.bind(keytipManager, keytipSequences, (_b = (_a = overflowItem) === null || _a === void 0 ? void 0 : _a.keytipProps) === null || _b === void 0 ? void 0 : _b.keySequences);
                    }
                    else {
                        // If the keytip doesn't have a submenu, just execute the original function
                        persistedKeytip.onExecute = keytip.onExecute;
                    }
                    // Add this persisted keytip to our internal list, use a temporary uniqueID (its content)
                    // uniqueID will get updated on register
                    persistedKeytips[persistedKeytip.content] = persistedKeytip;
                    // Add the overflow sequence to this item
                    var newOverflowItem = __assign(__assign({}, overflowItem), { keytipProps: __assign(__assign({}, keytip), { overflowSetSequence: keytipSequences }) });
                    (_c = currentOverflowItems) === null || _c === void 0 ? void 0 : _c.push(newOverflowItem);
                }
                else {
                    // Nothing to change, add overflowItem to list
                    (_d = currentOverflowItems) === null || _d === void 0 ? void 0 : _d.push(overflowItem);
                }
            });
        }
        else {
            currentOverflowItems = overflowItems;
        }
        return currentOverflowItems;
    }, [overflowItems, getSubMenuForItem, keytipManager, keytipSequences, persistedKeytips]);
    useKeytipRegistrations(persistedKeytips, keytipManager);
    return React.createElement("div", { className: className }, onRenderOverflowButton(newOverflowItems));
};
//# sourceMappingURL=OverflowButton.js.map