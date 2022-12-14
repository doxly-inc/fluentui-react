import * as React from 'react';
/**
 *Hook which synchronously executes a callback once the component has been mounted.
 *
 * `WARNING` This should only be used if you need to perform an action after the component has been mounted and
 * before the browser paints. useMountSync will trigger debug warnings in server-rendered scenarios and should be used
 * sparingly.
 *
 * @param callback - Function to call once the component has been mounted.
 */
export var useMountSync = function (callback) {
    var mountRef = React.useRef(callback);
    mountRef.current = callback;
    React.useLayoutEffect(function () {
        var _a, _b;
        (_b = (_a = mountRef).current) === null || _b === void 0 ? void 0 : _b.call(_a);
    }, []);
};
//# sourceMappingURL=useMountSync.js.map