define(["require", "exports", "tslib", "react", "../../Utilities"], function (require, exports, tslib_1, React, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var DialogFooterBase = /** @class */ (function (_super) {
        tslib_1.__extends(DialogFooterBase, _super);
        function DialogFooterBase(props) {
            var _this = _super.call(this, props) || this;
            Utilities_1.initializeComponentRef(_this);
            return _this;
        }
        DialogFooterBase.prototype.render = function () {
            var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
            });
            return (React.createElement("div", { className: this._classNames.actions },
                React.createElement("div", { className: this._classNames.actionsRight }, this._renderChildrenAsActions())));
        };
        DialogFooterBase.prototype._renderChildrenAsActions = function () {
            var _this = this;
            return React.Children.map(this.props.children, function (child) {
                return child ? React.createElement("span", { className: _this._classNames.action }, child) : null;
            });
        };
        return DialogFooterBase;
    }(React.Component));
    exports.DialogFooterBase = DialogFooterBase;
});
//# sourceMappingURL=DialogFooter.base.js.map