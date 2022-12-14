define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockedSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 0q141 0 272 36t244 104 207 160 161 207 103 245 37 272q0 184-63 354t-183 311L359 246Q499 126 669 63t355-63zM0 1024q0-184 63-354t183-311l1443 1443q-140 120-310 183t-355 63q-141 0-272-36t-244-104-207-160-161-207-103-245-37-272z" })));
        },
        displayName: 'BlockedSolidIcon',
    });
    exports.default = BlockedSolidIcon;
});
//# sourceMappingURL=BlockedSolidIcon.js.map