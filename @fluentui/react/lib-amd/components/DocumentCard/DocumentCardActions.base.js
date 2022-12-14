define(["require", "exports", "tslib", "react", "../../Utilities", "../../Icon", "../../Button"], function (require, exports, tslib_1, React, Utilities_1, Icon_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory DocumentCard}
     */
    var DocumentCardActionsBase = /** @class */ (function (_super) {
        tslib_1.__extends(DocumentCardActionsBase, _super);
        function DocumentCardActionsBase(props) {
            var _this = _super.call(this, props) || this;
            Utilities_1.initializeComponentRef(_this);
            return _this;
        }
        DocumentCardActionsBase.prototype.render = function () {
            var _this = this;
            var _a = this.props, actions = _a.actions, views = _a.views, styles = _a.styles, theme = _a.theme, className = _a.className;
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
            });
            return (React.createElement("div", { className: this._classNames.root },
                actions &&
                    actions.map(function (action, index) {
                        return (React.createElement("div", { className: _this._classNames.action, key: index },
                            React.createElement(Button_1.IconButton, tslib_1.__assign({}, action))));
                    }),
                views > 0 && (React.createElement("div", { className: this._classNames.views },
                    React.createElement(Icon_1.Icon, { iconName: "View", className: this._classNames.viewsIcon }),
                    views))));
        };
        return DocumentCardActionsBase;
    }(React.Component));
    exports.DocumentCardActionsBase = DocumentCardActionsBase;
});
//# sourceMappingURL=DocumentCardActions.base.js.map