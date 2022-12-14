"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var MarqueeSelection_base_1 = require("./MarqueeSelection.base");
var MarqueeSelection_styles_1 = require("./MarqueeSelection.styles");
exports.MarqueeSelection = 
// TODO: MarqueeSelectionBase defaultProps are not lining up with IMarqueeSelectionProps, so we have to be explicit
// with styled here. defaultProps.rootTagName doesn't appear to be used anywhere and defaultProps.rootProps is not
// in IMarqueeSelectionProps.
Utilities_1.styled(MarqueeSelection_base_1.MarqueeSelectionBase, MarqueeSelection_styles_1.getStyles, undefined, {
    scope: 'MarqueeSelection',
});
//# sourceMappingURL=MarqueeSelection.js.map