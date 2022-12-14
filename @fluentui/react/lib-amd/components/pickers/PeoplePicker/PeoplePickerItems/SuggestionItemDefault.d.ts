import { IPersonaProps } from '../../../../Persona';
import { IBasePickerSuggestionsProps } from '../../../../Pickers';
/**
 * @deprecated Use `PeoplePickerItemSuggestion` instead. Will be removed in \>= 7.0.
 */
export declare const SuggestionItemNormal: (persona: IPersonaProps, suggestionProps?: IBasePickerSuggestionsProps) => JSX.Element;
/**
 * @deprecated Use `PeoplePickerItemSuggestion` with `compact` prop set to `true`. Will be removed in \>= 7.0.
 */
export declare const SuggestionItemSmall: (persona: IPersonaProps, suggestionProps?: IBasePickerSuggestionsProps) => JSX.Element;
