"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var CalloutContent_1 = require("./CalloutContent");
var Layer_1 = require("../../Layer");
exports.Callout = React.forwardRef(function (_a, forwardedRef) {
    var layerProps = _a.layerProps, doNotLayer = _a.doNotLayer, rest = tslib_1.__rest(_a, ["layerProps", "doNotLayer"]);
    var content = React.createElement(CalloutContent_1.CalloutContent, tslib_1.__assign({}, rest, { ref: forwardedRef }));
    return doNotLayer ? content : React.createElement(Layer_1.Layer, tslib_1.__assign({}, layerProps), content);
});
exports.Callout.displayName = 'Callout';
//# sourceMappingURL=Callout.js.map