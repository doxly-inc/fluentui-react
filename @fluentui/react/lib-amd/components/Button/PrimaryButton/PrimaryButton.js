define(["require", "exports", "tslib", "react", "../../../Utilities", "../DefaultButton/DefaultButton"], function (require, exports, tslib_1, React, Utilities_1, DefaultButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var PrimaryButton = /** @class */ (function (_super) {
        tslib_1.__extends(PrimaryButton, _super);
        function PrimaryButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PrimaryButton.prototype.render = function () {
            return React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { primary: true, onRenderDescription: Utilities_1.nullRender }));
        };
        PrimaryButton = tslib_1.__decorate([
            Utilities_1.customizable('PrimaryButton', ['theme', 'styles'], true)
        ], PrimaryButton);
        return PrimaryButton;
    }(React.Component));
    exports.PrimaryButton = PrimaryButton;
});
//# sourceMappingURL=PrimaryButton.js.map