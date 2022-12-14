define(["require", "exports", "tslib", "./_rgbaOrHexString", "./consts"], function (require, exports, tslib_1, _rgbaOrHexString_1, consts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Gets a color with the given transparency value and the same other components as `color`.
     * Does not modify the original color.
     */
    function updateT(color, t) {
        var a = consts_1.MAX_COLOR_ALPHA - t;
        return tslib_1.__assign(tslib_1.__assign({}, color), { t: t,
            a: a, str: _rgbaOrHexString_1._rgbaOrHexString(color.r, color.g, color.b, a, color.hex) });
    }
    exports.updateT = updateT;
});
//# sourceMappingURL=updateT.js.map