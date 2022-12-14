define(["require", "exports", "tslib", "react", "../../Autofill", "../../Utilities", "../../Callout", "../../Checkbox", "./ComboBox.styles", "./ComboBox.classNames", "../../Label", "../../SelectableOption", "../../Button", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Autofill_1, Utilities_1, Callout_1, Checkbox_1, ComboBox_styles_1, ComboBox_classNames_1, Label_1, SelectableOption_1, Button_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SearchDirection;
    (function (SearchDirection) {
        SearchDirection[SearchDirection["backward"] = -1] = "backward";
        SearchDirection[SearchDirection["none"] = 0] = "none";
        SearchDirection[SearchDirection["forward"] = 1] = "forward";
    })(SearchDirection || (SearchDirection = {}));
    var HoverStatus;
    (function (HoverStatus) {
        /** Used when the user was hovering and has since moused out of the menu items */
        HoverStatus[HoverStatus["clearAll"] = -2] = "clearAll";
        /** Default "normal" state, when no hover has happened or a hover is in progress */
        HoverStatus[HoverStatus["default"] = -1] = "default";
    })(HoverStatus || (HoverStatus = {}));
    var ScrollIdleDelay = 250; /* ms */
    var TouchIdleDelay = 500; /* ms */
    /**
     * This is used to clear any pending autocomplete text (used when autocomplete is true and
     * allowFreeform is false)
     */
    var ReadOnlyPendingAutoCompleteTimeout = 1000; /* ms */
    /**
     * Internal component that is used to wrap all ComboBox options.
     * This is used to customize when we want to re-render components,
     * so we don't re-render every option every time render is executed.
     */
    var ComboBoxOptionWrapper = React.memo(function (_a) {
        var render = _a.render;
        return render();
    }, function (_a, _b) {
        var oldRender = _a.render, oldProps = tslib_1.__rest(_a, ["render"]);
        var newRender = _b.render, newProps = tslib_1.__rest(_b, ["render"]);
        // The render function will always be different, so we ignore that prop
        return Utilities_1.shallowCompare(oldProps, newProps);
    });
    var COMPONENT_NAME = 'ComboBox';
    var DEFAULT_PROPS = {
        options: [],
        allowFreeform: false,
        autoComplete: 'on',
        buttonIconProps: { iconName: 'ChevronDown' },
    };
    function useOptionsState(_a) {
        var options = _a.options, defaultSelectedKey = _a.defaultSelectedKey, selectedKey = _a.selectedKey;
        /** The currently selected indices */
        var _b = React.useState(function () {
            return getSelectedIndices(options, buildDefaultSelectedKeys(defaultSelectedKey, selectedKey));
        }), selectedIndices = _b[0], setSelectedIndices = _b[1];
        /** The options currently available for the callout */
        var _c = React.useState(options), currentOptions = _c[0], setCurrentOptions = _c[1];
        /** This value is used for the autocomplete hint value */
        var _d = React.useState(), suggestedDisplayValue = _d[0], setSuggestedDisplayValue = _d[1];
        React.useEffect(function () {
            if (selectedKey !== undefined) {
                var selectedKeys = buildSelectedKeys(selectedKey);
                var indices = getSelectedIndices(options, selectedKeys);
                setSelectedIndices(indices);
            }
            setCurrentOptions(options);
        }, [options, selectedKey]);
        React.useEffect(function () {
            if (selectedKey === null) {
                setSuggestedDisplayValue(undefined);
            }
        }, [selectedKey]);
        return [
            selectedIndices,
            setSelectedIndices,
            currentOptions,
            setCurrentOptions,
            suggestedDisplayValue,
            setSuggestedDisplayValue,
        ];
    }
    exports.ComboBox = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
        var _a = Utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults), ref = _a.ref, props = tslib_1.__rest(_a, ["ref"]);
        var rootRef = React.useRef(null);
        var mergedRootRef = react_hooks_1.useMergedRefs(rootRef, forwardedRef);
        var _b = useOptionsState(props), selectedIndices = _b[0], setSelectedIndices = _b[1], currentOptions = _b[2], setCurrentOptions = _b[3], suggestedDisplayValue = _b[4], setSuggestedDisplayValue = _b[5];
        return (React.createElement(ComboBoxInternal, tslib_1.__assign({}, props, { hoisted: {
                mergedRootRef: mergedRootRef,
                rootRef: rootRef,
                selectedIndices: selectedIndices,
                setSelectedIndices: setSelectedIndices,
                currentOptions: currentOptions,
                setCurrentOptions: setCurrentOptions,
                suggestedDisplayValue: suggestedDisplayValue,
                setSuggestedDisplayValue: setSuggestedDisplayValue,
            } })));
    });
    exports.ComboBox.displayName = COMPONENT_NAME;
    var ComboBoxInternal = /** @class */ (function (_super) {
        tslib_1.__extends(ComboBoxInternal, _super);
        function ComboBoxInternal(props) {
            var _this = _super.call(this, props) || this;
            /** The input aspect of the combo box */
            _this._autofill = React.createRef();
            /** The wrapping div of the input and button */
            _this._comboBoxWrapper = React.createRef();
            /** The callout element */
            _this._comboBoxMenu = React.createRef();
            /** The menu item element that is currently selected */
            _this._selectedElement = React.createRef();
            /**
             * {@inheritdoc}
             */
            _this.focus = function (shouldOpenOnFocus, useFocusAsync) {
                if (_this._autofill.current) {
                    if (useFocusAsync) {
                        Utilities_1.focusAsync(_this._autofill.current);
                    }
                    else {
                        _this._autofill.current.focus();
                    }
                    if (shouldOpenOnFocus) {
                        _this.setState({
                            isOpen: true,
                        });
                    }
                }
                // Programmatically setting focus means that there is nothing else that needs to be done
                // Focus is now contained
                if (!_this._hasFocus()) {
                    _this.setState({ focusState: 'focused' });
                }
            };
            /**
             * Close menu callout if it is open
             */
            _this.dismissMenu = function () {
                var isOpen = _this.state.isOpen;
                isOpen && _this.setState({ isOpen: false });
            };
            /**
             * componentWillReceiveProps handler for the auto fill component
             * Checks/updates the input value to set, if needed
             * @param defaultVisibleValue - the defaultVisibleValue that got passed
             *  in to the auto fill's componentWillReceiveProps
             * @returns - the updated value to set, if needed
             */
            _this._onUpdateValueInAutofillWillReceiveProps = function () {
                var comboBox = _this._autofill.current;
                if (!comboBox) {
                    return null;
                }
                if (comboBox.value === null || comboBox.value === undefined) {
                    return null;
                }
                var visibleValue = normalizeToString(_this._currentVisibleValue);
                if (comboBox.value !== visibleValue) {
                    return visibleValue;
                }
                return comboBox.value;
            };
            _this._renderComboBoxWrapper = function (multiselectAccessibleText, errorMessageId) {
                var _a = _this.props, label = _a.label, disabled = _a.disabled, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, required = _a.required, errorMessage = _a.errorMessage, buttonIconProps = _a.buttonIconProps, _b = _a.isButtonAriaHidden, isButtonAriaHidden = _b === void 0 ? true : _b, title = _a.title, placeholderProp = _a.placeholder, tabIndex = _a.tabIndex, autofill = _a.autofill, iconButtonProps = _a.iconButtonProps, suggestedDisplayValue = _a.hoisted.suggestedDisplayValue;
                var isOpen = _this.state.isOpen;
                // If the combo box has focus, is multiselect, and has a display string, then use that placeholder
                // so that the selected items don't appear to vanish. This is not ideal but it's the only reasonable way
                // to correct the behavior where the input is cleared so the user can type. If a full refactor is done, then this
                // should be removed and the multiselect combo box should behave like a picker.
                var placeholder = _this._hasFocus() && _this.props.multiSelect && multiselectAccessibleText
                    ? multiselectAccessibleText
                    : placeholderProp;
                return (React.createElement("div", { "data-ktp-target": true, ref: _this._comboBoxWrapper, id: _this._id + 'wrapper', className: _this._classNames.root },
                    React.createElement(Autofill_1.Autofill, tslib_1.__assign({ "data-ktp-execute-target": true, "data-is-interactable": !disabled, componentRef: _this._autofill, id: _this._id + '-input', className: _this._classNames.input, type: "text", onFocus: _this._onFocus, onBlur: _this._onBlur, onKeyDown: _this._onInputKeyDown, onKeyUp: _this._onInputKeyUp, onClick: _this._onAutofillClick, onTouchStart: _this._onTouchStart, onInputValueChange: _this._onInputChange, "aria-expanded": isOpen, "aria-autocomplete": _this._getAriaAutoCompleteValue(), role: "combobox", readOnly: disabled, "aria-labelledby": label && _this._id + '-label', "aria-label": ariaLabel && !label ? ariaLabel : undefined, "aria-describedby": errorMessage !== undefined ? Utilities_1.mergeAriaAttributeValues(ariaDescribedBy, errorMessageId) : ariaDescribedBy, "aria-activedescendant": _this._getAriaActiveDescendantValue(), "aria-required": required, "aria-disabled": disabled, "aria-owns": isOpen ? _this._id + '-list' : undefined, spellCheck: false, defaultVisibleValue: _this._currentVisibleValue, suggestedDisplayValue: suggestedDisplayValue, updateValueInWillReceiveProps: _this._onUpdateValueInAutofillWillReceiveProps, shouldSelectFullInputValueInComponentDidUpdate: _this._onShouldSelectFullInputValueInAutofillComponentDidUpdate, title: title, preventValueSelection: !_this._hasFocus(), placeholder: placeholder, tabIndex: tabIndex }, autofill)),
                    React.createElement(Button_1.IconButton, tslib_1.__assign({ className: 'ms-ComboBox-CaretDown-button', styles: _this._getCaretButtonStyles(), role: "presentation", "aria-hidden": isButtonAriaHidden, "data-is-focusable": false, tabIndex: -1, onClick: _this._onComboBoxClick, onBlur: _this._onBlur, iconProps: buttonIconProps, disabled: disabled, checked: isOpen }, iconButtonProps))));
            };
            /**
             * componentDidUpdate handler for the auto fill component
             *
             * @param defaultVisibleValue - the current defaultVisibleValue in the auto fill's componentDidUpdate
             * @param suggestedDisplayValue - the current suggestedDisplayValue in the auto fill's componentDidUpdate
             * @returns - should the full value of the input be selected?
             * True if the defaultVisibleValue equals the suggestedDisplayValue, false otherwise
             */
            _this._onShouldSelectFullInputValueInAutofillComponentDidUpdate = function () {
                return _this._currentVisibleValue === _this.props.hoisted.suggestedDisplayValue;
            };
            /**
             * Get the correct value to pass to the input
             * to show to the user based off of the current props and state
             * @returns the value to pass to the input
             */
            _this._getVisibleValue = function () {
                var _a = _this.props, text = _a.text, allowFreeform = _a.allowFreeform, autoComplete = _a.autoComplete, _b = _a.hoisted, suggestedDisplayValue = _b.suggestedDisplayValue, selectedIndices = _b.selectedIndices, currentOptions = _b.currentOptions;
                var _c = _this.state, currentPendingValueValidIndex = _c.currentPendingValueValidIndex, currentPendingValue = _c.currentPendingValue, isOpen = _c.isOpen;
                var currentPendingIndexValid = indexWithinBounds(currentOptions, currentPendingValueValidIndex);
                // If the user passed is a value prop, use that
                // unless we are open and have a valid current pending index
                if (!(isOpen && currentPendingIndexValid) &&
                    text &&
                    (currentPendingValue === null || currentPendingValue === undefined)) {
                    return text;
                }
                if (_this.props.multiSelect) {
                    // Multi-select
                    if (_this._hasFocus()) {
                        var index = -1;
                        if (autoComplete === 'on' && currentPendingIndexValid) {
                            index = currentPendingValueValidIndex;
                        }
                        return _this._getPendingString(currentPendingValue, currentOptions, index);
                    }
                    else {
                        return _this._getMultiselectDisplayString(selectedIndices, currentOptions, suggestedDisplayValue);
                    }
                }
                else {
                    // Single-select
                    var index = _this._getFirstSelectedIndex();
                    if (allowFreeform) {
                        // If we are allowing freeform and autocomplete is also true
                        // and we've got a pending value that matches an option, remember
                        // the matched option's index
                        if (autoComplete === 'on' && currentPendingIndexValid) {
                            index = currentPendingValueValidIndex;
                        }
                        // Since we are allowing freeform, if there is currently a pending value, use that
                        // otherwise use the index determined above (falling back to '' if we did not get a valid index)
                        return _this._getPendingString(currentPendingValue, currentOptions, index);
                    }
                    else {
                        // If we are not allowing freeform and have a valid index that matches the pending value,
                        // we know we will need some version of the pending value
                        if (currentPendingIndexValid && autoComplete === 'on') {
                            // If autoComplete is on, return the raw pending value, otherwise remember
                            // the matched option's index
                            index = currentPendingValueValidIndex;
                            return normalizeToString(currentPendingValue);
                        }
                        else if (!_this.state.isOpen && currentPendingValue) {
                            return indexWithinBounds(currentOptions, index)
                                ? currentPendingValue
                                : normalizeToString(suggestedDisplayValue);
                        }
                        else {
                            return indexWithinBounds(currentOptions, index)
                                ? getPreviewText(currentOptions[index])
                                : normalizeToString(suggestedDisplayValue);
                        }
                    }
                }
            };
            /**
             * Handler for typing changes on the input
             * @param updatedValue - the newly changed value
             */
            _this._onInputChange = function (updatedValue) {
                if (_this.props.disabled) {
                    _this._handleInputWhenDisabled(null /* event */);
                    return;
                }
                _this.props.allowFreeform
                    ? _this._processInputChangeWithFreeform(updatedValue)
                    : _this._processInputChangeWithoutFreeform(updatedValue);
            };
            /**
             * Focus (and select) the content of the input
             * and set the focused state
             */
            _this._onFocus = function () {
                var _a, _b;
                (_b = (_a = _this._autofill.current) === null || _a === void 0 ? void 0 : _a.inputElement) === null || _b === void 0 ? void 0 : _b.select();
                if (!_this._hasFocus()) {
                    _this.setState({ focusState: 'focusing' });
                }
            };
            /**
             * Callback issued when the options should be resolved, if they have been updated or
             * if they need to be passed in the first time. This only does work if an onResolveOptions
             * callback was passed in
             */
            _this._onResolveOptions = function () {
                if (_this.props.onResolveOptions) {
                    // get the options
                    var newOptions = _this.props.onResolveOptions(tslib_1.__spreadArrays(_this.props.hoisted.currentOptions));
                    // Check to see if the returned value is an array, if it is update the state
                    // If the returned value is not an array then check to see if it's a promise or PromiseLike.
                    // If it is then resolve it asynchronously.
                    if (Array.isArray(newOptions)) {
                        _this.props.hoisted.setCurrentOptions(newOptions);
                    }
                    else if (newOptions && newOptions.then) {
                        // Ensure that the promise will only use the callback if it was the most recent one
                        // and update the state when the promise returns
                        var promise_1 = (_this._currentPromise = newOptions);
                        promise_1.then(function (newOptionsFromPromise) {
                            if (promise_1 === _this._currentPromise) {
                                _this.props.hoisted.setCurrentOptions(newOptionsFromPromise);
                            }
                        });
                    }
                }
            };
            /**
             * OnBlur handler. Set the focused state to false
             * and submit any pending value
             */
            // eslint-disable-next-line deprecation/deprecation
            _this._onBlur = function (event) {
                var _a, _b;
                // Do nothing if the blur is coming from something
                // inside the comboBox root or the comboBox menu since
                // it we are not really blurring from the whole comboBox
                var relatedTarget = event.relatedTarget;
                if (event.relatedTarget === null) {
                    // In IE11, due to lack of support, event.relatedTarget is always
                    // null making every onBlur call to be "outside" of the ComboBox
                    // even when it's not. Using document.activeElement is another way
                    // for us to be able to get what the relatedTarget without relying
                    // on the event
                    relatedTarget = document.activeElement;
                }
                if (relatedTarget) {
                    var isBlurFromComboBoxTitle = (_a = _this.props.hoisted.rootRef.current) === null || _a === void 0 ? void 0 : _a.contains(relatedTarget);
                    var isBlurFromComboBoxMenu = (_b = _this._comboBoxMenu.current) === null || _b === void 0 ? void 0 : _b.contains(relatedTarget);
                    var isBlurFromComboBoxMenuAncestor = _this._comboBoxMenu.current &&
                        Utilities_1.findElementRecursive(_this._comboBoxMenu.current, function (element) { return element === relatedTarget; });
                    if (isBlurFromComboBoxTitle || isBlurFromComboBoxMenu || isBlurFromComboBoxMenuAncestor) {
                        if (isBlurFromComboBoxMenuAncestor &&
                            _this._hasFocus() &&
                            (!_this.props.multiSelect || _this.props.allowFreeform)) {
                            _this._submitPendingValue(event);
                        }
                        event.preventDefault();
                        event.stopPropagation();
                        return;
                    }
                }
                if (_this._hasFocus()) {
                    _this.setState({ focusState: 'none' });
                    if (!_this.props.multiSelect || _this.props.allowFreeform) {
                        _this._submitPendingValue(event);
                    }
                }
            };
            // Render Callout container and pass in list
            _this._onRenderContainer = function (props) {
                var _a, _b;
                var onRenderList = props.onRenderList, calloutProps = props.calloutProps, dropdownWidth = props.dropdownWidth, dropdownMaxWidth = props.dropdownMaxWidth, _c = props.onRenderUpperContent, onRenderUpperContent = _c === void 0 ? _this._onRenderUpperContent : _c, _d = props.onRenderLowerContent, onRenderLowerContent = _d === void 0 ? _this._onRenderLowerContent : _d, useComboBoxAsMenuWidth = props.useComboBoxAsMenuWidth, persistMenu = props.persistMenu, _e = props.shouldRestoreFocus, shouldRestoreFocus = _e === void 0 ? true : _e;
                var isOpen = _this.state.isOpen;
                var id = _this._id;
                var comboBoxMenuWidth = useComboBoxAsMenuWidth && _this._comboBoxWrapper.current
                    ? _this._comboBoxWrapper.current.clientWidth + 2
                    : undefined;
                return (React.createElement(Callout_1.Callout, tslib_1.__assign({ isBeakVisible: false, gapSpace: 0, doNotLayer: false, directionalHint: Callout_1.DirectionalHint.bottomLeftEdge, directionalHintFixed: false }, calloutProps, { onLayerMounted: _this._onLayerMounted, className: Utilities_1.css(_this._classNames.callout, (_a = calloutProps) === null || _a === void 0 ? void 0 : _a.className), target: _this._comboBoxWrapper.current, onDismiss: _this._onDismiss, onMouseDown: _this._onCalloutMouseDown, onScroll: _this._onScroll, setInitialFocus: false, calloutWidth: useComboBoxAsMenuWidth && _this._comboBoxWrapper.current
                        ? comboBoxMenuWidth && comboBoxMenuWidth
                        : dropdownWidth, calloutMaxWidth: dropdownMaxWidth ? dropdownMaxWidth : comboBoxMenuWidth, hidden: persistMenu ? !isOpen : undefined, shouldRestoreFocus: shouldRestoreFocus }),
                    onRenderUpperContent(_this.props, _this._onRenderUpperContent),
                    React.createElement("div", { className: _this._classNames.optionsContainerWrapper, ref: _this._comboBoxMenu }, (_b = onRenderList) === null || _b === void 0 ? void 0 : _b(tslib_1.__assign(tslib_1.__assign({}, props), { id: id }), _this._onRenderList)),
                    onRenderLowerContent(_this.props, _this._onRenderLowerContent)));
            };
            _this._onLayerMounted = function () {
                _this._onCalloutLayerMounted();
                if (_this.props.calloutProps && _this.props.calloutProps.onLayerMounted) {
                    _this.props.calloutProps.onLayerMounted();
                }
            };
            _this._onRenderLabel = function (onRenderLabelProps) {
                var _a = onRenderLabelProps.props, label = _a.label, disabled = _a.disabled, required = _a.required;
                if (label) {
                    return (React.createElement(Label_1.Label, { id: _this._id + '-label', disabled: disabled, required: required, className: _this._classNames.label },
                        label,
                        onRenderLabelProps.multiselectAccessibleText && (React.createElement("span", { className: _this._classNames.screenReaderText }, onRenderLabelProps.multiselectAccessibleText))));
                }
                return null;
            };
            // Render List of items
            _this._onRenderList = function (props) {
                var onRenderItem = props.onRenderItem, options = props.options;
                var id = _this._id;
                return (React.createElement("div", { id: id + '-list', className: _this._classNames.optionsContainer, "aria-labelledby": id + '-label', role: "listbox" }, options.map(function (item) { var _a; return (_a = onRenderItem) === null || _a === void 0 ? void 0 : _a(item, _this._onRenderItem); })));
            };
            // Render items
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
            // Default _onRenderLowerContent function returns nothing
            _this._onRenderLowerContent = function () {
                return null;
            };
            // Default _onRenderUpperContent function returns nothing
            _this._onRenderUpperContent = function () {
                return null;
            };
            _this._renderOption = function (item) {
                var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderOptionContent : _a;
                var id = _this._id;
                var isSelected = _this._isOptionSelected(item.index);
                var isChecked = _this._isOptionChecked(item.index);
                var optionStyles = _this._getCurrentOptionStyles(item);
                var optionClassNames = ComboBox_classNames_1.getComboBoxOptionClassNames(_this._getCurrentOptionStyles(item));
                var title = getPreviewText(item);
                var onRenderCheckboxLabel = function () { return onRenderOption(item, _this._onRenderOptionContent); };
                var getOptionComponent = function () {
                    return !_this.props.multiSelect ? (React.createElement(Button_1.CommandButton, { id: id + '-list' + item.index, key: item.key, "data-index": item.index, styles: optionStyles, checked: isSelected, className: 'ms-ComboBox-option', onClick: _this._onItemClick(item), 
                        // eslint-disable-next-line react/jsx-no-bind
                        onMouseEnter: _this._onOptionMouseEnter.bind(_this, item.index), 
                        // eslint-disable-next-line react/jsx-no-bind
                        onMouseMove: _this._onOptionMouseMove.bind(_this, item.index), onMouseLeave: _this._onOptionMouseLeave, role: "option", "aria-selected": isChecked ? 'true' : 'false', ariaLabel: getPreviewText(item), disabled: item.disabled, title: title }, React.createElement("span", { className: optionClassNames.optionTextWrapper, ref: isSelected ? _this._selectedElement : undefined }, onRenderOption(item, _this._onRenderOptionContent)))) : (React.createElement(Checkbox_1.Checkbox, { id: id + '-list' + item.index, ariaLabel: getPreviewText(item), key: item.key, styles: optionStyles, className: 'ms-ComboBox-option', onChange: _this._onItemClick(item), label: item.text, checked: isChecked, title: title, disabled: item.disabled, 
                        // eslint-disable-next-line react/jsx-no-bind
                        onRenderLabel: onRenderCheckboxLabel, inputProps: tslib_1.__assign({ 
                            // aria-selected should only be applied to checked items, not hovered items
                            'aria-selected': isChecked ? 'true' : 'false', role: 'option' }, {
                            'data-index': item.index,
                            'data-is-focusable': true,
                        }) }));
                };
                return (React.createElement(ComboBoxOptionWrapper, { key: item.key, index: item.index, disabled: item.disabled, isSelected: isSelected, isChecked: isChecked, text: item.text, 
                    // eslint-disable-next-line react/jsx-no-bind
                    render: getOptionComponent, data: item.data }));
            };
            /**
             * Mouse clicks to headers, dividers and scrollbar should not make input lose focus
             */
            _this._onCalloutMouseDown = function (ev) {
                ev.preventDefault();
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
                }, ScrollIdleDelay);
            };
            _this._onRenderOptionContent = function (item) {
                var optionClassNames = ComboBox_classNames_1.getComboBoxOptionClassNames(_this._getCurrentOptionStyles(item));
                return React.createElement("span", { className: optionClassNames.optionText }, item.text);
            };
            /**
             * Handles dismissing (cancelling) the menu
             */
            _this._onDismiss = function () {
                var onMenuDismiss = _this.props.onMenuDismiss;
                if (onMenuDismiss) {
                    onMenuDismiss();
                }
                // In persistMode we need to simulate callout layer mount
                // since that only happens once. We do it on dismiss since
                // it works either way.
                if (_this.props.persistMenu) {
                    _this._onCalloutLayerMounted();
                }
                // close the menu
                _this._setOpenStateAndFocusOnClose(false /* isOpen */, false /* focusInputAfterClose */);
                // reset the selected index
                // to the last value state
                _this._resetSelectedIndex();
            };
            _this._onAfterClearPendingInfo = function () {
                _this._processingClearPendingInfo = false;
            };
            /**
             * Handle keydown on the input
             * @param ev - The keyboard event that was fired
             */
            _this._onInputKeyDown = function (ev) {
                var _a = _this.props, disabled = _a.disabled, allowFreeform = _a.allowFreeform, autoComplete = _a.autoComplete, currentOptions = _a.hoisted.currentOptions;
                var _b = _this.state, isOpen = _b.isOpen, currentPendingValueValidIndexOnHover = _b.currentPendingValueValidIndexOnHover;
                // Take note if we are processing an alt (option) or meta (command) keydown.
                // See comment in _onInputKeyUp for reasoning.
                _this._lastKeyDownWasAltOrMeta = isAltOrMeta(ev);
                if (disabled) {
                    _this._handleInputWhenDisabled(ev);
                    return;
                }
                var index = _this._getPendingSelectedIndex(false /* includeCurrentPendingValue */);
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case Utilities_1.KeyCodes.enter:
                        if (_this._autofill.current && _this._autofill.current.inputElement) {
                            _this._autofill.current.inputElement.select();
                        }
                        _this._submitPendingValue(ev);
                        if (_this.props.multiSelect && isOpen) {
                            _this.setState({
                                currentPendingValueValidIndex: index,
                            });
                        }
                        else {
                            // On enter submit the pending value
                            if (isOpen ||
                                ((!allowFreeform ||
                                    _this.state.currentPendingValue === undefined ||
                                    _this.state.currentPendingValue === null ||
                                    _this.state.currentPendingValue.length <= 0) &&
                                    _this.state.currentPendingValueValidIndex < 0)) {
                                // if we are open or
                                // if we are not allowing freeform or
                                // our we have no pending value
                                // and no valid pending index
                                // flip the open state
                                _this.setState({
                                    isOpen: !isOpen,
                                });
                            }
                        }
                        break;
                    case Utilities_1.KeyCodes.tab:
                        // On enter submit the pending value
                        if (!_this.props.multiSelect) {
                            _this._submitPendingValue(ev);
                        }
                        // If we are not allowing freeform
                        // or the combo box is open, flip the open state
                        if (isOpen) {
                            _this._setOpenStateAndFocusOnClose(!isOpen, false /* focusInputAfterClose */);
                        }
                        // Allow TAB to propagate
                        return;
                    case Utilities_1.KeyCodes.escape:
                        // reset the selected index
                        _this._resetSelectedIndex();
                        // Close the menu if opened
                        if (isOpen) {
                            _this.setState({
                                isOpen: false,
                            });
                        }
                        else {
                            return;
                        }
                        break;
                    case Utilities_1.KeyCodes.up:
                        // if we are in clearAll state (e.g. the user as hovering
                        // and has since mousedOut of the menu items),
                        // go to the last index
                        if (currentPendingValueValidIndexOnHover === HoverStatus.clearAll) {
                            index = _this.props.hoisted.currentOptions.length;
                        }
                        if (ev.altKey || ev.metaKey) {
                            // Close the menu if it is open and break so
                            // that the event get stopPropagation and prevent default.
                            // Otherwise, we need to let the event continue to propagate
                            if (isOpen) {
                                _this._setOpenStateAndFocusOnClose(!isOpen, true /* focusInputAfterClose */);
                                break;
                            }
                            return;
                        }
                        // Go to the previous option
                        _this._setPendingInfoFromIndexAndDirection(index, SearchDirection.backward);
                        break;
                    case Utilities_1.KeyCodes.down:
                        // Expand the combo box on ALT + DownArrow
                        if (ev.altKey || ev.metaKey) {
                            _this._setOpenStateAndFocusOnClose(true /* isOpen */, true /* focusInputAfterClose */);
                        }
                        else {
                            // if we are in clearAll state (e.g. the user as hovering
                            // and has since mousedOut of the menu items),
                            // go to the first index
                            if (currentPendingValueValidIndexOnHover === HoverStatus.clearAll) {
                                index = -1;
                            }
                            // Got to the next option
                            _this._setPendingInfoFromIndexAndDirection(index, SearchDirection.forward);
                        }
                        break;
                    case Utilities_1.KeyCodes.home:
                    case Utilities_1.KeyCodes.end:
                        if (allowFreeform) {
                            return;
                        }
                        // Set the initial values to respond to HOME
                        // which goes to the first selectable option
                        index = -1;
                        var directionToSearch = SearchDirection.forward;
                        // If end, update the values to respond to END
                        // which goes to the last selectable option
                        // eslint-disable-next-line deprecation/deprecation
                        if (ev.which === Utilities_1.KeyCodes.end) {
                            index = currentOptions.length;
                            directionToSearch = SearchDirection.backward;
                        }
                        _this._setPendingInfoFromIndexAndDirection(index, directionToSearch);
                        break;
                    /* eslint-disable no-fallthrough */
                    case Utilities_1.KeyCodes.space:
                        // event handled in _onComboBoxKeyUp
                        if (!allowFreeform && autoComplete === 'off') {
                            break;
                        }
                    default:
                        /* eslint-enable no-fallthrough */
                        // are we processing a function key? if so bail out
                        // eslint-disable-next-line deprecation/deprecation
                        if (ev.which >= 112 /* F1 */ && ev.which <= 123 /* F12 */) {
                            return;
                        }
                        // If we get here and we got either and ALT key
                        // or meta key, let the event propagate
                        if (ev.keyCode === Utilities_1.KeyCodes.alt || ev.key === 'Meta' /* && isOpen */) {
                            return;
                        }
                        // If we are not allowing freeform and
                        // allowing autoComplete, handle the input here
                        // since we have marked the input as readonly
                        if (!allowFreeform && autoComplete === 'on') {
                            _this._onInputChange(ev.key);
                            break;
                        }
                        // allow the key to propagate by default
                        return;
                }
                ev.stopPropagation();
                ev.preventDefault();
            };
            /**
             * Handle keyup on the input
             * @param ev - the keyboard event that was fired
             */
            _this._onInputKeyUp = function (ev) {
                var _a = _this.props, disabled = _a.disabled, allowFreeform = _a.allowFreeform, autoComplete = _a.autoComplete;
                var isOpen = _this.state.isOpen;
                // We close the menu on key up only if ALL of the following are true:
                // - Most recent key down was alt or meta (command)
                // - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
                //   expand/collapse the menu)
                // - We're not on a Mac (or iOS)
                // This is because on Windows, pressing alt moves focus to the application menu bar or similar,
                // closing any open context menus. There is not a similar behavior on Macs.
                var keyPressIsAltOrMetaAlone = _this._lastKeyDownWasAltOrMeta && isAltOrMeta(ev);
                _this._lastKeyDownWasAltOrMeta = false;
                var shouldHandleKey = keyPressIsAltOrMetaAlone && !(Utilities_1.isMac() || Utilities_1.isIOS());
                if (disabled) {
                    _this._handleInputWhenDisabled(ev);
                    return;
                }
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case Utilities_1.KeyCodes.space:
                        // If we are not allowing freeform and are not autoComplete
                        // make space expand/collapse the combo box
                        // and allow the event to propagate
                        if (!allowFreeform && autoComplete === 'off') {
                            _this._setOpenStateAndFocusOnClose(!isOpen, !!isOpen);
                        }
                        return;
                    default:
                        if (shouldHandleKey && isOpen) {
                            _this._setOpenStateAndFocusOnClose(!isOpen, true /* focusInputAfterClose */);
                        }
                        else {
                            if (_this.state.focusState === 'focusing' && _this.props.openOnKeyboardFocus) {
                                _this.setState({ isOpen: true });
                            }
                            if (_this.state.focusState !== 'focused') {
                                _this.setState({ focusState: 'focused' });
                            }
                        }
                        return;
                }
            };
            _this._onOptionMouseLeave = function () {
                if (_this._shouldIgnoreMouseEvent()) {
                    return;
                }
                // Ignore the event in persistMenu mode if the callout has
                // closed. This is to avoid clearing the visuals on item click.
                if (_this.props.persistMenu && !_this.state.isOpen) {
                    return;
                }
                _this.setState({
                    currentPendingValueValidIndexOnHover: HoverStatus.clearAll,
                });
            };
            /**
             * Click handler for the button of the combo box and the input when not allowing freeform.
             * This toggles the expand/collapse state of the combo box (if enabled).
             */
            _this._onComboBoxClick = function () {
                var disabled = _this.props.disabled;
                var isOpen = _this.state.isOpen;
                if (!disabled) {
                    _this._setOpenStateAndFocusOnClose(!isOpen, false /* focusInputAfterClose */);
                    _this.setState({ focusState: 'focused' });
                }
            };
            /**
             * Click handler for the autofill.
             */
            _this._onAutofillClick = function () {
                var _a = _this.props, disabled = _a.disabled, allowFreeform = _a.allowFreeform;
                if (allowFreeform && !disabled) {
                    _this.focus(_this.state.isOpen || _this._processingTouch);
                }
                else {
                    _this._onComboBoxClick();
                }
            };
            _this._onTouchStart = function () {
                if (_this._comboBoxWrapper.current && !('onpointerdown' in _this._comboBoxWrapper)) {
                    _this._handleTouchAndPointerEvent();
                }
            };
            _this._onPointerDown = function (ev) {
                if (ev.pointerType === 'touch') {
                    _this._handleTouchAndPointerEvent();
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                }
            };
            Utilities_1.initializeComponentRef(_this);
            _this._async = new Utilities_1.Async(_this);
            _this._events = new Utilities_1.EventGroup(_this);
            Utilities_1.warnMutuallyExclusive(COMPONENT_NAME, props, {
                defaultSelectedKey: 'selectedKey',
                text: 'defaultSelectedKey',
                selectedKey: 'value',
                dropdownWidth: 'useComboBoxAsMenuWidth',
            });
            _this._id = props.id || Utilities_1.getId('ComboBox');
            _this._isScrollIdle = true;
            _this._processingTouch = false;
            _this._gotMouseMove = false;
            _this._processingClearPendingInfo = false;
            _this.state = {
                isOpen: false,
                focusState: 'none',
                currentPendingValueValidIndex: -1,
                currentPendingValue: undefined,
                currentPendingValueValidIndexOnHover: HoverStatus.default,
            };
            return _this;
        }
        Object.defineProperty(ComboBoxInternal.prototype, "selectedOptions", {
            /**
             * All selected options
             */
            get: function () {
                var _a = this.props.hoisted, currentOptions = _a.currentOptions, selectedIndices = _a.selectedIndices;
                return SelectableOption_1.getAllSelectedOptions(currentOptions, selectedIndices);
            },
            enumerable: true,
            configurable: true
        });
        ComboBoxInternal.prototype.componentDidMount = function () {
            if (this._comboBoxWrapper.current && !this.props.disabled) {
                // hook up resolving the options if needed on focus
                this._events.on(this._comboBoxWrapper.current, 'focus', this._onResolveOptions, true);
                if ('onpointerdown' in this._comboBoxWrapper.current) {
                    // For ComboBoxes, touching anywhere in the combo box should drop the dropdown, including the input element.
                    // This gives more hit target space for touch environments. We're setting the onpointerdown here, because React
                    // does not support Pointer events yet.
                    this._events.on(this._comboBoxWrapper.current, 'pointerdown', this._onPointerDown, true);
                }
            }
        };
        ComboBoxInternal.prototype.componentDidUpdate = function (prevProps, prevState) {
            var _this = this;
            var _a = this.props, allowFreeform = _a.allowFreeform, text = _a.text, onMenuOpen = _a.onMenuOpen, onMenuDismissed = _a.onMenuDismissed, selectedIndices = _a.hoisted.selectedIndices;
            var _b = this.state, isOpen = _b.isOpen, currentPendingValueValidIndex = _b.currentPendingValueValidIndex;
            // If we are newly open or are open and the pending valid index changed,
            // make sure the currently selected/pending option is scrolled into view
            if (isOpen && (!prevState.isOpen || prevState.currentPendingValueValidIndex !== currentPendingValueValidIndex)) {
                // Need this timeout so that the selectedElement ref is correctly updated
                this._async.setTimeout(function () { return _this._scrollIntoView(); }, 0);
            }
            // if an action is taken that put focus in the ComboBox
            // and If we are open or we are just closed, shouldFocusAfterClose is set,
            // but we are not the activeElement set focus on the input
            if (this._hasFocus() &&
                (isOpen ||
                    (prevState.isOpen &&
                        !isOpen &&
                        this._focusInputAfterClose &&
                        this._autofill.current &&
                        document.activeElement !== this._autofill.current.inputElement))) {
                this.focus(undefined /*shouldOpenOnFocus*/, true /*useFocusAsync*/);
            }
            // If we should focusAfterClose AND
            //   just opened/closed the menu OR
            //   are focused AND
            //     updated the selectedIndex with the menu closed OR
            //     are not allowing freeform OR
            //     the value changed
            // we need to set selection
            if (this._focusInputAfterClose &&
                ((prevState.isOpen && !isOpen) ||
                    (this._hasFocus() &&
                        ((!isOpen &&
                            !this.props.multiSelect &&
                            prevProps.hoisted.selectedIndices &&
                            selectedIndices &&
                            prevProps.hoisted.selectedIndices[0] !== selectedIndices[0]) ||
                            !allowFreeform ||
                            text !== prevProps.text)))) {
                this._onFocus();
            }
            this._notifyPendingValueChanged(prevState);
            if (isOpen && !prevState.isOpen && onMenuOpen) {
                onMenuOpen();
            }
            if (!isOpen && prevState.isOpen && onMenuDismissed) {
                onMenuDismissed();
            }
        };
        ComboBoxInternal.prototype.componentWillUnmount = function () {
            this._async.dispose();
            this._events.dispose();
        };
        // Primary Render
        ComboBoxInternal.prototype.render = function () {
            var id = this._id;
            var errorMessageId = id + '-error';
            var _a = this.props, className = _a.className, disabled = _a.disabled, required = _a.required, errorMessage = _a.errorMessage, _b = _a.onRenderContainer, onRenderContainer = _b === void 0 ? this._onRenderContainer : _b, _c = _a.onRenderLabel, onRenderLabel = _c === void 0 ? this._onRenderLabel : _c, _d = _a.onRenderList, onRenderList = _d === void 0 ? this._onRenderList : _d, _e = _a.onRenderItem, onRenderItem = _e === void 0 ? this._onRenderItem : _e, _f = _a.onRenderOption, onRenderOption = _f === void 0 ? this._onRenderOptionContent : _f, allowFreeform = _a.allowFreeform, customStyles = _a.styles, theme = _a.theme, persistMenu = _a.persistMenu, multiSelect = _a.multiSelect, _g = _a.hoisted, suggestedDisplayValue = _g.suggestedDisplayValue, selectedIndices = _g.selectedIndices, currentOptions = _g.currentOptions;
            var isOpen = this.state.isOpen;
            this._currentVisibleValue = this._getVisibleValue();
            // Single select is already accessible since the whole text is selected
            // when focus enters the input. Since multiselect appears to clear the input
            // it needs special accessible text
            var multiselectAccessibleText = multiSelect
                ? this._getMultiselectDisplayString(selectedIndices, currentOptions, suggestedDisplayValue)
                : undefined;
            var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties, [
                'onChange',
                'value',
            ]);
            var hasErrorMessage = errorMessage && errorMessage.length > 0 ? true : false;
            this._classNames = this.props.getClassNames
                ? this.props.getClassNames(theme, !!isOpen, !!disabled, !!required, !!this._hasFocus(), !!allowFreeform, !!hasErrorMessage, className)
                : ComboBox_classNames_1.getClassNames(ComboBox_styles_1.getStyles(theme, customStyles), className, !!isOpen, !!disabled, !!required, !!this._hasFocus(), !!allowFreeform, !!hasErrorMessage);
            var comboBoxWrapper = this._renderComboBoxWrapper(multiselectAccessibleText, errorMessageId);
            return (React.createElement("div", tslib_1.__assign({}, divProps, { ref: this.props.hoisted.mergedRootRef, className: this._classNames.container }),
                onRenderLabel({ props: this.props, multiselectAccessibleText: multiselectAccessibleText }, this._onRenderLabel),
                comboBoxWrapper,
                (persistMenu || isOpen) &&
                    onRenderContainer(tslib_1.__assign(tslib_1.__assign({}, this.props), { onRenderList: onRenderList,
                        onRenderItem: onRenderItem,
                        onRenderOption: onRenderOption, options: currentOptions.map(function (item, index) { return (tslib_1.__assign(tslib_1.__assign({}, item), { index: index })); }), onDismiss: this._onDismiss }), this._onRenderContainer),
                React.createElement("div", tslib_1.__assign({ role: "region", "aria-live": "polite", "aria-atomic": "true", id: errorMessageId }, (hasErrorMessage ? { className: this._classNames.errorMessage } : { 'aria-hidden': true })), errorMessage !== undefined ? errorMessage : '')));
        };
        ComboBoxInternal.prototype._getPendingString = function (currentPendingValue, currentOptions, index) {
            return currentPendingValue !== null && currentPendingValue !== undefined
                ? currentPendingValue
                : indexWithinBounds(currentOptions, index)
                    ? currentOptions[index].text
                    : '';
        };
        /**
         * Returns a string that concatenates all of the selected values
         * for multiselect combo box.
         */
        ComboBoxInternal.prototype._getMultiselectDisplayString = function (selectedIndices, currentOptions, suggestedDisplayValue) {
            var displayValues = [];
            for (var idx = 0; selectedIndices && idx < selectedIndices.length; idx++) {
                var index = selectedIndices[idx];
                displayValues.push(indexWithinBounds(currentOptions, index)
                    ? currentOptions[index].text
                    : normalizeToString(suggestedDisplayValue));
            }
            var _a = this.props.multiSelectDelimiter, multiSelectDelimiter = _a === void 0 ? ', ' : _a;
            return displayValues.join(multiSelectDelimiter);
        };
        /**
         * Process the new input's new value when the combo box allows freeform entry
         * @param updatedValue - the input's newly changed value
         */
        ComboBoxInternal.prototype._processInputChangeWithFreeform = function (updatedValue) {
            var currentOptions = this.props.hoisted.currentOptions;
            var newCurrentPendingValueValidIndex = -1;
            // if the new value is empty, see if we have an exact match and then set the pending info
            if (updatedValue === '') {
                var items = currentOptions
                    .map(function (item, index) { return (tslib_1.__assign(tslib_1.__assign({}, item), { index: index })); })
                    .filter(function (option) { return isNormalOption(option) && getPreviewText(option) === updatedValue; });
                // if we found a match remember the index
                if (items.length === 1) {
                    newCurrentPendingValueValidIndex = items[0].index;
                }
                this._setPendingInfo(updatedValue, newCurrentPendingValueValidIndex, updatedValue);
                return;
            }
            // Remember the original value and then make the value lowercase for comparison
            var originalUpdatedValue = updatedValue;
            updatedValue = updatedValue.toLocaleLowerCase();
            var newSuggestedDisplayValue = '';
            // If autoComplete is on, attempt to find a match from the available options
            if (this.props.autoComplete === 'on') {
                // If autoComplete is on, attempt to find a match where the text of an option starts with the updated value
                var items = currentOptions
                    .map(function (item, index) { return (tslib_1.__assign(tslib_1.__assign({}, item), { index: index })); })
                    .filter(function (option) {
                    return isNormalOption(option) &&
                        getPreviewText(option)
                            .toLocaleLowerCase()
                            .indexOf(updatedValue) === 0;
                });
                if (items.length > 0) {
                    // use ariaLabel as the value when the option is set
                    var text = getPreviewText(items[0]);
                    // If the user typed out the complete option text, we don't need any suggested display text anymore
                    newSuggestedDisplayValue = text.toLocaleLowerCase() !== updatedValue ? text : '';
                    // remember the index of the match we found
                    newCurrentPendingValueValidIndex = items[0].index;
                }
            }
            else {
                // If autoComplete is off, attempt to find a match only when the value is exactly equal to the text of an option
                var items = currentOptions
                    .map(function (item, index) { return (tslib_1.__assign(tslib_1.__assign({}, item), { index: index })); })
                    .filter(function (option) { return isNormalOption(option) && getPreviewText(option).toLocaleLowerCase() === updatedValue; });
                // if we found a match remember the index
                if (items.length === 1) {
                    newCurrentPendingValueValidIndex = items[0].index;
                }
            }
            // Set the updated state
            this._setPendingInfo(originalUpdatedValue, newCurrentPendingValueValidIndex, newSuggestedDisplayValue);
        };
        /**
         * Process the new input's new value when the combo box does not allow freeform entry
         * @param updatedValue - the input's newly changed value
         */
        ComboBoxInternal.prototype._processInputChangeWithoutFreeform = function (updatedValue) {
            var _this = this;
            var currentOptions = this.props.hoisted.currentOptions;
            var _a = this.state, currentPendingValue = _a.currentPendingValue, currentPendingValueValidIndex = _a.currentPendingValueValidIndex;
            if (this.props.autoComplete === 'on') {
                // If autoComplete is on while allow freeform is off,
                // we will remember the key press and build up a string to attempt to match
                // as long as characters are typed within a the timeout span of each other,
                // otherwise we will clear the string and start building a new one on the next keypress.
                // Also, only do this processing if we have a non-empty value
                if (updatedValue !== '') {
                    // If we have a pending autocomplete clearing task,
                    // we know that the user is typing with key press happening
                    // within the timeout of each other so remove the clearing task
                    // and continue building the pending value with the updated value
                    if (this._autoCompleteTimeout) {
                        this._async.clearTimeout(this._autoCompleteTimeout);
                        this._autoCompleteTimeout = undefined;
                        updatedValue = normalizeToString(currentPendingValue) + updatedValue;
                    }
                    var originalUpdatedValue = updatedValue;
                    updatedValue = updatedValue.toLocaleLowerCase();
                    // If autoComplete is on, attempt to find a match where the text of an option starts with the updated value
                    var items = currentOptions
                        .map(function (item, i) { return (tslib_1.__assign(tslib_1.__assign({}, item), { index: i })); })
                        .filter(function (option) { return isNormalOption(option) && option.text.toLocaleLowerCase().indexOf(updatedValue) === 0; });
                    // If we found a match, update the state
                    if (items.length > 0) {
                        this._setPendingInfo(originalUpdatedValue, items[0].index, getPreviewText(items[0]));
                    }
                    // Schedule a timeout to clear the pending value after the timeout span
                    this._autoCompleteTimeout = this._async.setTimeout(function () {
                        _this._autoCompleteTimeout = undefined;
                    }, ReadOnlyPendingAutoCompleteTimeout);
                    return;
                }
            }
            // If we get here, either autoComplete is on or we did not find a match with autoComplete on.
            // Remember we are not allowing freeform, so at this point, if we have a pending valid value index
            // use that; otherwise use the selectedIndex
            var index = currentPendingValueValidIndex >= 0 ? currentPendingValueValidIndex : this._getFirstSelectedIndex();
            // Since we are not allowing freeform, we need to
            // set both the pending and suggested values/index
            // to allow us to select all content in the input to
            // give the illusion that we are readonly (e.g. freeform off)
            this._setPendingInfoFromIndex(index);
        };
        ComboBoxInternal.prototype._getFirstSelectedIndex = function () {
            var _a;
            var selectedIndices = this.props.hoisted.selectedIndices;
            return ((_a = selectedIndices) === null || _a === void 0 ? void 0 : _a.length) ? selectedIndices[0] : -1;
        };
        /**
         * Walk along the options starting at the index, stepping by the delta (positive or negative)
         * looking for the next valid selectable index (e.g. skipping headings and dividers)
         * @param index - the index to get the next selectable index from
         * @param delta - optional delta to step by when finding the next index, defaults to 0
         * @returns - the next valid selectable index. If the new index is outside of the bounds,
         * it will snap to the edge of the options array. If delta == 0 and the given index is not selectable
         */
        ComboBoxInternal.prototype._getNextSelectableIndex = function (index, searchDirection) {
            var currentOptions = this.props.hoisted.currentOptions;
            var newIndex = index + searchDirection;
            newIndex = Math.max(0, Math.min(currentOptions.length - 1, newIndex));
            if (!indexWithinBounds(currentOptions, newIndex)) {
                return -1;
            }
            var option = currentOptions[newIndex];
            if (!isNormalOption(option) || option.hidden === true) {
                // Should we continue looking for an index to select?
                if (searchDirection !== SearchDirection.none &&
                    ((newIndex > 0 && searchDirection < SearchDirection.none) ||
                        (newIndex >= 0 && newIndex < currentOptions.length && searchDirection > SearchDirection.none))) {
                    newIndex = this._getNextSelectableIndex(newIndex, searchDirection);
                }
                else {
                    // If we cannot perform a useful search just return the index we were given
                    return index;
                }
            }
            // We have the next valid selectable index, return it
            return newIndex;
        };
        /**
         * Set the selected index. Note, this is
         * the "real" selected index, not the pending selected index
         * @param index - the index to set (or the index to set from if a search direction is provided)
         * @param searchDirection - the direction to search along the options from the given index
         */
        ComboBoxInternal.prototype._setSelectedIndex = function (index, submitPendingValueEvent, searchDirection) {
            if (searchDirection === void 0) { searchDirection = SearchDirection.none; }
            var _a = this.props, onChange = _a.onChange, onPendingValueChanged = _a.onPendingValueChanged, _b = _a.hoisted, initialIndices = _b.selectedIndices, currentOptions = _b.currentOptions;
            // Clone selectedIndices so we don't mutate state
            var selectedIndices = initialIndices ? initialIndices.slice() : [];
            // Find the next selectable index, if searchDirection is none
            // we will get our starting index back
            index = this._getNextSelectableIndex(index, searchDirection);
            if (!indexWithinBounds(currentOptions, index)) {
                return;
            }
            // Are we at a new index? If so, update the state, otherwise
            // there is nothing to do
            if (this.props.multiSelect ||
                selectedIndices.length < 1 ||
                (selectedIndices.length === 1 && selectedIndices[0] !== index)) {
                var option = tslib_1.__assign({}, currentOptions[index]);
                // if option doesn't existing, or option is disabled, we noop
                if (!option || option.disabled) {
                    return;
                }
                if (this.props.multiSelect) {
                    // Setting the initial state of option.selected in Multi-select combo box by checking the
                    // selectedIndices array and overriding the undefined issue
                    option.selected = option.selected !== undefined ? !option.selected : selectedIndices.indexOf(index) < 0;
                    if (option.selected && selectedIndices.indexOf(index) < 0) {
                        selectedIndices.push(index);
                    }
                    else if (!option.selected && selectedIndices.indexOf(index) >= 0) {
                        selectedIndices = selectedIndices.filter(function (value) { return value !== index; });
                    }
                }
                else {
                    selectedIndices[0] = index;
                }
                submitPendingValueEvent.persist();
                // Only setState if combo box is uncontrolled.
                if (this.props.selectedKey || this.props.selectedKey === null) {
                    // If combo box value is changed, revert preview first
                    if (this._hasPendingValue && onPendingValueChanged) {
                        onPendingValueChanged();
                        this._hasPendingValue = false;
                    }
                    if (onChange) {
                        onChange(submitPendingValueEvent, option, index, undefined);
                    }
                }
                else {
                    // Update current options
                    var changedOptions = currentOptions.slice();
                    changedOptions[index] = option;
                    // Call onChange after state is updated
                    this.props.hoisted.setSelectedIndices(selectedIndices);
                    this.props.hoisted.setCurrentOptions(changedOptions);
                    // If ComboBox value is changed, revert preview first
                    if (this._hasPendingValue && onPendingValueChanged) {
                        onPendingValueChanged();
                        this._hasPendingValue = false;
                    }
                    if (onChange) {
                        onChange(submitPendingValueEvent, option, index, undefined);
                    }
                }
            }
            if (this.props.multiSelect && this.state.isOpen) {
                return;
            }
            // clear all of the pending info
            this._clearPendingInfo();
        };
        /**
         * Submit a pending value if there is one
         */
        ComboBoxInternal.prototype._submitPendingValue = function (submitPendingValueEvent) {
            var _a, _b, _c;
            var _d = this.props, onChange = _d.onChange, allowFreeform = _d.allowFreeform, autoComplete = _d.autoComplete, multiSelect = _d.multiSelect, hoisted = _d.hoisted;
            var currentOptions = hoisted.currentOptions;
            var _e = this.state, currentPendingValue = _e.currentPendingValue, currentPendingValueValidIndex = _e.currentPendingValueValidIndex, currentPendingValueValidIndexOnHover = _e.currentPendingValueValidIndexOnHover;
            var selectedIndices = this.props.hoisted.selectedIndices;
            // Do not submit any pending value if we
            // have already initiated clearing the pending info
            if (this._processingClearPendingInfo) {
                return;
            }
            // If we allow freeform we need to handle that
            if (allowFreeform) {
                // if currentPendingValue is null or undefined the user did not submit anything
                // (not even empty because we would have stored that as the pending value)
                if (currentPendingValue === null || currentPendingValue === undefined) {
                    // if a user did not type anything they may just hovered over an item
                    if (currentPendingValueValidIndexOnHover >= 0) {
                        this._setSelectedIndex(currentPendingValueValidIndexOnHover, submitPendingValueEvent);
                        this._clearPendingInfo();
                    }
                    return;
                }
                // Check to see if the user typed an exact match
                if (indexWithinBounds(currentOptions, currentPendingValueValidIndex)) {
                    var pendingOptionText = getPreviewText(currentOptions[currentPendingValueValidIndex]).toLocaleLowerCase();
                    var autofill = this._autofill.current;
                    // By exact match, that means: our pending value is the same as the pending option text OR
                    // the pending option starts with the pending value and we have an "autoComplete" selection
                    // where the total length is equal to pending option length OR
                    // the live value in the underlying input matches the pending option; update the state
                    if (currentPendingValue.toLocaleLowerCase() === pendingOptionText ||
                        (autoComplete &&
                            pendingOptionText.indexOf(currentPendingValue.toLocaleLowerCase()) === 0 && ((_a = autofill) === null || _a === void 0 ? void 0 : _a.isValueSelected) &&
                            currentPendingValue.length + (autofill.selectionEnd - autofill.selectionStart) ===
                                pendingOptionText.length) ||
                        ((_c = (_b = autofill) === null || _b === void 0 ? void 0 : _b.inputElement) === null || _c === void 0 ? void 0 : _c.value.toLocaleLowerCase()) === pendingOptionText) {
                        this._setSelectedIndex(currentPendingValueValidIndex, submitPendingValueEvent);
                        if (multiSelect && this.state.isOpen) {
                            return;
                        }
                        this._clearPendingInfo();
                        return;
                    }
                }
                if (onChange) {
                    if (onChange) {
                        // trigger onChange to clear value
                        onChange(submitPendingValueEvent, undefined, undefined, currentPendingValue);
                    }
                }
                else {
                    // If we are not controlled, create a new selected option
                    var newOption = {
                        key: currentPendingValue || Utilities_1.getId(),
                        text: normalizeToString(currentPendingValue),
                    };
                    // If it's multiselect, set selected state to true
                    if (multiSelect) {
                        newOption.selected = true;
                    }
                    var newOptions = currentOptions.concat([newOption]);
                    if (selectedIndices) {
                        if (!multiSelect) {
                            selectedIndices = [];
                        }
                        selectedIndices.push(newOptions.length - 1);
                    }
                    hoisted.setCurrentOptions(newOptions);
                    hoisted.setSelectedIndices(selectedIndices);
                }
            }
            else if (currentPendingValueValidIndex >= 0) {
                // Since we are not allowing freeform, we must have a matching
                // to be able to update state
                this._setSelectedIndex(currentPendingValueValidIndex, submitPendingValueEvent);
            }
            else if (currentPendingValueValidIndexOnHover >= 0) {
                // If all else failed and we were hovering over an item, select it
                this._setSelectedIndex(currentPendingValueValidIndexOnHover, submitPendingValueEvent);
            }
            // Finally, clear the pending info
            this._clearPendingInfo();
        };
        ComboBoxInternal.prototype._onCalloutLayerMounted = function () {
            // In persistMenu mode _onLayerMounted is only called once for the lifetime
            // of the component. Any functionality required for callout "on mount" can
            // go here so that we can also call it again during callout dismissal to reset
            // object state.
            this._gotMouseMove = false;
        };
        // Render separator
        ComboBoxInternal.prototype._renderSeparator = function (item) {
            var index = item.index, key = item.key;
            if (index && index > 0) {
                return React.createElement("div", { role: "separator", key: key, className: this._classNames.divider });
            }
            return null;
        };
        ComboBoxInternal.prototype._renderHeader = function (item) {
            var _a = this.props.onRenderOption, onRenderOption = _a === void 0 ? this._onRenderOptionContent : _a;
            return (React.createElement("div", { key: item.key, className: this._classNames.header }, onRenderOption(item, this._onRenderOptionContent)));
        };
        /**
         * If we are coming from a mouseOut:
         * there is no visible selected option.
         *
         * Else if We are hovering over an item:
         * that gets the selected look.
         *
         * Else:
         * Use the current valid pending index if it exists OR
         * we do not have a valid index and we currently have a pending input value,
         * otherwise use the selected index
         * */
        ComboBoxInternal.prototype._isOptionSelected = function (index) {
            var currentPendingValueValidIndexOnHover = this.state.currentPendingValueValidIndexOnHover;
            // If the hover state is set to clearAll, don't show a selected index.
            // Note, this happens when the user moused out of the menu items
            if (currentPendingValueValidIndexOnHover === HoverStatus.clearAll) {
                return false;
            }
            return this._getPendingSelectedIndex(true /* includePendingValue */) === index ? true : false;
        };
        ComboBoxInternal.prototype._isOptionChecked = function (index) {
            if (this.props.multiSelect && index !== undefined && this.props.hoisted.selectedIndices) {
                var idxOfSelectedIndex = -1;
                idxOfSelectedIndex = this.props.hoisted.selectedIndices.indexOf(index);
                return idxOfSelectedIndex >= 0;
            }
            return false;
        };
        /**
         * Gets the pending selected index taking into account hover, valueValidIndex, and selectedIndex
         * @param includeCurrentPendingValue - Should we include the currentPendingValue when
         * finding the index
         */
        ComboBoxInternal.prototype._getPendingSelectedIndex = function (includeCurrentPendingValue) {
            var _a = this.state, currentPendingValueValidIndexOnHover = _a.currentPendingValueValidIndexOnHover, currentPendingValueValidIndex = _a.currentPendingValueValidIndex, currentPendingValue = _a.currentPendingValue;
            return currentPendingValueValidIndexOnHover >= 0
                ? currentPendingValueValidIndexOnHover
                : currentPendingValueValidIndex >= 0 ||
                    (includeCurrentPendingValue && currentPendingValue !== null && currentPendingValue !== undefined)
                    ? currentPendingValueValidIndex
                    : this.props.multiSelect
                        ? 0
                        : this._getFirstSelectedIndex();
        };
        /**
         * Scroll the selected element into view
         */
        ComboBoxInternal.prototype._scrollIntoView = function () {
            var _a = this.props, onScrollToItem = _a.onScrollToItem, scrollSelectedToTop = _a.scrollSelectedToTop;
            var _b = this.state, currentPendingValueValidIndex = _b.currentPendingValueValidIndex, currentPendingValue = _b.currentPendingValue;
            if (onScrollToItem) {
                // Use the custom scroll handler
                onScrollToItem(currentPendingValueValidIndex >= 0 || currentPendingValue !== ''
                    ? currentPendingValueValidIndex
                    : this._getFirstSelectedIndex());
            }
            else if (this._selectedElement.current && this._selectedElement.current.offsetParent) {
                // We are using refs, scroll the ref into view
                if (scrollSelectedToTop) {
                    this._selectedElement.current.offsetParent.scrollIntoView(true);
                }
                else {
                    var alignToTop = true;
                    if (this._comboBoxMenu.current && this._comboBoxMenu.current.offsetParent) {
                        var scrollableParentRect = this._comboBoxMenu.current.offsetParent.getBoundingClientRect();
                        var selectedElementRect = this._selectedElement.current.offsetParent.getBoundingClientRect();
                        // If we are completely in view then we do not need to scroll
                        if (scrollableParentRect.top <= selectedElementRect.top &&
                            scrollableParentRect.top + scrollableParentRect.height >=
                                selectedElementRect.top + selectedElementRect.height) {
                            return;
                        }
                        // If we are lower than the scrollable parent viewport then we should align to the bottom
                        if (scrollableParentRect.top + scrollableParentRect.height <=
                            selectedElementRect.top + selectedElementRect.height) {
                            alignToTop = false;
                        }
                    }
                    this._selectedElement.current.offsetParent.scrollIntoView(alignToTop);
                }
            }
        };
        /**
         * Click handler for the menu items
         * to select the item and also close the menu
         * @param index - the index of the item that was clicked
         */
        ComboBoxInternal.prototype._onItemClick = function (item) {
            var _this = this;
            var onItemClick = this.props.onItemClick;
            var index = item.index;
            return function (ev) {
                // only close the callout when it's in single-select mode
                if (!_this.props.multiSelect) {
                    // ensure that focus returns to the input, not the button
                    _this._autofill.current && _this._autofill.current.focus();
                    _this.setState({
                        isOpen: false,
                    });
                }
                // Continue processing the click only after
                // performing menu close / control focus(inner working)
                onItemClick && onItemClick(ev, item, index);
                _this._setSelectedIndex(index, ev);
            };
        };
        /**
         * Reset the selected index by clearing the
         * input (of any pending text), clearing the pending state,
         * and setting the suggested display value to the last
         * selected state text
         */
        ComboBoxInternal.prototype._resetSelectedIndex = function () {
            var currentOptions = this.props.hoisted.currentOptions;
            this._clearPendingInfo();
            var selectedIndex = this._getFirstSelectedIndex();
            if (selectedIndex > 0 && selectedIndex < currentOptions.length) {
                this.props.hoisted.setSuggestedDisplayValue(currentOptions[selectedIndex].text);
            }
            else if (this.props.text) {
                // If we had a value initially, restore it
                this.props.hoisted.setSuggestedDisplayValue(this.props.text);
            }
        };
        /**
         * Clears the pending info state
         */
        ComboBoxInternal.prototype._clearPendingInfo = function () {
            this._processingClearPendingInfo = true;
            this.props.hoisted.setSuggestedDisplayValue(undefined);
            this.setState({
                currentPendingValue: undefined,
                currentPendingValueValidIndex: -1,
                currentPendingValueValidIndexOnHover: HoverStatus.default,
            }, this._onAfterClearPendingInfo);
        };
        /**
         * Set the pending info
         * @param currentPendingValue - new pending value to set
         * @param currentPendingValueValidIndex - new pending value index to set
         * @param suggestedDisplayValue - new suggest display value to set
         */
        ComboBoxInternal.prototype._setPendingInfo = function (currentPendingValue, currentPendingValueValidIndex, suggestedDisplayValue) {
            if (currentPendingValueValidIndex === void 0) { currentPendingValueValidIndex = -1; }
            if (this._processingClearPendingInfo) {
                return;
            }
            this.props.hoisted.setSuggestedDisplayValue(suggestedDisplayValue);
            this.setState({
                currentPendingValue: normalizeToString(currentPendingValue),
                currentPendingValueValidIndex: currentPendingValueValidIndex,
                currentPendingValueValidIndexOnHover: HoverStatus.default,
            });
        };
        /**
         * Set the pending info from the given index
         * @param index - the index to set the pending info from
         */
        ComboBoxInternal.prototype._setPendingInfoFromIndex = function (index) {
            var currentOptions = this.props.hoisted.currentOptions;
            if (index >= 0 && index < currentOptions.length) {
                var option = currentOptions[index];
                this._setPendingInfo(getPreviewText(option), index, getPreviewText(option));
            }
            else {
                this._clearPendingInfo();
            }
        };
        /**
         * Sets the pending info for the combo box
         * @param index - the index to search from
         * @param searchDirection - the direction to search
         */
        ComboBoxInternal.prototype._setPendingInfoFromIndexAndDirection = function (index, searchDirection) {
            var currentOptions = this.props.hoisted.currentOptions;
            // update index to allow content to wrap
            if (searchDirection === SearchDirection.forward && index >= currentOptions.length - 1) {
                index = -1;
            }
            else if (searchDirection === SearchDirection.backward && index <= 0) {
                index = currentOptions.length;
            }
            // get the next "valid" index
            var indexUpdate = this._getNextSelectableIndex(index, searchDirection);
            // if the two indices are equal we didn't move and
            // we should attempt to get  get the first/last "valid" index to use
            // (Note, this takes care of the potential cases where the first/last
            // item is not focusable), otherwise use the updated index
            if (index === indexUpdate) {
                if (searchDirection === SearchDirection.forward) {
                    index = this._getNextSelectableIndex(-1, searchDirection);
                }
                else if (searchDirection === SearchDirection.backward) {
                    index = this._getNextSelectableIndex(currentOptions.length, searchDirection);
                }
            }
            else {
                index = indexUpdate;
            }
            if (indexWithinBounds(currentOptions, index)) {
                this._setPendingInfoFromIndex(index);
            }
        };
        ComboBoxInternal.prototype._notifyPendingValueChanged = function (prevState) {
            var onPendingValueChanged = this.props.onPendingValueChanged;
            if (!onPendingValueChanged) {
                return;
            }
            var currentOptions = this.props.hoisted.currentOptions;
            var _a = this.state, currentPendingValue = _a.currentPendingValue, currentPendingValueValidIndex = _a.currentPendingValueValidIndex, currentPendingValueValidIndexOnHover = _a.currentPendingValueValidIndexOnHover;
            var newPendingIndex = undefined;
            var newPendingValue = undefined;
            if (currentPendingValueValidIndexOnHover !== prevState.currentPendingValueValidIndexOnHover &&
                indexWithinBounds(currentOptions, currentPendingValueValidIndexOnHover)) {
                // Set new pending index if hover index was changed
                newPendingIndex = currentPendingValueValidIndexOnHover;
            }
            else if (currentPendingValueValidIndex !== prevState.currentPendingValueValidIndex &&
                indexWithinBounds(currentOptions, currentPendingValueValidIndex)) {
                // Set new pending index if currentPendingValueValidIndex was changed
                newPendingIndex = currentPendingValueValidIndex;
            }
            else if (currentPendingValue !== prevState.currentPendingValue) {
                // Set pendingValue in the case it was changed and no index was changed
                newPendingValue = currentPendingValue;
            }
            // Notify when there is a new pending index/value. Also, if there is a pending value, it needs to send undefined.
            if (newPendingIndex !== undefined || newPendingValue !== undefined || this._hasPendingValue) {
                onPendingValueChanged(newPendingIndex !== undefined ? currentOptions[newPendingIndex] : undefined, newPendingIndex, newPendingValue);
                this._hasPendingValue = newPendingIndex !== undefined || newPendingValue !== undefined;
            }
        };
        /**
         * Sets the isOpen state and updates focusInputAfterClose
         */
        ComboBoxInternal.prototype._setOpenStateAndFocusOnClose = function (isOpen, focusInputAfterClose) {
            this._focusInputAfterClose = focusInputAfterClose;
            this.setState({
                isOpen: isOpen,
            });
        };
        ComboBoxInternal.prototype._onOptionMouseEnter = function (index) {
            if (this._shouldIgnoreMouseEvent()) {
                return;
            }
            this.setState({
                currentPendingValueValidIndexOnHover: index,
            });
        };
        ComboBoxInternal.prototype._onOptionMouseMove = function (index) {
            this._gotMouseMove = true;
            if (!this._isScrollIdle || this.state.currentPendingValueValidIndexOnHover === index) {
                return;
            }
            this.setState({
                currentPendingValueValidIndexOnHover: index,
            });
        };
        ComboBoxInternal.prototype._shouldIgnoreMouseEvent = function () {
            return !this._isScrollIdle || !this._gotMouseMove;
        };
        /**
         * Handle dismissing the menu and eating the required key event when disabled
         * @param ev - the keyboard event that was fired
         */
        ComboBoxInternal.prototype._handleInputWhenDisabled = function (ev) {
            // If we are disabled, close the menu (if needed)
            // and eat all keystrokes other than TAB or ESC
            if (this.props.disabled) {
                if (this.state.isOpen) {
                    this.setState({ isOpen: false });
                }
                // When disabled stop propagation and prevent default
                // of the event unless we have a tab, escape, or function key
                if (ev !== null &&
                    // eslint-disable-next-line deprecation/deprecation
                    ev.which !== Utilities_1.KeyCodes.tab &&
                    // eslint-disable-next-line deprecation/deprecation
                    ev.which !== Utilities_1.KeyCodes.escape &&
                    // eslint-disable-next-line deprecation/deprecation
                    (ev.which < 112 /* F1 */ || ev.which > 123) /* F12 */) {
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            }
        };
        ComboBoxInternal.prototype._handleTouchAndPointerEvent = function () {
            var _this = this;
            // If we already have an existing timeout from a previous touch and pointer event
            // cancel that timeout so we can set a nwe one.
            if (this._lastTouchTimeoutId !== undefined) {
                this._async.clearTimeout(this._lastTouchTimeoutId);
                this._lastTouchTimeoutId = undefined;
            }
            this._processingTouch = true;
            this._lastTouchTimeoutId = this._async.setTimeout(function () {
                _this._processingTouch = false;
                _this._lastTouchTimeoutId = undefined;
            }, TouchIdleDelay);
        };
        /**
         * Get the styles for the current option.
         * @param item - Item props for the current option
         */
        ComboBoxInternal.prototype._getCaretButtonStyles = function () {
            var customCaretDownButtonStyles = this.props.caretDownButtonStyles;
            return ComboBox_styles_1.getCaretDownButtonStyles(this.props.theme, customCaretDownButtonStyles);
        };
        /**
         * Get the styles for the current option.
         * @param item - Item props for the current option
         */
        ComboBoxInternal.prototype._getCurrentOptionStyles = function (item) {
            var customStylesForAllOptions = this.props.comboBoxOptionStyles;
            var customStylesForCurrentOption = item.styles;
            return ComboBox_styles_1.getOptionStyles(this.props.theme, customStylesForAllOptions, customStylesForCurrentOption, this._isPendingOption(item), item.hidden);
        };
        /**
         * Get the aria-activedescendant value for the combo box.
         * @returns the id of the current focused combo item, otherwise the id of the currently selected element,
         * null otherwise
         */
        ComboBoxInternal.prototype._getAriaActiveDescendantValue = function () {
            var _a;
            var selectedIndices = this.props.hoisted.selectedIndices;
            var _b = this.state, isOpen = _b.isOpen, currentPendingValueValidIndex = _b.currentPendingValueValidIndex;
            var descendantText = isOpen && ((_a = selectedIndices) === null || _a === void 0 ? void 0 : _a.length) ? this._id + '-list' + selectedIndices[0] : undefined;
            if (isOpen && this._hasFocus() && currentPendingValueValidIndex !== -1) {
                descendantText = this._id + '-list' + currentPendingValueValidIndex;
            }
            return descendantText;
        };
        /**
         * Get the aria autocomplete value for the combo box
         * @returns 'inline' if auto-complete automatically dynamic, 'both' if we have a list of possible values to pick from
         * and can dynamically populate input, and 'none' if auto-complete is not enabled as we can't give user inputs.
         */
        ComboBoxInternal.prototype._getAriaAutoCompleteValue = function () {
            var autoComplete = !this.props.disabled && this.props.autoComplete === 'on';
            return autoComplete ? (this.props.allowFreeform ? 'inline' : 'both') : 'none';
        };
        ComboBoxInternal.prototype._isPendingOption = function (item) {
            return item && item.index === this.state.currentPendingValueValidIndex;
        };
        /**
         * Returns true if the component has some kind of focus. If it's either focusing or if it's focused
         */
        ComboBoxInternal.prototype._hasFocus = function () {
            return this.state.focusState !== 'none';
        };
        ComboBoxInternal = tslib_1.__decorate([
            Utilities_1.customizable('ComboBox', ['theme', 'styles'], true)
        ], ComboBoxInternal);
        return ComboBoxInternal;
    }(React.Component));
    /**
     * Get the indices of the options that are marked as selected
     * @param options - the combo box options
     * @param selectedKeys - the known selected keys to find
     * @returns - an array of the indices of the selected options, empty array if nothing is selected
     */
    function getSelectedIndices(options, selectedKeys) {
        if (!options || !selectedKeys) {
            return [];
        }
        var selectedIndices = {};
        options.forEach(function (option, index) {
            if (option.selected) {
                selectedIndices[index] = true;
            }
        });
        var _loop_1 = function (selectedKey) {
            var index = Utilities_1.findIndex(options, function (option) { return option.key === selectedKey; });
            if (index > -1) {
                selectedIndices[index] = true;
            }
        };
        for (var _i = 0, selectedKeys_1 = selectedKeys; _i < selectedKeys_1.length; _i++) {
            var selectedKey = selectedKeys_1[_i];
            _loop_1(selectedKey);
        }
        return Object.keys(selectedIndices)
            .map(Number)
            .sort();
    }
    /**
     * Given default selected key(s) and selected key(s), return the selected keys(s).
     * When default selected key(s) are available, they take precedence and return them instead of selected key(s).
     *
     * @returns No matter what specific types the input parameters are, always return an array of
     *  either strings or numbers instead of primitive type.  This normalization makes caller's logic easier.
     */
    function buildDefaultSelectedKeys(defaultSelectedKey, selectedKey) {
        var selectedKeys = buildSelectedKeys(defaultSelectedKey);
        if (selectedKeys.length) {
            return selectedKeys;
        }
        return buildSelectedKeys(selectedKey);
    }
    function buildSelectedKeys(selectedKey) {
        if (selectedKey === undefined) {
            return [];
        }
        // need to cast here so typescript does not complain
        return (selectedKey instanceof Array ? selectedKey : [selectedKey]);
    }
    function normalizeToString(value) {
        return value || '';
    }
    /**
     * Is the index within the bounds of the array?
     * @param options - options to check if the index is valid for
     * @param index - the index to check
     * @returns - true if the index is valid for the given options, false otherwise
     */
    function indexWithinBounds(options, index) {
        return !!options && index >= 0 && index < options.length;
    }
    /** Whether this is a normal option, not a header or divider. */
    function isNormalOption(option) {
        return (option.itemType !== SelectableOption_1.SelectableOptionMenuItemType.Header && option.itemType !== SelectableOption_1.SelectableOptionMenuItemType.Divider);
    }
    /**
     * For scenarios where the option's `text` prop contains embedded styles, we use the option's
     * `ariaLabel` value as the text in the input and for autocomplete matching. We know to use this
     * when the `useAriaLabelAsText` prop is set to true.
     */
    function getPreviewText(item) {
        return item.useAriaLabelAsText && item.ariaLabel ? item.ariaLabel : item.text;
    }
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    function isAltOrMeta(ev) {
        // eslint-disable-next-line deprecation/deprecation
        return ev.which === Utilities_1.KeyCodes.alt || ev.key === 'Meta';
    }
});
//# sourceMappingURL=ComboBox.js.map