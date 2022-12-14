define(["require", "exports", "../../Utilities", "./CommandBar.base", "./CommandBar.styles"], function (require, exports, Utilities_1, CommandBar_base_1, CommandBar_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Create a CommandBar variant which uses these default styles and this styled subcomponent.
    exports.CommandBar = Utilities_1.styled(CommandBar_base_1.CommandBarBase, CommandBar_styles_1.getStyles, undefined, {
        scope: 'CommandBar',
    });
});
//# sourceMappingURL=CommandBar.js.map