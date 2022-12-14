import { __assign, __extends } from "tslib";
import * as React from 'react';
import { classNamesFunction, divProperties, getNativeProps } from '../../Utilities';
import { Callout } from '../../Callout';
import { DirectionalHint } from '../../common/DirectionalHint';
var getClassNames = classNamesFunction();
var TooltipBase = /** @class */ (function (_super) {
    __extends(TooltipBase, _super);
    function TooltipBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderContent = function (props) {
            return React.createElement("p", { className: _this._classNames.subText }, props.content);
        };
        return _this;
    }
    TooltipBase.prototype.render = function () {
        var _a = this.props, className = _a.className, calloutProps = _a.calloutProps, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, styles = _a.styles, id = _a.id, maxWidth = _a.maxWidth, _b = _a.onRenderContent, onRenderContent = _b === void 0 ? this._onRenderContent : _b, targetElement = _a.targetElement, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className || (calloutProps && calloutProps.className),
            beakWidth: calloutProps && calloutProps.beakWidth,
            gapSpace: calloutProps && calloutProps.gapSpace,
            maxWidth: maxWidth,
        });
        return (React.createElement(Callout, __assign({ target: targetElement, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL }, calloutProps, getNativeProps(this.props, divProperties, ['id']), { className: this._classNames.root }),
            React.createElement("div", { className: this._classNames.content, id: id, role: "tooltip", onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave }, onRenderContent(this.props, this._onRenderContent))));
    };
    // Specify default props values
    TooltipBase.defaultProps = {
        directionalHint: DirectionalHint.topCenter,
        maxWidth: '364px',
        calloutProps: {
            isBeakVisible: true,
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
        },
    };
    return TooltipBase;
}(React.Component));
export { TooltipBase };
//# sourceMappingURL=Tooltip.base.js.map