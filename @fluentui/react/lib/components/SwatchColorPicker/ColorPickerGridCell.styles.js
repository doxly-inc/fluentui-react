import { IsFocusVisibleClassName } from '../../Utilities';
import { HighContrastSelector, getFocusStyle } from '../../Styling';
// Size breakpoint when the default border width changes from 2px to 4px.
var CELL_BORDER_BREAKPOINT = 24;
var LARGE_BORDER = 4;
var SMALL_BORDER = 2;
var DIVIDING_PADDING = 2;
var DEFAULT_CELL_SIZE = 20;
var cellHighContrastFocus = {
    left: -2,
    top: -2,
    bottom: -2,
    right: -2,
    border: 'none',
    outlineColor: 'ButtonText',
};
export var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, disabled = props.disabled, selected = props.selected, circle = props.circle, isWhite = props.isWhite, _f = props.height, height = _f === void 0 ? DEFAULT_CELL_SIZE : _f, _g = props.width, width = _g === void 0 ? DEFAULT_CELL_SIZE : _g, borderWidth = props.borderWidth;
    var semanticColors = theme.semanticColors, palette = theme.palette;
    var buttonBorderHovered = palette.neutralLighter;
    var buttonBorderChecked = palette.neutralLight;
    var buttonBorderCheckedHovered = palette.neutralSecondary;
    var buttonBorderIsWhite = palette.neutralTertiary;
    // If user provided a value, use it. If not, then we decide depending on the 24px size breakpoint.
    var calculatedBorderWidth = borderWidth
        ? borderWidth
        : width < CELL_BORDER_BREAKPOINT
            ? SMALL_BORDER
            : LARGE_BORDER;
    return {
        // this is a button that wraps the color
        colorCell: [
            getFocusStyle(theme, { inset: -1, position: 'relative', highContrastStyle: cellHighContrastFocus }),
            {
                backgroundColor: semanticColors.bodyBackground,
                padding: 0,
                position: 'relative',
                boxSizing: 'border-box',
                display: 'inline-block',
                cursor: 'pointer',
                userSelect: 'none',
                borderRadius: 0,
                border: 'none',
                height: height,
                width: width,
            },
            !circle && {
                selectors: (_a = {},
                    _a["." + IsFocusVisibleClassName + " &:focus::after"] = {
                        // -1px so that we don't increase visually the size of the cell.
                        outlineOffset: calculatedBorderWidth - 1 + "px",
                    },
                    _a),
            },
            // In focus state for circle we want a round border which is not possible with outline.
            circle && {
                borderRadius: '50%',
                selectors: (_b = {},
                    _b["." + IsFocusVisibleClassName + " &:focus::after"] = {
                        outline: 'none',
                        borderColor: semanticColors.focusBorder,
                        borderRadius: '50%',
                        left: -calculatedBorderWidth,
                        right: -calculatedBorderWidth,
                        top: -calculatedBorderWidth,
                        bottom: -calculatedBorderWidth,
                        selectors: (_c = {},
                            _c[HighContrastSelector] = {
                                outline: "1px solid ButtonText",
                            },
                            _c),
                    },
                    _b),
            },
            selected && {
                padding: DIVIDING_PADDING,
                border: calculatedBorderWidth + "px solid " + buttonBorderChecked,
                selectors: (_d = {},
                    _d['&:hover::before'] = {
                        content: '""',
                        height: height,
                        width: width,
                        position: 'absolute',
                        top: -calculatedBorderWidth,
                        left: -calculatedBorderWidth,
                        borderRadius: circle ? '50%' : 'default',
                        boxShadow: "inset 0 0 0 1px " + buttonBorderCheckedHovered,
                    },
                    _d),
            },
            !selected && {
                selectors: (_e = {},
                    _e['&:hover, &:active, &:focus'] = {
                        backgroundColor: semanticColors.bodyBackground,
                        padding: DIVIDING_PADDING,
                        border: calculatedBorderWidth + "px solid " + buttonBorderHovered,
                    },
                    _e['&:focus'] = {
                        borderColor: semanticColors.bodyBackground,
                        padding: 0,
                        selectors: {
                            ':hover': {
                                borderColor: theme.palette.neutralLight,
                                padding: DIVIDING_PADDING,
                            },
                        },
                    },
                    _e),
            },
            disabled && {
                color: semanticColors.disabledBodyText,
                pointerEvents: 'none',
                opacity: 0.3,
            },
            isWhite &&
                !selected && {
                // fake a border for white
                backgroundColor: buttonBorderIsWhite,
                padding: 1,
            },
        ],
        // the <svg> that holds the color
        svg: [
            {
                width: '100%',
                height: '100%',
            },
            circle && {
                borderRadius: '50%',
            },
        ],
    };
};
//# sourceMappingURL=ColorPickerGridCell.styles.js.map