define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapLayersIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 832l384 192-384 192 384 192-1024 512L0 1408l384-192L0 1024l384-192L0 640l1024-512 1024 512-384 192zM286 640l738 369 738-369-738-369-738 369zm1476 768l-241-120-497 248-497-248-241 120 738 369 738-369zm-738-15l738-369-241-120-497 248-497-248-241 120 738 369z" })));
        },
        displayName: 'MapLayersIcon',
    });
    exports.default = MapLayersIcon;
});
//# sourceMappingURL=MapLayersIcon.js.map