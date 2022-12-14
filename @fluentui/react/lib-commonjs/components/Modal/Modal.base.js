"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var FocusTrapZone_1 = require("../../FocusTrapZone");
var Modal_styles_1 = require("./Modal.styles");
var Overlay_1 = require("../../Overlay");
var Layer_1 = require("../../Layer");
var Popup_1 = require("../../Popup");
var ResponsiveMode_1 = require("../../ResponsiveMode");
var DirectionalHint_1 = require("../../common/DirectionalHint");
var Icon_1 = require("../../Icon");
var index_1 = require("../../utilities/DraggableZone/index");
var react_window_provider_1 = require("@fluentui/react-window-provider");
var react_hooks_1 = require("@fluentui/react-hooks");
var ZERO = { x: 0, y: 0 };
var DEFAULT_PROPS = {
    isOpen: false,
    isDarkOverlay: true,
    className: '',
    containerClassName: '',
};
var getClassNames = Utilities_1.classNamesFunction();
var getMoveDelta = function (ev) {
    var delta = 10;
    if (ev.shiftKey) {
        if (!ev.ctrlKey) {
            delta = 50;
        }
    }
    else if (ev.ctrlKey) {
        delta = 1;
    }
    return delta;
};
var useComponentRef = function (props, focusTrapZone) {
    React.useImperativeHandle(props.componentRef, function () { return ({
        focus: function () {
            if (focusTrapZone.current) {
                focusTrapZone.current.focus();
            }
        },
    }); }, [focusTrapZone]);
};
exports.ModalBase = React.forwardRef(function (propsWithoutDefaults, ref) {
    var _a;
    var props = Utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
    var allowTouchBodyScroll = props.allowTouchBodyScroll, className = props.className, children = props.children, containerClassName = props.containerClassName, scrollableContentClassName = props.scrollableContentClassName, elementToFocusOnDismiss = props.elementToFocusOnDismiss, firstFocusableSelector = props.firstFocusableSelector, forceFocusInsideTrap = props.forceFocusInsideTrap, ignoreExternalFocusing = props.ignoreExternalFocusing, isBlocking = props.isBlocking, isClickableOutsideFocusTrap = props.isClickableOutsideFocusTrap, isDarkOverlay = props.isDarkOverlay, onDismiss = props.onDismiss, layerProps = props.layerProps, overlay = props.overlay, isOpen = props.isOpen, titleAriaId = props.titleAriaId, styles = props.styles, subtitleAriaId = props.subtitleAriaId, theme = props.theme, topOffsetFixed = props.topOffsetFixed, responsiveMode = props.responsiveMode, 
    // eslint-disable-next-line deprecation/deprecation
    onLayerDidMount = props.onLayerDidMount, isModeless = props.isModeless, dragOptions = props.dragOptions, onDismissed = props.onDismissed, enableAriaHiddenSiblings = props.enableAriaHiddenSiblings;
    var rootRef = React.useRef(null);
    var focusTrapZone = React.useRef(null);
    var focusTrapZoneElm = React.useRef(null);
    var mergedRef = react_hooks_1.useMergedRefs(rootRef, ref);
    var modalResponsiveMode = ResponsiveMode_1.useResponsiveMode(mergedRef);
    var focusTrapZoneId = react_hooks_1.useId('ModalFocusTrapZone');
    var win = react_window_provider_1.useWindow();
    var _b = react_hooks_1.useSetTimeout(), setTimeout = _b.setTimeout, clearTimeout = _b.clearTimeout;
    var _c = React.useState(isOpen), isModalOpen = _c[0], setIsModalOpen = _c[1];
    var _d = React.useState(isOpen), isVisible = _d[0], setIsVisible = _d[1];
    var _e = React.useState(ZERO), coordinates = _e[0], setCoordinates = _e[1];
    var _f = React.useState(), modalRectangleTop = _f[0], setModalRectangleTop = _f[1];
    var _g = react_hooks_1.useBoolean(false), isModalMenuOpen = _g[0], _h = _g[1], toggleModalMenuOpen = _h.toggle, setModalMenuClose = _h.setFalse;
    var internalState = react_hooks_1.useConst(function () { return ({
        onModalCloseTimer: 0,
        allowTouchBodyScroll: allowTouchBodyScroll,
        scrollableContent: null,
        lastSetCoordinates: ZERO,
        events: new Utilities_1.EventGroup({}),
    }); });
    var keepInBounds = (dragOptions || {}).keepInBounds;
    var layerClassName = layerProps === undefined ? '' : layerProps.className;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        containerClassName: containerClassName,
        scrollableContentClassName: scrollableContentClassName,
        isOpen: isOpen,
        isVisible: isVisible,
        hasBeenOpened: internalState.hasBeenOpened,
        modalRectangleTop: modalRectangleTop,
        topOffsetFixed: topOffsetFixed,
        isModeless: isModeless,
        layerClassName: layerClassName,
        windowInnerHeight: (_a = win) === null || _a === void 0 ? void 0 : _a.innerHeight,
        isDefaultDragHandle: dragOptions && !dragOptions.dragHandleSelector,
    });
    var mergedLayerProps = tslib_1.__assign(tslib_1.__assign({ eventBubblingEnabled: false }, layerProps), { onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount, insertFirst: isModeless, className: classNames.layer });
    // Allow the user to scroll within the modal but not on the body
    var allowScrollOnModal = React.useCallback(function (elt) {
        if (elt) {
            if (internalState.allowTouchBodyScroll) {
                Utilities_1.allowOverscrollOnElement(elt, internalState.events);
            }
            else {
                Utilities_1.allowScrollOnElement(elt, internalState.events);
            }
        }
        else {
            internalState.events.off(internalState.scrollableContent);
        }
        internalState.scrollableContent = elt;
    }, [internalState]);
    var registerInitialModalPosition = function () {
        var _a;
        var dialogMain = focusTrapZoneElm.current;
        var modalRectangle = (_a = dialogMain) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (modalRectangle) {
            if (topOffsetFixed) {
                setModalRectangleTop(modalRectangle.top);
            }
            if (keepInBounds) {
                // x/y are unavailable in IE, so use the equivalent left/top
                internalState.minPosition = { x: -modalRectangle.left, y: -modalRectangle.top };
                internalState.maxPosition = { x: modalRectangle.left, y: modalRectangle.top };
            }
        }
    };
    /**
     * Clamps an axis to a specified min and max position.
     *
     * @param axis A string that represents the axis (x/y).
     * @param position The position on the axis.
     */
    var getClampedAxis = React.useCallback(function (axis, position) {
        var minPosition = internalState.minPosition, maxPosition = internalState.maxPosition;
        if (keepInBounds && minPosition && maxPosition) {
            position = Math.max(minPosition[axis], position);
            position = Math.min(maxPosition[axis], position);
        }
        return position;
    }, [keepInBounds, internalState]);
    var handleModalClose = function () {
        var _a, _b, _c;
        internalState.lastSetCoordinates = ZERO;
        setModalMenuClose();
        internalState.isInKeyboardMoveMode = false;
        setIsModalOpen(false);
        setCoordinates(ZERO);
        (_b = (_a = internalState).disposeOnKeyUp) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_c = onDismissed) === null || _c === void 0 ? void 0 : _c();
    };
    var handleDragStart = React.useCallback(function () {
        setModalMenuClose();
        internalState.isInKeyboardMoveMode = false;
    }, [internalState, setModalMenuClose]);
    var handleDrag = React.useCallback(function (ev, dragData) {
        setCoordinates(function (prevValue) { return ({
            x: getClampedAxis('x', prevValue.x + dragData.delta.x),
            y: getClampedAxis('y', prevValue.y + dragData.delta.y),
        }); });
    }, [getClampedAxis]);
    var handleDragStop = React.useCallback(function () {
        if (focusTrapZone.current) {
            focusTrapZone.current.focus();
        }
    }, []);
    var handleEnterKeyboardMoveMode = function () {
        // We need a global handleKeyDown event when we are in the move mode so that we can
        // handle the key presses and the components inside the modal do not get the events
        var handleKeyDown = function (ev) {
            if (ev.altKey && ev.ctrlKey && ev.keyCode === Utilities_1.KeyCodes.space) {
                // CTRL + ALT + SPACE is handled during keyUp
                ev.preventDefault();
                ev.stopPropagation();
                return;
            }
            if (isModalMenuOpen && (ev.altKey || ev.keyCode === Utilities_1.KeyCodes.escape)) {
                setModalMenuClose();
            }
            if (internalState.isInKeyboardMoveMode && (ev.keyCode === Utilities_1.KeyCodes.escape || ev.keyCode === Utilities_1.KeyCodes.enter)) {
                internalState.isInKeyboardMoveMode = false;
                ev.preventDefault();
                ev.stopPropagation();
            }
            if (internalState.isInKeyboardMoveMode) {
                var handledEvent = true;
                var delta_1 = getMoveDelta(ev);
                switch (ev.keyCode) {
                    /* eslint-disable no-fallthrough */
                    case Utilities_1.KeyCodes.escape:
                        setCoordinates(internalState.lastSetCoordinates);
                    case Utilities_1.KeyCodes.enter: {
                        // TODO: determine if fallthrough was intentional
                        /* eslint-enable no-fallthrough */
                        internalState.lastSetCoordinates = ZERO;
                        // setIsInKeyboardMoveMode(false);
                        break;
                    }
                    case Utilities_1.KeyCodes.up: {
                        setCoordinates(function (prevValue) { return ({ x: prevValue.x, y: getClampedAxis('y', prevValue.y - delta_1) }); });
                        break;
                    }
                    case Utilities_1.KeyCodes.down: {
                        setCoordinates(function (prevValue) { return ({ x: prevValue.x, y: getClampedAxis('y', prevValue.y + delta_1) }); });
                        break;
                    }
                    case Utilities_1.KeyCodes.left: {
                        setCoordinates(function (prevValue) { return ({ x: getClampedAxis('x', prevValue.x - delta_1), y: prevValue.y }); });
                        break;
                    }
                    case Utilities_1.KeyCodes.right: {
                        setCoordinates(function (prevValue) { return ({ x: getClampedAxis('x', prevValue.x + delta_1), y: prevValue.y }); });
                        break;
                    }
                    default: {
                        handledEvent = false;
                    }
                }
                if (handledEvent) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        internalState.lastSetCoordinates = coordinates;
        setModalMenuClose();
        internalState.isInKeyboardMoveMode = true;
        internalState.events.on(win, 'keydown', handleKeyDown, true /* useCapture */);
        internalState.disposeOnKeyDown = function () {
            internalState.events.off(win, 'keydown', handleKeyDown, true /* useCapture */);
            internalState.disposeOnKeyDown = undefined;
        };
    };
    var handleExitKeyboardMoveMode = function () {
        var _a, _b;
        internalState.lastSetCoordinates = ZERO;
        internalState.isInKeyboardMoveMode = false;
        (_b = (_a = internalState).disposeOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    var registerForKeyUp = function () {
        var handleKeyUp = function (ev) {
            // Needs to handle the CTRL + ALT + SPACE key during keyup due to FireFox bug:
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
            if (ev.altKey && ev.ctrlKey && ev.keyCode === Utilities_1.KeyCodes.space) {
                if (Utilities_1.elementContains(internalState.scrollableContent, ev.target)) {
                    toggleModalMenuOpen();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        if (!internalState.disposeOnKeyUp) {
            internalState.events.on(win, 'keyup', handleKeyUp, true /* useCapture */);
            internalState.disposeOnKeyUp = function () {
                internalState.events.off(win, 'keyup', handleKeyUp, true /* useCapture */);
                internalState.disposeOnKeyUp = undefined;
            };
        }
    };
    React.useEffect(function () {
        clearTimeout(internalState.onModalCloseTimer);
        // Opening the dialog
        if (isOpen) {
            // This must be done after the modal content has rendered
            requestAnimationFrame(function () { return setTimeout(registerInitialModalPosition, 0); });
            setIsModalOpen(true);
            // Add a keyUp handler for all key up events once the dialog is open.
            if (dragOptions) {
                registerForKeyUp();
            }
            internalState.hasBeenOpened = true;
            setIsVisible(true);
        }
        // Closing the dialog
        if (!isOpen && isModalOpen) {
            internalState.onModalCloseTimer = setTimeout(handleModalClose, parseFloat(Modal_styles_1.animationDuration) * 1000);
            setIsVisible(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run if isModalOpen or isOpen mutates.
    }, [isModalOpen, isOpen]);
    react_hooks_1.useUnmount(function () {
        internalState.events.dispose();
    });
    useComponentRef(props, focusTrapZone);
    useDebugWarnings(props);
    var modalContent = (React.createElement(FocusTrapZone_1.FocusTrapZone, { id: focusTrapZoneId, ref: focusTrapZoneElm, componentRef: focusTrapZone, className: classNames.main, elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isModeless || isClickableOutsideFocusTrap || !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: isModeless ? !isModeless : forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector, focusPreviouslyFocusedInnerElement: true, onBlur: internalState.isInKeyboardMoveMode ? handleExitKeyboardMoveMode : undefined, enableAriaHiddenSiblings: enableAriaHiddenSiblings },
        dragOptions && internalState.isInKeyboardMoveMode && (React.createElement("div", { className: classNames.keyboardMoveIconContainer }, dragOptions.keyboardMoveIconProps ? (React.createElement(Icon_1.Icon, tslib_1.__assign({}, dragOptions.keyboardMoveIconProps))) : (React.createElement(Icon_1.Icon, { iconName: "move", className: classNames.keyboardMoveIcon })))),
        React.createElement("div", { ref: allowScrollOnModal, className: classNames.scrollableContent, "data-is-scrollable": true },
            dragOptions && isModalMenuOpen && (React.createElement(dragOptions.menu, { items: [
                    { key: 'move', text: dragOptions.moveMenuItemText, onClick: handleEnterKeyboardMoveMode },
                    { key: 'close', text: dragOptions.closeMenuItemText, onClick: handleModalClose },
                ], onDismiss: setModalMenuClose, alignTargetEdge: true, coverTarget: true, directionalHint: DirectionalHint_1.DirectionalHint.topLeftEdge, directionalHintFixed: true, shouldFocusOnMount: true, target: internalState.scrollableContent })),
            children)));
    return ((isModalOpen && modalResponsiveMode >= (responsiveMode || ResponsiveMode_1.ResponsiveMode.small) && (React.createElement(Layer_1.Layer, tslib_1.__assign({ ref: mergedRef }, mergedLayerProps),
        React.createElement(Popup_1.Popup, { role: isModeless || !isBlocking ? 'dialog' : 'alertdialog', "aria-modal": !isModeless, ariaLabelledBy: titleAriaId, ariaDescribedBy: subtitleAriaId, onDismiss: onDismiss, shouldRestoreFocus: !ignoreExternalFocusing },
            React.createElement("div", { className: classNames.root, role: !isModeless ? 'document' : undefined },
                !isModeless && (React.createElement(Overlay_1.Overlay, tslib_1.__assign({ isDarkThemed: isDarkOverlay, onClick: isBlocking ? undefined : onDismiss, allowTouchBodyScroll: allowTouchBodyScroll }, overlay))),
                dragOptions ? (React.createElement(index_1.DraggableZone, { handleSelector: dragOptions.dragHandleSelector || "#" + focusTrapZoneId, preventDragSelector: "button", onStart: handleDragStart, onDragChange: handleDrag, onStop: handleDragStop, position: coordinates }, modalContent)) : (modalContent)))))) ||
        null);
});
exports.ModalBase.displayName = 'Modal';
function useDebugWarnings(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        react_hooks_1.useWarnings({
            name: 'Modal',
            props: props,
            deprecations: { onLayerDidMount: 'layerProps.onLayerDidMount' },
        });
    }
}
//# sourceMappingURL=Modal.base.js.map