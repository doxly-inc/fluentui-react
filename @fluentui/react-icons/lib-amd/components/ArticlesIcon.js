define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArticlesIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1536 768v128H512V768h1024zm-256-512v128H512V256h768zm-256 1536v-640h512v640h-512zm128-512v384h256v-384h-256zm384-768v128H512V512h1024zM256 0h1536v2048H256V0zm1408 1920V128H384v1792h1280zm-768-256v128H512v-128h384zm0-512v128H512v-128h384zm0 256v128H512v-128h384z" })));
        },
        displayName: 'ArticlesIcon',
    });
    exports.default = ArticlesIcon;
});
//# sourceMappingURL=ArticlesIcon.js.map