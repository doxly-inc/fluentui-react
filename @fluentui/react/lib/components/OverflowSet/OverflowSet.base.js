import { __assign } from "tslib";
import * as React from 'react';
import { useMergedRefs } from '@fluentui/react-hooks';
import { classNamesFunction, divProperties, elementContains, getNativeProps, focusFirstChild } from '../../Utilities';
import { OverflowButton } from './OverflowButton';
var getClassNames = classNamesFunction();
var COMPONENT_NAME = 'OverflowSet';
var useComponentRef = function (props, divContainer) {
    React.useImperativeHandle(props.componentRef, function () { return ({
        focus: function () {
            var focusSucceeded = false;
            if (divContainer.current) {
                focusSucceeded = focusFirstChild(divContainer.current);
            }
            return focusSucceeded;
        },
        focusElement: function (childElement) {
            var focusSucceeded = false;
            if (!childElement) {
                return false;
            }
            if (divContainer.current && elementContains(divContainer.current, childElement)) {
                childElement.focus();
                focusSucceeded = document.activeElement === childElement;
            }
            return focusSucceeded;
        },
    }); }, [divContainer]);
};
export var OverflowSetBase = React.forwardRef(function (props, forwardedRef) {
    var divContainer = React.useRef(null);
    var mergedRef = useMergedRefs(divContainer, forwardedRef);
    useComponentRef(props, divContainer);
    var items = props.items, overflowItems = props.overflowItems, className = props.className, styles = props.styles, vertical = props.vertical, role = props.role, _a = props.overflowSide, overflowSide = _a === void 0 ? 'end' : _a, onRenderItem = props.onRenderItem;
    var classNames = getClassNames(styles, { className: className, vertical: vertical });
    var showOverflow = !!overflowItems && overflowItems.length > 0;
    return (React.createElement("div", __assign({}, getNativeProps(props, divProperties), { role: role || 'group', "aria-orientation": role === 'menubar' ? (vertical === true ? 'vertical' : 'horizontal') : undefined, className: classNames.root, ref: mergedRef }),
        overflowSide === 'start' && showOverflow && React.createElement(OverflowButton, __assign({}, props, { className: classNames.overflowButton })),
        items &&
            items.map(function (item, i) { return (React.createElement("div", { className: classNames.item, key: item.key }, onRenderItem(item))); }),
        overflowSide === 'end' && showOverflow && React.createElement(OverflowButton, __assign({}, props, { className: classNames.overflowButton }))));
});
OverflowSetBase.displayName = COMPONENT_NAME;
//# sourceMappingURL=OverflowSet.base.js.map