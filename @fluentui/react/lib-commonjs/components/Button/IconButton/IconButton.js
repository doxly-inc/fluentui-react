"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var BaseButton_1 = require("../BaseButton");
var Utilities_1 = require("../../../Utilities");
var IconButton_styles_1 = require("./IconButton.styles");
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
//# sourceMappingURL=IconButton.js.map