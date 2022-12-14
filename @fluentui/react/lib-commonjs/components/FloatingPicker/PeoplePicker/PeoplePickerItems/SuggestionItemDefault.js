"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../../Utilities");
var Persona_1 = require("../../../../Persona");
var stylesImport = require("../PeoplePicker.scss");
exports.SuggestionItemNormal = function (personaProps, suggestionItemProps) {
    return (React.createElement("div", { className: Utilities_1.css('ms-PeoplePicker-personaContent', stylesImport.peoplePickerPersonaContent) },
        React.createElement(Persona_1.Persona, tslib_1.__assign({ presence: personaProps.presence !== undefined ? personaProps.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.size40, className: Utilities_1.css('ms-PeoplePicker-Persona', stylesImport.peoplePickerPersona), showSecondaryText: true }, personaProps))));
};
//# sourceMappingURL=SuggestionItemDefault.js.map