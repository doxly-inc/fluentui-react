"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Rating_styles_1 = require("./Rating.styles");
var Rating_base_1 = require("./Rating.base");
exports.Rating = Utilities_1.styled(Rating_base_1.RatingBase, Rating_styles_1.getStyles, undefined, { scope: 'Rating' });
//# sourceMappingURL=Rating.js.map