define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BorderDashIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 128H0V0h256v128zm384 0H384V0h256v128zm384 0H768V0h256v128zm384 0h-256V0h256v128zm384 0h-256V0h256v128zM0 256h128v256H0V256zm0 384h128v256H0V640zm0 384h128v256H0v-256zm0 384h128v256H0v-256zm0 384h128v256H0v-256zm1792 128h256v128h-256v-128zm-384 0h256v128h-256v-128zm-384 0h256v128h-256v-128zm-384 0h256v128H640v-128zm-384 0h256v128H256v-128zm1664-384h128v256h-128v-256zm0-384h128v256h-128v-256zm0-384h128v256h-128V768zm0-384h128v256h-128V384zM2048 0v256h-128V0h128z" })));
        },
        displayName: 'BorderDashIcon',
    });
    exports.default = BorderDashIcon;
});
//# sourceMappingURL=BorderDashIcon.js.map