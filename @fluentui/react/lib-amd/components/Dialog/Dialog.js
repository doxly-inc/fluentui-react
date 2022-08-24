define(["require", "exports", "../../Utilities", "./Dialog.base", "./Dialog.styles"], function (require, exports, Utilities_1, Dialog_base_1, Dialog_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dialog = Utilities_1.styled(Dialog_base_1.DialogBase, Dialog_styles_1.getStyles, undefined, { scope: 'Dialog' });
    exports.Dialog.displayName = 'Dialog';
});
//# sourceMappingURL=Dialog.js.map