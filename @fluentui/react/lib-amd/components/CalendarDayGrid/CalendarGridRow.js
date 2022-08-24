define(["require", "exports", "tslib", "react", "@fluentui/utilities", "@fluentui/date-time-utilities", "./CalendarGridDayCell"], function (require, exports, tslib_1, React, utilities_1, date_time_utilities_1, CalendarGridDayCell_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CalendarGridRow = function (props) {
        var classNames = props.classNames, week = props.week, weeks = props.weeks, weekIndex = props.weekIndex, rowClassName = props.rowClassName, ariaRole = props.ariaRole, showWeekNumbers = props.showWeekNumbers, firstDayOfWeek = props.firstDayOfWeek, firstWeekOfYear = props.firstWeekOfYear, navigatedDate = props.navigatedDate, strings = props.strings;
        var weekNumbers = showWeekNumbers
            ? date_time_utilities_1.getWeekNumbersInMonth(weeks.length, firstDayOfWeek, firstWeekOfYear, navigatedDate)
            : null;
        var titleString = weekNumbers
            ? strings.weekNumberFormatString && utilities_1.format(strings.weekNumberFormatString, weekNumbers[weekIndex])
            : '';
        return (React.createElement("tr", { role: ariaRole, className: rowClassName, key: weekIndex + '_' + week[0].key },
            showWeekNumbers && weekNumbers && (React.createElement("th", { className: classNames.weekNumberCell, key: weekIndex, title: titleString, "aria-label": titleString, scope: "row" },
                React.createElement("span", null, weekNumbers[weekIndex]))),
            week.map(function (day, dayIndex) { return (React.createElement(CalendarGridDayCell_1.CalendarGridDayCell, tslib_1.__assign({}, props, { key: day.key, day: day, dayIndex: dayIndex }))); })));
    };
});
//# sourceMappingURL=CalendarGridRow.js.map