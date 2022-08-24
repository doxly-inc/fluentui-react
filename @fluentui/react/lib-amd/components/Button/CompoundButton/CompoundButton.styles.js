define(["require", "exports", "tslib", "../../../Styling", "../../../Utilities", "../BaseButton.styles", "../SplitButton/SplitButton.styles", "../ButtonThemes"], function (require, exports, tslib_1, Styling_1, Utilities_1, BaseButton_styles_1, SplitButton_styles_1, ButtonThemes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, primary) {
        var _a, _b, _c, _d, _e;
        var fonts = theme.fonts, palette = theme.palette;
        var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
        var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
        var compoundButtonStyles = {
            root: {
                maxWidth: '280px',
                minHeight: '72px',
                height: 'auto',
                padding: '16px 12px',
            },
            flexContainer: {
                flexDirection: 'row',
                alignItems: 'flex-start',
                minWidth: '100%',
                margin: '',
            },
            textContainer: {
                textAlign: 'left',
            },
            icon: {
                fontSize: '2em',
                lineHeight: '1em',
                height: '1em',
                margin: '0px 8px 0px 0px',
                flexBasis: '1em',
                flexShrink: '0',
            },
            label: {
                margin: '0 0 5px',
                lineHeight: '100%',
                fontWeight: Styling_1.FontWeights.semibold,
            },
            description: [
                fonts.small,
                {
                    lineHeight: '100%',
                },
            ],
        };
        var standardCompoundTheme = {
            description: {
                color: palette.neutralSecondary,
            },
            descriptionHovered: {
                color: palette.neutralDark,
            },
            descriptionPressed: {
                color: 'inherit',
            },
            descriptionChecked: {
                color: 'inherit',
            },
            descriptionDisabled: {
                color: 'inherit',
            },
        };
        var primaryCompoundTheme = {
            description: {
                color: palette.white,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'WindowText', color: 'Window' }, Styling_1.getHighContrastNoAdjustStyle()),
                    _a),
            },
            descriptionHovered: {
                color: palette.white,
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = {
                        backgroundColor: 'Highlight',
                        color: 'Window',
                    },
                    _b),
            },
            descriptionPressed: {
                color: 'inherit',
                selectors: (_c = {},
                    _c[Styling_1.HighContrastSelector] = tslib_1.__assign({ color: 'Window', backgroundColor: 'WindowText' }, Styling_1.getHighContrastNoAdjustStyle()),
                    _c),
            },
            descriptionChecked: {
                color: 'inherit',
                selectors: (_d = {},
                    _d[Styling_1.HighContrastSelector] = tslib_1.__assign({ color: 'Window', backgroundColor: 'WindowText' }, Styling_1.getHighContrastNoAdjustStyle()),
                    _d),
            },
            descriptionDisabled: {
                color: 'inherit',
                selectors: (_e = {},
                    _e[Styling_1.HighContrastSelector] = {
                        color: 'inherit',
                    },
                    _e),
            },
        };
        return Styling_1.concatStyleSets(baseButtonStyles, compoundButtonStyles, primary ? ButtonThemes_1.primaryStyles(theme) : ButtonThemes_1.standardStyles(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
    });
});
//# sourceMappingURL=CompoundButton.styles.js.map