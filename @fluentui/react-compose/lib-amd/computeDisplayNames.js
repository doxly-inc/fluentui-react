define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Given input/parent options, which are both assumed to be defined and populated with
     * displayNames array, return a string array of display names.
     */
    function computeDisplayNames(inputOptions, parentOptions) {
        if (inputOptions.overrideStyles) {
            return [inputOptions.displayName].filter(Boolean);
        }
        // To support styles composition we need to properly pick up display names
        return inputOptions.displayName
            ? parentOptions.displayNames.concat(inputOptions.displayName)
            : parentOptions.displayNames;
    }
    exports.computeDisplayNames = computeDisplayNames;
});
//# sourceMappingURL=computeDisplayNames.js.map