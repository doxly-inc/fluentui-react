define(["require", "exports", "tslib", "react", "../BaseButton", "../../../Utilities", "./IconButton.styles"], function (require, exports, tslib_1, React, BaseButton_1, Utilities_1, IconButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var IconButton = /** @class */ (function (_super) {
        tslib_1.__extends(IconButton, _super);
        function IconButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IconButton.prototype.render = function () {
            var _a = this.props, styles = _a.styles, theme = _a.theme;
            return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: "ms-Button--icon", styles: IconButton_styles_1.getStyles(theme, styles), onRenderText: Utilities_1.nullRender, onRenderDescription: Utilities_1.nullRender })));
        };
        IconButton = tslib_1.__decorate([
            Utilities_1.customizable('IconButton', ['theme', 'styles'], true)
        ], IconButton);
        return IconButton;
    }(React.Component));
    exports.IconButton = IconButton;
});
//# sourceMappingURL=IconButton.js.map