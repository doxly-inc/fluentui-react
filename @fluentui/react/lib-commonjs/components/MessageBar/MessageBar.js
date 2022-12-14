"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var MessageBar_base_1 = require("./MessageBar.base");
var MessageBar_styles_1 = require("./MessageBar.styles");
exports.MessageBar = Utilities_1.styled(MessageBar_base_1.MessageBarBase, MessageBar_styles_1.getStyles, undefined, {
    scope: 'MessageBar',
});
//# sourceMappingURL=MessageBar.js.map