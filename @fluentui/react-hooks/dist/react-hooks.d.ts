import { Async } from '@fluentui/utilities';
import { ISettingsMap } from '@fluentui/utilities/lib/warn';
import { IWarnControlledUsageParams } from '@fluentui/utilities/lib/warn';
import { Point } from '@fluentui/utilities';
import * as React from 'react';
import { Rectangle } from '@fluentui/utilities';

export declare type ChangeCallback<TElement extends HTMLElement, TValue, TEvent extends React.SyntheticEvent<TElement> | undefined> = (ev: TEvent, newValue: TValue | undefined) => void;

/** Updater callbacks returned by `useBoolean`. */
export declare interface IUseBooleanCallbacks {
    /** Set the value to true. Always has the same identity. */
    setTrue: () => void;
    /** Set the value to false. Always has the same identity. */
    setFalse: () => void;
    /** Toggle the value. Always has the same identity. */
    toggle: () => void;
}

export declare interface IWarningOptions<P> {
    /** Name of the component */
    name: string;
    /** Current component props */
    props: P;
    /** Generic messages */
    other?: string[];
    /** Warns when props are required if a condition is met */
    conditionallyRequired?: {
        /** Props required when the condition is met */
        requiredProps: string[];
        /** Name of the prop that the condition is based on */
        conditionalPropName: string;
        /** Whether the condition is met */
        condition: boolean;
    }[];
    /**
     * Warns when deprecated props are being used. Each key is a prop name and each value is
     * either undefined or a replacement prop name.
     */
    deprecations?: ISettingsMap<P>;
    /**
     * Warns when two props which are mutually exclusive are both being used.
     * The key is one prop name and the value is the other.
     */
    mutuallyExclusive?: ISettingsMap<P>;
    /**
     * Check for and warn on the following error conditions with a form component:
     * - A value prop is provided (indicated it's being used as controlled) without a change handler,
     *    and the component is not read-only
     * - Both the value and defaultValue props are provided
     * - The component is attempting to switch between controlled and uncontrolled
     *
     * The messages mimic the warnings React gives for these error conditions on input elements.
     * The warning will only be displayed once per component instance.
     */
    controlledUsage?: Pick<IWarnControlledUsageParams<P>, 'valueProp' | 'defaultValueProp' | 'onChangeProp' | 'readOnlyProp'>;
}

/**
 * A callback ref function that also has a .current member for the ref's current value.
 */
export declare type RefCallback<T> = ((value: T | null) => void) & React.RefObject<T>;

/**
 * A Ref function which can be treated like a ref object in that it has an attached
 * current property, which will be updated as the ref is evaluated.
 */
export declare type RefObjectFunction<T> = React.RefObject<T> & ((value: T) => void);

export declare type Target = Element | string | MouseEvent | Point | Rectangle | null | React.RefObject<Element>;

/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
export declare function useAsync(): Async;

/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
export declare function useBoolean(initialState: boolean): [boolean, IUseBooleanCallbacks];

/**
 * Hook to initialize and return a constant value. Unlike `React.useMemo`, this is guaranteed to
 * always return the same value (and if the initializer is a function, only call it once).
 * This is similar to setting a private member in a class constructor.
 *
 * If the value should ever change based on dependencies, use `React.useMemo` instead.
 *
 * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,
 * only the value/function passed in the first time this is called is respected.
 * @returns The value. The identity of this value will always be the same.
 */
export declare function useConst<T>(initialValue: T | (() => T)): T;

/**
 * @deprecated Deprecated due to potential for misuse (see package readme).
 * Use `React.useCallback` instead.
 */
export declare function useConstCallback<T extends (...args: any[]) => any>(callback: T): T;

/**
 * Hook to manage a value that could be either controlled or uncontrolled, such as a checked state or
 * text box string.
 * @param controlledValue - The controlled value passed in the props. This value will always be used if provided,
 * and the internal state will be updated to reflect it.
 * @param defaultUncontrolledValue - Initial value for the internal state in the uncontrolled case.
 * @returns An array of the current value and an updater callback. Like `React.useState`, the updater
 * callback always has the same identity, and it can take either a new value, or a function which
 * is passed the previous value and returns the new value.
 * @see https://reactjs.org/docs/uncontrolled-components.html
 */
