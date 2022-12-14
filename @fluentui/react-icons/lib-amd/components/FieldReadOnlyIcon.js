define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldReadOnlyIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 256v865q-20-50-53-92t-75-74V384H128v1152h1024v128H0V256h2048zm-384 768q53 0 99 20t82 55 55 81 20 100v128h128v640h-768v-640h128v-128q0-53 20-99t55-82 81-55 100-20zm-128 384h256v-128q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50v128zm384 128h-512v384h512v-384z" })));
        },
        displayName: 'FieldReadOnlyIcon',
    });
    exports.default = FieldReadOnlyIcon;
});
//# sourceMappingURL=FieldReadOnlyIcon.js.map