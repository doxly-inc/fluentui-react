define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommentAddIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 128v1024h-128V256H128v1152h256v293l293-293h475v128H731l-475 475v-475H0V128h2048zm-256 1280h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256z" })));
        },
        displayName: 'CommentAddIcon',
    });
    exports.default = CommentAddIcon;
});
//# sourceMappingURL=CommentAddIcon.js.map