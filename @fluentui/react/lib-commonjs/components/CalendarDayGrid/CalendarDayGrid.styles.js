"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var style_utilities_1 = require("@fluentui/style-utilities");
var date_time_utilities_1 = require("@fluentui/date-time-utilities");
var Calendar_types_1 = require("../Calendar/Calendar.types");
var GlobalClassNames = {
    hoverStyle: 'ms-CalendarDay-hoverStyle',
    pressedStyle: 'ms-CalendarDay-pressedStyle',
    dayIsTodayStyle: 'ms-CalendarDay-dayIsToday',
    daySelectedStyle: 'ms-CalendarDay-daySelected',
};
var transitionRowDisappearance = style_utilities_1.keyframes({
    '100%': {
        width: 0,
        height: 0,
        overflow: 'hidden',
    },
    '99.9%': {
        width: '100%',
        height: 28,
        overflow: 'visible',
    },
    '0%': {
        width: '100%',
        height: 28,
        overflow: 'visible',
    },
});
exports.styles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var theme = props.theme, dateRangeType = props.dateRangeType, showWeekNumbers = props.showWeekNumbers, lightenDaysOutsideNavigatedMonth = props.lightenDaysOutsideNavigatedMonth, animateBackwards = props.animateBackwards, animationDirection = props.animationDirection;
    var palette = theme.palette;
    var classNames = style_utilities_1.getGlobalClassNames(GlobalClassNames, theme);
    var rowAnimationStyle = {};
    if (animateBackwards !== undefined) {
        if (animationDirection === Calendar_types_1.AnimationDirection.Horizontal) {
            rowAnimationStyle = animateBackwards ? style_utilities_1.AnimationStyles.slideRightIn20 : style_utilities_1.AnimationStyles.slideLeftIn20;
        }
        else {
            rowAnimationStyle = animateBackwards ? style_utilities_1.AnimationStyles.slideDownIn20 : style_utilities_1.AnimationStyles.slideUpIn20;
        }
    }
    var firstTransitionRowAnimationStyle = {};
    var lastTransitionRowAnimationStyle = {};
    if (animateBackwards !== undefined) {
        if (animationDirection !== Calendar_types_1.AnimationDirection.Horizontal) {
            firstTransitionRowAnimationStyle = animateBackwards ? { animationName: '' } : style_utilities_1.AnimationStyles.slideUpOut20;
            lastTransitionRowAnimationStyle = animateBackwards ? style_utilities_1.AnimationStyles.slideDownOut20 : { animationName: '' };
        }
    }
    var disabledStyle = {
        selectors: {
            '&, &:disabled, & button': {
                color: palette.neutralTertiaryAlt,
                pointerEvents: 'none',
            },
        },
    };
    return {
        wrapper: {
            paddingBottom: 10,
        },
        table: [
            {
                textAlign: 'center',
                borderCollapse: 'collapse',
                borderSpacing: '0',
                tableLayout: 'fixed',
                fontSize: 'inherit',
                marginTop: 4,
                width: 196,
                position: 'relative',
                paddingBottom: 10,
            },
            showWeekNumbers && {
                width: 226,
            },
        ],
        dayCell: {
            margin: 0,
            padding: 0,
            width: 28,
            height: 28,
            lineHeight: 28,
            fontSize: style_utilities_1.FontSizes.small,
            fontWeight: style_utilities_1.FontWeights.regular,
            color: palette.neutralPrimary,
            cursor: 'pointer',
            position: 'relative',
            selectors: (_a = {},
                _a[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ color: 'WindowText', backgroundColor: 'Window', zIndex: 0 }, style_utilities_1.getHighContrastNoAdjustStyle()),
                _a['&.' + classNames.hoverStyle] = {
                    backgroundColor: palette.neutralLighter,
                    selectors: (_b = {},
                        _b[style_utilities_1.HighContrastSelector] = {
                            zIndex: 3,
                            backgroundColor: 'Window',
                            outline: '1px solid Highlight',
                        },
                        _b),
                },
                _a['&.' + classNames.pressedStyle] = {
                    backgroundColor: palette.neutralLight,
                    selectors: (_c = {},
                        _c[style_utilities_1.HighContrastSelector] = {
                            borderColor: 'Highlight',
                            color: 'Highlight',
                            backgroundColor: 'Window',
                        },
                        _c),
                },
                _a['&.' + classNames.pressedStyle + '.' + classNames.hoverStyle] = {
                    selectors: (_d = {},
                        _d[style_utilities_1.HighContrastSelector] = {
                            backgroundColor: 'Window',
                            outline: '1px solid Highlight',
                        },
                        _d),
                },
                _a),
        },
        daySelected: [
            dateRangeType !== date_time_utilities_1.DateRangeType.Month && {
                backgroundColor: palette.neutralLight + '!important',
                selectors: (_e = {},
                    _e['&:hover, &.' + classNames.hoverStyle + ', &.' + classNames.pressedStyle] = (_f = {
                            backgroundColor: palette.neutralLight + '!important'
                        },
                        _f[style_utilities_1.HighContrastSelector] = {
                            color: 'HighlightText!important',
                            background: 'Highlight!important',
                        },
                        _f),
                    _e[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ background: 'Highlight!important', color: 'HighlightText!important', borderColor: 'Highlight!important' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                    _e),
            },
        ],
        weekRow: rowAnimationStyle,
        weekDayLabelCell: style_utilities_1.AnimationStyles.fadeIn200,
        weekNumberCell: {
            margin: 0,
            padding: 0,
            borderRight: '1px solid',
            borderColor: palette.neutralLight,
            backgroundColor: palette.neutralLighterAlt,
            color: palette.neutralSecondary,
            boxSizing: 'border-box',
            width: 28,
            height: 28,
            fontWeight: style_utilities_1.FontWeights.regular,
            fontSize: style_utilities_1.FontSizes.small,
        },
        dayOutsideBounds: disabledStyle,
        dayOutsideNavigatedMonth: lightenDaysOutsideNavigatedMonth && {
            color: palette.neutralSecondary,
            fontWeight: style_utilities_1.FontWeights.regular,
        },
        dayButton: [
            style_utilities_1.getFocusStyle(theme, { inset: -2 }),
            {
                width: 24,
                height: 24,
                lineHeight: 24,
                fontSize: style_utilities_1.FontSizes.small,
                fontWeight: 'inherit',
                borderRadius: 2,
                border: 'none',
                padding: 0,
                color: 'inherit',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                overflow: 'visible',
                selectors: {
                    span: {
                        height: 'inherit',
                        lineHeight: 'inherit',
                    },
                },
            },
        ],
        dayIsToday: {
            backgroundColor: palette.themePrimary + '!important',
            borderRadius: '100%',
            color: palette.white + '!important',
            fontWeight: (style_utilities_1.FontWeights.semibold + '!important'),
            selectors: (_g = {},
                _g[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ background: 'WindowText!important', color: 'Window!important', borderColor: 'WindowText!important' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                _g),
        },
        firstTransitionWeek: tslib_1.__assign(tslib_1.__assign({ position: 'absolute', opacity: 0, width: 0, height: 0, overflow: 'hidden' }, firstTransitionRowAnimationStyle), { animationName: firstTransitionRowAnimationStyle.animationName + ',' + transitionRowDisappearance }),
        lastTransitionWeek: tslib_1.__assign(tslib_1.__assign({ position: 'absolute', opacity: 0, width: 0, height: 0, overflow: 'hidden', marginTop: -28 }, lastTransitionRowAnimationStyle), { animationName: lastTransitionRowAnimationStyle.animationName + ',' + transitionRowDisappearance }),
        dayMarker: {
            width: 4,
            height: 4,
            backgroundColor: palette.neutralSecondary,
            borderRadius: '100%',
            bottom: 1,
            left: 0,
            right: 0,
            position: 'absolute',
            margin: 'auto',
            selectors: (_h = {},
                _h['.' + classNames.dayIsTodayStyle + ' &'] = {
                    backgroundColor: palette.white,
                    selectors: (_j = {},
                        _j[style_utilities_1.HighContrastSelector] = {
                            backgroundColor: 'Window',
                        },
                        _j),
                },
                _h['.' + classNames.daySelectedStyle + ' &'] = {
                    selectors: (_k = {},
                        _k[style_utilities_1.HighContrastSelector] = {
                            backgroundColor: 'HighlightText',
                        },
                        _k),
                },
                _h[style_utilities_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'WindowText' }, style_utilities_1.getHighContrastNoAdjustStyle()),
                _h),
        },
        topRightCornerDate: {
            borderTopRightRadius: '2px',
        },
        topLeftCornerDate: {
            borderTopLeftRadius: '2px',
        },
        bottomRightCornerDate: {
            borderBottomRightRadius: '2px',
        },
        bottomLeftCornerDate: {
            borderBottomLeftRadius: '2px',
        },
    };
};
//# sourceMappingURL=CalendarDayGrid.styles.js.map