define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DownloadDocumentIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 1920h1024v128H128V0h1115l549 549v347h-128V640h-512V128H256v1792zM1280 512h293l-293-293v293zm512 1061l163-162 90 90-317 317-317-317 90-90 163 162v-549h128v549zm256 347v128h-640v-128h640z" })));
        },
        displayName: 'DownloadDocumentIcon',
    });
    exports.default = DownloadDocumentIcon;
});
//# sourceMappingURL=DownloadDocumentIcon.js.map