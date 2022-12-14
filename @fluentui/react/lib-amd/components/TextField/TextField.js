define(["require", "exports", "../../Utilities", "./TextField.base", "./TextField.styles"], function (require, exports, Utilities_1, TextField_base_1, TextField_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextField = Utilities_1.styled(TextField_base_1.TextFieldBase, TextField_styles_1.getStyles, undefined, {
        scope: 'TextField',
    });
});
//# sourceMappingURL=TextField.js.map