"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_hooks_1 = require("@fluentui/react-hooks");
var utilities_1 = require("@fluentui/utilities");
var Label_1 = require("../Label/Label");
var getClassNames = utilities_1.classNamesFunction();
var COMPONENT_NAME = 'Toggle';
exports.ToggleBase = React.forwardRef(function (props, forwardedRef) {
    var _a = props.as, RootType = _a === void 0 ? 'div' : _a, ariaLabel = props.ariaLabel, controlledChecked = props.checked, className = props.className, _b = props.defaultChecked, defaultChecked = _b === void 0 ? false : _b, disabled = props.disabled, inlineLabel = props.inlineLabel, label = props.label, 
    // eslint-disable-next-line deprecation/deprecation
    offAriaLabel = props.offAriaLabel, offText = props.offText, 
    // eslint-disable-next-line deprecation/deprecation
    onAriaLabel = props.onAriaLabel, onChange = props.onChange, 
    // eslint-disable-next-line deprecation/deprecation
    onChanged = props.onChanged, onToggleClick = props.onClick, onText = props.onText, role = props.role, styles = props.styles, theme = props.theme;
    var _c = react_hooks_1.useControllableValue(controlledChecked, defaultChecked, React.useCallback(function (ev, isChecked) {
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
    var id = react_hooks_1.useId(COMPONENT_NAME, props.id);
    var labelId = id + "-label";
    var stateTextId = id + "-stateText";
    var stateText = checked ? onText : offText;
    var toggleNativeProps = utilities_1.getNativeProps(props, utilities_1.inputProperties, [
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
    utilities_1.useFocusRects(toggleButton);
    useComponentRef(props, checked, toggleButton);
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        react_hooks_1.useWarnings({
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
        pill: tslib_1.__assign(tslib_1.__assign({}, toggleNativeProps), { 'aria-disabled': disabled, 'aria-checked': checked, 'aria-label': ariaLabel ? ariaLabel : badAriaLabel, 'aria-labelledby': labelledById, className: classNames.pill, 'data-is-focusable': true, 'data-ktp-target': true, disabled: disabled, id: id, onClick: onClick, ref: toggleButton, role: role ? role : 'switch', type: 'button' }),
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
    return (React.createElement(RootType, tslib_1.__assign({ ref: forwardedRef }, slotProps.root),
        label && React.createElement(Label_1.Label, tslib_1.__assign({}, slotProps.label)),
        React.createElement("div", tslib_1.__assign({}, slotProps.container),
            React.createElement("button", tslib_1.__assign({}, slotProps.pill),
                React.createElement("span", tslib_1.__assign({}, slotProps.thumb))),
            ((checked && onText) || offText) && React.createElement(Label_1.Label, tslib_1.__assign({}, slotProps.stateText)))));
});
exports.ToggleBase.displayName = COMPONENT_NAME + 'Base';
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