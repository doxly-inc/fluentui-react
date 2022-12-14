define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SDCardIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 352v1568q0 27-10 50t-27 40-41 28-50 10H384q-27 0-50-10t-40-27-28-41-10-50v-512l128-128V928L256 768V128q0-27 10-50t27-40 41-28 50-10h1056l352 352zm-128 53l-277-277H384v595l128 160v450q-31 33-63 64t-65 64v459h1280V405zM640 256h128v384H640V256zm256 0h128v384H896V256zm256 0h128v384h-128V256z" })));
        },
        displayName: 'SDCardIcon',
    });
    exports.default = SDCardIcon;
});
//# sourceMappingURL=SDCardIcon.js.map