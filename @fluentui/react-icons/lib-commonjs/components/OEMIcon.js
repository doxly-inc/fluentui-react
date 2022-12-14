"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var OEMIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1600 1024h192v896H128V256h896v192L1472 0l576 576-448 448zm-546-448l418 418 418-418-418-418-418 418zm-30 128v320h320l-320-320zm-768 320h640V384H256v640zm640 128H256v640h640v-640zm128 0v640h640v-640h-640z" })));
    },
    displayName: 'OEMIcon',
});
exports.default = OEMIcon;
//# sourceMappingURL=OEMIcon.js.map