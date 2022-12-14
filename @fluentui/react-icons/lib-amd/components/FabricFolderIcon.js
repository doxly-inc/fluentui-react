define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FabricFolderIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 512v1024q0 27-10 50t-27 40-41 28-50 10H128q-27 0-50-10t-40-27-28-41-10-50V256q0-27 10-50t27-40 41-28 50-10h736q37 0 69 13t58 36 48 51 40 59q13 23 25 41t28 30 35 19 49 7h704q27 0 50 10t40 27 28 41 10 50zM864 256H128v256h736q27 0 45-9t35-22 34-28 39-28q-15-17-31-45t-36-56-40-48-46-20zm1056 1280V512h-704q-56 0-90 9t-58 24-41 31-37 31-50 23-76 10H128v896h1792z" })));
        },
        displayName: 'FabricFolderIcon',
    });
    exports.default = FabricFolderIcon;
});
//# sourceMappingURL=FabricFolderIcon.js.map