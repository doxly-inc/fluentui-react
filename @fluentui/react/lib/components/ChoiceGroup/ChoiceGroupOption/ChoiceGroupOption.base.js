import { __assign, __rest } from "tslib";
import * as React from 'react';
import { Image } from '../../../Image';
import { Icon } from '../../../Icon';
import { classNamesFunction, getNativeProps, inputProperties, css, composeRenderFunction, getPropsWithDefaults, } from '../../../Utilities';
var getClassNames = classNamesFunction();
var LARGE_IMAGE_SIZE = 71;
var DEFAULT_PROPS = {
    // This ensures default imageSize value doesn't mutate. Mutation can cause style re-calcuation.
    imageSize: { width: 32, height: 32 },
};
export var ChoiceGroupOptionBase = function (propsWithoutDefaults) {
    // Mix the `key` prop back in since custom render functions may be expecting it
    // (React uses `key` internally rather than passing it through to the component)
    var props = getPropsWithDefaults(__assign(__assign({}, DEFAULT_PROPS), { key: propsWithoutDefaults.itemKey }), propsWithoutDefaults);
    var ariaLabel = props.ariaLabel, focused = props.focused, required = props.required, theme = props.theme, iconProps = props.iconProps, imageSrc = props.imageSrc, imageSize = props.imageSize, disabled = props.disabled, checked = props.checked, id = props.id, styles = props.styles, name = props.name, rest = __rest(props, ["ariaLabel", "focused", "required", "theme", "iconProps", "imageSrc", "imageSize", "disabled", "checked", "id", "styles", "name"]);
    var classNames = getClassNames(styles, {
        theme: theme,
        hasIcon: !!iconProps,
        hasImage: !!imageSrc,
        checked: checked,
        disabled: disabled,
        imageIsLarge: !!imageSrc && (imageSize.width > LARGE_IMAGE_SIZE || imageSize.height > LARGE_IMAGE_SIZE),
        imageSize: imageSize,
        focused: focused,
    });
    var _a = getNativeProps(rest, inputProperties), className = _a.className, nativeProps = __rest(_a, ["className"]);
    var defaultOnRenderLabel = function () {
        return (React.createElement("span", { id: props.labelId, className: "ms-ChoiceFieldLabel" }, props.text));
    };
    var defaultOnRenderField = function () {
        var _a = props.imageAlt, imageAlt = _a === void 0 ? '' : _a, selectedImageSrc = props.selectedImageSrc;
        var onRenderLabel = props.onRenderLabel
            ? composeRenderFunction(props.onRenderLabel, defaultOnRenderLabel)
            : defaultOnRenderLabel;
        var label = onRenderLabel(props);
        return (React.createElement("label", { htmlFor: id, className: classNames.field },
            imageSrc && (React.createElement("div", { className: classNames.innerField },
                React.createElement("div", { className: classNames.imageWrapper },
                    React.createElement(Image, __assign({ src: imageSrc, alt: imageAlt }, imageSize))),
                React.createElement("div", { className: classNames.selectedImageWrapper },
                    React.createElement(Image, __assign({ src: selectedImageSrc, alt: imageAlt }, imageSize))))),
            iconProps && (React.createElement("div", { className: classNames.innerField },
                React.createElement("div", { className: classNames.iconWrapper },
                    React.createElement(Icon, __assign({}, iconProps))))),
            imageSrc || iconProps ? React.createElement("div", { className: classNames.labelWrapper }, label) : label));
    };
    var _b = props.onRenderField, onRenderField = _b === void 0 ? defaultOnRenderField : _b;
    var onChange = function (evt) {
        var _a, _b;
        (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, evt, props);
    };
    var onBlur = function (evt) {
        var _a, _b;
        (_b = (_a = props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
    };
    var onFocus = function (evt) {
        var _a, _b;
        (_b = (_a = props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, evt, props);
    };
    return (React.createElement("div", { className: classNames.root },
        React.createElement("div", { className: classNames.choiceFieldWrapper },
            React.createElement("input", __assign({ "aria-label": ariaLabel, id: id, className: css(classNames.input, className), type: "radio", name: name, disabled: disabled, checked: checked, required: required }, nativeProps, { onChange: onChange, onFocus: onFocus, onBlur: onBlur })),
            onRenderField(props, defaultOnRenderField))));
};
ChoiceGroupOptionBase.displayName = 'ChoiceGroupOption';
//# sourceMappingURL=ChoiceGroupOption.base.js.map