define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScriptIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 0q53 0 99 20t82 55 55 81 20 100q0 53-20 99t-55 82-81 55-100 20h-128v1280q0 53-20 99t-55 82-81 55-100 20H256q-53 0-99-20t-82-55-55-81-20-100q0-53 20-99t55-82 81-55 100-20V256q0-53 20-99t55-82 81-55T512 0h1280zm-606 1920q-34-60-34-128t34-128H256q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10h930zm222 0q27 0 50-10t40-27 28-41 10-50V256q0-68 34-128H512q-27 0-50 10t-40 27-28 41-10 50v1280h1024q26 0 45 19t19 45q0 26-19 45t-45 19q-25 0-49 9t-42 28q-18 18-27 42t-10 49q0 27 10 50t27 40 41 28 50 10zm384-1536q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50v128h128zm-1280 0h896v128H512V384zm0 256h896v128H512V640zm0 256h896v128H512V896zm0 256h896v128H512v-128z" })));
        },
        displayName: 'ScriptIcon',
    });
    exports.default = ScriptIcon;
});
//# sourceMappingURL=ScriptIcon.js.map