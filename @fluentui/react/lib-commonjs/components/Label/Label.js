"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Label_base_1 = require("./Label.base");
var Label_styles_1 = require("./Label.styles");
exports.Label = Utilities_1.styled(Label_base_1.LabelBase, Label_styles_1.getStyles, undefined, {
    scope: 'Label',
});
//# sourceMappingURL=Label.js.map