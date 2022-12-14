"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var warn_1 = require("@fluentui/utilities/lib-commonjs/warn");
var usePrevious_1 = require("./usePrevious");
var useConst_1 = require("./useConst");
var warningId = 0;
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
function useWarnings(options) {
    if (process.env.NODE_ENV !== 'production') {
        var name_1 = options.name, props = options.props, _a = options.other, other = _a === void 0 ? [] : _a, conditionallyRequired = options.conditionallyRequired, deprecations = options.deprecations, mutuallyExclusive = options.mutuallyExclusive, controlledUsage = options.controlledUsage;
        /* eslint-disable react-hooks/rules-of-hooks -- build-time conditional */
        var hasWarnedRef = React.useRef(false);
        var componentId = useConst_1.useConst(function () { return "useWarnings_" + warningId++; });
        var oldProps = usePrevious_1.usePrevious(props);
        /* eslint-enable react-hooks/rules-of-hooks */
        // Warn synchronously (not in useEffect) on first render to make debugging easier.
        if (!hasWarnedRef.current) {
            hasWarnedRef.current = true;
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var warning = other_1[_i];
                warn_1.warn(warning);
            }
            if (conditionallyRequired) {
                for (var _b = 0, conditionallyRequired_1 = conditionallyRequired; _b < conditionallyRequired_1.length; _b++) {
                    var req = conditionallyRequired_1[_b];
                    warn_1.warnConditionallyRequiredProps(name_1, props, req.requiredProps, req.conditionalPropName, req.condition);
                }
            }
            deprecations && warn_1.warnDeprecations(name_1, props, deprecations);
            mutuallyExclusive && warn_1.warnMutuallyExclusive(name_1, props, mutuallyExclusive);
        }
        // Controlled usage warnings may be displayed on either first or subsequent renders due to
        // prop changes. Note that it's safe to run this synchronously (not in useEffect) even in
        // concurrent mode because `warnControlledUsage` internally tracks which warnings have been
        // displayed for each component instance (so nothing will be displayed twice).
        controlledUsage && warn_1.warnControlledUsage(tslib_1.__assign(tslib_1.__assign({}, controlledUsage), { componentId: componentId, props: props, componentName: name_1, oldProps: oldProps }));
    }
}
exports.useWarnings = useWarnings;
//# sourceMappingURL=useWarnings.js.map