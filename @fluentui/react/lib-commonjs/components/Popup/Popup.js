"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var react_hooks_1 = require("@fluentui/react-hooks");
var react_window_provider_1 = require("@fluentui/react-window-provider");
function useScrollbarAsync(props, root) {
    var async = react_hooks_1.useAsync();
    var _a = React.useState(false), needsVerticalScrollBarState = _a[0], setNeedsVerticalScrollBar = _a[1];
    React.useEffect(function () {
        async.requestAnimationFrame(function () {
            var _a;
            // If overflowY is overridden, don't waste time calculating whether the scrollbar is necessary.
            if (props.style && props.style.overflowY) {
                return;
            }
            var needsVerticalScrollBar = false;
            if (root && root.current && ((_a = root.current) === null || _a === void 0 ? void 0 : _a.firstElementChild)) {
                // ClientHeight returns the client height of an element rounded to an
                // integer. On some browsers at different zoom levels this rounding
                // can generate different results for the root container and child even
                // though they are the same height. This causes us to show a scroll bar
                // when not needed. Ideally we would use BoundingClientRect().height
                // instead however seems that the API is 90% slower than using ClientHeight.
                // Therefore instead we will calculate the difference between heights and
                // allow for a 1px difference to still be considered ok and not show the
                // scroll bar.
                var rootHeight = root.current.clientHeight;
                var firstChildHeight = root.current.firstElementChild.clientHeight;
                if (rootHeight > 0 && firstChildHeight > rootHeight) {
                    needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
                }
            }
            if (needsVerticalScrollBarState !== needsVerticalScrollBar) {
                setNeedsVerticalScrollBar(needsVerticalScrollBar);
            }
        });
        return function () { return async.dispose(); };
    });
    return needsVerticalScrollBarState;
}
function defaultFocusRestorer(options) {
    var originalElement = options.originalElement, containsFocus = options.containsFocus;
    if (originalElement && containsFocus && originalElement !== Utilities_1.getWindow()) {
        // Make sure that the focus method actually exists
        // In some cases the object might exist but not be a real element.
        // This is primarily for IE 11 and should be removed once IE 11 is no longer in use.
        // This is wrapped in a setTimeout because of a React 16 bug that is resolved in 17.
        // Once we move to 17, the setTimeout should be removed (ref: https://github.com/facebook/react/issues/17894#issuecomment-656094405)
        setTimeout(function () {
            var _a, _b;
            (_b = (_a = originalElement).focus) === null || _b === void 0 ? void 0 : _b.call(_a);
        }, 0);
    }
}
function useRestoreFocus(props, root) {
    var _a = props.onRestoreFocus, onRestoreFocus = _a === void 0 ? defaultFocusRestorer : _a;
    var originalFocusedElement = React.useRef();
    var containsFocus = React.useRef(false);
    React.useEffect(function () {
        originalFocusedElement.current = Utilities_1.getDocument().activeElement;
        if (Utilities_1.doesElementContainFocus(root.current)) {
            containsFocus.current = true;
        }
        return function () {
            var _a, _b;
            (_a = onRestoreFocus) === null || _a === void 0 ? void 0 : _a({
                originalElement: originalFocusedElement.current,
                containsFocus: containsFocus.current,
                documentContainsFocus: ((_b = Utilities_1.getDocument()) === null || _b === void 0 ? void 0 : _b.hasFocus()) || false,
            });
            // De-reference DOM Node to avoid retainment via transpiled closure of _onKeyDown
            originalFocusedElement.current = undefined;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on first render
    }, []);
    react_hooks_1.useOnEvent(root, 'focus', React.useCallback(function () {
        containsFocus.current = true;
    }, []), true);
    react_hooks_1.useOnEvent(root, 'blur', React.useCallback(function (ev) {
        /** The popup should update this._containsFocus when:
         * relatedTarget exists AND
         * the relatedTarget is not contained within the popup.
         * If the relatedTarget is within the popup, that means the popup still has focus
         * and focused moved from one element to another within the popup.
         * If relatedTarget is undefined or null that usually means that a
         * keyboard event occurred and focus didn't change
         */
        if (root.current && ev.relatedTarget && !root.current.contains(ev.relatedTarget)) {
            containsFocus.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on first render
    }, []), true);
}
/**
 * This adds accessibility to Dialog and Panel controls
 */
exports.Popup = React.forwardRef(function (props, forwardedRef) {
    // Default props
    // eslint-disable-next-line deprecation/deprecation
    props = tslib_1.__assign({ shouldRestoreFocus: true }, props);
    var root = React.useRef();
    var mergedRootRef = react_hooks_1.useMergedRefs(root, forwardedRef);
    useRestoreFocus(props, root);
    var role = props.role, className = props.className, ariaLabel = props.ariaLabel, ariaLabelledBy = props.ariaLabelledBy, ariaDescribedBy = props.ariaDescribedBy, style = props.style, children = props.children, onDismiss = props.onDismiss;
    var needsVerticalScrollBar = useScrollbarAsync(props, root);
    var onKeyDown = React.useCallback(function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        switch (ev.which) {
            case Utilities_1.KeyCodes.escape:
                if (onDismiss) {
                    onDismiss(ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
        }
    }, [onDismiss]);
    var win = react_window_provider_1.useWindow();
    react_hooks_1.useOnEvent(win, 'keydown', onKeyDown);
    return (React.createElement("div", tslib_1.__assign({ ref: mergedRootRef }, Utilities_1.getNativeProps(props, Utilities_1.divProperties), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: onKeyDown, style: tslib_1.__assign({ overflowY: needsVerticalScrollBar ? 'scroll' : undefined, outline: 'none' }, style) }), children));
});
//# sourceMappingURL=Popup.js.map