define(["require", "exports", "react", "./useConst"], function (require, exports, React, useConst_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Hook to force update a function component by updating a dummy state.
     */
    function useForceUpdate() {
        var _a = React.useState(0), setValue = _a[1];
        var forceUpdate = useConst_1.useConst(function () { return function () { return setValue(function (value) { return ++value; }); }; });
        return forceUpdate;
    }
    exports.useForceUpdate = useForceUpdate;
});
//# sourceMappingURL=useForceUpdate.js.map