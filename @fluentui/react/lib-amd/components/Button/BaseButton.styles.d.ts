import { IButtonStyles } from './Button.types';
import { ITheme } from '../../Styling';
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
export declare const getStyles: (theme: ITheme) => IButtonStyles;
