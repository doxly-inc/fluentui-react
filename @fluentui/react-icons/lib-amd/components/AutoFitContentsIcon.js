define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoFitContentsIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 2048V896h2048v1152h-128v-128h-512v128h-128v-128H768v128H640v-128H128v128H0zm1280-256v-384H768v384h512zm640 0v-384h-512v384h512zM128 1024v256h1792v-256H128zm0 384v384h512v-384H128zm0-896v256H0V128h128v256h384v128H128zm1792-384h128v640h-128V512h-512V384h512V128zM896 293l-91 91-165-165 91-91 165 165zm384-74l-165 165-91-91 165-165 91 91zm0 458l-91 91-165-165 91-91 165 165zm-384-74L719 768l-79-91 165-165 91 91z" })));
        },
        displayName: 'AutoFitContentsIcon',
    });
    exports.default = AutoFitContentsIcon;
});
//# sourceMappingURL=AutoFitContentsIcon.js.map