"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var resolveClasses_1 = require("./resolveClasses");
var resolveSlotProps_1 = require("./resolveSlotProps");
/**
 * Merge props takes in state and compose options, and resolves slots and slotProps.
 * It's expected that the component will call mergeProps(state, options) from within
 * render; after resolving state and before rendering slots and slotProps.
 */
function mergeProps(state, options) {
    var result = {
        state: state,
        slots: tslib_1.__assign(tslib_1.__assign({}, options.slots), { 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            root: state.as || options.slots.root || 'div' }),
        slotProps: {},
    };
    // Resolve classes.
    resolveClasses_1.resolveClasses(result, options.classes);
    // Resolve slotProps/slots from state.
    resolveSlotProps_1.resolveSlotProps(result, options);
    // TODO: Resolve inline styles.
    return result;
}
exports.mergeProps = mergeProps;
//# sourceMappingURL=mergeProps.js.map