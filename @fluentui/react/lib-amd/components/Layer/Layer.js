define(["require", "exports", "../../Utilities", "./Layer.base", "./Layer.styles"], function (require, exports, Utilities_1, Layer_base_1, Layer_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Layer = Utilities_1.styled(Layer_base_1.LayerBase, Layer_styles_1.getStyles, undefined, {
        scope: 'Layer',
        fields: ['hostId', 'theme', 'styles'],
    });
});
//# sourceMappingURL=Layer.js.map