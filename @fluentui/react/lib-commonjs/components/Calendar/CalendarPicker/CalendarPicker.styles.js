"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var style_utilities_1 = require("@fluentui/style-utilities");
var Calendar_types_1 = require("../Calendar.types");
exports.getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var className = props.className, theme = props.theme, hasHeaderClickCallback = props.hasHeaderClickCallback, highlightCurrent = props.highlightCurrent, highlightSelected = props.highlightSelected, animateBackwards = props.animateBackwards, animationDirection = props.animationDirection;
    var palette = theme.palette;
    var animationStyle = {};
    if (animateBackwards !== undefined) {
        if (animationDirection === Calendar_types_1.AnimationDirection.Horizontal) {
            animationStyle = animateBackwards ? style_utilities_1.AnimationStyles.slideRightIn20 : style_utilities_1.AnimationStyles.slideLeftIn20;
        }
        else {
            animationStyle = animateBackwards ? style_utilities_1.AnimationStyles.slideDownIn20 : style_utilities_1.AnimationStyles.slideUpIn20;
        }
    }
    var headerAnimationStyle = animateBackwards !== undefined ? style_utilities_1.AnimationStyles.fadeIn200 : {};
    return {
        root: [
            style_utilities_1.normalize,
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
            style_utilities_1.getFocusStyle(theme, { inset: -1 }),
            tslib_1.__assign(tslib_1.__assign({}, headerAnimationStyle), { fontSize: style_utilities_1.FontSizes.medium, fontWeight: style_utilities_1.FontWeights.semibold, fontFamily: 'inherit', textAlign: 'left', backgroundColor: 'transparent', flexGrow: 1, padding: '0 4px 0 10px', border: 'none', overflow: 'visible' }),
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
            style_utilities_1.getFocusStyle(theme, { inset: -1 }),
            {
                fontFamily: 'inherit',
                width: 28,
                minWidth: 28,
                height: 28,
                minHeight: 28,
                display: 'block',
                textAlign: 'center',
                lineHeight: 28,
                fontSize: style_utilities_1.FontSizes.small,
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
        buttonRow: tslib_1.__assign(tslib_1.__assign({}, animationStyle), { marginBottom: 16, selectors: {
                '&:nth-child(n + 3)': {
                    marginBottom: 0,
                },
            } }),
        itemButton: [
            style_utilities_1.getFocusStyle(theme, { inset: -1 }),
            {
                width: 40,
                height: 40,
                minWidth: 40,
                minHeight: 40,
                lineHeight: 40,
                fontSize: style_utilities_1.FontSizes.small,
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
                        fontWeight: style_utilities_1.FontWeights.regular,
                    },
                    '&:hover': {
                        color: palette.neutralDark,
                        backgroundColor: palette.neutralLight,
                        cursor: 'pointer',
                        outline: '1px solid transparent',
                        selectors: (_a = {},
                            _a[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ background: 'Window', color: 'WindowText', outline: '1px solid Highlight' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                            _a),
                    },
                    '&:active': {
                        backgroundColor: palette.themeLight,
                        selectors: (_b = {},
                            _b[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ background: 'Window', color: 'Highlight' }, style_utilities_1.getHighContrastNoAdjustStyle()),
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
                            fontWeight: style_utilities_1.FontWeights.semibold,
                        },
                        '&:hover': {
                            backgroundColor: palette.themePrimary,
                            selectors: (_d = {},
                                _d[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'WindowText', color: 'Window' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                                _d),
                        }
                    },
                    _c[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'WindowText', color: 'Window' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                    _c),
            }
            : {},
        selected: highlightSelected
            ? {
                color: palette.neutralPrimary,
                backgroundColor: palette.themeLight,
                fontWeight: style_utilities_1.FontWeights.semibold,
                selectors: (_e = {
                        '& div': {
                            fontWeight: style_utilities_1.FontWeights.semibold,
                        },
                        '&:hover, &:active': {
                            backgroundColor: palette.themeLight,
                            selectors: (_f = {},
                                _f[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ color: 'Window', background: 'Highlight' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                                _f),
                        }
                    },
                    _e[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ background: 'Highlight', color: 'Window' }, style_utilities_1.getHighContrastNoAdjustStyle()),
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