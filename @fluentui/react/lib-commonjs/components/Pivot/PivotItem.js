"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var utilities_1 = require("@fluentui/utilities");
var COMPONENT_NAME = 'PivotItem';
var PivotItem = /** @class */ (function (_super) {
    tslib_1.__extends(PivotItem, _super);
    function PivotItem(props) {
        var _this = _super.call(this, props) || this;
        utilities_1.initializeComponentRef(_this);
        utilities_1.warnDeprecations(COMPONENT_NAME, props, {
            linkText: 'headerText',
        });
        return _this;
    }
    PivotItem.prototype.render = function () {
        return React.createElement("div", tslib_1.__assign({}, utilities_1.getNativeProps(this.props, utilities_1.divProperties)), this.props.children);
    };
    return PivotItem;
}(React.Component));
exports.PivotItem = PivotItem;
//# sourceMappingURL=PivotItem.js.map