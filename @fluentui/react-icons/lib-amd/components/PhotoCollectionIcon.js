define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PhotoCollectionIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1472 640q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19zm576-128v1280H256v-256H0V256h1792v256h256zm-475 896l-357-358-166 166 193 192h330zM128 384v549l320-319 512 512 256-256 448 447V384H128zm933 1024L448 794l-320 321v293h933zm859-768h-128v896H384v128h1536V640z" })));
        },
        displayName: 'PhotoCollectionIcon',
    });
    exports.default = PhotoCollectionIcon;
});
//# sourceMappingURL=PhotoCollectionIcon.js.map