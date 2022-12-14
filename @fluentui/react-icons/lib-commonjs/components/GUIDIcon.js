"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var GUIDIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 128h384v128H0V128zm512 0h768v128H512V128zm1536 0v128h-640V128h640zM0 512h384v128H0V512zm512 0h768v128H512V512zm896 0h640v128h-640V512zM0 896h384v128H0V896zm512 0h768v128H512V896zm896 0h640v128h-640V896zM0 1280h384v128H0v-128zm512 0h768v128H512v-128zm896 0h640v128h-640v-128zM0 1664h384v128H0v-128zm512 0h768v128H512v-128zm896 0h640v128h-640v-128z" })));
    },
    displayName: 'GUIDIcon',
});
exports.default = GUIDIcon;
//# sourceMappingURL=GUIDIcon.js.map