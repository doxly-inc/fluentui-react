define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckListIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M640 896V768h1408v128H640zm0-512h1408v128H640V384zm0 896v-128h1408v128H640zm0 384v-128h1408v128H640zM192 469l211-210 90 90-301 301L19 477l90-90 83 82zm0 384l211-210 90 90-301 301L19 861l90-90 83 82zm0 384l211-210 90 90-301 301-173-173 90-90 83 82zm0 384l211-210 90 90-301 301-173-173 90-90 83 82z" })));
        },
        displayName: 'CheckListIcon',
    });
    exports.default = CheckListIcon;
});
//# sourceMappingURL=CheckListIcon.js.map