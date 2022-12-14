"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Layer_base_1 = require("./Layer.base");
var Layer_styles_1 = require("./Layer.styles");
exports.Layer = Utilities_1.styled(Layer_base_1.LayerBase, Layer_styles_1.getStyles, undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles'],
});
//# sourceMappingURL=Layer.js.map