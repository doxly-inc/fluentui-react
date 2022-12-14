define(["require", "exports", "@fluentui/utilities", "react", "./useConst"], function (require, exports, utilities_1, React, useConst_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Hook to provide an Async instance that is automatically cleaned up on dismount.
     */
    function useAsync() {
        var async = useConst_1.useConst(function () { return new utilities_1.Async(); });
        // Function that returns a function in order to dispose the async instance on unmount
        React.useEffect(function () { return function () { return async.dispose(); }; }, [async]);
        return async;
    }
    exports.useAsync = useAsync;
});
//# sourceMappingURL=useAsync.js.map