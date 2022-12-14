"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_styles_1 = require("@fluentui/merge-styles");
var _seed = 0;
exports.mergeStylesRenderer = {
    reset: function () {
        // If the stylesheet reset call is made, invalidate the cache keys.
        merge_styles_1.Stylesheet.getInstance().onReset(function () { return _seed++; });
    },
    getId: function () { return _seed; },
    renderStyles: function (styleSet, options) {
        return merge_styles_1.mergeCssSets((Array.isArray(styleSet) ? styleSet : [styleSet]), options);
    },
    renderFontFace: function (fontFace, options) {
        return merge_styles_1.fontFace(fontFace);
    },
    renderKeyframes: function (keyframes) {
        return merge_styles_1.keyframes(keyframes);
    },
};
//# sourceMappingURL=mergeStylesRenderer.js.map