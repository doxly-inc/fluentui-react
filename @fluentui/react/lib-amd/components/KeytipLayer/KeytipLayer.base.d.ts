import * as React from 'react';
import { IKeytipLayerProps } from './KeytipLayer.types';
import { IKeytipProps } from '../../Keytip';
import { KeytipTree } from './KeytipTree';
import { IKeytipTransitionKey } from '../../utilities/keytips/IKeytipTransitionKey';
export interface IKeytipLayerState {
    inKeytipMode: boolean;
    keytips: IKeytipProps[];
    visibleKeytips: IKeytipProps[];
}
/**
 * A layer that holds all keytip items
 * {@docCategory Keytips}
 */
export declare class KeytipLayerBase extends React.Component<IKeytipLayerProps, IKeytipLayerState> {
    static defaultProps: IKeytipLayerProps;
    private _events;
    private _async;
    private _keytipTree;
    private _keytipManager;
    private _classNames;
    private _currentSequence;
    private _newCurrentKeytipSequences?;
    private _delayedKeytipQueue;
    private _delayedQueueTimeout;
    private _keyHandled;
    constructor(props: IKeytipLayerProps, context: any);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getCurrentSequence(): string;
    getKeytipTree(): KeytipTree;
    /**
     * Processes an IKeytipTransitionKey entered by the user
     *
     * @param transitionKey - IKeytipTransitionKey received by the layer to process
     */
    processTransitionInput(transitionKey: IKeytipTransitionKey, ev?: React.KeyboardEvent<HTMLElement>): void;
    /**
     * Processes inputs from the document listener and traverse the keytip tree
     *
     * @param key - Key pressed by the user
     */
    processInput(key: string, ev?: React.KeyboardEvent<HTMLElement>): void;
    /**
     * Show the given keytips and hide all others
     *
     * @param ids - Keytip IDs to show
     */
    showKeytips(ids: string[]): void;
    /**
     * Enters keytip mode for this layer
     */
    private _enterKeytipMode;
    private _buildTree;
    /**
     * Exits keytip mode for this layer
     */
    private _exitKeytipMode;
    /**
     * Sets the keytips state property
     *
     * @param keytipProps - Keytips to set in this layer
     */
    private _setKeytips;
    /**
     * Callback function to use for persisted keytips
     *
     * @param overflowButtonSequences - The overflow button sequence to execute
     * @param keytipSequences - The keytip that should become the 'currentKeytip' when it is registered
     */
    private _persistedKeytipExecute;
    private _getVisibleKeytips;
    private _onDismiss;
    private _onKeyDown;
    /**
     * Gets the ModifierKeyCodes based on the keyboard event
     *
     * @param ev - React.KeyboardEvent
     * @returns List of ModifierKeyCodes that were pressed
     */
    private _getModifierKey;
    private _onKeyPress;
    private _onKeytipAdded;
    private _onKeytipUpdated;
    /**
     * Helper function to do checks related to persisted/overflow keytips
     * Done on keytip added and keytip updated
     *
     * @param keytipProps - Keytip props
     */
    private _persistedKeytipChecks;
    private _onKeytipRemoved;
    private _onPersistedKeytipAdded;
    private _onPersistedKeytipRemoved;
    private _onPersistedKeytipExecute;
    /**
     * Trigger a keytip immediately and set it as the current keytip
     *
     * @param keytipProps - Keytip to trigger immediately
     */
    private _triggerKeytipImmediately;
    private _addKeytipToQueue;
    private _removeKeytipFromQueue;
    private _getKtpExecuteTarget;
    private _getKtpTarget;
    /**
     * Returns T/F if the keytipProps keySequences match the currentKeytip, and the currentKeytip is in an overflow well
     * This will make 'keytipProps' the new currentKeytip
     *
     * @param keytipProps - Keytip props to check
     * @returns - T/F if this keytip should become the currentKeytip
     */
    private _isCurrentKeytipAnAlias;
    /**
     * Sets if we are in keytip mode.
     * Note, this sets both the state for the layer as well as
     * the value that the manager will expose externally.
     * @param inKeytipMode - Boolean so set whether we are in keytip mode or not
     */
    private _setInKeytipMode;
    /**
     * Emits a warning if duplicate keytips are found for the children of the current keytip
     */
    private _warnIfDuplicateKeytips;
    /**
     * Returns duplicates among keytip IDs.
     * If the returned array is empty, no duplicates were found.
     *
     * @param keytipIds - Array of keytip IDs to find duplicates for
     * @returns - Array of duplicates that were found. Each duplicate will only be added once to this array.
     */
    private _getDuplicateIds;
}
