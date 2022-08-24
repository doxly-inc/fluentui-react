define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocumentationIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 512v1408H768v-256H512v-256H256V0h731l256 256h421v256h256zm-896-128h165l-165-165v165zm256 896V512H896V128H384v1152h896zm256 256V384h-128v1024H640v128h896zm257-896h-129v1024H896v128h897V640z" })));
        },
        displayName: 'DocumentationIcon',
    });
    exports.default = DocumentationIcon;
});
//# sourceMappingURL=DocumentationIcon.js.map