define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CodeIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 896q52 0 99-20t81-55 55-81 21-100q0-71-3-142t4-138 32-131 79-117q54-54 125-83T768 0v128q-53 0-99 20t-81 55-55 82-21 99q0 56 2 110t1 107-10 102-27 95-52 86-85 76q52 35 85 76t52 86 27 94 9 102 0 107-2 111q0 53 20 99t55 81 81 55 100 21v128q-76 0-147-29t-125-83q-54-54-78-117t-32-130-5-139 3-142q0-52-20-99t-55-81-82-55-99-21V896zM1280 0q76 0 147 29t125 83q54 54 78 117t32 130 5 139-3 142q0 53 20 99t55 81 81 55 100 21v128q-53 0-99 20t-81 55-55 82-21 99q0 71 3 142t-4 138-32 131-79 117q-54 54-125 83t-147 29v-128q52 0 99-20t81-55 55-81 21-100q0-56-2-110t-1-107 10-102 27-95 52-86 85-76q-52-35-85-76t-52-86-27-94-9-102 0-107 2-111q0-52-20-99t-55-81-82-55-99-21V0z" })));
        },
        displayName: 'CodeIcon',
    });
    exports.default = CodeIcon;
});
//# sourceMappingURL=CodeIcon.js.map