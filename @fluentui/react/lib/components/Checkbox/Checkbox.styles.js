import { __assign } from "tslib";
import { HighContrastSelector, getGlobalClassNames, getHighContrastNoAdjustStyle, } from '@fluentui/style-utilities';
import { IsFocusVisibleClassName } from '@fluentui/utilities';
var GlobalClassNames = {
    root: 'ms-Checkbox',
    label: 'ms-Checkbox-label',
    checkbox: 'ms-Checkbox-checkbox',
    checkmark: 'ms-Checkbox-checkmark',
    text: 'ms-Checkbox-text',
};
var MS_CHECKBOX_LABEL_SIZE = '20px';
var MS_CHECKBOX_TRANSITION_DURATION = '200ms';
var MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';
export var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var className = props.className, theme = props.theme, reversed = props.reversed, checked = props.checked, disabled = props.disabled, isUsingCustomLabelRender = props.isUsingCustomLabelRender, indeterminate = props.indeterminate;
    var semanticColors = theme.semanticColors, effects = theme.effects, palette = theme.palette, fonts = theme.fonts;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var checkmarkFontColor = semanticColors.inputForegroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBorder
    var checkmarkFontColorHovered = palette.neutralSecondary;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.smallInputBorder
    var checkboxBorderColor = palette.neutralPrimary;
    var checkboxBorderIndeterminateColor = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    var checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    var checkboxBorderIndeterminateHoveredColor = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping the following 2 tokens need to be
    // semanticColors.inputBackgroundCheckedHovered
    var checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxHoveredTextColor = semanticColors.inputTextHovered;
    var checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    var checkboxTextColor = semanticColors.bodyText;
    var checkboxTextColorDisabled = semanticColors.disabledText;
    var indeterminateDotStyles = [
        (_a = {
                content: '""',
                borderRadius: effects.roundedCorner2,
                position: 'absolute',
                width: 10,
                height: 10,
                top: 4,
                left: 4,
                boxSizing: 'border-box',
                borderWidth: 5,
                borderStyle: 'solid',
                borderColor: disabled ? checkboxBorderColorDisabled : checkboxBorderIndeterminateColor,
                transitionProperty: 'border-width, border, border-color',
                transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING
            },
            _a[HighContrastSelector] = {
                borderColor: 'WindowText',
            },
            _a),
    ];
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                display: 'flex',
            },
            reversed && 'reversed',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            !disabled && [
                !checked && (_b = {},
                    _b[":hover ." + classNames.checkbox] = (_c = {
                            borderColor: checkboxBorderHoveredColor
                        },
                        _c[HighContrastSelector] = {
                            borderColor: 'Highlight',
                        },
                        _c),
                    _b[":focus ." + classNames.checkbox] = { borderColor: checkboxBorderHoveredColor },
                    _b[":hover ." + classNames.checkmark] = (_d = {
                            color: checkmarkFontColorHovered,
                            opacity: '1'
                        },
                        _d[HighContrastSelector] = {
                            color: 'Highlight',
                        },
                        _d),
                    _b),
                checked &&
                    !indeterminate && (_e = {},
                    _e[":hover ." + classNames.checkbox] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[":focus ." + classNames.checkbox] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[HighContrastSelector] = (_f = {},
                        _f[":hover ." + classNames.checkbox] = {
                            background: 'Highlight',
                            borderColor: 'Highlight',
                        },
                        _f[":focus ." + classNames.checkbox] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover ." + classNames.checkbox] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover ." + classNames.checkmark] = {
                            color: 'Window',
                        },
                        _f[":hover ." + classNames.checkmark] = {
                            color: 'Window',
                        },
                        _f),
                    _e),
                indeterminate && (_g = {},
                    _g[":hover ." + classNames.checkbox + ", :hover ." + classNames.checkbox + ":after"] = (_h = {
                            borderColor: checkboxBorderIndeterminateHoveredColor
                        },
                        _h[HighContrastSelector] = {
                            borderColor: 'WindowText',
                        },
                        _h),
                    _g[":focus ." + classNames.checkbox] = {
                        borderColor: checkboxBorderIndeterminateHoveredColor,
                    },
                    _g[":hover ." + classNames.checkmark] = {
                        opacity: '0',
                    },
                    _g),
                (_j = {},
                    _j[":hover ." + classNames.text + ", :focus ." + classNames.text] = (_k = {
                            color: checkboxHoveredTextColor
                        },
                        _k[HighContrastSelector] = {
                            color: disabled ? 'GrayText' : 'WindowText',
                        },
                        _k),
                    _j),
            ],
            className,
        ],
        input: (_l = {
                position: 'absolute',
                background: 'none',
                opacity: 0
            },
            _l["." + IsFocusVisibleClassName + " &:focus + label::before"] = (_m = {
                    outline: '1px solid ' + theme.palette.neutralSecondary,
                    outlineOffset: '2px'
                },
                _m[HighContrastSelector] = {
                    outline: '1px solid WindowText',
                },
                _m),
            _l),
        label: [
            classNames.label,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: isUsingCustomLabelRender ? 'center' : 'flex-start',
                cursor: disabled ? 'default' : 'pointer',
                position: 'relative',
                userSelect: 'none',
            },
            reversed && {
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
            },
            {
                '&::before': {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    content: '""',
                    pointerEvents: 'none',
                },
            },
        ],
        checkbox: [
            classNames.checkbox,
            (_o = {
                    position: 'relative',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: MS_CHECKBOX_LABEL_SIZE,
                    width: MS_CHECKBOX_LABEL_SIZE,
                    border: "1px solid " + checkboxBorderColor,
                    borderRadius: effects.roundedCorner2,
                    boxSizing: 'border-box',
                    transitionProperty: 'background, border, border-color',
                    transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                    transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,
                    /* in case the icon is bigger than the box */
                    overflow: 'hidden',
                    ':after': indeterminate ? indeterminateDotStyles : null
                },
                _o[HighContrastSelector] = __assign({ borderColor: 'WindowText' }, getHighContrastNoAdjustStyle()),
                _o),
            indeterminate && {
                borderColor: checkboxBorderIndeterminateColor,
            },
            !reversed
                ? // This margin on the checkbox is for backwards compat. Notably it has the effect where a customRender
                    // is used, there will be only a 4px margin from checkbox to label. The label by default would have
                    // another 4px margin for a total of 8px margin between checkbox and label. We don't combine the two
                    // (and move it into the text) to not incur a breaking change for everyone using custom render atm.
                    {
                        marginRight: 4,
                    }
                : {
                    marginLeft: 4,
                },
            !disabled &&
                !indeterminate &&
                checked && (_p = {
                    background: checkboxBackgroundChecked,
                    borderColor: checkboxBorderColorChecked
                },
                _p[HighContrastSelector] = {
                    background: 'Highlight',
                    borderColor: 'Highlight',
                },
                _p),
            disabled && (_q = {
                    borderColor: checkboxBorderColorDisabled
                },
                _q[HighContrastSelector] = {
                    borderColor: 'GrayText',
                },
                _q),
            checked &&
                disabled && (_r = {
                    background: checkboxBackgroundDisabledChecked,
                    borderColor: checkboxBorderColorDisabled
                },
                _r[HighContrastSelector] = {
                    background: 'Window',
                },
                _r),
        ],
        checkmark: [
            classNames.checkmark,
            (_s = {
                    opacity: checked ? '1' : '0',
                    color: checkmarkFontColor
                },
                _s[HighContrastSelector] = __assign({ color: disabled ? 'GrayText' : 'Window' }, getHighContrastNoAdjustStyle()),
                _s),
        ],
        text: [
            classNames.text,
            (_t = {
                    color: disabled ? checkboxTextColorDisabled : checkboxTextColor,
                    fontSize: fonts.medium.fontSize,
                    lineHeight: '20px'
                },
                _t[HighContrastSelector] = __assign({ color: disabled ? 'GrayText' : 'WindowText' }, getHighContrastNoAdjustStyle()),
                _t),
            !reversed
                ? {
                    marginLeft: 4,
                }
                : {
                    marginRight: 4,
                },
        ],
    };
};
//# sourceMappingURL=Checkbox.styles.js.map