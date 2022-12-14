define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MobileReportIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 384v256h-384V384h384zM0 1024h384v640H0v-640zm512-640h384v1280H512V384zm1280 384q27 0 50 10t40 27 28 41 10 50v1024q0 27-10 50t-27 40-41 28-50 10h-640q-27 0-50-10t-40-27-28-41-10-50V896q0-27 10-50t27-40 41-28 50-10h640zm0 128h-640v1024h640V896zm-512 768h384v128h-384v-128zm128-1024h-384V0h384v640z" })));
        },
        displayName: 'MobileReportIcon',
    });
    exports.default = MobileReportIcon;
});
//# sourceMappingURL=MobileReportIcon.js.map