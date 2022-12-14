import { __assign } from "tslib";
import * as React from 'react';
import { toMatrix, classNamesFunction, getNativeProps, htmlElementProperties } from '../../Utilities';
import { FocusZone } from '../../FocusZone';
import { useId } from '@fluentui/react-hooks';
var getClassNames = classNamesFunction();
export var ButtonGridBase = React.forwardRef(function (props, forwardedRef) {
    var id = useId(undefined, props.id);
    var items = props.items, columnCount = props.columnCount, onRenderItem = props.onRenderItem, 
    // eslint-disable-next-line deprecation/deprecation
    _a = props.ariaPosInSet, 
    // eslint-disable-next-line deprecation/deprecation
    ariaPosInSet = _a === void 0 ? props.positionInSet : _a, 
    // eslint-disable-next-line deprecation/deprecation
    _b = props.ariaSetSize, 
    // eslint-disable-next-line deprecation/deprecation
    ariaSetSize = _b === void 0 ? props.setSize : _b, styles = props.styles, doNotContainWithinFocusZone = props.doNotContainWithinFocusZone;
    var htmlProps = getNativeProps(props, htmlElementProperties, 
    // avoid applying onBlur on the table if it's being used in the FocusZone
    doNotContainWithinFocusZone ? [] : ['onBlur']);
    var classNames = getClassNames(styles, { theme: props.theme });
    // Array to store the cells in the correct row index
    var rowsOfItems = toMatrix(items, columnCount);
    var content = (React.createElement("table", __assign({ "aria-posinset": ariaPosInSet, "aria-setsize": ariaSetSize, id: id, role: "grid" }, htmlProps, { className: classNames.root }),
        React.createElement("tbody", null, rowsOfItems.map(function (rows, rowIndex) {
            return (React.createElement("tr", { role: 'row', key: rowIndex }, rows.map(function (cell, cellIndex) {
                return (React.createElement("td", { role: "presentation", key: cellIndex + '-cell', className: classNames.tableCell }, onRenderItem(cell, cellIndex)));
            })));
        }))));
    return doNotContainWithinFocusZone ? (content) : (React.createElement(FocusZone, { elementRef: forwardedRef, isCircularNavigation: props.shouldFocusCircularNavigate, className: classNames.focusedContainer, onBlur: props.onBlur }, content));
});
//# sourceMappingURL=ButtonGrid.base.js.map