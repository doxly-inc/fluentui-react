"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var clamp_1 = require("./clamp");
/** Corrects an HSV color to fall within the valid range. */
function correctHSV(color) {
    return {
        h: clamp_1.clamp(color.h, consts_1.MAX_COLOR_HUE),
        s: clamp_1.clamp(color.s, consts_1.MAX_COLOR_SATURATION),
        v: clamp_1.clamp(color.v, consts_1.MAX_COLOR_VALUE),
    };
}
exports.correctHSV = correctHSV;
//# sourceMappingURL=correctHSV.js.map