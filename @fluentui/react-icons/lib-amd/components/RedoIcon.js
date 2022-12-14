define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RedoIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1152 512h421q-71-72-135-140t-135-121-152-86-191-33q-117 0-221 45T557 301 434 483t-46 221q0 112 43 215t122 183l836 837-90 90-837-836q-97-97-149-224t-53-265q0-96 25-185t71-167 110-142 142-110 167-71T960 4q84 0 153 15t129 43 112 66 103 85 101 99 106 109V0h128v640h-640V512z" })));
        },
        displayName: 'RedoIcon',
    });
    exports.default = RedoIcon;
});
//# sourceMappingURL=RedoIcon.js.map