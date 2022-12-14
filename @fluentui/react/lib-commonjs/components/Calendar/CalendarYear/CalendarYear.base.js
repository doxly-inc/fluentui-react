"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var FocusZone_1 = require("../../../FocusZone");
var Icon_1 = require("../../../Icon");
var react_hooks_1 = require("@fluentui/react-hooks");
var defaults_1 = require("../defaults");
var getClassNames = Utilities_1.classNamesFunction();
var CELL_COUNT = 12;
var CELLS_PER_ROW = 4;
var DefaultCalendarYearStrings = {
    prevRangeAriaLabel: undefined,
    nextRangeAriaLabel: undefined,
};
var CalendarYearGridCell = function (props) {
    var _a;
    var _b, _c;
    var styles = props.styles, theme = props.theme, className = props.className, highlightCurrentYear = props.highlightCurrentYear, highlightSelectedYear = props.highlightSelectedYear, year = props.year, selected = props.selected, disabled = props.disabled, componentRef = props.componentRef, onSelectYear = props.onSelectYear, onRenderYear = props.onRenderYear;
    var buttonRef = React.useRef(null);
    React.useImperativeHandle(componentRef, function () { return ({
        focus: function () {
            var _a, _b, _c;
            (_c = (_a = buttonRef.current) === null || _a === void 0 ? void 0 : (_b = _a).focus) === null || _c === void 0 ? void 0 : _c.call(_b);
        },
    }); }, []);
    var onClick = function () {
        var _a;
        (_a = onSelectYear) === null || _a === void 0 ? void 0 : _a(year);
    };
    var onKeyDown = function (ev) {
        var _a;
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === Utilities_1.KeyCodes.enter) {
            (_a = onSelectYear) === null || _a === void 0 ? void 0 : _a(year);
        }
    };
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        highlightCurrent: highlightCurrentYear,
        highlightSelected: highlightSelectedYear,
    });
    return (React.createElement("button", { className: Utilities_1.css(classNames.itemButton, (_a = {},
            _a[classNames.selected] = selected,
            _a[classNames.disabled] = disabled,
            _a)), type: "button", role: "gridcell", onClick: !disabled ? onClick : undefined, onKeyDown: !disabled ? onKeyDown : undefined, disabled: disabled, "aria-selected": selected, ref: buttonRef, "aria-readonly": true }, (_c = (_b = onRenderYear) === null || _b === void 0 ? void 0 : _b(year), (_c !== null && _c !== void 0 ? _c : year))));
};
CalendarYearGridCell.displayName = 'CalendarYearGridCell';
var CalendarYearGrid = function (props) {
    var styles = props.styles, theme = props.theme, className = props.className, fromYear = props.fromYear, toYear = props.toYear, animationDirection = props.animationDirection, animateBackwards = props.animateBackwards, minYear = props.minYear, maxYear = props.maxYear, onSelectYear = props.onSelectYear, selectedYear = props.selectedYear, componentRef = props.componentRef;
    var selectedCellRef = React.useRef(null);
    var currentCellRef = React.useRef(null);
    React.useImperativeHandle(componentRef, function () { return ({
        focus: function () {
            var _a, _b, _c;
            (_c = (_a = (selectedCellRef.current || currentCellRef.current)) === null || _a === void 0 ? void 0 : (_b = _a).focus) === null || _c === void 0 ? void 0 : _c.call(_b);
        },
    }); }, []);
    var renderCell = function (yearToRender) {
        var selected = yearToRender === selectedYear;
        var disabled = (minYear !== undefined && yearToRender < minYear) || (maxYear !== undefined && yearToRender > maxYear);
        var current = yearToRender === new Date().getFullYear();
        return (React.createElement(CalendarYearGridCell, tslib_1.__assign({}, props, { key: yearToRender, year: yearToRender, selected: selected, current: current, disabled: disabled, onSelectYear: onSelectYear, componentRef: selected ? selectedCellRef : current ? currentCellRef : undefined, theme: theme })));
    };
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        animateBackwards: animateBackwards,
        animationDirection: animationDirection,
    });
    var onRenderYear = function (value) {
        var _a, _b, _c;
        return _c = (_b = (_a = props).onRenderYear) === null || _b === void 0 ? void 0 : _b.call(_a, value), (_c !== null && _c !== void 0 ? _c : value);
    };
    var gridAriaLabel = onRenderYear(fromYear) + " - " + onRenderYear(toYear);
    var year = fromYear;
    var cells = [];
    for (var i = 0; i < (toYear - fromYear + 1) / CELLS_PER_ROW; i++) {
        cells.push([]);
        for (var j = 0; j < CELLS_PER_ROW; j++) {
            cells[i].push(renderCell(year));
            year++;
        }
    }
    return (React.createElement(FocusZone_1.FocusZone, null,
        React.createElement("div", { className: classNames.gridContainer, role: "grid", "aria-label": gridAriaLabel }, cells.map(function (cellRow, index) {
            return (React.createElement("div", { key: 'yearPickerRow_' + index + '_' + fromYear, role: "row", className: classNames.buttonRow }, cellRow));
        }))));
};
CalendarYearGrid.displayName = 'CalendarYearGrid';
var CalendarYearNavDirection;
(function (CalendarYearNavDirection) {
    CalendarYearNavDirection[CalendarYearNavDirection["Previous"] = 0] = "Previous";
    CalendarYearNavDirection[CalendarYearNavDirection["Next"] = 1] = "Next";
})(CalendarYearNavDirection || (CalendarYearNavDirection = {}));
var CalendarYearNavArrow = function (props) {
    var _a;
    var styles = props.styles, theme = props.theme, className = props.className, _b = props.navigationIcons, navigationIcons = _b === void 0 ? defaults_1.defaultCalendarNavigationIcons : _b, _c = props.strings, strings = _c === void 0 ? DefaultCalendarYearStrings : _c, direction = props.direction, onSelectPrev = props.onSelectPrev, onSelectNext = props.onSelectNext, fromYear = props.fromYear, toYear = props.toYear, maxYear = props.maxYear, minYear = props.minYear;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
    });
    var ariaLabel = direction === 0 /* Previous */ ? strings.prevRangeAriaLabel : strings.nextRangeAriaLabel;
    var newRangeOffset = direction === 0 /* Previous */ ? -CELL_COUNT : CELL_COUNT;
    var newRange = { fromYear: fromYear + newRangeOffset, toYear: toYear + newRangeOffset };
    var ariaLabelString = ariaLabel ? (typeof ariaLabel === 'string' ? ariaLabel : ariaLabel(newRange)) : undefined;
    var disabled = direction === 0 /* Previous */
        ? minYear !== undefined && fromYear < minYear
        : maxYear !== undefined && props.fromYear + CELL_COUNT > maxYear;
    var onNavigate = function () {
        var _a, _b;
        direction === 0 /* Previous */ ? (_a = onSelectPrev) === null || _a === void 0 ? void 0 : _a() : (_b = onSelectNext) === null || _b === void 0 ? void 0 : _b();
    };
    var onKeyDown = function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === Utilities_1.KeyCodes.enter) {
            onNavigate();
        }
    };
    // can be condensed, but leaving verbose for clarity due to regressions
    var isLeftNavigation = Utilities_1.getRTL()
        ? direction === 1 /* Next */
        : direction === 0 /* Previous */;
    return (React.createElement("button", { className: Utilities_1.css(classNames.navigationButton, (_a = {},
            _a[classNames.disabled] = disabled,
            _a)), onClick: !disabled ? onNavigate : undefined, onKeyDown: !disabled ? onKeyDown : undefined, type: "button", title: ariaLabelString, disabled: disabled },
        React.createElement(Icon_1.Icon, { iconName: isLeftNavigation ? navigationIcons.leftNavigation : navigationIcons.rightNavigation })));
};
CalendarYearNavArrow.displayName = 'CalendarYearNavArrow';
var CalendarYearNav = function (props) {
    var styles = props.styles, theme = props.theme, className = props.className;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
    });
    return (React.createElement("div", { className: classNames.navigationButtonsContainer },
        React.createElement(CalendarYearNavArrow, tslib_1.__assign({}, props, { direction: 0 /* Previous */ })),
        React.createElement(CalendarYearNavArrow, tslib_1.__assign({}, props, { direction: 1 /* Next */ }))));
};
CalendarYearNav.displayName = 'CalendarYearNav';
var CalendarYearTitle = function (props) {
    var styles = props.styles, theme = props.theme, className = props.className, fromYear = props.fromYear, toYear = props.toYear, _a = props.strings, strings = _a === void 0 ? DefaultCalendarYearStrings : _a, animateBackwards = props.animateBackwards, animationDirection = props.animationDirection;
    var onHeaderSelect = function () {
        var _a, _b;
        (_b = (_a = props).onHeaderSelect) === null || _b === void 0 ? void 0 : _b.call(_a, true);
    };
    var onHeaderKeyDown = function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === Utilities_1.KeyCodes.enter || ev.which === Utilities_1.KeyCodes.space) {
            onHeaderSelect();
        }
    };
    var onRenderYear = function (year) {
        var _a, _b, _c;
        return _c = (_b = (_a = props).onRenderYear) === null || _b === void 0 ? void 0 : _b.call(_a, year), (_c !== null && _c !== void 0 ? _c : year);
    };
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        hasHeaderClickCallback: !!props.onHeaderSelect,
        animateBackwards: animateBackwards,
        animationDirection: animationDirection,
    });
    if (props.onHeaderSelect) {
        var rangeAriaLabel = strings.rangeAriaLabel;
        var headerAriaLabelFormatString = strings.headerAriaLabelFormatString;
        var currentDateRange = rangeAriaLabel
            ? typeof rangeAriaLabel === 'string'
                ? rangeAriaLabel
                : rangeAriaLabel(props)
            : undefined;
        var ariaLabel = headerAriaLabelFormatString
            ? Utilities_1.format(headerAriaLabelFormatString, currentDateRange)
            : currentDateRange;
        return (React.createElement("button", { className: classNames.currentItemButton, onClick: onHeaderSelect, onKeyDown: onHeaderKeyDown, "aria-label": ariaLabel, role: "button", type: "button", "aria-atomic": true, "aria-live": "polite" },
            onRenderYear(fromYear),
            " - ",
            onRenderYear(toYear)));
    }
    return (React.createElement("div", { className: classNames.current },
        onRenderYear(fromYear),
        " - ",
        onRenderYear(toYear)));
};
CalendarYearTitle.displayName = 'CalendarYearTitle';
var CalendarYearHeader = function (props) {
    var _a, _b;
    var styles = props.styles, theme = props.theme, className = props.className, animateBackwards = props.animateBackwards, animationDirection = props.animationDirection, onRenderTitle = props.onRenderTitle;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        hasHeaderClickCallback: !!props.onHeaderSelect,
        animateBackwards: animateBackwards,
        animationDirection: animationDirection,
    });
    return (React.createElement("div", { className: classNames.headerContainer }, (_b = (_a = onRenderTitle) === null || _a === void 0 ? void 0 : _a(props), (_b !== null && _b !== void 0 ? _b : React.createElement(CalendarYearTitle, tslib_1.__assign({}, props)))),
        React.createElement(CalendarYearNav, tslib_1.__assign({}, props))));
};
CalendarYearHeader.displayName = 'CalendarYearHeader';
function useAnimateBackwards(_a) {
    var selectedYear = _a.selectedYear, navigatedYear = _a.navigatedYear;
    var rangeYear = selectedYear || navigatedYear || new Date().getFullYear();
    var fromYear = Math.floor(rangeYear / 10) * 10;
    var previousFromYear = react_hooks_1.usePrevious(fromYear);
    if (!previousFromYear || previousFromYear === fromYear) {
        return undefined;
    }
    else if (previousFromYear > fromYear) {
        return true;
    }
    else {
        return false;
    }
}
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection[NavigationDirection["Previous"] = 0] = "Previous";
    NavigationDirection[NavigationDirection["Next"] = 1] = "Next";
})(NavigationDirection || (NavigationDirection = {}));
function useYearRangeState(_a) {
    var selectedYear = _a.selectedYear, navigatedYear = _a.navigatedYear;
    var _b = React.useReducer(function (state, action) {
        return state + (action === 1 /* Next */ ? CELL_COUNT : -CELL_COUNT);
    }, undefined, function () {
        var rangeYear = selectedYear || navigatedYear || new Date().getFullYear();
        return Math.floor(rangeYear / 10) * 10;
    }), fromYear = _b[0], navigate = _b[1];
    var toYear = fromYear + CELL_COUNT - 1;
    var onNavNext = function () { return navigate(1 /* Next */); };
    var onNavPrevious = function () { return navigate(0 /* Previous */); };
    return [fromYear, toYear, onNavNext, onNavPrevious];
}
exports.CalendarYearBase = function (props) {
    var animateBackwards = useAnimateBackwards(props);
    var _a = useYearRangeState(props), fromYear = _a[0], toYear = _a[1], onNavNext = _a[2], onNavPrevious = _a[3];
    var gridRef = React.useRef(null);
    React.useImperativeHandle(props.componentRef, function () { return ({
        focus: function () {
            var _a, _b, _c;
            (_c = (_a = gridRef.current) === null || _a === void 0 ? void 0 : (_b = _a).focus) === null || _c === void 0 ? void 0 : _c.call(_b);
        },
    }); });
    var styles = props.styles, theme = props.theme, className = props.className;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
    });
    return (React.createElement("div", { className: classNames.root },
        React.createElement(CalendarYearHeader, tslib_1.__assign({}, props, { fromYear: fromYear, toYear: toYear, onSelectPrev: onNavPrevious, onSelectNext: onNavNext, animateBackwards: animateBackwards })),
        React.createElement(CalendarYearGrid, tslib_1.__assign({}, props, { fromYear: fromYear, toYear: toYear, animateBackwards: animateBackwards, componentRef: gridRef }))));
};
exports.CalendarYearBase.displayName = 'CalendarYearBase';
//# sourceMappingURL=CalendarYear.base.js.map