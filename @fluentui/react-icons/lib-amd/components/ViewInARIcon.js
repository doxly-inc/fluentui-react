define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewInARIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 583v249H128V441l350-176 57 115-200 100 201 100-58 115-222-112zm640-384L674 311l-57-115L960 24l343 172-57 115-222-112v313H896V199zm128 1522l222-112 58 115-344 172-343-172 57-115 222 112v-313h128v313zm-514-512l59 114-234 117 200 100-57 115-350-176v-391h128v249l254-128zm450-417l286-143 58 115-280 140v312H896V904L617 764l57-115 286 143zm482-527l350 176v391h-128V583l-222 112-57-115 200-100-200-100 57-115zm222 1072v-249h128v391l-350 176-57-115 200-100-234-117 59-114 254 128z" })));
        },
        displayName: 'ViewInARIcon',
    });
    exports.default = ViewInARIcon;
});
//# sourceMappingURL=ViewInARIcon.js.map