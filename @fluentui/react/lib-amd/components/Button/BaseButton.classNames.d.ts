import { ITheme } from '../../Styling';
import { IButtonStyles } from './Button.types';
export interface IButtonClassNames {
    root?: string;
    flexContainer?: string;
    textContainer?: string;
    icon?: string;
    label?: string;
    menuIcon?: string;
    description?: string;
    screenReaderText?: string;
}
export declare const ButtonGlobalClassNames: {
    msButton: string;
    msButtonHasMenu: string;
    msButtonIcon: string;
    msButtonMenuIcon: string;
    msButtonLabel: string;
    msButtonDescription: string;
    msButtonScreenReaderText: string;
    msButtonFlexContainer: string;
    msButtonTextContainer: string;
};
export declare const getBaseButtonClassNames: (theme: ITheme, styles: IButtonStyles, className: string, variantClassName: string, iconClassName: string | undefined, menuIconClassName: string | undefined, disabled: boolean, hasMenu: boolean, checked: boolean, expanded: boolean, isSplit: boolean | undefined) => IButtonClassNames;
