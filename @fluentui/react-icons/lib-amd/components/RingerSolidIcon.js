define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RingerSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 1536v128h-512q0 53-20 99t-55 82-81 55-100 20q-53 0-99-20t-82-55-55-81-20-100H256v-128h128V768q0-88 23-170t64-153 100-129 130-100 153-65 170-23q88 0 170 23t153 64 129 100 100 130 65 153 23 170v768h128z" })));
        },
        displayName: 'RingerSolidIcon',
    });
    exports.default = RingerSolidIcon;
});
//# sourceMappingURL=RingerSolidIcon.js.map