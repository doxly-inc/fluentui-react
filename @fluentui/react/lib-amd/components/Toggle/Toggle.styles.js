define(["require", "exports", "tslib", "@fluentui/style-utilities"], function (require, exports, tslib_1, style_utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_PILL_WIDTH = 40;
    var DEFAULT_PILL_HEIGHT = 20;
    var DEFAULT_THUMB_SIZE = 12;
    exports.getStyles = function (props) {
        var _a, _b, _c, _d, _e, _f, _g;
        var theme = props.theme, className = props.className, disabled = props.disabled, checked = props.checked, inlineLabel = props.inlineLabel, onOffMissing = props.onOffMissing;
        var semanticColors = theme.semanticColors, palette = theme.palette;
        // Tokens
        var pillUncheckedBackground = semanticColors.bodyBackground;
        var pillCheckedBackground = semanticColors.inputBackgroundChecked;
        var pillCheckedHoveredBackground = semanticColors.inputBackgroundCheckedHovered;
        var thumbUncheckedHoveredBackground = palette.neutralDark;
        var pillCheckedDisabledBackground = semanticColors.disabledBodySubtext;
        var thumbBackground = semanticColors.smallInputBorder;
        var thumbCheckedBackground = semanticColors.inputForegroundChecked;
        var thumbDisabledBackground = semanticColors.disabledBodySubtext;
        var thumbCheckedDisabledBackground = semanticColors.disabledBackground;
        var pillBorderColor = semanticColors.smallInputBorder;
        var pillBorderHoveredColor = semanticColors.inputBorderHovered;
        var pillBorderDisabledColor = semanticColors.disabledBodySubtext;
        var textDisabledColor = semanticColors.disabledText;
        return {
            root: [
                'ms-Toggle',
                checked && 'is-checked',
                !disabled && 'is-enabled',
                disabled && 'is-disabled',
                theme.fonts.medium,
                {
                    marginBottom: '8px',
                },
                inlineLabel && {
                    display: 'flex',
                    alignItems: 'center',
                },
                className,
            ],
            label: [
                'ms-Toggle-label',
                { display: 'inline-block' },
                disabled && {
                    color: textDisabledColor,
                    selectors: (_a = {},
                        _a[style_utilities_1.HighContrastSelector] = {
                            color: 'GrayText',
                        },
                        _a),
                },
                inlineLabel &&
                    !onOffMissing && {
                    marginRight: 16,
                },
                onOffMissing &&
                    inlineLabel && {
                    order: 1,
                    marginLeft: 16,
                },
                inlineLabel && { wordBreak: 'break-all' },
            ],
            container: [
                'ms-Toggle-innerContainer',
                {
                    display: 'flex',
                    position: 'relative',
                },
            ],
            pill: [
                'ms-Toggle-background',
                style_utilities_1.getFocusStyle(theme, { inset: -3 }),
                {
                    fontSize: '20px',
                    boxSizing: 'border-box',
                    width: DEFAULT_PILL_WIDTH,
                    height: DEFAULT_PILL_HEIGHT,
                    borderRadius: DEFAULT_PILL_HEIGHT / 2,
                    transition: 'all 0.1s ease',
                    border: "1px solid " + pillBorderColor,
                    background: pillUncheckedBackground,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 3px',
                },
                !disabled && [
                    !checked && {
                        selectors: {
                            ':hover': [
                                {
                                    borderColor: pillBorderHoveredColor,
                                },
                            ],
                            ':hover .ms-Toggle-thumb': [
                                {
                                    backgroundColor: thumbUncheckedHoveredBackground,
                                    selectors: (_b = {},
                                        _b[style_utilities_1.HighContrastSelector] = {
                                            borderColor: 'Highlight',
                                        },
                                        _b),
                                },
                            ],
                        },
                    },
                    checked && [
                        {
                            background: pillCheckedBackground,
                            borderColor: 'transparent',
                            justifyContent: 'flex-end',
                        },
                        {
                            selectors: (_c = {
                                    ':hover': [
                                        {
                                            backgroundColor: pillCheckedHoveredBackground,
                                            borderColor: 'transparent',
                                            selectors: (_d = {},
                                                _d[style_utilities_1.HighContrastSelector] = {
                                                    backgroundColor: 'Highlight',
                                                },
                                                _d),
                                        },
                                    ]
                                },
                                _c[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'Highlight' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                                _c),
                        },
                    ],
                ],
                disabled && [
                    {
                        cursor: 'default',
                    },
                    !checked && [
                        {
                            borderColor: pillBorderDisabledColor,
                        },
                    ],
                    checked && [
                        {
                            backgroundColor: pillCheckedDisabledBackground,
                            borderColor: 'transparent',
                            justifyContent: 'flex-end',
                        },
                    ],
                ],
                !disabled && {
                    selectors: {
                        '&:hover': {
                            selectors: (_e = {},
                                _e[style_utilities_1.HighContrastSelector] = {
                                    borderColor: 'Highlight',
                                },
                                _e),
                        },
                    },
                },
            ],
            thumb: [
                'ms-Toggle-thumb',
                {
                    display: 'block',
                    width: DEFAULT_THUMB_SIZE,
                    height: DEFAULT_THUMB_SIZE,
                    borderRadius: '50%',
                    transition: 'all 0.1s ease',
                    backgroundColor: thumbBackground,
                    /* Border is added to handle high contrast mode for Firefox */
                    borderColor: 'transparent',
                    borderWidth: DEFAULT_THUMB_SIZE / 2,
                    borderStyle: 'solid',
                    boxSizing: 'border-box',
                },
                !disabled &&
                    checked && [
                    {
                        backgroundColor: thumbCheckedBackground,
                        selectors: (_f = {},
                            _f[style_utilities_1.HighContrastSelector] = {
                                backgroundColor: 'Window',
                                borderColor: 'Window',
                            },
                            _f),
                    },
                ],
                disabled && [
                    !checked && [
                        {
                            backgroundColor: thumbDisabledBackground,
                        },
                    ],
                    checked && [
                        {
                            backgroundColor: thumbCheckedDisabledBackground,
                        },
                    ],
                ],
            ],
            text: [
                'ms-Toggle-stateText',
                {
                    selectors: {
                        // Workaround: make rules more specific than Label rules.
                        '&&': {
                            padding: '0',
                            margin: '0 8px',
                            userSelect: 'none',
                            fontWeight: style_utilities_1.FontWeights.regular,
                        },
                    },
                },
                disabled && {
                    selectors: {
                        '&&': {
                            color: textDisabledColor,
                            selectors: (_g = {},
                                _g[style_utilities_1.HighContrastSelector] = {
                                    color: 'GrayText',
                                },
                                _g),
                        },
                    },
                },
            ],
        };
    };
});
//# sourceMappingURL=Toggle.styles.js.map