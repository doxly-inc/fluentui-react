import * as React from 'react';
/**
 * Viewport rectangle dimensions.
 *
 * {@docCategory DetailsList}
 */
export interface IViewport {
    /**
     * Width in pixels.
     */
    width: number;
    /**
     * Height in pixels.
     */
    height: number;
}
export interface IWithViewportState {
    viewport?: IViewport;
}
/**
 * Props interface for the withViewport component.
 *
 * {@docCategory DetailsList}
 */
export interface IWithViewportProps {
    /**
     * Whether or not `withViewport` should disable its viewport measurements, effectively making this decorator
     * pass-through with no impact on the rendered component.
     *
     * Since `withViewport` measures the `viewport` on mount, after each React update, and in response to events,
     * it may cause a component which does not currently need this information due to its configuration to re-render
     * too often. `skipViewportMeasures` may be toggled on and off based on current state, and will suspend and resume
     * measurement as-needed.
     *
     * For example, when this wraps `DetailsList`, set `skipViewportMeasures` to `true` when the `layoutMode` is
     * `fixedColumns`, since the `DetailsList` does not use the viewport size in any calculations.
     *
     * In addition, consider setting `skipViewportMeasures` to `true` when running within a React test renderer, to avoid
     * direct DOM dependencies.
     */
    skipViewportMeasures?: boolean;
    /**
     * Whether or not to explicitly disable usage of the `ResizeObserver` in favor of a `'resize'` event on `window`,
     * even if the browser supports `ResizeObserver`. This may be necessary if use of `ResizeObserver` results in too
     * many re-renders of the wrapped component due to the frequency at which events are fired.
     *
     * This has no impact if `skipViewportMeasures` is `true`, as no viewport measurement strategy is used.
     */
    disableResizeObserver?: boolean;
}
/**
 * A decorator to update decorated component on viewport or window resize events.
 *
 * @param ComposedComponent decorated React component reference.
 */
export declare function withViewport<TProps extends {
    viewport?: IViewport;
}, TState>(ComposedComponent: new (props: TProps, ...args: any[]) => React.Component<TProps, TState>): any;
