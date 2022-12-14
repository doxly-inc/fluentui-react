define(["require", "exports", "../../Utilities", "./MarqueeSelection.base", "./MarqueeSelection.styles"], function (require, exports, Utilities_1, MarqueeSelection_base_1, MarqueeSelection_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MarqueeSelection = 
    // TODO: MarqueeSelectionBase defaultProps are not lining up with IMarqueeSelectionProps, so we have to be explicit
    // with styled here. defaultProps.rootTagName doesn't appear to be used anywhere and defaultProps.rootProps is not
    // in IMarqueeSelectionProps.
    Utilities_1.styled(MarqueeSelection_base_1.MarqueeSelectionBase, MarqueeSelection_styles_1.getStyles, undefined, {
        scope: 'MarqueeSelection',
    });
});
//# sourceMappingURL=MarqueeSelection.js.map