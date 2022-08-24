define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GripperBarVerticalIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M768 2048V0h128v2048H768zM1152 0h128v2048h-128V0z" })));
        },
        displayName: 'GripperBarVerticalIcon',
    });
    exports.default = GripperBarVerticalIcon;
});
//# sourceMappingURL=GripperBarVerticalIcon.js.map