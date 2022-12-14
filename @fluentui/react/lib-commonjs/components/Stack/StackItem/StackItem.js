"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var foundation_legacy_1 = require("@fluentui/foundation-legacy");
var Utilities_1 = require("../../../Utilities");
var StackItem_styles_1 = require("./StackItem.styles");
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
//# sourceMappingURL=StackItem.js.map