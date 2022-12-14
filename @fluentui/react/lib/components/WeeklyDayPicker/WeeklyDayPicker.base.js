import { __assign, __extends, __rest } from "tslib";
import * as React from 'react';
import { classNamesFunction, css, KeyCodes, getRTL, initializeComponentRef } from '@fluentui/utilities';
import { AnimationDirection } from '../Calendar/Calendar.types';
import { CalendarDayGrid } from '../CalendarDayGrid/CalendarDayGrid';
import { compareDatePart, getStartDateOfWeek, addDays, addMonths, compareDates, FirstWeekOfYear, DateRangeType, DayOfWeek, DEFAULT_DATE_FORMATTING, } from '@fluentui/date-time-utilities';
import { Icon } from '../../Icon';
import { defaultWeeklyDayPickerStrings, defaultWeeklyDayPickerNavigationIcons } from './defaults';
var getClassNames = classNamesFunction();
var WeeklyDayPickerBase = /** @class */ (function (_super) {
    __extends(WeeklyDayPickerBase, _super);
    function WeeklyDayPickerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._dayGrid = React.createRef();
        _this._onSelectDate = function (date) {
            var onSelectDate = _this.props.onSelectDate;
            // don't set the navigated date on selection because selection never causes navigation
            _this.setState({
                selectedDate: date,
            });
            _this._focusOnUpdate = true;
            if (onSelectDate) {
                onSelectDate(date);
            }
        };
        _this._onNavigateDate = function (date, focusOnNavigatedDay) {
            var onNavigateDate = _this.props.onNavigateDate;
            _this.setState({
                navigatedDate: date,
            });
            _this._focusOnUpdate = focusOnNavigatedDay;
            if (onNavigateDate) {
                onNavigateDate(date);
            }
        };
        _this._renderPreviousWeekNavigationButton = function (classNames) {
            var _a;
            var _b = _this.props, minDate = _b.minDate, firstDayOfWeek = _b.firstDayOfWeek, navigationIcons = _b.navigationIcons;
            var navigatedDate = _this.state.navigatedDate;
            var leftNavigationIcon = getRTL() ? navigationIcons.rightNavigation : navigationIcons.leftNavigation;
            // determine if previous week in bounds
            var prevWeekInBounds = minDate
                ? compareDatePart(minDate, getStartDateOfWeek(navigatedDate, firstDayOfWeek)) < 0
                : true;
            return (React.createElement("button", { className: css(classNames.navigationIconButton, (_a = {},
                    _a[classNames.disabledStyle] = !prevWeekInBounds,
                    _a)), disabled: !prevWeekInBounds, "aria-disabled": !prevWeekInBounds, onClick: prevWeekInBounds ? _this._onSelectPrevDateRange : undefined, onKeyDown: prevWeekInBounds ? _this._onButtonKeyDown(_this._onSelectPrevDateRange) : undefined, title: _this._createPreviousWeekAriaLabel(), type: "button" },
                React.createElement(Icon, { iconName: leftNavigationIcon })));
        };
        _this._renderNextWeekNavigationButton = function (classNames) {
            var _a;
            var _b = _this.props, maxDate = _b.maxDate, firstDayOfWeek = _b.firstDayOfWeek, navigationIcons = _b.navigationIcons;
            var navigatedDate = _this.state.navigatedDate;
            var rightNavigationIcon = getRTL() ? navigationIcons.leftNavigation : navigationIcons.rightNavigation;
            // determine if next week in bounds
            var nextWeekInBounds = maxDate
                ? compareDatePart(addDays(getStartDateOfWeek(navigatedDate, firstDayOfWeek), 7), maxDate) < 0
                : true;
            return (React.createElement("button", { className: css(classNames.navigationIconButton, (_a = {},
                    _a[classNames.disabledStyle] = !nextWeekInBounds,
                    _a)), disabled: !nextWeekInBounds, "aria-disabled": !nextWeekInBounds, onClick: nextWeekInBounds ? _this._onSelectNextDateRange : undefined, onKeyDown: nextWeekInBounds ? _this._onButtonKeyDown(_this._onSelectNextDateRange) : undefined, title: _this._createNextWeekAriaLabel(), type: "button" },
                React.createElement(Icon, { iconName: rightNavigationIcon })));
        };
        _this._onSelectPrevDateRange = function () {
            if (_this.props.showFullMonth) {
                _this._navigateDate(addMonths(_this.state.navigatedDate, -1));
            }
            else {
                _this._navigateDate(addDays(_this.state.navigatedDate, -7));
            }
        };
        _this._onSelectNextDateRange = function () {
            if (_this.props.showFullMonth) {
                _this._navigateDate(addMonths(_this.state.navigatedDate, 1));
            }
            else {
                _this._navigateDate(addDays(_this.state.navigatedDate, 7));
            }
        };
        _this._navigateDate = function (date) {
            _this.setState({
                navigatedDate: date,
            });
            if (_this.props.onNavigateDate) {
                _this.props.onNavigateDate(date);
            }
        };
        _this._onWrapperKeyDown = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            switch (ev.which) {
                case KeyCodes.enter:
                    ev.preventDefault();
                    break;
                case KeyCodes.backspace:
                    ev.preventDefault();
                    break;
                default:
                    break;
            }
        };
        _this._onButtonKeyDown = function (callback) {
            return function (ev) {
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case KeyCodes.enter:
                        callback();
                        break;
                }
            };
        };
        _this._onTouchStart = function (ev) {
            var touch = ev.touches[0];
            if (touch) {
                _this._initialTouchX = touch.clientX;
            }
        };
        _this._onTouchMove = function (ev) {
            var isRtl = getRTL();
            var touch = ev.touches[0];
            if (touch && _this._initialTouchX !== undefined && touch.clientX !== _this._initialTouchX) {
                if ((touch.clientX - _this._initialTouchX) * (isRtl ? -1 : 1) < 0) {
                    // swipe right
                    _this._onSelectNextDateRange();
                }
                else {
                    // swipe left
                    _this._onSelectPrevDateRange();
                }
                _this._initialTouchX = undefined;
            }
        };
        _this._createPreviousWeekAriaLabel = function () {
            var _a = _this.props, strings = _a.strings, showFullMonth = _a.showFullMonth, firstDayOfWeek = _a.firstDayOfWeek;
            var navigatedDate = _this.state.navigatedDate;
            var ariaLabel = undefined;
            if (showFullMonth && strings.prevMonthAriaLabel) {
                ariaLabel = strings.prevMonthAriaLabel + ' ' + strings.months[addMonths(navigatedDate, -1).getMonth()];
            }
            else if (!showFullMonth && strings.prevWeekAriaLabel) {
                var firstDayOfPreviousWeek = getStartDateOfWeek(addDays(navigatedDate, -7), firstDayOfWeek);
                var lastDayOfPreviousWeek = addDays(firstDayOfPreviousWeek, 6);
                ariaLabel =
                    strings.prevWeekAriaLabel + ' ' + _this._formatDateRange(firstDayOfPreviousWeek, lastDayOfPreviousWeek);
            }
            return ariaLabel;
        };
        _this._createNextWeekAriaLabel = function () {
            var _a = _this.props, strings = _a.strings, showFullMonth = _a.showFullMonth, firstDayOfWeek = _a.firstDayOfWeek;
            var navigatedDate = _this.state.navigatedDate;
            var ariaLabel = undefined;
            if (showFullMonth && strings.nextMonthAriaLabel) {
                ariaLabel = strings.nextMonthAriaLabel + ' ' + strings.months[addMonths(navigatedDate, 1).getMonth()];
            }
            else if (!showFullMonth && strings.nextWeekAriaLabel) {
                var firstDayOfNextWeek = getStartDateOfWeek(addDays(navigatedDate, 7), firstDayOfWeek);
                var lastDayOfNextWeek = addDays(firstDayOfNextWeek, 6);
                ariaLabel = strings.nextWeekAriaLabel + ' ' + _this._formatDateRange(firstDayOfNextWeek, lastDayOfNextWeek);
            }
            return ariaLabel;
        };
        _this._formatDateRange = function (startDate, endDate) {
            var _a, _b;
            var _c = _this.props, dateTimeFormatter = _c.dateTimeFormatter, strings = _c.strings;
            return ((_a = dateTimeFormatter) === null || _a === void 0 ? void 0 : _a.formatMonthDayYear(startDate, strings)) + " - " + ((_b = dateTimeFormatter) === null || _b === void 0 ? void 0 : _b.formatMonthDayYear(endDate, strings));
        };
        initializeComponentRef(_this);
        var currentDate = props.initialDate && !isNaN(props.initialDate.getTime()) ? props.initialDate : props.today || new Date();
        _this.state = {
            selectedDate: currentDate,
            navigatedDate: currentDate,
            previousShowFullMonth: !!props.showFullMonth,
            animationDirection: props.animationDirection,
        };
        _this._focusOnUpdate = false;
        return _this;
    }
    WeeklyDayPickerBase.getDerivedStateFromProps = function (nextProps, prevState) {
        var currentDate = nextProps.initialDate && !isNaN(nextProps.initialDate.getTime())
            ? nextProps.initialDate
            : nextProps.today || new Date();
        var showFullMonth = !!nextProps.showFullMonth;
        var newAnimationDirection = showFullMonth !== prevState.previousShowFullMonth ? AnimationDirection.Vertical : AnimationDirection.Horizontal;
        if (!compareDates(currentDate, prevState.selectedDate)) {
            return {
                selectedDate: currentDate,
                navigatedDate: currentDate,
                previousShowFullMonth: showFullMonth,
                animationDirection: newAnimationDirection,
            };
        }
        return {
            selectedDate: currentDate,
            navigatedDate: prevState.navigatedDate,
            previousShowFullMonth: showFullMonth,
            animationDirection: newAnimationDirection,
        };
    };
    WeeklyDayPickerBase.prototype.focus = function () {
        if (this._dayGrid && this._dayGrid.current) {
            this._dayGrid.current.focus();
        }
    };
    WeeklyDayPickerBase.prototype.render = function () {
        var _a = this.props, strings = _a.strings, dateTimeFormatter = _a.dateTimeFormatter, firstDayOfWeek = _a.firstDayOfWeek, minDate = _a.minDate, maxDate = _a.maxDate, restrictedDates = _a.restrictedDates, today = _a.today, styles = _a.styles, theme = _a.theme, className = _a.className, showFullMonth = _a.showFullMonth, weeksToShow = _a.weeksToShow, calendarDayGridProps = __rest(_a, ["strings", "dateTimeFormatter", "firstDayOfWeek", "minDate", "maxDate", "restrictedDates", "today", "styles", "theme", "className", "showFullMonth", "weeksToShow"]);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return (React.createElement("div", { className: classNames.root, onKeyDown: this._onWrapperKeyDown, onTouchStart: this._onTouchStart, onTouchMove: this._onTouchMove, "aria-expanded": showFullMonth },
            this._renderPreviousWeekNavigationButton(classNames),
            React.createElement(CalendarDayGrid, __assign({ styles: styles, componentRef: this._dayGrid, strings: strings, selectedDate: this.state.selectedDate, navigatedDate: this.state.navigatedDate, firstDayOfWeek: firstDayOfWeek, firstWeekOfYear: FirstWeekOfYear.FirstDay, dateRangeType: DateRangeType.Day, weeksToShow: showFullMonth ? weeksToShow : 1, dateTimeFormatter: dateTimeFormatter, minDate: minDate, maxDate: maxDate, restrictedDates: restrictedDates, onSelectDate: this._onSelectDate, onNavigateDate: this._onNavigateDate, today: today, lightenDaysOutsideNavigatedMonth: showFullMonth, animationDirection: this.state.animationDirection }, calendarDayGridProps)),
            this._renderNextWeekNavigationButton(classNames)));
    };
    WeeklyDayPickerBase.prototype.componentDidUpdate = function () {
        if (this._focusOnUpdate) {
            this.focus();
            this._focusOnUpdate = false;
        }
    };
    WeeklyDayPickerBase.defaultProps = {
        onSelectDate: undefined,
        initialDate: undefined,
        today: new Date(),
        firstDayOfWeek: DayOfWeek.Sunday,
        strings: defaultWeeklyDayPickerStrings,
        navigationIcons: defaultWeeklyDayPickerNavigationIcons,
        dateTimeFormatter: DEFAULT_DATE_FORMATTING,
        animationDirection: AnimationDirection.Horizontal,
    };
    return WeeklyDayPickerBase;
}(React.Component));
export { WeeklyDayPickerBase };
//# sourceMappingURL=WeeklyDayPicker.base.js.map