"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var AnalyticsViewIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 128v1664H0V128h2048zM128 256v256h1792V256H128zm1792 1408V640H128v1024h1792zM256 896h128v640H256V896zm256 384h128v256H512v-256zm256-128h128v384H768v-384zm256-384h128v768h-128V768zm512 128h128v640h-128V896zm-256 256h128v384h-128v-384z" })));
    },
    displayName: 'AnalyticsViewIcon',
});
exports.default = AnalyticsViewIcon;
//# sourceMappingURL=AnalyticsViewIcon.js.map