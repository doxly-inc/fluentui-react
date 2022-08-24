define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContentFeedIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 1920v-128h256v128h-256zm-768 128v-512h1536v512h-128v-384H896v384H768v-384H384v384H256zm768-896v-128h512v128h-512zm512-896v128h-512V256h512zM256 1408V768h1536v640H256zm640-512v384h768V896H896zm-512 0v384h384V896H384zM256 0h1536v640H256V0zm512 512V128H384v384h384zm896 0V128H896v384h768z" })));
        },
        displayName: 'ContentFeedIcon',
    });
    exports.default = ContentFeedIcon;
});
//# sourceMappingURL=ContentFeedIcon.js.map