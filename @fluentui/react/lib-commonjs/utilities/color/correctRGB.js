"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var clamp_1 = require("./clamp");
/** Corrects an RGB color to fall within the valid range.  */
function correctRGB(color) {
    return {
        r: clamp_1.clamp(color.r, consts_1.MAX_COLOR_RGB),
        g: clamp_1.clamp(color.g, consts_1.MAX_COLOR_RGB),
        b: clamp_1.clamp(color.b, consts_1.MAX_COLOR_RGB),
        a: typeof color.a === 'number' ? clamp_1.clamp(color.a, consts_1.MAX_COLOR_ALPHA) : color.a,
    };
}
exports.correctRGB = correctRGB;
//# sourceMappingURL=correctRGB.js.map