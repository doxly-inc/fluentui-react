import { __assign, __extends } from "tslib";
import * as React from 'react';
import { initializeComponentRef, EventGroup, css, shallowCompare, getNativeProps, divProperties, } from '../../Utilities';
import { CheckboxVisibility } from './DetailsList.types';
import { DetailsRowCheck } from './DetailsRowCheck';
import { GroupSpacer } from '../GroupedList/GroupSpacer';
import { DetailsRowFields } from './DetailsRowFields';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { SelectionMode, SELECTION_CHANGE } from '../../Selection';
import { CollapseAllVisibility } from '../../GroupedList';
import { classNamesFunction } from '../../Utilities';
var getClassNames = classNamesFunction();
var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var NO_COLUMNS = [];
var DetailsRowBase = /** @class */ (function (_super) {
    __extends(DetailsRowBase, _super);
    function DetailsRowBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        _this._cellMeasurer = React.createRef();
        _this._focusZone = React.createRef();
        _this._onSelectionChanged = function () {
            var selectionState = getSelectionState(_this.props);
            if (!shallowCompare(selectionState, _this.state.selectionState)) {
                _this.setState({
                    selectionState: selectionState,
                });
            }
        };
        /**
         * update isDropping state based on the input value, which is used to change style during drag and drop
         *
         * when change to true, that means drag enter. we will add default dropping class name
         * or the custom dropping class name (return result from onDragEnter) to the root elemet.
         *
         * when change to false, that means drag leave. we will remove the dropping class name from root element.
         *
         * @param newValue - New isDropping state value
         * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newValue, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, item = _a.item;
            if (!newValue) {
                if (dragDropEvents.onDragLeave) {
                    dragDropEvents.onDragLeave(item, event);
                }
            }
            else if (dragDropEvents.onDragEnter) {
                _this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
            }
            if (isDropping !== newValue) {
                _this.setState({ isDropping: newValue });
            }
        };
        initializeComponentRef(_this);
        _this._events = new EventGroup(_this);
        _this.state = {
            selectionState: getSelectionState(props),
            columnMeasureInfo: undefined,
            isDropping: false,
        };
        _this._droppingClassNames = '';
        return _this;
    }
    DetailsRowBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return __assign(__assign({}, previousState), { selectionState: getSelectionState(nextProps) });
    };
    DetailsRowBase.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection, item = _a.item, onDidMount = _a.onDidMount;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, SELECTION_CHANGE, this._onSelectionChanged);
        }
        if (onDidMount && item) {
            // If the item appears later, we should wait for it before calling this method.
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentDidUpdate = function (previousProps) {
        var state = this.state;
        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
        var columnMeasureInfo = state.columnMeasureInfo;
        if (this.props.itemIndex !== previousProps.itemIndex ||
            this.props.item !== previousProps.item ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
            }
        }
        if (columnMeasureInfo && columnMeasureInfo.index >= 0 && this._cellMeasurer.current) {
            var newWidth = this._cellMeasurer.current.getBoundingClientRect().width;
            columnMeasureInfo.onMeasureDone(newWidth);
            this.setState({
                columnMeasureInfo: undefined,
            });
        }
        if (item && onDidMount && !this._onDidMountCalled) {
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentWillUnmount = function () {
        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount;
        // Only call the onWillUnmount callback if we have an item.
        if (onWillUnmount && item) {
            onWillUnmount(this);
        }
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._events.dispose();
    };
    DetailsRowBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.props.useReducedRowRenderer) {
            var newSelectionState = getSelectionState(nextProps);
            if (this.state.selectionState.isSelected !== newSelectionState.isSelected) {
                return true;
            }
            return !shallowCompare(this.props, nextProps);
        }
        else {
            return true;
        }
    };
    DetailsRowBase.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, id = _a.id, _c = _a.flatIndexOffset, flatIndexOffset = _c === void 0 ? 2 : _c, _d = _a.onRenderCheck, onRenderCheck = _d === void 0 ? this._onRenderCheck : _d, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, onRenderItemColumn = _a.onRenderItemColumn, getCellValueKey = _a.getCellValueKey, selectionMode = _a.selectionMode, _e = _a.rowWidth, rowWidth = _e === void 0 ? 0 : _e, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, getRowAriaDescribedBy = _a.getRowAriaDescribedBy, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        _f = _a.rowFieldsAs, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        RowFields = _f === void 0 ? DetailsRowFields : _f, selection = _a.selection, indentWidth = _a.indentWidth, enableUpdateAnimations = _a.enableUpdateAnimations, compact = _a.compact, theme = _a.theme, styles = _a.styles, cellsByColumn = _a.cellsByColumn, groupNestingDepth = _a.groupNestingDepth, _g = _a.useFastIcons, useFastIcons = _g === void 0 ? true : _g, cellStyleProps = _a.cellStyleProps;
        var _h = this.state, columnMeasureInfo = _h.columnMeasureInfo, isDropping = _h.isDropping;
        var _j = this.state.selectionState, _k = _j.isSelected, isSelected = _k === void 0 ? false : _k, _l = _j.isSelectionModal, isSelectionModal = _l === void 0 ? false : _l;
        var isDraggable = dragDropEvents ? !!(dragDropEvents.canDrag && dragDropEvents.canDrag(item)) : undefined;
        var droppingClassName = isDropping ? this._droppingClassNames || DEFAULT_DROPPING_CSS_CLASS : '';
        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : undefined;
        var ariaDescribedBy = getRowAriaDescribedBy ? getRowAriaDescribedBy(item) : undefined;
        var canSelect = !!selection && selection.canSelectItem(item, itemIndex);
        var isContentUnselectable = selectionMode === SelectionMode.multiple;
        var showCheckbox = selectionMode !== SelectionMode.none && checkboxVisibility !== CheckboxVisibility.hidden;
        var ariaSelected = selectionMode === SelectionMode.none ? undefined : isSelected;
        this._classNames = __assign(__assign({}, this._classNames), getClassNames(styles, {
            theme: theme,
            isSelected: isSelected,
            canSelect: !isContentUnselectable,
            anySelected: isSelectionModal,
            checkboxCellClassName: checkboxCellClassName,
            droppingClassName: droppingClassName,
            className: className,
            compact: compact,
            enableUpdateAnimations: enableUpdateAnimations,
            cellStyleProps: cellStyleProps,
        }));
        var rowClassNames = {
            isMultiline: this._classNames.isMultiline,
            isRowHeader: this._classNames.isRowHeader,
            cell: this._classNames.cell,
            cellAnimation: this._classNames.cellAnimation,
            cellPadded: this._classNames.cellPadded,
            cellUnpadded: this._classNames.cellUnpadded,
            fields: this._classNames.fields,
        };
        // Only re-assign rowClassNames when classNames have changed.
        // Otherwise, they will cause DetailsRowFields to unnecessarily
        // re-render, see https://github.com/microsoft/fluentui/pull/8799.
        // Refactor DetailsRowFields to generate own styles to remove need for this.
        if (!shallowCompare(this._rowClassNames || {}, rowClassNames)) {
            this._rowClassNames = rowClassNames;
        }
        var rowFields = (React.createElement(RowFields, { rowClassNames: this._rowClassNames, rowHeaderId: id + "-header", cellsByColumn: cellsByColumn, columns: columns, item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0), onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey, enableUpdateAnimations: enableUpdateAnimations, cellStyleProps: cellStyleProps }));
        return (React.createElement(FocusZone, __assign({ "data-is-focusable": true }, getNativeProps(this.props, divProperties), (typeof isDraggable === 'boolean'
            ? {
                'data-is-draggable': isDraggable,
                draggable: isDraggable,
            }
            : {}), { direction: FocusZoneDirection.horizontal, elementRef: this._root, componentRef: this._focusZone, role: "row", "aria-label": ariaLabel, "aria-describedby": ariaDescribedBy, className: this._classNames.root, "data-selection-index": itemIndex, "data-selection-touch-invoke": true, "data-item-index": itemIndex, "aria-rowindex": groupNestingDepth ? undefined : itemIndex + flatIndexOffset, "aria-level": (groupNestingDepth && groupNestingDepth + 1) || undefined, "data-automationid": "DetailsRow", style: { minWidth: rowWidth }, "aria-selected": ariaSelected, allowFocusRoot: true }),
            showCheckbox && (React.createElement("div", { role: "gridcell", "aria-colindex": 1, "data-selection-toggle": true, className: this._classNames.checkCell }, onRenderCheck({
                id: id ? id + "-checkbox" : undefined,
                selected: isSelected,
                anySelected: isSelectionModal,
                'aria-label': checkButtonAriaLabel,
                'aria-labelledby': id ? id + "-checkbox " + id + "-header" : undefined,
                canSelect: canSelect,
                compact: compact,
                className: this._classNames.check,
                theme: theme,
                isVisible: checkboxVisibility === CheckboxVisibility.always,
                onRenderDetailsCheckbox: onRenderDetailsCheckbox,
                useFastIcons: useFastIcons,
            }))),
            React.createElement(GroupSpacer, { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - (this.props.collapseAllVisibility === CollapseAllVisibility.hidden ? 1 : 0) }),
            item && rowFields,
            columnMeasureInfo && (React.createElement("span", { role: "presentation", className: css(this._classNames.cellMeasurer, this._classNames.cell), ref: this._cellMeasurer },
                React.createElement(RowFields, { rowClassNames: this._rowClassNames, rowHeaderId: id + "-header", columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0) + columns.length, onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey }))),
            React.createElement("span", { role: "checkbox", className: this._classNames.checkCover, "aria-checked": isSelected, "data-selection-toggle": true })));
    };
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param index - The cell index
     * @param onMeasureDone - The call back function when finish measure
     */
    DetailsRowBase.prototype.measureCell = function (index, onMeasureDone) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = __assign({}, columns[index]);
        column.minWidth = 0;
        column.maxWidth = 999999;
        delete column.calculatedWidth;
        this.setState({
            columnMeasureInfo: {
                index: index,
                column: column,
                onMeasureDone: onMeasureDone,
            },
        });
    };
    DetailsRowBase.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var _a;
        return !!((_a = this._focusZone.current) === null || _a === void 0 ? void 0 : _a.focus(forceIntoFirstElement));
    };
    DetailsRowBase.prototype._onRenderCheck = function (props) {
        return React.createElement(DetailsRowCheck, __assign({}, props));
    };
    DetailsRowBase.prototype._getRowDragDropOptions = function () {
        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: itemIndex,
            context: { data: item, index: itemIndex },
            canDrag: dragDropEvents.canDrag,
            canDrop: dragDropEvents.canDrop,
            onDragStart: dragDropEvents.onDragStart,
            updateDropState: this._updateDroppingState,
            onDrop: dragDropEvents.onDrop,
            onDragEnd: dragDropEvents.onDragEnd,
            onDragOver: dragDropEvents.onDragOver,
        };
        return options;
    };
    return DetailsRowBase;
}(React.Component));
export { DetailsRowBase };
function getSelectionState(props) {
    var _a, _b, _c, _d;
    var itemIndex = props.itemIndex, selection = props.selection;
    return {
        isSelected: !!((_a = selection) === null || _a === void 0 ? void 0 : _a.isIndexSelected(itemIndex)),
        isSelectionModal: !!((_d = (_b = selection) === null || _b === void 0 ? void 0 : (_c = _b).isModal) === null || _d === void 0 ? void 0 : _d.call(_c)),
    };
}
//# sourceMappingURL=DetailsRow.base.js.map