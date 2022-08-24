define(["require", "exports", "./hsv2rgb", "./rgb2hex"], function (require, exports, hsv2rgb_1, rgb2hex_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Converts HSV components to a hex color string (without # prefix). */
    function hsv2hex(h, s, v) {
        var _a = hsv2rgb_1.hsv2rgb(h, s, v), r = _a.r, g = _a.g, b = _a.b;
        return rgb2hex_1.rgb2hex(r, g, b);
    }
    exports.hsv2hex = hsv2hex;
});
//# sourceMappingURL=hsv2hex.js.map