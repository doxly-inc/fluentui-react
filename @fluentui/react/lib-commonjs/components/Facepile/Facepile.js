"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Facepile_base_1 = require("./Facepile.base");
var Facepile_styles_1 = require("./Facepile.styles");
/**
 * The Facepile shows a list of faces or initials in a horizontal lockup. Each circle represents a person.
 */
exports.Facepile = Utilities_1.styled(Facepile_base_1.FacepileBase, Facepile_styles_1.styles, undefined, {
    scope: 'Facepile',
});
//# sourceMappingURL=Facepile.js.map