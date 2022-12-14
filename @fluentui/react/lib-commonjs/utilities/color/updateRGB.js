"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getColorFromRGBA_1 = require("./getColorFromRGBA");
/**
 * Gets a color with a single RGBA component updated to a new value.
 * Does not modify the original `color`. Alpha defaults to 100 if not set.
 */
function updateRGB(color, component, value) {
    var _a;
    return getColorFromRGBA_1.getColorFromRGBA((_a = {
            r: color.r,
            g: color.g,
            b: color.b,
            a: color.a
        },
        _a[component] = value,
        _a));
}
exports.updateRGB = updateRGB;
//# sourceMappingURL=updateRGB.js.map