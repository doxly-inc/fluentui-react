define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RenameIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M255 1149V895h770v254H255zm1026 260H-1V639h1282v130H129v510h1152v130zm768-770v770h-386v-130h256V769h-256V639h386zm-512 928q111 96 255 96h1v130h-1q-176 0-318-110-70 54-151 82t-171 28h-1v-130h1q145 0 255-93V474q-52-44-116-66t-139-23h-1V255h1q91 0 172 27t150 79q138-106 318-106h1v130h-1q-148 0-255 92v1090z" })));
        },
        displayName: 'RenameIcon',
    });
    exports.default = RenameIcon;
});
//# sourceMappingURL=RenameIcon.js.map