import { __assign } from "tslib";
import * as React from 'react';
import { KeyCodes, css, classNamesFunction, format } from '@fluentui/utilities';
import { Icon } from '../../../Icon';
import { addMonths, compareDatePart, getMonthStart, getMonthEnd } from '@fluentui/date-time-utilities';
import { CalendarDayGrid } from '../../CalendarDayGrid/CalendarDayGrid';
import { useId } from '@fluentui/react-hooks';
var getClassNames = classNamesFunction();
export var CalendarDayBase = function (props) {
    var dayGrid = React.useRef(null);
    React.useImperativeHandle(props.componentRef, function () { return ({
        focus: function () {
            var _a, _b, _c;
            (_c = (_a = dayGrid.current) === null || _a === void 0 ? void 0 : (_b = _a).focus) === null || _c === void 0 ? void 0 : _c.call(_b);
        },
    }); }, []);
    var strings = props.strings, navigatedDate = props.navigatedDate, dateTimeFormatter = props.dateTimeFormatter, styles = props.styles, theme = props.theme, className = props.className, onHeaderSelect = props.onHeaderSelect, showSixWeeksByDefault = props.showSixWeeksByDefault, minDate = props.minDate, maxDate = props.maxDate, restrictedDates = props.restrictedDates, onNavigateDate = props.onNavigateDate, showWeekNumbers = props.showWeekNumbers, dateRangeType = props.dateRangeType, animationDirection = props.animationDirection;
    var dayPickerId = useId();
    var monthAndYearId = useId();
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        headerIsClickable: !!onHeaderSelect,
        showWeekNumbers: showWeekNumbers,
        animationDirection: animationDirection,
    });
    var monthAndYear = dateTimeFormatter.formatMonthYear(navigatedDate, strings);
    var HeaderButtonComponentType = onHeaderSelect ? 'button' : 'div';
    var headerAriaLabel = strings.yearPickerHeaderAriaLabel
        ? format(strings.yearPickerHeaderAriaLabel, monthAndYear)
        : monthAndYear;
    return (React.createElement("div", { className: classNames.root, id: dayPickerId },
        React.createElement("div", { className: classNames.header },
            React.createElement(HeaderButtonComponentType
            // if this component rerenders when text changes, aria-live will not be announced, so make key consistent
            , { "aria-live": "polite", "aria-atomic": "true", "aria-label": onHeaderSelect ? headerAriaLabel : undefined, key: monthAndYear, className: classNames.monthAndYear, onClick: onHeaderSelect, "data-is-focusable": !!onHeaderSelect, tabIndex: onHeaderSelect ? 0 : -1, onKeyDown: onButtonKeyDown(onHeaderSelect), type: "button" },
                React.createElement("span", { id: monthAndYearId }, monthAndYear)),
            React.createElement(CalendarDayNavigationButtons, __assign({}, props, { classNames: classNames, dayPickerId: dayPickerId }))),
        React.createElement(CalendarDayGrid, __assign({}, props, { styles: styles, componentRef: dayGrid, strings: strings, navigatedDate: navigatedDate, weeksToShow: showSixWeeksByDefault ? 6 : undefined, dateTimeFormatter: dateTimeFormatter, minDate: minDate, maxDate: maxDate, restrictedDates: restrictedDates, onNavigateDate: onNavigateDate, labelledBy: monthAndYearId, dateRangeType: dateRangeType }))));
};
CalendarDayBase.displayName = 'CalendarDayBase';
var CalendarDayNavigationButtons = function (props) {
    var _a, _b;
    var minDate = props.minDate, maxDate = props.maxDate, navigatedDate = props.navigatedDate, allFocusable = props.allFocusable, strings = props.strings, navigationIcons = props.navigationIcons, showCloseButton = props.showCloseButton, classNames = props.classNames, dayPickerId = props.dayPickerId, onNavigateDate = props.onNavigateDate, onDismiss = props.onDismiss;
    var onSelectNextMonth = function () {
        onNavigateDate(addMonths(navigatedDate, 1), false);
    };
    var onSelectPrevMonth = function () {
        onNavigateDate(addMonths(navigatedDate, -1), false);
    };
    var leftNavigationIcon = navigationIcons.leftNavigation;
    var rightNavigationIcon = navigationIcons.rightNavigation;
    var closeNavigationIcon = navigationIcons.closeIcon;
    // determine if previous/next months are in bounds
    var prevMonthInBounds = minDate ? compareDatePart(minDate, getMonthStart(navigatedDate)) < 0 : true;
    var nextMonthInBounds = maxDate ? compareDatePart(getMonthEnd(navigatedDate), maxDate) < 0 : true;
    return (React.createElement("div", { className: classNames.monthComponents },
        React.createElement("button", { className: css(classNames.headerIconButton, (_a = {},
                _a[classNames.disabledStyle] = !prevMonthInBounds,
                _a)), disabled: !allFocusable && !prevMonthInBounds, "aria-disabled": !prevMonthInBounds, onClick: prevMonthInBounds ? onSelectPrevMonth : undefined, onKeyDown: prevMonthInBounds ? onButtonKeyDown(onSelectPrevMonth) : undefined, "aria-controls": dayPickerId, title: strings.prevMonthAriaLabel
                ? strings.prevMonthAriaLabel + ' ' + strings.months[addMonths(navigatedDate, -1).getMonth()]
                : undefined, type: "button" },
            React.createElement(Icon, { iconName: leftNavigationIcon })),
        React.createElement("button", { className: css(classNames.headerIconButton, (_b = {},
                _b[classNames.disabledStyle] = !nextMonthInBounds,
                _b)), disabled: !allFocusable && !nextMonthInBounds, "aria-disabled": !nextMonthInBounds, onClick: nextMonthInBounds ? onSelectNextMonth : undefined, onKeyDown: nextMonthInBounds ? onButtonKeyDown(onSelectNextMonth) : undefined, "aria-controls": dayPickerId, title: strings.nextMonthAriaLabel
                ? strings.nextMonthAriaLabel + ' ' + strings.months[addMonths(navigatedDate, 1).getMonth()]
                : undefined, type: "button" },
            React.createElement(Icon, { iconName: rightNavigationIcon })),
        showCloseButton && (React.createElement("button", { className: css(classNames.headerIconButton), onClick: onDismiss, onKeyDown: onButtonKeyDown(onDismiss), title: strings.closeButtonAriaLabel, type: "button" },
            React.createElement(Icon, { iconName: closeNavigationIcon })))));
};
CalendarDayNavigationButtons.displayName = 'CalendarDayNavigationButtons';
var onButtonKeyDown = function (callback) { return function (ev) {
    var _a;
    // eslint-disable-next-line deprecation/deprecation
    switch (ev.which) {
        case KeyCodes.enter:
            (_a = callback) === null || _a === void 0 ? void 0 : _a();
            break;
    }
}; };
//# sourceMappingURL=CalendarDay.base.js.map