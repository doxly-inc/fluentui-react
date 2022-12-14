define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalculatorIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 0h1408v2048H256V0zm1280 1920V128H384v1792h1152zM1408 256v384H512V256h896zm-128 256V384H640v128h640zM640 896v128H512V896h128zm256 128V896h128v128H896zm384 0V896h128v128h-128zm-640 256v128H512v-128h128zm256 128v-128h128v128H896zm384 0v-128h128v128h-128zm-640 256v128H512v-128h128zm256 128v-128h128v128H896zm384 0v-128h128v128h-128z" })));
        },
        displayName: 'CalculatorIcon',
    });
    exports.default = CalculatorIcon;
});
//# sourceMappingURL=CalculatorIcon.js.map