/**
 * Functions used by Stack components to simplify style-related computations
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Helper function that converts a themed spacing key (if given) to the corresponding themed spacing value.
    var _getThemedSpacing = function (space, theme) {
        if (theme.spacing.hasOwnProperty(space)) {
            return theme.spacing[space];
        }
        return space;
    };
    // Helper function that takes a gap as a string and converts it into a { value, unit } representation.
    var _getValueUnitGap = function (gap) {
        var numericalPart = parseFloat(gap);
        var numericalValue = isNaN(numericalPart) ? 0 : numericalPart;
        var numericalString = isNaN(numericalPart) ? '' : numericalPart.toString();
        var unitPart = gap.substring(numericalString.toString().length);
        return {
            value: numericalValue,
            unit: unitPart || 'px',
        };
    };
    /**
     * Takes in a gap size in either a CSS-style format (e.g. 10 or "10px")
     *  or a key of a themed spacing value (e.g. "s1").
     * Returns the separate numerical value of the padding (e.g. 10)
     *  and the CSS unit (e.g. "px").
     */
    exports.parseGap = function (gap, theme) {
        if (gap === undefined || gap === '') {
            return {
                rowGap: {
                    value: 0,
                    unit: 'px',
                },
                columnGap: {
                    value: 0,
                    unit: 'px',
                },
            };
        }
        if (typeof gap === 'number') {
            return {
                rowGap: {
                    value: gap,
                    unit: 'px',
                },
                columnGap: {
                    value: gap,
                    unit: 'px',
                },
            };
        }
        var splitGap = gap.split(' ');
        // If the array has more than two values, then return 0px.
        if (splitGap.length > 2) {
            return {
                rowGap: {
                    value: 0,
                    unit: 'px',
                },
                columnGap: {
                    value: 0,
                    unit: 'px',
                },
            };
        }
        // If the array has two values, then parse each one.
        if (splitGap.length === 2) {
            return {
                rowGap: _getValueUnitGap(_getThemedSpacing(splitGap[0], theme)),
                columnGap: _getValueUnitGap(_getThemedSpacing(splitGap[1], theme)),
            };
        }
        // Else, parse the numerical value and pass it as both the vertical and horizontal gap.
        var calculatedGap = _getValueUnitGap(_getThemedSpacing(gap, theme));
        return {
            rowGap: calculatedGap,
            columnGap: calculatedGap,
        };
    };
    /**
     * Takes in a padding in a CSS-style format (e.g. 10, "10px", "10px 10px", etc.)
     *  where the separate padding values can also be the key of a themed spacing value
     *  (e.g. "s1 m", "10px l1 20px l2", etc.).
     * Returns a CSS-style padding.
     */
    exports.parsePadding = function (padding, theme) {
        if (padding === undefined || typeof padding === 'number' || padding === '') {
            return padding;
        }
        var paddingValues = padding.split(' ');
        if (paddingValues.length < 2) {
            return _getThemedSpacing(padding, theme);
        }
        return paddingValues.reduce(function (padding1, padding2) {
            return _getThemedSpacing(padding1, theme) + ' ' + _getThemedSpacing(padding2, theme);
        });
    };
});
//# sourceMappingURL=StackUtils.js.map