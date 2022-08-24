define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BackIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 1088H250l787 787-90 90L6 1024 947 83l90 90-787 787h1798v128z" })));
        },
        displayName: 'BackIcon',
    });
    exports.default = BackIcon;
});
//# sourceMappingURL=BackIcon.js.map