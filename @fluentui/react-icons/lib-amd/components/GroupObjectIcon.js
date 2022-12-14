define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupObjectIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 256H0V0h256v256zM2048 0v256h-256V0h256zM0 1792h256v256H0v-256zm1792 0h256v256h-256v-256zm-1024 0h896v128H640v-512H128V384h128v896h384V640h640V256H384V128h1024v512h512v1024h-128V768h-384v640H768v384zm0-512h512V768H768v512z" })));
        },
        displayName: 'GroupObjectIcon',
    });
    exports.default = GroupObjectIcon;
});
//# sourceMappingURL=GroupObjectIcon.js.map