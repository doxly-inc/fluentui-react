define(["require", "exports", "tslib", "react", "@fluentui/utilities", "../../FocusZone", "@fluentui/date-time-utilities", "@fluentui/react-hooks", "./CalendarMonthHeaderRow", "./CalendarGridRow"], function (require, exports, tslib_1, React, utilities_1, FocusZone_1, date_time_utilities_1, react_hooks_1, CalendarMonthHeaderRow_1, CalendarGridRow_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = utilities_1.classNamesFunction();
    function useDayRefs() {
        var daysRef = React.useRef({});
        var getSetRefCallback = function (dayKey) { return function (element) {
            if (element === null) {
                delete daysRef.current[dayKey];
            }
            else {
                daysRef.current[dayKey] = element;
            }
        }; };
        return [daysRef, getSetRefCallback];
    }
    function useWeeks(props, onSelectDate, getSetRefCallback) {
        /**
         * Initial parsing of the given props to generate IDayInfo two dimensional array, which contains a representation
         * of every day in the grid. Convenient for helping with conversions between day refs and Date objects in callbacks.
         */
        var weeks = React.useMemo(function () {
            var _a, _b, _c;
            var weeksGrid = date_time_utilities_1.getDayGrid(props);
            var firstVisibleDay = weeksGrid[1][0].originalDate;
            var lastVisibleDay = weeksGrid[weeksGrid.length - 1][6].originalDate;
            var markedDays = ((_b = (_a = props).getMarkedDays) === null || _b === void 0 ? void 0 : _b.call(_a, firstVisibleDay, lastVisibleDay)) || [];
            /**
             * Weeks is a 2D array. Weeks[0] contains the last week of the prior range,
             * Weeks[weeks.length - 1] contains first week of next range. These are for transition states.
             *
             * Weeks[1... weeks.length - 2] contains the actual visible data
             */
            var returnValue = [];
            for (var weekIndex = 0; weekIndex < weeksGrid.length; weekIndex++) {
                var week = [];
                var _loop_1 = function (dayIndex) {
                    var day = weeksGrid[weekIndex][dayIndex];
                    var dayInfo = tslib_1.__assign(tslib_1.__assign({ onSelected: function () { return onSelectDate(day.originalDate); }, setRef: getSetRefCallback(day.key) }, day), { isMarked: day.isMarked || ((_c = markedDays) === null || _c === void 0 ? void 0 : _c.some(function (markedDay) { return date_time_utilities_1.compareDates(day.originalDate, markedDay); })) });
                    week.push(dayInfo);
                };
                for (var dayIndex = 0; dayIndex < date_time_utilities_1.DAYS_IN_WEEK; dayIndex++) {
                    _loop_1(dayIndex);
                }
                returnValue.push(week);
            }
            return returnValue;
            // TODO: this is missing deps on getSetRefCallback and onSelectDate (and depending on the entire
            // props object may not be a good idea due to likely frequent mutation). It would be easy to
            // fix getSetRefCallback to not mutate every render, but onSelectDate is passed down from
            // Calendar and trying to fix it requires a huge cascade of changes.
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props]);
        return weeks;
    }
    /**
     * Hook to determine whether to animate the CalendarDayGrid forwards or backwards
     * @returns true if the grid should animate backwards; false otherwise
     */
    function useAnimateBackwards(weeks) {
        var previousNavigatedDate = react_hooks_1.usePrevious(weeks[0][0].originalDate);
        if (!previousNavigatedDate || previousNavigatedDate.getTime() === weeks[0][0].originalDate.getTime()) {
            return undefined;
        }
        else if (previousNavigatedDate <= weeks[0][0].originalDate) {
            return false;
        }
        else {
            return true;
        }
    }
    function useWeekCornerStyles(props) {
        /**
         *
         * Section for setting the rounded corner styles on individual day cells. Individual day cells need different
         * corners to be rounded depending on which date range type and where the cell is located in the current grid.
         * If we just round all of the corners, there isn't a good overlap and we get gaps between contiguous day boxes
         * in Edge browser.
         *
         */
        var getWeekCornerStyles = function (classNames, initialWeeks) {
            var weekCornersStyled = {};
            /* need to handle setting all of the corners on arbitrarily shaped blobs
                  __
               __|A |
              |B |C |__
              |D |E |F |
        
              in this case, A needs top left rounded, top right rounded
              B needs top left rounded
              C doesn't need any rounding
              D needs bottom left rounded
              E doesn't need any rounding
              F needs top right rounding
            */
            // cut off the animation transition weeks
            var weeks = initialWeeks.slice(1, initialWeeks.length - 1);
            // if there's an item above, lose both top corners. Item below, lose both bottom corners, etc.
            weeks.forEach(function (week, weekIndex) {
                week.forEach(function (day, dayIndex) {
                    var above = weeks[weekIndex - 1] &&
                        weeks[weekIndex - 1][dayIndex] &&
                        isInSameHoverRange(weeks[weekIndex - 1][dayIndex].originalDate, day.originalDate, weeks[weekIndex - 1][dayIndex].isSelected, day.isSelected);
                    var below = weeks[weekIndex + 1] &&
                        weeks[weekIndex + 1][dayIndex] &&
                        isInSameHoverRange(weeks[weekIndex + 1][dayIndex].originalDate, day.originalDate, weeks[weekIndex + 1][dayIndex].isSelected, day.isSelected);
                    var left = weeks[weekIndex][dayIndex - 1] &&
                        isInSameHoverRange(weeks[weekIndex][dayIndex - 1].originalDate, day.originalDate, weeks[weekIndex][dayIndex - 1].isSelected, day.isSelected);
                    var right = weeks[weekIndex][dayIndex + 1] &&
                        isInSameHoverRange(weeks[weekIndex][dayIndex + 1].originalDate, day.originalDate, weeks[weekIndex][dayIndex + 1].isSelected, day.isSelected);
                    var style = calculateRoundedStyles(classNames, above, below, left, right);
                    weekCornersStyled[weekIndex + '_' + dayIndex] = style;
                });
            });
            return weekCornersStyled;
        };
        var calculateRoundedStyles = function (classNames, above, below, left, right) {
            var style = '';
            var roundedTopLeft = !above && !left;
            var roundedTopRight = !above && !right;
            var roundedBottomLeft = !below && !left;
            var roundedBottomRight = !below && !right;
            if (roundedTopLeft) {
                style = utilities_1.getRTL()
                    ? style.concat(classNames.topRightCornerDate + ' ')
                    : style.concat(classNames.topLeftCornerDate + ' ');
            }
            if (roundedTopRight) {
                style = utilities_1.getRTL()
                    ? style.concat(classNames.topLeftCornerDate + ' ')
                    : style.concat(classNames.topRightCornerDate + ' ');
            }
            if (roundedBottomLeft) {
                style = utilities_1.getRTL()
                    ? style.concat(classNames.bottomRightCornerDate + ' ')
                    : style.concat(classNames.bottomLeftCornerDate + ' ');
            }
            if (roundedBottomRight) {
                style = utilities_1.getRTL()
                    ? style.concat(classNames.bottomLeftCornerDate + ' ')
                    : style.concat(classNames.bottomRightCornerDate + ' ');
            }
            return style;
        };
        var isInSameHoverRange = function (date1, date2, date1Selected, date2Selected) {
            var dateRangeType = props.dateRangeType, firstDayOfWeek = props.firstDayOfWeek, workWeekDays = props.workWeekDays;
            // The hover state looks weird with non-contiguous days in work week view. In work week, show week hover state
            var dateRangeHoverType = dateRangeType === date_time_utilities_1.DateRangeType.WorkWeek ? date_time_utilities_1.DateRangeType.Week : dateRangeType;
            // we do not pass daysToSelectInDayView because we handle setting those styles dyanamically in onMouseOver
            var dateRange = date_time_utilities_1.getDateRangeArray(date1, dateRangeHoverType, firstDayOfWeek, workWeekDays);
            if (date1Selected !== date2Selected) {
                // if one is selected and the other is not, they can't be in the same range
                return false;
            }
            else if (date1Selected && date2Selected) {
                // if they're both selected at the same time they must be in the same range
                return true;
            }
            // otherwise, both must be unselected, so check the dateRange
            return dateRange.filter(function (date) { return date.getTime() === date2.getTime(); }).length > 0;
        };
        return [getWeekCornerStyles, calculateRoundedStyles];
    }
    exports.CalendarDayGridBase = function (props) {
        var navigatedDayRef = React.useRef(null);
        var activeDescendantId = react_hooks_1.useId();
        var onSelectDate = function (selectedDate) {
            var _a, _b, _c, _d;
            var firstDayOfWeek = props.firstDayOfWeek, minDate = props.minDate, maxDate = props.maxDate, workWeekDays = props.workWeekDays, daysToSelectInDayView = props.daysToSelectInDayView, restrictedDates = props.restrictedDates;
            var restrictedDatesOptions = { minDate: minDate, maxDate: maxDate, restrictedDates: restrictedDates };
            var dateRange = date_time_utilities_1.getDateRangeArray(selectedDate, dateRangeType, firstDayOfWeek, workWeekDays, daysToSelectInDayView);
            dateRange = date_time_utilities_1.getBoundedDateRange(dateRange, minDate, maxDate);
            dateRange = dateRange.filter(function (d) {
                return !date_time_utilities_1.isRestrictedDate(d, restrictedDatesOptions);
            });
            (_b = (_a = props).onSelectDate) === null || _b === void 0 ? void 0 : _b.call(_a, selectedDate, dateRange);
            (_d = (_c = props).onNavigateDate) === null || _d === void 0 ? void 0 : _d.call(_c, selectedDate, true);
        };
        var _a = useDayRefs(), daysRef = _a[0], getSetRefCallback = _a[1];
        var weeks = useWeeks(props, onSelectDate, getSetRefCallback);
        var animateBackwards = useAnimateBackwards(weeks);
        var _b = useWeekCornerStyles(props), getWeekCornerStyles = _b[0], calculateRoundedStyles = _b[1];
        React.useImperativeHandle(props.componentRef, function () { return ({
            focus: function () {
                var _a, _b, _c;
                (_c = (_a = navigatedDayRef.current) === null || _a === void 0 ? void 0 : (_b = _a).focus) === null || _c === void 0 ? void 0 : _c.call(_b);
            },
        }); }, []);
        /**
         *
         * Section for setting hover/pressed styles. Because we want arbitrary blobs of days to be selectable, to support
         * highlighting every day in the month for month view, css :hover style isn't enough, so we need mouse callbacks
         * to set classnames on all relevant child refs to apply the styling
         *
         */
        var getDayInfosInRangeOfDay = function (dayToCompare) {
            // The hover state looks weird with non-contiguous days in work week view. In work week, show week hover state
            var dateRangeHoverType = getDateRangeTypeToUse(props.dateRangeType, props.workWeekDays);
            // gets all the dates for the given date range type that are in the same date range as the given day
            var dateRange = date_time_utilities_1.getDateRangeArray(dayToCompare.originalDate, dateRangeHoverType, props.firstDayOfWeek, props.workWeekDays, props.daysToSelectInDayView).map(function (date) { return date.getTime(); });
            // gets all the day refs for the given dates
            var dayInfosInRange = weeks.reduce(function (accumulatedValue, currentWeek) {
                return accumulatedValue.concat(currentWeek.filter(function (weekDay) { return dateRange.indexOf(weekDay.originalDate.getTime()) !== -1; }));
            }, []);
            return dayInfosInRange;
        };
        var getRefsFromDayInfos = function (dayInfosInRange) {
            var dayRefs = [];
            dayRefs = dayInfosInRange.map(function (dayInfo) { return daysRef.current[dayInfo.key]; });
            return dayRefs;
        };
        var styles = props.styles, theme = props.theme, className = props.className, dateRangeType = props.dateRangeType, showWeekNumbers = props.showWeekNumbers, labelledBy = props.labelledBy, lightenDaysOutsideNavigatedMonth = props.lightenDaysOutsideNavigatedMonth, animationDirection = props.animationDirection;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            dateRangeType: dateRangeType,
            showWeekNumbers: showWeekNumbers,
            lightenDaysOutsideNavigatedMonth: lightenDaysOutsideNavigatedMonth === undefined ? true : lightenDaysOutsideNavigatedMonth,
            animationDirection: animationDirection,
            animateBackwards: animateBackwards,
        });
        // When the month is highlighted get the corner dates so that styles can be added to them
        var weekCorners = getWeekCornerStyles(classNames, weeks);
        var partialWeekProps = {
            weeks: weeks,
            navigatedDayRef: navigatedDayRef,
            calculateRoundedStyles: calculateRoundedStyles,
            activeDescendantId: activeDescendantId,
            classNames: classNames,
            weekCorners: weekCorners,
            getDayInfosInRangeOfDay: getDayInfosInRangeOfDay,
            getRefsFromDayInfos: getRefsFromDayInfos,
        };
        return (React.createElement(FocusZone_1.FocusZone, { className: classNames.wrapper },
            React.createElement("table", { className: classNames.table, "aria-readonly": "true", "aria-multiselectable": "false", "aria-labelledby": labelledBy, "aria-activedescendant": activeDescendantId, role: "grid" },
                React.createElement("tbody", null,
                    React.createElement(CalendarMonthHeaderRow_1.CalendarMonthHeaderRow, tslib_1.__assign({}, props, { classNames: classNames, weeks: weeks })),
                    React.createElement(CalendarGridRow_1.CalendarGridRow, tslib_1.__assign({}, props, partialWeekProps, { week: weeks[0], weekIndex: -1, rowClassName: classNames.firstTransitionWeek, ariaRole: "presentation", ariaHidden: true })),
                    weeks.slice(1, weeks.length - 1).map(function (week, weekIndex) { return (React.createElement(CalendarGridRow_1.CalendarGridRow, tslib_1.__assign({}, props, partialWeekProps, { key: weekIndex, week: week, weekIndex: weekIndex, rowClassName: classNames.weekRow }))); }),
                    React.createElement(CalendarGridRow_1.CalendarGridRow, tslib_1.__assign({}, props, partialWeekProps, { week: weeks[weeks.length - 1], weekIndex: -2, rowClassName: classNames.lastTransitionWeek, ariaRole: "presentation", ariaHidden: true }))))));
    };
    exports.CalendarDayGridBase.displayName = 'CalendarDayGridBase';
    /**
     * When given work week, if the days are non-contiguous, the hover states look really weird. So for non-contiguous
     * work weeks, we'll just show week view instead.
     */
    function getDateRangeTypeToUse(dateRangeType, workWeekDays) {
        if (workWeekDays && dateRangeType === date_time_utilities_1.DateRangeType.WorkWeek) {
            var sortedWWDays = workWeekDays.slice().sort();
            var isContiguous = true;
            for (var i = 1; i < sortedWWDays.length; i++) {
                if (sortedWWDays[i] !== sortedWWDays[i - 1] + 1) {
                    isContiguous = false;
                    break;
                }
            }
            if (!isContiguous || workWeekDays.length === 0) {
                return date_time_utilities_1.DateRangeType.Week;
            }
        }
        return dateRangeType;
    }
});
//# sourceMappingURL=CalendarDayGrid.base.js.map