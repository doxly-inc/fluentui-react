define(["require", "exports", "tslib", "react", "../DefaultButton/DefaultButton", "../../../Utilities", "./MessageBarButton.styles"], function (require, exports, tslib_1, React, DefaultButton_1, Utilities_1, MessageBarButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory MessageBar}
     */
    var MessageBarButton = /** @class */ (function (_super) {
        tslib_1.__extends(MessageBarButton, _super);
        function MessageBarButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MessageBarButton.prototype.render = function () {
            var _a = this.props, styles = _a.styles, theme = _a.theme;
            return React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { styles: MessageBarButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender }));
        };
        MessageBarButton = tslib_1.__decorate([
            Utilities_1.customizable('MessageBarButton', ['theme', 'styles'], true)
        ], MessageBarButton);
        return MessageBarButton;
    }(React.Component));
    exports.MessageBarButton = MessageBarButton;
});
//# sourceMappingURL=MessageBarButton.js.map