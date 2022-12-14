import { __assign } from "tslib";
import * as React from 'react';
import { classNamesFunction, styled } from '../../../../Utilities';
import { Persona, PersonaSize } from '../../../../Persona';
import { getStyles } from './PeoplePickerItemSuggestion.styles';
var getClassNames = classNamesFunction();
export var PeoplePickerItemSuggestionBase = function (props) {
    var personaProps = props.personaProps, suggestionsProps = props.suggestionsProps, compact = props.compact, styles = props.styles, theme = props.theme, className = props.className;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: (suggestionsProps && suggestionsProps.suggestionsItemClassName) || className,
    });
    var personaStyles = classNames.subComponentStyles && classNames.subComponentStyles.persona
        ? classNames.subComponentStyles.persona
        : undefined;
    return (React.createElement("div", { className: classNames.root },
        React.createElement(Persona, __assign({ size: PersonaSize.size24, styles: personaStyles, className: classNames.personaWrapper, showSecondaryText: !compact }, personaProps))));
};
export var PeoplePickerItemSuggestion = styled(PeoplePickerItemSuggestionBase, getStyles, undefined, { scope: 'PeoplePickerItemSuggestion' });
//# sourceMappingURL=PeoplePickerItemSuggestion.js.map