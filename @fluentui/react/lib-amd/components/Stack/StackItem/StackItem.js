define(["require", "exports", "tslib", "@fluentui/foundation-legacy", "../../../Utilities", "./StackItem.styles"], function (require, exports, tslib_1, foundation_legacy_1, Utilities_1, StackItem_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StackItemView = function (props) {
        var children = props.children;
        var nativeProps = Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties);
        // eslint-disable-next-line eqeqeq
        if (children == null) {
            return null;
        }
        var Slots = foundation_legacy_1.getSlots(props, {
            root: 'div',
        });
        return foundation_legacy_1.withSlots(Slots.root, tslib_1.__assign({}, nativeProps), children);
    };
    exports.StackItem = foundation_legacy_1.createComponent(StackItemView, {
        displayName: 'StackItem',
        styles: StackItem_styles_1.StackItemStyles,
    });
    exports.default = exports.StackItem;
});
//# sourceMappingURL=StackItem.js.map