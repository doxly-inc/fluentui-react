define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewDashboardIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 0v2048H0V0h2048zm-128 128h-640v512h640V128zm-640 1152h640V768h-640v512zM128 128v1152h1024V128H128zm0 1792h640v-512H128v512zm1792 0v-512H896v512h1024z" })));
        },
        displayName: 'ViewDashboardIcon',
    });
    exports.default = ViewDashboardIcon;
});
//# sourceMappingURL=ViewDashboardIcon.js.map