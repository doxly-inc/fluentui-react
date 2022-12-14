"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var KeytipUtils_1 = require("../../utilities/keytips/KeytipUtils");
var Callout_1 = require("../../Callout");
var ContextualMenu_1 = require("../../ContextualMenu");
var KeytipContent_1 = require("./KeytipContent");
var Keytip_styles_1 = require("./Keytip.styles");
/**
 * A callout corresponding to another Fabric component to describe a key sequence that will activate that component
 */
var Keytip = /** @class */ (function (_super) {
    tslib_1.__extends(Keytip, _super);
    function Keytip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keytip.prototype.render = function () {
        var _a = this.props, keySequences = _a.keySequences, offset = _a.offset, overflowSetSequence = _a.overflowSetSequence;
        var calloutProps = this.props.calloutProps;
        var keytipTarget;
        // Take into consideration the overflow sequence
        if (overflowSetSequence) {
            keytipTarget = KeytipUtils_1.ktpTargetFromSequences(KeytipUtils_1.mergeOverflows(keySequences, overflowSetSequence));
        }
        else {
            keytipTarget = KeytipUtils_1.ktpTargetFromSequences(keySequences);
        }
        if (offset) {
            // Set callout to top-left corner, will be further positioned in
            // getCalloutOffsetStyles
            calloutProps = tslib_1.__assign(tslib_1.__assign({}, calloutProps), { coverTarget: true, directionalHint: ContextualMenu_1.DirectionalHint.topLeftEdge });
        }
        if (!calloutProps || calloutProps.directionalHint === undefined) {
            // Default callout directional hint to BottomCenter
            calloutProps = tslib_1.__assign(tslib_1.__assign({}, calloutProps), { directionalHint: ContextualMenu_1.DirectionalHint.bottomCenter });
        }
        return (React.createElement(Callout_1.Callout, tslib_1.__assign({}, calloutProps, { isBeakVisible: false, doNotLayer: true, minPagePadding: 0, styles: offset ? Keytip_styles_1.getCalloutOffsetStyles(offset) : Keytip_styles_1.getCalloutStyles, preventDismissOnScroll: true, target: keytipTarget }),
            React.createElement(KeytipContent_1.KeytipContent, tslib_1.__assign({}, this.props))));
    };
    return Keytip;
}(React.Component));
exports.Keytip = Keytip;
//# sourceMappingURL=Keytip.js.map