"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Persona_base_1 = require("./Persona.base");
var Persona_styles_1 = require("./Persona.styles");
/**
 * Personas are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
exports.Persona = Utilities_1.styled(Persona_base_1.PersonaBase, Persona_styles_1.getStyles, undefined, {
    scope: 'Persona',
});
//# sourceMappingURL=Persona.js.map