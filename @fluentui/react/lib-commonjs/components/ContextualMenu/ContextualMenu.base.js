"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_types_1 = require("./ContextualMenu.types");
var DirectionalHint_1 = require("../../common/DirectionalHint");
var FocusZone_1 = require("../../FocusZone");
var Utilities_1 = require("../../Utilities");
var index_1 = require("../../utilities/contextualMenu/index");
var Callout_1 = require("../../Callout");
var ContextualMenuItem_1 = require("./ContextualMenuItem");
var index_2 = require("./ContextualMenuItemWrapper/index");
var Styling_1 = require("../../Styling");
var ContextualMenu_classNames_1 = require("./ContextualMenu.classNames");
var react_hooks_1 = require("@fluentui/react-hooks");
var ResponsiveMode_1 = require("../../ResponsiveMode");
var index_3 = require("../../utilities/MenuContext/index");
var getClassNames = Utilities_1.classNamesFunction();
var getContextualMenuItemClassNames = Utilities_1.classNamesFunction();
// The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.
var DEFAULT_PROPS = {
    items: [],
    shouldFocusOnMount: true,
    gapSpace: 0,
    directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
    beakWidth: 16,
};
function getSubmenuItems(item) {
    return item.subMenuProps ? item.subMenuProps.items : item.items;
}
exports.getSubmenuItems = getSubmenuItems;
/**
 * Returns true if a list of menu items can contain a checkbox
 */
