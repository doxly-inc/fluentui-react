"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory DocumentCard}
 */
var DocumentCardDetailsBase = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentCardDetailsBase, _super);
    function DocumentCardDetailsBase(props) {
        var _this = _super.call(this, props) || this;
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    DocumentCardDetailsBase.prototype.render = function () {
        var _a = this.props, children = _a.children, styles = _a.styles, theme = _a.theme, className = _a.className;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return React.createElement("div", { className: this._classNames.root }, children);
    };
    return DocumentCardDetailsBase;
}(React.Component));
exports.DocumentCardDetailsBase = DocumentCardDetailsBase;
//# sourceMappingURL=DocumentCardDetails.base.js.map