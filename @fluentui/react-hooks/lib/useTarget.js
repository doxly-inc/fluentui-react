import { getDocument } from '@fluentui/utilities';
import * as React from 'react';
import { useWindow } from '@fluentui/react-window-provider';
/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
export function useTarget(target, hostElement) {
    var _a;
    var previousTargetProp = React.useRef();
    var targetRef = React.useRef(null);
    /**
     * Stores an instance of Window, used to check
     * for server side rendering and if focus was lost.
     */
    var targetWindow = useWindow();
    // If the target element changed, find the new one. If we are tracking
    // target with class name, always find element because we do not know if
    // fabric has rendered a new element and disposed the old element.
    if (!target || target !== previousTargetProp.current || typeof target === 'string') {
        var currentElement = (_a = hostElement) === null || _a === void 0 ? void 0 : _a.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = getDocument(currentElement);
                targetRef.current = currentDoc ? currentDoc.querySelector(target) : null;
            }
            else if ('stopPropagation' in target) {
                targetRef.current = target;
            }
            else if ('getBoundingClientRect' in target) {
                targetRef.current = target;
            }
            else if ('current' in target) {
                targetRef.current = target.current;
            }
            else {
                targetRef.current = target;
            }
        }
        previousTargetProp.current = target;
    }
    return [targetRef, targetWindow];
}
//# sourceMappingURL=useTarget.js.map