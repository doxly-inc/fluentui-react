"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Nav_base_1 = require("./Nav.base");
var Nav_styles_1 = require("./Nav.styles");
exports.Nav = Utilities_1.styled(Nav_base_1.NavBase, Nav_styles_1.getStyles, undefined, {
    scope: 'Nav',
});
//# sourceMappingURL=Nav.js.map