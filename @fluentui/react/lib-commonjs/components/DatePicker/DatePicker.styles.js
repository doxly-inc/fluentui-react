"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_utilities_1 = require("@fluentui/style-utilities");
var GlobalClassNames = {
    root: 'ms-DatePicker',
    callout: 'ms-DatePicker-callout',
    withLabel: 'ms-DatePicker-event--with-label',
    withoutLabel: 'ms-DatePicker-event--without-label',
    disabled: 'msDatePickerDisabled ',
};
exports.styles = function (props) {
    var className = props.className, theme = props.theme, disabled = props.disabled, label = props.label, isDatePickerShown = props.isDatePickerShown;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = style_utilities_1.getGlobalClassNames(GlobalClassNames, theme);
    var DatePickerIcon = {
        color: palette.neutralSecondary,
        fontSize: style_utilities_1.FontSizes.icon,
        lineHeight: '18px',
        pointerEvents: 'none',
        position: 'absolute',
        right: '4px',
        padding: '5px',
    };
    return {
        root: [classNames.root, theme.fonts.large, isDatePickerShown && 'is-open', style_utilities_1.normalize, className],
        textField: [
            {
                position: 'relative',
                selectors: {
                    '& input[readonly]': {
                        cursor: 'pointer',
                    },
                    input: {
                        selectors: {
                            '::-ms-clear': {
                                display: 'none',
                            },
                        },
                    },
                },
            },
            disabled && {
                selectors: {
                    '& input[readonly]': {
                        cursor: 'default',
                    },
                },
            },
        ],
        callout: [classNames.callout],
        icon: [
            DatePickerIcon,
            label ? classNames.withLabel : classNames.withoutLabel,
            { paddingTop: '7px' },
            !disabled && [
                classNames.disabled,
                {
                    pointerEvents: 'initial',
                    cursor: 'pointer',
                },
            ],
            disabled && {
                color: semanticColors.disabledText,
                cursor: 'default',
            },
        ],
        statusMessage: [
            fonts.small,
            {
                color: semanticColors.errorText,
                marginTop: 5,
            },
        ],
    };
};
//# sourceMappingURL=DatePicker.styles.js.map