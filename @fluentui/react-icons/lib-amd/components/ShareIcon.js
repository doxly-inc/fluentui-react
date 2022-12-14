define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ShareIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1408 1536l128-128v384H0V512h128v1152h1280v-128zm-128-512q-128 0-250 25t-237 75-217 121-192 163v-128q0-124 32-238t90-214 140-181 181-140 214-91 239-32V0l704 704-704 704v-384zm101-512q-56 0-105 1t-97 6-96 18-102 35q-87 36-161 92T687 791t-99 155-60 176q168-112 359-169t393-57h128v203l395-395-395-395v203h-27z" })));
        },
        displayName: 'ShareIcon',
    });
    exports.default = ShareIcon;
});
//# sourceMappingURL=ShareIcon.js.map