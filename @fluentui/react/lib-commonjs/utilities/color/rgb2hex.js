"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var clamp_1 = require("./clamp");
/** Converts RGB components to a hex color string (without # prefix). */
function rgb2hex(r, g, b) {
    return [_rgbToPaddedHex(r), _rgbToPaddedHex(g), _rgbToPaddedHex(b)].join('');
}
exports.rgb2hex = rgb2hex;
/** Converts an RGB component to a 0-padded hex component of length 2. */
function _rgbToPaddedHex(num) {
    num = clamp_1.clamp(num, consts_1.MAX_COLOR_RGB);
    var hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
//# sourceMappingURL=rgb2hex.js.map