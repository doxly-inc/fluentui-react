import { ThemeProviderProps, ThemeProviderState } from './ThemeProvider.types';
/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
export declare const useThemeProvider: (props: ThemeProviderProps, defaultProps: ThemeProviderProps) => {
    state: ThemeProviderState;
    render: (state: ThemeProviderState) => JSX.Element;
};
