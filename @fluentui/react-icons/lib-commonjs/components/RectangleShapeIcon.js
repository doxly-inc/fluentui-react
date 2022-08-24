"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var RectangleShapeIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 384v1280H0V384h2048zm-128 128H128v1024h1792V512z" })));
    },
    displayName: 'RectangleShapeIcon',
});
exports.default = RectangleShapeIcon;
//# sourceMappingURL=RectangleShapeIcon.js.map