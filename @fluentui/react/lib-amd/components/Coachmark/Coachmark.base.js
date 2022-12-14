define(["require", "exports", "tslib", "react", "../../Utilities", "../../Positioning", "./PositioningContainer/index", "./Beak/Beak", "../../common/DirectionalHint", "./Coachmark.styles", "../../FocusTrapZone", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Utilities_1, Positioning_1, index_1, Beak_1, DirectionalHint_1, Coachmark_styles_1, FocusTrapZone_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    exports.COACHMARK_ATTRIBUTE_NAME = 'data-coachmarkid';
    var DEFAULT_PROPS = {
        isCollapsed: true,
        mouseProximityOffset: 10,
        delayBeforeMouseOpen: 3600,
        delayBeforeCoachmarkAnimation: 0,
        isPositionForced: true,
        positioningContainerProps: {
            directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
        },
    };
    function useCollapsedState(props, entityInnerHostElementRef) {
        var propsIsCollapsed = props.isCollapsed, onAnimationOpenStart = props.onAnimationOpenStart, onAnimationOpenEnd = props.onAnimationOpenEnd;
        /** Is the Coachmark currently collapsed into a tear drop shape */
        var _a = React.useState(!!propsIsCollapsed), isCollapsed = _a[0], setIsCollapsed = _a[1];
        var setTimeout = react_hooks_1.useSetTimeout().setTimeout;
        // Rather than pushing out logic elsewhere to prevent openCoachmark from being called repeatedly,
        // we'll track it here and only invoke the logic once. We do this with a ref, rather than just the state,
        // because the openCoachmark callback can be captured in scope for an effect
        var hasCoachmarkBeenOpened = React.useRef(!isCollapsed);
        var openCoachmark = React.useCallback(function () {
            var _a, _b, _c, _d;
            if (!hasCoachmarkBeenOpened.current) {
                setIsCollapsed(false);
                (_a = onAnimationOpenStart) === null || _a === void 0 ? void 0 : _a();
                (_d = (_b = entityInnerHostElementRef.current) === null || _b === void 0 ? void 0 : (_c = _b).addEventListener) === null || _d === void 0 ? void 0 : _d.call(_c, 'transitionend', function () {
                    var _a;
                    // Need setTimeout to trigger narrator
                    setTimeout(function () {
                        if (entityInnerHostElementRef.current) {
                            Utilities_1.focusFirstChild(entityInnerHostElementRef.current);
                        }
                    }, 1000);
                    (_a = onAnimationOpenEnd) === null || _a === void 0 ? void 0 : _a();
                });
                hasCoachmarkBeenOpened.current = true;
            }
        }, [entityInnerHostElementRef, onAnimationOpenEnd, onAnimationOpenStart, setTimeout]);
        React.useEffect(function () {
            if (!propsIsCollapsed) {
                openCoachmark();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run if isCollapsed changes
        }, [propsIsCollapsed]);
        return [isCollapsed, openCoachmark];
    }
    function usePositionedData() {
        var async = react_hooks_1.useAsync();
        /**
         * Alignment edge of callout in relation to target
         */
        var _a = React.useState(), targetAlignment = _a[0], setTargetAlignment = _a[1];
        /**
         * Position of Coachmark/TeachingBubble in relation to target
         */
        var _b = React.useState(), targetPosition = _b[0], setTargetPosition = _b[1];
        var onPositioned = function (_a) {
            var alignmentEdge = _a.alignmentEdge, targetEdge = _a.targetEdge;
            return async.requestAnimationFrame(function () {
                setTargetAlignment(alignmentEdge);
                setTargetPosition(targetEdge);
            });
        };
        return [targetAlignment, targetPosition, onPositioned];
    }
    function useBeakPosition(props, targetAlignment, targetPosition) {
        var isRTL = Utilities_1.getRTL(props.theme);
        return React.useMemo(function () {
            var beakDirection = targetPosition === undefined ? Positioning_1.RectangleEdge.bottom : Positioning_1.getOppositeEdge(targetPosition);
            var beakPosition = { direction: beakDirection };
            var transformOriginX;
            var transformOriginY;
            var distanceAdjustment = '3px'; // Adjustment distance for Beak to shift towards Coachmark bubble.
            switch (beakDirection) {
                // If Beak is pointing Up or Down
                case Positioning_1.RectangleEdge.top:
                case Positioning_1.RectangleEdge.bottom:
                    // If there is no target alignment, then beak is X-axis centered in callout
                    if (!targetAlignment) {
                        beakPosition.left = "calc(50% - " + Beak_1.BEAK_WIDTH / 2 + "px)";
                        transformOriginX = 'center';
                    }
                    else {
                        // Beak is aligned to the left of target
                        if (targetAlignment === Positioning_1.RectangleEdge.left) {
                            beakPosition.left = Coachmark_styles_1.COACHMARK_WIDTH / 2 - Beak_1.BEAK_WIDTH / 2 + "px";
                            transformOriginX = 'left';
                        }
                        else {
                            // Beak is aligned to the right of target
                            beakPosition.right = Coachmark_styles_1.COACHMARK_WIDTH / 2 - Beak_1.BEAK_WIDTH / 2 + "px";
                            transformOriginX = 'right';
                        }
                    }
                    if (beakDirection === Positioning_1.RectangleEdge.top) {
                        beakPosition.top = distanceAdjustment;
                        transformOriginY = 'top';
                    }
                    else {
                        beakPosition.bottom = distanceAdjustment;
                        transformOriginY = 'bottom';
                    }
                    break;
                // If Beak is pointing Left or Right
                case Positioning_1.RectangleEdge.left:
                case Positioning_1.RectangleEdge.right:
                    // If there is no target alignment, then beak is Y-axis centered in callout
                    if (!targetAlignment) {
                        beakPosition.top = "calc(50% - " + Beak_1.BEAK_WIDTH / 2 + "px)";
                        transformOriginY = "center";
                    }
                    else {
                        // Beak is aligned to the top of target
                        if (targetAlignment === Positioning_1.RectangleEdge.top) {
                            beakPosition.top = Coachmark_styles_1.COACHMARK_WIDTH / 2 - Beak_1.BEAK_WIDTH / 2 + "px";
                            transformOriginY = "top";
                        }
                        else {
                            // Beak is aligned to the bottom of target
                            beakPosition.bottom = Coachmark_styles_1.COACHMARK_WIDTH / 2 - Beak_1.BEAK_WIDTH / 2 + "px";
                            transformOriginY = "bottom";
                        }
                    }
                    if (beakDirection === Positioning_1.RectangleEdge.left) {
                        if (isRTL) {
                            beakPosition.right = distanceAdjustment;
                        }
                        else {
                            beakPosition.left = distanceAdjustment;
                        }
                        transformOriginX = 'left';
                    }
                    else {
                        if (isRTL) {
                            beakPosition.left = distanceAdjustment;
                        }
                        else {
                            beakPosition.right = distanceAdjustment;
                        }
                        transformOriginX = 'right';
                    }
                    break;
            }
            return [beakPosition, transformOriginX + " " + transformOriginY];
        }, [targetAlignment, targetPosition, isRTL]);
    }
    function useListeners(props, translateAnimationContainer, openCoachmark) {
        var _a;
        var document = (_a = Utilities_1.getDocument()) === null || _a === void 0 ? void 0 : _a.documentElement;
        react_hooks_1.useOnEvent(document, 'keydown', function (e) {
            var _a, _b, _c;
            // Open coachmark if user presses ALT + C (arbitrary keypress for now)
            if (
            // eslint-disable-next-line deprecation/deprecation
            (e.altKey && e.which === Utilities_1.KeyCodes.c) ||
                // eslint-disable-next-line deprecation/deprecation
                (e.which === Utilities_1.KeyCodes.enter && ((_c = (_a = translateAnimationContainer.current) === null || _a === void 0 ? void 0 : (_b = _a).contains) === null || _c === void 0 ? void 0 : _c.call(_b, e.target)))) {
                openCoachmark();
            }
        }, true);
        var dismissOnLostFocus = function (ev) {
            var _a, _b;
            if (props.preventDismissOnLostFocus) {
                var clickTarget = ev.target;
                var clickedOutsideCallout = translateAnimationContainer.current && !Utilities_1.elementContains(translateAnimationContainer.current, clickTarget);
                var target = props.target;
                if (clickedOutsideCallout && clickTarget !== target && !Utilities_1.elementContains(target, clickTarget)) {
                    (_b = (_a = props).onDismiss) === null || _b === void 0 ? void 0 : _b.call(_a, ev);
                }
            }
        };
        react_hooks_1.useOnEvent(document, 'click', dismissOnLostFocus, true);
        react_hooks_1.useOnEvent(document, 'focus', dismissOnLostFocus, true);
    }
    function useProximityHandlers(props, translateAnimationContainer, openCoachmark) {
        var _a = react_hooks_1.useSetTimeout(), setTimeout = _a.setTimeout, clearTimeout = _a.clearTimeout;
        /** The target element the mouse would be in proximity to */
        var targetElementRect = React.useRef();
        React.useEffect(function () {
            var setTargetElementRect = function () {
                if (translateAnimationContainer.current) {
                    targetElementRect.current = translateAnimationContainer.current.getBoundingClientRect();
                }
            };
            var events = new Utilities_1.EventGroup({});
            // We don't want the user to immediately trigger the Coachmark when it's opened
            setTimeout(function () {
                var _a = props.mouseProximityOffset, mouseProximityOffset = _a === void 0 ? 0 : _a;
                /** Cached ids returned when setTimeout runs during the window resize event trigger. */
                var timeoutIds = [];
                // Take the initial measure out of the initial render to prevent an unnecessary render.
                setTimeout(function () {
                    setTargetElementRect();
                    // When the window resizes we want to async get the bounding client rectangle.
                    // Every time the event is triggered we want to setTimeout and then clear any previous
                    // instances of setTimeout.
                    events.on(window, 'resize', function () {
                        timeoutIds.forEach(function (value) {
                            clearTimeout(value);
                        });
                        timeoutIds.splice(0, timeoutIds.length); // clear array
                        timeoutIds.push(setTimeout(function () {
                            setTargetElementRect();
                        }, 100));
                    });
                }, 10);
                // Every time the document's mouse move is triggered, we want to check if inside of an element
                // and set the state with the result.
                events.on(document, 'mousemove', function (e) {
                    var _a, _b;
                    var mouseY = e.clientY;
                    var mouseX = e.clientX;
                    setTargetElementRect();
                    if (isInsideElement(targetElementRect.current, mouseX, mouseY, mouseProximityOffset)) {
                        openCoachmark();
                    }
                    (_b = (_a = props).onMouseMove) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                });
            }, props.delayBeforeMouseOpen);
            return function () { return events.dispose(); };
            // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on mount
        }, []);
    }
    function useComponentRef(props) {
        var onDismiss = props.onDismiss;
        React.useImperativeHandle(props.componentRef, function (ev) { return ({
            dismiss: function () {
                var _a;
                (_a = onDismiss) === null || _a === void 0 ? void 0 : _a(ev);
            },
        }); }, [onDismiss]);
    }
    function useAriaAlert(_a) {
        var ariaAlertText = _a.ariaAlertText;
        var async = react_hooks_1.useAsync();
        /** ARIA alert text to read aloud with Narrator once the Coachmark is mounted */
        var _b = React.useState(), alertText = _b[0], setAlertText = _b[1];
        React.useEffect(function () {
            // Need to add RAF to have narrator read change in alert container
            async.requestAnimationFrame(function () {
                setAlertText(ariaAlertText);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on mount
        }, []);
        return alertText;
    }
    function useAutoFocus(_a) {
        var preventFocusOnMount = _a.preventFocusOnMount;
        var setTimeout = react_hooks_1.useSetTimeout().setTimeout;
        /**
         * The cached HTMLElement reference to the Entity Inner Host
         * element.
         */
        var entityHost = React.useRef(null);
        React.useEffect(function () {
            if (!preventFocusOnMount) {
                setTimeout(function () { var _a; return (_a = entityHost.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 1000);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on mount
        }, []);
        return entityHost;
    }
    function useEntityHostMeasurements(props, entityInnerHostElementRef) {
        /** Is the teaching bubble currently retrieving the original dimensions of the hosted entity. */
        var _a = React.useState(!!props.isCollapsed), isMeasuring = _a[0], setIsMeasuring = _a[1];
        /** Cached width and height of _entityInnerHostElement */
        var _b = React.useState(props.isCollapsed ? { width: 0, height: 0 } : {}), entityInnerHostRect = _b[0], setEntityInnerHostRect = _b[1];
        var async = react_hooks_1.useAsync();
        React.useEffect(function () {
            async.requestAnimationFrame(function () {
                if (entityInnerHostElementRef.current) {
                    setEntityInnerHostRect({
                        width: entityInnerHostElementRef.current.offsetWidth,
                        height: entityInnerHostElementRef.current.offsetHeight,
                    });
                    setIsMeasuring(false);
                }
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on mount
        }, []);
        return [isMeasuring, entityInnerHostRect];
    }
    function useDeprecationWarning(props) {
        
    }
    var COMPONENT_NAME = 'CoachmarkBase';
    exports.CoachmarkBase = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
        var props = Utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
        var entityInnerHostElementRef = React.useRef(null);
        var translateAnimationContainer = React.useRef(null);
        var _a = usePositionedData(), targetAlignment = _a[0], targetPosition = _a[1], onPositioned = _a[2];
        var _b = useCollapsedState(props, entityInnerHostElementRef), isCollapsed = _b[0], openCoachmark = _b[1];
        var _c = useBeakPosition(props, targetAlignment, targetPosition), beakPositioningProps = _c[0], transformOrigin = _c[1];
        var _d = useEntityHostMeasurements(props, entityInnerHostElementRef), isMeasuring = _d[0], entityInnerHostRect = _d[1];
        var alertText = useAriaAlert(props);
        var entityHost = useAutoFocus(props);
        useListeners(props, translateAnimationContainer, openCoachmark);
        useComponentRef(props);
        useProximityHandlers(props, translateAnimationContainer, openCoachmark);
        useDeprecationWarning(props);
        var beaconColorOne = props.beaconColorOne, beaconColorTwo = props.beaconColorTwo, children = props.children, target = props.target, color = props.color, positioningContainerProps = props.positioningContainerProps, ariaDescribedBy = props.ariaDescribedBy, ariaDescribedByText = props.ariaDescribedByText, ariaLabelledBy = props.ariaLabelledBy, ariaLabelledByText = props.ariaLabelledByText, ariaAlertText = props.ariaAlertText, delayBeforeCoachmarkAnimation = props.delayBeforeCoachmarkAnimation, styles = props.styles, theme = props.theme, className = props.className, persistentBeak = props.persistentBeak;
        // Defaulting the main background before passing it to the styles because it is used for `Beak` too.
        var defaultColor = color;
        if (!defaultColor && theme) {
            defaultColor = theme.semanticColors.primaryButtonBackground;
        }
        var classNames = getClassNames(styles, {
            theme: theme,
            beaconColorOne: beaconColorOne,
            beaconColorTwo: beaconColorTwo,
            className: className,
            isCollapsed: isCollapsed,
            isMeasuring: isMeasuring,
            color: defaultColor,
            transformOrigin: transformOrigin,
            entityHostHeight: entityInnerHostRect.height === undefined ? undefined : entityInnerHostRect.height + "px",
            entityHostWidth: entityInnerHostRect.width === undefined ? undefined : entityInnerHostRect.width + "px",
            width: Coachmark_styles_1.COACHMARK_WIDTH + "px",
            height: Coachmark_styles_1.COACHMARK_HEIGHT + "px",
            delayBeforeCoachmarkAnimation: delayBeforeCoachmarkAnimation + "ms",
        });
        var finalHeight = isCollapsed ? Coachmark_styles_1.COACHMARK_HEIGHT : entityInnerHostRect.height;
        return (React.createElement(index_1.PositioningContainer, tslib_1.__assign({ target: target, offsetFromTarget: Beak_1.BEAK_HEIGHT, finalHeight: finalHeight, ref: forwardedRef, onPositioned: onPositioned, bounds: getBounds(props) }, positioningContainerProps),
            React.createElement("div", { className: classNames.root },
                ariaAlertText && (React.createElement("div", { className: classNames.ariaContainer, role: "alert", "aria-hidden": !isCollapsed }, alertText)),
                React.createElement("div", { className: classNames.pulsingBeacon }),
                React.createElement("div", { className: classNames.translateAnimationContainer, ref: translateAnimationContainer },
                    React.createElement("div", { className: classNames.scaleAnimationLayer },
                        React.createElement("div", { className: classNames.rotateAnimationLayer },
                            (isCollapsed || persistentBeak) && React.createElement(Beak_1.Beak, tslib_1.__assign({}, beakPositioningProps, { color: defaultColor })),
                            React.createElement("div", { className: classNames.entityHost, ref: entityHost, tabIndex: -1, "data-is-focusable": true, role: "dialog", "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy },
                                isCollapsed && [
                                    ariaLabelledBy && (React.createElement("p", { id: ariaLabelledBy, key: 0, className: classNames.ariaContainer }, ariaLabelledByText)),
                                    ariaDescribedBy && (React.createElement("p", { id: ariaDescribedBy, key: 1, className: classNames.ariaContainer }, ariaDescribedByText)),
                                ],
                                React.createElement(FocusTrapZone_1.FocusTrapZone, { isClickableOutsideFocusTrap: true, forceFocusInsideTrap: false },
                                    React.createElement("div", { className: classNames.entityInnerHost, ref: entityInnerHostElementRef },
                                        React.createElement("div", { className: classNames.childrenContainer, "aria-hidden": isCollapsed }, children))))))))));
    });
    exports.CoachmarkBase.displayName = COMPONENT_NAME;
    function getBounds(_a) {
        var isPositionForced = _a.isPositionForced, positioningContainerProps = _a.positioningContainerProps;
        if (isPositionForced) {
            // If directionalHint direction is the top or bottom auto edge, then we want to set the left/right bounds
            // to the window x-axis to have auto positioning work correctly.
            if (positioningContainerProps &&
                (positioningContainerProps.directionalHint === DirectionalHint_1.DirectionalHint.topAutoEdge ||
                    positioningContainerProps.directionalHint === DirectionalHint_1.DirectionalHint.bottomAutoEdge)) {
                return {
                    left: 0,
                    top: -Infinity,
                    bottom: Infinity,
                    right: window.innerWidth,
                    width: window.innerWidth,
                    height: Infinity,
                };
            }
            else {
                return {
                    left: -Infinity,
                    top: -Infinity,
                    bottom: Infinity,
                    right: Infinity,
                    width: Infinity,
                    height: Infinity,
                };
            }
        }
        else {
            return undefined;
        }
    }
    function isInsideElement(targetElementRect, mouseX, mouseY, mouseProximityOffset) {
        if (mouseProximityOffset === void 0) { mouseProximityOffset = 0; }
        return (mouseX > targetElementRect.left - mouseProximityOffset &&
            mouseX < targetElementRect.left + targetElementRect.width + mouseProximityOffset &&
            mouseY > targetElementRect.top - mouseProximityOffset &&
            mouseY < targetElementRect.top + targetElementRect.height + mouseProximityOffset);
    }
});
//# sourceMappingURL=Coachmark.base.js.map