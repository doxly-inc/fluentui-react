define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AspectRatioIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 256h128v128H0V256zm0 256h128v128H0V512zm0 256h128v128H0V768zm0 256h128v128H0v-128zm0 512h128v128H0v-128zM256 256h128v128H256V256zm0 1280h128v128H256v-128zm1664 0h128v128h-128v-128zM0 1280h128v128H0v-128zm1920 0h128v128h-128v-128zm0-256h128v128h-128v-128zm0-256h128v128h-128V768zm0-256h128v128h-128V512zm128-256v128h-128V256h128zm-384 1280h128v128h-128v-128zm0-1280h128v128h-128V256zm-1152 0h1024v1408H512V256zm128 1280h768V384H640v1152z" })));
        },
        displayName: 'AspectRatioIcon',
    });
    exports.default = AspectRatioIcon;
});
//# sourceMappingURL=AspectRatioIcon.js.map