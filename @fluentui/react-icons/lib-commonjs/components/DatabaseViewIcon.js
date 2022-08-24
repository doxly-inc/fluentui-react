"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var DatabaseViewIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M256 1280v-128h1152v128H256zM384 0h1664v1536h-256v-128h128V384H384V0zm1536 256V128H512v128h1408zM0 2048V512h1664v1536H0zM128 640v128h1408V640H128zm0 256v1024h1408V896H128z" })));
    },
    displayName: 'DatabaseViewIcon',
});
exports.default = DatabaseViewIcon;
//# sourceMappingURL=DatabaseViewIcon.js.map