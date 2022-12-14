"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
var OverlayBase = /** @class */ (function (_super) {
    tslib_1.__extends(OverlayBase, _super);
    function OverlayBase(props) {
        var _this = _super.call(this, props) || this;
        Utilities_1.initializeComponentRef(_this);
        var _a = _this.props.allowTouchBodyScroll, allowTouchBodyScroll = _a === void 0 ? false : _a;
        _this._allowTouchBodyScroll = allowTouchBodyScroll;
        return _this;
    }
    OverlayBase.prototype.componentDidMount = function () {
        !this._allowTouchBodyScroll && Utilities_1.disableBodyScroll();
    };
    OverlayBase.prototype.componentWillUnmount = function () {
        !this._allowTouchBodyScroll && Utilities_1.enableBodyScroll();
    };
    OverlayBase.prototype.render = function () {
        var _a = this.props, isDark = _a.isDarkThemed, className = _a.className, theme = _a.theme, styles = _a.styles;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isDark: isDark,
        });
        return React.createElement("div", tslib_1.__assign({}, divProps, { className: classNames.root }));
    };
    return OverlayBase;
}(React.Component));
exports.OverlayBase = OverlayBase;
//# sourceMappingURL=Overlay.base.js.map