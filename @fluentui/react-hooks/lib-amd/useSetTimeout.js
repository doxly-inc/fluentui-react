define(["require", "exports", "react", "./useConst"], function (require, exports, React, useConst_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *  Returns a wrapper function for `setTimeout` which automatically handles disposal.
     */
    exports.useSetTimeout = function () {
        var timeoutIds = useConst_1.useConst({});
        // Cleanup function.
        React.useEffect(function () { return function () {
            for (var _i = 0, _a = Object.keys(timeoutIds); _i < _a.length; _i++) {
                var id = _a[_i];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                clearTimeout(id);
            }
        }; }, 
        // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
        [timeoutIds]);
        // Return wrapper which will auto cleanup.
        return useConst_1.useConst({
            setTimeout: function (func, duration) {
                var id = setTimeout(func, duration);
                timeoutIds[id] = 1;
                return id;
            },
            clearTimeout: function (id) {
                delete timeoutIds[id];
                clearTimeout(id);
            },
        });
    };
});
//# sourceMappingURL=useSetTimeout.js.map