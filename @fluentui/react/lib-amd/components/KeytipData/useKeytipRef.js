define(["require", "exports", "react", "../../utilities/keytips/index", "./useKeytipData"], function (require, exports, React, index_1, useKeytipData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Hook that creates a ref which is used for passing to Keytip target element.
     * The ref will handle setting the attributes needed for Keytip to work.
     */
    function useKeytipRef(options) {
        var _a = useKeytipData_1.useKeytipData(options), keytipId = _a.keytipId, ariaDescribedBy = _a.ariaDescribedBy;
        var contentRef = React.useCallback(function (contentElement) {
            if (!contentElement) {
                return;
            }
            var targetElement = findFirstElement(contentElement, index_1.DATAKTP_TARGET) || contentElement;
            var executeElement = findFirstElement(contentElement, index_1.DATAKTP_EXECUTE_TARGET) || targetElement;
            var ariaElement = findFirstElement(contentElement, index_1.DATAKTP_ARIA_TARGET) || executeElement;
            setAttribute(targetElement, index_1.DATAKTP_TARGET, keytipId);
            setAttribute(executeElement, index_1.DATAKTP_EXECUTE_TARGET, keytipId);
            setAttribute(ariaElement, 'aria-describedby', ariaDescribedBy, true);
        }, [keytipId, ariaDescribedBy]);
        return contentRef;
    }
    exports.useKeytipRef = useKeytipRef;
    function setAttribute(element, attributeName, attributeValue, append) {
        if (append === void 0) { append = false; }
        if (element && attributeValue) {
            var value = attributeValue;
            if (append) {
                var currentValue = element.getAttribute(attributeName);
                if (currentValue && currentValue.indexOf(attributeValue) === -1) {
                    value = currentValue + " " + attributeValue;
                }
            }
            element.setAttribute(attributeName, value);
        }
    }
    exports.setAttribute = setAttribute;
    function findFirstElement(rootElement, dataAttribute) {
        return rootElement.querySelector("[" + dataAttribute + "]");
    }
});
//# sourceMappingURL=useKeytipRef.js.map