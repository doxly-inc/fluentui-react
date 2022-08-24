"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Possible variations of the spinner circle size.
 * {@docCategory Spinner}
 */
var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px Spinner diameter
     */
    SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
    /**
     * 16px Spinner diameter
     */
    SpinnerSize[SpinnerSize["small"] = 1] = "small";
    /**
     * 20px Spinner diameter
     */
    SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
    /**
     * 28px Spinner diameter
     */
    SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize = exports.SpinnerSize || (exports.SpinnerSize = {}));
/**
 * @deprecated Use `SpinnerSize` instead. Will be removed at \>= 2.0.0.
 * {@docCategory Spinner}
 */
var SpinnerType;
(function (SpinnerType) {
    /**
     * @deprecated Use `SpinnerSize.medium` instead. Will be removed at \>= 2.0.0.
     */
    SpinnerType[SpinnerType["normal"] = 0] = "normal";
    /**
     * @deprecated Use `SpinnerSize.large` instead. Will be removed at \>= 2.0.0.
     */
    SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType = exports.SpinnerType || (exports.SpinnerType = {}));
//# sourceMappingURL=Spinner.types.js.map