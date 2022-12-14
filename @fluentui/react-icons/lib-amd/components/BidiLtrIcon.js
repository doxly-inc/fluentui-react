define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BidiLtrIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 486l666 666-666 666V486zm128 1024l358-358-358-358v716zM1792 256v1536h128v128h-640v-128h128v-768h-192q-93 0-174-35t-143-96-96-142-35-175q0-93 35-174t96-143 142-96 175-35h704v128h-128zm-384 640V256h-192q-66 0-124 25t-102 69-69 102-25 124q0 66 25 124t68 102 102 69 125 25h192zm256 896V256h-128v1536h128z" })));
        },
        displayName: 'BidiLtrIcon',
    });
    exports.default = BidiLtrIcon;
});
//# sourceMappingURL=BidiLtrIcon.js.map