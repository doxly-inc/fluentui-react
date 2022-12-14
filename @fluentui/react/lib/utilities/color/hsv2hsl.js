import { MAX_COLOR_SATURATION, MAX_COLOR_VALUE } from './consts';
/** Converts HSV components to an HSL color. */
export function hsv2hsl(h, s, v) {
    s /= MAX_COLOR_SATURATION;
    v /= MAX_COLOR_VALUE;
    var l = (2 - s) * v;
    var sl = s * v;
    sl /= l <= 1 ? l : 2 - l;
    sl = sl || 0;
    l /= 2;
    return { h: h, s: sl * 100, l: l * 100 };
}
//# sourceMappingURL=hsv2hsl.js.map