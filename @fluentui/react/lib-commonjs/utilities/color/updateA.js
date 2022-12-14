"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _rgbaOrHexString_1 = require("./_rgbaOrHexString");
var consts_1 = require("./consts");
/**
 * Gets a color with the given alpha value and the same other components as `color`.
 * Does not modify the original color.
 */
function updateA(color, a) {
    return tslib_1.__assign(tslib_1.__assign({}, color), { a: a, t: consts_1.MAX_COLOR_ALPHA - a, str: _rgbaOrHexString_1._rgbaOrHexString(color.r, color.g, color.b, a, color.hex) });
}
exports.updateA = updateA;
//# sourceMappingURL=updateA.js.map