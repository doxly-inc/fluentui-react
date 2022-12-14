import { __assign, __extends, __rest, __spreadArrays } from "tslib";
import * as React from 'react';
import { initializeComponentRef, getRTL, classNamesFunction, getNativeProps, htmlElementProperties, } from '../../Utilities';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { Link } from '../../Link';
import { Icon } from '../../Icon';
import { IconButton } from '../../Button';
import { DirectionalHint } from '../../common/DirectionalHint';
import { ResizeGroup } from '../../ResizeGroup';
import { TooltipHost, TooltipOverflowMode } from '../../Tooltip';
var getClassNames = classNamesFunction();
var OVERFLOW_KEY = 'overflow';
var nullFunction = function () { return null; };
var nonActionableItemProps = {
    styles: function (props) {
        var theme = props.theme;
        return {
            root: {
                selectors: {
                    '&.is-disabled': {
                        color: theme.semanticColors.bodyText,
                    },
                },
            },
        };
    },
};
/**
 * {@docCategory Breadcrumb}
 */
var BreadcrumbBase = /** @class */ (function (_super) {
    __extends(BreadcrumbBase, _super);
    function BreadcrumbBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusZone = React.createRef();
        /**
         * Remove the first rendered item past the overlow point and put it and the end the overflow set.
         */
        _this._onReduceData = function (data) {
            var renderedItems = data.renderedItems, renderedOverflowItems = data.renderedOverflowItems;
            var overflowIndex = data.props.overflowIndex;
            var movedItem = renderedItems[overflowIndex];
            if (!movedItem) {
                return undefined;
            }
            renderedItems = __spreadArrays(renderedItems);
            renderedItems.splice(overflowIndex, 1);
            renderedOverflowItems = __spreadArrays(renderedOverflowItems, [movedItem]);
            return __assign(__assign({}, data), { renderedItems: renderedItems, renderedOverflowItems: renderedOverflowItems });
        };
        /**
         * Remove the last item of the overflow set and insert the item as the start of the rendered set past the overflow
         * point.
         */
        _this._onGrowData = function (data) {
            var renderedItems = data.renderedItems, renderedOverflowItems = data.renderedOverflowItems;
            var _a = data.props, overflowIndex = _a.overflowIndex, maxDisplayedItems = _a.maxDisplayedItems;
            renderedOverflowItems = __spreadArrays(renderedOverflowItems);
            var movedItem = renderedOverflowItems.pop();
            if (!movedItem || renderedItems.length >= maxDisplayedItems) {
                return undefined;
            }
            renderedItems = __spreadArrays(renderedItems);
            renderedItems.splice(overflowIndex, 0, movedItem);
            return __assign(__assign({}, data), { renderedItems: renderedItems, renderedOverflowItems: renderedOverflowItems });
        };
        _this._onRenderBreadcrumb = function (data) {
            var _a = data.props, ariaLabel = _a.ariaLabel, _b = _a.dividerAs, DividerType = _b === void 0 ? Icon : _b, _c = _a.onRenderItem, onRenderItem = _c === void 0 ? _this._onRenderItem : _c, overflowAriaLabel = _a.overflowAriaLabel, overflowIndex = _a.overflowIndex, onRenderOverflowIcon = _a.onRenderOverflowIcon, overflowButtonAs = _a.overflowButtonAs;
            var renderedOverflowItems = data.renderedOverflowItems, renderedItems = data.renderedItems;
            var contextualItems = renderedOverflowItems.map(function (item) {
                var isActionable = !!(item.onClick || item.href);
                return {
                    text: item.text,
                    name: item.text,
                    key: item.key,
                    onClick: item.onClick ? _this._onBreadcrumbClicked.bind(_this, item) : null,
                    href: item.href,
                    disabled: !isActionable,
                    itemProps: isActionable ? undefined : nonActionableItemProps,
                };
            });
            // Find index of last rendered item so the divider icon
            // knows not to render on that item
            var lastItemIndex = renderedItems.length - 1;
            var hasOverflowItems = renderedOverflowItems && renderedOverflowItems.length !== 0;
            var itemElements = renderedItems.map(function (item, index) { return (React.createElement("li", { className: _this._classNames.listItem, key: item.key || String(index) },
                onRenderItem(item, _this._onRenderItem),
                (index !== lastItemIndex || (hasOverflowItems && index === overflowIndex - 1)) && (React.createElement(DividerType, { className: _this._classNames.chevron, iconName: getRTL(_this.props.theme) ? 'ChevronLeft' : 'ChevronRight', item: item })))); });
            if (hasOverflowItems) {
                var iconProps = !onRenderOverflowIcon ? { iconName: 'More' } : {};
                var onRenderMenuIcon = onRenderOverflowIcon ? onRenderOverflowIcon : nullFunction;
                var OverflowButton = overflowButtonAs ? overflowButtonAs : IconButton;
                itemElements.splice(overflowIndex, 0, React.createElement("li", { className: _this._classNames.overflow, key: OVERFLOW_KEY },
                    React.createElement(OverflowButton, { className: _this._classNames.overflowButton, iconProps: iconProps, role: "button", "aria-haspopup": "true", ariaLabel: overflowAriaLabel, onRenderMenuIcon: onRenderMenuIcon, menuProps: {
                            items: contextualItems,
                            directionalHint: DirectionalHint.bottomLeftEdge,
                        } }),
                    overflowIndex !== lastItemIndex + 1 && (React.createElement(DividerType, { className: _this._classNames.chevron, iconName: getRTL(_this.props.theme) ? 'ChevronLeft' : 'ChevronRight', item: renderedOverflowItems[renderedOverflowItems.length - 1] }))));
            }
            var nativeProps = getNativeProps(_this.props, htmlElementProperties, [
                'className',
            ]);
            return (React.createElement("div", __assign({ className: _this._classNames.root, role: "navigation", "aria-label": ariaLabel }, nativeProps),
                React.createElement(FocusZone, __assign({ componentRef: _this._focusZone, direction: FocusZoneDirection.horizontal }, _this.props.focusZoneProps),
                    React.createElement("ol", { className: _this._classNames.list }, itemElements))));
        };
        _this._onRenderItem = function (item) {
            var as = item.as, href = item.href, onClick = item.onClick, isCurrentItem = item.isCurrentItem, text = item.text, additionalProps = __rest(item, ["as", "href", "onClick", "isCurrentItem", "text"]);
            if (onClick || href) {
                return (React.createElement(Link, __assign({}, additionalProps, { as: as, className: _this._classNames.itemLink, href: href, "aria-current": isCurrentItem ? 'page' : undefined, 
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick: _this._onBreadcrumbClicked.bind(_this, item) }),
                    React.createElement(TooltipHost, __assign({ content: text, overflowMode: TooltipOverflowMode.Parent }, _this.props.tooltipHostProps), text)));
            }
            else {
                var Tag = as || 'span';
                return (React.createElement(Tag, __assign({}, additionalProps, { className: _this._classNames.item }),
                    React.createElement(TooltipHost, __assign({ content: text, overflowMode: TooltipOverflowMode.Parent }, _this.props.tooltipHostProps), text)));
            }
        };
        _this._onBreadcrumbClicked = function (item, ev) {
            if (item.onClick) {
                item.onClick(ev, item);
            }
        };
        initializeComponentRef(_this);
        _this._validateProps(props);
        return _this;
    }
    /**
     * Sets focus to the first breadcrumb link.
     */
    BreadcrumbBase.prototype.focus = function () {
        if (this._focusZone.current) {
            this._focusZone.current.focus();
        }
    };
    BreadcrumbBase.prototype.render = function () {
        this._validateProps(this.props);
        var _a = this.props, _b = _a.onReduceData, onReduceData = _b === void 0 ? this._onReduceData : _b, _c = _a.onGrowData, onGrowData = _c === void 0 ? this._onGrowData : _c, overflowIndex = _a.overflowIndex, maxDisplayedItems = _a.maxDisplayedItems, items = _a.items, className = _a.className, theme = _a.theme, styles = _a.styles;
        var renderedItems = __spreadArrays(items);
        var renderedOverflowItems = renderedItems.splice(overflowIndex, renderedItems.length - maxDisplayedItems);
        var breadcrumbData = {
            props: this.props,
            renderedItems: renderedItems,
            renderedOverflowItems: renderedOverflowItems,
        };
        this._classNames = getClassNames(styles, {
            className: className,
            theme: theme,
        });
        return (React.createElement(ResizeGroup, { onRenderData: this._onRenderBreadcrumb, onReduceData: onReduceData, onGrowData: onGrowData, data: breadcrumbData }));
    };
    /**
     * Validate incoming props
     * @param props - Props to validate
     */
    BreadcrumbBase.prototype._validateProps = function (props) {
        var maxDisplayedItems = props.maxDisplayedItems, overflowIndex = props.overflowIndex, items = props.items;
        if (overflowIndex < 0 ||
            (maxDisplayedItems > 1 && overflowIndex > maxDisplayedItems - 1) ||
            (items.length > 0 && overflowIndex > items.length - 1)) {
            throw new Error('Breadcrumb: overflowIndex out of range');
        }
    };
    BreadcrumbBase.defaultProps = {
        items: [],
        maxDisplayedItems: 999,
        overflowIndex: 0,
    };
    return BreadcrumbBase;
}(React.Component));
export { BreadcrumbBase };
//# sourceMappingURL=Breadcrumb.base.js.map