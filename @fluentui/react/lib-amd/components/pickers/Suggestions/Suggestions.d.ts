import * as React from 'react';
import { IButton } from '../../../Button';
import { ISuggestionsProps, SuggestionActionType } from './Suggestions.types';
export interface ISuggestionsState {
    selectedActionType: SuggestionActionType;
}
/**
 * {@docCategory Pickers}
 */
export declare class Suggestions<T> extends React.Component<ISuggestionsProps<T>, ISuggestionsState> {
    protected _forceResolveButton: React.RefObject<IButton>;
    protected _searchForMoreButton: React.RefObject<IButton>;
    protected _selectedElement: React.RefObject<HTMLDivElement>;
    private activeSelectedElement;
    private _classNames;
    constructor(suggestionsProps: ISuggestionsProps<T>);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    /**
     * Returns true if the event was handled, false otherwise
     */
    tryHandleKeyDown: (keyCode: number, currentSuggestionIndex: number) => boolean;
    hasSuggestedAction(): boolean;
    hasSuggestedActionSelected(): boolean;
    executeSelectedAction(): void;
    focusAboveSuggestions(): void;
    focusBelowSuggestions(): void;
    focusSearchForMoreButton(): void;
    scrollSelected(): void;
    private _getAlertText;
    private _renderSuggestions;
    private _getMoreResults;
    private _forceResolve;
    private _shouldShowForceResolve;
    private _onClickTypedSuggestionsItem;
    private _refocusOnSuggestions;
    private _onRemoveTypedSuggestionsItem;
}
