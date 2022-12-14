"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_hooks_1 = require("@fluentui/react-hooks");
var utilities_1 = require("@fluentui/utilities");
var Icon_1 = require("../Icon/Icon");
var getClassNames = utilities_1.classNamesFunction();
exports.CheckboxBase = React.forwardRef(function (props, forwardedRef) {
    var disabled = props.disabled, required = props.required, inputProps = props.inputProps, name = props.name, ariaLabel = props.ariaLabel, ariaLabelledBy = props.ariaLabelledBy, ariaDescribedBy = props.ariaDescribedBy, ariaPositionInSet = props.ariaPositionInSet, ariaSetSize = props.ariaSetSize, title = props.title, label = props.label, checkmarkIconProps = props.checkmarkIconProps, styles = props.styles, theme = props.theme, className = props.className, _a = props.boxSide, boxSide = _a === void 0 ? 'start' : _a;
    var id = react_hooks_1.useId('checkbox-', props.id);
    var rootRef = React.useRef(null);
    var mergedRootRefs = react_hooks_1.useMergedRefs(rootRef, forwardedRef);
    var inputRef = React.useRef(null);
    var _b = react_hooks_1.useControllableValue(props.checked, props.defaultChecked, props.onChange), isChecked = _b[0], setIsChecked = _b[1];
    var _c = react_hooks_1.useControllableValue(props.indeterminate, props.defaultIndeterminate), isIndeterminate = _c[0], setIsIndeterminate = _c[1];
    utilities_1.useFocusRects(rootRef);
    useDebugWarning(props);
    useComponentRef(props, isChecked, isIndeterminate, inputRef);
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        disabled: disabled,
        indeterminate: isIndeterminate,
        checked: isChecked,
        reversed: boxSide !== 'start',
        isUsingCustomLabelRender: !!props.onRenderLabel,
    });
    var onChange = function (ev) {
        if (isIndeterminate) {
            // If indeterminate, clicking the checkbox *only* removes the indeterminate state (or if
            // controlled, lets the consumer know to change it by calling onChange). It doesn't
            // change the checked state.
            setIsChecked(!!isChecked, ev);
            setIsIndeterminate(false);
        }
        else {
            setIsChecked(!isChecked, ev);
        }
    };
    var defaultLabelRenderer = React.useCallback(function (checkboxProps) {
        if (!checkboxProps) {
            return null;
        }
        return checkboxProps.label ? (React.createElement("span", { "aria-hidden": "true", className: classNames.text, title: checkboxProps.title }, checkboxProps.label)) : null;
    }, [classNames.text]);
    var onRenderLabel = props.onRenderLabel || defaultLabelRenderer;
    var ariaChecked = isIndeterminate
        ? 'mixed'
        : isChecked
            ? 'true'
            : 'false';
    var mergedInputProps = tslib_1.__assign(tslib_1.__assign({ className: classNames.input, type: 'checkbox' }, inputProps), { checked: !!isChecked, disabled: disabled,
        required: required,
        name: name,
        id: id,
        title: title,
        onChange: onChange, 'aria-disabled': disabled, 'aria-label': ariaLabel || label, 'aria-labelledby': ariaLabelledBy, 'aria-describedby': ariaDescribedBy, 'aria-posinset': ariaPositionInSet, 'aria-setsize': ariaSetSize, 'aria-checked': ariaChecked });
    return (React.createElement("div", { className: classNames.root, title: title, ref: mergedRootRefs },
        React.createElement("input", tslib_1.__assign({}, mergedInputProps, { ref: inputRef, "data-ktp-execute-target": true })),
        React.createElement("label", { className: classNames.label, htmlFor: id },
            React.createElement("div", { className: classNames.checkbox, "data-ktp-target": true },
                React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: "CheckMark" }, checkmarkIconProps, { className: classNames.checkmark }))),
            onRenderLabel(props, defaultLabelRenderer))));
});
exports.CheckboxBase.displayName = 'CheckboxBase';
function useDebugWarning(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        react_hooks_1.useWarnings({
            name: 'Checkbox',
            props: props,
            mutuallyExclusive: {
                checked: 'defaultChecked',
                indeterminate: 'defaultIndeterminate',
            },
        });
    }
}
function useComponentRef(props, isChecked, isIndeterminate, checkBoxRef) {
    React.useImperativeHandle(props.componentRef, function () { return ({
        get checked() {
            return !!isChecked;
        },
        get indeterminate() {
            return !!isIndeterminate;
        },
        focus: function () {
            if (checkBoxRef.current) {
                checkBoxRef.current.focus();
            }
        },
    }); }, [checkBoxRef, isChecked, isIndeterminate]);
}
//# sourceMappingURL=Checkbox.base.js.map