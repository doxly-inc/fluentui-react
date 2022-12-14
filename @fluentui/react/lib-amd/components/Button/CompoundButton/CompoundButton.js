define(["require", "exports", "tslib", "react", "../BaseButton", "../../../Utilities", "./CompoundButton.styles"], function (require, exports, tslib_1, React, BaseButton_1, Utilities_1, CompoundButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var CompoundButton = /** @class */ (function (_super) {
        tslib_1.__extends(CompoundButton, _super);
        function CompoundButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CompoundButton.prototype.render = function () {
            var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
            return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: primary ? 'ms-Button--compoundPrimary' : 'ms-Button--compound', styles: CompoundButton_styles_1.getStyles(theme, styles, primary) })));
        };
        CompoundButton = tslib_1.__decorate([
            Utilities_1.customizable('CompoundButton', ['theme', 'styles'], true)
        ], CompoundButton);
        return CompoundButton;
    }(React.Component));
    exports.CompoundButton = CompoundButton;
});
//# sourceMappingURL=CompoundButton.js.map