import { __assign } from "tslib";
import * as React from 'react';
import { useControllableValue, useId, useWarnings } from '@fluentui/react-hooks';
import { classNamesFunction, getNativeProps, inputProperties, useFocusRects } from '@fluentui/utilities';
import { Label } from '../Label/Label';
var getClassNames = classNamesFunction();
var COMPONENT_NAME = 'Toggle';
export var ToggleBase = React.forwardRef(function (props, forwardedRef) {
    var _a = props.as, RootType = _a === void 0 ? 'div' : _a, ariaLabel = props.ariaLabel, controlledChecked = props.checked, className = props.className, _b = props.defaultChecked, defaultChecked = _b === void 0 ? false : _b, disabled = props.disabled, inlineLabel = props.inlineLabel, label = props.label, 
    // eslint-disable-next-line deprecation/deprecation
    offAriaLabel = props.offAriaLabel, offText = props.offText, 
    // eslint-disable-next-line deprecation/deprecation
    onAriaLabel = props.onAriaLabel, onChange = props.onChange, 
    // eslint-disable-next-line deprecation/deprecation
    onChanged = props.onChanged, onToggleClick = props.onClick, onText = props.onText, role = props.role, styles = props.styles, theme = props.theme;
    var _c = useControllableValue(controlledChecked, defaultChecked, React.useCallback(function (ev, isChecked) {
        var _a, _b;
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(ev, isChecked);
        (_b = onChanged) === null || _b === void 0 ? void 0 : _b(isChecked);
    }, [onChange, onChanged])), checked = _c[0], setChecked = _c[1];
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        disabled: disabled,
        checked: checked,
        inlineLabel: inlineLabel,
        onOffMissing: !onText && !offText,
    });
    var badAriaLabel = checked ? onAriaLabel : offAriaLabel;
    var id = useId(COMPONENT_NAME, props.id);
    var labelId = id + "-label";
    var stateTextId = id + "-stateText";
    var stateText = checked ? onText : offText;
    var toggleNativeProps = getNativeProps(props, inputProperties, [
        'defaultChecked',
    ]);
    // The following properties take priority for what Narrator should read:
    // 1. ariaLabel
    // 2. onAriaLabel (if checked) or offAriaLabel (if not checked)
    // 3. label AND stateText, if existent
    var labelledById = undefined;
    if (!ariaLabel && !badAriaLabel) {
        if (label) {
            labelledById = labelId;
        }
        if (stateText) {
            labelledById = labelledById ? labelledById + " " + stateTextId : stateTextId;
        }
    }
    var toggleButton = React.useRef(null);
    useFocusRects(toggleButton);
    useComponentRef(props, checked, toggleButton);
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        useWarnings({
            name: COMPONENT_NAME,
            props: props,
            deprecations: {
                offAriaLabel: undefined,
                onAriaLabel: 'ariaLabel',
                onChanged: 'onChange',
            },
            mutuallyExclusive: { checked: 'defaultChecked' },
        });
    }
    var onClick = function (ev) {
        if (!disabled) {
            setChecked(!checked, ev);
            if (onToggleClick) {
                onToggleClick(ev);
            }
        }
    };
    var slotProps = {
        root: {
            className: classNames.root,
            hidden: toggleNativeProps.hidden,
        },
        label: {
            children: label,
            className: classNames.label,
            htmlFor: id,
            id: labelId,
        },
        container: {
            className: classNames.container,
        },
        pill: __assign(__assign({}, toggleNativeProps), { 'aria-disabled': disabled, 'aria-checked': checked, 'aria-label': ariaLabel ? ariaLabel : badAriaLabel, 'aria-labelledby': labelledById, className: classNames.pill, 'data-is-focusable': true, 'data-ktp-target': true, disabled: disabled, id: id, onClick: onClick, ref: toggleButton, role: role ? role : 'switch', type: 'button' }),
        thumb: {
            className: classNames.thumb,
        },
        stateText: {
            children: stateText,
            className: classNames.text,
            htmlFor: id,
            id: stateTextId,
        },
    };
    return (React.createElement(RootType, __assign({ ref: forwardedRef }, slotProps.root),
        label && React.createElement(Label, __assign({}, slotProps.label)),
        React.createElement("div", __assign({}, slotProps.container),
            React.createElement("button", __assign({}, slotProps.pill),
                React.createElement("span", __assign({}, slotProps.thumb))),
            ((checked && onText) || offText) && React.createElement(Label, __assign({}, slotProps.stateText)))));
});
ToggleBase.displayName = COMPONENT_NAME + 'Base';
var useComponentRef = function (props, isChecked, toggleButtonRef) {
    React.useImperativeHandle(props.componentRef, function () { return ({
        get checked() {
            return !!isChecked;
        },
        focus: function () {
            if (toggleButtonRef.current) {
                toggleButtonRef.current.focus();
            }
        },
    }); }, [isChecked, toggleButtonRef]);
};
//# sourceMappingURL=Toggle.base.js.map