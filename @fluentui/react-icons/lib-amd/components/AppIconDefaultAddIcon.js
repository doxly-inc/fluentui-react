define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppIconDefaultAddIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 0v1024h-896v896H0V0h1920zM896 1792v-768H128v768h768zm0-896V128H128v768h768zm896 0V128h-768v768h768zm-128 640h384v128h-384v384h-128v-384h-384v-128h384v-384h128v384z" })));
        },
        displayName: 'AppIconDefaultAddIcon',
    });
    exports.default = AppIconDefaultAddIcon;
});
//# sourceMappingURL=AppIconDefaultAddIcon.js.map