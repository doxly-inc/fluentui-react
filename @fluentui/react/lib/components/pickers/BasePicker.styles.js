import { getGlobalClassNames, getInputFocusStyle, hiddenContentStyle, HighContrastSelector } from '../../Styling';
var GlobalClassNames = {
    root: 'ms-BasePicker',
    text: 'ms-BasePicker-text',
    itemsWrapper: 'ms-BasePicker-itemsWrapper',
    input: 'ms-BasePicker-input',
};
export function getStyles(props) {
    var _a;
    var className = props.className, theme = props.theme, isFocused = props.isFocused, inputClassName = props.inputClassName, disabled = props.disabled;
    if (!theme) {
        throw new Error('theme is undefined or null in base BasePicker getStyles function.');
    }
    var semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var inputBorder = semanticColors.inputBorder, inputBorderHovered = semanticColors.inputBorderHovered, inputFocusBorderAlt = semanticColors.inputFocusBorderAlt;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    // The following lines are to create a semi-transparent color overlay for the disabled state with designer's approval.
    // @todo: investigate the performance cost of the calculation below and apply if negligible.
    //   Replacing with a static color for now.
    // const rgbColor: IRGB | undefined = cssColor(palette.neutralQuaternaryAlt);
    // const disabledOverlayColor = rgbColor ? `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.29)` : 'transparent';
    var disabledOverlayColor = 'rgba(218, 218, 218, 0.29)';
    return {
        root: [classNames.root, className],
        text: [
            classNames.text,
            {
                display: 'flex',
                position: 'relative',
                flexWrap: 'wrap',
                alignItems: 'center',
                boxSizing: 'border-box',
                minWidth: 180,
                minHeight: 30,
                border: "1px solid " + inputBorder,
                borderRadius: effects.roundedCorner2,
            },
            !isFocused &&
                !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: inputBorderHovered,
                    },
                },
            },
            isFocused && !disabled && getInputFocusStyle(inputFocusBorderAlt, effects.roundedCorner2),
            disabled && {
                borderColor: disabledOverlayColor,
                selectors: (_a = {
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            background: disabledOverlayColor,
                        }
                    },
                    _a[HighContrastSelector] = {
                        borderColor: 'GrayText',
                        selectors: {
                            ':after': {
                                background: 'none',
                            },
                        },
                    },
                    _a),
            },
        ],
        itemsWrapper: [
            classNames.itemsWrapper,
            {
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: '100%',
            },
        ],
        input: [
            classNames.input,
            fonts.medium,
            {
                height: 30,
                border: 'none',
                flexGrow: 1,
                outline: 'none',
                padding: '0 6px 0',
                alignSelf: 'flex-end',
                borderRadius: effects.roundedCorner2,
                backgroundColor: 'transparent',
                color: semanticColors.inputText,
                selectors: {
                    '::-ms-clear': {
                        display: 'none',
                    },
                },
            },
            inputClassName,
        ],
        screenReaderText: hiddenContentStyle,
    };
}
//# sourceMappingURL=BasePicker.styles.js.map