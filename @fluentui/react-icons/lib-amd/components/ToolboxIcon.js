define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolboxIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1408 512h640v1152H0V512h640V256h768v256zM768 384v128h512V384H768zm1152 256H128v256h384V768h128v128h768V768h128v128h384V640zM128 1536h1792v-512h-384v128h-128v-128H640v128H512v-128H128v512z" })));
        },
        displayName: 'ToolboxIcon',
    });
    exports.default = ToolboxIcon;
});
//# sourceMappingURL=ToolboxIcon.js.map