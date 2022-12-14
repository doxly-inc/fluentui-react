define(["require", "exports", "../../Utilities", "./Tooltip.base", "./Tooltip.styles"], function (require, exports, Utilities_1, Tooltip_base_1, Tooltip_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tooltip = Utilities_1.styled(Tooltip_base_1.TooltipBase, Tooltip_styles_1.getStyles, undefined, {
        scope: 'Tooltip',
    });
});
//# sourceMappingURL=Tooltip.js.map