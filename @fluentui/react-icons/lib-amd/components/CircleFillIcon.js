define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CircleFillIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M32 1024q0-137 35-264t100-237 155-200 201-155T760 68t264-36q137 0 264 35t237 100 200 155 155 201 100 237 36 264q0 137-35 264t-100 237-155 200-201 155-237 100-264 36q-137 0-264-35t-237-100-200-155-155-201-100-237-36-264z" })));
        },
        displayName: 'CircleFillIcon',
    });
    exports.default = CircleFillIcon;
});
//# sourceMappingURL=CircleFillIcon.js.map