define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HalfCircleIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1536 0v1920q-59 0-114-3t-109-11-107-23-108-38q-134-57-242-147t-184-206-118-251-42-281q0-133 34-255t96-230 150-194 195-150 229-97 256-34h64zm-128 130q-108 8-207 42t-184 91-155 131-119 165-76 191-27 210q0 108 27 209t76 191 119 165 155 132 184 90 207 43V130z" })));
        },
        displayName: 'HalfCircleIcon',
    });
    exports.default = HalfCircleIcon;
});
//# sourceMappingURL=HalfCircleIcon.js.map