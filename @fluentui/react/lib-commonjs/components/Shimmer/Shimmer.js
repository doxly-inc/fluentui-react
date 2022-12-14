"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Shimmer_styles_1 = require("./Shimmer.styles");
var Shimmer_base_1 = require("./Shimmer.base");
exports.Shimmer = Utilities_1.styled(Shimmer_base_1.ShimmerBase, Shimmer_styles_1.getStyles, undefined, {
    scope: 'Shimmer',
});
//# sourceMappingURL=Shimmer.js.map