"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Icon_1 = require("../../Icon");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory DocumentCard}
 */
var DocumentCardLogoBase = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentCardLogoBase, _super);
    function DocumentCardLogoBase(props) {
        var _this = _super.call(this, props) || this;
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    DocumentCardLogoBase.prototype.render = function () {
        var _a = this.props, logoIcon = _a.logoIcon, styles = _a.styles, theme = _a.theme, className = _a.className;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return (React.createElement("div", { className: this._classNames.root },
            React.createElement(Icon_1.Icon, { iconName: logoIcon })));
    };
    return DocumentCardLogoBase;
}(React.Component));
exports.DocumentCardLogoBase = DocumentCardLogoBase;
//# sourceMappingURL=DocumentCardLogo.base.js.map