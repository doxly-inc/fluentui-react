import * as React from 'react';
import { css, findIndex } from '@fluentui/utilities';
import { DAYS_IN_WEEK } from '@fluentui/date-time-utilities';
export var CalendarMonthHeaderRow = function (props) {
    var showWeekNumbers = props.showWeekNumbers, strings = props.strings, firstDayOfWeek = props.firstDayOfWeek, allFocusable = props.allFocusable, weeksToShow = props.weeksToShow, weeks = props.weeks, classNames = props.classNames;
    var dayLabels = strings.shortDays.slice();
    var firstOfMonthIndex = findIndex(weeks[1], function (day) { return day.originalDate.getDate() === 1; });
    if (weeksToShow === 1 && firstOfMonthIndex >= 0) {
        // if we only show one week, replace the header with short month name
        var firstOfMonthIndexOffset = (firstOfMonthIndex + firstDayOfWeek) % DAYS_IN_WEEK;
        dayLabels[firstOfMonthIndexOffset] = strings.shortMonths[weeks[1][firstOfMonthIndex].originalDate.getMonth()];
    }
    return (React.createElement("tr", null,
        showWeekNumbers && React.createElement("th", { className: classNames.dayCell }),
        dayLabels.map(function (val, index) {
            var i = (index + firstDayOfWeek) % DAYS_IN_WEEK;
            var label = index === firstOfMonthIndex ? strings.days[i] + ' ' + dayLabels[i] : strings.days[i];
            return (React.createElement("th", { className: css(classNames.dayCell, classNames.weekDayLabelCell), scope: "col", key: dayLabels[i] + ' ' + index, title: label, "aria-label": label, "data-is-focusable": allFocusable ? true : undefined }, dayLabels[i]));
        })));
};
//# sourceMappingURL=CalendarMonthHeaderRow.js.map