define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PrintIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 768q26 0 49 10t41 27 28 41 10 50v896h-512v256H512v-256H0V896q0-26 10-49t27-41 41-28 50-10h384V0h1024v768h384zm-1280 0h768V128H640v640zm768 640H640v512h768v-512zm512-512H128v768h384v-384h1024v384h384V896zM320 1024q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45q0-26 19-45t45-19z" })));
        },
        displayName: 'PrintIcon',
    });
    exports.default = PrintIcon;
});
//# sourceMappingURL=PrintIcon.js.map