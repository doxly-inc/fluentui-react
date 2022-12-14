"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var PhishingIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 384v1280l-128-230V648l-896 447-896-447v888h845l-64 128H0V384h2048zM1024 953l881-441H143l881 441zm384 455h128v320h-128v-320zm0 384h128v128h-128v-128zm64-896l576 1152H896l576-1152zm395 1040l-395-790-395 790h790z" })));
    },
    displayName: 'PhishingIcon',
});
exports.default = PhishingIcon;
//# sourceMappingURL=PhishingIcon.js.map