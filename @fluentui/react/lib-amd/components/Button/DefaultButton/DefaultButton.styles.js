define(["require", "exports", "../../../Styling", "../../../Utilities", "../BaseButton.styles", "../SplitButton/SplitButton.styles", "../ButtonThemes"], function (require, exports, Styling_1, Utilities_1, BaseButton_styles_1, SplitButton_styles_1, ButtonThemes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_BUTTON_HEIGHT = '32px';
    var DEFAULT_BUTTON_MIN_WIDTH = '80px';
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, primary) {
        var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
        var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
        var defaultButtonStyles = {
            root: {
                minWidth: DEFAULT_BUTTON_MIN_WIDTH,
                height: DEFAULT_BUTTON_HEIGHT,
            },
            label: {
                fontWeight: Styling_1.FontWeights.semibold,
            },
        };
        return Styling_1.concatStyleSets(baseButtonStyles, defaultButtonStyles, primary ? ButtonThemes_1.primaryStyles(theme) : ButtonThemes_1.standardStyles(theme), splitButtonStyles, customStyles);
    });
});
//# sourceMappingURL=DefaultButton.styles.js.map