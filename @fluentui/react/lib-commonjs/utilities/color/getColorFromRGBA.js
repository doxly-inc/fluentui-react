"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var rgb2hsv_1 = require("./rgb2hsv");
var rgb2hex_1 = require("./rgb2hex");
var _rgbaOrHexString_1 = require("./_rgbaOrHexString");
/** Converts an RGBA color to a color object (alpha defaults to 100). */
function getColorFromRGBA(rgba) {
    var _a = rgba.a, a = _a === void 0 ? consts_1.MAX_COLOR_ALPHA : _a, b = rgba.b, g = rgba.g, r = rgba.r;
    var _b = rgb2hsv_1.rgb2hsv(r, g, b), h = _b.h, s = _b.s, v = _b.v;
    var hex = rgb2hex_1.rgb2hex(r, g, b);
    var str = _rgbaOrHexString_1._rgbaOrHexString(r, g, b, a, hex);
    var t = consts_1.MAX_COLOR_ALPHA - a;
    return { a: a, b: b, g: g, h: h, hex: hex, r: r, s: s, str: str, v: v, t: t };
}
exports.getColorFromRGBA = getColorFromRGBA;
//# sourceMappingURL=getColorFromRGBA.js.map