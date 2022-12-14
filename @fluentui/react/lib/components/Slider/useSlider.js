import { __assign } from "tslib";
import * as React from 'react';
import { useId, useBoolean, useControllableValue } from '@fluentui/react-hooks';
import { KeyCodes, css, getRTL, getRTLSafeKeyCode, on, classNamesFunction, getNativeProps, divProperties, } from '@fluentui/utilities';
export var ONKEYDOWN_TIMEOUT_DURATION = 1000;
var getClassNames = classNamesFunction();
var getSlotStyleFn = function (sty) {
    return function (value) {
        var _a;
        return _a = {},
            _a[sty] = value + "%",
            _a;
    };
};
var getPositionStyleFn = function (vertical, rtl) {
    if (vertical === void 0) { vertical = false; }
    if (rtl === void 0) { rtl = false; }
    if (vertical) {
        return getSlotStyleFn('bottom');
    }
    return getSlotStyleFn(rtl ? 'right' : 'left');
};
var getPercent = function (value, sliderMin, sliderMax) {
    return sliderMax === sliderMin ? 0 : ((value - sliderMin) / (sliderMax - sliderMin)) * 100;
};
var getLineSectionStylesFn = function (vertical) {
    if (vertical === void 0) { vertical = false; }
    var lengthString = vertical ? 'height' : 'width';
    return getSlotStyleFn(lengthString);
};
var useComponentRef = function (props, thumb, value, range) {
    React.useImperativeHandle(props.componentRef, function () { return ({
        get value() {
            return value;
        },
        get range() {
            return props.ranged ? range : undefined;
        },
        focus: function () {
            if (thumb.current) {
                thumb.current.focus();
            }
        },
    }); }, [thumb, value, props.ranged, range]);
};
export var useSlider = function (props, ref) {
    var _a = props.step, step = _a === void 0 ? 1 : _a, className = props.className, _b = props.disabled, disabled = _b === void 0 ? false : _b, label = props.label, _c = props.max, max = _c === void 0 ? 10 : _c, _d = props.min, min = _d === void 0 ? 0 : _d, _e = props.showValue, showValue = _e === void 0 ? true : _e, _f = props.buttonProps, buttonProps = _f === void 0 ? {} : _f, _g = props.vertical, vertical = _g === void 0 ? false : _g, valueFormat = props.valueFormat, styles = props.styles, theme = props.theme, originFromZero = props.originFromZero, ariaLabel = props["aria-label"], ranged = props.ranged;
    var disposables = React.useRef([]);
    var sliderLine = React.useRef(null);
    var _h = useControllableValue(props.value, props.defaultValue, function (ev, v) { var _a, _b; return (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, v, ranged ? [lowerValue, v] : undefined); }), unclampedValue = _h[0], setValue = _h[1];
    var _j = useControllableValue(props.lowerValue, props.defaultLowerValue, function (ev, lv) { var _a, _b; return (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value, [lv, value]); }), unclampedLowerValue = _j[0], setLowerValue = _j[1];
    var isAdjustingLowerValueRef = React.useRef(false);
    // Ensure that value is always a number and is clamped by min/max.
    var value = Math.max(min, Math.min(max, unclampedValue || 0));
    var lowerValue = Math.max(min, Math.min(value, unclampedLowerValue || 0));
    var id = useId('Slider');
    var _k = useBoolean(true), useShowTransitions = _k[0], toggleUseShowTransitions = _k[1].toggle;
    var classNames = getClassNames(styles, {
        className: className,
        disabled: disabled,
        vertical: vertical,
        showTransitions: useShowTransitions,
        showValue: showValue,
        ranged: ranged,
        theme: theme,
    });
    var _l = React.useState(0), timerId = _l[0], setTimerId = _l[1];
    var steps = (max - min) / step;
    var clearOnKeyDownTimer = function () {
        clearTimeout(timerId);
    };
    var setOnKeyDownTimer = function (event) {
        clearOnKeyDownTimer();
        setTimerId(setTimeout(function () {
            if (props.onChanged) {
                props.onChanged(event, value);
            }
        }, ONKEYDOWN_TIMEOUT_DURATION));
    };
    var getAriaValueText = function (valueProps) {
        var ariaValueText = props.ariaValueText;
        if (valueProps !== undefined) {
            return ariaValueText ? ariaValueText(valueProps) : valueProps.toString();
        }
        return undefined;
    };
    var updateValue = function (valueProp, renderedValueProp) {
        var snapToStep = props.snapToStep;
        var numDec = 0;
        if (isFinite(step)) {
            while (Math.round(step * Math.pow(10, numDec)) / Math.pow(10, numDec) !== step) {
                numDec++;
            }
        }
        // Make sure value has correct number of decimal places based on number of decimals in step
        var roundedValue = parseFloat(valueProp.toFixed(numDec));
        if (snapToStep) {
            renderedValueProp = roundedValue;
        }
        if (ranged) {
            // decided which thumb value to change
            if (isAdjustingLowerValueRef.current && (originFromZero ? roundedValue <= 0 : roundedValue <= value)) {
                setLowerValue(roundedValue);
            }
            else if (!isAdjustingLowerValueRef.current &&
                (originFromZero ? roundedValue >= 0 : roundedValue >= lowerValue)) {
                setValue(roundedValue);
            }
        }
        else {
            setValue(roundedValue);
        }
    };
    var onKeyDown = function (event) {
        var newCurrentValue = isAdjustingLowerValueRef.current ? lowerValue : value;
        var diff = 0;
        // eslint-disable-next-line deprecation/deprecation
        switch (event.which) {
            case getRTLSafeKeyCode(KeyCodes.left, props.theme):
            case KeyCodes.down:
                diff = -step;
                clearOnKeyDownTimer();
                setOnKeyDownTimer(event);
                break;
            case getRTLSafeKeyCode(KeyCodes.right, props.theme):
            case KeyCodes.up:
                diff = step;
                clearOnKeyDownTimer();
                setOnKeyDownTimer(event);
                break;
            case KeyCodes.home:
                newCurrentValue = min;
                break;
            case KeyCodes.end:
                newCurrentValue = max;
                break;
            default:
                return;
        }
        var newValue = Math.min(max, Math.max(min, newCurrentValue + diff));
        updateValue(newValue, newValue);
        event.preventDefault();
        event.stopPropagation();
    };
    var getPosition = function (event, verticalProp) {
        var currentPosition;
        switch (event.type) {
            case 'mousedown':
            case 'mousemove':
                currentPosition = !verticalProp ? event.clientX : event.clientY;
                break;
            case 'touchstart':
            case 'touchmove':
                currentPosition = !verticalProp
                    ? event.touches[0].clientX
                    : event.touches[0].clientY;
                break;
        }
        return currentPosition;
    };
    var calculateCurrentSteps = function (event) {
        if (!sliderLine.current) {
            return;
        }
        var sliderPositionRect = sliderLine.current.getBoundingClientRect();
        var sliderLength = !props.vertical ? sliderPositionRect.width : sliderPositionRect.height;
        var stepLength = sliderLength / steps;
        var currentSteps;
        var distance;
        if (!props.vertical) {
            var left = getPosition(event, props.vertical);
            distance = getRTL(props.theme) ? sliderPositionRect.right - left : left - sliderPositionRect.left;
            currentSteps = distance / stepLength;
        }
        else {
            var bottom = getPosition(event, props.vertical);
            distance = sliderPositionRect.bottom - bottom;
            currentSteps = distance / stepLength;
        }
        return currentSteps;
    };
    var onMouseMoveOrTouchMove = function (event, suppressEventCancelation) {
        var currentSteps = calculateCurrentSteps(event);
        var newCurrentValue;
        var newRenderedValue;
        // The value shouldn't be bigger than max or be smaller than min.
        if (currentSteps > Math.floor(steps)) {
            newRenderedValue = newCurrentValue = max;
        }
        else if (currentSteps < 0) {
            newRenderedValue = newCurrentValue = min;
        }
        else {
            newRenderedValue = min + step * currentSteps;
            newCurrentValue = min + step * Math.round(currentSteps);
        }
        updateValue(newCurrentValue, newRenderedValue);
        if (!suppressEventCancelation) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    var onMouseDownOrTouchStart = function (event) {
        if (ranged) {
            var currentSteps = calculateCurrentSteps(event);
            var newRenderedValue = min + step * currentSteps;
            if (newRenderedValue <= lowerValue || newRenderedValue - lowerValue <= value - newRenderedValue) {
                isAdjustingLowerValueRef.current = true;
            }
            else {
                isAdjustingLowerValueRef.current = false;
            }
        }
        if (event.type === 'mousedown') {
            disposables.current.push(on(window, 'mousemove', onMouseMoveOrTouchMove, true), on(window, 'mouseup', onMouseUpOrTouchEnd, true));
        }
        else if (event.type === 'touchstart') {
            disposables.current.push(on(window, 'touchmove', onMouseMoveOrTouchMove, true), on(window, 'touchend', onMouseUpOrTouchEnd, true));
        }
        toggleUseShowTransitions();
        onMouseMoveOrTouchMove(event, true);
    };
    var onMouseUpOrTouchEnd = function (event) {
        if (props.onChanged) {
            props.onChanged(event, value);
        }
        toggleUseShowTransitions();
        disposeListeners();
    };
    var onThumbFocus = function (event) {
        isAdjustingLowerValueRef.current = event.target === lowerValueThumbRef.current;
    };
    var disposeListeners = function () {
        disposables.current.forEach(function (dispose) { return dispose(); });
        disposables.current = [];
    };
    var onMouseDownProp = disabled ? {} : { onMouseDown: onMouseDownOrTouchStart };
    var onTouchStartProp = disabled ? {} : { onTouchStart: onMouseDownOrTouchStart };
    var onKeyDownProp = disabled ? {} : { onKeyDown: onKeyDown };
    var onFocusProp = disabled ? {} : { onFocus: onThumbFocus };
    var lowerValueThumbRef = React.useRef(null);
    var thumbRef = React.useRef(null);
    useComponentRef(props, ranged && !vertical ? lowerValueThumbRef : thumbRef, value, [lowerValue, value]);
    var getPositionStyles = getPositionStyleFn(vertical, getRTL(props.theme));
    var getTrackStyles = getLineSectionStylesFn(vertical);
    var originValue = originFromZero ? 0 : min;
    var valuePercent = getPercent(value, min, max);
    var lowerValuePercent = getPercent(lowerValue, min, max);
    var originPercentOfLine = getPercent(originValue, min, max);
    var activeSectionWidth = ranged ? valuePercent - lowerValuePercent : Math.abs(originPercentOfLine - valuePercent);
    var topSectionWidth = Math.min(100 - valuePercent, 100 - originPercentOfLine);
    var bottomSectionWidth = ranged ? lowerValuePercent : Math.min(valuePercent, originPercentOfLine);
    var rootProps = {
        className: classNames.root,
        ref: ref,
    };
    var divButtonProps = buttonProps
        ? getNativeProps(buttonProps, divProperties)
        : undefined;
    var labelProps = {
        className: classNames.titleLabel,
        children: label,
        disabled: disabled,
        htmlFor: ariaLabel ? undefined : id,
    };
    var valueLabelProps = showValue
        ? {
            className: classNames.valueLabel,
            children: valueFormat ? valueFormat(value) : value,
            disabled: disabled,
        }
        : undefined;
    var lowerValueLabelProps = ranged && showValue
        ? {
            className: classNames.valueLabel,
            children: valueFormat ? valueFormat(lowerValue) : lowerValue,
            disabled: disabled,
        }
        : undefined;
    var zeroTickProps = originFromZero
        ? {
            className: classNames.zeroTick,
            style: getPositionStyles(originPercentOfLine),
        }
        : undefined;
    var trackActiveProps = {
        className: css(classNames.lineContainer, classNames.activeSection),
        style: getTrackStyles(activeSectionWidth),
    };
    var trackTopInactiveProps = {
        className: css(classNames.lineContainer, classNames.inactiveSection),
        style: getTrackStyles(topSectionWidth),
    };
    var trackBottomInactiveProps = {
        className: css(classNames.lineContainer, classNames.inactiveSection),
        style: getTrackStyles(bottomSectionWidth),
    };
    var eventProps = __assign(__assign(__assign(__assign({}, onMouseDownProp), onTouchStartProp), onKeyDownProp), divButtonProps);
    var sliderProps = __assign({ 'aria-disabled': disabled, role: 'slider', tabIndex: disabled ? undefined : 0 }, { 'data-is-focusable': !disabled });
    var sliderBoxProps = __assign(__assign({ id: id, className: css(classNames.slideBox, buttonProps.className) }, eventProps), (!ranged && __assign(__assign({}, sliderProps), { 'aria-valuemin': min, 'aria-valuemax': max, 'aria-valuenow': value, 'aria-valuetext': getAriaValueText(value), 'aria-label': ariaLabel || label })));
    var thumbProps = __assign({ ref: thumbRef, className: classNames.thumb, style: getPositionStyles(valuePercent) }, (ranged && __assign(__assign(__assign(__assign({}, sliderProps), eventProps), onFocusProp), { id: "max-" + id, 'aria-valuemin': lowerValue, 'aria-valuemax': max, 'aria-valuenow': value, 'aria-valuetext': getAriaValueText(value), 'aria-label': "max " + (ariaLabel || label) })));
    var lowerValueThumbProps = ranged
        ? __assign(__assign(__assign(__assign({ ref: lowerValueThumbRef, className: classNames.thumb, style: getPositionStyles(lowerValuePercent) }, sliderProps), eventProps), onFocusProp), { id: "min-" + id, 'aria-valuemin': min, 'aria-valuemax': value, 'aria-valuenow': lowerValue, 'aria-valuetext': getAriaValueText(lowerValue), 'aria-label': "min " + (ariaLabel || label) }) : undefined;
    var containerProps = {
        className: classNames.container,
    };
    var sliderLineProps = {
        ref: sliderLine,
        className: classNames.line,
    };
    return {
        root: rootProps,
        label: labelProps,
        sliderBox: sliderBoxProps,
        container: containerProps,
        valueLabel: valueLabelProps,
        lowerValueLabel: lowerValueLabelProps,
        thumb: thumbProps,
        lowerValueThumb: lowerValueThumbProps,
        zeroTick: zeroTickProps,
        activeTrack: trackActiveProps,
        topInactiveTrack: trackTopInactiveProps,
        bottomInactiveTrack: trackBottomInactiveProps,
        sliderLine: sliderLineProps,
    };
};
//# sourceMappingURL=useSlider.js.map