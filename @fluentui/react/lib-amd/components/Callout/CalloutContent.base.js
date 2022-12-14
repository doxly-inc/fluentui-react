define(["require", "exports", "tslib", "react", "../../common/DirectionalHint", "../../Utilities", "../../Positioning", "../../Popup", "../../Utilities", "../../Styling", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, DirectionalHint_1, Utilities_1, Positioning_1, Popup_1, Utilities_2, Styling_1, react_hooks_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ANIMATIONS = (_a = {},
        _a[Positioning_1.RectangleEdge.top] = Styling_1.AnimationClassNames.slideUpIn10,
        _a[Positioning_1.RectangleEdge.bottom] = Styling_1.AnimationClassNames.slideDownIn10,
        _a[Positioning_1.RectangleEdge.left] = Styling_1.AnimationClassNames.slideLeftIn10,
        _a[Positioning_1.RectangleEdge.right] = Styling_1.AnimationClassNames.slideRightIn10,
        _a);
    var getClassNames = Utilities_2.classNamesFunction({
        disableCaching: true,
    });
    var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
    // Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
    // To help ensure that edge will respect the offscreen style opacity
    // filter needs to be added as an additional way to set opacity.
    // Also set pointer-events: none so that the callout will not occlude the element it is
    // going to be positioned against
    var OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)', pointerEvents: 'none' };
    // role and role description go hand-in-hand. Both would be included by spreading getNativeProps for a basic element
    // This constant array can be used to filter these out of native props spread on callout root and apply them together on
    // calloutMain (the Popup component within the callout)
    var ARIA_ROLE_ATTRIBUTES = ['role', 'aria-roledescription'];
    var DEFAULT_PROPS = {
        preventDismissOnLostFocus: false,
        preventDismissOnScroll: false,
        preventDismissOnResize: false,
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 0,
        minPagePadding: 8,
        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
    };
    /**
     * Returns a function to lazily fetch the bounds of the target element for the callout
     */
    function useBounds(_a, targetRef, targetWindow) {
        var bounds = _a.bounds, _b = _a.minPagePadding, minPagePadding = _b === void 0 ? DEFAULT_PROPS.minPagePadding : _b, target = _a.target;
        var cachedBounds = React.useRef();
        var getBounds = React.useCallback(function () {
            if (!cachedBounds.current) {
                var currentBounds = typeof bounds === 'function' ? (targetWindow ? bounds(target, targetWindow) : undefined) : bounds;
                if (!currentBounds && targetWindow) {
                    currentBounds = Positioning_1.getBoundsFromTargetWindow(targetRef.current, targetWindow);
                    currentBounds = {
                        top: currentBounds.top + minPagePadding,
                        left: currentBounds.left + minPagePadding,
                        right: currentBounds.right - minPagePadding,
                        bottom: currentBounds.bottom - minPagePadding,
                        width: currentBounds.width - minPagePadding * 2,
                        height: currentBounds.height - minPagePadding * 2,
                    };
                }
                cachedBounds.current = currentBounds;
            }
            return cachedBounds.current;
        }, [bounds, minPagePadding, target, targetRef, targetWindow]);
        return getBounds;
    }
    /**
     * Returns the maximum available height for the Callout to render into
     */
    function useMaxHeight(_a, targetRef, getBounds) {
        var beakWidth = _a.beakWidth, coverTarget = _a.coverTarget, directionalHint = _a.directionalHint, directionalHintFixed = _a.directionalHintFixed, gapSpace = _a.gapSpace, isBeakVisible = _a.isBeakVisible, hidden = _a.hidden;
        var _b = React.useState(), maxHeight = _b[0], setMaxHeight = _b[1];
        var async = react_hooks_1.useAsync();
        // Updating targetRef won't re-render the component, but it's recalculated (if needed) with every render
        // If it mutates, we want to re-run the effect
        var currentTarget = targetRef.current;
        React.useEffect(function () {
            var _a;
            if (!maxHeight && !hidden) {
                if (directionalHintFixed && currentTarget) {
                    // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
                    // overlap with the target.
                    var totalGap_1 = ((gapSpace !== null && gapSpace !== void 0 ? gapSpace : 0)) + (isBeakVisible && beakWidth ? beakWidth : 0);
                    async.requestAnimationFrame(function () {
                        if (targetRef.current) {
                            setMaxHeight(Positioning_1.getMaxHeight(targetRef.current, directionalHint, totalGap_1, getBounds(), coverTarget));
                        }
                    });
                }
                else {
                    setMaxHeight((_a = getBounds()) === null || _a === void 0 ? void 0 : _a.height);
                }
            }
            else if (hidden) {
                setMaxHeight(undefined);
            }
        }, [
            targetRef,
            currentTarget,
            gapSpace,
            beakWidth,
            getBounds,
            hidden,
            async,
            coverTarget,
            directionalHint,
            directionalHintFixed,
            isBeakVisible,
            maxHeight,
        ]);
        return maxHeight;
    }
    /**
     * Returns the height offset of the callout element and updates it each frame to approach the configured finalHeight
     */
    function useHeightOffset(_a, calloutElement) {
        var finalHeight = _a.finalHeight, hidden = _a.hidden;
        var _b = React.useState(0), heightOffset = _b[0], setHeightOffset = _b[1];
        var async = react_hooks_1.useAsync();
        var setHeightOffsetTimer = React.useRef();
        var setHeightOffsetEveryFrame = React.useCallback(function () {
            if (calloutElement.current && finalHeight) {
                setHeightOffsetTimer.current = async.requestAnimationFrame(function () {
                    var _a;
                    var calloutMainElem = (_a = calloutElement.current) === null || _a === void 0 ? void 0 : _a.lastChild;
                    if (!calloutMainElem) {
                        return;
                    }
                    var cardScrollHeight = calloutMainElem.scrollHeight;
                    var cardCurrHeight = calloutMainElem.offsetHeight;
                    var scrollDiff = cardScrollHeight - cardCurrHeight;
                    setHeightOffset(function (currentHeightOffset) { return currentHeightOffset + scrollDiff; });
                    if (calloutMainElem.offsetHeight < finalHeight) {
                        setHeightOffsetEveryFrame();
                    }
                    else {
                        async.cancelAnimationFrame(setHeightOffsetTimer.current, calloutElement.current);
                    }
                }, calloutElement.current);
            }
        }, [async, calloutElement, finalHeight]);
        React.useEffect(function () {
            if (!hidden) {
                setHeightOffsetEveryFrame();
            }
        }, [finalHeight, hidden, setHeightOffsetEveryFrame]);
        return heightOffset;
    }
    /**
     * Get the position information for the callout. If the callout does not fit in the given orientation,
     * a new position is calculated for the next frame, up to 5 attempts
     */
    function usePositions(props, hostElement, calloutElement, targetRef, getBounds) {
        var _a = React.useState(), positions = _a[0], setPositions = _a[1];
        var positionAttempts = React.useRef(0);
        var async = react_hooks_1.useAsync();
        var hidden = props.hidden, target = props.target, finalHeight = props.finalHeight, onPositioned = props.onPositioned, directionalHint = props.directionalHint;
        React.useEffect(function () {
            if (!hidden) {
                var timerId_1 = async.requestAnimationFrame(function () {
                    var _a;
                    // If we expect a target element to position against, we need to wait until `targetRef.current`
                    // is resolved. Otherwise we can try to position.
                    var expectsTarget = !!target;
                    if (hostElement.current && calloutElement.current && (!expectsTarget || targetRef.current)) {
                        var currentProps = tslib_1.__assign(tslib_1.__assign({}, props), { target: targetRef.current, bounds: getBounds() });
                        // If there is a finalHeight given then we assume that the user knows and will handle
                        // additional positioning adjustments so we should call positionCard
                        var newPositions = finalHeight
                            ? Positioning_1.positionCard(currentProps, hostElement.current, calloutElement.current, positions)
                            : Positioning_1.positionCallout(currentProps, hostElement.current, calloutElement.current, positions);
                        // Set the new position only when the positions are not exists or one of the new callout positions
                        // are different. The position should not change if the position is within 2 decimal places.
                        if ((!positions && newPositions) ||
                            (positions && newPositions && !arePositionsEqual(positions, newPositions) && positionAttempts.current < 5)) {
                            // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                            // and we should stop trying to reposition to prevent a stack overflow.
                            positionAttempts.current++;
                            setPositions(newPositions);
                        }
                        else if (positionAttempts.current > 0) {
                            // Only call the onPositioned callback if the callout has been re-positioned at least once.
                            positionAttempts.current = 0;
                            (_a = onPositioned) === null || _a === void 0 ? void 0 : _a(positions);
                        }
                    }
                }, calloutElement.current);
                return function () { return async.cancelAnimationFrame(timerId_1); };
            }
        }, [
            hidden,
            directionalHint,
            async,
            calloutElement,
            hostElement,
            targetRef,
            finalHeight,
            getBounds,
            onPositioned,
            positions,
            props,
            target,
        ]);
        return positions;
    }
    /**
     * Hook to set up behavior to automatically focus the callout when it appears, if indicated by props.
     */
    function useAutoFocus(_a, positions, calloutElement) {
        var hidden = _a.hidden, setInitialFocus = _a.setInitialFocus;
        var async = react_hooks_1.useAsync();
        var hasPositions = !!positions;
        React.useEffect(function () {
            if (!hidden && setInitialFocus && hasPositions && calloutElement.current) {
                var timerId_2 = async.requestAnimationFrame(function () { return Utilities_1.focusFirstChild(calloutElement.current); }, calloutElement.current);
                return function () { return async.cancelAnimationFrame(timerId_2); };
            }
        }, [hidden, hasPositions, async, calloutElement, setInitialFocus]);
    }
    /**
     * Hook to set up various handlers to dismiss the popup when it loses focus or the window scrolls or similar cases.
     */
    function useDismissHandlers(_a, positions, hostElement, targetRef, targetWindow) {
        var hidden = _a.hidden, onDismiss = _a.onDismiss, 
        // eslint-disable-next-line deprecation/deprecation
        preventDismissOnScroll = _a.preventDismissOnScroll, 
        // eslint-disable-next-line deprecation/deprecation
        preventDismissOnResize = _a.preventDismissOnResize, 
        // eslint-disable-next-line deprecation/deprecation
        preventDismissOnLostFocus = _a.preventDismissOnLostFocus, shouldDismissOnWindowFocus = _a.shouldDismissOnWindowFocus, preventDismissOnEvent = _a.preventDismissOnEvent;
        var isMouseDownOnPopup = React.useRef(false);
        var async = react_hooks_1.useAsync();
        var mouseDownHandlers = react_hooks_1.useConst([
            function () {
                isMouseDownOnPopup.current = true;
            },
            function () {
                isMouseDownOnPopup.current = false;
            },
        ]);
        var positionsExists = !!positions;
        React.useEffect(function () {
            var dismissOnScroll = function (ev) {
                if (positionsExists && !preventDismissOnScroll) {
                    dismissOnClickOrScroll(ev);
                }
            };
            var dismissOnResize = function (ev) {
                var _a;
                if (!preventDismissOnResize) {
                    (_a = onDismiss) === null || _a === void 0 ? void 0 : _a(ev);
                }
            };
            var dismissOnLostFocus = function (ev) {
                if (!preventDismissOnLostFocus) {
                    dismissOnClickOrScroll(ev);
                }
            };
            var dismissOnClickOrScroll = function (ev) {
                var _a;
                var target = ev.target;
                var isEventTargetOutsideCallout = hostElement.current && !Utilities_1.elementContains(hostElement.current, target);
                // If mouse is pressed down on callout but moved outside then released, don't dismiss the callout.
                if (isEventTargetOutsideCallout && isMouseDownOnPopup.current) {
                    isMouseDownOnPopup.current = false;
                    return;
                }
                if ((!targetRef.current && isEventTargetOutsideCallout) ||
                    (ev.target !== targetWindow &&
                        isEventTargetOutsideCallout &&
                        (!targetRef.current ||
                            'stopPropagation' in targetRef.current ||
                            (target !== targetRef.current && !Utilities_1.elementContains(targetRef.current, target))))) {
                    (_a = onDismiss) === null || _a === void 0 ? void 0 : _a(ev);
                }
            };
            var dismissOnTargetWindowBlur = function (ev) {
                var _a, _b;
                // Do nothing
                if (!shouldDismissOnWindowFocus) {
                    return;
                }
                if (((preventDismissOnEvent && !preventDismissOnEvent(ev)) ||
                    (!preventDismissOnEvent && !preventDismissOnLostFocus)) &&
                    !((_a = targetWindow) === null || _a === void 0 ? void 0 : _a.document.hasFocus()) &&
                    ev.relatedTarget === null) {
                    (_b = onDismiss) === null || _b === void 0 ? void 0 : _b(ev);
                }
            };
            // This is added so the callout will dismiss when the window is scrolled
            // but not when something inside the callout is scrolled. The delay seems
            // to be required to avoid React firing an async focus event in IE from
            // the target changing focus quickly prior to rendering the callout.
            var disposablesPromise = new Promise(function (resolve) {
                async.setTimeout(function () {
                    if (!hidden && targetWindow) {
                        var disposables_1 = [
                            Utilities_1.on(targetWindow, 'scroll', dismissOnScroll, true),
                            Utilities_1.on(targetWindow, 'resize', dismissOnResize, true),
                            Utilities_1.on(targetWindow.document.documentElement, 'focus', dismissOnLostFocus, true),
                            Utilities_1.on(targetWindow.document.documentElement, 'click', dismissOnLostFocus, true),
                            Utilities_1.on(targetWindow, 'blur', dismissOnTargetWindowBlur, true),
                        ];
                        resolve(function () {
                            disposables_1.forEach(function (dispose) { return dispose(); });
                        });
                    }
                }, 0);
            });
            return function () {
                disposablesPromise.then(function (dispose) { return dispose(); });
            };
        }, [
            hidden,
            async,
            hostElement,
            targetRef,
            targetWindow,
            onDismiss,
            shouldDismissOnWindowFocus,
            preventDismissOnLostFocus,
            preventDismissOnResize,
            preventDismissOnScroll,
            positionsExists,
            preventDismissOnEvent,
        ]);
        return mouseDownHandlers;
    }
    var COMPONENT_NAME = 'CalloutContentBase';
    exports.CalloutContentBase = React.memo(React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
        var props = Utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
        var styles = props.styles, style = props.style, ariaLabel = props.ariaLabel, ariaDescribedBy = props.ariaDescribedBy, ariaLabelledBy = props.ariaLabelledBy, className = props.className, isBeakVisible = props.isBeakVisible, children = props.children, beakWidth = props.beakWidth, calloutWidth = props.calloutWidth, calloutMaxWidth = props.calloutMaxWidth, calloutMinWidth = props.calloutMinWidth, finalHeight = props.finalHeight, _a = props.hideOverflow, hideOverflow = _a === void 0 ? !!finalHeight : _a, backgroundColor = props.backgroundColor, calloutMaxHeight = props.calloutMaxHeight, onScroll = props.onScroll, 
        // eslint-disable-next-line deprecation/deprecation
        _b = props.shouldRestoreFocus, 
        // eslint-disable-next-line deprecation/deprecation
        shouldRestoreFocus = _b === void 0 ? true : _b, target = props.target, hidden = props.hidden, onLayerMounted = props.onLayerMounted;
        var hostElement = React.useRef(null);
        var calloutElement = React.useRef(null);
        var rootRef = react_hooks_1.useMergedRefs(hostElement, forwardedRef);
        var _c = react_hooks_1.useTarget(props.target, calloutElement), targetRef = _c[0], targetWindow = _c[1];
        var getBounds = useBounds(props, targetRef, targetWindow);
        var maxHeight = useMaxHeight(props, targetRef, getBounds);
        var heightOffset = useHeightOffset(props, calloutElement);
        var positions = usePositions(props, hostElement, calloutElement, targetRef, getBounds);
        var _d = useDismissHandlers(props, positions, hostElement, targetRef, targetWindow), mouseDownOnPopup = _d[0], mouseUpOnPopup = _d[1];
        useAutoFocus(props, positions, calloutElement);
        React.useEffect(function () {
            var _a;
            if (!hidden) {
                (_a = onLayerMounted) === null || _a === void 0 ? void 0 : _a();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run if hidden changes
        }, [hidden]);
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!targetWindow) {
            return null;
        }
        var getContentMaxHeight = maxHeight ? maxHeight + heightOffset : undefined;
        var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight
            ? calloutMaxHeight
            : getContentMaxHeight;
        var overflowYHidden = hideOverflow;
        var beakVisible = isBeakVisible && !!target;
        var classNames = getClassNames(styles, {
            theme: props.theme,
            className: className,
            overflowYHidden: overflowYHidden,
            calloutWidth: calloutWidth,
            positions: positions,
            beakWidth: beakWidth,
            backgroundColor: backgroundColor,
            calloutMaxWidth: calloutMaxWidth,
            calloutMinWidth: calloutMinWidth,
        });
        var overflowStyle = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, style), { maxHeight: contentMaxHeight }), (overflowYHidden && { overflowY: 'hidden' }));
        var visibilityStyle = props.hidden ? { visibility: 'hidden' } : undefined;
        // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
        var content = (React.createElement("div", { ref: rootRef, className: classNames.container, style: visibilityStyle },
            React.createElement("div", tslib_1.__assign({}, Utilities_1.getNativeProps(props, Utilities_1.divProperties, ARIA_ROLE_ATTRIBUTES), { className: Utilities_1.css(classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, 
                // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                tabIndex: -1, ref: calloutElement }),
                beakVisible && React.createElement("div", { className: classNames.beak, style: getBeakPosition(positions) }),
                beakVisible && React.createElement("div", { className: classNames.beakCurtain }),
                React.createElement(Popup_1.Popup, tslib_1.__assign({}, Utilities_1.getNativeProps(props, ARIA_ROLE_ATTRIBUTES), { ariaLabel: ariaLabel, onRestoreFocus: props.onRestoreFocus, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: classNames.calloutMain, onDismiss: props.onDismiss, onScroll: onScroll, shouldRestoreFocus: shouldRestoreFocus, style: overflowStyle, onMouseDown: mouseDownOnPopup, onMouseUp: mouseUpOnPopup }), children))));
        return content;
    }), function (previousProps, nextProps) {
        if (!nextProps.shouldUpdateWhenHidden && previousProps.hidden && nextProps.hidden) {
            // Do not update when hidden.
            return true;
        }
        return Utilities_1.shallowCompare(previousProps, nextProps);
    });
    exports.CalloutContentBase.displayName = COMPONENT_NAME;
    function getBeakPosition(positions) {
        var _a, _b;
        var beakPositionStyle = tslib_1.__assign({}, (_b = (_a = positions) === null || _a === void 0 ? void 0 : _a.beakPosition) === null || _b === void 0 ? void 0 : _b.elementPosition);
        if (!beakPositionStyle.top && !beakPositionStyle.bottom && !beakPositionStyle.left && !beakPositionStyle.right) {
            beakPositionStyle.left = BEAK_ORIGIN_POSITION.left;
            beakPositionStyle.top = BEAK_ORIGIN_POSITION.top;
        }
        return beakPositionStyle;
    }
    function arePositionsEqual(positions, newPosition) {
        return (comparePositions(positions.elementPosition, newPosition.elementPosition) &&
            comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition));
    }
    function comparePositions(oldPositions, newPositions) {
        for (var key in newPositions) {
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    }
});
//# sourceMappingURL=CalloutContent.base.js.map