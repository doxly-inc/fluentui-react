import { __assign, __extends } from "tslib";
import * as React from 'react';
import { mergeOverflows, ktpTargetFromSequences } from '../../utilities/keytips/KeytipUtils';
import { Callout } from '../../Callout';
import { DirectionalHint } from '../../ContextualMenu';
import { KeytipContent } from './KeytipContent';
import { getCalloutStyles, getCalloutOffsetStyles } from './Keytip.styles';
/**
 * A callout corresponding to another Fabric component to describe a key sequence that will activate that component
 */
var Keytip = /** @class */ (function (_super) {
    __extends(Keytip, _super);
    function Keytip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keytip.prototype.render = function () {
        var _a = this.props, keySequences = _a.keySequences, offset = _a.offset, overflowSetSequence = _a.overflowSetSequence;
        var calloutProps = this.props.calloutProps;
        var keytipTarget;
        // Take into consideration the overflow sequence
        if (overflowSetSequence) {
            keytipTarget = ktpTargetFromSequences(mergeOverflows(keySequences, overflowSetSequence));
        }
        else {
            keytipTarget = ktpTargetFromSequences(keySequences);
        }
        if (offset) {
            // Set callout to top-left corner, will be further positioned in
            // getCalloutOffsetStyles
            calloutProps = __assign(__assign({}, calloutProps), { coverTarget: true, directionalHint: DirectionalHint.topLeftEdge });
        }
        if (!calloutProps || calloutProps.directionalHint === undefined) {
            // Default callout directional hint to BottomCenter
            calloutProps = __assign(__assign({}, calloutProps), { directionalHint: DirectionalHint.bottomCenter });
        }
        return (React.createElement(Callout, __assign({}, calloutProps, { isBeakVisible: false, doNotLayer: true, minPagePadding: 0, styles: offset ? getCalloutOffsetStyles(offset) : getCalloutStyles, preventDismissOnScroll: true, target: keytipTarget }),
            React.createElement(KeytipContent, __assign({}, this.props))));
    };
    return Keytip;
}(React.Component));
export { Keytip };
//# sourceMappingURL=Keytip.js.map