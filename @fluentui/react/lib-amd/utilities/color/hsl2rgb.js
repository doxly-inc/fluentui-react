define(["require", "exports", "./hsl2hsv", "./hsv2rgb"], function (require, exports, hsl2hsv_1, hsv2rgb_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Converts HSL components to an RGB color. Does not set the alpha value. */
    function hsl2rgb(h, s, l) {
        var hsv = hsl2hsv_1.hsl2hsv(h, s, l);
        return hsv2rgb_1.hsv2rgb(hsv.h, hsv.s, hsv.v);
    }
    exports.hsl2rgb = hsl2rgb;
});
//# sourceMappingURL=hsl2rgb.js.map