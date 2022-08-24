"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
var BaseButton_styles_1 = require("../BaseButton.styles");
var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var _a, _b, _c;
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var actionButtonStyles = {
        root: {
            padding: DEFAULT_PADDING,
            height: DEFAULT_BUTTON_HEIGHT,
            color: theme.palette.neutralPrimary,
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    borderColor: 'Window',
                },
                _a),
        },
        rootHovered: {
            color: theme.palette.themePrimary,
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    color: 'Highlight',
                },
                _b),
        },
        iconHovered: {
            color: theme.palette.themePrimary,
        },
        rootPressed: {
            color: theme.palette.black,
        },
        rootExpanded: {
            color: theme.palette.themePrimary,
        },
        iconPressed: {
            color: theme.palette.themeDarker,
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            selectors: (_c = {},
                _c[Styling_1.HighContrastSelector] = {
                    color: 'GrayText',
                },
                _c),
        },
        rootChecked: {
            color: theme.palette.black,
        },
        iconChecked: {
            color: theme.palette.themeDarker,
        },
        flexContainer: {
            justifyContent: 'flex-start',
        },
        icon: {
            color: theme.palette.themeDarkAlt,
        },
        iconDisabled: {
            color: 'inherit',
        },
        menuIcon: {
            color: theme.palette.neutralSecondary,
        },
        textContainer: {
            flexGrow: 0,
        },
    };
    return Styling_1.concatStyleSets(baseButtonStyles, actionButtonStyles, customStyles);
});
//# sourceMappingURL=ActionButton.styles.js.map