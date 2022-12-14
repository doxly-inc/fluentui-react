define(["require", "exports", "tslib", "react"], function (require, exports, tslib_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
     * updates all provided refs
     * @param refs - Refs to collectively update with one ref value.
     * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
     */
    function useMergedRefs() {
        var refs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            refs[_i] = arguments[_i];
        }
        var mergedCallback = React.useCallback(function (value) {
            // Update the "current" prop hanging on the function.
            mergedCallback.current = value;
            for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
                var ref = refs_1[_i];
                if (typeof ref === 'function') {
                    ref(value);
                }
                else if (ref) {
                    // work around the immutability of the React.Ref type
                    ref.current = value;
                }
            }
        }, tslib_1.__spreadArrays(refs));
        return mergedCallback;
    }
    exports.useMergedRefs = useMergedRefs;
});
//# sourceMappingURL=useMergedRefs.js.map