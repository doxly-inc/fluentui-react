define(["require", "exports", "../../Utilities", "./Persona.base", "./Persona.styles"], function (require, exports, Utilities_1, Persona_base_1, Persona_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Personas are used for rendering an individual's avatar, presence and details.
     * They are used within the PeoplePicker components.
     */
    exports.Persona = Utilities_1.styled(Persona_base_1.PersonaBase, Persona_styles_1.getStyles, undefined, {
        scope: 'Persona',
    });
});
//# sourceMappingURL=Persona.js.map