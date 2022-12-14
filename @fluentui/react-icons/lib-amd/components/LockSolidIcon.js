define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LockSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 896v1152H256V896h256V522q0-108 39-203t108-166T821 41t203-41q109 0 202 41t163 112 108 166 39 203v374h256zm-1152 0h768V522q0-81-29-152t-80-126-122-85-153-31q-82 0-152 31t-122 85-81 125-29 153v374z" })));
        },
        displayName: 'LockSolidIcon',
    });
    exports.default = LockSolidIcon;
});
//# sourceMappingURL=LockSolidIcon.js.map