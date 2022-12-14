"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var DirectionalHint_1 = require("../../../common/DirectionalHint");
var Callout_1 = require("../../../Callout");
exports.CardCallout = function (props) {
    var _a = props.gapSpace, gapSpace = _a === void 0 ? 0 : _a, _b = props.directionalHint, directionalHint = _b === void 0 ? DirectionalHint_1.DirectionalHint.bottomLeftEdge : _b, directionalHintFixed = props.directionalHintFixed, targetElement = props.targetElement, firstFocus = props.firstFocus, trapFocus = props.trapFocus, onLeave = props.onLeave, className = props.className, finalHeight = props.finalHeight, content = props.content, calloutProps = props.calloutProps;
    var mergedCalloutProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, Utilities_1.getNativeProps(props, Utilities_1.divProperties)), { className: className, target: targetElement, isBeakVisible: false, directionalHint: directionalHint, directionalHintFixed: directionalHintFixed, finalHeight: finalHeight, minPagePadding: 24, onDismiss: onLeave, gapSpace: gapSpace }), calloutProps);
    return (React.createElement(React.Fragment, null, trapFocus ? (React.createElement(Callout_1.FocusTrapCallout, tslib_1.__assign({}, mergedCalloutProps, { focusTrapProps: {
            forceFocusInsideTrap: false,
            isClickableOutsideFocusTrap: true,
            disableFirstFocus: !firstFocus,
        } }), content)) : (React.createElement(Callout_1.Callout, tslib_1.__assign({}, mergedCalloutProps), content))));
};
//# sourceMappingURL=CardCallout.js.map