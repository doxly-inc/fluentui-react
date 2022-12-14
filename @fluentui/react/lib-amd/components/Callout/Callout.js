define(["require", "exports", "tslib", "react", "./CalloutContent", "../../Layer"], function (require, exports, tslib_1, React, CalloutContent_1, Layer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Callout = React.forwardRef(function (_a, forwardedRef) {
        var layerProps = _a.layerProps, doNotLayer = _a.doNotLayer, rest = tslib_1.__rest(_a, ["layerProps", "doNotLayer"]);
        var content = React.createElement(CalloutContent_1.CalloutContent, tslib_1.__assign({}, rest, { ref: forwardedRef }));
        return doNotLayer ? content : React.createElement(Layer_1.Layer, tslib_1.__assign({}, layerProps), content);
    });
    exports.Callout.displayName = 'Callout';
});
//# sourceMappingURL=Callout.js.map