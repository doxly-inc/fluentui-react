define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoFillTemplateIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 256v640H0V256h2048zm-128 128H128v384h1792V384zM0 1024h2048v640H0v-640zm128 512h1792v-384H128v384zm1408-896H256V512h1280v128zM256 1280h640v128H256v-128z" })));
        },
        displayName: 'AutoFillTemplateIcon',
    });
    exports.default = AutoFillTemplateIcon;
});
//# sourceMappingURL=AutoFillTemplateIcon.js.map