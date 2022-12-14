"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var useConst_1 = require("./useConst");
/**
 * Hook to force update a function component by updating a dummy state.
 */
function useForceUpdate() {
    var _a = React.useState(0), setValue = _a[1];
    var forceUpdate = useConst_1.useConst(function () { return function () { return setValue(function (value) { return ++value; }); }; });
    return forceUpdate;
}
exports.useForceUpdate = useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map