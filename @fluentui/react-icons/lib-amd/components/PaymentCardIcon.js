define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PaymentCardIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1888 256q33 0 62 12t51 35 34 51 13 62v1088q0 33-12 62t-35 51-51 34-62 13H160q-33 0-62-12t-51-35-34-51-13-62V416q0-33 12-62t35-51 51-34 62-13h1728zM160 384q-14 0-23 9t-9 23v224h1792V416q0-14-9-23t-23-9H160zm1728 1152q14 0 23-9t9-23V768H128v736q0 14 9 23t23 9h1728zm-480-384h256v128h-256v-128z" })));
        },
        displayName: 'PaymentCardIcon',
    });
    exports.default = PaymentCardIcon;
});
//# sourceMappingURL=PaymentCardIcon.js.map