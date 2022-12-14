"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Styling_1 = require("../../Styling");
var Utilities_1 = require("../../Utilities");
var BaseButton_styles_1 = require("../Button/BaseButton.styles");
exports.getStyles = Utilities_1.memoizeFunction(function (theme, className, customStyles) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var customButtonStyles = Styling_1.concatStyleSets(baseButtonStyles, customStyles);
    return tslib_1.__assign(tslib_1.__assign({}, customButtonStyles), { root: [baseButtonStyles.root, className, theme.fonts.medium, customStyles && customStyles.root] });
});
//# sourceMappingURL=FacepileButton.styles.js.map