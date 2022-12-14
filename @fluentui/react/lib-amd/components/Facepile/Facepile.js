define(["require", "exports", "../../Utilities", "./Facepile.base", "./Facepile.styles"], function (require, exports, Utilities_1, Facepile_base_1, Facepile_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The Facepile shows a list of faces or initials in a horizontal lockup. Each circle represents a person.
     */
    exports.Facepile = Utilities_1.styled(Facepile_base_1.FacepileBase, Facepile_styles_1.styles, undefined, {
        scope: 'Facepile',
    });
});
//# sourceMappingURL=Facepile.js.map