import { __assign } from "tslib";
import { cssColor } from './cssColor';
import { getColorFromRGBA } from './getColorFromRGBA';
/**
 * Converts a CSS color string to a color object.
 * Note that hex colors *must* be prefixed with # to be considered valid.
 *
 * `inputColor` will be used unmodified as the `str` property of the returned object.
 * Alpha defaults to 100 if not specified in `inputColor`.
 * Returns undefined if the color string is invalid/not recognized.
 */
export function getColorFromString(inputColor) {
    var color = cssColor(inputColor);
    if (!color) {
        return;
    }
    return __assign(__assign({}, getColorFromRGBA(color)), { str: inputColor });
}
//# sourceMappingURL=getColorFromString.js.map