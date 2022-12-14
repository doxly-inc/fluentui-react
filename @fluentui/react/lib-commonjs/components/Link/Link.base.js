"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var useLink_1 = require("./useLink");
exports.LinkBase = React.forwardRef(function (props, ref) {
    var _a = useLink_1.useLink(props, ref), slots = _a.slots, slotProps = _a.slotProps;
    return React.createElement(slots.root, tslib_1.__assign({}, slotProps.root));
});
exports.LinkBase.displayName = 'LinkBase';
//# sourceMappingURL=Link.base.js.map