import * as React from 'react';
import { mergeStyleSets } from '../../Styling';
import { classNamesFunction, memoizeFunction } from '../../Utilities';
import { getColorFromString } from '../../Color';
import { ButtonGridCell } from '../../utilities/ButtonGrid/ButtonGridCell';
import { getStyles as getActionButtonStyles } from '../Button/ActionButton/ActionButton.styles';
var getClassNames = classNamesFunction();
/** Validate if the cell's color is white or not to apply whiteCell style */
var isWhiteCell = function (inputColor) {
    var _a;
    var currentColor = getColorFromString(inputColor);
    return ((_a = currentColor) === null || _a === void 0 ? void 0 : _a.hex) === 'ffffff';
};
var getColorPickerGridCellButtonClassNames = memoizeFunction(function (theme, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
    var styles = getActionButtonStyles(theme);
    return mergeStyleSets({
        root: [
            'ms-Button',
            styles.root,
            variantClassName,
            className,
            checked && ['is-checked', styles.rootChecked],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !checked && {
                selectors: {
                    ':hover': styles.rootHovered,
                    ':focus': styles.rootFocused,
                    ':active': styles.rootPressed,
                },
            },
            disabled && checked && [styles.rootCheckedDisabled],
            !disabled &&
                checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed,
                },
            },
        ],
        flexContainer: ['ms-Button-flexContainer', styles.flexContainer],
    });
});
export var ColorPickerGridCellBase = function (props) {
    var item = props.item, 
    // eslint-disable-next-line deprecation/deprecation
    _a = props.idPrefix, 
    // eslint-disable-next-line deprecation/deprecation
    idPrefix = _a === void 0 ? props.id : _a, _b = props.selected, selected = _b === void 0 ? false : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, styles = props.styles, _d = props.circle, circle = _d === void 0 ? true : _d, color = props.color, onClick = props.onClick, onHover = props.onHover, onFocus = props.onFocus, onMouseEnter = props.onMouseEnter, onMouseMove = props.onMouseMove, onMouseLeave = props.onMouseLeave, onWheel = props.onWheel, onKeyDown = props.onKeyDown, height = props.height, width = props.width, borderWidth = props.borderWidth;
    var classNames = getClassNames(styles, {
        theme: props.theme,
        disabled: disabled,
        selected: selected,
        circle: circle,
        isWhite: isWhiteCell(color),
        height: height,
        width: width,
        borderWidth: borderWidth,
    });
    // Render the core of a color cell
    var onRenderColorOption = function (colorOption) {
        var _a;
        var svgClassName = classNames.svg;
        // Build an SVG for the cell with the given shape and color properties
        return (React.createElement("svg", { className: svgClassName, viewBox: "0 0 20 20", fill: (_a = getColorFromString(colorOption.color)) === null || _a === void 0 ? void 0 : _a.str }, circle ? React.createElement("circle", { cx: "50%", cy: "50%", r: "50%" }) : React.createElement("rect", { width: "100%", height: "100%" })));
    };
    return (React.createElement(ButtonGridCell, { item: item, id: idPrefix + "-" + item.id + "-" + item.index, key: item.id, disabled: disabled, role: 'gridcell', 
        // eslint-disable-next-line react/jsx-no-bind
        onRenderItem: onRenderColorOption, selected: selected, onClick: onClick, onHover: onHover, onFocus: onFocus, label: item.label, className: classNames.colorCell, getClassNames: getColorPickerGridCellButtonClassNames, index: item.index, onMouseEnter: onMouseEnter, onMouseMove: onMouseMove, onMouseLeave: onMouseLeave, onWheel: onWheel, onKeyDown: onKeyDown }));
};
//# sourceMappingURL=ColorPickerGridCell.base.js.map