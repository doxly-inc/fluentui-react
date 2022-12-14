import { __assign } from "tslib";
import { resolveClasses } from './resolveClasses';
import { resolveSlotProps } from './resolveSlotProps';
/**
 * Merge props takes in state and compose options, and resolves slots and slotProps.
 * It's expected that the component will call mergeProps(state, options) from within
 * render; after resolving state and before rendering slots and slotProps.
 */
export function mergeProps(state, options) {
    var result = {
        state: state,
        slots: __assign(__assign({}, options.slots), { 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            root: state.as || options.slots.root || 'div' }),
        slotProps: {},
    };
    // Resolve classes.
    resolveClasses(result, options.classes);
    // Resolve slotProps/slots from state.
    resolveSlotProps(result, options);
    // TODO: Resolve inline styles.
    return result;
}
//# sourceMappingURL=mergeProps.js.map