define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldChangedIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 1408V512h1536v232q-55 8-107 32t-91 63l-569 569H256zm641 128l-51 52-19 76H0V256h2048v540q-29-19-61-31t-67-19V384H128v1152h769zm951-640q42 0 78 15t64 41 42 63 16 79q0 39-15 76t-43 65l-717 717-377 94 94-377 717-716q29-29 65-43t76-14zm51 249q21-21 21-51 0-31-20-50t-52-20q-14 0-27 4t-23 15l-692 692-34 135 135-34 692-691z" })));
        },
        displayName: 'FieldChangedIcon',
    });
    exports.default = FieldChangedIcon;
});
//# sourceMappingURL=FieldChangedIcon.js.map