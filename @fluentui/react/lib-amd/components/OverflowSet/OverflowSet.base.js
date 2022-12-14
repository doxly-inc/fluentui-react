define(["require", "exports", "tslib", "react", "@fluentui/react-hooks", "../../Utilities", "./OverflowButton"], function (require, exports, tslib_1, React, react_hooks_1, Utilities_1, OverflowButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var COMPONENT_NAME = 'OverflowSet';
    var useComponentRef = function (props, divContainer) {
        React.useImperativeHandle(props.componentRef, function () { return ({
            focus: function () {
                var focusSucceeded = false;
                if (divContainer.current) {
                    focusSucceeded = Utilities_1.focusFirstChild(divContainer.current);
                }
                return focusSucceeded;
            },
            focusElement: function (childElement) {
                var focusSucceeded = false;
                if (!childElement) {
                    return false;
                }
                if (divContainer.current && Utilities_1.elementContains(divContainer.current, childElement)) {
                    childElement.focus();
                    focusSucceeded = document.activeElement === childElement;
                }
                return focusSucceeded;
            },
        }); }, [divContainer]);
    };
    exports.OverflowSetBase = React.forwardRef(function (props, forwardedRef) {
        var divContainer = React.useRef(null);
        var mergedRef = react_hooks_1.useMergedRefs(divContainer, forwardedRef);
        useComponentRef(props, divContainer);
        var items = props.items, overflowItems = props.overflowItems, className = props.className, styles = props.styles, vertical = props.vertical, role = props.role, _a = props.overflowSide, overflowSide = _a === void 0 ? 'end' : _a, onRenderItem = props.onRenderItem;
        var classNames = getClassNames(styles, { className: className, vertical: vertical });
        var showOverflow = !!overflowItems && overflowItems.length > 0;
        return (React.createElement("div", tslib_1.__assign({}, Utilities_1.getNativeProps(props, Utilities_1.divProperties), { role: role || 'group', "aria-orientation": role === 'menubar' ? (vertical === true ? 'vertical' : 'horizontal') : undefined, className: classNames.root, ref: mergedRef }),
            overflowSide === 'start' && showOverflow && React.createElement(OverflowButton_1.OverflowButton, tslib_1.__assign({}, props, { className: classNames.overflowButton })),
            items &&
                items.map(function (item, i) { return (React.createElement("div", { className: classNames.item, key: item.key }, onRenderItem(item))); }),
            overflowSide === 'end' && showOverflow && React.createElement(OverflowButton_1.OverflowButton, tslib_1.__assign({}, props, { className: classNames.overflowButton }))));
    });
    exports.OverflowSetBase.displayName = COMPONENT_NAME;
});
//# sourceMappingURL=OverflowSet.base.js.map