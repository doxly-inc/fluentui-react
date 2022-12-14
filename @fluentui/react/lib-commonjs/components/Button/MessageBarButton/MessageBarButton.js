"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DefaultButton_1 = require("../DefaultButton/DefaultButton");
var Utilities_1 = require("../../../Utilities");
var MessageBarButton_styles_1 = require("./MessageBarButton.styles");
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
//# sourceMappingURL=MessageBarButton.js.map