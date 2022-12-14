"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("../TextField");
var Utilities_1 = require("../../../Utilities");
var inputMask_1 = require("./inputMask");
var react_hooks_1 = require("@fluentui/react-hooks");
var COMPONENT_NAME = 'MaskedTextField';
var useComponentRef = function (componentRef, internalState, textField) {
    React.useImperativeHandle(componentRef, function () { return ({
        get value() {
            var value = '';
            for (var i = 0; i < internalState.maskCharData.length; i++) {
                if (!internalState.maskCharData[i].value) {
                    return undefined;
                }
                value += internalState.maskCharData[i].value;
            }
            return value;
        },
        get selectionStart() {
            return textField.current && textField.current.selectionStart !== null ? textField.current.selectionStart : -1;
        },
        get selectionEnd() {
            return textField.current && textField.current.selectionEnd ? textField.current.selectionEnd : -1;
        },
        focus: function () {
            textField.current && textField.current.focus();
        },
        blur: function () {
            textField.current && textField.current.blur();
        },
        select: function () {
            textField.current && textField.current.select();
        },
        setSelectionStart: function (value) {
            textField.current && textField.current.setSelectionStart(value);
        },
        setSelectionEnd: function (value) {
            textField.current && textField.current.setSelectionEnd(value);
        },
        setSelectionRange: function (start, end) {
            textField.current && textField.current.setSelectionRange(start, end);
        },
    }); }, [internalState, textField]);
};
exports.DEFAULT_MASK_CHAR = '_';
exports.MaskedTextField = React.forwardRef(function (props, ref) {
    var textField = React.useRef(null);
    var componentRef = props.componentRef, onFocus = props.onFocus, onBlur = props.onBlur, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, onChange = props.onChange, onPaste = props.onPaste, onKeyDown = props.onKeyDown, mask = props.mask, _a = props.maskChar, maskChar = _a === void 0 ? exports.DEFAULT_MASK_CHAR : _a, _b = props.maskFormat, maskFormat = _b === void 0 ? inputMask_1.DEFAULT_MASK_FORMAT_CHARS : _b, value = props.value;
    var internalState = react_hooks_1.useConst(function () { return ({
        maskCharData: inputMask_1.parseMask(mask, maskFormat),
        isFocused: false,
        moveCursorOnMouseUp: false,
        changeSelectionData: null,
    }); });
    /** The index into the rendered value of the first unfilled format character */
    var _c = React.useState(), maskCursorPosition = _c[0], setMaskCursorPosition = _c[1];
    /**
     * The mask string formatted with the input value.
     * This is what is displayed inside the TextField
     * @example
     *  `Phone Number: 12_ - 4___`
     */
    var _d = React.useState(function () {
        return inputMask_1.getMaskDisplay(mask, internalState.maskCharData, maskChar);
    }), displayValue = _d[0], setDisplayValue = _d[1];
    var setValue = React.useCallback(function (newValue) {
        var valueIndex = 0;
        var charDataIndex = 0;
        while (valueIndex < newValue.length && charDataIndex < internalState.maskCharData.length) {
            // Test if the next character in the new value fits the next format character
            var testVal = newValue[valueIndex];
            if (internalState.maskCharData[charDataIndex].format.test(testVal)) {
                internalState.maskCharData[charDataIndex].value = testVal;
                charDataIndex++;
            }
            valueIndex++;
        }
    }, [internalState]);
    var handleFocus = React.useCallback(function (ev) {
        var _a;
        (_a = onFocus) === null || _a === void 0 ? void 0 : _a(ev);
        internalState.isFocused = true;
        // Move the cursor position to the leftmost unfilled position
        for (var i = 0; i < internalState.maskCharData.length; i++) {
            if (!internalState.maskCharData[i].value) {
                setMaskCursorPosition(internalState.maskCharData[i].displayIndex);
                break;
            }
        }
    }, [internalState, onFocus]);
    var handleBlur = React.useCallback(function (ev) {
        var _a;
        (_a = onBlur) === null || _a === void 0 ? void 0 : _a(ev);
        internalState.isFocused = false;
        internalState.moveCursorOnMouseUp = true;
    }, [internalState, onBlur]);
    var handleMouseDown = React.useCallback(function (ev) {
        var _a;
        (_a = onMouseDown) === null || _a === void 0 ? void 0 : _a(ev);
        if (!internalState.isFocused) {
            internalState.moveCursorOnMouseUp = true;
        }
    }, [internalState, onMouseDown]);
    var handleMouseUp = React.useCallback(function (ev) {
        var _a;
        (_a = onMouseUp) === null || _a === void 0 ? void 0 : _a(ev);
        // Move the cursor on mouseUp after focusing the textField
        if (internalState.moveCursorOnMouseUp) {
            internalState.moveCursorOnMouseUp = false;
            // Move the cursor position to the rightmost unfilled position
            for (var i = 0; i < internalState.maskCharData.length; i++) {
                if (!internalState.maskCharData[i].value) {
                    setMaskCursorPosition(internalState.maskCharData[i].displayIndex);
                    break;
                }
            }
        }
    }, [internalState, onMouseUp]);
    var handleInputChange = React.useCallback(function (ev, inputValue) {
        var _a;
        if (internalState.changeSelectionData === null && textField.current) {
            internalState.changeSelectionData = {
                changeType: 'default',
                selectionStart: textField.current.selectionStart !== null ? textField.current.selectionStart : -1,
                selectionEnd: textField.current.selectionEnd !== null ? textField.current.selectionEnd : -1,
            };
        }
        if (!internalState.changeSelectionData) {
            return;
        }
        // The initial value of cursorPos does not matter
        var cursorPos = 0;
        var _b = internalState.changeSelectionData, changeType = _b.changeType, selectionStart = _b.selectionStart, selectionEnd = _b.selectionEnd;
        if (changeType === 'textPasted') {
            var charsSelected = selectionEnd - selectionStart;
            var charCount = inputValue.length + charsSelected - displayValue.length;
            var startPos = selectionStart;
            var pastedString = inputValue.substr(startPos, charCount);
            // Clear any selected characters
            if (charsSelected) {
                internalState.maskCharData = inputMask_1.clearRange(internalState.maskCharData, selectionStart, charsSelected);
            }
            cursorPos = inputMask_1.insertString(internalState.maskCharData, startPos, pastedString);
        }
        else if (changeType === 'delete' || changeType === 'backspace') {
            // isDel is true If the characters are removed LTR, otherwise RTL
            var isDel = changeType === 'delete';
            var charCount = selectionEnd - selectionStart;
            if (charCount) {
                // charCount is > 0 if range was deleted
                internalState.maskCharData = inputMask_1.clearRange(internalState.maskCharData, selectionStart, charCount);
                cursorPos = inputMask_1.getRightFormatIndex(internalState.maskCharData, selectionStart);
            }
            else {
                // If charCount === 0, there was no selection and a single character was deleted
                if (isDel) {
                    internalState.maskCharData = inputMask_1.clearNext(internalState.maskCharData, selectionStart);
                    cursorPos = inputMask_1.getRightFormatIndex(internalState.maskCharData, selectionStart);
                }
                else {
                    internalState.maskCharData = inputMask_1.clearPrev(internalState.maskCharData, selectionStart);
                    cursorPos = inputMask_1.getLeftFormatIndex(internalState.maskCharData, selectionStart);
                }
            }
        }
        else if (inputValue.length > displayValue.length) {
            // This case is if the user added characters
            var charCount = inputValue.length - displayValue.length;
            var startPos = selectionEnd - charCount;
            var enteredString = inputValue.substr(startPos, charCount);
            cursorPos = inputMask_1.insertString(internalState.maskCharData, startPos, enteredString);
        }
        else if (inputValue.length <= displayValue.length) {
            /**
             * This case is reached only if the user has selected a block of 1 or more
             * characters and input a character replacing the characters they've selected.
             */
            var charCount = 1;
            var selectCount = displayValue.length + charCount - inputValue.length;
            var startPos = selectionEnd - charCount;
            var enteredString = inputValue.substr(startPos, charCount);
            // Clear the selected range
            internalState.maskCharData = inputMask_1.clearRange(internalState.maskCharData, startPos, selectCount);
            // Insert the printed character
            cursorPos = inputMask_1.insertString(internalState.maskCharData, startPos, enteredString);
        }
        internalState.changeSelectionData = null;
        var newValue = inputMask_1.getMaskDisplay(mask, internalState.maskCharData, maskChar);
        setDisplayValue(newValue);
        setMaskCursorPosition(cursorPos);
        // Perform onChange after input has been processed. Return value is expected to be the displayed text
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(ev, newValue);
    }, [displayValue.length, internalState, mask, maskChar, onChange]);
    var handleKeyDown = React.useCallback(function (ev) {
        var _a;
        (_a = onKeyDown) === null || _a === void 0 ? void 0 : _a(ev);
        internalState.changeSelectionData = null;
        if (textField.current && textField.current.value) {
            var keyCode = ev.keyCode, ctrlKey = ev.ctrlKey, metaKey = ev.metaKey;
            // Ignore ctrl and meta keydown
            if (ctrlKey || metaKey) {
                return;
            }
            // On backspace or delete, store the selection and the keyCode
            if (keyCode === Utilities_1.KeyCodes.backspace || keyCode === Utilities_1.KeyCodes.del) {
                var selectionStart = ev.target.selectionStart;
                var selectionEnd = ev.target.selectionEnd;
                // Check if backspace or delete press is valid.
                if (!(keyCode === Utilities_1.KeyCodes.backspace && selectionEnd && selectionEnd > 0) &&
                    !(keyCode === Utilities_1.KeyCodes.del && selectionStart !== null && selectionStart < textField.current.value.length)) {
                    return;
                }
                internalState.changeSelectionData = {
                    changeType: keyCode === Utilities_1.KeyCodes.backspace ? 'backspace' : 'delete',
                    selectionStart: selectionStart !== null ? selectionStart : -1,
                    selectionEnd: selectionEnd !== null ? selectionEnd : -1,
                };
            }
        }
    }, [internalState, onKeyDown]);
    var handlePaste = React.useCallback(function (ev) {
        var _a;
        (_a = onPaste) === null || _a === void 0 ? void 0 : _a(ev);
        var selectionStart = ev.target.selectionStart;
        var selectionEnd = ev.target.selectionEnd;
        // Store the paste selection range
        internalState.changeSelectionData = {
            changeType: 'textPasted',
            selectionStart: selectionStart !== null ? selectionStart : -1,
            selectionEnd: selectionEnd !== null ? selectionEnd : -1,
        };
    }, [internalState, onPaste]);
    // Updates the display value if mask or value props change.
    React.useEffect(function () {
        internalState.maskCharData = inputMask_1.parseMask(mask, maskFormat);
        value !== undefined && setValue(value);
        setDisplayValue(inputMask_1.getMaskDisplay(mask, internalState.maskCharData, maskChar));
        // eslint-disable-next-line react-hooks/exhaustive-deps -- Should only update when mask or value changes.
    }, [mask, value]);
    // Run before browser paint to avoid flickering from selection reset.
    React.useLayoutEffect(function () {
        // Move the cursor to position before paint.
        if (maskCursorPosition !== undefined && textField.current) {
            textField.current.setSelectionRange(maskCursorPosition, maskCursorPosition);
        }
    }, [maskCursorPosition]);
    // Run after browser paint.
    React.useEffect(function () {
        // Move the cursor to the start of the mask format after values update.
        if (internalState.isFocused && maskCursorPosition !== undefined && textField.current) {
            textField.current.setSelectionRange(maskCursorPosition, maskCursorPosition);
        }
    });
    useComponentRef(componentRef, internalState, textField);
    return (React.createElement(TextField_1.TextField, tslib_1.__assign({}, props, { elementRef: ref, onFocus: handleFocus, onBlur: handleBlur, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onChange: handleInputChange, onKeyDown: handleKeyDown, onPaste: handlePaste, value: displayValue || '', componentRef: textField })));
});
exports.MaskedTextField.displayName = COMPONENT_NAME;
//# sourceMappingURL=MaskedTextField.js.map