"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PositioningContainer_styles_1 = require("./PositioningContainer.styles");
var Layer_1 = require("../../../Layer");
// Utilites/Helpers
var DirectionalHint_1 = require("../../../common/DirectionalHint");
var Utilities_1 = require("../../../Utilities");
var Positioning_1 = require("../../../Positioning");
var Styling_1 = require("../../../Styling");
var react_hooks_1 = require("@fluentui/react-hooks");
var OFF_SCREEN_STYLE = { opacity: 0 };
// In order for some of the max height logic to work properly we need to set the border.
// The value is arbitrary.
var BORDER_WIDTH = 1;
var SLIDE_ANIMATIONS = (_a = {},
    _a[Positioning_1.RectangleEdge.top] = 'slideUpIn20',
    _a[Positioning_1.RectangleEdge.bottom] = 'slideDownIn20',
    _a[Positioning_1.RectangleEdge.left] = 'slideLeftIn20',
    _a[Positioning_1.RectangleEdge.right] = 'slideRightIn20',
    _a);
var DEFAULT_PROPS = {
    preventDismissOnScroll: false,
    offsetFromTarget: 0,
    minPagePadding: 8,
    directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
};
function useCachedBounds(props, targetWindow) {
    /** The bounds used when determining if and where the PositioningContainer should be placed. */
    var positioningBounds = React.useRef();
    var getCachedBounds = function () {
        if (!positioningBounds.current) {
            var currentBounds = props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + props.minPagePadding,
                    left: 0 + props.minPagePadding,
                    right: targetWindow.innerWidth - props.minPagePadding,
                    bottom: targetWindow.innerHeight - props.minPagePadding,
                    width: targetWindow.innerWidth - props.minPagePadding * 2,
                    height: targetWindow.innerHeight - props.minPagePadding * 2,
                };
            }
            positioningBounds.current = currentBounds;
        }
        return positioningBounds.current;
    };
    return getCachedBounds;
}
function usePositionState(props, positionedHost, contentHost, targetRef, getCachedBounds) {
    var async = react_hooks_1.useAsync();
    /**
     * Current set of calculated positions for the outermost parent container.
     */
    var _a = React.useState(), positions = _a[0], setPositions = _a[1];
    var positionAttempts = React.useRef(0);
    var updateAsyncPosition = function () {
        async.requestAnimationFrame(function () { return updatePosition(); });
    };
    var updatePosition = function () {
        var _a, _b;
        var offsetFromTarget = props.offsetFromTarget, onPositioned = props.onPositioned;
        var hostElement = positionedHost.current;
        var positioningContainerElement = contentHost.current;
        if (hostElement && positioningContainerElement) {
            var currentProps = tslib_1.__assign({}, props);
            currentProps.bounds = getCachedBounds();
            currentProps.target = targetRef.current;
            if (document.body.contains(currentProps.target)) {
                currentProps.gapSpace = offsetFromTarget;
                var newPositions = Positioning_1.positionElement(currentProps, hostElement, positioningContainerElement);
                // Set the new position only when the positions are not exists or one of the new positioningContainer positions
                // are different. The position should not change if the position is within 2 decimal places.
                if ((!positions && newPositions) ||
                    (positions && newPositions && !arePositionsEqual(positions, newPositions) && positionAttempts.current < 5)) {
                    // We should not reposition the positioningContainer more than a few times, if it is then the content is
                    // likely resizing and we should stop trying to reposition to prevent a stack overflow.
                    positionAttempts.current++;
                    setPositions(newPositions);
                    (_a = onPositioned) === null || _a === void 0 ? void 0 : _a(newPositions);
                }
                else {
                    positionAttempts.current = 0;
                    (_b = onPositioned) === null || _b === void 0 ? void 0 : _b(newPositions);
                }
            }
            else if (positions !== undefined) {
                setPositions(undefined);
            }
        }
    };
    React.useEffect(updateAsyncPosition);
    return [positions, updateAsyncPosition];
}
function useSetInitialFocus(_a, contentHost, positions) {
    var setInitialFocus = _a.setInitialFocus;
    var didSetInitialFocus = React.useRef(false);
    React.useEffect(function () {
        if (!didSetInitialFocus.current && contentHost.current && setInitialFocus && positions) {
            didSetInitialFocus.current = true;
            Utilities_1.focusFirstChild(contentHost.current);
        }
    });
}
function useMaxHeight(_a, targetRef, getCachedBounds) {
    var directionalHintFixed = _a.directionalHintFixed, offsetFromTarget = _a.offsetFromTarget, directionalHint = _a.directionalHint, target = _a.target;
    /**
     * The maximum height the PositioningContainer can grow to
     * without going beyond the window or target bounds
     */
    var maxHeight = React.useRef();
    // If the target element changed, reset the max height. If we are tracking
    // target with class name, always reset because we do not know if
    // fabric has rendered a new element and disposed the old element.
    if (typeof target === 'string') {
        maxHeight.current = undefined;
    }
    React.useEffect(function () {
        maxHeight.current = undefined;
    }, [target, offsetFromTarget]);
    /**
     * Return the maximum height the container can grow to
     * without going out of the specified bounds
     */
    var getCachedMaxHeight = function () {
        if (!maxHeight.current) {
            if (directionalHintFixed && targetRef.current) {
                var gapSpace = offsetFromTarget ? offsetFromTarget : 0;
                maxHeight.current = Positioning_1.getMaxHeight(targetRef.current, directionalHint, gapSpace, getCachedBounds());
            }
            else {
                maxHeight.current = getCachedBounds().height - BORDER_WIDTH * 2;
            }
        }
        return maxHeight.current;
    };
    return getCachedMaxHeight;
}
function useAutoDismissEvents(_a, positionedHost, targetWindow, targetRef, positions, updateAsyncPosition) {
    var onDismiss = _a.onDismiss, preventDismissOnScroll = _a.preventDismissOnScroll;
    var async = react_hooks_1.useAsync();
    var onResize = function (ev) {
        if (onDismiss) {
            onDismiss(ev);
        }
        else {
            updateAsyncPosition();
        }
    };
    var dismissOnScroll = function (ev) {
        if (positions && !preventDismissOnScroll) {
            dismissOnLostFocus(ev);
        }
    };
    var dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = positionedHost.current && !Utilities_1.elementContains(positionedHost.current, target);
        if ((!targetRef.current && clickedOutsideCallout) ||
            (ev.target !== targetWindow &&
                clickedOutsideCallout &&
                (targetRef.current.stopPropagation ||
                    !targetRef.current ||
                    (target !== targetRef.current && !Utilities_1.elementContains(targetRef.current, target))))) {
            onResize(ev);
        }
    };
    React.useEffect(function () {
        var events = new Utilities_1.EventGroup({});
        // This is added so the positioningContainer will dismiss when the window is scrolled
        // but not when something inside the positioningContainer is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the positioningContainer.
        async.setTimeout(function () {
            var _a, _b, _c, _d;
            events.on(targetWindow, 'scroll', async.throttle(dismissOnScroll, 10), true);
            events.on(targetWindow, 'resize', async.throttle(onResize, 10), true);
            events.on((_b = (_a = targetWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body, 'focus', dismissOnLostFocus, true);
            events.on((_d = (_c = targetWindow) === null || _c === void 0 ? void 0 : _c.document) === null || _d === void 0 ? void 0 : _d.body, 'click', dismissOnLostFocus, true);
        }, 0);
        return function () { return events.dispose(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on mount
    }, []);
}
function useHeightOffset(_a, contentHost) {
    var finalHeight = _a.finalHeight;
    /**
     * Tracks the current height offset and updates during
     * the height animation when props.finalHeight is specified.
     */
    var _b = React.useState(0), heightOffset = _b[0], setHeightOffset = _b[1];
    var async = react_hooks_1.useAsync();
    var setHeightOffsetTimer = React.useRef(0);
    /** Animates the height if finalHeight was given. */
    var setHeightOffsetEveryFrame = function () {
        if (contentHost && finalHeight) {
            setHeightOffsetTimer.current = async.requestAnimationFrame(function () {
                if (!contentHost.current) {
                    return;
                }
                var positioningContainerMainElem = contentHost.current.lastChild;
                var cardScrollHeight = positioningContainerMainElem.scrollHeight;
                var cardCurrHeight = positioningContainerMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                setHeightOffset(heightOffset + scrollDiff);
                if (positioningContainerMainElem.offsetHeight < finalHeight) {
                    setHeightOffsetEveryFrame();
                }
                else {
                    async.cancelAnimationFrame(setHeightOffsetTimer.current);
                }
            });
        }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- should only re-run if finalHeight changes
    React.useEffect(setHeightOffsetEveryFrame, [finalHeight]);
    return heightOffset;
}
exports.useHeightOffset = useHeightOffset;
exports.PositioningContainer = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
    var props = Utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
    // @TODO rename to reflect the name of this class
    var contentHost = React.useRef(null);
    /**
     * The primary positioned div.
     */
    var positionedHost = React.useRef(null);
    var rootRef = react_hooks_1.useMergedRefs(forwardedRef, positionedHost);
    var _a = react_hooks_1.useTarget(props.target, positionedHost), targetRef = _a[0], targetWindow = _a[1];
    var getCachedBounds = useCachedBounds(props, targetWindow);
    var _b = usePositionState(props, positionedHost, contentHost, targetRef, getCachedBounds), positions = _b[0], updateAsyncPosition = _b[1];
    var getCachedMaxHeight = useMaxHeight(props, targetRef, getCachedBounds);
    var heightOffset = useHeightOffset(props, contentHost);
    useSetInitialFocus(props, contentHost, positions);
    useAutoDismissEvents(props, positionedHost, targetWindow, targetRef, positions, updateAsyncPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on initial render
    React.useEffect(function () { var _a, _b; return (_b = (_a = props).onLayerMounted) === null || _b === void 0 ? void 0 : _b.call(_a); }, []);
    // If there is no target window then we are likely in server side rendering and we should not render anything.
    if (!targetWindow) {
        return null;
    }
    var className = props.className, positioningContainerWidth = props.positioningContainerWidth, positioningContainerMaxHeight = props.positioningContainerMaxHeight, children = props.children;
    var styles = PositioningContainer_styles_1.getClassNames();
    var directionalClassName = positions && positions.targetEdge ? Styling_1.AnimationClassNames[SLIDE_ANIMATIONS[positions.targetEdge]] : '';
    var getContentMaxHeight = getCachedMaxHeight() + heightOffset;
    var contentMaxHeight = positioningContainerMaxHeight && positioningContainerMaxHeight > getContentMaxHeight
        ? getContentMaxHeight
        : positioningContainerMaxHeight;
    var content = (React.createElement("div", { ref: rootRef, className: Utilities_1.css('ms-PositioningContainer', styles.container) },
        React.createElement("div", { className: Styling_1.mergeStyles('ms-PositioningContainer-layerHost', styles.root, className, directionalClassName, !!positioningContainerWidth && { width: positioningContainerWidth }), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, 
            // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
            // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
            tabIndex: -1, ref: contentHost },
            children,
            // @TODO apply to the content container
            contentMaxHeight)));
    return props.doNotLayer ? content : React.createElement(Layer_1.Layer, null, content);
});
exports.PositioningContainer.displayName = 'PositioningContainer';
function arePositionsEqual(positions, newPosition) {
    return comparePositions(positions.elementPosition, newPosition.elementPosition);
}
function comparePositions(oldPositions, newPositions) {
    for (var key in newPositions) {
        if (newPositions.hasOwnProperty(key)) {
            var oldPositionEdge = oldPositions[key];
            var newPositionEdge = newPositions[key];
            if (oldPositionEdge && newPositionEdge) {
                if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                    return false;
                }
            }
        }
    }
    return true;
}
//# sourceMappingURL=PositioningContainer.js.map