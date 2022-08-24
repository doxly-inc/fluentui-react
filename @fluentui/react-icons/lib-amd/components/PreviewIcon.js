define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreviewIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1115 0l549 549v91h-640V0h91zm37 512h293l-293-293v293zm384 384V768h128v128h-128zm0 256v-128h128v128h-128zm0 256v-128h128v128h-128zm0 256v-128h128v128h-128zm0 256v-128h128v128h-128zm-256 0v-128h128v128h-128zm-256 0v-128h128v128h-128zm-256 0v-128h128v128H768zm-256 0v-128h128v128H512zm-256 0v-128h128v128H256zm0-1024V768h128v128H256zm0-256V512h128v128H256zm0-256V256h128v128H256zm0-256V0h128v128H256zm256 0V0h128v128H512zm256 0V0h128v128H768zM256 1152v-128h128v128H256zm0 256v-128h128v128H256zm0 256v-128h128v128H256z" })));
        },
        displayName: 'PreviewIcon',
    });
    exports.default = PreviewIcon;
});
//# sourceMappingURL=PreviewIcon.js.map