define(["require", "exports", "../../Utilities", "./MessageBar.base", "./MessageBar.styles"], function (require, exports, Utilities_1, MessageBar_base_1, MessageBar_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageBar = Utilities_1.styled(MessageBar_base_1.MessageBarBase, MessageBar_styles_1.getStyles, undefined, {
        scope: 'MessageBar',
    });
});
//# sourceMappingURL=MessageBar.js.map