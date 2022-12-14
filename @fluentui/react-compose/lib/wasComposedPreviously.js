/**
 * compose() allows you to pass two inputs:
 * - React.forwardRef + static fluentComposeConfig, i.e. previously composed component
 * - a function
 */
export function wasComposedPreviously(input) {
    return !!input.fluentComposeConfig;
}
//# sourceMappingURL=wasComposedPreviously.js.map