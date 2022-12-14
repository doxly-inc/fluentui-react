import { __assign } from "tslib";
import * as React from 'react';
import { useControllableValue, useId, useMergedRefs, useWarnings } from '@fluentui/react-hooks';
import { useFocusRects, classNamesFunction } from '@fluentui/utilities';
import { Icon } from '../Icon/Icon';
var getClassNames = classNamesFunction();
export var CheckboxBase = React.forwardRef(function (props, forwardedRef) {
    var disabled = props.disabled, required = props.required, inputProps = props.inputProps, name = props.name, ariaLabel = props.ariaLabel, ariaLabelledBy = props.ariaLabelledBy, ariaDescribedBy = props.ariaDescribedBy, ariaPositionInSet = props.ariaPositionInSet, ariaSetSize = props.ariaSetSize, title = props.title, label = props.label, checkmarkIconProps = props.checkmarkIconProps, styles = props.styles, theme = props.theme, className = props.className, _a = props.boxSide, boxSide = _a === void 0 ? 'start' : _a;
    var id = useId('checkbox-', props.id);
    var rootRef = React.useRef(null);
    var mergedRootRefs = useMergedRefs(rootRef, forwardedRef);
    var inputRef = React.useRef(null);
    var _b = useControllableValue(props.checked, props.defaultChecked, props.onChange), isChecked = _b[0], setIsChecked = _b[1];
    var _c = useControllableValue(props.indeterminate, props.defaultIndeterminate), isIndeterminate = _c[0], setIsIndeterminate = _c[1];
    useFocusRects(rootRef);
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
    var mergedInputProps = __assign(__assign({ className: classNames.input, type: 'checkbox' }, inputProps), { checked: !!isChecked, disabled: disabled,
        required: required,
        name: name,
        id: id,
        title: title,
        onChange: onChange, 'aria-disabled': disabled, 'aria-label': ariaLabel || label, 'aria-labelledby': ariaLabelledBy, 'aria-describedby': ariaDescribedBy, 'aria-posinset': ariaPositionInSet, 'aria-setsize': ariaSetSize, 'aria-checked': ariaChecked });
    return (React.createElement("div", { className: classNames.root, title: title, ref: mergedRootRefs },
        React.createElement("input", __assign({}, mergedInputProps, { ref: inputRef, "data-ktp-execute-target": true })),
        React.createElement("label", { className: classNames.label, htmlFor: id },
            React.createElement("div", { className: classNames.checkbox, "data-ktp-target": true },
                React.createElement(Icon, __assign({ iconName: "CheckMark" }, checkmarkIconProps, { className: classNames.checkmark }))),
            onRenderLabel(props, defaultLabelRenderer))));
});
CheckboxBase.displayName = 'CheckboxBase';
function useDebugWarning(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        useWarnings({
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