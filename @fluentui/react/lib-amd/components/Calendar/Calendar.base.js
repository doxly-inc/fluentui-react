define(["require", "exports", "tslib", "react", "@fluentui/date-time-utilities", "./CalendarDay/CalendarDay", "./CalendarMonth/CalendarMonth", "@fluentui/utilities", "@fluentui/react-hooks", "./defaults"], function (require, exports, tslib_1, React, date_time_utilities_1, CalendarDay_1, CalendarMonth_1, utilities_1, react_hooks_1, defaults_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = utilities_1.classNamesFunction();
    var defaultWorkWeekDays = [
        date_time_utilities_1.DayOfWeek.Monday,
        date_time_utilities_1.DayOfWeek.Tuesday,
        date_time_utilities_1.DayOfWeek.Wednesday,
        date_time_utilities_1.DayOfWeek.Thursday,
        date_time_utilities_1.DayOfWeek.Friday,
    ];
    var DEFAULT_PROPS = {
        isMonthPickerVisible: true,
        isDayPickerVisible: true,
        showMonthPickerAsOverlay: false,
        today: new Date(),
        firstDayOfWeek: date_time_utilities_1.DayOfWeek.Sunday,
        dateRangeType: date_time_utilities_1.DateRangeType.Day,
        showGoToToday: true,
        strings: date_time_utilities_1.DEFAULT_CALENDAR_STRINGS,
        highlightCurrentMonth: false,
        highlightSelectedMonth: false,
        navigationIcons: defaults_1.defaultCalendarNavigationIcons,
        showWeekNumbers: false,
        firstWeekOfYear: date_time_utilities_1.FirstWeekOfYear.FirstDay,
        dateTimeFormatter: date_time_utilities_1.DEFAULT_DATE_FORMATTING,
        showSixWeeksByDefault: false,
        workWeekDays: defaultWorkWeekDays,
        showCloseButton: false,
        allFocusable: false,
    };
    function useDateState(_a) {
        var value = _a.value, _b = _a.today, today = _b === void 0 ? new Date() : _b, onSelectDate = _a.onSelectDate;
        /** The currently selected date in the calendar */
        var _c = react_hooks_1.useControllableValue(value, today), _d = _c[0], selectedDate = _d === void 0 ? today : _d, setSelectedDate = _c[1];
        /** The currently focused date in the day picker, but not necessarily selected */
        var _e = React.useState(value), _f = _e[0], navigatedDay = _f === void 0 ? today : _f, setNavigatedDay = _e[1];
        /** The currently focused date in the month picker, but not necessarily selected */
        var _g = React.useState(value), _h = _g[0], navigatedMonth = _h === void 0 ? today : _h, setNavigatedMonth = _g[1];
        /** If using a controlled value, when that value changes, navigate to that date */
        var _j = React.useState(value), _k = _j[0], lastSelectedDate = _k === void 0 ? today : _k, setLastSelectedDate = _j[1];
        if (value && lastSelectedDate.valueOf() !== value.valueOf()) {
            setNavigatedDay(value);
            setNavigatedMonth(value);
            setLastSelectedDate(value);
        }
        var navigateMonth = function (date) {
            setNavigatedMonth(date);
        };
        var navigateDay = function (date) {
            setNavigatedMonth(date);
            setNavigatedDay(date);
        };
        var onDateSelected = function (date, selectedDateRangeArray) {
            var _a;
            setNavigatedMonth(date);
            setNavigatedDay(date);
            setSelectedDate(date);
            (_a = onSelectDate) === null || _a === void 0 ? void 0 : _a(date, selectedDateRangeArray);
        };
        return [selectedDate, navigatedDay, navigatedMonth, onDateSelected, navigateDay, navigateMonth];
    }
    function useVisibilityState(props) {
        /** State used to show/hide month picker */
        var _a = react_hooks_1.useControllableValue(props.showMonthPickerAsOverlay ? undefined : props.isMonthPickerVisible, false), _b = _a[0], isMonthPickerVisible = _b === void 0 ? true : _b, setIsMonthPickerVisible = _a[1];
        /** State used to show/hide day picker */
        var _c = react_hooks_1.useControllableValue(props.showMonthPickerAsOverlay ? undefined : props.isDayPickerVisible, true), _d = _c[0], isDayPickerVisible = _d === void 0 ? true : _d, setIsDayPickerVisible = _c[1];
        var toggleDayMonthPickerVisibility = function () {
            setIsMonthPickerVisible(!isMonthPickerVisible);
            setIsDayPickerVisible(!isDayPickerVisible);
        };
        return [isMonthPickerVisible, isDayPickerVisible, toggleDayMonthPickerVisibility];
    }
    function useFocusLogic(_a, isDayPickerVisible, isMonthPickerVisible) {
        var componentRef = _a.componentRef;
        var dayPicker = React.useRef(null);
        var monthPicker = React.useRef(null);
        var focusOnUpdate = React.useRef(false);
        var focus = React.useCallback(function () {
            if (isDayPickerVisible && dayPicker.current) {
                utilities_1.focusAsync(dayPicker.current);
            }
            else if (isMonthPickerVisible && monthPicker.current) {
                utilities_1.focusAsync(monthPicker.current);
            }
        }, [isDayPickerVisible, isMonthPickerVisible]);
        React.useImperativeHandle(componentRef, function () { return ({ focus: focus }); }, [focus]);
        React.useEffect(function () {
            if (focusOnUpdate.current) {
                focus();
                focusOnUpdate.current = false;
            }
        });
        var focusOnNextUpdate = function () {
            focusOnUpdate.current = true;
        };
        return [dayPicker, monthPicker, focusOnNextUpdate];
    }
    exports.CalendarBase = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
        var props = utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
        var _a = useDateState(props), selectedDate = _a[0], navigatedDay = _a[1], navigatedMonth = _a[2], onDateSelected = _a[3], navigateDay = _a[4], navigateMonth = _a[5];
        var _b = useVisibilityState(props), isMonthPickerVisible = _b[0], isDayPickerVisible = _b[1], toggleDayMonthPickerVisibility = _b[2];
        var _c = useFocusLogic(props, isDayPickerVisible, isMonthPickerVisible), dayPicker = _c[0], monthPicker = _c[1], focusOnNextUpdate = _c[2];
        var renderGoToTodayButton = function () {
            var goTodayEnabled = showGoToToday;
            if (goTodayEnabled && today) {
                goTodayEnabled =
                    navigatedDay.getFullYear() !== today.getFullYear() ||
                        navigatedDay.getMonth() !== today.getMonth() ||
                        navigatedMonth.getFullYear() !== today.getFullYear() ||
                        navigatedMonth.getMonth() !== today.getMonth();
            }
            return (showGoToToday && (React.createElement("button", { className: utilities_1.css('js-goToday', classes.goTodayButton), onClick: onGotoToday, onKeyDown: onButtonKeyDown(onGotoToday), type: "button", disabled: !goTodayEnabled }, strings.goToToday)));
        };
        var onNavigateDayDate = function (date, focusOnNavigatedDay) {
            navigateDay(date);
            if (focusOnNavigatedDay) {
                focusOnNextUpdate();
            }
        };
        var onNavigateMonthDate = function (date, focusOnNavigatedDay) {
            if (focusOnNavigatedDay) {
                focusOnNextUpdate();
            }
            if (!focusOnNavigatedDay) {
                navigateMonth(date);
                return;
            }
            if (monthPickerOnly) {
                onDateSelected(date);
            }
            navigateDay(date);
        };
        var onHeaderSelect = props.showMonthPickerAsOverlay
            ? function () {
                toggleDayMonthPickerVisibility();
                focusOnNextUpdate();
            }
            : undefined;
        var onGotoToday = function () {
            navigateDay(today);
            focusOnNextUpdate();
        };
        var onButtonKeyDown = function (callback) {
            return function (ev) {
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case utilities_1.KeyCodes.enter:
                    case utilities_1.KeyCodes.space:
                        callback();
                        break;
                }
            };
        };
        var onDatePickerPopupKeyDown = function (ev) {
            var _a, _b;
            // eslint-disable-next-line deprecation/deprecation
            switch (ev.which) {
                case utilities_1.KeyCodes.enter:
                    ev.preventDefault();
                    break;
                case utilities_1.KeyCodes.backspace:
                    ev.preventDefault();
                    break;
                case utilities_1.KeyCodes.escape:
                    (_b = (_a = props).onDismiss) === null || _b === void 0 ? void 0 : _b.call(_a);
                    break;
                case utilities_1.KeyCodes.pageUp:
                    if (ev.ctrlKey) {
                        // go to next year
                        navigateDay(date_time_utilities_1.addYears(navigatedDay, 1));
                    }
                    else {
                        // go to next month
                        navigateDay(date_time_utilities_1.addMonths(navigatedDay, 1));
                    }
                    ev.preventDefault();
                    break;
                case utilities_1.KeyCodes.pageDown:
                    if (ev.ctrlKey) {
                        // go to previous year
                        navigateDay(date_time_utilities_1.addYears(navigatedDay, -1));
                    }
                    else {
                        // go to previous month
                        navigateDay(date_time_utilities_1.addMonths(navigatedDay, -1));
                    }
                    ev.preventDefault();
                    break;
                default:
                    break;
            }
        };
        var rootClass = 'ms-DatePicker';
        var firstDayOfWeek = props.firstDayOfWeek, dateRangeType = props.dateRangeType, strings = props.strings, showMonthPickerAsOverlay = props.showMonthPickerAsOverlay, showGoToToday = props.showGoToToday, highlightCurrentMonth = props.highlightCurrentMonth, highlightSelectedMonth = props.highlightSelectedMonth, navigationIcons = props.navigationIcons, minDate = props.minDate, maxDate = props.maxDate, restrictedDates = props.restrictedDates, className = props.className, showCloseButton = props.showCloseButton, allFocusable = props.allFocusable, styles = props.styles, showWeekNumbers = props.showWeekNumbers, theme = props.theme, calendarDayProps = props.calendarDayProps, calendarMonthProps = props.calendarMonthProps, dateTimeFormatter = props.dateTimeFormatter, _d = props.today, today = _d === void 0 ? new Date() : _d;
        var monthPickerOnly = !showMonthPickerAsOverlay && !isDayPickerVisible;
        var overlaidWithButton = showMonthPickerAsOverlay && showGoToToday;
        var classes = getClassNames(styles, {
            theme: theme,
            className: className,
            isMonthPickerVisible: isMonthPickerVisible,
            isDayPickerVisible: isDayPickerVisible,
            monthPickerOnly: monthPickerOnly,
            showMonthPickerAsOverlay: showMonthPickerAsOverlay,
            overlaidWithButton: overlaidWithButton,
            overlayedWithButton: overlaidWithButton,
            showGoToToday: showGoToToday,
            showWeekNumbers: showWeekNumbers,
        });
        var todayDateString = '';
        var selectedDateString = '';
        if (dateTimeFormatter && strings.todayDateFormatString) {
            todayDateString = utilities_1.format(strings.todayDateFormatString, dateTimeFormatter.formatMonthDayYear(today, strings));
        }
        if (dateTimeFormatter && strings.selectedDateFormatString) {
            selectedDateString = utilities_1.format(strings.selectedDateFormatString, dateTimeFormatter.formatMonthDayYear(selectedDate, strings));
        }
        var selectionAndTodayString = selectedDateString + ', ' + todayDateString;
        return (React.createElement("div", { ref: forwardedRef, role: "group", "aria-label": selectionAndTodayString, className: utilities_1.css(rootClass, classes.root, className, 'ms-slideDownIn10'), onKeyDown: onDatePickerPopupKeyDown },
            React.createElement("div", { className: classes.liveRegion, "aria-live": "polite", "aria-atomic": "true" },
                React.createElement("span", null, selectedDateString)),
            isDayPickerVisible && (React.createElement(CalendarDay_1.CalendarDay, tslib_1.__assign({ selectedDate: selectedDate, navigatedDate: navigatedDay, today: props.today, onSelectDate: onDateSelected, 
                // eslint-disable-next-line react/jsx-no-bind
                onNavigateDate: onNavigateDayDate, onDismiss: props.onDismiss, firstDayOfWeek: firstDayOfWeek, dateRangeType: dateRangeType, strings: strings, 
                // eslint-disable-next-line react/jsx-no-bind
                onHeaderSelect: onHeaderSelect, navigationIcons: navigationIcons, showWeekNumbers: props.showWeekNumbers, firstWeekOfYear: props.firstWeekOfYear, dateTimeFormatter: props.dateTimeFormatter, showSixWeeksByDefault: props.showSixWeeksByDefault, minDate: minDate, maxDate: maxDate, restrictedDates: restrictedDates, workWeekDays: props.workWeekDays, componentRef: dayPicker, showCloseButton: showCloseButton, allFocusable: allFocusable }, calendarDayProps))),
            isDayPickerVisible && isMonthPickerVisible && React.createElement("div", { className: classes.divider }),
            isMonthPickerVisible ? (React.createElement("div", { className: classes.monthPickerWrapper },
                React.createElement(CalendarMonth_1.CalendarMonth, tslib_1.__assign({ navigatedDate: navigatedMonth, selectedDate: navigatedDay, strings: strings, 
                    // eslint-disable-next-line react/jsx-no-bind
                    onNavigateDate: onNavigateMonthDate, today: props.today, highlightCurrentMonth: highlightCurrentMonth, highlightSelectedMonth: highlightSelectedMonth, 
                    // eslint-disable-next-line react/jsx-no-bind
                    onHeaderSelect: onHeaderSelect, navigationIcons: navigationIcons, dateTimeFormatter: props.dateTimeFormatter, minDate: minDate, maxDate: maxDate, componentRef: monthPicker }, calendarMonthProps)),
                renderGoToTodayButton())) : (renderGoToTodayButton()),
            React.createElement(utilities_1.FocusRects, null)));
    });
    exports.CalendarBase.displayName = 'CalendarBase';
});
//# sourceMappingURL=Calendar.base.js.map