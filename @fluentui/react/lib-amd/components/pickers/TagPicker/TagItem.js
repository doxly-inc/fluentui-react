define(["require", "exports", "tslib", "react", "../../../Utilities", "../../../Button", "./TagItem.styles", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Utilities_1, Button_1, TagItem_styles_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory TagPicker}
     */
    exports.TagItemBase = function (props) {
        var theme = props.theme, styles = props.styles, selected = props.selected, disabled = props.disabled, enableTagFocusInDisabledPicker = props.enableTagFocusInDisabledPicker, children = props.children, className = props.className, index = props.index, onRemoveItem = props.onRemoveItem, removeButtonAriaLabel = props.removeButtonAriaLabel, _a = props.title, title = _a === void 0 ? typeof props.children === 'string' ? props.children : props.item.name : _a;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            selected: selected,
            disabled: disabled,
        });
        var itemId = react_hooks_1.useId();
        var disabledAttrs = enableTagFocusInDisabledPicker
            ? {
                'aria-disabled': disabled,
                tabindex: 0,
            }
            : {
                disabled: disabled,
            };
        return (React.createElement("div", { className: classNames.root, role: 'listitem', key: index },
            React.createElement("span", { className: classNames.text, title: title, id: itemId + "-text" }, children),
            React.createElement(Button_1.IconButton, tslib_1.__assign({ id: itemId, onClick: onRemoveItem }, disabledAttrs, { iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, className: classNames.close, ariaLabel: removeButtonAriaLabel, "aria-labelledby": itemId + " " + itemId + "-text", "data-selection-index": index }))));
    };
    exports.TagItem = Utilities_1.styled(exports.TagItemBase, TagItem_styles_1.getStyles, undefined, {
        scope: 'TagItem',
    });
});
//# sourceMappingURL=TagItem.js.map