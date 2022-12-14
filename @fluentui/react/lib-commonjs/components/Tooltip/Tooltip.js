"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Tooltip_base_1 = require("./Tooltip.base");
var Tooltip_styles_1 = require("./Tooltip.styles");
exports.Tooltip = Utilities_1.styled(Tooltip_base_1.TooltipBase, Tooltip_styles_1.getStyles, undefined, {
    scope: 'Tooltip',
});
//# sourceMappingURL=Tooltip.js.map