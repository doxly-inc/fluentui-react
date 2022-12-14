define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocumentIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M549 0h1243v1755l-293 293H256V293L549 0zm1115 1701V128H603L384 347v1573h1061l219-219z" })));
        },
        displayName: 'DocumentIcon',
    });
    exports.default = DocumentIcon;
});
//# sourceMappingURL=DocumentIcon.js.map