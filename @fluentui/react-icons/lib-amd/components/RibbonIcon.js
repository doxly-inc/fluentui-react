define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RibbonIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 1024q-80 0-149-30t-122-82-83-122-30-150q0-79 30-149t82-122 122-83 150-30q79 0 149 30t122 82 83 123 30 149q0 80-30 149t-82 122-123 83-149 30zm0-640q-53 0-99 20t-82 55-55 81-20 100q0 53 20 99t55 82 81 55 100 20q53 0 99-20t82-55 55-81 20-100q0-53-20-99t-55-82-81-55-100-20zm640 256q0 104-32 202t-96 182v1024l-512-256-512 256V1024q-63-83-95-181t-33-203q0-133 50-249t137-204T774 50t250-50q133 0 249 50t204 137 137 203 50 250zm-640-512q-106 0-199 40T663 278 553 441t-41 199q0 106 40 199t110 162 163 110 199 41q106 0 199-40t162-110 110-163 41-199q0-106-40-199t-110-162-163-110-199-41zm384 1728v-704q-83 63-181 95t-203 33q-104 0-202-32t-182-96v704l384-192 384 192z" })));
        },
        displayName: 'RibbonIcon',
    });
    exports.default = RibbonIcon;
});
//# sourceMappingURL=RibbonIcon.js.map