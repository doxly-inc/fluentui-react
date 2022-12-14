"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var TextField_base_1 = require("./TextField.base");
var TextField_styles_1 = require("./TextField.styles");
exports.TextField = Utilities_1.styled(TextField_base_1.TextFieldBase, TextField_styles_1.getStyles, undefined, {
    scope: 'TextField',
});
//# sourceMappingURL=TextField.js.map