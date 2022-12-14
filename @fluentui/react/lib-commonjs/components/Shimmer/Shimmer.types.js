"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes the possible types for shimmer elements used.
 * {@docCategory Shimmer}
 */
var ShimmerElementType;
(function (ShimmerElementType) {
    /**
     * Line element type
     */
    ShimmerElementType[ShimmerElementType["line"] = 1] = "line";
    /**
     * Circle element type
     */
    ShimmerElementType[ShimmerElementType["circle"] = 2] = "circle";
    /**
     * Gap element type
     */
    ShimmerElementType[ShimmerElementType["gap"] = 3] = "gap";
})(ShimmerElementType = exports.ShimmerElementType || (exports.ShimmerElementType = {}));
/**
 * Describes the default heights for shimmer elements when omitted in implementation.
 * {@docCategory Shimmer}
 */
var ShimmerElementsDefaultHeights;
(function (ShimmerElementsDefaultHeights) {
    /**
     * Default height of the line element when not provided by user: 16px
     */
    ShimmerElementsDefaultHeights[ShimmerElementsDefaultHeights["line"] = 16] = "line";
    /**
     * Default height of the gap element when not provided by user: 16px
     */
    ShimmerElementsDefaultHeights[ShimmerElementsDefaultHeights["gap"] = 16] = "gap";
    /**
     * Default height of the circle element when not provided by user: 24px
     */
    ShimmerElementsDefaultHeights[ShimmerElementsDefaultHeights["circle"] = 24] = "circle";
})(ShimmerElementsDefaultHeights = exports.ShimmerElementsDefaultHeights || (exports.ShimmerElementsDefaultHeights = {}));
//# sourceMappingURL=Shimmer.types.js.map