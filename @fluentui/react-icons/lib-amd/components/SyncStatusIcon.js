define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SyncStatusIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 1024q0 142-36 272t-103 245-160 207-208 160-245 103-272 37q-142 0-272-36t-245-103-207-160-160-208-103-245-37-272q0-141 36-272t103-245 160-207 208-160T752 37t272-37q141 0 272 36t245 103 207 160 160 208 103 245 37 272zm-1024 896q123 0 237-32t214-90 182-141 140-181 91-214 32-238q0-123-32-237t-90-214-141-182-181-140-214-91-238-32q-124 0-238 32t-213 90-182 141-140 181-91 214-32 238q0 124 32 238t90 213 141 182 181 140 214 91 238 32zm0-512q55 0 107-15t98-45 81-69 61-91l116 56q-32 67-80 121t-109 92-130 58-144 21q-110 0-210-45t-174-128v173H512v-384h384v128H738q54 60 129 94t157 34zm384-723V512h128v384h-384V768h158q-54-60-129-94t-157-34q-55 0-107 15t-98 45-81 69-61 91l-116-56q32-67 80-121t109-92 130-58 144-21q110 0 210 45t174 128z" })));
        },
        displayName: 'SyncStatusIcon',
    });
    exports.default = SyncStatusIcon;
});
//# sourceMappingURL=SyncStatusIcon.js.map