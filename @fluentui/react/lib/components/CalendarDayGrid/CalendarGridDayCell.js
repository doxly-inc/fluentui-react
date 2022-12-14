import * as React from 'react';
import { KeyCodes, css, getRTLSafeKeyCode } from '@fluentui/utilities';
import { addDays, addWeeks, compareDates, findAvailableDate, DateRangeType, } from '@fluentui/date-time-utilities';
export var CalendarGridDayCell = function (props) {
    var _a, _b;
    var navigatedDate = props.navigatedDate, dateTimeFormatter = props.dateTimeFormatter, allFocusable = props.allFocusable, strings = props.strings, activeDescendantId = props.activeDescendantId, navigatedDayRef = props.navigatedDayRef, calculateRoundedStyles = props.calculateRoundedStyles, weeks = props.weeks, classNames = props.classNames, day = props.day, dayIndex = props.dayIndex, weekIndex = props.weekIndex, weekCorners = props.weekCorners, ariaHidden = props.ariaHidden, customDayCellRef = props.customDayCellRef, dateRangeType = props.dateRangeType, daysToSelectInDayView = props.daysToSelectInDayView, onSelectDate = props.onSelectDate, restrictedDates = props.restrictedDates, minDate = props.minDate, maxDate = props.maxDate, onNavigateDate = props.onNavigateDate, getDayInfosInRangeOfDay = props.getDayInfosInRangeOfDay, getRefsFromDayInfos = props.getRefsFromDayInfos;
    var cornerStyle = (_b = (_a = weekCorners) === null || _a === void 0 ? void 0 : _a[weekIndex + '_' + dayIndex], (_b !== null && _b !== void 0 ? _b : ''));
    var isNavigatedDate = compareDates(navigatedDate, day.originalDate);
    var navigateMonthEdge = function (ev, date) {
        var targetDate = undefined;
        var direction = 1; // by default search forward
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === KeyCodes.up) {
            targetDate = addWeeks(date, -1);
            direction = -1;
            // eslint-disable-next-line deprecation/deprecation
        }
        else if (ev.which === KeyCodes.down) {
            targetDate = addWeeks(date, 1);
            // eslint-disable-next-line deprecation/deprecation
        }
        else if (ev.which === getRTLSafeKeyCode(KeyCodes.left)) {
            targetDate = addDays(date, -1);
            direction = -1;
            // eslint-disable-next-line deprecation/deprecation
        }
        else if (ev.which === getRTLSafeKeyCode(KeyCodes.right)) {
            targetDate = addDays(date, 1);
        }
        if (!targetDate) {
            // if we couldn't find a target date at all, do nothing
            return;
        }
        var findAvailableDateOptions = {
            initialDate: date,
            targetDate: targetDate,
            direction: direction,
            restrictedDates: restrictedDates,
            minDate: minDate,
            maxDate: maxDate,
        };
        // target date is restricted, search in whatever direction until finding the next possible date,
        // stopping at boundaries
        var nextDate = findAvailableDate(findAvailableDateOptions);
        if (!nextDate) {
            // if no dates available in initial direction, try going backwards
            findAvailableDateOptions.direction = -direction;
            nextDate = findAvailableDate(findAvailableDateOptions);
        }
        // if the nextDate is still inside the same focusZone area, let the focusZone handle setting the focus so we
        // don't jump the view unnecessarily
        var isInCurrentView = weeks &&
            nextDate &&
            weeks.slice(1, weeks.length - 1).some(function (week) {
                return week.some(function (dayToCompare) {
                    return compareDates(dayToCompare.originalDate, nextDate);
                });
            });
        if (isInCurrentView) {
            return;
        }
        // else, fire navigation on the date to change the view to show it
        if (nextDate) {
            onNavigateDate(nextDate, true);
            ev.preventDefault();
        }
    };
    var onMouseOverDay = function (ev) {
        var dayInfos = getDayInfosInRangeOfDay(day);
        var dayRefs = getRefsFromDayInfos(dayInfos);
        dayRefs.forEach(function (dayRef, index) {
            var _a;
            if (dayRef) {
                dayRef.classList.add('ms-CalendarDay-hoverStyle');
                if (!dayInfos[index].isSelected &&
                    dateRangeType === DateRangeType.Day &&
                    daysToSelectInDayView &&
                    daysToSelectInDayView > 1) {
                    // remove the static classes first to overwrite them
                    dayRef.classList.remove(classNames.bottomLeftCornerDate, classNames.bottomRightCornerDate, classNames.topLeftCornerDate, classNames.topRightCornerDate);
                    var classNamesToAdd = calculateRoundedStyles(classNames, false, false, index > 0, index < dayRefs.length - 1).trim();
                    if (classNamesToAdd) {
                        (_a = dayRef.classList).add.apply(_a, classNamesToAdd.split(' '));
                    }
                }
            }
        });
    };
    var onMouseDownDay = function (ev) {
        var dayInfos = getDayInfosInRangeOfDay(day);
        var dayRefs = getRefsFromDayInfos(dayInfos);
        dayRefs.forEach(function (dayRef) {
            if (dayRef) {
                dayRef.classList.add('ms-CalendarDay-pressedStyle');
            }
        });
    };
    var onMouseUpDay = function (ev) {
        var dayInfos = getDayInfosInRangeOfDay(day);
        var dayRefs = getRefsFromDayInfos(dayInfos);
        dayRefs.forEach(function (dayRef) {
            if (dayRef) {
                dayRef.classList.remove('ms-CalendarDay-pressedStyle');
            }
        });
    };
    var onMouseOutDay = function (ev) {
        var dayInfos = getDayInfosInRangeOfDay(day);
        var dayRefs = getRefsFromDayInfos(dayInfos);
        dayRefs.forEach(function (dayRef, index) {
            var _a;
            if (dayRef) {
                dayRef.classList.remove('ms-CalendarDay-hoverStyle');
                dayRef.classList.remove('ms-CalendarDay-pressedStyle');
                if (!dayInfos[index].isSelected &&
                    dateRangeType === DateRangeType.Day &&
                    daysToSelectInDayView &&
                    daysToSelectInDayView > 1) {
                    var classNamesToAdd = calculateRoundedStyles(classNames, false, false, index > 0, index < dayRefs.length - 1).trim();
                    if (classNamesToAdd) {
                        (_a = dayRef.classList).remove.apply(_a, classNamesToAdd.split(' '));
                    }
                }
            }
        });
    };
    var onDayKeyDown = function (ev) {
        var _a;
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === KeyCodes.enter) {
            (_a = onSelectDate) === null || _a === void 0 ? void 0 : _a(day.originalDate);
        }
        else {
            navigateMonthEdge(ev, day.originalDate);
        }
    };
    var ariaLabel = dateTimeFormatter.formatMonthDayYear(day.originalDate, strings);
    if (day.isMarked) {
        ariaLabel = ariaLabel + ', ' + strings.dayMarkedAriaLabel;
    }
    return (React.createElement("td", { className: css(classNames.dayCell, weekCorners && cornerStyle, day.isSelected && classNames.daySelected, day.isSelected && 'ms-CalendarDay-daySelected', !day.isInBounds && classNames.dayOutsideBounds, !day.isInMonth && classNames.dayOutsideNavigatedMonth), ref: function (element) {
            var _a;
            (_a = customDayCellRef) === null || _a === void 0 ? void 0 : _a(element, day.originalDate, classNames);
            day.setRef(element);
        }, "aria-hidden": ariaHidden, onClick: day.isInBounds && !ariaHidden ? day.onSelected : undefined, onMouseOver: !ariaHidden ? onMouseOverDay : undefined, onMouseDown: !ariaHidden ? onMouseDownDay : undefined, onMouseUp: !ariaHidden ? onMouseUpDay : undefined, onMouseOut: !ariaHidden ? onMouseOutDay : undefined, role: "presentation" // the child <button> is the gridcell that our parent <tr> contains, so tell ARIA we are not
     },
        React.createElement("button", { key: day.key + 'button', "aria-hidden": ariaHidden, className: css(classNames.dayButton, day.isToday && classNames.dayIsToday, day.isToday && 'ms-CalendarDay-dayIsToday'), onKeyDown: !ariaHidden ? onDayKeyDown : undefined, "aria-label": ariaLabel, id: isNavigatedDate ? activeDescendantId : undefined, "aria-current": day.isSelected ? 'date' : undefined, "aria-selected": day.isInBounds ? day.isSelected : undefined, "data-is-focusable": !ariaHidden && (allFocusable || (day.isInBounds ? true : undefined)), ref: isNavigatedDate ? navigatedDayRef : undefined, disabled: !allFocusable && !day.isInBounds, "aria-disabled": !ariaHidden && !day.isInBounds, type: "button", role: "gridcell" // create grid structure
            , "aria-readonly": true, tabIndex: isNavigatedDate ? 0 : undefined },
            React.createElement("span", { "aria-hidden": "true" }, dateTimeFormatter.formatDay(day.originalDate)),
            day.isMarked && React.createElement("div", { "aria-hidden": "true", className: classNames.dayMarker }))));
};
//# sourceMappingURL=CalendarGridDayCell.js.map