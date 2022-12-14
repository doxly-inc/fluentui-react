import * as React from 'react';
import { IButtonProps, IButton } from './Button.types';
/**
 * {@docCategory Button}
 */
export interface IBaseButtonProps extends IButtonProps {
    baseClassName?: string;
    variantClassName?: string;
}
/**
 * {@docCategory Button}
 */
export interface IBaseButtonState {
    menuHidden: boolean;
}
/**
 * {@docCategory Button}
 */
export declare class BaseButton extends React.Component<IBaseButtonProps, IBaseButtonState> implements IButton {
    private get _isSplitButton();
    static defaultProps: Partial<IBaseButtonProps>;
    private _async;
    private _events;
    private _buttonElement;
    private _splitButtonContainer;
    private _mergedRef;
    private _labelId;
    private _descriptionId;
    private _ariaDescriptionId;
    private _classNames;
    private _processingTouch;
    private _lastTouchTimeoutId;
    private _renderedVisibleMenu;
    private _menuShouldFocusOnContainer;
    private _menuShouldFocusOnMount;
    private _getMemoizedMenuButtonKeytipProps;
    constructor(props: IBaseButtonProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IBaseButtonProps, prevState: IBaseButtonState): void;
    componentWillUnmount(): void;
    focus(): void;
    dismissMenu(): void;
    openMenu(shouldFocusOnContainer?: boolean, shouldFocusOnMount?: boolean): void;
    private _onRenderContent;
    /**
     * Method to help determine if the menu's component tree should
     * be rendered. It takes into account whether the menu is expanded,
     * whether it is a persisted menu and whether it has been shown to the user.
     */
    private _shouldRenderMenu;
    private _onRenderIcon;
    private _onRenderTextContents;
    private _onRenderText;
    private _hasText;
    private _onRenderChildren;
    private _onRenderDescription;
    private _onRenderAriaDescription;
    private _onRenderMenuIcon;
    private _onRenderMenu;
    private _onDismissMenu;
    private _dismissMenu;
    private _openMenu;
    private _onToggleMenu;
    private _onRenderSplitButtonContent;
    private _onSplitContainerFocusCapture;
    private _onSplitButtonPrimaryClick;
    private _onRenderSplitButtonDivider;
    private _onRenderSplitButtonMenuButton;
    private _onKeyDown;
    private _onKeyUp;
    private _onKeyPress;
    private _onMouseUp;
    private _onMouseDown;
    private _onClick;
    private _onSplitButtonContainerKeyDown;
    private _onMenuKeyDown;
    private _onTouchStart;
    private _onPointerDown;
    private _handleTouchAndPointerEvent;
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    private _isValidMenuOpenKey;
    private _onMenuClick;
}
