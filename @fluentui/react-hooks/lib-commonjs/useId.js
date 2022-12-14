"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var getId_1 = require("@fluentui/utilities/lib-commonjs/getId");
/**
 * Hook to generate a unique ID in the global scope (spanning across duplicate copies of the same library).
 *
 * @param prefix - Optional prefix for the ID
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
function useId(prefix, providedId) {
    // getId should only be called once since it updates the global constant for the next ID value.
    // (While an extra update isn't likely to cause problems in practice, it's better to avoid it.)
    var ref = React.useRef(providedId);
    if (!ref.current) {
        ref.current = getId_1.getId(prefix);
    }
    return ref.current;
}
exports.useId = useId;
//# sourceMappingURL=useId.js.map