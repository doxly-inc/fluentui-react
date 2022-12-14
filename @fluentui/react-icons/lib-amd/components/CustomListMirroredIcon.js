define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomListMirroredIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 0H256v2048h1536V0zM384 1920V128h1280v1792H384zM512 384v128h768V384H512zm128 384v128h640V768H640zm256 384v128h384v-128H896zm-384 384v128h768v-128H512zm896-1152v128h128V384h-128zm0 384v128h128V768h-128zm0 384v128h128v-128h-128zm0 384v128h128v-128h-128z" })));
        },
        displayName: 'CustomListMirroredIcon',
    });
    exports.default = CustomListMirroredIcon;
});
//# sourceMappingURL=CustomListMirroredIcon.js.map