import { IStyle } from '@fluentui/style-utilities';
import { Theme } from '@fluentui/theme';
/** Options that can be provided to the hook generated by `makeStyles`. */
export declare type UseStylesOptions = {
    theme?: Theme;
};
/**
 * Registers a css object, optionally as a function of the theme.
 *
 * @param styleOrFunction - Either a css javascript object, or a function which takes in `ITheme`
 * and returns a css javascript object.
 */
export declare function makeStyles<TStyleSet extends {
    [key: string]: IStyle;
}>(styleOrFunction: TStyleSet | ((theme: Theme) => TStyleSet)): (options?: UseStylesOptions) => {
    [key in keyof TStyleSet]: string;
};
