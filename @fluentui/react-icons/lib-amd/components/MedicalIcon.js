define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MedicalIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1728 640q66 0 124 25t101 69 69 102 26 124q0 57-19 109t-53 93-81 71-103 41v102q0 89-22 173t-62 160-98 137-129 107-155 70-174 25q-91 0-174-25t-154-70-129-107-98-137-63-159-22-174v-229q-123-11-218-59T133 962 34 781 0 558V0h320q26 0 45 19t19 45q0 26-19 45t-45 19H128v430q0 106 29 192t87 147 140 94 192 33q101 0 184-31t141-89 91-140 32-185V128H832q-26 0-45-19t-19-45q0-26 19-45t45-19h320v558q0 120-34 223t-99 181-160 126-219 59v229q0 107 38 205t107 174 162 120 205 45q111 0 204-45t162-120 107-173 39-206v-102q-56-12-103-41t-81-70-53-94-19-109q0-66 25-124t68-101 102-69 125-26zm0 512q40 0 75-15t61-41 41-61 15-75q0-40-15-75t-41-61-61-41-75-15q-40 0-75 15t-61 41-41 61-15 75q0 40 15 75t41 61 61 41 75 15z" })));
        },
        displayName: 'MedicalIcon',
    });
    exports.default = MedicalIcon;
});
//# sourceMappingURL=MedicalIcon.js.map