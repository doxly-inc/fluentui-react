define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 1536v-128h1280v128H0zm0-640h2048v128H0V896zm1664-512v128H0V384h1664z" })));
        },
        displayName: 'ListIcon',
    });
    exports.default = ListIcon;
});
//# sourceMappingURL=ListIcon.js.map