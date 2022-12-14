import * as React from 'react';
import { useThemeProviderClasses } from './useThemeProviderClasses';
import { useThemeProvider } from './useThemeProvider';
import { useFocusRects } from '@fluentui/utilities';
import { useMergedRefs } from '@fluentui/react-hooks';
/**
 * ThemeProvider, used for providing css variables and registering stylesheets.
 */
export var ThemeProvider = React.forwardRef(function (props, ref) {
    var rootRef = useMergedRefs(ref, React.useRef(null));
    var _a = useThemeProvider(props, {
        ref: rootRef,
        as: 'div',
        applyTo: 'element',
    }), render = _a.render, state = _a.state;
    // Render styles.
    useThemeProviderClasses(state);
    // Apply focus rect class on key presses.
    useFocusRects(state.ref);
    // Return the rendered content.
    return render(state);
});
ThemeProvider.displayName = 'ThemeProvider';
//# sourceMappingURL=ThemeProvider.js.map