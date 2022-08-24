define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextCalloutIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 256v1408H0V256h2048zm-128 128H128v1152h1792V384zm-256 640h-640V896h640v128zm-896 0H384V896h384v128z" })));
        },
        displayName: 'TextCalloutIcon',
    });
    exports.default = TextCalloutIcon;
});
//# sourceMappingURL=TextCalloutIcon.js.map