define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactCardIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 896h-640V768h640v128zm-256 384h-384v-128h384v128zm512-1024v1536H0V256h2048zm-128 128H128v1280h1792V384zM640 1152q-53 0-99 20t-82 55-55 81-20 100H256q0-52 14-101t39-93 62-80 83-62q-33-35-51-81t-19-95q0-53 20-99t55-82 81-55 100-20q53 0 99 20t82 55 55 81 20 100q0 49-18 95t-52 81q46 26 82 62t62 79 40 93 14 102H896q0-53-20-99t-55-82-81-55-100-20zM512 896q0 27 10 50t27 40 41 28 50 10q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50z" })));
        },
        displayName: 'ContactCardIcon',
    });
    exports.default = ContactCardIcon;
});
//# sourceMappingURL=ContactCardIcon.js.map