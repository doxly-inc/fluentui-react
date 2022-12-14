"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var TicketIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 896q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10v512H0v-512q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10V384h2048v512zm-128-384H128v290q60 35 94 94t34 128q0 69-34 128t-94 94v290h1792v-290q-60-35-94-94t-34-128q0-69 34-128t94-94V512z" })));
    },
    displayName: 'TicketIcon',
});
exports.default = TicketIcon;
//# sourceMappingURL=TicketIcon.js.map