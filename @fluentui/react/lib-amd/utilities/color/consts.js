define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_COLOR_SATURATION = 100;
    exports.MAX_COLOR_HUE = 359;
    exports.MAX_COLOR_VALUE = 100;
    exports.MAX_COLOR_RGB = 255;
    /** @deprecated Use MAX_COLOR_RGB (255) or MAX_COLOR_ALPHA (100) */
    exports.MAX_COLOR_RGBA = exports.MAX_COLOR_RGB;
    exports.MAX_COLOR_ALPHA = 100;
    /** Minimum length for a hexadecimal color string (not including the #) */
    exports.MIN_HEX_LENGTH = 3;
    /** Maximum length for a hexadecimal color string (not including the #) */
    exports.MAX_HEX_LENGTH = 6;
    /** Minimum length for a string of an RGBA color component */
    exports.MIN_RGBA_LENGTH = 1;
    /** Maximum length for a string of an RGBA color component */
    exports.MAX_RGBA_LENGTH = 3;
    /** Regular expression matching only valid hexadecimal chars */
    exports.HEX_REGEX = /^[\da-f]{0,6}$/i;
    /** Regular expression matching only numbers */
    exports.RGBA_REGEX = /^\d{0,3}$/;
});
//# sourceMappingURL=consts.js.map