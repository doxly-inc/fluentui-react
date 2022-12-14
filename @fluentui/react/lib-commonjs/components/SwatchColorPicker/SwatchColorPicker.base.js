"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var ButtonGrid_1 = require("../../utilities/ButtonGrid/ButtonGrid");
var ColorPickerGridCell_1 = require("./ColorPickerGridCell");
var react_hooks_1 = require("@fluentui/react-hooks");
var getClassNames = Utilities_1.classNamesFunction();
var COMPONENT_NAME = 'SwatchColorPicker';
function useDebugWarnings(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        react_hooks_1.useWarnings({
            name: COMPONENT_NAME,
            props: props,
            mutuallyExclusive: { focusOnHover: 'onHover', selectedId: 'defaultSelectedId' },
            deprecations: { isControlled: "selectedId' or 'defaultSelectedId", onColorChanged: 'onChange' },
        });
    }
}
exports.SwatchColorPickerBase = React.forwardRef(function (props, ref) {
    var defaultId = react_hooks_1.useId('swatchColorPicker');
    var id = props.id || defaultId;
    var internalState = react_hooks_1.useConst({
        isNavigationIdle: true,
        cellFocused: false,
        navigationIdleTimeoutId: undefined,
        navigationIdleDelay: 250,
    });
    var _a = react_hooks_1.useSetTimeout(), setTimeout = _a.setTimeout, clearTimeout = _a.clearTimeout;
    useDebugWarnings(props);
    var colorCells = props.colorCells, _b = props.cellShape, cellShape = _b === void 0 ? 'circle' : _b, columnCount = props.columnCount, _c = props.shouldFocusCircularNavigate, shouldFocusCircularNavigate = _c === void 0 ? true : _c, className = props.className, _d = props.disabled, disabled = _d === void 0 ? false : _d, doNotContainWithinFocusZone = props.doNotContainWithinFocusZone, styles = props.styles, _e = props.cellMargin, cellMargin = _e === void 0 ? 10 : _e, defaultSelectedId = props.defaultSelectedId, focusOnHover = props.focusOnHover, mouseLeaveParentSelector = props.mouseLeaveParentSelector, onChange = props.onChange, 
    // eslint-disable-next-line deprecation/deprecation
    onColorChanged = props.onColorChanged, onCellHovered = props.onCellHovered, onCellFocused = props.onCellFocused, getColorGridCellStyles = props.getColorGridCellStyles, cellHeight = props.cellHeight, cellWidth = props.cellWidth, cellBorderWidth = props.cellBorderWidth;
    /**
     *  Add an index to each color cells. Memoizes this so that color cells do not re-render on every update.
     */
    var itemsWithIndex = React.useMemo(function () {
        return colorCells.map(function (item, index) {
            return tslib_1.__assign(tslib_1.__assign({}, item), { index: index });
        });
    }, [colorCells]);
    var mergedOnChange = React.useCallback(function (ev, newSelectedId) {
        var _a, _b, _c;
        // Call both new and old change handlers, and add the extra `color` parameter
        var newColor = (_a = colorCells.filter(function (c) { return c.id === newSelectedId; })[0]) === null || _a === void 0 ? void 0 : _a.color;
        (_b = onChange) === null || _b === void 0 ? void 0 : _b(ev, newSelectedId, newColor);
        (_c = onColorChanged) === null || _c === void 0 ? void 0 : _c(newSelectedId, newColor);
    }, [onChange, onColorChanged, colorCells]);
    var _f = react_hooks_1.useControllableValue(props.selectedId, defaultSelectedId, mergedOnChange), selectedId = _f[0], setSelectedId = _f[1];
    var classNames = getClassNames(styles, {
        theme: props.theme,
        className: className,
        cellMargin: cellMargin,
    });
    var gridStyles = {
        root: classNames.root,
        tableCell: classNames.tableCell,
        focusedContainer: classNames.focusedContainer,
    };
    /**
     * When the whole swatchColorPicker is blurred,
     * make sure to clear the pending focused stated
     */
    var onSwatchColorPickerBlur = React.useCallback(function () {
        if (onCellFocused) {
            internalState.cellFocused = false;
            onCellFocused();
        }
    }, [internalState, onCellFocused]);
    /**
     * Callback passed to the GridCell that will manage triggering the onCellHovered callback for mouseEnter
     */
    var onMouseEnter = React.useCallback(function (ev) {
        if (!focusOnHover) {
            return !internalState.isNavigationIdle || !!disabled;
        }
        if (internalState.isNavigationIdle && !disabled) {
            ev.currentTarget.focus();
        }
        return true;
    }, [focusOnHover, internalState, disabled]);
    /**
     * Callback passed to the GridCell that will manage Hover/Focus updates
     */
    var onMouseMove = React.useCallback(function (ev) {
        if (!focusOnHover) {
            return !internalState.isNavigationIdle || !!disabled;
        }
        var targetElement = ev.currentTarget;
        // If navigation is idle and the targetElement is the focused element bail out
        if (internalState.isNavigationIdle && !(document && targetElement === document.activeElement)) {
            targetElement.focus();
        }
        return true;
    }, [focusOnHover, internalState, disabled]);
    /**
     * Callback passed to the GridCell that will manage Hover/Focus updates
     */
    var onMouseLeave = React.useCallback(function (ev) {
        var parentSelector = mouseLeaveParentSelector;
        if (!focusOnHover || !parentSelector || !internalState.isNavigationIdle || disabled) {
            return;
        }
        // Get the elements that math the given selector
        var elements = document.querySelectorAll(parentSelector);
        // iterate over the elements return to make sure it is a parent of the target and focus it
        for (var index = 0; index < elements.length; index += 1) {
            if (elements[index].contains(ev.currentTarget)) {
                /**
                 * IE11 focus() method forces parents to scroll to top of element.
                 * Edge and IE expose a setActive() function for focusable divs that
                 * sets the page focus but does not scroll the parent element.
                 */
                if (elements[index].setActive) {
                    try {
                        elements[index].setActive();
                    }
                    catch (e) {
                        /* no-op */
                    }
                }
                else {
                    elements[index].focus();
                }
                break;
            }
        }
    }, [disabled, focusOnHover, internalState, mouseLeaveParentSelector]);
    /**
     * Callback passed to the GridCell class that will trigger the onCellHovered callback of the SwatchColorPicker
     * NOTE: This will not be triggered if shouldFocusOnHover === true
     */
    var onGridCellHovered = React.useCallback(function (item) {
        if (onCellHovered) {
            return item ? onCellHovered(item.id, item.color) : onCellHovered();
        }
    }, [onCellHovered]);
    /**
     * Callback passed to the GridCell class that will trigger the onCellFocus callback of the SwatchColorPicker
     */
    var onGridCellFocused = React.useCallback(function (item) {
        if (onCellFocused) {
            if (item) {
                internalState.cellFocused = true;
                return onCellFocused(item.id, item.color);
            }
            else {
                internalState.cellFocused = false;
                return onCellFocused();
            }
        }
    }, [internalState, onCellFocused]);
    /**
     * Handle the click on a cell
     */
    var onCellClick = React.useCallback(function (item) {
        if (disabled) {
            return;
        }
        if (item.id !== selectedId) {
            if (onCellFocused && internalState.cellFocused) {
                internalState.cellFocused = false;
                onCellFocused();
            }
            setSelectedId(item.id);
        }
    }, [disabled, internalState, onCellFocused, selectedId, setSelectedId]);
    /**
     * Sets a timeout so we won't process any mouse "hover" events
     * while navigating (via mouseWheel or arrowKeys)
     */
    var setNavigationTimeout = React.useCallback(function () {
        if (!internalState.isNavigationIdle && internalState.navigationIdleTimeoutId !== undefined) {
            clearTimeout(internalState.navigationIdleTimeoutId);
            internalState.navigationIdleTimeoutId = undefined;
        }
        else {
            internalState.isNavigationIdle = false;
        }
        internalState.navigationIdleTimeoutId = setTimeout(function () {
            internalState.isNavigationIdle = true;
        }, internalState.navigationIdleDelay);
    }, [clearTimeout, internalState, setTimeout]);
    /**
     * Callback used to handle KeyCode events
     */
    var onKeyDown = React.useCallback(function (ev) {
        if (
        // eslint-disable-next-line deprecation/deprecation
        ev.which === Utilities_1.KeyCodes.up ||
            // eslint-disable-next-line deprecation/deprecation
            ev.which === Utilities_1.KeyCodes.down ||
            // eslint-disable-next-line deprecation/deprecation
            ev.which === Utilities_1.KeyCodes.left ||
            // eslint-disable-next-line deprecation/deprecation
            ev.which === Utilities_1.KeyCodes.right) {
            setNavigationTimeout();
        }
    }, [setNavigationTimeout]);
    /**
     * Render a color cell
     * @param item - The item to render
     * @returns - Element representing the item
     */
    var renderOption = function (item) {
        return (React.createElement(ColorPickerGridCell_1.ColorPickerGridCell, { item: item, idPrefix: id, color: item.color, styles: getColorGridCellStyles, disabled: disabled, onClick: onCellClick, onHover: onGridCellHovered, onFocus: onGridCellFocused, selected: selectedId === item.id, circle: cellShape === 'circle', label: item.label, onMouseEnter: onMouseEnter, onMouseMove: onMouseMove, onMouseLeave: onMouseLeave, onWheel: setNavigationTimeout, onKeyDown: onKeyDown, height: cellHeight, width: cellWidth, borderWidth: cellBorderWidth }));
    };
    if (colorCells.length < 1 || columnCount < 1) {
        return null;
    }
    var onRenderItem = function (item, index) {
        var _a = props.onRenderColorCell, onRenderColorCell = _a === void 0 ? renderOption : _a;
        return onRenderColorCell(item, renderOption);
    };
    return (React.createElement(ButtonGrid_1.ButtonGrid, tslib_1.__assign({}, props, { ref: ref, id: id, items: itemsWithIndex, columnCount: columnCount, 
        // eslint-disable-next-line react/jsx-no-bind
        onRenderItem: onRenderItem, shouldFocusCircularNavigate: shouldFocusCircularNavigate, doNotContainWithinFocusZone: doNotContainWithinFocusZone, onBlur: onSwatchColorPickerBlur, theme: props.theme, styles: gridStyles })));
});
exports.SwatchColorPickerBase.displayName = COMPONENT_NAME;
//# sourceMappingURL=SwatchColorPicker.base.js.map