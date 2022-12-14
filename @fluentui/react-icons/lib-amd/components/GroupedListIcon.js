define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupedListIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M640 384V256h384v128H640zm512-128h768v128h-768V256zM0 640V128h512v512H0zm128-384v256h256V256H128zm512 768V896h384v128H640zm512 0V896h768v128h-768zM0 1280V768h512v512H0zm128-384v256h256V896H128zm512 768v-128h384v128H640zm512 0v-128h768v128h-768zM0 1920v-512h512v512H0zm128-384v256h256v-256H128z" })));
        },
        displayName: 'GroupedListIcon',
    });
    exports.default = GroupedListIcon;
});
//# sourceMappingURL=GroupedListIcon.js.map