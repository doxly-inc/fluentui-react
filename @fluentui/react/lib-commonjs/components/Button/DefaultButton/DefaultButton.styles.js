"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
var BaseButton_styles_1 = require("../BaseButton.styles");
var SplitButton_styles_1 = require("../SplitButton/SplitButton.styles");
var ButtonThemes_1 = require("../ButtonThemes");
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
//# sourceMappingURL=DefaultButton.styles.js.map