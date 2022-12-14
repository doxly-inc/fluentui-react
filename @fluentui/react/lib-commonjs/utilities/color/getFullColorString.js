"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var hsv2hex_1 = require("./hsv2hex");
/**
 * Converts a color hue to an HTML color string (with # prefix).
 * This implementation ignores all components of `color` except hue.
 */
function getFullColorString(color) {
    return "#" + hsv2hex_1.hsv2hex(color.h, consts_1.MAX_COLOR_SATURATION, consts_1.MAX_COLOR_VALUE);
}
exports.getFullColorString = getFullColorString;
//# sourceMappingURL=getFullColorString.js.map