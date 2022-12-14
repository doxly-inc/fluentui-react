import * as React from 'react';
import { IAutofill, IAutofillProps } from './Autofill.types';
export interface IAutofillState {
    inputValue: string;
}
interface ICursorLocation {
    start: number;
    end: number;
    dir: 'forward' | 'backward' | 'none' | undefined;
}
/**
 * {@docCategory Autofill}
 */
export declare class Autofill extends React.Component<IAutofillProps, IAutofillState> implements IAutofill {
    static defaultProps: {
        enableAutofillOnKeyPress: number[];
    };
    private _inputElement;
    private _autoFillEnabled;
    private _isComposing;
    private _async;
    static getDerivedStateFromProps(props: IAutofillProps, state: IAutofillState): IAutofillState | null;
    constructor(props: IAutofillProps);
    get cursorLocation(): number | null;
    get isValueSelected(): boolean;
    get value(): string;
    get selectionStart(): number | null;
    get selectionEnd(): number | null;
    get inputElement(): HTMLInputElement | null;
    componentDidUpdate(_: any, _1: any, cursor: ICursorLocation | null): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    focus(): void;
    clear(): void;
    getSnapshotBeforeUpdate(): ICursorLocation | null;
    private _onCompositionStart;
    private _onCompositionUpdate;
    private _onCompositionEnd;
    private _onClick;
    private _onKeyDown;
    private _onInputChanged;
    private _onChanged;
    private _getCurrentInputValue;
    /**
     * Attempts to enable autofill. Whether or not autofill is enabled depends on the input value,
     * whether or not any text is selected, and only if the new input value is longer than the old input value.
     * Autofill should never be set to true if the value is composing. Once compositionEnd is called, then
     * it should be completed.
     * See https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent for more information on composition.
     * @param newValue - new input value
     * @param oldValue - old input value
     * @param isComposing - if true then the text is actively being composed and it has not completed.
     * @param isComposed - if the text is a composed text value.
     */
    private _tryEnableAutofill;
    /**
     * Updates the current input value as well as getting a new display value.
     * @param newValue - The new value from the input
     */
    private _updateValue;
    private _getDisplayValue;
    private _getControlledValue;
}
export {};
