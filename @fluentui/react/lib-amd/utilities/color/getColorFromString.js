define(["require", "exports", "tslib", "./cssColor", "./getColorFromRGBA"], function (require, exports, tslib_1, cssColor_1, getColorFromRGBA_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Converts a CSS color string to a color object.
     * Note that hex colors *must* be prefixed with # to be considered valid.
     *
     * `inputColor` will be used unmodified as the `str` property of the returned object.
     * Alpha defaults to 100 if not specified in `inputColor`.
     * Returns undefined if the color string is invalid/not recognized.
     */
    function getColorFromString(inputColor) {
        var color = cssColor_1.cssColor(inputColor);
        if (!color) {
            return;
        }
        return tslib_1.__assign(tslib_1.__assign({}, getColorFromRGBA_1.getColorFromRGBA(color)), { str: inputColor });
    }
    exports.getColorFromString = getColorFromString;
});
//# sourceMappingURL=getColorFromString.js.map