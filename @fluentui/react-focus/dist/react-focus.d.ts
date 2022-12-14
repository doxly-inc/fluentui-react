import { IRefObject } from '@fluentui/utilities';
import { Point } from '@fluentui/utilities';
import * as React_2 from 'react';

export declare class FocusZone extends React_2.Component<IFocusZoneProps> implements IFocusZone {
    static defaultProps: IFocusZoneProps;
    private _root;
    private _mergedRef;
    private _id;
    /** The most recently focused child element. */
    private _activeElement;
    /**
     * The index path to the last focused child element.
     */
    private _lastIndexPath;
    /**
     * Flag to define when we've intentionally parked focus on the root element to temporarily
     * hold focus until items appear within the zone.
     */
    private _isParked;
    /** The child element with tabindex=0. */
    private _defaultFocusElement;
    private _focusAlignment;
    private _isInnerZone;
    private _parkedTabIndex;
    /** Used to allow moving to next focusable element even when we're focusing on a input element when pressing tab */
    private _processingTabKey;
    private _windowElement;
    /** Used for testing purposes only. */
    static getOuterZones(): number;
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     * HEADS UP: This must not be an arrow function in order to be referentially equal among instances
     * for ref counting to work correctly!
     */
    private static _onKeyDownCapture;
    constructor(props: IFocusZoneProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React_2.ReactNode;
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focus(forceIntoFirstElement?: boolean): boolean;
    /**
     * Sets focus to the last tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focusLast(): boolean;
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * shouldReceiveFocus to create delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @param forceAlignment - If true, focus alignment will be set according to the element provided.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focusElement(element: HTMLElement, forceAlignment?: boolean): boolean;
    /**
     * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference,
     * rather than a center based on the last horizontal motion.
     * @param point - the new reference point.
     */
    setFocusAlignment(point: Point): void;
    private _evaluateFocusBeforeRender;
    private _onFocus;
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    private _setParkedFocus;
    private _onBlur;
    private _onMouseDown;
    private _setActiveElement;
    private _preventDefaultWhenHandled;
    /**
     * Handle the keystrokes.
     */
    private _onKeyDown;
    /**
     * Walk up the dom try to find a focusable element.
     */
    private _tryInvokeClickForFocusable;
    /**
     * Traverse to find first child zone.
     */
    private _getFirstInnerZone;
    private _moveFocus;
    private _moveFocusDown;
    private _moveFocusUp;
    private _moveFocusLeft;
    private _moveFocusRight;
    private _getHorizontalDistanceFromCenter;
    private _moveFocusPaging;
    private _setFocusAlignment;
    private _isImmediateDescendantOfZone;
    private _getOwnerZone;
    private _updateTabIndexes;
    private _isContentEditableElement;
    private _isElementInput;
    private _shouldInputLoseFocus;
    private _shouldWrapFocus;
    /**
     * Returns true if the element is a descendant of the FocusZone through a React portal.
     */
    private _portalContainsElement;
    private _getDocument;
}

/**
 * {@docCategory FocusZone}
 */
export declare enum FocusZoneDirection {
    /** Only react to up/down arrows. */
    vertical = 0,
    /** Only react to left/right arrows. */
    horizontal = 1,
    /** React to all arrows. */
    bidirectional = 2,
    /**
     * React to all arrows. Navigate next item in DOM on right/down arrow keys and previous - left/up arrow keys.
     * Right and Left arrow keys are swapped in RTL mode.
     */
    domOrder = 3
}

/**
 * {@docCategory FocusZone}
 */
export declare const FocusZoneTabbableElements: {
    /** Tabbing is not allowed */
    none: 0;
    /** All tabbing action is allowed */
    all: 1;
    /** Tabbing is allowed only on input elements */
    inputOnly: 2;
};

/**
 * {@docCategory FocusZone}
 */
export declare type FocusZoneTabbableElements = typeof FocusZoneTabbableElements[keyof typeof FocusZoneTabbableElements];

/**
 * FocusZone component class interface.
 * {@docCategory FocusZone}
 */
export declare interface IFocusZone {
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focus(forceIntoFirstElement?: boolean): boolean;
    /**
     * Sets focus to the last tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focusLast(): boolean;
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * shouldReceiveFocus to create delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param childElement - The child element within the zone to focus.
     * @param forceAlignment - If true, focus alignment will be set according to the element provided.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focusElement(childElement?: HTMLElement, forceAlignment?: boolean): boolean;
    /**
     * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference, rather
     * than a center based on the last horizontal motion.
     * @param point - the new reference point.
     */
    setFocusAlignment(point: Point): void;
}

/**
 * FocusZone component props.
 * {@docCategory FocusZone}
 */
export declare interface IFocusZoneProps extends React_2.HTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the IFocusZone interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IFocusZone>;
    /**
     * Optional callback to access the root DOM element.
     * @deprecated Temporary solution which will be replaced with ref in the V8 release.
     */
    elementRef?: React_2.Ref<HTMLElement>;
    /**
     * Additional class name to provide on the root element, in addition to the ms-FocusZone class.
     */
    className?: string;
    /**
     * Defines which arrows to react to.
     * @defaultvalue FocusZoneDirection.bidirectional
     */
    direction?: FocusZoneDirection;
    /**
     * Optionally defines the initial tabbable element inside the FocusZone.
     * If a string is passed then it is treated as a selector for identifying the initial tabbable element.
     * If a function is passed then it uses the root element as a parameter to return the initial tabbable element.
     */
    defaultTabbableElement?: string | ((root: HTMLElement) => HTMLElement);
    /**
     * Optionally provide a selector for identifying the initial active element.
     * @deprecated Use `defaultTabbableElement` instead.
     */
    defaultActiveElement?: string;
    /**
     * Determines if a default tabbable element should be force focused on FocusZone mount.
     * @default false
     */
    shouldFocusOnMount?: boolean;
    /**
     * If set, the FocusZone will not be tabbable and keyboard navigation will be disabled.
     * This does not affect disabled attribute of any child.
     */
    disabled?: boolean;
    /**
     * Element type the root element will use. Default is "div".
     * @deprecated Use `as` instead.
     */
    elementType?: any;
    /**
     * A component that should be used as the root element of the FocusZone component.
     */
    as?: React_2.ElementType;
    /**
     * If set, will cycle to the beginning of the targets once the user navigates to the
     * next target while at the end, and to the end when navigate to the previous at the beginning.
     */
    isCircularNavigation?: boolean;
    /**
     * If provided, this callback will be executed on keypresses to determine if the user
     * intends to navigate into the inner zone. Returning true will ask the first inner zone to
     * set focus.
     * @deprecated Use `shouldEnterInnerZone` instead.
     */
    isInnerZoneKeystroke?: (ev: React_2.KeyboardEvent<HTMLElement>) => boolean;
    /**
     * Callback function that will be executed on keypresses to determine if the user intends to navigate into
     * the inner (nested) zone. Returning true will ask the first inner zone to set focus.
     */
    shouldEnterInnerZone?: (ev: React_2.KeyboardEvent<HTMLElement>) => boolean;
    /**
     * Sets the aria-labelledby attribute.
     * @deprecated Directly use the `aria-labelledby` attribute instead
     */
    ariaLabelledBy?: string;
    /**
     * Sets the aria-describedby attribute.
     * @deprecated Directly use the `aria-describedby` attribute instead
     */
    ariaDescribedBy?: string;
    /**
     * Callback for when one of immediate children elements gets active by getting focused
     * or by having one of its respective children elements focused.
     */
    onActiveElementChanged?: (element?: HTMLElement, ev?: React_2.FocusEvent<HTMLElement>) => void;
    /**
     * @deprecated Div props provided to the FocusZone will be mixed into the root element.
     * Deprecated at v1.12.1.
     */
    rootProps?: React_2.HTMLAttributes<HTMLDivElement>;
    /**
     * Callback method for determining if focus should indeed be set on the given element.
     * @param element - The child element within the zone to focus.
     * @returns True if focus should be set to the given element, false to avoid setting focus.
     * @deprecated Use `shouldReceiveFocus` instead.
     */
    onBeforeFocus?: (childElement?: HTMLElement) => boolean;
    /**
     * Callback method for determining if focus should indeed be set on the given element.
     * @param element - The child element within the zone to focus.
     * @returns True if focus should be set to the given element, false to avoid setting focus.
     */
    shouldReceiveFocus?: (childElement?: HTMLElement) => boolean;
    /** Allows focus to park on root when focus is in the `FocusZone` at render time. */
    allowFocusRoot?: boolean;
    /**
     * Allows tab key to be handled to tab through a list of items in the focus zone,
     * an unfortunate side effect is that users will not be able to tab out of the focus zone
     * and have to hit escape or some other key.
     * @deprecated Use `handleTabKey` instead.
     *
     */
    allowTabKey?: boolean;
    /**
     * Allows tab key to be handled to tab through a list of items in the focus zone,
     * an unfortunate side effect is that users will not be able to tab out of the focus zone
     * and have to hit escape or some other key.
     */
    handleTabKey?: FocusZoneTabbableElements;
    /**
     * If true and FocusZone's root element (container) receives focus, the focus will land either on the
     * defaultTabbableElement (if set) or on the first tabbable element of this FocusZone.
     * Usually a case for nested focus zones, when the nested focus zone's container is a focusable element.
     */
    shouldFocusInnerElementWhenReceivedFocus?: boolean;
    /**
     * If true and TAB key is not handled by FocusZone, resets current active element to null value.
     * For example, when roving index is not desirable and focus should always reset to the default tabbable element.
     */
    shouldResetActiveElementWhenTabFromZone?: boolean;
    /**
     * Determines whether the FocusZone will walk up the DOM trying to invoke click callbacks on focusable elements on
     * Enter and Space keydowns to ensure accessibility for tags that don't guarantee this behavior.
     * @defaultvalue true
     */
    shouldRaiseClicks?: boolean;
    /**
     * A callback method to determine if the input element should lose focus on arrow keys
     *  @param inputElement - The input element which is to loose focus.
     *  @returns True if input element should loose focus or false otherwise.
     */
    shouldInputLoseFocusOnArrowKey?: (inputElement: HTMLInputElement) => boolean;
    /**
     * Determines whether to disable the paging support for Page Up and Page Down keyboard scenarios.
     * @defaultvalue false
     */
    pagingSupportDisabled?: boolean;
    /**
     * Determines whether to check for data-no-horizontal-wrap or data-no-vertical-wrap attributes
     * when determining how to move focus
     * @defaultvalue false
     */
    checkForNoWrap?: boolean;
    /**
     * Whether the FocusZone should allow focus events to propagate past the FocusZone.
     * @deprecated Use `stopFocusPropagation` instead.
     */
    doNotAllowFocusEventToPropagate?: boolean;
    /**
     * Whether the FocusZone should allow focus events to propagate past the FocusZone.
     */
    stopFocusPropagation?: boolean;
    /**
     * Callback to notify creators that focus has been set on the FocusZone
     * @deprecated Use `onFocus` instead.
     */
    onFocusNotification?: () => void;
    /**
     * Callback called when "focus" event triggered in FocusZone.
     * @param event - React's original FocusEvent.
     */
    onFocus?: (event: React_2.FocusEvent<HTMLElement>) => void;
    /**
     * If true, FocusZone prevents the default behavior of Keyboard events when changing focus between elements.
     * @defaultvalue false
     */
    preventDefaultWhenHandled?: boolean;
    /**
     * If true, prevents the FocusZone from attempting to restore the focus to the inner element when the focus is on the
     * root element after componentDidUpdate.
     * @defaultvalue false
     */
    preventFocusRestoration?: boolean;
}

export { }
