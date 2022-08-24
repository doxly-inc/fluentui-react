"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Check_base_1 = require("./Check.base");
var Check_styles_1 = require("./Check.styles");
exports.Check = Utilities_1.styled(Check_base_1.CheckBase, Check_styles_1.getStyles, undefined, {
    scope: 'Check',
}, true);
//# sourceMappingURL=Check.js.map