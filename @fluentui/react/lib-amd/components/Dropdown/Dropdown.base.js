define(["require", "exports", "tslib", "react", "../../Utilities", "../../Callout", "../../Button", "./Dropdown.types", "./utilities/DropdownSizePosCache", "../../FocusZone", "../../Icon", "../../Label", "../../Panel", "../../ResponsiveMode", "../../SelectableOption", "../../Checkbox", "@fluentui/utilities", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Utilities_1, Callout_1, Button_1, Dropdown_types_1, DropdownSizePosCache_1, FocusZone_1, Icon_1, Label_1, Panel_1, ResponsiveMode_1, SelectableOption_1, Checkbox_1, utilities_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var COMPONENT_NAME = 'Dropdown';
    var getClassNames = Utilities_1.classNamesFunction();
    var DEFAULT_PROPS = {
        options: [],
    };
    function useSelectedItemsState(_a) {
        var defaultSelectedKeys = _a.defaultSelectedKeys, selectedKeys = _a.selectedKeys, defaultSelectedKey = _a.defaultSelectedKey, selectedKey = _a.selectedKey, options = _a.options, multiSelect = _a.multiSelect;
        var oldOptions = react_hooks_1.usePrevious(options);
        var _b = React.useState([]), selectedIndices = _b[0], setSelectedIndices = _b[1];
        // In controlled component usage where selectedKey is provided, update the selectedIndex
        // state if the key or options change.
        var selectedKeyPropToUse;
        // this does a shallow compare (assumes options are pure), for the purposes of determining whether
        // defaultSelectedKey/defaultSelectedKeys are respected.
        var didOptionsChange = options !== oldOptions;
        if (multiSelect) {
            if (didOptionsChange && defaultSelectedKeys !== undefined) {
                selectedKeyPropToUse = defaultSelectedKeys;
            }
            else {
                selectedKeyPropToUse = selectedKeys;
            }
        }
        else {
            if (didOptionsChange && defaultSelectedKey !== undefined) {
                selectedKeyPropToUse = defaultSelectedKey;
            }
            else {
                selectedKeyPropToUse = selectedKey;
            }
        }
        var oldSelectedKeyProp = react_hooks_1.usePrevious(selectedKeyPropToUse);
        React.useEffect(function () {
            /** Get all selected indexes for multi-select mode */
            var getSelectedIndexes = function () {
                if (selectedKeyPropToUse === undefined) {
                    if (multiSelect) {
                        return getAllSelectedIndices();
                    }
                    var selectedIndex = getSelectedIndex(null);
                    return selectedIndex !== -1 ? [selectedIndex] : [];
                }
                else if (!Array.isArray(selectedKeyPropToUse)) {
                    var selectedIndex = getSelectedIndex(selectedKeyPropToUse);
                    return selectedIndex !== -1 ? [selectedIndex] : [];
                }
                var returnValue = [];
                for (var _i = 0, selectedKeyPropToUse_1 = selectedKeyPropToUse; _i < selectedKeyPropToUse_1.length; _i++) {
                    var key = selectedKeyPropToUse_1[_i];
                    var selectedIndex = getSelectedIndex(key);
                    selectedIndex !== -1 && returnValue.push(selectedIndex);
                }
                return returnValue;
            };
            var getAllSelectedIndices = function () {
                return options
                    .map(function (option, index) { return (option.selected ? index : -1); })
                    .filter(function (index) { return index !== -1; });
            };
            var getSelectedIndex = function (searchKey) {
                return Utilities_1.findIndex(options, function (option) {
                    // eslint-disable-next-line eqeqeq
                    if (searchKey != null) {
                        return option.key === searchKey;
                    }
                    else {
                        // eslint-disable-next-line deprecation/deprecation
                        return !!option.selected || !!option.isSelected;
                    }
                });
            };
            if ((selectedKeyPropToUse !== undefined || !oldOptions) &&
                (selectedKeyPropToUse !== oldSelectedKeyProp || didOptionsChange)) {
                setSelectedIndices(getSelectedIndexes());
            }
        }, [didOptionsChange, multiSelect, oldOptions, oldSelectedKeyProp, options, selectedKeyPropToUse]);
        return [selectedIndices, setSelectedIndices];
    }
    exports.DropdownBase = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
        var props = utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
        var rootRef = React.useRef(null);
        var mergedRootRef = react_hooks_1.useMergedRefs(forwardedRef, rootRef);
        var responsiveMode = ResponsiveMode_1.useResponsiveMode(rootRef);
        var _a = useSelectedItemsState(props), selectedIndices = _a[0], setSelectedIndices = _a[1];
        return (React.createElement(DropdownInternal, tslib_1.__assign({}, props, { responsiveMode: responsiveMode, hoisted: { rootRef: mergedRootRef, selectedIndices: selectedIndices, setSelectedIndices: setSelectedIndices } })));
    });
    exports.DropdownBase.displayName = 'DropdownBase';
    var DropdownInternal = /** @class */ (function (_super) {
        tslib_1.__extends(DropdownInternal, _super);
        function DropdownInternal(props) {
            var _this = _super.call(this, props) || this;
            _this._host = React.createRef();
            _this._focusZone = React.createRef();
            _this._dropDown = React.createRef();
            _this._scrollIdleDelay = 250 /* ms */;
            _this._sizePosCache = new DropdownSizePosCache_1.DropdownSizePosCache();
            _this._requestAnimationFrame = Utilities_1.safeRequestAnimationFrame(_this);
            _this._onChange = function (event, options, index, checked, multiSelect) {
                // eslint-disable-next-line deprecation/deprecation
                var _a = _this.props, onChange = _a.onChange, onChanged = _a.onChanged;
                if (onChange || onChanged) {
                    // for single-select, option passed in will always be selected.
                    // for multi-select, flip the checked value
                    var changedOpt = multiSelect ? tslib_1.__assign(tslib_1.__assign({}, options[index]), { selected: !checked }) : options[index];
                    onChange && onChange(tslib_1.__assign(tslib_1.__assign({}, event), { target: _this._dropDown.current }), changedOpt, index);
                    onChanged && onChanged(changedOpt, index);
                }
            };
            /** Get either props.placeholder (new name) or props.placeHolder (old name) */
            _this._getPlaceholder = function () {
                // eslint-disable-next-line deprecation/deprecation
                return _this.props.placeholder || _this.props.placeHolder;
            };
            /** Get text in dropdown input as a string */
            _this._getTitle = function (items, _unused) {
                var _a = _this.props.multiSelectDelimiter, multiSelectDelimiter = _a === void 0 ? ', ' : _a;
                return items.map(function (i) { return i.text; }).join(multiSelectDelimiter);
            };
            /** Render text in dropdown input */
            _this._onRenderTitle = function (items) {
                return React.createElement(React.Fragment, null, _this._getTitle(items));
            };
            /** Render placeholder text in dropdown input */
            _this._onRenderPlaceholder = function (props) {
                if (!_this._getPlaceholder()) {
                    return null;
                }
                return React.createElement(React.Fragment, null, _this._getPlaceholder());
            };
            /** Render Callout or Panel container and pass in list */
            _this._onRenderContainer = function (props) {
                var calloutProps = props.calloutProps, panelProps = props.panelProps;
                var _a = _this.props, responsiveMode = _a.responsiveMode, dropdownWidth = _a.dropdownWidth;
                var isSmall = responsiveMode <= ResponsiveMode_1.ResponsiveMode.medium;
                var panelStyles = _this._classNames.subComponentStyles
                    ? _this._classNames.subComponentStyles.panel
                    : undefined;
                var calloutWidth = undefined;
                var calloutMinWidth = undefined;
                if (dropdownWidth === 'auto') {
                    calloutMinWidth = _this._dropDown.current ? _this._dropDown.current.clientWidth : 0;
                }
                else {
                    calloutWidth = dropdownWidth || (_this._dropDown.current ? _this._dropDown.current.clientWidth : 0);
                }
                return isSmall ? (React.createElement(Panel_1.Panel, tslib_1.__assign({ isOpen: true, isLightDismiss: true, onDismiss: _this._onDismiss, hasCloseButton: false, styles: panelStyles }, panelProps), _this._renderFocusableList(props))) : (React.createElement(Callout_1.Callout, tslib_1.__assign({ isBeakVisible: false, gapSpace: 0, doNotLayer: false, directionalHintFixed: false, directionalHint: Callout_1.DirectionalHint.bottomLeftEdge, calloutWidth: calloutWidth, calloutMinWidth: calloutMinWidth }, calloutProps, { className: _this._classNames.callout, target: _this._dropDown.current, onDismiss: _this._onDismiss, onScroll: _this._onScroll, onPositioned: _this._onPositioned }), _this._renderFocusableList(props)));
            };
            /** Render Caret Down Icon */
            _this._onRenderCaretDown = function (props) {
                return React.createElement(Icon_1.Icon, { className: _this._classNames.caretDown, iconName: "ChevronDown", "aria-hidden": true });
            };
            /** Render List of items */
            _this._onRenderList = function (props) {
                var _a = props.onRenderItem, onRenderItem = _a === void 0 ? _this._onRenderItem : _a;
                var queue = { items: [] };
                var renderedList = [];
                var emptyQueue = function () {
                    var newGroup = queue.id
                        ? [
                            React.createElement("div", { role: "group", key: queue.id, "aria-labelledby": queue.id }, queue.items),
                        ]
                        : queue.items;
                    renderedList = tslib_1.__spreadArrays(renderedList, newGroup);
                    // Flush items and id
                    queue = { items: [] };
                };
                var placeRenderedOptionIntoQueue = function (item, index) {
                    /*
                      Case Header
                        empty queue if it's not already empty
                        ensure unique ID for header and set queue ID
                        push header into queue
                      Case Divider
                        push divider into queue if not first item
                        empty queue if not already empty
                      Default
                        push item into queue
                    */
                    switch (item.itemType) {
                        case SelectableOption_1.SelectableOptionMenuItemType.Header:
                            queue.items.length > 0 && emptyQueue();
                            var id = _this._id + item.key;
                            queue.items.push(onRenderItem(tslib_1.__assign(tslib_1.__assign({ id: id }, item), { index: index }), _this._onRenderItem));
                            queue.id = id;
                            break;
                        case SelectableOption_1.SelectableOptionMenuItemType.Divider:
                            index > 0 && queue.items.push(onRenderItem(tslib_1.__assign(tslib_1.__assign({}, item), { index: index }), _this._onRenderItem));
                            queue.items.length > 0 && emptyQueue();
                            break;
                        default:
                            queue.items.push(onRenderItem(tslib_1.__assign(tslib_1.__assign({}, item), { index: index }), _this._onRenderItem));
                    }
                };
                // Place options into the queue. Queue will be emptied anytime a Header or Divider is encountered
                props.options.forEach(function (item, index) {
                    placeRenderedOptionIntoQueue(item, index);
                });
                // Push remaining items into all renderedList
                queue.items.length > 0 && emptyQueue();
                return React.createElement(React.Fragment, null, renderedList);
            };
            _this._onRenderItem = function (item) {
                switch (item.itemType) {
                    case SelectableOption_1.SelectableOptionMenuItemType.Divider:
                        return _this._renderSeparator(item);
                    case SelectableOption_1.SelectableOptionMenuItemType.Header:
                        return _this._renderHeader(item);
                    default:
                        return _this._renderOption(item);
                }
            };
            _this._renderOption = function (item) {
                var _a = _this.props, _b = _a.onRenderOption, onRenderOption = _b === void 0 ? _this._onRenderOption : _b, _c = _a.hoisted.selectedIndices, selectedIndices = _c === void 0 ? [] : _c;
                var isItemSelected = item.index !== undefined && selectedIndices ? selectedIndices.indexOf(item.index) > -1 : false;
                // select the right className based on the combination of selected/disabled
                var itemClassName = item.hidden // predicate: item hidden
                    ? _this._classNames.dropdownItemHidden
                    : isItemSelected && item.disabled === true // predicate: both selected and disabled
                        ? _this._classNames.dropdownItemSelectedAndDisabled
                        : isItemSelected // predicate: selected only
                            ? _this._classNames.dropdownItemSelected
                            : item.disabled === true // predicate: disabled only
                                ? _this._classNames.dropdownItemDisabled
                                : _this._classNames.dropdownItem;
                var _d = item.title, title = _d === void 0 ? item.text : _d;
                var multiSelectItemStyles = _this._classNames.subComponentStyles
                    ? _this._classNames.subComponentStyles.multiSelectItem
                    : undefined;
                return !_this.props.multiSelect ? (React.createElement(Button_1.CommandButton, { id: _this._listId + item.index, key: item.key, "data-index": item.index, "data-is-focusable": !item.disabled, disabled: item.disabled, className: itemClassName, onClick: _this._onItemClick(item), 
                    // eslint-disable-next-line react/jsx-no-bind
                    onMouseEnter: _this._onItemMouseEnter.bind(_this, item), 
                    // eslint-disable-next-line react/jsx-no-bind
                    onMouseLeave: _this._onMouseItemLeave.bind(_this, item), 
                    // eslint-disable-next-line react/jsx-no-bind
                    onMouseMove: _this._onItemMouseMove.bind(_this, item), role: "option", "aria-selected": isItemSelected ? 'true' : 'false', ariaLabel: item.ariaLabel, title: title, "aria-posinset": _this._sizePosCache.positionInSet(item.index), "aria-setsize": _this._sizePosCache.optionSetSize }, onRenderOption(item, _this._onRenderOption))) : (React.createElement(Checkbox_1.Checkbox, { id: _this._listId + item.index, key: item.key, disabled: item.disabled, onChange: _this._onItemClick(item), inputProps: tslib_1.__assign({ 'aria-selected': isItemSelected, onMouseEnter: _this._onItemMouseEnter.bind(_this, item), onMouseLeave: _this._onMouseItemLeave.bind(_this, item), onMouseMove: _this._onItemMouseMove.bind(_this, item), role: 'option' }, {
                        'data-index': item.index,
                        'data-is-focusable': !item.disabled,
                    }), label: item.text, title: title, 
                    // eslint-disable-next-line react/jsx-no-bind
                    onRenderLabel: _this._onRenderItemLabel.bind(_this, item), className: itemClassName, checked: isItemSelected, styles: multiSelectItemStyles, ariaPositionInSet: _this._sizePosCache.positionInSet(item.index), ariaSetSize: _this._sizePosCache.optionSetSize }));
            };
            /** Render content of item (i.e. text/icon inside of button) */
            _this._onRenderOption = function (item) {
                return React.createElement("span", { className: _this._classNames.dropdownOptionText }, item.text);
            };
            /** Render custom label for drop down item */
            _this._onRenderItemLabel = function (item) {
                var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderOption : _a;
                return onRenderOption(item, _this._onRenderOption);
            };
            _this._onPositioned = function (positions) {
                if (_this._focusZone.current) {
                    // Focusing an element can trigger a reflow. Making this wait until there is an animation
                    // frame can improve perf significantly.
                    _this._requestAnimationFrame(function () {
                        var selectedIndices = _this.props.hoisted.selectedIndices;
                        if (_this._focusZone.current) {
                            if (selectedIndices && selectedIndices[0] && !_this.props.options[selectedIndices[0]].disabled) {
                                var element = Utilities_1.getDocument().getElementById(_this._id + "-list" + selectedIndices[0]);
                                if (element) {
                                    _this._focusZone.current.focusElement(element);
                                }
                            }
                            else {
                                _this._focusZone.current.focus();
                            }
                        }
                    });
                }
                if (!_this.state.calloutRenderEdge || _this.state.calloutRenderEdge !== positions.targetEdge) {
                    _this.setState({
                        calloutRenderEdge: positions.targetEdge,
                    });
                }
            };
            _this._onItemClick = function (item) {
                return function (event) {
                    if (!item.disabled) {
                        _this.setSelectedIndex(event, item.index);
                        if (!_this.props.multiSelect) {
                            // only close the callout when it's in single-select mode
                            _this.setState({
                                isOpen: false,
                            });
                        }
                    }
                };
            };
            /**
             * Scroll handler for the callout to make sure the mouse events
             * for updating focus are not interacting during scroll
             */
            _this._onScroll = function () {
                if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                    clearTimeout(_this._scrollIdleTimeoutId);
                    _this._scrollIdleTimeoutId = undefined;
                }
                else {
                    _this._isScrollIdle = false;
                }
                _this._scrollIdleTimeoutId = window.setTimeout(function () {
                    _this._isScrollIdle = true;
                }, _this._scrollIdleDelay);
            };
            _this._onMouseItemLeave = function (item, ev) {
                if (_this._shouldIgnoreMouseEvent()) {
                    return;
                }
                /**
                 * IE11 focus() method forces parents to scroll to top of element.
                 * Edge and IE expose a setActive() function for focusable divs that
                 * sets the page focus but does not scroll the parent element.
                 */
                if (_this._host.current) {
                    if (_this._host.current.setActive) {
                        try {
                            _this._host.current.setActive();
                        }
                        catch (e) {
                            /* no-op */
                        }
                    }
                    else {
                        _this._host.current.focus();
                    }
                }
            };
            _this._onDismiss = function () {
                _this.setState({ isOpen: false });
            };
            _this._onDropdownBlur = function (ev) {
                // If Dropdown disabled do not proceed with this logic.
                var disabled = _this._isDisabled();
                if (disabled) {
                    return;
                }
                // hasFocus tracks whether the root element has focus so always update the state.
                _this.setState({ hasFocus: false });
                if (_this.state.isOpen) {
                    // Do not onBlur when the callout is opened
                    return;
                }
                if (_this.props.onBlur) {
                    _this.props.onBlur(ev);
                }
            };
            _this._onDropdownKeyDown = function (ev) {
                // If Dropdown disabled do not process any keyboard events.
                var disabled = _this._isDisabled();
                if (disabled) {
                    return;
                }
                // Take note if we are processing an alt (option) or meta (command) keydown.
                // See comment in _shouldHandleKeyUp for reasoning.
                _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
                if (_this.props.onKeyDown) {
                    _this.props.onKeyDown(ev);
                    if (ev.defaultPrevented) {
                        return;
                    }
                }
                var newIndex;
                var selectedIndex = _this.props.hoisted.selectedIndices.length ? _this.props.hoisted.selectedIndices[0] : -1;
                var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
                var isOpen = _this.state.isOpen;
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case Utilities_1.KeyCodes.enter:
                        _this.setState({
                            isOpen: !isOpen,
                        });
                        break;
                    case Utilities_1.KeyCodes.escape:
                        if (!isOpen) {
                            return;
                        }
                        _this.setState({
                            isOpen: false,
                        });
                        break;
                    case Utilities_1.KeyCodes.up:
                        if (containsExpandCollapseModifier) {
                            if (isOpen) {
                                _this.setState({ isOpen: false });
                                break;
                            }
                            return;
                        }
                        if (_this.props.multiSelect) {
                            _this.setState({ isOpen: true });
                        }
                        else if (!_this._isDisabled()) {
                            newIndex = _this._moveIndex(ev, -1, selectedIndex - 1, selectedIndex);
                        }
                        break;
                    case Utilities_1.KeyCodes.down:
                        if (containsExpandCollapseModifier) {
                            ev.stopPropagation();
                            ev.preventDefault();
                        }
                        if ((containsExpandCollapseModifier && !isOpen) || _this.props.multiSelect) {
                            _this.setState({ isOpen: true });
                        }
                        else if (!_this._isDisabled()) {
                            newIndex = _this._moveIndex(ev, 1, selectedIndex + 1, selectedIndex);
                        }
                        break;
                    case Utilities_1.KeyCodes.home:
                        if (!_this.props.multiSelect) {
                            newIndex = _this._moveIndex(ev, 1, 0, selectedIndex);
                        }
                        break;
                    case Utilities_1.KeyCodes.end:
                        if (!_this.props.multiSelect) {
                            newIndex = _this._moveIndex(ev, -1, _this.props.options.length - 1, selectedIndex);
                        }
                        break;
                    case Utilities_1.KeyCodes.space:
                        // event handled in _onDropdownKeyUp
                        break;
                    default:
                        return;
                }
                if (newIndex !== selectedIndex) {
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            };
            _this._onDropdownKeyUp = function (ev) {
                // If Dropdown disabled do not process any keyboard events.
                var disabled = _this._isDisabled();
                if (disabled) {
                    return;
                }
                var shouldHandleKey = _this._shouldHandleKeyUp(ev);
                var isOpen = _this.state.isOpen;
                if (_this.props.onKeyUp) {
                    _this.props.onKeyUp(ev);
                    if (ev.defaultPrevented) {
                        return;
                    }
                }
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case Utilities_1.KeyCodes.space:
                        _this.setState({
                            isOpen: !isOpen,
                        });
                        break;
                    default:
                        if (shouldHandleKey && isOpen) {
                            _this.setState({ isOpen: false });
                        }
                        return;
                }
                ev.stopPropagation();
                ev.preventDefault();
            };
            _this._onZoneKeyDown = function (ev) {
                var elementToFocus;
                // Take note if we are processing an alt (option) or meta (command) keydown.
                // See comment in _shouldHandleKeyUp for reasoning.
                _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
                var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case Utilities_1.KeyCodes.up:
                        if (containsExpandCollapseModifier) {
                            _this.setState({ isOpen: false });
                        }
                        else {
                            if (_this._host.current) {
                                elementToFocus = Utilities_1.getLastFocusable(_this._host.current, _this._host.current.lastChild, true);
                            }
                        }
                        break;
                    // All directional keystrokes should be canceled when the zone is rendered.
                    // This avoids the body scroll from reacting and thus dismissing the dropdown.
                    case Utilities_1.KeyCodes.home:
                    case Utilities_1.KeyCodes.end:
                    case Utilities_1.KeyCodes.pageUp:
                    case Utilities_1.KeyCodes.pageDown:
                        break;
                    case Utilities_1.KeyCodes.down:
                        if (!containsExpandCollapseModifier && _this._host.current) {
                            elementToFocus = Utilities_1.getFirstFocusable(_this._host.current, _this._host.current.firstChild, true);
                        }
                        break;
                    case Utilities_1.KeyCodes.escape:
                        _this.setState({ isOpen: false });
                        break;
                    case Utilities_1.KeyCodes.tab:
                        _this.setState({ isOpen: false });
                        return;
                    default:
                        return;
                }
                if (elementToFocus) {
                    elementToFocus.focus();
                }
                ev.stopPropagation();
                ev.preventDefault();
            };
            _this._onZoneKeyUp = function (ev) {
                var shouldHandleKey = _this._shouldHandleKeyUp(ev);
                if (shouldHandleKey && _this.state.isOpen) {
                    _this.setState({ isOpen: false });
                    ev.preventDefault();
                }
            };
            _this._onDropdownClick = function (ev) {
                if (_this.props.onClick) {
                    _this.props.onClick(ev);
                    if (ev.defaultPrevented) {
                        return;
                    }
                }
                var isOpen = _this.state.isOpen;
                var disabled = _this._isDisabled();
                if (!disabled && !_this._shouldOpenOnFocus()) {
                    _this.setState({
                        isOpen: !isOpen,
                    });
                }
                _this._isFocusedByClick = false; // reset
            };
            _this._onDropdownMouseDown = function () {
                _this._isFocusedByClick = true;
            };
            _this._onFocus = function (ev) {
                var disabled = _this._isDisabled();
                if (!disabled) {
                    if (_this.props.onFocus) {
                        _this.props.onFocus(ev);
                    }
                    var state = { hasFocus: true };
                    if (_this._shouldOpenOnFocus()) {
                        state.isOpen = true;
                    }
                    _this.setState(state);
                }
            };
            /**
             * Because the isDisabled prop is deprecated, we have had to repeat this logic all over the place.
             * This helper method avoids all the repetition.
             */
            _this._isDisabled = function () {
                var disabled = _this.props.disabled;
                // eslint-disable-next-line deprecation/deprecation
                var isDisabled = _this.props.isDisabled;
                // Remove this deprecation workaround at 1.0.0
                if (disabled === undefined) {
                    disabled = isDisabled;
                }
                return disabled;
            };
            _this._onRenderLabel = function (props) {
                var label = props.label, required = props.required, disabled = props.disabled;
                var labelStyles = _this._classNames.subComponentStyles
                    ? _this._classNames.subComponentStyles.label
                    : undefined;
                return label ? (React.createElement(Label_1.Label, { className: _this._classNames.label, id: _this._labelId, required: required, styles: labelStyles, disabled: disabled }, label)) : null;
            };
            Utilities_1.initializeComponentRef(_this);
            var multiSelect = props.multiSelect, selectedKey = props.selectedKey, selectedKeys = props.selectedKeys, defaultSelectedKey = props.defaultSelectedKey, defaultSelectedKeys = props.defaultSelectedKeys, options = props.options;
            
            _this._id = props.id || Utilities_1.getId('Dropdown');
            _this._labelId = _this._id + '-label';
            _this._listId = _this._id + '-list';
            _this._optionId = _this._id + '-option';
            _this._isScrollIdle = true;
            _this._sizePosCache.updateOptions(options);
            _this.state = {
                isOpen: false,
                hasFocus: false,
                calloutRenderEdge: undefined,
            };
            return _this;
        }
        Object.defineProperty(DropdownInternal.prototype, "selectedOptions", {
            /**
             * All selected options
             */
            get: function () {
                var _a = this.props, options = _a.options, selectedIndices = _a.hoisted.selectedIndices;
                return SelectableOption_1.getAllSelectedOptions(options, selectedIndices);
            },
            enumerable: true,
            configurable: true
        });
        DropdownInternal.prototype.componentWillUnmount = function () {
            clearTimeout(this._scrollIdleTimeoutId);
        };
        DropdownInternal.prototype.componentDidUpdate = function (prevProps, prevState) {
            if (prevState.isOpen === true && this.state.isOpen === false) {
                this._gotMouseMove = false;
                if (this.props.onDismiss) {
                    this.props.onDismiss();
                }
            }
        };
        DropdownInternal.prototype.render = function () {
            var id = this._id;
            var props = this.props;
            var className = props.className, label = props.label, options = props.options, ariaLabel = props.ariaLabel, required = props.required, errorMessage = props.errorMessage, propStyles = props.styles, theme = props.theme, panelProps = props.panelProps, calloutProps = props.calloutProps, _a = props.onRenderTitle, onRenderTitle = _a === void 0 ? this._getTitle : _a, _b = props.onRenderContainer, onRenderContainer = _b === void 0 ? this._onRenderContainer : _b, _c = props.onRenderCaretDown, onRenderCaretDown = _c === void 0 ? this._onRenderCaretDown : _c, _d = props.onRenderLabel, onRenderLabel = _d === void 0 ? this._onRenderLabel : _d, selectedIndices = props.hoisted.selectedIndices;
            var _e = this.state, isOpen = _e.isOpen, calloutRenderEdge = _e.calloutRenderEdge;
            // eslint-disable-next-line deprecation/deprecation
            var onRenderPlaceholder = props.onRenderPlaceholder || props.onRenderPlaceHolder || this._getPlaceholder;
            // If our cached options are out of date update our cache
            if (options !== this._sizePosCache.cachedOptions) {
                this._sizePosCache.updateOptions(options);
            }
            var selectedOptions = SelectableOption_1.getAllSelectedOptions(options, selectedIndices);
            var divProps = Utilities_1.getNativeProps(props, Utilities_1.divProperties);
            var disabled = this._isDisabled();
            var errorMessageId = id + '-errorMessage';
            var ariaActiveDescendant = disabled
                ? undefined
                : isOpen && selectedIndices.length === 1 && selectedIndices[0] >= 0
                    ? this._listId + selectedIndices[0]
                    : undefined;
            this._classNames = getClassNames(propStyles, {
                theme: theme,
                className: className,
                hasError: !!(errorMessage && errorMessage.length > 0),
                hasLabel: !!label,
                isOpen: isOpen,
                required: required,
                disabled: disabled,
                isRenderingPlaceholder: !selectedOptions.length,
                panelClassName: panelProps ? panelProps.className : undefined,
                calloutClassName: calloutProps ? calloutProps.className : undefined,
                calloutRenderEdge: calloutRenderEdge,
            });
            var hasErrorMessage = !!errorMessage && errorMessage.length > 0;
            return (React.createElement("div", { className: this._classNames.root, ref: this.props.hoisted.rootRef },
                onRenderLabel(this.props, this._onRenderLabel),
                React.createElement("div", tslib_1.__assign({ "data-is-focusable": !disabled, "data-ktp-target": true, ref: this._dropDown, id: id, tabIndex: disabled ? -1 : 0, role: "combobox", "aria-haspopup": "listbox", "aria-expanded": isOpen ? 'true' : 'false', "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? Utilities_1.mergeAriaAttributeValues(this._labelId, this._optionId) : undefined, "aria-describedby": hasErrorMessage ? this._id + '-errorMessage' : undefined, "aria-activedescendant": ariaActiveDescendant, "aria-required": required, "aria-disabled": disabled, "aria-controls": isOpen ? this._listId : undefined }, divProps, { className: this._classNames.dropdown, onBlur: this._onDropdownBlur, onKeyDown: this._onDropdownKeyDown, onKeyUp: this._onDropdownKeyUp, onClick: this._onDropdownClick, onMouseDown: this._onDropdownMouseDown, onFocus: this._onFocus }),
                    React.createElement("span", { id: this._optionId, className: this._classNames.title, "aria-live": "polite", "aria-atomic": true, "aria-invalid": hasErrorMessage }, // If option is selected render title, otherwise render the placeholder text
                    selectedOptions.length
                        ? onRenderTitle(selectedOptions, this._onRenderTitle)
                        : onRenderPlaceholder(props, this._onRenderPlaceholder)),
                    React.createElement("span", { className: this._classNames.caretDownWrapper }, onRenderCaretDown(props, this._onRenderCaretDown))),
                isOpen && onRenderContainer(tslib_1.__assign(tslib_1.__assign({}, props), { onDismiss: this._onDismiss }), this._onRenderContainer),
                hasErrorMessage && (React.createElement("div", { role: "alert", id: errorMessageId, className: this._classNames.errorMessage }, errorMessage))));
        };
        DropdownInternal.prototype.focus = function (shouldOpenOnFocus) {
            if (this._dropDown.current) {
                this._dropDown.current.focus();
                if (shouldOpenOnFocus) {
                    this.setState({
                        isOpen: true,
                    });
                }
            }
        };
        DropdownInternal.prototype.setSelectedIndex = function (event, index) {
            var _a = this.props, options = _a.options, selectedKey = _a.selectedKey, selectedKeys = _a.selectedKeys, multiSelect = _a.multiSelect, notifyOnReselect = _a.notifyOnReselect, _b = _a.hoisted.selectedIndices, selectedIndices = _b === void 0 ? [] : _b;
            var checked = selectedIndices ? selectedIndices.indexOf(index) > -1 : false;
            var newIndexes = [];
            index = Math.max(0, Math.min(options.length - 1, index));
            // If this is a controlled component then no state change should take place.
            if (selectedKey !== undefined || selectedKeys !== undefined) {
                this._onChange(event, options, index, checked, multiSelect);
                return;
            }
            if (!multiSelect && !notifyOnReselect && index === selectedIndices[0]) {
                return;
            }
            else if (multiSelect) {
                newIndexes = selectedIndices ? this._copyArray(selectedIndices) : [];
                if (checked) {
                    var position = newIndexes.indexOf(index);
                    if (position > -1) {
                        // unchecked the current one
                        newIndexes.splice(position, 1);
                    }
                }
                else {
                    // add the new selected index into the existing one
                    newIndexes.push(index);
                }
            }
            else {
                // Set the selected option if this is an uncontrolled component
                newIndexes = [index];
            }
            event.persist();
            // Call onChange after state is updated
            this.props.hoisted.setSelectedIndices(newIndexes);
            this._onChange(event, options, index, checked, multiSelect);
        };
        DropdownInternal.prototype._copyArray = function (array) {
            var newArray = [];
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var element = array_1[_i];
                newArray.push(element);
            }
            return newArray;
        };
        /**
         * Finds the next valid Dropdown option and sets the selected index to it.
         * @param stepValue - Value of how many items the function should traverse.  Should be -1 or 1.
         * @param index - Index of where the search should start
         * @param selectedIndex - The selectedIndex Dropdown's state
         * @returns The next valid dropdown option's index
         */
        DropdownInternal.prototype._moveIndex = function (event, stepValue, index, selectedIndex) {
            var options = this.props.options;
            // Return selectedIndex if nothing has changed or options is empty
            if (selectedIndex === index || options.length === 0) {
                return selectedIndex;
            }
            // If the user is pressing the up or down key we want to make
            // sure that the dropdown cycles through the options without
            // causing the screen to scroll. In _onDropdownKeyDown
            // at the very end is a check to see if newIndex !== selectedIndex.
            // If the index is less than 0 and we set it back to 0, then
            // newIndex will equal selectedIndex and not stop the action
            // of the key press happening and vice versa for indexes greater
            // than or equal to the options length.
            if (index >= options.length) {
                index = 0;
            }
            else if (index < 0) {
                index = options.length - 1;
            }
            var stepCounter = 0;
            // If current index is a header or divider, or disabled, increment by step
            while (options[index].itemType === Dropdown_types_1.DropdownMenuItemType.Header ||
                options[index].itemType === Dropdown_types_1.DropdownMenuItemType.Divider ||
                options[index].disabled) {
                // If stepCounter exceeds length of options, then return selectedIndex (-1)
                if (stepCounter >= options.length) {
                    return selectedIndex;
                }
                // If index + stepValue is out of bounds, wrap around
                if (index + stepValue < 0) {
                    index = options.length;
                }
                else if (index + stepValue >= options.length) {
                    index = -1;
                }
                index = index + stepValue;
                stepCounter++;
            }
            this.setSelectedIndex(event, index);
            return index;
        };
        /** Wrap item list in a FocusZone */
        DropdownInternal.prototype._renderFocusableList = function (props) {
            var _a = props.onRenderList, onRenderList = _a === void 0 ? this._onRenderList : _a, label = props.label, ariaLabel = props.ariaLabel, multiSelect = props.multiSelect;
            return (React.createElement("div", { className: this._classNames.dropdownItemsWrapper, onKeyDown: this._onZoneKeyDown, onKeyUp: this._onZoneKeyUp, ref: this._host, tabIndex: 0 },
                React.createElement(FocusZone_1.FocusZone, { ref: this._focusZone, direction: FocusZone_1.FocusZoneDirection.vertical, id: this._listId, className: this._classNames.dropdownItems, role: "listbox", "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? this._labelId : undefined, "aria-multiselectable": multiSelect }, onRenderList(props, this._onRenderList))));
        };
        DropdownInternal.prototype._renderSeparator = function (item) {
            var index = item.index, key = item.key;
            if (index > 0) {
                return React.createElement("div", { role: "separator", key: key, className: this._classNames.dropdownDivider });
            }
            return null;
        };
        DropdownInternal.prototype._renderHeader = function (item) {
            var _a = this.props.onRenderOption, onRenderOption = _a === void 0 ? this._onRenderOption : _a;
            var key = item.key, id = item.id;
            return (React.createElement("div", { id: id, key: key, className: this._classNames.dropdownItemHeader }, onRenderOption(item, this._onRenderOption)));
        };
        DropdownInternal.prototype._onItemMouseEnter = function (item, ev) {
            if (this._shouldIgnoreMouseEvent()) {
                return;
            }
            var targetElement = ev.currentTarget;
            targetElement.focus();
        };
        DropdownInternal.prototype._onItemMouseMove = function (item, ev) {
            var targetElement = ev.currentTarget;
            this._gotMouseMove = true;
            if (!this._isScrollIdle || document.activeElement === targetElement) {
                return;
            }
            targetElement.focus();
        };
        DropdownInternal.prototype._shouldIgnoreMouseEvent = function () {
            return !this._isScrollIdle || !this._gotMouseMove;
        };
        /**
         * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
         */
        DropdownInternal.prototype._isAltOrMeta = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            return ev.which === Utilities_1.KeyCodes.alt || ev.key === 'Meta';
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
        DropdownInternal.prototype._shouldHandleKeyUp = function (ev) {
            var keyPressIsAltOrMetaAlone = this._lastKeyDownWasAltOrMeta && this._isAltOrMeta(ev);
            this._lastKeyDownWasAltOrMeta = false;
            return !!keyPressIsAltOrMetaAlone && !(Utilities_1.isMac() || Utilities_1.isIOS());
        };
        /**
         * Returns true if dropdown should set to open on focus.
         * Otherwise, isOpen state should be toggled on click
         */
        DropdownInternal.prototype._shouldOpenOnFocus = function () {
            var hasFocus = this.state.hasFocus;
            var openOnKeyboardFocus = this.props.openOnKeyboardFocus;
            return !this._isFocusedByClick && openOnKeyboardFocus === true && !hasFocus;
        };
        DropdownInternal.defaultProps = {
            options: [],
        };
        return DropdownInternal;
    }(React.Component));
});
//# sourceMappingURL=Dropdown.base.js.map