import { __assign } from "tslib";
import * as React from 'react';
import { IconButton } from '../../Button';
import { Label } from '../../Label';
import { Icon } from '../../Icon';
import { KeyCodes, calculatePrecision, classNamesFunction, precisionRound, getNativeProps, getPropsWithDefaults, divProperties, } from '../../Utilities';
import { getArrowButtonStyles } from './SpinButton.styles';
import { KeyboardSpinDirection } from './SpinButton.types';
import { Position } from '../../Positioning';
import { useAsync, useControllableValue, useWarnings, useId, usePrevious } from '@fluentui/react-hooks';
var getClassNames = classNamesFunction();
var COMPONENT_NAME = 'SpinButton';
var DEFAULT_PROPS = {
    disabled: false,
    label: '',
    step: 1,
    labelPosition: Position.start,
    incrementButtonIcon: { iconName: 'ChevronUpSmall' },
    decrementButtonIcon: { iconName: 'ChevronDownSmall' },
};
var INITIAL_STEP_DELAY = 400;
var STEP_DELAY = 75;
var useComponentRef = function (props, input, value) {
    React.useImperativeHandle(props.componentRef, function () { return ({
        get value() {
            return value;
        },
        focus: function () {
            if (input.current) {
                input.current.focus();
            }
        },
    }); }, [input, value]);
};
var noOp = function () {
    /**
     * A noop input change handler. Using onInput instead of onChange was meant to address an issue
     * which apparently has been resolved in React 16 (https://github.com/facebook/react/issues/7027).
     * The no-op onChange handler was still needed because React gives console errors if an input
     * doesn't have onChange.
     *
     * TODO (Fabric 8?) - switch to just calling onChange (this is a breaking change for any tests,
     * ours or 3rd-party, which simulate entering text in a SpinButton)
     */
};
/** Clamp the value to the provided min and/or max */
var clampValue = function (value, _a) {
    var min = _a.min, max = _a.max;
    if (typeof max === 'number') {
        value = Math.min(value, max);
    }
    if (typeof min === 'number') {
        value = Math.max(value, min);
    }
    return value;
};
export var SpinButtonBase = React.forwardRef(function (propsWithoutDefaults, ref) {
    var props = getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
    var disabled = props.disabled, label = props.label, min = props.min, max = props.max, step = props.step, defaultValue = props.defaultValue, valueFromProps = props.value, precisionFromProps = props.precision, labelPosition = props.labelPosition, iconProps = props.iconProps, incrementButtonIcon = props.incrementButtonIcon, incrementButtonAriaLabel = props.incrementButtonAriaLabel, decrementButtonIcon = props.decrementButtonIcon, decrementButtonAriaLabel = props.decrementButtonAriaLabel, ariaLabel = props.ariaLabel, ariaDescribedBy = props.ariaDescribedBy, customUpArrowButtonStyles = props.upArrowButtonStyles, customDownArrowButtonStyles = props.downArrowButtonStyles, theme = props.theme, ariaPositionInSet = props.ariaPositionInSet, ariaSetSize = props.ariaSetSize, ariaValueNow = props.ariaValueNow, ariaValueText = props.ariaValueText, className = props.className, inputProps = props.inputProps, onDecrement = props.onDecrement, onIncrement = props.onIncrement, iconButtonProps = props.iconButtonProps, onValidate = props.onValidate, onChange = props.onChange, styles = props.styles;
    var input = React.useRef(null);
    var inputId = useId('input');
    var labelId = useId('Label');
    var _a = React.useState(false), isFocused = _a[0], setIsFocused = _a[1];
    var _b = React.useState(KeyboardSpinDirection.notSpinning), keyboardSpinDirection = _b[0], setKeyboardSpinDirection = _b[1];
    var async = useAsync();
    var precision = React.useMemo(function () {
        return (precisionFromProps !== null && precisionFromProps !== void 0 ? precisionFromProps : Math.max(calculatePrecision(step), 0));
    }, [precisionFromProps, step]);
    /**
     * Actual current value. If `props.value` is provided (controlled), it will always be used.
     * If not (uncontrolled), this tracks the current value based on user modifications.
     * Note that while the user is editing text in the field, this will not be updated until "commit"
     * (blur or press enter).
     */
    var _c = useControllableValue(valueFromProps, (defaultValue !== null && defaultValue !== void 0 ? defaultValue : String(min || 0)), onChange), value = _c[0], setValue = _c[1];
    /**
     * "Uncommitted" internal value while the user is editing text in the field. This lets us wait to
     * call `onChange` (and possibly update the real value) until the user "commits" the value by
     * pressing enter or blurring the field.
     */
    var _d = React.useState(), intermediateValue = _d[0], setIntermediateValue = _d[1];
    var internalState = React.useRef({
        stepTimeoutHandle: -1,
        latestValue: undefined,
        latestIntermediateValue: undefined,
    }).current;
    // On each render, update this saved value used by callbacks. (This should be safe even if render
    // is called multiple times, because an event handler or timeout callback will only run once.)
    internalState.latestValue = value;
    internalState.latestIntermediateValue = intermediateValue;
    var previousValueFromProps = usePrevious(valueFromProps);
    React.useEffect(function () {
        // If props.value changes while editing, clear the intermediate value
        if (valueFromProps !== previousValueFromProps && intermediateValue !== undefined) {
            setIntermediateValue(undefined);
        }
    }, [valueFromProps, previousValueFromProps, intermediateValue]);
    var classNames = getClassNames(styles, {
        theme: theme,
        disabled: disabled,
        isFocused: isFocused,
        keyboardSpinDirection: keyboardSpinDirection,
        labelPosition: labelPosition,
        className: className,
    });
    var nativeProps = getNativeProps(props, divProperties, [
        'onBlur',
        'onFocus',
        'className',
    ]);
    /** Validate (commit) function called on blur or enter keypress. */
    var validate = React.useCallback(function (ev) {
        // Only run validation if the value changed
        var enteredValue = internalState.latestIntermediateValue;
        if (enteredValue !== undefined && enteredValue !== internalState.latestValue) {
            var newValue = void 0;
            if (onValidate) {
                newValue = onValidate(enteredValue, ev);
            }
            else if (enteredValue && enteredValue.trim().length && !isNaN(Number(enteredValue))) {
                // default validation handling
                newValue = String(clampValue(Number(enteredValue), { min: min, max: max }));
            }
            if (newValue !== undefined && newValue !== internalState.latestValue) {
                // Commit the value if it changed
                setValue(newValue);
            }
        }
        // Done validating, so clear the intermediate typed value (if any)
        setIntermediateValue(undefined);
    }, [internalState, max, min, onValidate, setValue]);
    /**
     * Stop spinning (clear any currently pending update and set spinning to false)
     */
    var stop = React.useCallback(function () {
        if (internalState.stepTimeoutHandle >= 0) {
            async.clearTimeout(internalState.stepTimeoutHandle);
            internalState.stepTimeoutHandle = -1;
        }
        if (internalState.spinningByMouse || keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
            internalState.spinningByMouse = false;
            setKeyboardSpinDirection(KeyboardSpinDirection.notSpinning);
        }
    }, [internalState, keyboardSpinDirection, async]);
    /**
     * Update the value with the given stepFunction.
     * Also starts spinning for mousedown events by scheduling another update with setTimeout.
     * @param stepFunction - function to use to step by
     * @param event - The event that triggered the updateValue
     */
    var updateValue = React.useCallback(function (stepFunction, ev) {
        ev.persist();
        if (internalState.latestIntermediateValue !== undefined) {
            // Edge case: if intermediateValue is set, this means that the user was editing the input
            // text and then started spinning (either with mouse or keyboard). We need to validate and
            // call onChange before starting to spin.
            if (ev.type === 'keydown') {
                // For the arrow keys, we have to manually trigger validation.
                // (For the buttons, validation will happen automatically since the input's onBlur will
                // be triggered after mousedown on the button completes.)
                validate(ev);
            }
            async.requestAnimationFrame(function () {
                // After handling any value updates, do the spinning update
                updateValue(stepFunction, ev);
            });
            return;
        }
        // Call the step function and update the value.
        // (Note: we access the latest value via internalState (not directly) to ensure we don't use
        // a stale captured value. This is mainly important for spinning by mouse, where we trigger
        // additional calls to the original updateValue function via setTimeout. It also lets us
        // avoid useCallback deps on frequently changing values.)
        var newValue = stepFunction(internalState.latestValue || '', ev);
        if (newValue !== undefined && newValue !== internalState.latestValue) {
            setValue(newValue);
        }
        // Schedule the next spin if applicable
        // (will be canceled if there's a mouseup before the timeout runs)
        var wasSpinning = internalState.spinningByMouse;
        internalState.spinningByMouse = ev.type === 'mousedown';
        if (internalState.spinningByMouse) {
            internalState.stepTimeoutHandle = async.setTimeout(function () {
                updateValue(stepFunction, ev);
            }, wasSpinning ? STEP_DELAY : INITIAL_STEP_DELAY);
        }
    }, [internalState, async, validate, setValue]);
    /** Composed increment handler (uses `props.onIncrement` or default) */
    var handleIncrement = React.useCallback(function (newValue) {
        if (onIncrement) {
            return onIncrement(newValue);
        }
        else {
            var numericValue = clampValue(Number(newValue) + Number(step), { max: max });
            numericValue = precisionRound(numericValue, precision);
            return String(numericValue);
        }
    }, [precision, max, onIncrement, step]);
    /** Composed decrement handler (uses `props.onDecrement` or default) */
    var handleDecrement = React.useCallback(function (newValue) {
        if (onDecrement) {
            return onDecrement(newValue);
        }
        else {
            var numericValue = clampValue(Number(newValue) - Number(step), { min: min });
            numericValue = precisionRound(numericValue, precision);
            return String(numericValue);
        }
    }, [precision, min, onDecrement, step]);
    /** Handles when the user types in the input */
    var handleInputChange = function (ev) {
        setIntermediateValue(ev.target.value);
    };
    /** Composed focus handler (does internal stuff and calls `props.onFocus`) */
    var handleFocus = function (ev) {
        var _a, _b;
        // We can't set focus on a non-existing element
        if (!input.current) {
            return;
        }
        if (internalState.spinningByMouse || keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
            stop();
        }
        input.current.select();
        setIsFocused(true);
        (_b = (_a = props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, ev);
    };
    /** Composed blur handler (does internal stuff and calls `props.onBlur`) */
    var handleBlur = function (ev) {
        var _a, _b;
        validate(ev);
        setIsFocused(false);
        (_b = (_a = props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, ev);
    };
    /** Update value when arrow keys are pressed, commit on enter, or revert on escape */
    var handleKeyDown = function (ev) {
        // eat the up and down arrow keys to keep focus in the spinButton
        // (especially when a spinButton is inside of a FocusZone)
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === KeyCodes.up || ev.which === KeyCodes.down || ev.which === KeyCodes.enter) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (disabled) {
            stop();
            return;
        }
        var spinDirection = KeyboardSpinDirection.notSpinning;
        // eslint-disable-next-line deprecation/deprecation
        switch (ev.which) {
            case KeyCodes.up:
                spinDirection = KeyboardSpinDirection.up;
                updateValue(handleIncrement, ev);
                break;
            case KeyCodes.down:
                spinDirection = KeyboardSpinDirection.down;
                updateValue(handleDecrement, ev);
                break;
            case KeyCodes.enter:
                // Commit the edited value
                validate(ev);
                break;
            case KeyCodes.escape:
                // Revert to previous value
                setIntermediateValue(undefined);
                break;
        }
        // style the increment/decrement button to look active
        // when the corresponding up/down arrow keys trigger a step
        if (keyboardSpinDirection !== spinDirection) {
            setKeyboardSpinDirection(spinDirection);
        }
    };
    /** Stop spinning on keyUp if the up or down arrow key fired this event */
    var handleKeyUp = React.useCallback(function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        if (disabled || ev.which === KeyCodes.up || ev.which === KeyCodes.down) {
            stop();
            return;
        }
    }, [disabled, stop]);
    var handleIncrementMouseDown = React.useCallback(function (ev) {
        updateValue(handleIncrement, ev);
    }, [handleIncrement, updateValue]);
    var handleDecrementMouseDown = React.useCallback(function (ev) {
        updateValue(handleDecrement, ev);
    }, [handleDecrement, updateValue]);
    useComponentRef(props, input, value);
    useDebugWarnings(props);
    var valueIsNumber = !!value && !isNaN(Number(value)); // Number('') is 0 which may not be desirable
    var labelContent = (iconProps || label) && (React.createElement("div", { className: classNames.labelWrapper },
        iconProps && React.createElement(Icon, __assign({}, iconProps, { className: classNames.icon, "aria-hidden": "true" })),
        label && (React.createElement(Label, { id: labelId, htmlFor: inputId, className: classNames.label, disabled: disabled }, label))));
    return (React.createElement("div", { className: classNames.root, ref: ref },
        labelPosition !== Position.bottom && labelContent,
        React.createElement("div", __assign({}, nativeProps, { className: classNames.spinButtonWrapper, "aria-label": ariaLabel && ariaLabel, "aria-posinset": ariaPositionInSet, "aria-setsize": ariaSetSize, "data-ktp-target": true }),
            React.createElement("input", __assign({ 
                // Display intermediateValue while editing the text (before commit)
                value: (intermediateValue !== null && intermediateValue !== void 0 ? intermediateValue : value), id: inputId, onChange: noOp, onInput: handleInputChange, className: classNames.input, type: "text", autoComplete: "off", role: "spinbutton", "aria-labelledby": label && labelId, "aria-valuenow": (ariaValueNow !== null && ariaValueNow !== void 0 ? ariaValueNow : (valueIsNumber ? Number(value) : undefined)), "aria-valuetext": (ariaValueText !== null && ariaValueText !== void 0 ? ariaValueText : (valueIsNumber ? undefined : value)), "aria-valuemin": min, "aria-valuemax": max, "aria-describedby": ariaDescribedBy, onBlur: handleBlur, ref: input, onFocus: handleFocus, onKeyDown: handleKeyDown, onKeyUp: handleKeyUp, disabled: disabled, "aria-disabled": disabled, "data-lpignore": true, "data-ktp-execute-target": true }, inputProps)),
            React.createElement("span", { className: classNames.arrowButtonsContainer },
                React.createElement(IconButton, __assign({ styles: getArrowButtonStyles(theme, true, customUpArrowButtonStyles), className: 'ms-UpButton', checked: keyboardSpinDirection === KeyboardSpinDirection.up, disabled: disabled, iconProps: incrementButtonIcon, onMouseDown: handleIncrementMouseDown, onMouseLeave: stop, onMouseUp: stop, tabIndex: -1, ariaLabel: incrementButtonAriaLabel, "data-is-focusable": false }, iconButtonProps)),
                React.createElement(IconButton, __assign({ styles: getArrowButtonStyles(theme, false, customDownArrowButtonStyles), className: 'ms-DownButton', checked: keyboardSpinDirection === KeyboardSpinDirection.down, disabled: disabled, iconProps: decrementButtonIcon, onMouseDown: handleDecrementMouseDown, onMouseLeave: stop, onMouseUp: stop, tabIndex: -1, ariaLabel: decrementButtonAriaLabel, "data-is-focusable": false }, iconButtonProps)))),
        labelPosition === Position.bottom && labelContent));
});
SpinButtonBase.displayName = COMPONENT_NAME;
var useDebugWarnings = function (props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        useWarnings({
            name: COMPONENT_NAME,
            props: props,
            mutuallyExclusive: { value: 'defaultValue' },
        });
    }
};
//# sourceMappingURL=SpinButton.base.js.map