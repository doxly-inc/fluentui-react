define(["require", "exports", "tslib", "react", "../../Utilities"], function (require, exports, tslib_1, React, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory DocumentCard}
     */
    var DocumentCardLocationBase = /** @class */ (function (_super) {
        tslib_1.__extends(DocumentCardLocationBase, _super);
        function DocumentCardLocationBase(props) {
            var _this = _super.call(this, props) || this;
            Utilities_1.initializeComponentRef(_this);
            return _this;
        }
        DocumentCardLocationBase.prototype.render = function () {
            var _a = this.props, location = _a.location, locationHref = _a.locationHref, ariaLabel = _a.ariaLabel, onClick = _a.onClick, styles = _a.styles, theme = _a.theme, className = _a.className;
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
            });
            return (React.createElement("a", { className: this._classNames.root, href: locationHref, onClick: onClick, "aria-label": ariaLabel }, location));
        };
        return DocumentCardLocationBase;
    }(React.Component));
    exports.DocumentCardLocationBase = DocumentCardLocationBase;
});
//# sourceMappingURL=DocumentCardLocation.base.js.map