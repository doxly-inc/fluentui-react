"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var BulkUploadIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M512 1920h1024v128H384v-256H128V0h859l402 402 403 403v91h-640V384H512v1536zm768-1152h293l-293-293v293zm-896 896V256h677L933 128H256v1536h128zm1344-410l317 317-90 90-163-162v549h-128v-549l-163 162-90-90 317-317zm320-230v128h-640v-128h640z" })));
    },
    displayName: 'BulkUploadIcon',
});
exports.default = BulkUploadIcon;
//# sourceMappingURL=BulkUploadIcon.js.map