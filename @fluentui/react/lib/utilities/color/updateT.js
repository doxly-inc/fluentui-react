import { __assign } from "tslib";
import { _rgbaOrHexString } from './_rgbaOrHexString';
import { MAX_COLOR_ALPHA } from './consts';
/**
 * Gets a color with the given transparency value and the same other components as `color`.
 * Does not modify the original color.
 */
export function updateT(color, t) {
    var a = MAX_COLOR_ALPHA - t;
    return __assign(__assign({}, color), { t: t,
        a: a, str: _rgbaOrHexString(color.r, color.g, color.b, a, color.hex) });
}
//# sourceMappingURL=updateT.js.map