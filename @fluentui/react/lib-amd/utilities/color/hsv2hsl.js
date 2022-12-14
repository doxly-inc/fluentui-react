define(["require", "exports", "./consts"], function (require, exports, consts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Converts HSV components to an HSL color. */
    function hsv2hsl(h, s, v) {
        s /= consts_1.MAX_COLOR_SATURATION;
        v /= consts_1.MAX_COLOR_VALUE;
        var l = (2 - s) * v;
        var sl = s * v;
        sl /= l <= 1 ? l : 2 - l;
        sl = sl || 0;
        l /= 2;
        return { h: h, s: sl * 100, l: l * 100 };
    }
    exports.hsv2hsl = hsv2hsl;
});
//# sourceMappingURL=hsv2hsl.js.map