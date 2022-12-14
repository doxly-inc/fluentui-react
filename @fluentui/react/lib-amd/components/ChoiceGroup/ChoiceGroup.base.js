define(["require", "exports", "tslib", "react", "../../Label", "../../Utilities", "./ChoiceGroupOption/index", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Label_1, Utilities_1, index_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var getOptionId = function (option, id) {
        return id + "-" + option.key;
    };
    var findOption = function (options, key) {
        return key === undefined ? undefined : Utilities_1.find(options, function (value) { return value.key === key; });
    };
    var useComponentRef = function (options, keyChecked, id, componentRef) {
        React.useImperativeHandle(componentRef, function () { return ({
            get checkedOption() {
                return findOption(options, keyChecked);
            },
            focus: function () {
                var optionToFocus = findOption(options, keyChecked) || options.filter(function (option) { return !option.disabled; })[0];
                var elementToFocus = optionToFocus && document.getElementById(getOptionId(optionToFocus, id));
                if (elementToFocus) {
                    elementToFocus.focus();
                    Utilities_1.setFocusVisibility(true, elementToFocus);
                }
            },
        }); }, [options, keyChecked, id]);
    };
    var COMPONENT_NAME = 'ChoiceGroup';
    exports.ChoiceGroupBase = React.forwardRef(function (props, forwardedRef) {
        var className = props.className, theme = props.theme, styles = props.styles, _a = props.options, options = _a === void 0 ? [] : _a, label = props.label, required = props.required, disabled = props.disabled, name = props.name, defaultSelectedKey = props.defaultSelectedKey, componentRef = props.componentRef, onChange = props.onChange;
        var id = react_hooks_1.useId('ChoiceGroup');
        var labelId = react_hooks_1.useId('ChoiceGroupLabel');
        var divProps = Utilities_1.getNativeProps(props, Utilities_1.divProperties, [
            'onChange',
            'className',
            'required',
        ]);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            optionsContainIconOrImage: options.some(function (option) { return !!(option.iconProps || option.imageSrc); }),
        });
        var ariaLabelledBy = props.ariaLabelledBy || (label ? labelId : props['aria-labelledby']);
        var _b = react_hooks_1.useControllableValue(props.selectedKey, defaultSelectedKey), keyChecked = _b[0], setKeyChecked = _b[1];
        var _c = React.useState(), keyFocused = _c[0], setKeyFocused = _c[1];
        useDebugWarnings(props);
        useComponentRef(options, keyChecked, id, componentRef);
        var onFocus = React.useCallback(function (ev, option) {
            var _a, _b;
            if (option) {
                setKeyFocused(option.itemKey);
                (_b = (_a = option).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, ev);
            }
        }, []);
        var onBlur = React.useCallback(function (ev, option) {
            var _a, _b, _c;
            setKeyFocused(undefined);
            (_c = (_a = option) === null || _a === void 0 ? void 0 : (_b = _a).onBlur) === null || _c === void 0 ? void 0 : _c.call(_b, ev);
        }, []);
        var onOptionChange = React.useCallback(function (evt, option) {
            var _a, _b, _c;
            if (!option) {
                return;
            }
            setKeyChecked(option.itemKey);
            (_b = (_a = option).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
            (_c = onChange) === null || _c === void 0 ? void 0 : _c(evt, findOption(options, option.itemKey));
        }, [onChange, options, setKeyChecked]);
        return (React.createElement("div", tslib_1.__assign({ className: classNames.root }, divProps, { ref: forwardedRef }),
            React.createElement("div", tslib_1.__assign({ role: "radiogroup" }, (ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy })),
                label && (React.createElement(Label_1.Label, { className: classNames.label, required: required, id: labelId, disabled: disabled }, label)),
                React.createElement("div", { className: classNames.flexContainer }, options.map(function (option) {
                    return (React.createElement(index_1.ChoiceGroupOption, tslib_1.__assign({ key: option.key, itemKey: option.key }, option, { onBlur: onBlur, onFocus: onFocus, onChange: onOptionChange, focused: option.key === keyFocused, checked: option.key === keyChecked, disabled: option.disabled || disabled, id: getOptionId(option, id), labelId: option.labelId || labelId + "-" + option.key, name: name || id, required: required })));
                })))));
    });
    exports.ChoiceGroupBase.displayName = COMPONENT_NAME;
    function useDebugWarnings(props) {
        
    }
});
//# sourceMappingURL=ChoiceGroup.base.js.map