function canAnyMenuItemsCheck(items) {
    return items.some(function (item) {
        if (item.canCheck) {
            return true;
        }
        // If the item is a section, check if any of the items in the section can check.
        if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) { return submenuItem.canCheck === true; })) {
            return true;
        }
        return false;
    });
}
exports.canAnyMenuItemsCheck = canAnyMenuItemsCheck;
var NavigationIdleDelay = 250; /* ms */
var COMPONENT_NAME = 'ContextualMenu';
var _getMenuItemStylesFunction = Utilities_1.memoizeFunction(function () {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return function (styleProps) {
        return Styling_1.concatStyleSetsWithProps.apply(void 0, tslib_1.__spreadArrays([styleProps, ContextualMenu_classNames_1.getItemStyles], styles));
    };
});
function useVisibility(props, targetWindow) {
    var _a = props.hidden, hidden = _a === void 0 ? false : _a, onMenuDismissed = props.onMenuDismissed, onMenuOpened = props.onMenuOpened;
    var previousHidden = react_hooks_1.usePrevious(hidden);
    var onMenuOpenedRef = React.useRef(onMenuOpened);
    var onMenuClosedRef = React.useRef(onMenuDismissed);
    var propsRef = React.useRef(props);
    onMenuOpenedRef.current = onMenuOpened;
    onMenuClosedRef.current = onMenuDismissed;
    propsRef.current = props;
    React.useEffect(function () {
        var _a, _b, _c, _d;
        // Don't issue dismissed callbacks on initial mount
        if (hidden && previousHidden === false) {
            (_b = (_a = onMenuClosedRef).current) === null || _b === void 0 ? void 0 : _b.call(_a, propsRef.current);
        }
        else if (!hidden && previousHidden !== false) {
            (_d = (_c = onMenuOpenedRef).current) === null || _d === void 0 ? void 0 : _d.call(_c, propsRef.current);
        }
    }, [hidden, previousHidden]);
    // Issue onDismissedCallback on unmount
    React.useEffect(function () { return function () { var _a, _b; return (_b = (_a = onMenuClosedRef).current) === null || _b === void 0 ? void 0 : _b.call(_a, propsRef.current); }; }, []);
}
function useSubMenuState(_a) {
    var hidden = _a.hidden;
    var _b = React.useState(), expandedMenuItemKey = _b[0], setExpandedMenuItemKey = _b[1];
    var _c = React.useState(), submenuTarget = _c[0], setSubmenuTarget = _c[1];
    /** True if the menu was expanded by mouse click OR hover (as opposed to by keyboard) */
    var _d = React.useState(), expandedByMouseClick = _d[0], setExpandedByMouseClick = _d[1];
    var closeSubMenu = React.useCallback(function () {
        setExpandedByMouseClick(undefined);
        setExpandedMenuItemKey(undefined);
        setSubmenuTarget(undefined);
    }, []);
    var openSubMenu = React.useCallback(function (_a, target, openedByMouseClick) {
        var submenuItemKey = _a.key;
        if (expandedMenuItemKey === submenuItemKey) {
            return;
        }
        target.focus();
        setExpandedByMouseClick(openedByMouseClick);
        setExpandedMenuItemKey(submenuItemKey);
        setSubmenuTarget(target);
    }, [expandedMenuItemKey]);
    React.useEffect(function () {
        if (hidden) {
            closeSubMenu();
        }
    }, [hidden, closeSubMenu]);
    return [expandedMenuItemKey, submenuTarget, expandedByMouseClick, openSubMenu, closeSubMenu];
}
function useShouldUpdateFocusOnMouseMove(_a) {
    var delayUpdateFocusOnHover = _a.delayUpdateFocusOnHover, hidden = _a.hidden;
    var shouldUpdateFocusOnMouseEvent = React.useRef(!delayUpdateFocusOnHover);
    var gotMouseMove = React.useRef(false);
    React.useEffect(function () {
        shouldUpdateFocusOnMouseEvent.current = !delayUpdateFocusOnHover;
        gotMouseMove.current = hidden ? false : !delayUpdateFocusOnHover && gotMouseMove.current;
    }, [delayUpdateFocusOnHover, hidden]);
    var onMenuFocusCapture = React.useCallback(function () {
        if (delayUpdateFocusOnHover) {
            shouldUpdateFocusOnMouseEvent.current = true;
        }
    }, [delayUpdateFocusOnHover]);
    return [shouldUpdateFocusOnMouseEvent, gotMouseMove, onMenuFocusCapture];
}
exports.ContextualMenuBase = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
    var _a = Utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults), ref = _a.ref, props = tslib_1.__rest(_a, ["ref"]);
    var rootRef = React.useRef(null);
    var hostElement = react_hooks_1.useMergedRefs(rootRef, forwardedRef);
    var _b = react_hooks_1.useTarget(props.target, hostElement), targetRef = _b[0], targetWindow = _b[1];
    var _c = useSubMenuState(props), expandedMenuItemKey = _c[0], submenuTarget = _c[1], expandedByMouseClick = _c[2], openSubMenu = _c[3], closeSubMenu = _c[4];
    var _d = useShouldUpdateFocusOnMouseMove(props), shouldUpdateFocusOnMouseEvent = _d[0], gotMouseMove = _d[1], onMenuFocusCapture = _d[2];
    var responsiveMode = ResponsiveMode_1.useResponsiveMode(hostElement);
    useVisibility(props, targetWindow);
    return (React.createElement(ContextualMenuInternal, tslib_1.__assign({}, props, { hoisted: {
            hostElement: hostElement,
            targetRef: targetRef,
            targetWindow: targetWindow,
            expandedMenuItemKey: expandedMenuItemKey,
            submenuTarget: submenuTarget,
            expandedByMouseClick: expandedByMouseClick,
            openSubMenu: openSubMenu,
            closeSubMenu: closeSubMenu,
            shouldUpdateFocusOnMouseEvent: shouldUpdateFocusOnMouseEvent,
            gotMouseMove: gotMouseMove,
            onMenuFocusCapture: onMenuFocusCapture,
        }, responsiveMode: responsiveMode })));
});
exports.ContextualMenuBase.displayName = 'ContextualMenuBase';
var ContextualMenuInternal = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuInternal, _super);
    function ContextualMenuInternal(props) {
        var _this = _super.call(this, props) || this;
        _this._mounted = false;
        _this.dismiss = function (ev, dismissAll) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev, dismissAll);
            }
        };
        _this._tryFocusPreviousActiveElement = function (options) {
            var _a, _b;
            if (options && options.documentContainsFocus && _this._previousActiveElement) {
                // Make sure that the focus method actually exists
                // In some cases the object might exist but not be a real element.
                // This is primarily for IE 11 and should be removed once IE 11 is no longer in use.
                (_b = (_a = _this._previousActiveElement).focus) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        };
        _this._onRenderMenuList = function (menuListProps, defaultRender) {
            var indexCorrection = 0;
            var items = menuListProps.items, totalItemCount = menuListProps.totalItemCount, hasCheckmarks = menuListProps.hasCheckmarks, hasIcons = menuListProps.hasIcons;
            return (React.createElement("ul", { className: _this._classNames.list, onKeyDown: _this._onKeyDown, onKeyUp: _this._onKeyUp, role: 'presentation' }, items.map(function (item, index) {
                var menuItem = _this._renderMenuItem(item, index, indexCorrection, totalItemCount, hasCheckmarks, hasIcons);
                if (item.itemType !== ContextualMenu_types_1.ContextualMenuItemType.Divider && item.itemType !== ContextualMenu_types_1.ContextualMenuItemType.Header) {
                    var indexIncrease = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                    indexCorrection += indexIncrease;
                }
                return menuItem;
            })));
        };
        /**
         * !!!IMPORTANT!!! Avoid mutating `item: IContextualMenuItem` argument. It will
         * cause the menu items to always re-render because the component update is based on shallow comparison.
         */
        _this._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
            var _a;
            var renderedItems = [];
            var iconProps = item.iconProps || { iconName: 'None' };
            var getItemClassNames = item.getItemClassNames, // eslint-disable-line deprecation/deprecation
            itemProps = item.itemProps;
            var styles = itemProps ? itemProps.styles : undefined;
            var expandedMenuItemKey = _this.props.hoisted.expandedMenuItemKey;
            // We only send a dividerClassName when the item to be rendered is a divider.
            // For all other cases, the default divider style is used.
            var dividerClassName = item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Divider ? item.className : undefined;
            var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
            // eslint-disable-next-line deprecation/deprecation
            var itemClassNames;
            // IContextualMenuItem#getItemClassNames for backwards compatibility
            // otherwise uses mergeStyles for class names.
            if (getItemClassNames) {
                itemClassNames = getItemClassNames(_this.props.theme, index_1.isItemDisabled(item), expandedMenuItemKey === item.key, !!index_1.getIsChecked(item), !!item.href, iconProps.iconName !== 'None', item.className, dividerClassName, iconProps.className, subMenuIconClassName, item.primaryDisabled);
            }
            else {
                var itemStyleProps = {
                    theme: _this.props.theme,
                    disabled: index_1.isItemDisabled(item),
                    expanded: expandedMenuItemKey === item.key,
                    checked: !!index_1.getIsChecked(item),
                    isAnchorLink: !!item.href,
                    knownIcon: iconProps.iconName !== 'None',
                    itemClassName: item.className,
                    dividerClassName: dividerClassName,
                    iconClassName: iconProps.className,
                    subMenuClassName: subMenuIconClassName,
                    primaryDisabled: item.primaryDisabled,
                };
                // We need to generate default styles then override if styles are provided
                // since the ContextualMenu currently handles item classNames.
                itemClassNames = getContextualMenuItemClassNames(_getMenuItemStylesFunction((_a = _this._classNames.subComponentStyles) === null || _a === void 0 ? void 0 : _a.menuItem, styles), itemStyleProps);
            }
            // eslint-disable-next-line deprecation/deprecation
            if (item.text === '-' || item.name === '-') {
                item.itemType = ContextualMenu_types_1.ContextualMenuItemType.Divider;
            }
            switch (item.itemType) {
                case ContextualMenu_types_1.ContextualMenuItemType.Divider:
                    renderedItems.push(_this._renderSeparator(index, itemClassNames));
                    break;
                case ContextualMenu_types_1.ContextualMenuItemType.Header:
                    renderedItems.push(_this._renderSeparator(index, itemClassNames));
                    var headerItem = _this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);
                    renderedItems.push(_this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
                    break;
                case ContextualMenu_types_1.ContextualMenuItemType.Section:
                    renderedItems.push(_this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
                    break;
                default:
                    var menuItem = _this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
                    renderedItems.push(_this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
                    break;
            }
            // Since multiple nodes *could* be rendered, wrap them all in a fragment with this item's key.
            // This ensures the reconciler handles multi-item output per-node correctly and does not re-mount content.
            return React.createElement(React.Fragment, { key: item.key }, renderedItems);
        };
        _this._defaultMenuItemRenderer = function (item) {
            var index = item.index, focusableElementIndex = item.focusableElementIndex, totalItemCount = item.totalItemCount, hasCheckmarks = item.hasCheckmarks, hasIcons = item.hasIcons;
            return _this._renderMenuItem(item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        };
        _this._onKeyDown = function (ev) {
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            // On Mac, pressing escape dismisses all levels of native context menus
            // eslint-disable-next-line deprecation/deprecation
            var dismissAllMenus = ev.which === Utilities_1.KeyCodes.escape && (Utilities_1.isMac() || Utilities_1.isIOS());
            return _this._keyHandler(ev, _this._shouldHandleKeyDown, dismissAllMenus);
        };
        _this._shouldHandleKeyDown = function (ev) {
            return (
            // eslint-disable-next-line deprecation/deprecation
            ev.which === Utilities_1.KeyCodes.escape ||
                _this._shouldCloseSubMenu(ev) ||
                // eslint-disable-next-line deprecation/deprecation
                (ev.which === Utilities_1.KeyCodes.up && (ev.altKey || ev.metaKey)));
        };
        _this._onKeyUp = function (ev) {
            return _this._keyHandler(ev, _this._shouldHandleKeyUp, true /* dismissAllMenus */);
        };
        /**
         * We close the menu on key up only if ALL of the following are true:
         * - Most recent key down was alt or meta (command)
         * - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
         *   expand/collapse the menu)
         * - We're not on a Mac (or iOS)
         *
         * This is because on Windows, pressing alt moves focus to the application menu bar or similar,
         * closing any open context menus. There is not a similar behavior on Macs.
         */
        _this._shouldHandleKeyUp = function (ev) {
            var keyPressIsAltOrMetaAlone = _this._lastKeyDownWasAltOrMeta && _this._isAltOrMeta(ev);
            _this._lastKeyDownWasAltOrMeta = false;
            return !!keyPressIsAltOrMetaAlone && !(Utilities_1.isIOS() || Utilities_1.isMac());
        };
        /**
         * Calls `shouldHandleKey` to determine whether the keyboard event should be handled;
         * if so, stops event propagation and dismisses menu(s).
         * @param ev - The keyboard event.
         * @param shouldHandleKey - Returns whether we should handle this keyboard event.
         * @param dismissAllMenus - If true, dismiss all menus. Otherwise, dismiss only the current menu.
         * Only does anything if `shouldHandleKey` returns true.
         * @returns Whether the event was handled.
         */
        _this._keyHandler = function (ev, shouldHandleKey, dismissAllMenus) {
            var handled = false;
            if (shouldHandleKey(ev)) {
                _this.dismiss(ev, dismissAllMenus);
                ev.preventDefault();
                ev.stopPropagation();
                handled = true;
            }
            return handled;
        };
        /**
         * Checks if the submenu should be closed
         */
        _this._shouldCloseSubMenu = function (ev) {
            var submenuCloseKey = Utilities_1.getRTL(_this.props.theme) ? Utilities_1.KeyCodes.right : Utilities_1.KeyCodes.left;
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which !== submenuCloseKey || !_this.props.isSubMenu) {
                return false;
            }
            return (_this._adjustedFocusZoneProps.direction === FocusZone_1.FocusZoneDirection.vertical ||
                (!!_this._adjustedFocusZoneProps.checkForNoWrap &&
                    !Utilities_1.shouldWrapFocus(ev.target, 'data-no-horizontal-wrap')));
        };
        _this._onMenuKeyDown = function (ev) {
            // Mark as handled if onKeyDown returns true (for handling collapse cases)
            // or if we are attempting to expand a submenu
            var handled = _this._onKeyDown(ev);
            var hostElement = _this.props.hoisted.hostElement;
            if (handled || !hostElement.current) {
                return;
            }
            // If we have a modifier key being pressed, we do not want to move focus.
            // Otherwise, handle up and down keys.
            var hasModifier = !!(ev.altKey || ev.metaKey);
            // eslint-disable-next-line deprecation/deprecation
            var isUp = ev.which === Utilities_1.KeyCodes.up;
            // eslint-disable-next-line deprecation/deprecation
            var isDown = ev.which === Utilities_1.KeyCodes.down;
            if (!hasModifier && (isUp || isDown)) {
                var elementToFocus = isUp
                    ? Utilities_1.getLastFocusable(hostElement.current, hostElement.current.lastChild, true)
                    : Utilities_1.getFirstFocusable(hostElement.current, hostElement.current.firstChild, true);
                if (elementToFocus) {
                    elementToFocus.focus();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                _this._async.clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = _this._async.setTimeout(function () {
                _this._isScrollIdle = true;
            }, NavigationIdleDelay);
        };
        _this._onItemMouseEnterBase = function (item, ev, target) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onItemMouseMoveBase = function (item, ev, target) {
            var _a;
            var targetElement = ev.currentTarget;
            var _b = _this.props.hoisted, shouldUpdateFocusOnMouseEvent = _b.shouldUpdateFocusOnMouseEvent, gotMouseMove = _b.gotMouseMove, targetWindow = _b.targetWindow;
            // Always do this check to make sure we record a mouseMove if needed (even if we are timed out)
            if (shouldUpdateFocusOnMouseEvent.current) {
                gotMouseMove.current = true;
            }
            else {
                return;
            }
            if (!_this._isScrollIdle ||
                _this._enterTimerId !== undefined ||
                targetElement === ((_a = targetWindow) === null || _a === void 0 ? void 0 : _a.document.activeElement)) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onMouseItemLeave = function (item, ev) {
            var _a;
            var _b = _this.props.hoisted, expandedMenuItemKey = _b.expandedMenuItemKey, hostElement = _b.hostElement;
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
            if (expandedMenuItemKey !== undefined) {
                return;
            }
            /**
             * IE11 focus() method forces parents to scroll to top of element.
             * Edge and IE expose a setActive() function for focusable divs that
             * sets the page focus but does not scroll the parent element.
             */
            if (hostElement.current.setActive) {
                try {
                    hostElement.current.setActive();
                }
                catch (e) {
                    /* no-op */
                }
            }
            else {
                (_a = hostElement.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        };
        _this._onItemMouseDown = function (item, ev) {
            if (item.onMouseDown) {
                item.onMouseDown(item, ev);
            }
        };
        _this._onItemClick = function (item, ev) {
            _this._onItemClickBase(item, ev, ev.currentTarget);
        };
        _this._onItemClickBase = function (item, ev, target) {
            var items = getSubmenuItems(item);
            var _a = _this.props.hoisted, expandedMenuItemKey = _a.expandedMenuItemKey, openSubMenu = _a.openSubMenu;
            // Cancel a async menu item hover timeout action from being taken and instead
            // just trigger the click event instead.
            _this._cancelSubMenuTimer();
            if (!index_1.hasSubmenu(item) && (!items || !items.length)) {
                // This is an item without a menu. Click it.
                _this._executeItemClick(item, ev);
            }
            else {
                if (item.key !== expandedMenuItemKey) {
                    // This has a collapsed sub menu. Expand it.
                    openSubMenu(item, target, 
                    // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                    // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                    // between a real click event and a keypress event (detail should be the number of mouse clicks).
                    // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
                    // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
                    // and "" for pressing "Enter" with Narrator on.
                    ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse');
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onAnchorClick = function (item, ev) {
            _this._executeItemClick(item, ev);
            ev.stopPropagation();
        };
        _this._executeItemClick = function (item, ev) {
            if (item.disabled || item.isDisabled) {
                return;
            }
            var dismiss = false;
            if (item.onClick) {
                dismiss = !!item.onClick(ev, item);
            }
            else if (_this.props.onItemClick) {
                dismiss = !!_this.props.onItemClick(ev, item);
            }
            if (dismiss || !ev.defaultPrevented) {
                _this.dismiss(ev, true);
            }
        };
        _this._onItemKeyDown = function (item, ev) {
            var openKey = Utilities_1.getRTL(_this.props.theme) ? Utilities_1.KeyCodes.left : Utilities_1.KeyCodes.right;
            if (!item.disabled &&
                // eslint-disable-next-line deprecation/deprecation
                (ev.which === openKey || ev.which === Utilities_1.KeyCodes.enter || (ev.which === Utilities_1.KeyCodes.down && (ev.altKey || ev.metaKey)))) {
                _this.props.hoisted.openSubMenu(item, ev.currentTarget, false);
                ev.preventDefault();
            }
        };
        // Cancel a async menu item hover timeout action from being taken and instead
        // do new upcoming behavior
        _this._cancelSubMenuTimer = function () {
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
        };
        /**
         * This function is called ASYNCHRONOUSLY, and so there is a chance it is called
         * after the component is unmounted. The _mounted property is added to prevent
         * from calling setState() after unmount. Do NOT copy this pattern in synchronous
         * code.
         */
        _this._onSubMenuDismiss = function (ev, dismissAll) {
            if (dismissAll) {
                _this.dismiss(ev, dismissAll);
            }
            else if (_this._mounted) {
                _this.props.hoisted.closeSubMenu();
            }
        };
        _this._onPointerAndTouchEvent = function (ev) {
            _this._cancelSubMenuTimer();
        };
        _this._async = new Utilities_1.Async(_this);
        _this._events = new Utilities_1.EventGroup(_this);
        Utilities_1.initializeComponentRef(_this);
        Utilities_1.warnDeprecations(COMPONENT_NAME, props, {
            getMenuClassNames: 'styles',
        });
        _this.state = {
            contextualMenuItems: undefined,
            subMenuId: Utilities_1.getId('ContextualMenu'),
        };
        _this._id = props.id || Utilities_1.getId('ContextualMenu');
        _this._isScrollIdle = true;
        return _this;
    }
    ContextualMenuInternal.prototype.shouldComponentUpdate = function (newProps, newState) {
        if (!newProps.shouldUpdateWhenHidden && this.props.hidden && newProps.hidden) {
            // Do not update when hidden.
            return false;
        }
        return !Utilities_1.shallowCompare(this.props, newProps) || !Utilities_1.shallowCompare(this.state, newState);
    };
    ContextualMenuInternal.prototype.getSnapshotBeforeUpdate = function (prevProps) {
        var hoisted = this.props.hoisted;
        if (this._isHidden(prevProps) !== this._isHidden(this.props)) {
            if (this._isHidden(this.props)) {
                this._onMenuClosed();
            }
            else {
                this._previousActiveElement = hoisted.targetWindow
                    ? hoisted.targetWindow.document.activeElement
                    : undefined;
            }
        }
        return null;
    };
    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    ContextualMenuInternal.prototype.componentDidMount = function () {
        var _a = this.props, hidden = _a.hidden, hoisted = _a.hoisted;
        if (!hidden) {
            this._previousActiveElement = hoisted.targetWindow
                ? hoisted.targetWindow.document.activeElement
                : undefined;
        }
        this._mounted = true;
    };
    // Invoked immediately before a component is unmounted from the DOM.
    ContextualMenuInternal.prototype.componentWillUnmount = function () {
        if (this.props.onMenuDismissed) {
            this.props.onMenuDismissed(this.props);
        }
        this._events.dispose();
        this._async.dispose();
        this._mounted = false;
    };
    ContextualMenuInternal.prototype.render = function () {
        var _this = this;
        var isBeakVisible = this.props.isBeakVisible;
        var _a = this.props, items = _a.items, labelElementId = _a.labelElementId, id = _a.id, className = _a.className, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, alignTargetEdge = _a.alignTargetEdge, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, target = _a.target, bounds = _a.bounds, useTargetWidth = _a.useTargetWidth, useTargetAsMinWidth = _a.useTargetAsMinWidth, directionalHintFixed = _a.directionalHintFixed, shouldFocusOnMount = _a.shouldFocusOnMount, shouldFocusOnContainer = _a.shouldFocusOnContainer, title = _a.title, styles = _a.styles, theme = _a.theme, calloutProps = _a.calloutProps, _b = _a.onRenderSubMenu, onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b, _c = _a.onRenderMenuList, onRenderMenuList = _c === void 0 ? this._onRenderMenuList : _c, focusZoneProps = _a.focusZoneProps, 
        // eslint-disable-next-line deprecation/deprecation
        getMenuClassNames = _a.getMenuClassNames, _d = _a.hoisted, expandedMenuItemKey = _d.expandedMenuItemKey, targetRef = _d.targetRef, onMenuFocusCapture = _d.onMenuFocusCapture, hostElement = _d.hostElement;
        this._classNames = getMenuClassNames
            ? getMenuClassNames(theme, className)
            : getClassNames(styles, {
                theme: theme,
                className: className,
            });
        var hasIcons = itemsHaveIcons(items);
        function itemsHaveIcons(contextualMenuItems) {
            for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
                var item = contextualMenuItems_1[_i];
                if (item.iconProps) {
                    return true;
                }
                if (item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Section &&
                    item.sectionProps &&
                    itemsHaveIcons(item.sectionProps.items)) {
                    return true;
                }
            }
            return false;
        }
        this._adjustedFocusZoneProps = tslib_1.__assign(tslib_1.__assign({}, focusZoneProps), { className: this._classNames.root, isCircularNavigation: true, handleTabKey: FocusZone_1.FocusZoneTabbableElements.all, direction: this._getFocusZoneDirection() });
        var hasCheckmarks = canAnyMenuItemsCheck(items);
        var submenuProps = expandedMenuItemKey && this.props.hidden !== true ? this._getSubmenuProps() : null;
        isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= ResponsiveMode_1.ResponsiveMode.medium : isBeakVisible;
        /**
         * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
         */
        var contextMenuStyle;
        var targetAsHtmlElement = targetRef.current;
        if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
            var targetBoundingRect = targetAsHtmlElement.getBoundingClientRect();
            var targetWidth = targetBoundingRect.width - 2; /* Accounts for 1px border */
            if (useTargetWidth) {
                contextMenuStyle = {
                    width: targetWidth,
                };
            }
            else if (useTargetAsMinWidth) {
                contextMenuStyle = {
                    minWidth: targetWidth,
                };
            }
        }
        // The menu should only return if items were provided, if no items were provided then it should not appear.
        if (items && items.length > 0) {
            var totalItemCount_1 = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (item.itemType !== ContextualMenu_types_1.ContextualMenuItemType.Divider && item.itemType !== ContextualMenu_types_1.ContextualMenuItemType.Header) {
                    var itemCount = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                    totalItemCount_1 += itemCount;
                }
            }
            var calloutStyles_1 = this._classNames.subComponentStyles
                ? this._classNames.subComponentStyles.callout
                : undefined;
            return (React.createElement(index_3.MenuContext.Consumer, null, function (menuContext) { return (React.createElement(Callout_1.Callout, tslib_1.__assign({ styles: calloutStyles_1, onRestoreFocus: _this._tryFocusPreviousActiveElement }, calloutProps, { target: target || menuContext.target, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: Utilities_1.css('ms-ContextualMenu-Callout', calloutProps && calloutProps.className), setInitialFocus: shouldFocusOnMount, onDismiss: _this.props.onDismiss || menuContext.onDismiss, onScroll: _this._onScroll, bounds: bounds, directionalHintFixed: directionalHintFixed, alignTargetEdge: alignTargetEdge, hidden: _this.props.hidden || menuContext.hidden, ref: hostElement }),
                React.createElement("div", { style: contextMenuStyle, id: id, className: _this._classNames.container, tabIndex: shouldFocusOnContainer ? 0 : -1, onKeyDown: _this._onMenuKeyDown, onKeyUp: _this._onKeyUp, onFocusCapture: onMenuFocusCapture, "aria-label": ariaLabel, "aria-labelledby": labelElementId, role: 'menu' },
                    title && React.createElement("div", { className: _this._classNames.title },
                        " ",
                        title,
                        " "),
                    items && items.length
                        ? _this._renderFocusZone(onRenderMenuList({
                            ariaLabel: ariaLabel,
                            items: items,
                            totalItemCount: totalItemCount_1,
                            hasCheckmarks: hasCheckmarks,
                            hasIcons: hasIcons,
                            defaultMenuItemRenderer: _this._defaultMenuItemRenderer,
                            labelElementId: labelElementId,
                        }, _this._onRenderMenuList))
                        : null,
                    submenuProps && onRenderSubMenu(submenuProps, _this._onRenderSubMenu)))); }));
        }
        else {
            return null;
        }
    };
    ContextualMenuInternal.prototype._onMenuClosed = function () {
        var _a, _b, _c;
        (_b = (_a = this)._tryFocusPreviousActiveElement) === null || _b === void 0 ? void 0 : _b.call(_a, {
            originalElement: this._previousActiveElement,
            containsFocus: true,
            documentContainsFocus: ((_c = Utilities_1.getDocument()) === null || _c === void 0 ? void 0 : _c.hasFocus()) || false,
        });
    };
    /**
     * Return whether the contextual menu is hidden.
     * Undefined value for hidden is equivalent to hidden being false.
     * @param props - Props for the component
     */
    ContextualMenuInternal.prototype._isHidden = function (props) {
        return !!props.hidden;
    };
    /**
     * Gets the focusZoneDirection by using the arrowDirection if specified,
     * the direction specified in the focusZoneProps, or defaults to FocusZoneDirection.vertical
     */
    ContextualMenuInternal.prototype._getFocusZoneDirection = function () {
        var focusZoneProps = this.props.focusZoneProps;
        return focusZoneProps && focusZoneProps.direction !== undefined
            ? focusZoneProps.direction
            : FocusZone_1.FocusZoneDirection.vertical;
    };
    ContextualMenuInternal.prototype._onRenderSubMenu = function (subMenuProps, defaultRender) {
        throw Error('ContextualMenuBase: onRenderSubMenu callback is null or undefined. ' +
            'Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.');
    };
    ContextualMenuInternal.prototype._renderFocusZone = function (children) {
        var _a = this.props.focusZoneAs, ChildrenRenderer = _a === void 0 ? FocusZone_1.FocusZone : _a;
        return React.createElement(ChildrenRenderer, tslib_1.__assign({}, this._adjustedFocusZoneProps), children);
    };
    ContextualMenuInternal.prototype._renderSectionItem = function (sectionItem, 
    // eslint-disable-next-line deprecation/deprecation
    menuClassNames, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var sectionProps = sectionItem.sectionProps;
        if (!sectionProps) {
            return;
        }
        var headerItem;
        var groupProps;
        if (sectionProps.title) {
            // Since title is a user-facing string, it needs to be stripped of whitespace in order to build a valid element ID
            var id = this._id + sectionProps.title.replace(/\s/g, '');
            var headerContextualMenuItem = {
                key: "section-" + sectionProps.title + "-title",
                itemType: ContextualMenu_types_1.ContextualMenuItemType.Header,
                text: sectionProps.title,
                id: id,
            };
            groupProps = {
                role: 'group',
                'aria-labelledby': id,
            };
            headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
        }
        if (sectionProps.items && sectionProps.items.length > 0) {
            return (React.createElement("li", { role: "presentation", key: sectionProps.key || sectionItem.key || "section-" + index },
                React.createElement("div", tslib_1.__assign({}, groupProps),
                    React.createElement("ul", { className: this._classNames.list, role: "presentation" },
                        sectionProps.topDivider && this._renderSeparator(index, menuClassNames, true, true),
                        headerItem &&
                            this._renderListItem(headerItem, sectionItem.key || index, menuClassNames, sectionItem.title),
                        sectionProps.items.map(function (contextualMenuItem, itemsIndex) {
                            return _this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, sectionProps.items.length, hasCheckmarks, hasIcons);
                        }),
                        sectionProps.bottomDivider && this._renderSeparator(index, menuClassNames, false, true)))));
        }
    };
    ContextualMenuInternal.prototype._renderListItem = function (content, key, classNames, // eslint-disable-line deprecation/deprecation
    title) {
        return (React.createElement("li", { role: "presentation", title: title, key: key, className: classNames.item }, content));
    };
    ContextualMenuInternal.prototype._renderSeparator = function (index, classNames, // eslint-disable-line deprecation/deprecation
    top, fromSection) {
        if (fromSection || index > 0) {
            return (React.createElement("li", { role: "separator", key: 'separator-' + index + (top === undefined ? '' : top ? '-top' : '-bottom'), className: classNames.divider, "aria-hidden": "true" }));
        }
        return null;
    };
    ContextualMenuInternal.prototype._renderNormalItem = function (item, classNames, // eslint-disable-line deprecation/deprecation
    index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return item.onRender(tslib_1.__assign({ 'aria-posinset': focusableElementIndex + 1, 'aria-setsize': totalItemCount }, item), this.dismiss);
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        if (item.split && index_1.hasSubmenu(item)) {
            return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    };
    ContextualMenuInternal.prototype._renderHeaderMenuItem = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props.contextualMenuItemAs, ChildrenRenderer = _a === void 0 ? ContextualMenuItem_1.ContextualMenuItem : _a;
        var itemProps = item.itemProps, id = item.id;
        var divHtmlProperties = itemProps && Utilities_1.getNativeProps(itemProps, Utilities_1.divProperties);
        return (
        // eslint-disable-next-line deprecation/deprecation
        React.createElement("div", tslib_1.__assign({ id: id, className: this._classNames.header }, divHtmlProperties, { style: item.style }),
            React.createElement(ChildrenRenderer, tslib_1.__assign({ item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks ? this._onItemClick : undefined, hasIcons: hasIcons }, itemProps))));
    };
    ContextualMenuInternal.prototype._renderAnchorMenuItem = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var _a = this.props, contextualMenuItemAs = _a.contextualMenuItemAs, _b = _a.hoisted, expandedMenuItemKey = _b.expandedMenuItemKey, openSubMenu = _b.openSubMenu;
        return (React.createElement(index_2.ContextualMenuAnchor, { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onAnchorClick, onItemKeyDown: this._onItemKeyDown, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: openSubMenu, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuInternal.prototype._renderButtonItem = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var _a = this.props, contextualMenuItemAs = _a.contextualMenuItemAs, _b = _a.hoisted, expandedMenuItemKey = _b.expandedMenuItemKey, openSubMenu = _b.openSubMenu;
        return (React.createElement(index_2.ContextualMenuButton, { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: openSubMenu, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuInternal.prototype._renderSplitButton = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var _a = this.props, contextualMenuItemAs = _a.contextualMenuItemAs, _b = _a.hoisted, expandedMenuItemKey = _b.expandedMenuItemKey, openSubMenu = _b.openSubMenu;
        return (React.createElement(index_2.ContextualMenuSplitButton, { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, openSubMenu: openSubMenu, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss, expandedMenuItemKey: expandedMenuItemKey, onTap: this._onPointerAndTouchEvent }));
    };
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    ContextualMenuInternal.prototype._isAltOrMeta = function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        return ev.which === Utilities_1.KeyCodes.alt || ev.key === 'Meta';
    };
    ContextualMenuInternal.prototype._shouldIgnoreMouseEvent = function () {
        return !this._isScrollIdle || !this.props.hoisted.gotMouseMove.current;
    };
    /**
     * Handles updating focus when mouseEnter or mouseMove fire.
     * As part of updating focus, This function will also update
     * the expand/collapse state accordingly.
     */
    ContextualMenuInternal.prototype._updateFocusOnMouseEvent = function (item, ev, target) {
        var _this = this;
        var targetElement = target ? target : ev.currentTarget;
        var _a = this.props, _b = _a.subMenuHoverDelay, timeoutDuration = _b === void 0 ? NavigationIdleDelay : _b, _c = _a.hoisted, expandedMenuItemKey = _c.expandedMenuItemKey, openSubMenu = _c.openSubMenu;
        if (item.key === expandedMenuItemKey) {
            return;
        }
        if (this._enterTimerId !== undefined) {
            this._async.clearTimeout(this._enterTimerId);
            this._enterTimerId = undefined;
        }
        // If the menu is not expanded we can update focus without any delay
        if (expandedMenuItemKey === undefined) {
            targetElement.focus();
        }
        // Delay updating expanding/dismissing the submenu
        // and only set focus if we have not already done so
        if (index_1.hasSubmenu(item)) {
            ev.stopPropagation();
            this._enterTimerId = this._async.setTimeout(function () {
                targetElement.focus();
                openSubMenu(item, targetElement, true);
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
        else {
            this._enterTimerId = this._async.setTimeout(function () {
                _this._onSubMenuDismiss(ev);
                targetElement.focus();
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
    };
    ContextualMenuInternal.prototype._getSubmenuProps = function () {
        var _a = this.props.hoisted, submenuTarget = _a.submenuTarget, expandedMenuItemKey = _a.expandedMenuItemKey, expandedByMouseClick = _a.expandedByMouseClick;
        var item = this._findItemByKey(expandedMenuItemKey);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item),
                target: submenuTarget,
                onDismiss: this._onSubMenuDismiss,
                isSubMenu: true,
                id: this.state.subMenuId,
                shouldFocusOnMount: true,
                shouldFocusOnContainer: expandedByMouseClick,
                directionalHint: Utilities_1.getRTL(this.props.theme) ? DirectionalHint_1.DirectionalHint.leftTopEdge : DirectionalHint_1.DirectionalHint.rightTopEdge,
                className: this.props.className,
                gapSpace: 0,
                isBeakVisible: false,
            };
            if (item.subMenuProps) {
                Utilities_1.assign(submenuProps, item.subMenuProps);
            }
        }
        return submenuProps;
    };
    ContextualMenuInternal.prototype._findItemByKey = function (key) {
        var items = this.props.items;
        return this._findItemByKeyFromItems(key, items);
    };
    /**
     * Returns the item that matches a given key if any.
     * @param key - The key of the item to match
     * @param items - The items to look for the key
     */
    ContextualMenuInternal.prototype._findItemByKeyFromItems = function (key, items) {
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Section && item.sectionProps) {
                var match = this._findItemByKeyFromItems(key, item.sectionProps.items);
                if (match) {
                    return match;
                }
            }
            else if (item.key && item.key === key) {
                return item;
            }
        }
    };
    return ContextualMenuInternal;
}(React.Component));
//# sourceMappingURL=ContextualMenu.base.js.map