define(["require", "exports", "tslib", "react", "../../../../Utilities", "../../../../Persona", "./SuggestionItemDefault.scss"], function (require, exports, tslib_1, React, Utilities_1, Persona_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles = stylesImport;
    /**
     * @deprecated Use `PeoplePickerItemSuggestion` instead. Will be removed in \>= 7.0.
     */
    exports.SuggestionItemNormal = function (personaProps, suggestionItemProps) {
        return (React.createElement("div", { className: Utilities_1.css('ms-PeoplePicker-personaContent', styles.peoplePickerPersonaContent) },
            React.createElement(Persona_1.Persona, tslib_1.__assign({ presence: personaProps.presence !== undefined ? personaProps.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.size24, className: Utilities_1.css('ms-PeoplePicker-Persona', styles.peoplePickerPersona), showSecondaryText: true }, personaProps))));
    };
    /**
     * @deprecated Use `PeoplePickerItemSuggestion` with `compact` prop set to `true`. Will be removed in \>= 7.0.
     */
    exports.SuggestionItemSmall = function (personaProps, suggestionItemProps) {
        return (React.createElement("div", { className: Utilities_1.css('ms-PeoplePicker-personaContent', styles.peoplePickerPersonaContent) },
            React.createElement(Persona_1.Persona, tslib_1.__assign({ presence: personaProps.presence !== undefined ? personaProps.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.size24, className: Utilities_1.css('ms-PeoplePicker-Persona', styles.peoplePickerPersona) }, personaProps))));
    };
});
//# sourceMappingURL=SuggestionItemDefault.js.map