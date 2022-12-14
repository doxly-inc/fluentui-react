"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory Announced}
 */
var AnnouncedBase = /** @class */ (function (_super) {
    tslib_1.__extends(AnnouncedBase, _super);
    function AnnouncedBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnouncedBase.prototype.render = function () {
        var _a = this.props, message = _a.message, styles = _a.styles, _b = _a.as, Root = _b === void 0 ? 'div' : _b, className = _a.className;
        var classNames = getClassNames(styles, { className: className });
        return (React.createElement(Root, tslib_1.__assign({ role: "status", className: classNames.root }, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties, ['className'])),
            React.createElement(Utilities_1.DelayedRender, null,
                React.createElement("div", { className: classNames.screenReaderText }, message))));
    };
    AnnouncedBase.defaultProps = {
        'aria-live': 'polite',
    };
    return AnnouncedBase;
}(React.Component));
exports.AnnouncedBase = AnnouncedBase;
//# sourceMappingURL=Announced.base.js.map