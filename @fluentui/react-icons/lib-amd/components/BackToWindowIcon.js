define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BackToWindowIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 1152h640v640H768v-421L93 2045l-90-90 674-675H256v-128zm1115-384h421v128h-640V256h128v421L1955 3l90 90-674 675z" })));
        },
        displayName: 'BackToWindowIcon',
    });
    exports.default = BackToWindowIcon;
});
//# sourceMappingURL=BackToWindowIcon.js.map