define(["require", "exports", "tslib", "../../Styling", "../../Utilities"], function (require, exports, tslib_1, Styling_1, Utilities_1) {
    "use strict";
    var _a, _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComboBoxHeight = 32;
    var ComboBoxLineHeight = 30;
    var ComboBoxCaretDownWidth = 32;
    var ComboBoxOptionHeight = 36;
    var getDisabledStyles = Utilities_1.memoizeFunction(function (theme) {
        var _a;
        var semanticColors = theme.semanticColors;
        return {
            backgroundColor: semanticColors.disabledBackground,
            color: semanticColors.disabledText,
            cursor: 'default',
            selectors: (_a = {
                    ':after': {
                        borderColor: semanticColors.disabledBackground,
                    }
                },
                _a[Styling_1.HighContrastSelector] = {
                    color: 'GrayText',
                    selectors: {
                        ':after': {
                            borderColor: 'GrayText',
                        },
                    },
                },
                _a),
        };
    });
    var listOptionHighContrastStyles = {
        selectors: (_a = {},
            _a[Styling_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'Highlight', borderColor: 'Highlight', color: 'HighlightText' }, Styling_1.getHighContrastNoAdjustStyle()),
            _a),
    };
    var inputHighContrastStyles = {
        selectors: (_b = {},
            _b[Styling_1.HighContrastSelector] = tslib_1.__assign({ color: 'WindowText', backgroundColor: 'Window' }, Styling_1.getHighContrastNoAdjustStyle()),
            _b),
    };
    exports.getOptionStyles = Utilities_1.memoizeFunction(function (theme, customStylesForAllOptions, customOptionStylesForCurrentOption, isPending, isHidden) {
        var _a;
        var palette = theme.palette, semanticColors = theme.semanticColors;
        var option = {
            textHoveredColor: semanticColors.menuItemTextHovered,
            textSelectedColor: palette.neutralDark,
            textDisabledColor: semanticColors.disabledText,
            backgroundHoveredColor: semanticColors.menuItemBackgroundHovered,
            backgroundPressedColor: semanticColors.menuItemBackgroundPressed,
        };
        var optionStyles = {
            root: [
                theme.fonts.medium,
                {
                    backgroundColor: isPending ? option.backgroundHoveredColor : 'transparent',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    display: isHidden ? 'none' : 'block',
                    width: '100%',
                    height: 'auto',
                    minHeight: ComboBoxOptionHeight,
                    lineHeight: '20px',
                    padding: '0 8px',
                    position: 'relative',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    borderRadius: 0,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    textAlign: 'left',
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            border: 'none',
                            borderColor: 'Background',
                        },
                        _a['&.ms-Checkbox'] = {
                            display: 'flex',
                            alignItems: 'center',
                        },
                        _a['&.ms-Button--command:hover:active'] = {
                            backgroundColor: option.backgroundPressedColor,
                        },
                        _a['.ms-Checkbox-label'] = {
                            width: '100%',
                        },
                        _a),
                },
            ],
            rootHovered: {
                backgroundColor: option.backgroundHoveredColor,
                color: option.textHoveredColor,
            },
            rootFocused: {
                backgroundColor: option.backgroundHoveredColor,
            },
            rootChecked: [
                {
                    backgroundColor: 'transparent',
                    color: option.textSelectedColor,
                    selectors: {
                        ':hover': [
                            {
                                backgroundColor: option.backgroundHoveredColor,
                            },
                            listOptionHighContrastStyles,
                        ],
                    },
                },
                Styling_1.getFocusStyle(theme, { inset: -1, isFocusedOnly: false }),
                listOptionHighContrastStyles,
            ],
            rootDisabled: {
                color: option.textDisabledColor,
                cursor: 'default',
            },
            optionText: {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                minWidth: '0px',
                maxWidth: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                display: 'inline-block',
            },
            optionTextWrapper: {
                maxWidth: '100%',
                display: 'flex',
                alignItems: 'center',
            },
        };
        return Styling_1.concatStyleSets(optionStyles, customStylesForAllOptions, customOptionStylesForCurrentOption);
    });
    exports.getCaretDownButtonStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
        var _a, _b;
        var semanticColors = theme.semanticColors, fonts = theme.fonts;
        var caret = {
            buttonTextColor: semanticColors.bodySubtext,
            buttonTextHoveredCheckedColor: semanticColors.buttonTextChecked,
            buttonBackgroundHoveredColor: semanticColors.listItemBackgroundHovered,
            buttonBackgroundCheckedColor: semanticColors.listItemBackgroundChecked,
            buttonBackgroundCheckedHoveredColor: semanticColors.listItemBackgroundCheckedHovered,
        };
        var buttonHighContrastStyles = {
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'Highlight', borderColor: 'Highlight', color: 'HighlightText' }, Styling_1.getHighContrastNoAdjustStyle()),
                _a),
        };
        var styles = {
            root: {
                color: caret.buttonTextColor,
                fontSize: fonts.small.fontSize,
                position: 'absolute',
                top: 0,
                height: '100%',
                lineHeight: ComboBoxLineHeight,
                width: ComboBoxCaretDownWidth,
                textAlign: 'center',
                cursor: 'default',
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'ButtonFace', borderColor: 'ButtonText', color: 'ButtonText' }, Styling_1.getHighContrastNoAdjustStyle()),
                    _b),
            },
            icon: {
                fontSize: fonts.small.fontSize,
            },
            rootHovered: [
                {
                    backgroundColor: caret.buttonBackgroundHoveredColor,
                    color: caret.buttonTextHoveredCheckedColor,
                    cursor: 'pointer',
                },
                buttonHighContrastStyles,
            ],
            rootPressed: [
                {
                    backgroundColor: caret.buttonBackgroundCheckedColor,
                    color: caret.buttonTextHoveredCheckedColor,
                },
                buttonHighContrastStyles,
            ],
            rootChecked: [
                {
                    backgroundColor: caret.buttonBackgroundCheckedColor,
                    color: caret.buttonTextHoveredCheckedColor,
                },
                buttonHighContrastStyles,
            ],
            rootCheckedHovered: [
                {
                    backgroundColor: caret.buttonBackgroundCheckedHoveredColor,
                    color: caret.buttonTextHoveredCheckedColor,
                },
                buttonHighContrastStyles,
            ],
            rootDisabled: [
                getDisabledStyles(theme),
                {
                    position: 'absolute',
                },
            ],
        };
        return Styling_1.concatStyleSets(styles, customStyles);
    });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, comboBoxOptionWidth) {
        var _a, _b, _c, _d, _e, _f;
        var semanticColors = theme.semanticColors, fonts = theme.fonts, effects = theme.effects;
        var root = {
            textColor: semanticColors.inputText,
            borderColor: semanticColors.inputBorder,
            borderHoveredColor: semanticColors.inputBorderHovered,
            borderPressedColor: semanticColors.inputFocusBorderAlt,
            borderFocusedColor: semanticColors.inputFocusBorderAlt,
            backgroundColor: semanticColors.inputBackground,
            erroredColor: semanticColors.errorText,
        };
        var option = {
            headerTextColor: semanticColors.menuHeader,
            dividerBorderColor: semanticColors.bodyDivider,
        };
        // placeholder style variables
        var placeholderHighContrastStyles = {
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'GrayText',
                },
                _a),
        };
        var placeholderStyles = [
            {
                color: semanticColors.inputPlaceholderText,
            },
            placeholderHighContrastStyles,
        ];
        var placeholderStylesHovered = [
            {
                color: semanticColors.inputTextHovered,
            },
            placeholderHighContrastStyles,
        ];
        var disabledPlaceholderStyles = [
            {
                color: semanticColors.disabledText,
            },
            placeholderHighContrastStyles,
        ];
        var ComboBoxRootHighContrastFocused = tslib_1.__assign(tslib_1.__assign({ color: 'HighlightText', backgroundColor: 'Window' }, Styling_1.getHighContrastNoAdjustStyle()), { selectors: {
                ':after': {
                    borderColor: 'Highlight',
                },
            } });
        var focusBorderStyles = Styling_1.getInputFocusStyle(root.borderPressedColor, effects.roundedCorner2, 'border', 0);
        var styles = {
            container: {},
            label: {},
            labelDisabled: {},
            root: [
                theme.fonts.medium,
                {
                    boxShadow: 'none',
                    marginLeft: '0',
                    paddingRight: ComboBoxCaretDownWidth,
                    paddingLeft: 9,
                    color: root.textColor,
                    position: 'relative',
                    outline: '0',
                    userSelect: 'none',
                    backgroundColor: root.backgroundColor,
                    cursor: 'text',
                    display: 'block',
                    height: ComboBoxHeight,
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    boxSizing: 'border-box',
                    selectors: {
                        '.ms-Label': {
                            display: 'inline-block',
                            marginBottom: '8px',
                        },
                        '&.is-open': {
                            selectors: (_b = {},
                                _b[Styling_1.HighContrastSelector] = ComboBoxRootHighContrastFocused,
                                _b),
                        },
                        // setting border using pseudo-element here in order to
                        // prevent chevron button to overlap ComboBox border under certain resolutions
                        ':after': {
                            pointerEvents: 'none',
                            content: "''",
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            right: 0,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: root.borderColor,
                            borderRadius: effects.roundedCorner2,
                        },
                    },
                },
            ],
            rootHovered: {
                selectors: (_c = {
                        ':after': {
                            borderColor: root.borderHoveredColor,
                        },
                        '.ms-ComboBox-Input': [
                            {
                                color: semanticColors.inputTextHovered,
                            },
                            Styling_1.getPlaceholderStyles(placeholderStylesHovered),
                            inputHighContrastStyles,
                        ]
                    },
                    _c[Styling_1.HighContrastSelector] = tslib_1.__assign(tslib_1.__assign({ color: 'HighlightText', backgroundColor: 'Window' }, Styling_1.getHighContrastNoAdjustStyle()), { selectors: {
                            ':after': {
                                borderColor: 'Highlight',
                            },
                        } }),
                    _c),
            },
            rootPressed: [
                {
                    position: 'relative',
                    selectors: (_d = {},
                        _d[Styling_1.HighContrastSelector] = ComboBoxRootHighContrastFocused,
                        _d),
                },
            ],
            rootFocused: [
                {
                    selectors: (_e = {
                            '.ms-ComboBox-Input': [
                                {
                                    color: semanticColors.inputTextHovered,
                                },
                                inputHighContrastStyles,
                            ]
                        },
                        _e[Styling_1.HighContrastSelector] = ComboBoxRootHighContrastFocused,
                        _e),
                },
                focusBorderStyles,
            ],
            rootDisabled: getDisabledStyles(theme),
            rootError: {
                selectors: {
                    ':after': {
                        borderColor: root.erroredColor,
                    },
                    ':hover:after': {
                        borderColor: semanticColors.inputBorderHovered,
                    },
                },
            },
            rootDisallowFreeForm: {},
            input: [
                Styling_1.getPlaceholderStyles(placeholderStyles),
                {
                    backgroundColor: root.backgroundColor,
                    color: root.textColor,
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%',
                    borderStyle: 'none',
                    outline: 'none',
                    font: 'inherit',
                    textOverflow: 'ellipsis',
                    padding: '0',
                    selectors: {
                        '::-ms-clear': {
                            display: 'none',
                        },
                    },
                },
                inputHighContrastStyles,
            ],
            inputDisabled: [getDisabledStyles(theme), Styling_1.getPlaceholderStyles(disabledPlaceholderStyles)],
            errorMessage: [
                theme.fonts.small,
                {
                    color: root.erroredColor,
                    marginTop: '5px',
                },
            ],
            callout: {
                boxShadow: effects.elevation8,
            },
            optionsContainerWrapper: {
                width: comboBoxOptionWidth,
            },
            optionsContainer: {
                display: 'block',
            },
            screenReaderText: Styling_1.hiddenContentStyle,
            header: [
                fonts.medium,
                {
                    fontWeight: Styling_1.FontWeights.semibold,
                    color: option.headerTextColor,
                    backgroundColor: 'none',
                    borderStyle: 'none',
                    height: ComboBoxOptionHeight,
                    lineHeight: ComboBoxOptionHeight,
                    cursor: 'default',
                    padding: '0 8px',
                    userSelect: 'none',
                    textAlign: 'left',
                    selectors: (_f = {},
                        _f[Styling_1.HighContrastSelector] = tslib_1.__assign({ color: 'GrayText' }, Styling_1.getHighContrastNoAdjustStyle()),
                        _f),
                },
            ],
            divider: {
                height: 1,
                backgroundColor: option.dividerBorderColor,
            },
        };
        return Styling_1.concatStyleSets(styles, customStyles);
    });
});
//# sourceMappingURL=ComboBox.styles.js.map