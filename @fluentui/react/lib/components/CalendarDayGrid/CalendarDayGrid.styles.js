import { __assign } from "tslib";
import { FontSizes, FontWeights, getFocusStyle, getGlobalClassNames, AnimationStyles, keyframes, HighContrastSelector, getHighContrastNoAdjustStyle, } from '@fluentui/style-utilities';
import { DateRangeType } from '@fluentui/date-time-utilities';
import { AnimationDirection } from '../Calendar/Calendar.types';
var GlobalClassNames = {
    hoverStyle: 'ms-CalendarDay-hoverStyle',
    pressedStyle: 'ms-CalendarDay-pressedStyle',
    dayIsTodayStyle: 'ms-CalendarDay-dayIsToday',
    daySelectedStyle: 'ms-CalendarDay-daySelected',
};
var transitionRowDisappearance = keyframes({
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
export var styles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var theme = props.theme, dateRangeType = props.dateRangeType, showWeekNumbers = props.showWeekNumbers, lightenDaysOutsideNavigatedMonth = props.lightenDaysOutsideNavigatedMonth, animateBackwards = props.animateBackwards, animationDirection = props.animationDirection;
    var palette = theme.palette;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var rowAnimationStyle = {};
    if (animateBackwards !== undefined) {
        if (animationDirection === AnimationDirection.Horizontal) {
            rowAnimationStyle = animateBackwards ? AnimationStyles.slideRightIn20 : AnimationStyles.slideLeftIn20;
        }
        else {
            rowAnimationStyle = animateBackwards ? AnimationStyles.slideDownIn20 : AnimationStyles.slideUpIn20;
        }
    }
    var firstTransitionRowAnimationStyle = {};
    var lastTransitionRowAnimationStyle = {};
    if (animateBackwards !== undefined) {
        if (animationDirection !== AnimationDirection.Horizontal) {
            firstTransitionRowAnimationStyle = animateBackwards ? { animationName: '' } : AnimationStyles.slideUpOut20;
            lastTransitionRowAnimationStyle = animateBackwards ? AnimationStyles.slideDownOut20 : { animationName: '' };
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
            fontSize: FontSizes.small,
            fontWeight: FontWeights.regular,
            color: palette.neutralPrimary,
            cursor: 'pointer',
            position: 'relative',
            selectors: (_a = {},
                _a[HighContrastSelector] = __assign({ color: 'WindowText', backgroundColor: 'Window', zIndex: 0 }, getHighContrastNoAdjustStyle()),
                _a['&.' + classNames.hoverStyle] = {
                    backgroundColor: palette.neutralLighter,
                    selectors: (_b = {},
                        _b[HighContrastSelector] = {
                            zIndex: 3,
                            backgroundColor: 'Window',
                            outline: '1px solid Highlight',
                        },
                        _b),
                },
                _a['&.' + classNames.pressedStyle] = {
                    backgroundColor: palette.neutralLight,
                    selectors: (_c = {},
                        _c[HighContrastSelector] = {
                            borderColor: 'Highlight',
                            color: 'Highlight',
                            backgroundColor: 'Window',
                        },
                        _c),
                },
                _a['&.' + classNames.pressedStyle + '.' + classNames.hoverStyle] = {
                    selectors: (_d = {},
                        _d[HighContrastSelector] = {
                            backgroundColor: 'Window',
                            outline: '1px solid Highlight',
                        },
                        _d),
                },
                _a),
        },
        daySelected: [
            dateRangeType !== DateRangeType.Month && {
                backgroundColor: palette.neutralLight + '!important',
                selectors: (_e = {},
                    _e['&:hover, &.' + classNames.hoverStyle + ', &.' + classNames.pressedStyle] = (_f = {
                            backgroundColor: palette.neutralLight + '!important'
                        },
                        _f[HighContrastSelector] = {
                            color: 'HighlightText!important',
                            background: 'Highlight!important',
                        },
                        _f),
                    _e[HighContrastSelector] = __assign({ background: 'Highlight!important', color: 'HighlightText!important', borderColor: 'Highlight!important' }, getHighContrastNoAdjustStyle()),
                    _e),
            },
        ],
        weekRow: rowAnimationStyle,
        weekDayLabelCell: AnimationStyles.fadeIn200,
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
            fontWeight: FontWeights.regular,
            fontSize: FontSizes.small,
        },
        dayOutsideBounds: disabledStyle,
        dayOutsideNavigatedMonth: lightenDaysOutsideNavigatedMonth && {
            color: palette.neutralSecondary,
            fontWeight: FontWeights.regular,
        },
        dayButton: [
            getFocusStyle(theme, { inset: -2 }),
            {
                width: 24,
                height: 24,
                lineHeight: 24,
                fontSize: FontSizes.small,
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
            fontWeight: (FontWeights.semibold + '!important'),
            selectors: (_g = {},
                _g[HighContrastSelector] = __assign({ background: 'WindowText!important', color: 'Window!important', borderColor: 'WindowText!important' }, getHighContrastNoAdjustStyle()),
                _g),
        },
        firstTransitionWeek: __assign(__assign({ position: 'absolute', opacity: 0, width: 0, height: 0, overflow: 'hidden' }, firstTransitionRowAnimationStyle), { animationName: firstTransitionRowAnimationStyle.animationName + ',' + transitionRowDisappearance }),
        lastTransitionWeek: __assign(__assign({ position: 'absolute', opacity: 0, width: 0, height: 0, overflow: 'hidden', marginTop: -28 }, lastTransitionRowAnimationStyle), { animationName: lastTransitionRowAnimationStyle.animationName + ',' + transitionRowDisappearance }),
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
                        _j[HighContrastSelector] = {
                            backgroundColor: 'Window',
                        },
                        _j),
                },
                _h['.' + classNames.daySelectedStyle + ' &'] = {
                    selectors: (_k = {},
                        _k[HighContrastSelector] = {
                            backgroundColor: 'HighlightText',
                        },
                        _k),
                },
                _h[HighContrastSelector] = __assign({ backgroundColor: 'WindowText' }, getHighContrastNoAdjustStyle()),
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