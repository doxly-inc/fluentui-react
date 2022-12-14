"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var hsv2rgb_1 = require("./hsv2rgb");
var hsv2hex_1 = require("./hsv2hex");
var _rgbaOrHexString_1 = require("./_rgbaOrHexString");
/**
 * Converts an HSV color (and optional alpha value) to a color object.
 * If `a` is not given, a default of 100 is used.
 * Hex in the returned value will *not* be prefixed with #.
 * If `a` is unspecified or 100, the result's `str` property will contain a hex value
 * (*not* prefixed with #)
 */
function getColorFromHSV(hsv, a) {
    var h = hsv.h, s = hsv.s, v = hsv.v;
    a = typeof a === 'number' ? a : consts_1.MAX_COLOR_ALPHA;
    var _a = hsv2rgb_1.hsv2rgb(h, s, v), r = _a.r, g = _a.g, b = _a.b;
    var hex = hsv2hex_1.hsv2hex(h, s, v);
    var str = _rgbaOrHexString_1._rgbaOrHexString(r, g, b, a, hex);
    var t = consts_1.MAX_COLOR_ALPHA - a;
    return { a: a, b: b, g: g, h: h, hex: hex, r: r, s: s, str: str, v: v, t: t };
}
exports.getColorFromHSV = getColorFromHSV;
//# sourceMappingURL=getColorFromHSV.js.map