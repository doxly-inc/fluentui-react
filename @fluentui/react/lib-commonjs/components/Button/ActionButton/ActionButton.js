"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var BaseButton_1 = require("../BaseButton");
var Utilities_1 = require("../../../Utilities");
var ActionButton_styles_1 = require("./ActionButton.styles");
/**
 * {@docCategory Button}
 */
var ActionButton = /** @class */ (function (_super) {
    tslib_1.__extends(ActionButton, _super);
    function ActionButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: "ms-Button--action ms-Button--command", styles: ActionButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    ActionButton = tslib_1.__decorate([
        Utilities_1.customizable('ActionButton', ['theme', 'styles'], true)
    ], ActionButton);
    return ActionButton;
}(React.Component));
exports.ActionButton = ActionButton;
//# sourceMappingURL=ActionButton.js.map