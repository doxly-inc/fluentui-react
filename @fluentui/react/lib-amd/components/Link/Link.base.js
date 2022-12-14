define(["require", "exports", "tslib", "react", "./useLink"], function (require, exports, tslib_1, React, useLink_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkBase = React.forwardRef(function (props, ref) {
        var _a = useLink_1.useLink(props, ref), slots = _a.slots, slotProps = _a.slotProps;
        return React.createElement(slots.root, tslib_1.__assign({}, slotProps.root));
    });
    exports.LinkBase.displayName = 'LinkBase';
});
//# sourceMappingURL=Link.base.js.map