"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
var BaseButton_styles_1 = require("../BaseButton.styles");
var SplitButton_styles_1 = require("../SplitButton/SplitButton.styles");
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var _a;
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            color: semanticColors.link,
        },
        rootHovered: {
            color: palette.themeDarkAlt,
            backgroundColor: palette.neutralLighter,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    borderColor: 'Highlight',
                    color: 'Highlight',
                },
                _a),
        },
        rootHasMenu: {
            width: 'auto',
        },
        rootPressed: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootExpanded: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootChecked: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootCheckedHovered: {
            color: palette.themeDark,
            backgroundColor: palette.neutralQuaternaryAlt,
        },
        rootDisabled: {
            color: palette.neutralTertiaryAlt,
        },
    };
    return Styling_1.concatStyleSets(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
});
//# sourceMappingURL=IconButton.styles.js.map