define(["require", "exports", "@fluentui/utilities", "react"], function (require, exports, utilities_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Hook to attach an event handler on mount and handle cleanup.
     * @param element - Element (or ref to an element) to attach the event handler to
     * @param eventName - The event to attach a handler for
     * @param callback - The handler for the event
     * @param useCapture - Whether or not to attach the handler for the capture phase
     */
    function useOnEvent(element, eventName, callback, useCapture) {
        // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders
        var callbackRef = React.useRef(callback);
        callbackRef.current = callback;
        React.useEffect(function () {
            var actualElement = element && 'current' in element ? element.current : element;
            if (!actualElement) {
                return;
            }
            var dispose = utilities_1.on(actualElement, eventName, function (ev) { return callbackRef.current(ev); }, useCapture);
            return dispose;
        }, [element, eventName, useCapture]);
    }
    exports.useOnEvent = useOnEvent;
});
//# sourceMappingURL=useOnEvent.js.map