define(["require", "exports", "tslib", "react", "@fluentui/utilities/lib/warn", "./usePrevious", "./useConst"], function (require, exports, tslib_1, React, warn_1, usePrevious_1, useConst_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var warningId = 0;
    /**
     * Only in development mode, display console warnings when certain conditions are met.
     * Note that all warnings except `controlledUsage` will only be shown on first render
     * (new `controlledUsage` warnings may be shown later due to prop changes).
     */
    function useWarnings(options) {
        
    }
    exports.useWarnings = useWarnings;
});
//# sourceMappingURL=useWarnings.js.map