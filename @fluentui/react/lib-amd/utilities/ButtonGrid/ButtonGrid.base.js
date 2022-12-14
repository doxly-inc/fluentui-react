define(["require", "exports", "tslib", "react", "../../Utilities", "../../FocusZone", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Utilities_1, FocusZone_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    exports.ButtonGridBase = React.forwardRef(function (props, forwardedRef) {
        var id = react_hooks_1.useId(undefined, props.id);
        var items = props.items, columnCount = props.columnCount, onRenderItem = props.onRenderItem, 
        // eslint-disable-next-line deprecation/deprecation
        _a = props.ariaPosInSet, 
        // eslint-disable-next-line deprecation/deprecation
        ariaPosInSet = _a === void 0 ? props.positionInSet : _a, 
        // eslint-disable-next-line deprecation/deprecation
        _b = props.ariaSetSize, 
        // eslint-disable-next-line deprecation/deprecation
        ariaSetSize = _b === void 0 ? props.setSize : _b, styles = props.styles, doNotContainWithinFocusZone = props.doNotContainWithinFocusZone;
        var htmlProps = Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties, 
        // avoid applying onBlur on the table if it's being used in the FocusZone
        doNotContainWithinFocusZone ? [] : ['onBlur']);
        var classNames = getClassNames(styles, { theme: props.theme });
        // Array to store the cells in the correct row index
        var rowsOfItems = Utilities_1.toMatrix(items, columnCount);
        var content = (React.createElement("table", tslib_1.__assign({ "aria-posinset": ariaPosInSet, "aria-setsize": ariaSetSize, id: id, role: "grid" }, htmlProps, { className: classNames.root }),
            React.createElement("tbody", null, rowsOfItems.map(function (rows, rowIndex) {
                return (React.createElement("tr", { role: 'row', key: rowIndex }, rows.map(function (cell, cellIndex) {
                    return (React.createElement("td", { role: "presentation", key: cellIndex + '-cell', className: classNames.tableCell }, onRenderItem(cell, cellIndex)));
                })));
            }))));
        return doNotContainWithinFocusZone ? (content) : (React.createElement(FocusZone_1.FocusZone, { elementRef: forwardedRef, isCircularNavigation: props.shouldFocusCircularNavigate, className: classNames.focusedContainer, onBlur: props.onBlur }, content));
    });
});
//# sourceMappingURL=ButtonGrid.base.js.map