"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var WorkIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 384v1280H0V384h640V256q0-27 10-50t27-40 41-28 50-10h512q27 0 50 10t40 27 28 41 10 50v128h640zm-1280 0h512V256H768v128zM128 512v185l640 319V896h512v120l640-319V512H128zm768 512v128h256v-128H896zm1024 512V839l-640 321v120H768v-120L128 839v697h1792z" })));
    },
    displayName: 'WorkIcon',
});
exports.default = WorkIcon;
//# sourceMappingURL=WorkIcon.js.map