"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusZone = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var FocusZone_types_1 = require("./FocusZone.types");
var utilities_1 = require("@fluentui/utilities");
var merge_styles_1 = require("@fluentui/merge-styles");
var style_utilities_1 = require("@fluentui/style-utilities");
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var focusZoneStyles;
var focusZoneClass = 'ms-FocusZone';
// Helper function that will return a class for when the root is focused
function getRootClass() {
    if (!focusZoneStyles) {
        focusZoneStyles = merge_styles_1.mergeStyles({
            selectors: {
                ':focus': {
                    outline: 'none',
                },
            },
        }, focusZoneClass);
    }
    return focusZoneStyles;
}
var _allInstances = {};
var _outerZones = new Set();
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone = /** @class */ (function (_super) {
    tslib_1.__extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        _this._mergedRef = utilities_1.createMergedRef();
        _this._onFocus = function (ev) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            var _a = _this.props, onActiveElementChanged = _a.onActiveElementChanged, 
            // eslint-disable-next-line deprecation/deprecation
            doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate, stopFocusPropagation = _a.stopFocusPropagation, 
            // eslint-disable-next-line deprecation/deprecation
            onFocusNotification = _a.onFocusNotification, onFocus = _a.onFocus, shouldFocusInnerElementWhenReceivedFocus = _a.shouldFocusInnerElementWhenReceivedFocus, defaultTabbableElement = _a.defaultTabbableElement;
            var isImmediateDescendant = _this._isImmediateDescendantOfZone(ev.target);
            var newActiveElement;
            if (isImmediateDescendant) {
                newActiveElement = ev.target;
            }
            else {
                var parentElement = ev.target;
                while (parentElement && parentElement !== _this._root.current) {
                    if (utilities_1.isElementTabbable(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
                        newActiveElement = parentElement;
                        break;
                    }
                    parentElement = utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
                }
            }
            // If an inner focusable element should be focused when FocusZone container receives focus
            if (shouldFocusInnerElementWhenReceivedFocus && ev.target === _this._root.current) {
                var maybeElementToFocus = defaultTabbableElement &&
                    typeof defaultTabbableElement === 'function' &&
                    defaultTabbableElement(_this._root.current);
                // try to focus defaultTabbable element
                if (maybeElementToFocus && utilities_1.isElementTabbable(maybeElementToFocus)) {
                    newActiveElement = maybeElementToFocus;
                    maybeElementToFocus.focus();
                }
                else {
                    // force focus on first focusable element
                    _this.focus(true);
                    if (_this._activeElement) {
                        // set to null as new active element was handled in method above
                        newActiveElement = null;
                    }
                }
            }
            var initialElementFocused = !_this._activeElement;
            // If the new active element is a child of this zone and received focus,
            // update alignment an immediate descendant
            if (newActiveElement && newActiveElement !== _this._activeElement) {
                if (isImmediateDescendant || initialElementFocused) {
                    _this._setFocusAlignment(newActiveElement, true, true);
                }
                _this._activeElement = newActiveElement;
                if (initialElementFocused) {
                    _this._updateTabIndexes();
                }
            }
            if (onActiveElementChanged) {
                onActiveElementChanged(_this._activeElement, ev);
            }
            if (stopFocusPropagation || doNotAllowFocusEventToPropagate) {
                ev.stopPropagation();
            }
            if (onFocus) {
                onFocus(ev);
            }
            else if (onFocusNotification) {
                onFocusNotification();
            }
        };
        _this._onBlur = function () {
            _this._setParkedFocus(false);
        };
        _this._onMouseDown = function (ev) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var target = ev.target;
            var path = [];
            while (target && target !== _this._root.current) {
                path.push(target);
                target = utilities_1.getParent(target, ALLOW_VIRTUAL_ELEMENTS);
            }
            while (path.length) {
                target = path.pop();
                if (target && utilities_1.isElementTabbable(target)) {
                    _this._setActiveElement(target, true);
                }
                if (utilities_1.isElementFocusZone(target)) {
                    // Stop here since the focus zone will take care of its own children.
                    break;
                }
            }
        };
        /**
         * Handle the keystrokes.
         */
        _this._onKeyDown = function (ev, theme) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke, pagingSupportDisabled = _a.pagingSupportDisabled, shouldEnterInnerZone = _a.shouldEnterInnerZone;
            if (disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (_this._getDocument().activeElement === _this._root.current && _this._isInnerZone) {
                // If this element has focus, it is being controlled by a parent.
                // Ignore the keystroke.
                return;
            }
            if (((shouldEnterInnerZone && shouldEnterInnerZone(ev)) || (isInnerZoneKeystroke && isInnerZoneKeystroke(ev))) &&
                _this._isImmediateDescendantOfZone(ev.target)) {
                // Try to focus
                var innerZone = _this._getFirstInnerZone();
                if (innerZone) {
                    if (!innerZone.focus(true)) {
                        return;
                    }
                }
                else if (utilities_1.isElementFocusSubZone(ev.target)) {
                    if (!_this.focusElement(utilities_1.getNextElement(ev.target, ev.target.firstChild, true))) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else if (ev.altKey) {
                return;
            }
            else {
                // eslint-disable-next-line @fluentui/deprecated-keyboard-event-props, deprecation/deprecation
                switch (ev.which) {
                    case utilities_1.KeyCodes.space:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    case utilities_1.KeyCodes.left:
                        if (direction !== FocusZone_types_1.FocusZoneDirection.vertical) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusLeft(theme)) {
                                break;
                            }
                        }
                        return;
                    case utilities_1.KeyCodes.right:
                        if (direction !== FocusZone_types_1.FocusZoneDirection.vertical) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusRight(theme)) {
                                break;
                            }
                        }
                        return;
                    case utilities_1.KeyCodes.up:
                        if (direction !== FocusZone_types_1.FocusZoneDirection.horizontal) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusUp()) {
                                break;
                            }
                        }
                        return;
                    case utilities_1.KeyCodes.down:
                        if (direction !== FocusZone_types_1.FocusZoneDirection.horizontal) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusDown()) {
                                break;
                            }
                        }
                        return;
                    case utilities_1.KeyCodes.pageDown:
                        if (!pagingSupportDisabled && _this._moveFocusPaging(true)) {
                            break;
                        }
                        return;
                    case utilities_1.KeyCodes.pageUp:
                        if (!pagingSupportDisabled && _this._moveFocusPaging(false)) {
                            break;
                        }
                        return;
                    case utilities_1.KeyCodes.tab:
                        if (
                        // eslint-disable-next-line deprecation/deprecation
                        _this.props.allowTabKey ||
                            _this.props.handleTabKey === FocusZone_types_1.FocusZoneTabbableElements.all ||
                            (_this.props.handleTabKey === FocusZone_types_1.FocusZoneTabbableElements.inputOnly &&
                                _this._isElementInput(ev.target))) {
                            var focusChanged = false;
                            _this._processingTabKey = true;
                            if (direction === FocusZone_types_1.FocusZoneDirection.vertical ||
                                !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
                            }
                            else {
                                var tabWithDirection = utilities_1.getRTL(theme) ? !ev.shiftKey : ev.shiftKey;
                                focusChanged = tabWithDirection ? _this._moveFocusLeft(theme) : _this._moveFocusRight(theme);
                            }
                            _this._processingTabKey = false;
                            if (focusChanged) {
                                break;
                            }
                            else if (_this.props.shouldResetActiveElementWhenTabFromZone) {
                                _this._activeElement = null;
                            }
                        }
                        return;
                    case utilities_1.KeyCodes.home:
                        if (_this._isContentEditableElement(ev.target) ||
                            (_this._isElementInput(ev.target) &&
                                !_this._shouldInputLoseFocus(ev.target, false))) {
                            return false;
                        }
                        var firstChild = _this._root.current && _this._root.current.firstChild;
                        if (_this._root.current &&
                            firstChild &&
                            _this.focusElement(utilities_1.getNextElement(_this._root.current, firstChild, true))) {
                            break;
                        }
                        return;
                    case utilities_1.KeyCodes.end:
                        if (_this._isContentEditableElement(ev.target) ||
                            (_this._isElementInput(ev.target) &&
                                !_this._shouldInputLoseFocus(ev.target, true))) {
                            return false;
                        }
                        var lastChild = _this._root.current && _this._root.current.lastChild;
                        if (_this._root.current &&
                            _this.focusElement(utilities_1.getPreviousElement(_this._root.current, lastChild, true, true, true))) {
                            break;
                        }
                        return;
                    case utilities_1.KeyCodes.enter:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    default:
                        return;
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._getHorizontalDistanceFromCenter = function (isForward, activeRect, targetRect) {
            // eslint-disable-next-line deprecation/deprecation
            var leftAlignment = _this._focusAlignment.left || _this._focusAlignment.x || 0;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            var targetRectBottom = Math.floor(targetRect.bottom);
            var activeRectTop = Math.floor(activeRect.top);
            var isValidCandidateOnpagingDown = isForward && targetRectTop > activeRectBottom;
            var isValidCandidateOnpagingUp = !isForward && targetRectBottom < activeRectTop;
            if (isValidCandidateOnpagingDown || isValidCandidateOnpagingUp) {
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    return 0;
                }
                return Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
            }
            if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return LARGE_DISTANCE_FROM_CENTER;
        };
        // Manage componentRef resolution.
        utilities_1.initializeComponentRef(_this);
        if (process.env.NODE_ENV !== 'production') {
            utilities_1.warnDeprecations('FocusZone', props, {
                rootProps: undefined,
                allowTabKey: 'handleTabKey',
                elementType: 'as',
                ariaDescribedBy: 'aria-describedby',
                ariaLabelledBy: 'aria-labelledby',
            });
        }
        _this._id = utilities_1.getId('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0,
        };
        _this._processingTabKey = false;
        return _this;
    }
    /** Used for testing purposes only. */
    FocusZone.getOuterZones = function () {
        return _outerZones.size;
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     * HEADS UP: This must not be an arrow function in order to be referentially equal among instances
     * for ref counting to work correctly!
     */
    FocusZone._onKeyDownCapture = function (ev) {
        // eslint-disable-next-line deprecation/deprecation, @fluentui/deprecated-keyboard-event-props
        if (ev.which === utilities_1.KeyCodes.tab) {
            _outerZones.forEach(function (zone) { return zone._updateTabIndexes(); });
        }
    };
    FocusZone.prototype.componentDidMount = function () {
        var root = this._root.current;
        _allInstances[this._id] = this;
        if (root) {
            this._windowElement = utilities_1.getWindow(root);
            var parentElement = utilities_1.getParent(root, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement && parentElement !== this._getDocument().body && parentElement.nodeType === 1) {
                if (utilities_1.isElementFocusZone(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                _outerZones.add(this);
                if (this._windowElement && _outerZones.size === 1) {
                    this._windowElement.addEventListener('keydown', FocusZone._onKeyDownCapture, true);
                }
            }
            this._root.current && this._root.current.addEventListener('blur', this._onBlur, true);
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultTabbableElement && typeof this.props.defaultTabbableElement === 'string') {
                this._activeElement = this._getDocument().querySelector(this.props.defaultTabbableElement);
                // eslint-disable-next-line deprecation/deprecation
            }
            else if (this.props.defaultActiveElement) {
                // eslint-disable-next-line deprecation/deprecation
                this._activeElement = this._getDocument().querySelector(this.props.defaultActiveElement);
            }
            if (this.props.shouldFocusOnMount) {
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentDidUpdate = function () {
        var root = this._root.current;
        var doc = this._getDocument();
        if (doc &&
            this._lastIndexPath &&
            (doc.activeElement === doc.body ||
                doc.activeElement === null ||
                (!this.props.preventFocusRestoration && doc.activeElement === root))) {
            // The element has been removed after the render, attempt to restore focus.
            var elementToFocus = utilities_1.getFocusableByIndexPath(root, this._lastIndexPath);
            if (elementToFocus) {
                this._setActiveElement(elementToFocus, true);
                elementToFocus.focus();
                this._setParkedFocus(false);
            }
            else {
                // We had a focus path to restore, but now that path is unresolvable. Park focus
                // on the container until we can try again.
                this._setParkedFocus(true);
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
        if (!this._isInnerZone) {
            _outerZones.delete(this);
            // If this is the last outer zone, remove the keydown listener.
            if (this._windowElement && _outerZones.size === 0) {
                this._windowElement.removeEventListener('keydown', FocusZone._onKeyDownCapture, true);
            }
        }
        if (this._root.current) {
            this._root.current.removeEventListener('blur', this._onBlur, true);
        }
        this._activeElement = null;
        this._defaultFocusElement = null;
    };
    FocusZone.prototype.render = function () {
        var _this = this;
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, tag = _a.as, elementType = _a.elementType, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = utilities_1.getNativeProps(this.props, utilities_1.htmlElementProperties);
        var Tag = tag || elementType || 'div';
        // Note, right before rendering/reconciling proceeds, we need to record if focus
        // was in the zone before the update. This helper will track this and, if focus
        // was actually in the zone, what the index path to the element is at this time.
        // Then, later in componentDidUpdate, we can evaluate if we need to restore it in
        // the case the element was removed.
        this._evaluateFocusBeforeRender();
        // Only support RTL defined in global theme, not contextual theme/RTL.
        var theme = style_utilities_1.getTheme();
        return (React.createElement(Tag, tslib_1.__assign({ "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy }, divProps, rootProps, { 
            // Once the getClassName correctly memoizes inputs this should
            // be replaced so that className is passed to getRootClass and is included there so
            // the class names will always be in the same order.
            className: utilities_1.css(getRootClass(), className), 
            // eslint-disable-next-line deprecation/deprecation
            ref: this._mergedRef(this.props.elementRef, this._root), "data-focuszone-id": this._id, 
            // eslint-disable-next-line react/jsx-no-bind
            onKeyDown: function (ev) { return _this._onKeyDown(ev, theme); }, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root.current) {
            if (!forceIntoFirstElement &&
                this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root.current);
                if (ownerZoneElement !== this._root.current) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root.current);
                }
                return false;
            }
            else if (!forceIntoFirstElement &&
                this._activeElement &&
                utilities_1.elementContains(this._root.current, this._activeElement) &&
                utilities_1.isElementTabbable(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.current.firstChild;
                return this.focusElement(utilities_1.getNextElement(this._root.current, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to the last tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusLast = function () {
        if (this._root.current) {
            var lastChild = this._root.current && this._root.current.lastChild;
            return this.focusElement(utilities_1.getPreviousElement(this._root.current, lastChild, true, true, true));
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * shouldReceiveFocus to create delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @param forceAlignment - If true, focus alignment will be set according to the element provided.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element, forceAlignment) {
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, onBeforeFocus = _a.onBeforeFocus, shouldReceiveFocus = _a.shouldReceiveFocus;
        if ((shouldReceiveFocus && !shouldReceiveFocus(element)) || (onBeforeFocus && !onBeforeFocus(element))) {
            return false;
        }
        if (element) {
            // when we set focus to a specific child, we should recalculate the alignment depending on its position.
            this._setActiveElement(element, forceAlignment);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    /**
     * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference,
     * rather than a center based on the last horizontal motion.
     * @param point - the new reference point.
     */
    FocusZone.prototype.setFocusAlignment = function (point) {
        this._focusAlignment = point;
    };
    FocusZone.prototype._evaluateFocusBeforeRender = function () {
        var root = this._root.current;
        var doc = this._getDocument();
        if (doc) {
            var focusedElement = doc.activeElement;
            // Only update the index path if we are not parked on the root.
            if (focusedElement !== root) {
                var shouldRestoreFocus = utilities_1.elementContains(root, focusedElement, false);
                this._lastIndexPath = shouldRestoreFocus ? utilities_1.getElementIndexPath(root, focusedElement) : undefined;
            }
        }
    };
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    FocusZone.prototype._setParkedFocus = function (isParked) {
        var root = this._root.current;
        if (root && this._isParked !== isParked) {
            this._isParked = isParked;
            if (isParked) {
                if (!this.props.allowFocusRoot) {
                    this._parkedTabIndex = root.getAttribute('tabindex');
                    root.setAttribute('tabindex', '-1');
                }
                root.focus();
            }
            else if (!this.props.allowFocusRoot) {
                if (this._parkedTabIndex) {
                    root.setAttribute('tabindex', this._parkedTabIndex);
                    this._parkedTabIndex = undefined;
                }
                else {
                    root.removeAttribute('tabindex');
                }
            }
        }
    };
    FocusZone.prototype._setActiveElement = function (element, forceAlignment) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (utilities_1.isElementFocusZone(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment || forceAlignment) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    FocusZone.prototype._preventDefaultWhenHandled = function (ev) {
        this.props.preventDefaultWhenHandled && ev.preventDefault();
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root.current || !this.props.shouldRaiseClicks) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                utilities_1.raiseClick(target);
                return true;
            }
            target = utilities_1.getParent(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root.current);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root.current;
        if (!rootElement) {
            return null;
        }
        if (utilities_1.isElementFocusZone(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (utilities_1.isElementFocusZone(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZone_types_1.FocusZoneDirection.bidirectional;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward
                ? utilities_1.getNextElement(this._root.current, element)
                : utilities_1.getPreviousElement(this._root.current, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(utilities_1.getNextElement(this._root.current, this._root.current.firstElementChild, true));
            }
            else {
                return this.focusElement(utilities_1.getPreviousElement(this._root.current, this._root.current.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var _this = this;
        var targetTop = -1;
        // eslint-disable-next-line deprecation/deprecation
        var leftAlignment = this._focusAlignment.left || this._focusAlignment.x || 0;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var _this = this;
        var targetTop = -1;
        // eslint-disable-next-line deprecation/deprecation
        var leftAlignment = this._focusAlignment.left || this._focusAlignment.x || 0;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function (theme) {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(utilities_1.getRTL(theme), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (utilities_1.getRTL(theme)) {
                // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
                // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
                // This is important, because we want to be comparing the top of the target rect
                // with the bottom of the active rect.
                topBottomComparison = parseFloat(targetRect.top.toFixed(3)) < parseFloat(activeRect.bottom.toFixed(3));
            }
            else {
                topBottomComparison = parseFloat(targetRect.bottom.toFixed(3)) > parseFloat(activeRect.top.toFixed(3));
            }
            if (topBottomComparison &&
                targetRect.right <= activeRect.right &&
                _this.props.direction !== FocusZone_types_1.FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function (theme) {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(!utilities_1.getRTL(theme), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (utilities_1.getRTL(theme)) {
                // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
                // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
                // This is important, because we want to be comparing the bottom of the target rect
                // with the top of the active rect.
                topBottomComparison = parseFloat(targetRect.bottom.toFixed(3)) > parseFloat(activeRect.top.toFixed(3));
            }
            else {
                topBottomComparison = parseFloat(targetRect.top.toFixed(3)) < parseFloat(activeRect.bottom.toFixed(3));
            }
            if (topBottomComparison &&
                targetRect.left >= activeRect.left &&
                _this.props.direction !== FocusZone_types_1.FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusPaging = function (isForward, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var scrollableParent = utilities_1.findScrollableParent(element);
        if (!scrollableParent) {
            return false;
        }
        var candidateDistance = -1;
        var candidateElement = undefined;
        var targetTop = -1;
        var targetBottom = -1;
        var pagesize = scrollableParent.clientHeight;
        var activeRect = element.getBoundingClientRect();
        do {
            element = isForward
                ? utilities_1.getNextElement(this._root.current, element)
                : utilities_1.getPreviousElement(this._root.current, element);
            if (element) {
                var targetRect = element.getBoundingClientRect();
                var targetRectTop = Math.floor(targetRect.top);
                var activeRectBottom = Math.floor(activeRect.bottom);
                var targetRectBottom = Math.floor(targetRect.bottom);
                var activeRectTop = Math.floor(activeRect.top);
                var elementDistance = this._getHorizontalDistanceFromCenter(isForward, activeRect, targetRect);
                var isElementPassedPageSizeOnPagingDown = isForward && targetRectTop > activeRectBottom + pagesize;
                var isElementPassedPageSizeOnPagingUp = !isForward && targetRectBottom < activeRectTop - pagesize;
                if (isElementPassedPageSizeOnPagingDown || isElementPassedPageSizeOnPagingUp) {
                    break;
                }
                if (elementDistance > -1) {
                    // for paging down
                    if (isForward && targetRectTop > targetTop) {
                        targetTop = targetRectTop;
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    else if (!isForward && targetRectBottom < targetBottom) {
                        // for paging up
                        targetBottom = targetRectBottom;
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    else if (candidateDistance === -1 || elementDistance <= candidateDistance) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                }
            }
        } while (element);
        var changedFocus = false;
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
            this._setFocusAlignment(candidateElement, false, true);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(utilities_1.getNextElement(this._root.current, this._root.current.firstElementChild, true));
            }
            return this.focusElement(utilities_1.getPreviousElement(this._root.current, this._root.current.lastElementChild, true, true, true));
        }
        return changedFocus;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZone_types_1.FocusZoneDirection.bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + rect.width / 2;
            var top_1 = rect.top + rect.height / 2;
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root.current;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = utilities_1.getParent(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root.current && parentElement !== this._getDocument().body) {
            if (utilities_1.isElementFocusZone(parentElement)) {
                return parentElement;
            }
            parentElement = utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return parentElement;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!this._activeElement &&
            this.props.defaultTabbableElement &&
            typeof this.props.defaultTabbableElement === 'function') {
            this._activeElement = this.props.defaultTabbableElement(this._root.current);
        }
        if (!element && this._root.current) {
            this._defaultFocusElement = null;
            element = this._root.current;
            if (this._activeElement && !utilities_1.elementContains(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !utilities_1.isElementTabbable(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element && element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!utilities_1.isElementFocusZone(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (utilities_1.isElementTabbable(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone &&
                        ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                        this._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone &&
                    ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                    this._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isContentEditableElement = function (element) {
        return element && element.getAttribute('contenteditable') === 'true';
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element &&
            element.tagName &&
            (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        // If a tab was used, we want to focus on the next element.
        if (!this._processingTabKey &&
            element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            var isReadonly = element.readOnly;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward and not readOnly.
            // 3. when selection start is not the end of length, it is forward and not readOnly.
            // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit
            // tab) and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is
            // determined by calling the callback shouldInputLoseFocusOnArrowKey
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward && !isReadonly) ||
                (selectionStart !== inputValue.length && isForward && !isReadonly) ||
                (!!this.props.handleTabKey &&
                    !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element)))) {
                return false;
            }
        }
        return true;
    };
    FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
        return this.props.checkForNoWrap ? utilities_1.shouldWrapFocus(element, noWrapDataAttribute) : true;
    };
    /**
     * Returns true if the element is a descendant of the FocusZone through a React portal.
     */
    FocusZone.prototype._portalContainsElement = function (element) {
        return element && !!this._root.current && utilities_1.portalContainsElement(element, this._root.current);
    };
    FocusZone.prototype._getDocument = function () {
        return utilities_1.getDocument(this._root.current);
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: FocusZone_types_1.FocusZoneDirection.bidirectional,
        shouldRaiseClicks: true,
    };
    return FocusZone;
}(React.Component));
exports.FocusZone = FocusZone;
//# sourceMappingURL=FocusZone.js.map