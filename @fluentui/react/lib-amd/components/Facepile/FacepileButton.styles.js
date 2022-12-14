define(["require", "exports", "tslib", "../../Styling", "../../Utilities", "../Button/BaseButton.styles"], function (require, exports, tslib_1, Styling_1, Utilities_1, BaseButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, className, customStyles) {
        var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
        var customButtonStyles = Styling_1.concatStyleSets(baseButtonStyles, customStyles);
        return tslib_1.__assign(tslib_1.__assign({}, customButtonStyles), { root: [baseButtonStyles.root, className, theme.fonts.medium, customStyles && customStyles.root] });
    });
});
//# sourceMappingURL=FacepileButton.styles.js.map