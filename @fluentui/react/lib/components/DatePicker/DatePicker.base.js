import { __assign } from "tslib";
import * as React from 'react';
import { KeyCodes, classNamesFunction, getNativeProps, divProperties, css, format, getPropsWithDefaults, } from '@fluentui/utilities';
import { Calendar } from '../../Calendar';
import { FirstWeekOfYear, getDatePartHashValue, compareDatePart, DayOfWeek } from '@fluentui/date-time-utilities';
import { Callout, DirectionalHint } from '../../Callout';
import { TextField } from '../../TextField';
import { FocusTrapZone } from '../../FocusTrapZone';
import { useId, useAsync, useControllableValue } from '@fluentui/react-hooks';
import { defaultDatePickerStrings } from './defaults';
var getClassNames = classNamesFunction();
var DEFAULT_PROPS = {
    allowTextInput: false,
    formatDate: function (date) { return (date ? date.toDateString() : ''); },
    parseDateFromString: function (dateStr) {
        var date = Date.parse(dateStr);
        return date ? new Date(date) : null;
    },
    firstDayOfWeek: DayOfWeek.Sunday,
    initialPickerDate: new Date(),
    isRequired: false,
    isMonthPickerVisible: true,
    showMonthPickerAsOverlay: false,
    strings: defaultDatePickerStrings,
    highlightCurrentMonth: false,
    highlightSelectedMonth: false,
    borderless: false,
    pickerAriaLabel: 'Calendar',
    showWeekNumbers: false,
    firstWeekOfYear: FirstWeekOfYear.FirstDay,
    showGoToToday: true,
    showCloseButton: false,
    underlined: false,
    allFocusable: false,
};
function useFocusLogic() {
    var textFieldRef = React.useRef(null);
    var preventFocusOpeningPicker = React.useRef(false);
    var focus = function () {
        var _a, _b, _c;
        (_c = (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : (_b = _a).focus) === null || _c === void 0 ? void 0 : _c.call(_b);
    };
    var preventNextFocusOpeningPicker = function () {
        preventFocusOpeningPicker.current = true;
    };
    return [textFieldRef, focus, preventFocusOpeningPicker, preventNextFocusOpeningPicker];
}
function useCalendarVisibility(_a, focus) {
    var allowTextInput = _a.allowTextInput, onAfterMenuDismiss = _a.onAfterMenuDismiss;
    var _b = React.useState(false), isCalendarShown = _b[0], setIsCalendarShown = _b[1];
    var isMounted = React.useRef(false);
    var async = useAsync();
    React.useEffect(function () {
        var _a;
        if (isMounted.current && !isCalendarShown) {
            // In browsers like IE, textfield gets unfocused when datepicker is collapsed
            if (allowTextInput) {
                async.requestAnimationFrame(focus);
            }
            // If DatePicker's menu (Calendar) is closed, run onAfterMenuDismiss
            (_a = onAfterMenuDismiss) === null || _a === void 0 ? void 0 : _a();
        }
        isMounted.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCalendarShown]);
    return [isCalendarShown, setIsCalendarShown];
}
function useSelectedDate(_a) {
    var formatDate = _a.formatDate, value = _a.value, onSelectDate = _a.onSelectDate;
    var _b = useControllableValue(value, undefined, function (ev, newValue) { var _a; return (_a = onSelectDate) === null || _a === void 0 ? void 0 : _a(newValue); }), selectedDate = _b[0], setSelectedDateState = _b[1];
    var _c = React.useState(function () { return (value && formatDate ? formatDate(value) : ''); }), formattedDate = _c[0], setFormattedDate = _c[1];
    var setSelectedDate = function (newDate) {
        setSelectedDateState(newDate);
        setFormattedDate(newDate && formatDate ? formatDate(newDate) : '');
    };
    React.useEffect(function () {
        setFormattedDate(value && formatDate ? formatDate(value) : '');
    }, [formatDate, value]);
    return [selectedDate, formattedDate, setSelectedDate, setFormattedDate];
}
function useErrorMessage(_a, selectedDate, setSelectedDate, inputValue, isCalendarShown) {
    var isRequired = _a.isRequired, allowTextInput = _a.allowTextInput, strings = _a.strings, parseDateFromString = _a.parseDateFromString, onSelectDate = _a.onSelectDate, formatDate = _a.formatDate, minDate = _a.minDate, maxDate = _a.maxDate;
    var _b = React.useState(), errorMessage = _b[0], setErrorMessage = _b[1];
    var _c = React.useState(), statusMessage = _c[0], setStatusMessage = _c[1];
    var validateTextInput = function (date) {
        if (date === void 0) { date = null; }
        var _a;
        if (allowTextInput) {
            if (inputValue || date) {
                // Don't parse if the selected date has the same formatted string as what we're about to parse.
                // The formatted string might be ambiguous (ex: "1/2/3" or "New Year Eve") and the parser might
                // not be able to come up with the exact same date.
                if (selectedDate && !errorMessage && formatDate && formatDate((date !== null && date !== void 0 ? date : selectedDate)) === inputValue) {
                    return;
                }
                date = date || parseDateFromString(inputValue);
                // Check if date is null, or date is Invalid Date
                if (!date || isNaN(date.getTime())) {
                    // Reset invalid input field, if formatting is available
                    setSelectedDate(selectedDate);
                    // default the newer isResetStatusMessage string to invalidInputErrorMessage for legacy support
                    var selectedText = formatDate ? formatDate(selectedDate) : '';
                    var statusText = strings.isResetStatusMessage
                        ? format(strings.isResetStatusMessage, inputValue, selectedText)
                        : strings.invalidInputErrorMessage || '';
                    setStatusMessage(statusText);
                }
                else {
                    // Check against optional date boundaries
                    if (isDateOutOfBounds(date, minDate, maxDate)) {
                        setErrorMessage(strings.isOutOfBoundsErrorMessage || ' ');
                    }
                    else {
                        setSelectedDate(date);
                        setErrorMessage(undefined);
                        setStatusMessage(undefined);
                    }
                }
            }
            else {
                // Only show error for empty inputValue if it is a required field
                setErrorMessage(isRequired ? strings.isRequiredErrorMessage || ' ' : undefined);
                // If no input date string or input date string is invalid
                // date variable will be null, callback should expect null value for this case
                (_a = onSelectDate) === null || _a === void 0 ? void 0 : _a(date);
            }
        }
        else if (isRequired && !inputValue) {
            // Check when DatePicker is a required field but has NO input value
            setErrorMessage(strings.isRequiredErrorMessage || ' ');
        }
        else {
            // Cleanup the error message and status message
            setErrorMessage(undefined);
            setStatusMessage(undefined);
        }
    };
    React.useEffect(function () {
        if (isRequired && !selectedDate) {
            setErrorMessage(strings.isRequiredErrorMessage || ' ');
        }
        else if (selectedDate && isDateOutOfBounds(selectedDate, minDate, maxDate)) {
            setErrorMessage(strings.isOutOfBoundsErrorMessage || ' ');
        }
        else {
            setErrorMessage(undefined);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        // We don't want to compare the date itself, since two instances of date at the same time are not equal
        // eslint-disable-next-line react-hooks/exhaustive-deps
        minDate && getDatePartHashValue(minDate),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        maxDate && getDatePartHashValue(maxDate),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        selectedDate && getDatePartHashValue(selectedDate),
        isRequired,
    ]);
    return [
        isCalendarShown ? undefined : errorMessage,
        validateTextInput,
        setErrorMessage,
        isCalendarShown ? undefined : statusMessage,
        setStatusMessage,
    ];
}
export var DatePickerBase = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
    var props = getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
    var firstDayOfWeek = props.firstDayOfWeek, strings = props.strings, label = props.label, theme = props.theme, className = props.className, styles = props.styles, initialPickerDate = props.initialPickerDate, isRequired = props.isRequired, disabled = props.disabled, ariaLabel = props.ariaLabel, pickerAriaLabel = props.pickerAriaLabel, placeholder = props.placeholder, allowTextInput = props.allowTextInput, borderless = props.borderless, minDate = props.minDate, maxDate = props.maxDate, showCloseButton = props.showCloseButton, calendarProps = props.calendarProps, calloutProps = props.calloutProps, textFieldProps = props.textField, underlined = props.underlined, allFocusable = props.allFocusable, _a = props.calendarAs, CalendarType = _a === void 0 ? Calendar : _a, tabIndex = props.tabIndex, _b = props.disableAutoFocus, disableAutoFocus = _b === void 0 ? true : _b;
    var id = useId('DatePicker', props.id);
    var calloutId = useId('DatePicker-Callout');
    var calendar = React.useRef(null);
    var datePickerDiv = React.useRef(null);
    var _c = useFocusLogic(), textFieldRef = _c[0], focus = _c[1], preventFocusOpeningPicker = _c[2], preventNextFocusOpeningPicker = _c[3];
    var _d = useCalendarVisibility(props, focus), isCalendarShown = _d[0], setIsCalendarShown = _d[1];
    var _e = useSelectedDate(props), selectedDate = _e[0], formattedDate = _e[1], setSelectedDate = _e[2], setFormattedDate = _e[3];
    var _f = useErrorMessage(props, selectedDate, setSelectedDate, formattedDate, isCalendarShown), errorMessage = _f[0], validateTextInput = _f[1], setErrorMessage = _f[2], statusMessage = _f[3], setStatusMessage = _f[4];
    var showDatePickerPopup = React.useCallback(function () {
        if (!isCalendarShown) {
            preventNextFocusOpeningPicker();
            setIsCalendarShown(true);
        }
    }, [isCalendarShown, preventNextFocusOpeningPicker, setIsCalendarShown]);
    React.useImperativeHandle(props.componentRef, function () { return ({
        focus: focus,
        reset: function () {
            setIsCalendarShown(false);
            setSelectedDate(undefined);
            setErrorMessage(undefined);
            setStatusMessage(undefined);
        },
        showDatePickerPopup: showDatePickerPopup,
    }); }, [focus, setErrorMessage, setIsCalendarShown, setSelectedDate, setStatusMessage, showDatePickerPopup]);
    var onTextFieldFocus = function () {
        if (disableAutoFocus) {
            return;
        }
        if (!allowTextInput) {
            if (!preventFocusOpeningPicker.current) {
                showDatePickerPopup();
            }
            preventFocusOpeningPicker.current = false;
        }
    };
    var onSelectDate = function (date) {
        if (props.calendarProps && props.calendarProps.onSelectDate) {
            props.calendarProps.onSelectDate(date);
        }
        calendarDismissed(date);
    };
    var onCalloutPositioned = function () {
        var shouldFocus = true;
        // If the user has specified that the callout shouldn't use initial focus, then respect
        // that and don't attempt to set focus. That will default to true within the callout
        // so we need to check if it's undefined here.
        if (props.calloutProps && props.calloutProps.setInitialFocus !== undefined) {
            shouldFocus = props.calloutProps.setInitialFocus;
        }
        if (calendar.current && shouldFocus) {
            calendar.current.focus();
        }
    };
    var onTextFieldBlur = function (ev) {
        validateTextInput();
    };
    var onTextFieldChanged = function (ev, newValue) {
        var _a, _b, _c;
        var textField = props.textField;
        if (allowTextInput) {
            if (isCalendarShown) {
                dismissDatePickerPopup();
            }
            setFormattedDate(newValue);
        }
        (_c = (_a = textField) === null || _a === void 0 ? void 0 : (_b = _a).onChange) === null || _c === void 0 ? void 0 : _c.call(_b, ev, newValue);
    };
    var onTextFieldKeyDown = function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        switch (ev.which) {
            case KeyCodes.enter:
                ev.preventDefault();
                ev.stopPropagation();
                if (!isCalendarShown) {
                    validateTextInput();
                    showDatePickerPopup();
                }
                else {
                    // When DatePicker allows input date string directly,
                    // it is expected to hit another enter to close the popup
                    if (props.allowTextInput) {
                        dismissDatePickerPopup();
                    }
                }
                break;
            case KeyCodes.escape:
                handleEscKey(ev);
                break;
            case KeyCodes.down:
                if (ev.altKey && !isCalendarShown) {
                    showDatePickerPopup();
                }
                break;
            default:
                break;
        }
    };
    var onTextFieldClick = function (ev) {
        // default openOnClick to !props.disableAutoFocus for legacy support of disableAutoFocus behavior
        var openOnClick = props.openOnClick || !props.disableAutoFocus;
        if (openOnClick && !isCalendarShown && !props.disabled) {
            showDatePickerPopup();
            return;
        }
        if (props.allowTextInput) {
            dismissDatePickerPopup();
        }
    };
    var onIconClick = function (ev) {
        ev.stopPropagation();
        if (!isCalendarShown && !props.disabled) {
            showDatePickerPopup();
        }
        else if (props.allowTextInput) {
            dismissDatePickerPopup();
        }
    };
    var dismissDatePickerPopup = function (newlySelectedDate) {
        if (isCalendarShown) {
            setIsCalendarShown(false);
            validateTextInput(newlySelectedDate);
            if (!allowTextInput && newlySelectedDate) {
                setSelectedDate(newlySelectedDate);
            }
        }
    };
    var renderTextfieldDescription = function (inputProps, defaultRender) {
        return (React.createElement(React.Fragment, null,
            inputProps.description ? defaultRender(inputProps) : null,
            React.createElement("div", { "aria-live": "assertive", className: classNames.statusMessage }, statusMessage)));
    };
    /**
     * Callback for closing the calendar callout
     */
    var calendarDismissed = function (newlySelectedDate) {
        preventNextFocusOpeningPicker();
        dismissDatePickerPopup(newlySelectedDate);
        // don't need to focus the text box, if necessary the focusTrapZone will do it
    };
    var calloutDismissed = function (ev) {
        calendarDismissed();
    };
    var handleEscKey = function (ev) {
        ev.stopPropagation();
        calendarDismissed();
    };
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        disabled: disabled,
        label: !!label,
        isDatePickerShown: isCalendarShown,
    });
    var nativeProps = getNativeProps(props, divProperties, ['value']);
    var iconProps = textFieldProps && textFieldProps.iconProps;
    return (React.createElement("div", __assign({}, nativeProps, { className: classNames.root, ref: forwardedRef }),
        React.createElement("div", { ref: datePickerDiv, "aria-haspopup": "true", "aria-owns": isCalendarShown ? calloutId : undefined, className: classNames.wrapper },
            React.createElement(TextField, __assign({ role: "combobox", label: label, "aria-expanded": isCalendarShown, ariaLabel: ariaLabel, "aria-controls": isCalendarShown ? calloutId : undefined, required: isRequired, disabled: disabled, errorMessage: errorMessage, placeholder: placeholder, borderless: borderless, value: formattedDate, componentRef: textFieldRef, underlined: underlined, tabIndex: tabIndex, readOnly: !allowTextInput }, textFieldProps, { id: id + '-label', className: css(classNames.textField, textFieldProps && textFieldProps.className), iconProps: __assign(__assign({ iconName: 'Calendar' }, iconProps), { className: css(classNames.icon, iconProps && iconProps.className), onClick: onIconClick }), 
                // eslint-disable-next-line react/jsx-no-bind
                onRenderDescription: renderTextfieldDescription, 
                // eslint-disable-next-line react/jsx-no-bind
                onKeyDown: onTextFieldKeyDown, 
                // eslint-disable-next-line react/jsx-no-bind
                onFocus: onTextFieldFocus, 
                // eslint-disable-next-line react/jsx-no-bind
                onBlur: onTextFieldBlur, 
                // eslint-disable-next-line react/jsx-no-bind
                onClick: onTextFieldClick, 
                // eslint-disable-next-line react/jsx-no-bind
                onChange: onTextFieldChanged }))),
        isCalendarShown && (React.createElement(Callout, __assign({ id: calloutId, role: "dialog", ariaLabel: pickerAriaLabel, isBeakVisible: false, gapSpace: 0, doNotLayer: false, target: datePickerDiv.current, directionalHint: DirectionalHint.bottomLeftEdge }, calloutProps, { className: css(classNames.callout, calloutProps && calloutProps.className), 
            // eslint-disable-next-line react/jsx-no-bind
            onDismiss: calloutDismissed, 
            // eslint-disable-next-line react/jsx-no-bind
            onPositioned: onCalloutPositioned }),
            React.createElement(FocusTrapZone, { isClickableOutsideFocusTrap: true, disableFirstFocus: disableAutoFocus },
                React.createElement(CalendarType, __assign({}, calendarProps, { 
                    // eslint-disable-next-line react/jsx-no-bind
                    onSelectDate: onSelectDate, 
                    // eslint-disable-next-line react/jsx-no-bind
                    onDismiss: calendarDismissed, isMonthPickerVisible: props.isMonthPickerVisible, showMonthPickerAsOverlay: props.showMonthPickerAsOverlay, today: props.today, value: selectedDate || initialPickerDate, firstDayOfWeek: firstDayOfWeek, strings: strings, highlightCurrentMonth: props.highlightCurrentMonth, highlightSelectedMonth: props.highlightSelectedMonth, showWeekNumbers: props.showWeekNumbers, firstWeekOfYear: props.firstWeekOfYear, showGoToToday: props.showGoToToday, dateTimeFormatter: props.dateTimeFormatter, minDate: minDate, maxDate: maxDate, componentRef: calendar, showCloseButton: showCloseButton, allFocusable: allFocusable })))))));
});
DatePickerBase.displayName = 'DatePickerBase';
function isDateOutOfBounds(date, minDate, maxDate) {
    return (!!minDate && compareDatePart(minDate, date) > 0) || (!!maxDate && compareDatePart(maxDate, date) < 0);
}
//# sourceMappingURL=DatePicker.base.js.map