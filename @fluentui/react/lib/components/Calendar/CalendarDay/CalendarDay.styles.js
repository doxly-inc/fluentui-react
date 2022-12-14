import { __assign } from "tslib";
import { normalize, FontSizes, FontWeights, getFocusStyle, AnimationStyles } from '@fluentui/style-utilities';
export var styles = function (props) {
    var className = props.className, theme = props.theme, headerIsClickable = props.headerIsClickable, showWeekNumbers = props.showWeekNumbers;
    var palette = theme.palette;
    var disabledStyle = {
        selectors: {
            '&, &:disabled, & button': {
                color: palette.neutralTertiaryAlt,
                pointerEvents: 'none',
            },
        },
    };
    return {
        root: [
            normalize,
            {
                width: 196,
                padding: 12,
                boxSizing: 'content-box',
            },
            showWeekNumbers && {
                width: 226,
            },
            className,
        ],
        header: {
            position: 'relative',
            display: 'inline-flex',
            height: 28,
            lineHeight: 44,
            width: '100%',
        },
        monthAndYear: [
            getFocusStyle(theme, { inset: 1 }),
            __assign(__assign({}, AnimationStyles.fadeIn200), { alignItems: 'center', fontSize: FontSizes.medium, fontFamily: 'inherit', color: palette.neutralPrimary, display: 'inline-block', flexGrow: 1, fontWeight: FontWeights.semibold, padding: '0 4px 0 10px', border: 'none', backgroundColor: 'transparent', borderRadius: 2, lineHeight: 28, overflow: 'hidden', whiteSpace: 'nowrap', textAlign: 'left', textOverflow: 'ellipsis' }),
            headerIsClickable && {
                selectors: {
                    '&:hover': {
                        cursor: 'pointer',
                        background: palette.neutralLight,
                        color: palette.black,
                    },
                },
            },
        ],
        monthComponents: {
            display: 'inline-flex',
            alignSelf: 'flex-end',
        },
        headerIconButton: [
            getFocusStyle(theme, { inset: -1 }),
            {
                width: 28,
                height: 28,
                display: 'block',
                textAlign: 'center',
                lineHeight: 28,
                fontSize: FontSizes.small,
                fontFamily: 'inherit',
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
                        backgroundColor: palette.neutralLight,
                        cursor: 'pointer',
                        outline: '1px solid transparent',
                    },
                },
            },
        ],
        disabledStyle: disabledStyle,
    };
};
//# sourceMappingURL=CalendarDay.styles.js.map