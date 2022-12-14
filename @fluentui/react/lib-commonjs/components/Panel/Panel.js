"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Panel_base_1 = require("./Panel.base");
var Panel_styles_1 = require("./Panel.styles");
/**
 * Panel description
 */
exports.Panel = Utilities_1.styled(Panel_base_1.PanelBase, Panel_styles_1.getStyles, undefined, {
    scope: 'Panel',
});
//# sourceMappingURL=Panel.js.map