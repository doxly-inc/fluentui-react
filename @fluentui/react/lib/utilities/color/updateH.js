import { __assign } from "tslib";
import { hsv2rgb } from './hsv2rgb';
import { rgb2hex } from './rgb2hex';
import { _rgbaOrHexString } from './_rgbaOrHexString';
/**
 * Gets a color with the same saturation and value as `color` and the other components updated
 * to match the given hue.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
export function updateH(color, h) {
    var _a = hsv2rgb(h, color.s, color.v), r = _a.r, g = _a.g, b = _a.b;
    var hex = rgb2hex(r, g, b);
    return __assign(__assign({}, color), { h: h,
        r: r,
        g: g,
        b: b,
        hex: hex, str: _rgbaOrHexString(r, g, b, color.a, hex) });
}
//# sourceMappingURL=updateH.js.map