define(["require", "exports", "tslib", "react", "../BaseButton", "../../../Utilities", "./CommandBarButton.styles"], function (require, exports, tslib_1, React, BaseButton_1, Utilities_1, CommandBarButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var CommandBarButton = /** @class */ (function (_super) {
        tslib_1.__extends(CommandBarButton, _super);
        function CommandBarButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandBarButton.prototype.render = function () {
            var _a = this.props, styles = _a.styles, theme = _a.theme;
            return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: "ms-Button--commandBar", styles: CommandBarButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
        };
        CommandBarButton = tslib_1.__decorate([
            Utilities_1.customizable('CommandBarButton', ['theme', 'styles'], true)
        ], CommandBarButton);
        return CommandBarButton;
    }(React.Component));
    exports.CommandBarButton = CommandBarButton;
});
//# sourceMappingURL=CommandBarButton.js.map