define(["require", "exports", "tslib", "react", "../../Utilities", "@fluentui/react-hooks", "../../WindowProvider"], function (require, exports, tslib_1, React, Utilities_1, react_hooks_1, WindowProvider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var COMPONENT_NAME = 'FocusTrapZone';
    var useComponentRef = function (componentRef, previouslyFocusedElement, focus) {
        React.useImperativeHandle(componentRef, function () { return ({
            get previouslyFocusedElement() {
                return previouslyFocusedElement;
            },
            focus: focus,
        }); }, [previouslyFocusedElement, focus]);
    };
    exports.FocusTrapZone = React.forwardRef(function (props, ref) {
        var root = React.useRef(null);
        var firstBumper = React.useRef(null);
        var lastBumper = React.useRef(null);
        var mergedRootRef = react_hooks_1.useMergedRefs(root, ref);
        var id = react_hooks_1.useId(undefined, props.id);
        var doc = WindowProvider_1.useDocument();
        var divProps = Utilities_1.getNativeProps(props, Utilities_1.divProperties);
        var internalState = react_hooks_1.useConst(function () { return ({
            previouslyFocusedElementOutsideTrapZone: undefined,
            previouslyFocusedElementInTrapZone: undefined,
            disposeFocusHandler: undefined,
            disposeClickHandler: undefined,
            hasFocus: false,
            unmodalize: undefined,
        }); });
        var ariaLabelledBy = props.ariaLabelledBy, className = props.className, children = props.children, componentRef = props.componentRef, disabled = props.disabled, _a = props.disableFirstFocus, disableFirstFocus = _a === void 0 ? false : _a, _b = props.disabled, currentDisabledValue = _b === void 0 ? false : _b, elementToFocusOnDismiss = props.elementToFocusOnDismiss, _c = props.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c, focusPreviouslyFocusedInnerElement = props.focusPreviouslyFocusedInnerElement, firstFocusableSelector = props.firstFocusableSelector, ignoreExternalFocusing = props.ignoreExternalFocusing, _d = props.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _d === void 0 ? false : _d, onFocus = props.onFocus, onBlur = props.onBlur, onFocusCapture = props.onFocusCapture, onBlurCapture = props.onBlurCapture, enableAriaHiddenSiblings = props.enableAriaHiddenSiblings;
        var bumperProps = {
            'aria-hidden': true,
            style: {
                pointerEvents: 'none',
                position: 'fixed',
            },
            tabIndex: disabled ? -1 : 0,
            'data-is-visible': true,
        };
        var focus = React.useCallback(function () {
            if (focusPreviouslyFocusedInnerElement &&
                internalState.previouslyFocusedElementInTrapZone &&
                Utilities_1.elementContains(root.current, internalState.previouslyFocusedElementInTrapZone)) {
                // focus on the last item that had focus in the zone before we left the zone
                Utilities_1.focusAsync(internalState.previouslyFocusedElementInTrapZone);
                return;
            }
            var focusSelector = typeof firstFocusableSelector === 'string'
                ? firstFocusableSelector
                : firstFocusableSelector && firstFocusableSelector();
            var firstFocusableChild = null;
            if (root.current) {
                if (focusSelector) {
                    firstFocusableChild = root.current.querySelector('.' + focusSelector);
                }
                // Fall back to first element if query selector did not match any elements.
                if (!firstFocusableChild) {
                    firstFocusableChild = Utilities_1.getNextElement(root.current, root.current.firstChild, false, false, false, true);
                }
            }
            if (firstFocusableChild) {
                Utilities_1.focusAsync(firstFocusableChild);
            }
        }, [firstFocusableSelector, focusPreviouslyFocusedInnerElement, internalState]);
        var onBumperFocus = React.useCallback(function (isFirstBumper) {
            if (disabled) {
                return;
            }
            var currentBumper = (isFirstBumper === internalState.hasFocus
                ? lastBumper.current
                : firstBumper.current);
            if (root.current) {
                var nextFocusable = isFirstBumper === internalState.hasFocus
                    ? Utilities_1.getLastTabbable(root.current, currentBumper, true, false)
                    : Utilities_1.getFirstTabbable(root.current, currentBumper, true, false);
                if (nextFocusable) {
                    if (nextFocusable === firstBumper.current || nextFocusable === lastBumper.current) {
                        // This can happen when FTZ contains no tabbable elements.
                        // focus will take care of finding a focusable element in FTZ.
                        focus();
                    }
                    else {
                        nextFocusable.focus();
                    }
                }
            }
        }, [disabled, focus, internalState]);
        var onRootBlurCapture = React.useCallback(function (ev) {
            var _a;
            (_a = onBlurCapture) === null || _a === void 0 ? void 0 : _a(ev);
            var relatedTarget = ev.relatedTarget;
            if (ev.relatedTarget === null) {
                // In IE11, due to lack of support, event.relatedTarget is always
                // null making every onBlur call to be "outside" of the ComboBox
                // even when it's not. Using document.activeElement is another way
                // for us to be able to get what the relatedTarget without relying
                // on the event
                relatedTarget = doc.activeElement;
            }
            if (!Utilities_1.elementContains(root.current, relatedTarget)) {
                internalState.hasFocus = false;
            }
        }, [doc, internalState, onBlurCapture]);
        var onRootFocusCapture = React.useCallback(function (ev) {
            var _a;
            (_a = onFocusCapture) === null || _a === void 0 ? void 0 : _a(ev);
            if (ev.target === firstBumper.current) {
                onBumperFocus(true);
            }
            else if (ev.target === lastBumper.current) {
                onBumperFocus(false);
            }
            internalState.hasFocus = true;
            if (ev.target !== ev.currentTarget && !(ev.target === firstBumper.current || ev.target === lastBumper.current)) {
                // every time focus changes within the trap zone, remember the focused element so that
                // it can be restored if focus leaves the pane and returns via keystroke (i.e. via a call to this.focus(true))
                internalState.previouslyFocusedElementInTrapZone = ev.target;
            }
        }, [onFocusCapture, internalState, onBumperFocus]);
        var returnFocusToInitiator = React.useCallback(function () {
            exports.FocusTrapZone.focusStack = exports.FocusTrapZone.focusStack.filter(function (value) {
                return id !== value;
            });
            if (doc) {
                var activeElement = doc.activeElement;
                if (!ignoreExternalFocusing &&
                    internalState.previouslyFocusedElementOutsideTrapZone &&
                    typeof internalState.previouslyFocusedElementOutsideTrapZone.focus === 'function' &&
                    (Utilities_1.elementContains(root.current, activeElement) || activeElement === doc.body)) {
                    if (!(internalState.previouslyFocusedElementOutsideTrapZone === firstBumper.current ||
                        internalState.previouslyFocusedElementOutsideTrapZone === lastBumper.current)) {
                        Utilities_1.focusAsync(internalState.previouslyFocusedElementOutsideTrapZone);
                    }
                }
            }
        }, [doc, id, ignoreExternalFocusing, internalState]);
        var forceFocusInTrap = React.useCallback(function (ev) {
            if (disabled) {
                return;
            }
            if (exports.FocusTrapZone.focusStack.length && id === exports.FocusTrapZone.focusStack[exports.FocusTrapZone.focusStack.length - 1]) {
                var focusedElement = ev.target;
                if (!Utilities_1.elementContains(root.current, focusedElement)) {
                    focus();
                    internalState.hasFocus = true; // set focus here since we stop event propagation
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        }, [disabled, id, focus, internalState]);
        var forceClickInTrap = React.useCallback(function (ev) {
            if (disabled) {
                return;
            }
            if (exports.FocusTrapZone.focusStack.length && id === exports.FocusTrapZone.focusStack[exports.FocusTrapZone.focusStack.length - 1]) {
                var clickedElement = ev.target;
                if (clickedElement && !Utilities_1.elementContains(root.current, clickedElement)) {
                    focus();
                    internalState.hasFocus = true; // set focus here since we stop event propagation
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        }, [disabled, id, focus, internalState]);
        var updateEventHandlers = React.useCallback(function () {
            if (forceFocusInsideTrap && !internalState.disposeFocusHandler) {
                internalState.disposeFocusHandler = Utilities_1.on(window, 'focus', forceFocusInTrap, true);
            }
            else if (!forceFocusInsideTrap && internalState.disposeFocusHandler) {
                internalState.disposeFocusHandler();
                internalState.disposeFocusHandler = undefined;
            }
            if (!isClickableOutsideFocusTrap && !internalState.disposeClickHandler) {
                internalState.disposeClickHandler = Utilities_1.on(window, 'click', forceClickInTrap, true);
            }
            else if (isClickableOutsideFocusTrap && internalState.disposeClickHandler) {
                internalState.disposeClickHandler();
                internalState.disposeClickHandler = undefined;
            }
        }, [forceClickInTrap, forceFocusInTrap, forceFocusInsideTrap, isClickableOutsideFocusTrap, internalState]);
        // Updates eventHandlers and cleans up focusStack when the component unmounts.
        React.useEffect(function () {
            var parentRoot = root.current;
            updateEventHandlers();
            return function () {
                var _a;
                // don't handle return focus unless forceFocusInsideTrap is true or focus is still within FocusTrapZone
                if (!disabled || forceFocusInsideTrap || !Utilities_1.elementContains(parentRoot, (_a = doc) === null || _a === void 0 ? void 0 : _a.activeElement)) {
                    returnFocusToInitiator();
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps -- Should only run on mount.
        }, [updateEventHandlers]);
        // Updates focusStack and the previouslyFocusedElementOutsideTrapZone on prop change.
        React.useEffect(function () {
            var newForceFocusInsideTrap = forceFocusInsideTrap !== undefined ? forceFocusInsideTrap : true;
            var newDisabled = disabled !== undefined ? disabled : false;
            // Transition from forceFocusInsideTrap / FTZ disabled to enabled.
            if (!newDisabled || newForceFocusInsideTrap) {
                if (currentDisabledValue) {
                    return;
                }
                exports.FocusTrapZone.focusStack.push(id);
                internalState.previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss
                    ? elementToFocusOnDismiss
                    : doc.activeElement;
                if (!disableFirstFocus && !Utilities_1.elementContains(root.current, internalState.previouslyFocusedElementOutsideTrapZone)) {
                    focus();
                }
                if (!internalState.unmodalize && root.current && enableAriaHiddenSiblings) {
                    internalState.unmodalize = Utilities_1.modalize(root.current);
                }
            }
            else if (!newForceFocusInsideTrap || newDisabled) {
                // Transition from forceFocusInsideTrap / FTZ enabled to disabled.
                returnFocusToInitiator();
                if (internalState.unmodalize) {
                    internalState.unmodalize();
                }
            }
            if (elementToFocusOnDismiss && internalState.previouslyFocusedElementOutsideTrapZone !== elementToFocusOnDismiss) {
                internalState.previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss;
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [elementToFocusOnDismiss, forceFocusInsideTrap, disabled]);
        // Cleanup lifecyle method for internalState.
        useUnmount(function () {
            // Dispose of event handlers so their closures can be garbage-collected
            if (internalState.disposeClickHandler) {
                internalState.disposeClickHandler();
                internalState.disposeClickHandler = undefined;
            }
            if (internalState.disposeFocusHandler) {
                internalState.disposeFocusHandler();
                internalState.disposeFocusHandler = undefined;
            }
            if (internalState.unmodalize) {
                internalState.unmodalize();
            }
            // Dispose of element references so the DOM Nodes can be garbage-collected
            delete internalState.previouslyFocusedElementInTrapZone;
            delete internalState.previouslyFocusedElementOutsideTrapZone;
        });
        useComponentRef(componentRef, internalState.previouslyFocusedElementInTrapZone, focus);
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: className, ref: mergedRootRef, "aria-labelledby": ariaLabelledBy, onFocusCapture: onRootFocusCapture, onFocus: onFocus, onBlur: onBlur, onBlurCapture: onRootBlurCapture }),
            React.createElement("div", tslib_1.__assign({}, bumperProps, { ref: firstBumper })),
            children,
            React.createElement("div", tslib_1.__assign({}, bumperProps, { ref: lastBumper }))));
    });
    var useUnmount = function (unmountFunction) {
        var unmountRef = React.useRef(unmountFunction);
        unmountRef.current = unmountFunction;
        React.useEffect(function () { return function () {
            if (unmountRef.current) {
                unmountRef.current();
            }
        }; }, [unmountFunction]);
    };
    exports.FocusTrapZone.displayName = COMPONENT_NAME;
    exports.FocusTrapZone.focusStack = [];
});
//# sourceMappingURL=FocusTrapZone.js.map