define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StockDownIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 384h1280l-640 1280L384 384z" })));
        },
        displayName: 'StockDownIcon',
    });
    exports.default = StockDownIcon;
});
//# sourceMappingURL=StockDownIcon.js.map