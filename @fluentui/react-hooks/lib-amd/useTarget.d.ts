import { Point, Rectangle } from '@fluentui/utilities';
import * as React from 'react';
export declare type Target = Element | string | MouseEvent | Point | Rectangle | null | React.RefObject<Element>;
/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
export declare function useTarget<TElement extends HTMLElement = HTMLElement>(target: Target | undefined, hostElement?: React.RefObject<TElement | null>): Readonly<[React.RefObject<Element | MouseEvent | Point | Rectangle | null>, Window | undefined]>;
