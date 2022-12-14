define(["require", "exports", "tslib", "@fluentui/foundation-legacy", "../../Utilities"], function (require, exports, tslib_1, foundation_legacy_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextView = function (props) {
        // eslint-disable-next-line eqeqeq
        if (props.children == null) {
            return null;
        }
        var block = props.block, className = props.className, _a = props.as, RootType = _a === void 0 ? 'span' : _a, variant = props.variant, nowrap = props.nowrap, rest = tslib_1.__rest(props, ["block", "className", "as", "variant", "nowrap"]);
        var Slots = foundation_legacy_1.getSlots(props, {
            root: RootType,
        });
        return foundation_legacy_1.withSlots(Slots.root, tslib_1.__assign({}, Utilities_1.getNativeProps(rest, Utilities_1.htmlElementProperties)));
    };
});
//# sourceMappingURL=Text.view.js.map