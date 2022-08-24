define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommentIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 128v1408H731l-475 475v-475H0V128h2048zm-128 128H128v1152h256v293l293-293h1243V256zm-640 640h-128V640h256v256q0 27-10 50t-27 40-41 28-50 10V896zm-512 0H640V640h256v256q0 27-10 50t-27 40-41 28-50 10V896z" })));
        },
        displayName: 'CommentIcon',
    });
    exports.default = CommentIcon;
});
//# sourceMappingURL=CommentIcon.js.map