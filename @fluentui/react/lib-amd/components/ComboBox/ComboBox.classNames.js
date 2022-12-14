define(["require", "exports", "../../Utilities", "../../Styling"], function (require, exports, Utilities_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClassNames = Utilities_1.memoizeFunction(function (styles, className, isOpen, disabled, required, focused, allowFreeForm, hasErrorMessage) {
        return {
            container: Styling_1.mergeStyles('ms-ComboBox-container', className, styles.container),
            label: Styling_1.mergeStyles(styles.label, disabled && styles.labelDisabled),
            root: Styling_1.mergeStyles('ms-ComboBox', hasErrorMessage ? styles.rootError : isOpen && 'is-open', required && 'is-required', styles.root, !allowFreeForm && styles.rootDisallowFreeForm, hasErrorMessage && !focused ? styles.rootError : !disabled && focused && styles.rootFocused, !disabled && {
                selectors: {
                    ':hover': hasErrorMessage ? styles.rootError : !isOpen && !focused && styles.rootHovered,
                    ':active': hasErrorMessage ? styles.rootError : styles.rootPressed,
                    ':focus': hasErrorMessage ? styles.rootError : styles.rootFocused,
                },
            }, disabled && ['is-disabled', styles.rootDisabled]),
            input: Styling_1.mergeStyles('ms-ComboBox-Input', styles.input, disabled && styles.inputDisabled),
            errorMessage: Styling_1.mergeStyles(styles.errorMessage),
            callout: Styling_1.mergeStyles('ms-ComboBox-callout', styles.callout),
            optionsContainerWrapper: Styling_1.mergeStyles('ms-ComboBox-optionsContainerWrapper', styles.optionsContainerWrapper),
            optionsContainer: Styling_1.mergeStyles('ms-ComboBox-optionsContainer', styles.optionsContainer),
            header: Styling_1.mergeStyles('ms-ComboBox-header', styles.header),
            divider: Styling_1.mergeStyles('ms-ComboBox-divider', styles.divider),
            screenReaderText: Styling_1.mergeStyles(styles.screenReaderText),
        };
    });
    exports.getComboBoxOptionClassNames = Utilities_1.memoizeFunction(function (styles) {
        return {
            optionText: Styling_1.mergeStyles('ms-ComboBox-optionText', styles.optionText),
            root: Styling_1.mergeStyles('ms-ComboBox-option', styles.root, {
                selectors: {
                    ':hover': styles.rootHovered,
                    ':focus': styles.rootFocused,
                    ':active': styles.rootPressed,
                },
            }),
            optionTextWrapper: Styling_1.mergeStyles(styles.optionTextWrapper),
        };
    });
});
//# sourceMappingURL=ComboBox.classNames.js.map