export declare function useControllableValue<TValue, TElement extends HTMLElement>(controlledValue: TValue | undefined, defaultUncontrolledValue: TValue | undefined): Readonly<[TValue | undefined, (update: React.SetStateAction<TValue | undefined>) => void]>;

export declare function useControllableValue<TValue, TElement extends HTMLElement, TEvent extends React.SyntheticEvent<TElement> | undefined>(controlledValue: TValue | undefined, defaultUncontrolledValue: TValue | undefined, onChange: ChangeCallback<TElement, TValue, TEvent> | undefined): Readonly<[TValue | undefined, (update: React.SetStateAction<TValue | undefined>, ev?: React.FormEvent<TElement>) => void]>;

/**
 * Hook to force update a function component by updating a dummy state.
 */
export declare function useForceUpdate(): () => void;

/**
 * Hook to generate a unique ID in the global scope (spanning across duplicate copies of the same library).
 *
 * @param prefix - Optional prefix for the ID
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
export declare function useId(prefix?: string, providedId?: string): string;

/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */
export declare function useMergedRefs<T>(...refs: (React.Ref<T> | undefined)[]): RefObjectFunction<T>;

/**
 * Hook which asynchronously executes a callback once the component has been mounted.
 *
 * @param callback - Function to call before mount.
 */
export declare const useMount: (callback: () => void) => void;

/**
 *Hook which synchronously executes a callback once the component has been mounted.
 *
 * `WARNING` This should only be used if you need to perform an action after the component has been mounted and
 * before the browser paints. useMountSync will trigger debug warnings in server-rendered scenarios and should be used
 * sparingly.
 *
 * @param callback - Function to call once the component has been mounted.
 */
export declare const useMountSync: (callback: () => void) => void;

/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
export declare function useOnEvent<TElement extends Element, TEvent extends Event>(element: React.RefObject<TElement | undefined | null> | TElement | Window | Document | undefined | null, eventName: string, callback: (ev: TEvent) => void, useCapture?: boolean): void;

/**
 * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
 *
 * See [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
 */
export declare function usePrevious<T>(value: T): T | undefined;

/**
 * Creates a ref, and calls a callback whenever the ref changes to a non-null value. The callback can optionally return
 * a cleanup function that'll be called before the value changes, and when the ref is unmounted.
 *
 * This can be used to work around a limitation that useEffect cannot depend on `ref.current` (see
 * https://github.com/facebook/react/issues/14387#issuecomment-503616820).
 *
 * Usage example:
 * ```ts
 * const myRef = useRefEffect<HTMLElement>(element => {
 *  ...
 *  return () => { ... cleanup ... };
 * });
 * ```
 * ```jsx
 * <div ref={myRef} />
 * ```
 *
 * @param callback - Called whenever the ref's value changes to non-null. Can optionally return a cleanup function.
 * @param initial - (Optional) The initial value for the ref.
 *
 * @returns A function that should be called to set the ref's value. The object also has a `.current` member that can be
 * used to access the ref's value (like a normal RefObject). It can be hooked up to an element's `ref` property.
 */
export declare function useRefEffect<T>(callback: (value: T) => (() => void) | void, initial?: T | null): RefCallback<T>;

/**
 *  Returns a wrapper function for `setInterval` which automatically handles disposal.
 */
export declare const useSetInterval: () => UseSetIntervalReturnType;

export declare type UseSetIntervalReturnType = {
    setInterval: (callback: () => void, duration: number) => number;
    clearInterval: (id: number) => void;
};

/**
 *  Returns a wrapper function for `setTimeout` which automatically handles disposal.
 */
export declare const useSetTimeout: () => UseSetTimeoutReturnType;

export declare type UseSetTimeoutReturnType = {
    setTimeout: (callback: () => void, duration: number) => number;
    clearTimeout: (id: number) => void;
};

/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
export declare function useTarget<TElement extends HTMLElement = HTMLElement>(target: Target | undefined, hostElement?: React.RefObject<TElement | null>): Readonly<[React.RefObject<Element | MouseEvent | Point | Rectangle | null>, Window | undefined]>;

/**
 * Hook which synchronously executes a callback when the component is about to unmount.
 *
 * @param callback - Function to call during unmount.
 */
export declare const useUnmount: (callback: () => void) => void;

/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
export declare function useWarnings<P>(options: IWarningOptions<P>): void;

export { }
