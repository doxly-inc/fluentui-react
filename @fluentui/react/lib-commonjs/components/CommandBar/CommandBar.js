"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var CommandBar_base_1 = require("./CommandBar.base");
var CommandBar_styles_1 = require("./CommandBar.styles");
// Create a CommandBar variant which uses these default styles and this styled subcomponent.
exports.CommandBar = Utilities_1.styled(CommandBar_base_1.CommandBarBase, CommandBar_styles_1.getStyles, undefined, {
    scope: 'CommandBar',
});
//# sourceMappingURL=CommandBar.js.map