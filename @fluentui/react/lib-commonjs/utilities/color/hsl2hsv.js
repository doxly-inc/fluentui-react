"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Converts HSL components to an HSV color. */
function hsl2hsv(h, s, l) {
    s *= (l < 50 ? l : 100 - l) / 100;
    var v = l + s;
    return {
        h: h,
        s: v === 0 ? 0 : ((2 * s) / v) * 100,
        v: v,
    };
}
exports.hsl2hsv = hsl2hsv;
//# sourceMappingURL=hsl2hsv.js.map