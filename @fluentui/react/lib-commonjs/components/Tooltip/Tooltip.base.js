"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Callout_1 = require("../../Callout");
var DirectionalHint_1 = require("../../common/DirectionalHint");
var getClassNames = Utilities_1.classNamesFunction();
var TooltipBase = /** @class */ (function (_super) {
    tslib_1.__extends(TooltipBase, _super);
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
        return (React.createElement(Callout_1.Callout, tslib_1.__assign({ target: targetElement, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL }, calloutProps, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties, ['id']), { className: this._classNames.root }),
            React.createElement("div", { className: this._classNames.content, id: id, role: "tooltip", onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave }, onRenderContent(this.props, this._onRenderContent))));
    };
    // Specify default props values
    TooltipBase.defaultProps = {
        directionalHint: DirectionalHint_1.DirectionalHint.topCenter,
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
exports.TooltipBase = TooltipBase;
//# sourceMappingURL=Tooltip.base.js.map