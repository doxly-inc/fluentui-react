"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var utilities_1 = require("@fluentui/utilities");
var Calendar_types_1 = require("../Calendar/Calendar.types");
var CalendarDayGrid_1 = require("../CalendarDayGrid/CalendarDayGrid");
var date_time_utilities_1 = require("@fluentui/date-time-utilities");
var Icon_1 = require("../../Icon");
var defaults_1 = require("./defaults");
var getClassNames = utilities_1.classNamesFunction();
var WeeklyDayPickerBase = /** @class */ (function (_super) {
    tslib_1.__extends(WeeklyDayPickerBase, _super);
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
            var leftNavigationIcon = utilities_1.getRTL() ? navigationIcons.rightNavigation : navigationIcons.leftNavigation;
            // determine if previous week in bounds
            var prevWeekInBounds = minDate
                ? date_time_utilities_1.compareDatePart(minDate, date_time_utilities_1.getStartDateOfWeek(navigatedDate, firstDayOfWeek)) < 0
                : true;
            return (React.createElement("button", { className: utilities_1.css(classNames.navigationIconButton, (_a = {},
                    _a[classNames.disabledStyle] = !prevWeekInBounds,
                    _a)), disabled: !prevWeekInBounds, "aria-disabled": !prevWeekInBounds, onClick: prevWeekInBounds ? _this._onSelectPrevDateRange : undefined, onKeyDown: prevWeekInBounds ? _this._onButtonKeyDown(_this._onSelectPrevDateRange) : undefined, title: _this._createPreviousWeekAriaLabel(), type: "button" },
                React.createElement(Icon_1.Icon, { iconName: leftNavigationIcon })));
        };
        _this._renderNextWeekNavigationButton = function (classNames) {
            var _a;
            var _b = _this.props, maxDate = _b.maxDate, firstDayOfWeek = _b.firstDayOfWeek, navigationIcons = _b.navigationIcons;
            var navigatedDate = _this.state.navigatedDate;
            var rightNavigationIcon = utilities_1.getRTL() ? navigationIcons.leftNavigation : navigationIcons.rightNavigation;
            // determine if next week in bounds
            var nextWeekInBounds = maxDate
                ? date_time_utilities_1.compareDatePart(date_time_utilities_1.addDays(date_time_utilities_1.getStartDateOfWeek(navigatedDate, firstDayOfWeek), 7), maxDate) < 0
                : true;
            return (React.createElement("button", { className: utilities_1.css(classNames.navigationIconButton, (_a = {},
                    _a[classNames.disabledStyle] = !nextWeekInBounds,
                    _a)), disabled: !nextWeekInBounds, "aria-disabled": !nextWeekInBounds, onClick: nextWeekInBounds ? _this._onSelectNextDateRange : undefined, onKeyDown: nextWeekInBounds ? _this._onButtonKeyDown(_this._onSelectNextDateRange) : undefined, title: _this._createNextWeekAriaLabel(), type: "button" },
                React.createElement(Icon_1.Icon, { iconName: rightNavigationIcon })));
        };
        _this._onSelectPrevDateRange = function () {
            if (_this.props.showFullMonth) {
                _this._navigateDate(date_time_utilities_1.addMonths(_this.state.navigatedDate, -1));
            }
            else {
                _this._navigateDate(date_time_utilities_1.addDays(_this.state.navigatedDate, -7));
            }
        };
        _this._onSelectNextDateRange = function () {
            if (_this.props.showFullMonth) {
                _this._navigateDate(date_time_utilities_1.addMonths(_this.state.navigatedDate, 1));
            }
            else {
                _this._navigateDate(date_time_utilities_1.addDays(_this.state.navigatedDate, 7));
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
                case utilities_1.KeyCodes.enter:
                    ev.preventDefault();
                    break;
                case utilities_1.KeyCodes.backspace:
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
                    case utilities_1.KeyCodes.enter:
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
            var isRtl = utilities_1.getRTL();
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
                ariaLabel = strings.prevMonthAriaLabel + ' ' + strings.months[date_time_utilities_1.addMonths(navigatedDate, -1).getMonth()];
            }
            else if (!showFullMonth && strings.prevWeekAriaLabel) {
                var firstDayOfPreviousWeek = date_time_utilities_1.getStartDateOfWeek(date_time_utilities_1.addDays(navigatedDate, -7), firstDayOfWeek);
                var lastDayOfPreviousWeek = date_time_utilities_1.addDays(firstDayOfPreviousWeek, 6);
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
                ariaLabel = strings.nextMonthAriaLabel + ' ' + strings.months[date_time_utilities_1.addMonths(navigatedDate, 1).getMonth()];
            }
            else if (!showFullMonth && strings.nextWeekAriaLabel) {
                var firstDayOfNextWeek = date_time_utilities_1.getStartDateOfWeek(date_time_utilities_1.addDays(navigatedDate, 7), firstDayOfWeek);
                var lastDayOfNextWeek = date_time_utilities_1.addDays(firstDayOfNextWeek, 6);
                ariaLabel = strings.nextWeekAriaLabel + ' ' + _this._formatDateRange(firstDayOfNextWeek, lastDayOfNextWeek);
            }
            return ariaLabel;
        };
        _this._formatDateRange = function (startDate, endDate) {
            var _a, _b;
            var _c = _this.props, dateTimeFormatter = _c.dateTimeFormatter, strings = _c.strings;
            return ((_a = dateTimeFormatter) === null || _a === void 0 ? void 0 : _a.formatMonthDayYear(startDate, strings)) + " - " + ((_b = dateTimeFormatter) === null || _b === void 0 ? void 0 : _b.formatMonthDayYear(endDate, strings));
        };
        utilities_1.initializeComponentRef(_this);
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
        var newAnimationDirection = showFullMonth !== prevState.previousShowFullMonth ? Calendar_types_1.AnimationDirection.Vertical : Calendar_types_1.AnimationDirection.Horizontal;
        if (!date_time_utilities_1.compareDates(currentDate, prevState.selectedDate)) {
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
        var _a = this.props, strings = _a.strings, dateTimeFormatter = _a.dateTimeFormatter, firstDayOfWeek = _a.firstDayOfWeek, minDate = _a.minDate, maxDate = _a.maxDate, restrictedDates = _a.restrictedDates, today = _a.today, styles = _a.styles, theme = _a.theme, className = _a.className, showFullMonth = _a.showFullMonth, weeksToShow = _a.weeksToShow, calendarDayGridProps = tslib_1.__rest(_a, ["strings", "dateTimeFormatter", "firstDayOfWeek", "minDate", "maxDate", "restrictedDates", "today", "styles", "theme", "className", "showFullMonth", "weeksToShow"]);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return (React.createElement("div", { className: classNames.root, onKeyDown: this._onWrapperKeyDown, onTouchStart: this._onTouchStart, onTouchMove: this._onTouchMove, "aria-expanded": showFullMonth },
            this._renderPreviousWeekNavigationButton(classNames),
            React.createElement(CalendarDayGrid_1.CalendarDayGrid, tslib_1.__assign({ styles: styles, componentRef: this._dayGrid, strings: strings, selectedDate: this.state.selectedDate, navigatedDate: this.state.navigatedDate, firstDayOfWeek: firstDayOfWeek, firstWeekOfYear: date_time_utilities_1.FirstWeekOfYear.FirstDay, dateRangeType: date_time_utilities_1.DateRangeType.Day, weeksToShow: showFullMonth ? weeksToShow : 1, dateTimeFormatter: dateTimeFormatter, minDate: minDate, maxDate: maxDate, restrictedDates: restrictedDates, onSelectDate: this._onSelectDate, onNavigateDate: this._onNavigateDate, today: today, lightenDaysOutsideNavigatedMonth: showFullMonth, animationDirection: this.state.animationDirection }, calendarDayGridProps)),
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
        firstDayOfWeek: date_time_utilities_1.DayOfWeek.Sunday,
        strings: defaults_1.defaultWeeklyDayPickerStrings,
        navigationIcons: defaults_1.defaultWeeklyDayPickerNavigationIcons,
        dateTimeFormatter: date_time_utilities_1.DEFAULT_DATE_FORMATTING,
        animationDirection: Calendar_types_1.AnimationDirection.Horizontal,
    };
    return WeeklyDayPickerBase;
}(React.Component));
exports.WeeklyDayPickerBase = WeeklyDayPickerBase;
//# sourceMappingURL=WeeklyDayPicker.base.js.map