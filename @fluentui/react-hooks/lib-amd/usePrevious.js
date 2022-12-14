define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
     *
     * See [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
     */
    function usePrevious(value) {
        var ref = react_1.useRef();
        react_1.useEffect(function () {
            ref.current = value;
        });
        return ref.current;
    }
    exports.usePrevious = usePrevious;
});
//# sourceMappingURL=usePrevious.js.map