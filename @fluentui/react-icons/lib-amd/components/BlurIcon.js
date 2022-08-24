define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlurIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 128H256V0h128v128zm256 0H512V0h128v128zm256 0H768V0h128v128zm256 256h-128V256h128v128zm256 256h-128V512h128v128zm256 256h-128V768h128v128zm-512-768h-128V0h128v128zm384 256h-128V256h128v128zm0 128V384h128v128h-128zm256 256h128v128h-128V768zM640 384H512V256h128v128zm256 0H768V256h128v128zm256 256h-128V512h128v128zm256 256h-128V768h128v128zM896 640H768V512h128v128zm256 256h-128V768h128v128zm256 256h-128v-128h128v128zM256 384V256h128v128H256zm128 128V384h128v128H384zm128 128V512h128v128H512zm128 128V640h128v128H640zm128 128V768h128v128H768zm128 128V896h128v128H896zm128 128v-128h128v128h-128zm128 128v-128h128v128h-128zm128 128v-128h128v128h-128zm128 128v-128h128v128h-128zm128 128v-128h128v128h-128zm128 0h128v128h128v128H0V0h128v128h128v128H128v1536h1536v-128zm128-128h128v128h-128v-128zm0-256h128v128h-128v-128zm0-256h128v128h-128v-128zm-128 384h-128v-128h128v128zm-128-384h128v128h-128v-128zm0-896h-128V0h128v128zm256 256h128v128h-128V384zM1920 0v128h-128V0h128z" })));
        },
        displayName: 'BlurIcon',
    });
    exports.default = BlurIcon;
});
//# sourceMappingURL=BlurIcon.js.map