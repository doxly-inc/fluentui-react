"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FocusZone_1 = require("../../../FocusZone");
var date_time_utilities_1 = require("@fluentui/date-time-utilities");
var Icon_1 = require("../../../Icon");
var CalendarMonth_styles_1 = require("./CalendarMonth.styles");
var utilities_1 = require("@fluentui/utilities");
var CalendarYear_1 = require("../CalendarYear/CalendarYear");
var react_hooks_1 = require("@fluentui/react-hooks");
var defaults_1 = require("../defaults");
var MONTHS_PER_ROW = 4;
var getClassNames = utilities_1.classNamesFunction();
var DEFAULT_PROPS = {
    styles: CalendarMonth_styles_1.getStyles,
    strings: undefined,
    navigationIcons: defaults_1.defaultCalendarNavigationIcons,
    dateTimeFormatter: date_time_utilities_1.DEFAULT_DATE_FORMATTING,
    yearPickerHidden: false,
};
function useAnimateBackwards(_a) {
    var navigatedDate = _a.navigatedDate;
    var currentYear = navigatedDate.getFullYear();
    var previousYear = react_hooks_1.usePrevious(currentYear);
    if (previousYear === undefined || previousYear === currentYear) {
        return undefined;
    }
    else {
        return previousYear > currentYear;
    }
}
function useFocusLogic(_a) {
    var componentRef = _a.componentRef;
    var navigatedMonthRef = React.useRef(null);
    var calendarYearRef = React.useRef(null);
    var focusOnUpdate = React.useRef(false);
    var focus = React.useCallback(function () {
        if (calendarYearRef.current) {
            calendarYearRef.current.focus();
        }
        else if (navigatedMonthRef.current) {
            navigatedMonthRef.current.focus();
        }
    }, []);
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
    return [navigatedMonthRef, calendarYearRef, focusOnNextUpdate];
}
exports.CalendarMonthBase = function (propsWithoutDefaults) {
    var _a, _b;
    var props = utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
    var _c = useFocusLogic(props), navigatedMonthRef = _c[0], calendarYearRef = _c[1], focusOnNextUpdate = _c[2];
    var _d = React.useState(false), isYearPickerVisible = _d[0], setIsYearPickerVisible = _d[1];
    var animateBackwards = useAnimateBackwards(props);
    var navigatedDate = props.navigatedDate, selectedDate = props.selectedDate, strings = props.strings, _e = props.today, today = _e === void 0 ? new Date() : _e, navigationIcons = props.navigationIcons, dateTimeFormatter = props.dateTimeFormatter, minDate = props.minDate, maxDate = props.maxDate, theme = props.theme, styles = props.styles, className = props.className, allFocusable = props.allFocusable, highlightCurrentMonth = props.highlightCurrentMonth, highlightSelectedMonth = props.highlightSelectedMonth, animationDirection = props.animationDirection, yearPickerHidden = props.yearPickerHidden, onNavigateDate = props.onNavigateDate;
    var selectMonthCallback = function (newMonth) {
        return function () { return onSelectMonth(newMonth); };
    };
    var onSelectNextYear = function () {
        onNavigateDate(date_time_utilities_1.addYears(navigatedDate, 1), false);
    };
    var onSelectPrevYear = function () {
        onNavigateDate(date_time_utilities_1.addYears(navigatedDate, -1), false);
    };
    var onSelectMonth = function (newMonth) {
        var _a, _b;
        // If header is clickable the calendars are overlayed, switch back to day picker when month is clicked
        (_b = (_a = props).onHeaderSelect) === null || _b === void 0 ? void 0 : _b.call(_a);
        onNavigateDate(date_time_utilities_1.setMonth(navigatedDate, newMonth), true);
    };
    var onHeaderSelect = function () {
        var _a, _b;
        if (!yearPickerHidden) {
            focusOnNextUpdate();
            setIsYearPickerVisible(true);
        }
        else {
            (_b = (_a = props).onHeaderSelect) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    };
    var onSelectYear = function (selectedYear) {
        focusOnNextUpdate();
        var navYear = navigatedDate.getFullYear();
        if (navYear !== selectedYear) {
            var newNavigationDate = new Date(navigatedDate.getTime());
            newNavigationDate.setFullYear(selectedYear);
            // for min and max dates, adjust the new navigation date - perhaps this should be
            // checked on the master navigation date handler (i.e. in Calendar)
            if (maxDate && newNavigationDate > maxDate) {
                newNavigationDate = date_time_utilities_1.setMonth(newNavigationDate, maxDate.getMonth());
            }
            else if (minDate && newNavigationDate < minDate) {
                newNavigationDate = date_time_utilities_1.setMonth(newNavigationDate, minDate.getMonth());
            }
            onNavigateDate(newNavigationDate, true);
        }
        setIsYearPickerVisible(false);
    };
    var onYearPickerHeaderSelect = function (focus) {
        focusOnNextUpdate();
        setIsYearPickerVisible(false);
    };
    // navigationIcons has a default value in defaultProps, but typescript doesn't recognize this
    var leftNavigationIcon = navigationIcons.leftNavigation;
    var rightNavigationIcon = navigationIcons.rightNavigation;
    var dateFormatter = dateTimeFormatter;
    // determine if previous/next years are in bounds
    var isPrevYearInBounds = minDate ? date_time_utilities_1.compareDatePart(minDate, date_time_utilities_1.getYearStart(navigatedDate)) < 0 : true;
    var isNextYearInBounds = maxDate ? date_time_utilities_1.compareDatePart(date_time_utilities_1.getYearEnd(navigatedDate), maxDate) < 0 : true;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        hasHeaderClickCallback: !!props.onHeaderSelect || !yearPickerHidden,
        highlightCurrent: highlightCurrentMonth,
        highlightSelected: highlightSelectedMonth,
        animateBackwards: animateBackwards,
        animationDirection: animationDirection,
    });
    if (isYearPickerVisible) {
        var _f = getYearStrings(props), onRenderYear = _f[0], yearStrings = _f[1];
        // use navigated date for the year picker
        return (React.createElement(CalendarYear_1.CalendarYear, { key: 'calendarYear', minYear: minDate ? minDate.getFullYear() : undefined, maxYear: maxDate ? maxDate.getFullYear() : undefined, 
            // eslint-disable-next-line react/jsx-no-bind
            onSelectYear: onSelectYear, navigationIcons: navigationIcons, 
            // eslint-disable-next-line react/jsx-no-bind
            onHeaderSelect: onYearPickerHeaderSelect, selectedYear: selectedDate ? selectedDate.getFullYear() : navigatedDate ? navigatedDate.getFullYear() : undefined, onRenderYear: onRenderYear, strings: yearStrings, componentRef: calendarYearRef, styles: styles, highlightCurrentYear: highlightCurrentMonth, highlightSelectedYear: highlightSelectedMonth, animationDirection: animationDirection }));
    }
    var rowIndexes = [];
    for (var i = 0; i < strings.shortMonths.length / MONTHS_PER_ROW; i++) {
        rowIndexes.push(i);
    }
    var yearString = dateFormatter.formatYear(navigatedDate);
    var headerAriaLabel = strings.monthPickerHeaderAriaLabel
        ? utilities_1.format(strings.monthPickerHeaderAriaLabel, yearString)
        : yearString;
    return (React.createElement("div", { className: classNames.root },
        React.createElement("div", { className: classNames.headerContainer },
            React.createElement("button", { className: classNames.currentItemButton, onClick: onHeaderSelect, onKeyDown: onButtonKeyDown(onHeaderSelect), "aria-label": headerAriaLabel, "data-is-focusable": !!props.onHeaderSelect || !yearPickerHidden, tabIndex: !!props.onHeaderSelect || !yearPickerHidden ? 0 : -1, type: "button", "aria-atomic": true, "aria-live": "polite" }, yearString),
            React.createElement("div", { className: classNames.navigationButtonsContainer },
                React.createElement("button", { className: utilities_1.css(classNames.navigationButton, (_a = {},
                        _a[classNames.disabled] = !isPrevYearInBounds,
                        _a)), disabled: !allFocusable && !isPrevYearInBounds, onClick: isPrevYearInBounds ? onSelectPrevYear : undefined, onKeyDown: isPrevYearInBounds ? onButtonKeyDown(onSelectPrevYear) : undefined, title: strings.prevYearAriaLabel
                        ? strings.prevYearAriaLabel + ' ' + dateFormatter.formatYear(date_time_utilities_1.addYears(navigatedDate, -1))
                        : undefined, type: "button" },
                    React.createElement(Icon_1.Icon, { iconName: utilities_1.getRTL() ? rightNavigationIcon : leftNavigationIcon })),
                React.createElement("button", { className: utilities_1.css(classNames.navigationButton, (_b = {},
                        _b[classNames.disabled] = !isNextYearInBounds,
                        _b)), disabled: !allFocusable && !isNextYearInBounds, onClick: isNextYearInBounds ? onSelectNextYear : undefined, onKeyDown: isNextYearInBounds ? onButtonKeyDown(onSelectNextYear) : undefined, title: strings.nextYearAriaLabel
                        ? strings.nextYearAriaLabel + ' ' + dateFormatter.formatYear(date_time_utilities_1.addYears(navigatedDate, 1))
                        : undefined, type: "button" },
                    React.createElement(Icon_1.Icon, { iconName: utilities_1.getRTL() ? leftNavigationIcon : rightNavigationIcon })))),
        React.createElement(FocusZone_1.FocusZone, null,
            React.createElement("div", { className: classNames.gridContainer, role: "grid", "aria-label": yearString }, rowIndexes.map(function (rowNum) {
                var monthsForRow = strings.shortMonths.slice(rowNum * MONTHS_PER_ROW, (rowNum + 1) * MONTHS_PER_ROW);
                return (React.createElement("div", { key: 'monthRow_' + rowNum + navigatedDate.getFullYear(), role: "row", className: classNames.buttonRow }, monthsForRow.map(function (month, index) {
                    var _a;
                    var monthIndex = rowNum * MONTHS_PER_ROW + index;
                    var indexedMonth = date_time_utilities_1.setMonth(navigatedDate, monthIndex);
                    var isNavigatedMonth = navigatedDate.getMonth() === monthIndex;
                    var isSelectedMonth = selectedDate.getMonth() === monthIndex;
                    var isSelectedYear = selectedDate.getFullYear() === navigatedDate.getFullYear();
                    var isInBounds = (minDate ? date_time_utilities_1.compareDatePart(minDate, date_time_utilities_1.getMonthEnd(indexedMonth)) < 1 : true) &&
                        (maxDate ? date_time_utilities_1.compareDatePart(date_time_utilities_1.getMonthStart(indexedMonth), maxDate) < 1 : true);
                    return (React.createElement("button", { ref: isNavigatedMonth ? navigatedMonthRef : undefined, role: 'gridcell', className: utilities_1.css(classNames.itemButton, (_a = {},
                            _a[classNames.current] = highlightCurrentMonth && isCurrentMonth(monthIndex, navigatedDate.getFullYear(), today),
                            _a[classNames.selected] = highlightSelectedMonth && isSelectedMonth && isSelectedYear,
                            _a[classNames.disabled] = !isInBounds,
                            _a)), disabled: !allFocusable && !isInBounds, key: monthIndex, onClick: isInBounds ? selectMonthCallback(monthIndex) : undefined, onKeyDown: isInBounds ? onButtonKeyDown(selectMonthCallback(monthIndex)) : undefined, "aria-label": dateFormatter.formatMonth(indexedMonth, strings), "aria-selected": isNavigatedMonth, "data-is-focusable": isInBounds ? true : undefined, type: "button", "aria-readonly": true }, month));
                })));
            })))));
};
exports.CalendarMonthBase.displayName = 'CalendarMonthBase';
function getYearStrings(_a) {
    var strings = _a.strings, navigatedDate = _a.navigatedDate, dateTimeFormatter = _a.dateTimeFormatter;
    var yearToString = function (year) {
        if (dateTimeFormatter) {
            // create a date based on the current nav date
            var yearFormattingDate = new Date(navigatedDate.getTime());
            yearFormattingDate.setFullYear(year);
            return dateTimeFormatter.formatYear(yearFormattingDate);
        }
        return String(year);
    };
    var yearRangeToString = function (yearRange) {
        return yearToString(yearRange.fromYear) + " - " + yearToString(yearRange.toYear);
    };
    var yearRangeToNextDecadeLabel = function (yearRange) {
        return strings.nextYearRangeAriaLabel ? strings.nextYearRangeAriaLabel + " " + yearRangeToString(yearRange) : '';
    };
    var yearRangeToPrevDecadeLabel = function (yearRange) {
        return strings.prevYearRangeAriaLabel ? strings.prevYearRangeAriaLabel + " " + yearRangeToString(yearRange) : '';
    };
    return [
        yearToString,
        {
            rangeAriaLabel: yearRangeToString,
            prevRangeAriaLabel: yearRangeToPrevDecadeLabel,
            nextRangeAriaLabel: yearRangeToNextDecadeLabel,
            headerAriaLabelFormatString: strings.yearPickerHeaderAriaLabel,
        },
    ];
}
function isCurrentMonth(month, year, today) {
    return today.getFullYear() === year && today.getMonth() === month;
}
function onButtonKeyDown(callback) {
    return function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        switch (ev.which) {
            case utilities_1.KeyCodes.enter:
                callback();
                break;
        }
    };
}
//# sourceMappingURL=CalendarMonth.base.js.map