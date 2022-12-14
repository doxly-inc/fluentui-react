import { __assign } from "tslib";
import { hsv2rgb } from './hsv2rgb';
import { rgb2hex } from './rgb2hex';
import { _rgbaOrHexString } from './_rgbaOrHexString';
/**
 * Gets a color with the same hue as `color` and other components updated to match the given
 * saturation and value.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
export function updateSV(color, s, v) {
    var _a = hsv2rgb(color.h, s, v), r = _a.r, g = _a.g, b = _a.b;
    var hex = rgb2hex(r, g, b);
    return __assign(__assign({}, color), { s: s,
        v: v,
        r: r,
        g: g,
        b: b,
        hex: hex, str: _rgbaOrHexString(r, g, b, color.a, hex) });
}
//# sourceMappingURL=updateSV.js.map