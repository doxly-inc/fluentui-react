"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var PasteAsTextIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M256 1792h768v128H128V256h512q0-53 20-99t55-82 81-55T896 0q53 0 99 20t82 55 55 81 20 100h512v640h-128V384h-128v256H384V384H256v1408zM512 384v128h768V384h-256V256q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50v128H512zm1497 1664h-135l-85-256h-378l-85 256h-135l342-1024h134l342 1024zm-263-384l-146-437-146 437h292z" })));
    },
    displayName: 'PasteAsTextIcon',
});
exports.default = PasteAsTextIcon;
//# sourceMappingURL=PasteAsTextIcon.js.map