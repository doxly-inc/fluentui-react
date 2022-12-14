import { __assign, __rest } from "tslib";
import * as React from 'react';
import { CalloutContent } from './CalloutContent';
import { Layer } from '../../Layer';
export var Callout = React.forwardRef(function (_a, forwardedRef) {
    var layerProps = _a.layerProps, doNotLayer = _a.doNotLayer, rest = __rest(_a, ["layerProps", "doNotLayer"]);
    var content = React.createElement(CalloutContent, __assign({}, rest, { ref: forwardedRef }));
    return doNotLayer ? content : React.createElement(Layer, __assign({}, layerProps), content);
});
Callout.displayName = 'Callout';
//# sourceMappingURL=Callout.js.map