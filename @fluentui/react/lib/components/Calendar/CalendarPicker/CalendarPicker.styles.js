import { __assign } from "tslib";
import { normalize, FontSizes, FontWeights, getFocusStyle, AnimationStyles, HighContrastSelector, getHighContrastNoAdjustStyle, } from '@fluentui/style-utilities';
import { AnimationDirection } from '../Calendar.types';
export var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var className = props.className, theme = props.theme, hasHeaderClickCallback = props.hasHeaderClickCallback, highlightCurrent = props.highlightCurrent, highlightSelected = props.highlightSelected, animateBackwards = props.animateBackwards, animationDirection = props.animationDirection;
    var palette = theme.palette;
    var animationStyle = {};
    if (animateBackwards !== undefined) {
        if (animationDirection === AnimationDirection.Horizontal) {
            animationStyle = animateBackwards ? AnimationStyles.slideRightIn20 : AnimationStyles.slideLeftIn20;
        }
        else {
            animationStyle = animateBackwards ? AnimationStyles.slideDownIn20 : AnimationStyles.slideUpIn20;
        }
    }
    var headerAnimationStyle = animateBackwards !== undefined ? AnimationStyles.fadeIn200 : {};
    return {
        root: [
            normalize,
            {
                width: 196,
                padding: 12,
                boxSizing: 'content-box',
                overflow: 'hidden',
            },
            className,
        ],
        headerContainer: {
            display: 'flex',
        },
        currentItemButton: [
            getFocusStyle(theme, { inset: -1 }),
            __assign(__assign({}, headerAnimationStyle), { fontSize: FontSizes.medium, fontWeight: FontWeights.semibold, fontFamily: 'inherit', textAlign: 'left', backgroundColor: 'transparent', flexGrow: 1, padding: '0 4px 0 10px', border: 'none', overflow: 'visible' }),
            hasHeaderClickCallback && {
                selectors: {
                    '&:hover, &:active': {
                        cursor: !hasHeaderClickCallback ? 'default' : 'pointer',
                        color: palette.neutralDark,
                        outline: '1px solid transparent',
                        backgroundColor: palette.neutralLight,
                    },
                },
            },
        ],
        navigationButtonsContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        navigationButton: [
            getFocusStyle(theme, { inset: -1 }),
            {
                fontFamily: 'inherit',
                width: 28,
                minWidth: 28,
                height: 28,
                minHeight: 28,
                display: 'block',
                textAlign: 'center',
                lineHeight: 28,
                fontSize: FontSizes.small,
                color: palette.neutralPrimary,
                borderRadius: 2,
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
                overflow: 'visible',
                selectors: {
                    '&:hover': {
                        color: palette.neutralDark,
                        cursor: 'pointer',
                        outline: '1px solid transparent',
                        backgroundColor: palette.neutralLight,
                    },
                },
            },
        ],
        gridContainer: {
            marginTop: 4,
        },
        buttonRow: __assign(__assign({}, animationStyle), { marginBottom: 16, selectors: {
                '&:nth-child(n + 3)': {
                    marginBottom: 0,
                },
            } }),
        itemButton: [
            getFocusStyle(theme, { inset: -1 }),
            {
                width: 40,
                height: 40,
                minWidth: 40,
                minHeight: 40,
                lineHeight: 40,
                fontSize: FontSizes.small,
                fontFamily: 'inherit',
                padding: 0,
                margin: '0 12px 0 0',
                color: palette.neutralPrimary,
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: 2,
                overflow: 'visible',
                selectors: {
                    '&:nth-child(4n + 4)': {
                        marginRight: 0,
                    },
                    '&:nth-child(n + 9)': {
                        marginBottom: 0,
                    },
                    '& div': {
                        fontWeight: FontWeights.regular,
                    },
                    '&:hover': {
                        color: palette.neutralDark,
                        backgroundColor: palette.neutralLight,
                        cursor: 'pointer',
                        outline: '1px solid transparent',
                        selectors: (_a = {},
                            _a[HighContrastSelector] = __assign({ background: 'Window', color: 'WindowText', outline: '1px solid Highlight' }, getHighContrastNoAdjustStyle()),
                            _a),
                    },
                    '&:active': {
                        backgroundColor: palette.themeLight,
                        selectors: (_b = {},
                            _b[HighContrastSelector] = __assign({ background: 'Window', color: 'Highlight' }, getHighContrastNoAdjustStyle()),
                            _b),
                    },
                },
            },
        ],
        current: highlightCurrent
            ? {
                color: palette.white,
                backgroundColor: palette.themePrimary,
                selectors: (_c = {
                        '& div': {
                            fontWeight: FontWeights.semibold,
                        },
                        '&:hover': {
                            backgroundColor: palette.themePrimary,
                            selectors: (_d = {},
                                _d[HighContrastSelector] = __assign({ backgroundColor: 'WindowText', color: 'Window' }, getHighContrastNoAdjustStyle()),
                                _d),
                        }
                    },
                    _c[HighContrastSelector] = __assign({ backgroundColor: 'WindowText', color: 'Window' }, getHighContrastNoAdjustStyle()),
                    _c),
            }
            : {},
        selected: highlightSelected
            ? {
                color: palette.neutralPrimary,
                backgroundColor: palette.themeLight,
                fontWeight: FontWeights.semibold,
                selectors: (_e = {
                        '& div': {
                            fontWeight: FontWeights.semibold,
                        },
                        '&:hover, &:active': {
                            backgroundColor: palette.themeLight,
                            selectors: (_f = {},
                                _f[HighContrastSelector] = __assign({ color: 'Window', background: 'Highlight' }, getHighContrastNoAdjustStyle()),
                                _f),
                        }
                    },
                    _e[HighContrastSelector] = __assign({ background: 'Highlight', color: 'Window' }, getHighContrastNoAdjustStyle()),
                    _e),
            }
            : {},
        disabled: {
            selectors: {
                '&, &:disabled, & button': {
                    color: palette.neutralTertiaryAlt,
                    pointerEvents: 'none',
                },
            },
        },
    };
};
//# sourceMappingURL=CalendarPicker.styles.js.map