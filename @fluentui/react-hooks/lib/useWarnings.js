import { __assign } from "tslib";
import * as React from 'react';
import { warn, warnControlledUsage, warnConditionallyRequiredProps, warnDeprecations, warnMutuallyExclusive, } from '@fluentui/utilities/lib/warn';
import { usePrevious } from './usePrevious';
import { useConst } from './useConst';
var warningId = 0;
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
export function useWarnings(options) {
    if (process.env.NODE_ENV !== 'production') {
        var name_1 = options.name, props = options.props, _a = options.other, other = _a === void 0 ? [] : _a, conditionallyRequired = options.conditionallyRequired, deprecations = options.deprecations, mutuallyExclusive = options.mutuallyExclusive, controlledUsage = options.controlledUsage;
        /* eslint-disable react-hooks/rules-of-hooks -- build-time conditional */
        var hasWarnedRef = React.useRef(false);
        var componentId = useConst(function () { return "useWarnings_" + warningId++; });
        var oldProps = usePrevious(props);
        /* eslint-enable react-hooks/rules-of-hooks */
        // Warn synchronously (not in useEffect) on first render to make debugging easier.
        if (!hasWarnedRef.current) {
            hasWarnedRef.current = true;
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var warning = other_1[_i];
                warn(warning);
            }
            if (conditionallyRequired) {
                for (var _b = 0, conditionallyRequired_1 = conditionallyRequired; _b < conditionallyRequired_1.length; _b++) {
                    var req = conditionallyRequired_1[_b];
                    warnConditionallyRequiredProps(name_1, props, req.requiredProps, req.conditionalPropName, req.condition);
                }
            }
            deprecations && warnDeprecations(name_1, props, deprecations);
            mutuallyExclusive && warnMutuallyExclusive(name_1, props, mutuallyExclusive);
        }
        // Controlled usage warnings may be displayed on either first or subsequent renders due to
        // prop changes. Note that it's safe to run this synchronously (not in useEffect) even in
        // concurrent mode because `warnControlledUsage` internally tracks which warnings have been
        // displayed for each component instance (so nothing will be displayed twice).
        controlledUsage && warnControlledUsage(__assign(__assign({}, controlledUsage), { componentId: componentId, props: props, componentName: name_1, oldProps: oldProps }));
    }
}
//# sourceMappingURL=useWarnings.js.map