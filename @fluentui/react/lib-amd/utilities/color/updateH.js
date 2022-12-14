define(["require", "exports", "tslib", "./hsv2rgb", "./rgb2hex", "./_rgbaOrHexString"], function (require, exports, tslib_1, hsv2rgb_1, rgb2hex_1, _rgbaOrHexString_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Gets a color with the same saturation and value as `color` and the other components updated
     * to match the given hue.
     *
     * Does not modify the original `color` and does not supply a default alpha value.
     */
    function updateH(color, h) {
        var _a = hsv2rgb_1.hsv2rgb(h, color.s, color.v), r = _a.r, g = _a.g, b = _a.b;
        var hex = rgb2hex_1.rgb2hex(r, g, b);
        return tslib_1.__assign(tslib_1.__assign({}, color), { h: h,
            r: r,
            g: g,
            b: b,
            hex: hex, str: _rgbaOrHexString_1._rgbaOrHexString(r, g, b, color.a, hex) });
    }
    exports.updateH = updateH;
});
//# sourceMappingURL=updateH.js.map