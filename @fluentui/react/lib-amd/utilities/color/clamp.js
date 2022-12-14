define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Clamp a value to ensure it falls within a given range. */
    function clamp(value, max, min) {
        if (min === void 0) { min = 0; }
        return value < min ? min : value > max ? max : value;
    }
    exports.clamp = clamp;
});
//# sourceMappingURL=clamp.js.map