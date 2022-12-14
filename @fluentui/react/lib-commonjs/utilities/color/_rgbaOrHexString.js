"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
/**
 * @internal
 * Get a CSS color string from some color components.
 * If `a` is specified and not 100, returns an `rgba()` string.
 * Otherwise returns `hex` prefixed with #.
 */
function _rgbaOrHexString(r, g, b, a, hex) {
    return a === consts_1.MAX_COLOR_ALPHA || typeof a !== 'number' ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + a / consts_1.MAX_COLOR_ALPHA + ")";
}
exports._rgbaOrHexString = _rgbaOrHexString;
//# sourceMappingURL=_rgbaOrHexString.js.map