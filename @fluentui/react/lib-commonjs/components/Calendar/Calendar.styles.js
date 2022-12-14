"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_utilities_1 = require("@fluentui/style-utilities");
exports.styles = function (props) {
    var className = props.className, theme = props.theme, isDayPickerVisible = props.isDayPickerVisible, isMonthPickerVisible = props.isMonthPickerVisible, showWeekNumbers = props.showWeekNumbers;
    var palette = theme.palette;
    var totalWidth = isDayPickerVisible && isMonthPickerVisible ? 440 : 220;
    if (showWeekNumbers && isDayPickerVisible) {
        totalWidth += 30;
    }
    return {
        root: [
            style_utilities_1.normalize,
            {
                display: 'flex',
                width: totalWidth,
            },
            !isMonthPickerVisible && {
                flexDirection: 'column',
            },
            className,
        ],
        divider: {
            top: 0,
            borderRight: '1px solid',
            borderColor: palette.neutralLight,
        },
        monthPickerWrapper: [
            {
                display: 'flex',
                flexDirection: 'column',
            },
        ],
        goTodayButton: [
            style_utilities_1.getFocusStyle(theme, { inset: -1 }),
            {
                bottom: 0,
                color: palette.neutralPrimary,
                height: 30,
                lineHeight: 30,
                backgroundColor: 'transparent',
                border: 'none',
                boxSizing: 'content-box',
                padding: '0 4px',
                alignSelf: 'flex-end',
                marginRight: 16,
                marginTop: 3,
                fontSize: style_utilities_1.FontSizes.small,
                fontFamily: 'inherit',
                overflow: 'visible',
                selectors: {
                    '& div': {
                        fontSize: style_utilities_1.FontSizes.small,
                    },
                    '&:hover': {
                        color: palette.themePrimary,
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                    },
                    '&:active': {
                        color: palette.themeDark,
                    },
                    '&:disabled': {
                        color: palette.neutralTertiaryAlt,
                        pointerEvents: 'none',
                    },
                },
            },
        ],
        liveRegion: {
            border: 0,
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            width: '1px',
            position: 'absolute',
        },
    };
};
//# sourceMappingURL=Calendar.styles.js.map