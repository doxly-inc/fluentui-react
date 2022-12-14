define(["require", "exports", "tslib", "react", "../../Utilities", "@fluentui/react-hooks", "../../Button", "../../Icon"], function (require, exports, tslib_1, React, Utilities_1, react_hooks_1, Button_1, Icon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var COMPONENT_NAME = 'SearchBox';
    var iconButtonStyles = { root: { height: 'auto' }, icon: { fontSize: '12px' } };
    var iconButtonProps = { iconName: 'Clear' };
    var defaultClearButtonProps = { ariaLabel: 'Clear text' };
    var getClassNames = Utilities_1.classNamesFunction();
    var useComponentRef = function (componentRef, inputElementRef, hasFocus) {
        React.useImperativeHandle(componentRef, function () { return ({
            focus: function () { var _a; return (_a = inputElementRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
            hasFocus: function () { return hasFocus; },
        }); }, [inputElementRef, hasFocus]);
    };
    exports.SearchBoxBase = React.forwardRef(function (props, forwardedRef) {
        var _a = props.defaultValue, defaultValue = _a === void 0 ? '' : _a;
        var _b = React.useState(false), hasFocus = _b[0], setHasFocus = _b[1];
        var _c = react_hooks_1.useControllableValue(props.value, defaultValue, props.onChange), uncastValue = _c[0], setValue = _c[1];
        var value = String(uncastValue);
        var rootElementRef = React.useRef(null);
        var inputElementRef = React.useRef(null);
        var mergedRootRef = react_hooks_1.useMergedRefs(rootElementRef, forwardedRef);
        var id = react_hooks_1.useId(COMPONENT_NAME, props.id);
        var ariaLabel = props.ariaLabel, className = props.className, disabled = props.disabled, underlined = props.underlined, styles = props.styles, 
        // eslint-disable-next-line deprecation/deprecation
        labelText = props.labelText, 
        // eslint-disable-next-line deprecation/deprecation
        _d = props.placeholder, 
        // eslint-disable-next-line deprecation/deprecation
        placeholder = _d === void 0 ? labelText : _d, theme = props.theme, _e = props.clearButtonProps, clearButtonProps = _e === void 0 ? defaultClearButtonProps : _e, _f = props.disableAnimation, disableAnimation = _f === void 0 ? false : _f, customOnClear = props.onClear, customOnBlur = props.onBlur, customOnEscape = props.onEscape, customOnSearch = props.onSearch, customOnKeyDown = props.onKeyDown, iconProps = props.iconProps, role = props.role;
        var customOnClearClick = clearButtonProps.onClick;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            underlined: underlined,
            hasFocus: hasFocus,
            disabled: disabled,
            hasInput: value.length > 0,
            disableAnimation: disableAnimation,
        });
        var nativeProps = Utilities_1.getNativeProps(props, Utilities_1.inputProperties, [
            'className',
            'placeholder',
            'onFocus',
            'onBlur',
            'value',
            'role',
        ]);
        var onClear = React.useCallback(function (ev) {
            var _a, _b;
            (_a = customOnClear) === null || _a === void 0 ? void 0 : _a(ev);
            if (!ev.defaultPrevented) {
                setValue('');
                (_b = inputElementRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                ev.stopPropagation();
                ev.preventDefault();
            }
        }, [customOnClear, setValue]);
        var onClearClick = React.useCallback(function (ev) {
            var _a;
            (_a = customOnClearClick) === null || _a === void 0 ? void 0 : _a(ev);
            if (!ev.defaultPrevented) {
                onClear(ev);
            }
        }, [customOnClearClick, onClear]);
        var onFocusCapture = function (ev) {
            var _a, _b;
            setHasFocus(true);
            (_b = (_a = props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, ev);
        };
        var onClickFocus = function () {
            if (inputElementRef.current) {
                inputElementRef.current.focus();
                inputElementRef.current.selectionStart = inputElementRef.current.selectionEnd = 0;
            }
        };
        var onBlur = React.useCallback(function (ev) {
            var _a;
            setHasFocus(false);
            (_a = customOnBlur) === null || _a === void 0 ? void 0 : _a(ev);
        }, [customOnBlur]);
        var onInputChange = function (ev) {
            setValue(ev.target.value);
        };
        var onKeyDown = function (ev) {
            var _a, _b;
            // eslint-disable-next-line deprecation/deprecation
            switch (ev.which) {
                case Utilities_1.KeyCodes.escape:
                    (_a = customOnEscape) === null || _a === void 0 ? void 0 : _a(ev);
                    // Only call onClear if the search box has a value to clear. Otherwise, allow the Esc key
                    // to propagate from the empty search box to a parent element such as a dialog, etc.
                    if (value && !ev.defaultPrevented) {
                        onClear(ev);
                    }
                    break;
                case Utilities_1.KeyCodes.enter:
                    if (customOnSearch) {
                        customOnSearch(value);
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
                default:
                    // REVIEW: Why aren't we calling customOnKeyDown for Escape or Enter?
                    (_b = customOnKeyDown) === null || _b === void 0 ? void 0 : _b(ev);
                    // REVIEW: Why are we calling stopPropagation if customOnKeyDown called preventDefault?
                    // customOnKeyDown should call stopPropagation if it needs it.
                    if (ev.defaultPrevented) {
                        ev.stopPropagation();
                    }
                    break;
            }
        };
        useDebugWarning(props);
        useComponentRef(props.componentRef, inputElementRef, hasFocus);
        return (React.createElement("div", { role: role, ref: mergedRootRef, className: classNames.root, onFocusCapture: onFocusCapture },
            React.createElement("div", { className: classNames.iconContainer, onClick: onClickFocus, "aria-hidden": true },
                React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: "Search" }, iconProps, { className: classNames.icon }))),
            React.createElement("input", tslib_1.__assign({}, nativeProps, { id: id, className: classNames.field, placeholder: placeholder, onChange: onInputChange, onInput: onInputChange, onBlur: onBlur, onKeyDown: onKeyDown, value: value, disabled: disabled, role: "searchbox", "aria-label": ariaLabel, ref: inputElementRef })),
            value.length > 0 && (React.createElement("div", { className: classNames.clearButton },
                React.createElement(Button_1.IconButton, tslib_1.__assign({ onBlur: onBlur, styles: iconButtonStyles, iconProps: iconButtonProps }, clearButtonProps, { onClick: onClearClick }))))));
    });
    exports.SearchBoxBase.displayName = COMPONENT_NAME;
    function useDebugWarning(props) {
        
    }
});
//# sourceMappingURL=SearchBox.base.js.map