"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@fluentui/utilities");
var React = require("react");
var useConst_1 = require("./useConst");
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
//# sourceMappingURL=useAsync.js.map