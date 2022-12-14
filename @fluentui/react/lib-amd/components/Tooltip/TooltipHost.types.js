define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Tooltip}
     */
    var TooltipOverflowMode;
    (function (TooltipOverflowMode) {
        /** Only show tooltip if parent DOM element is overflowing */
        TooltipOverflowMode[TooltipOverflowMode["Parent"] = 0] = "Parent";
        /**
         * Only show tooltip if tooltip host's content is overflowing.
         * Note that this does not check the children for overflow, only the TooltipHost root.
         */
        TooltipOverflowMode[TooltipOverflowMode["Self"] = 1] = "Self";
    })(TooltipOverflowMode = exports.TooltipOverflowMode || (exports.TooltipOverflowMode = {}));
});
//# sourceMappingURL=TooltipHost.types.js.map