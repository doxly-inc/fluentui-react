define(["require", "exports", "tslib", "react", "../../Utilities", "../../Icon"], function (require, exports, tslib_1, React, Utilities_1, Icon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory DocumentCard}
     */
    var DocumentCardStatusBase = /** @class */ (function (_super) {
        tslib_1.__extends(DocumentCardStatusBase, _super);
        function DocumentCardStatusBase(props) {
            var _this = _super.call(this, props) || this;
            Utilities_1.initializeComponentRef(_this);
            return _this;
        }
        DocumentCardStatusBase.prototype.render = function () {
            var _a = this.props, statusIcon = _a.statusIcon, status = _a.status, styles = _a.styles, theme = _a.theme, className = _a.className;
            var iconProps = {
                iconName: statusIcon,
                styles: {
                    root: { padding: '8px' },
                },
            };
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
            });
            return (React.createElement("div", { className: this._classNames.root },
                statusIcon && React.createElement(Icon_1.Icon, tslib_1.__assign({}, iconProps)),
                status));
        };
        return DocumentCardStatusBase;
    }(React.Component));
    exports.DocumentCardStatusBase = DocumentCardStatusBase;
});
//# sourceMappingURL=DocumentCardStatus.base.js.map