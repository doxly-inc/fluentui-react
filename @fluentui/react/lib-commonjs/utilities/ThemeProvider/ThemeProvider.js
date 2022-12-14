"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var useThemeProviderClasses_1 = require("./useThemeProviderClasses");
var useThemeProvider_1 = require("./useThemeProvider");
var utilities_1 = require("@fluentui/utilities");
var react_hooks_1 = require("@fluentui/react-hooks");
/**
 * ThemeProvider, used for providing css variables and registering stylesheets.
 */
exports.ThemeProvider = React.forwardRef(function (props, ref) {
    var rootRef = react_hooks_1.useMergedRefs(ref, React.useRef(null));
    var _a = useThemeProvider_1.useThemeProvider(props, {
        ref: rootRef,
        as: 'div',
        applyTo: 'element',
    }), render = _a.render, state = _a.state;
    // Render styles.
    useThemeProviderClasses_1.useThemeProviderClasses(state);
    // Apply focus rect class on key presses.
    utilities_1.useFocusRects(state.ref);
    // Return the rendered content.
    return render(state);
});
exports.ThemeProvider.displayName = 'ThemeProvider';
//# sourceMappingURL=ThemeProvider.js.map