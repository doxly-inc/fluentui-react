define(["require", "exports", "tslib", "react", "../../../../Utilities", "../../../../ContextualMenu"], function (require, exports, tslib_1, React, Utilities_1, ContextualMenu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectedItemWithContextMenu = /** @class */ (function (_super) {
        tslib_1.__extends(SelectedItemWithContextMenu, _super);
        function SelectedItemWithContextMenu(props) {
            var _this = _super.call(this, props) || this;
            _this.itemElement = React.createRef();
            _this._onClick = function (ev) {
                ev.preventDefault();
                if (_this.props.beginEditing && !_this.props.item.isValid) {
                    _this.props.beginEditing(_this.props.item);
                }
                else {
                    _this.setState({ contextualMenuVisible: true });
                }
            };
            _this._onCloseContextualMenu = function (ev) {
                _this.setState({ contextualMenuVisible: false });
            };
            Utilities_1.initializeComponentRef(_this);
            _this.state = { contextualMenuVisible: false };
            return _this;
        }
        SelectedItemWithContextMenu.prototype.render = function () {
            return (React.createElement("div", { ref: this.itemElement, onContextMenu: this._onClick },
                this.props.renderedItem,
                this.state.contextualMenuVisible ? (React.createElement(ContextualMenu_1.ContextualMenu, { items: this.props.menuItems, shouldFocusOnMount: true, target: this.itemElement.current, onDismiss: this._onCloseContextualMenu, directionalHint: ContextualMenu_1.DirectionalHint.bottomLeftEdge })) : null));
        };
        return SelectedItemWithContextMenu;
    }(React.Component));
    exports.SelectedItemWithContextMenu = SelectedItemWithContextMenu;
});
//# sourceMappingURL=SelectedItemWithContextMenu.js.map