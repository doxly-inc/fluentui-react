import { ITheme } from '../../Styling';
import { IVerticalDividerClassNames } from '../Divider/VerticalDivider.types';
import { IContextualMenuItemStyles, IContextualMenuItemStyleProps } from './ContextualMenuItem.types';
import { IContextualMenuSubComponentStyles } from './ContextualMenu.types';
/**
 * @deprecated Deprecated in favor of mergeStyles API.
 */
export interface IContextualMenuClassNames {
    container?: string;
    root?: string;
    list?: string;
    header?: string;
    title?: string;
    subComponentStyles?: IContextualMenuSubComponentStyles;
}
/**
 * @deprecated Deprecated in favor of mergeStyles API.
 */
export interface IMenuItemClassNames {
    item?: string;
    divider?: string;
    root?: string;
    linkContent?: string;
    icon?: string;
    checkmarkIcon?: string;
    subMenuIcon?: string;
    label?: string;
    secondaryText?: string;
    splitContainer?: string;
    splitPrimary?: string;
    splitMenu?: string;
    linkContentMenu?: string;
    screenReaderText?: string;
}
export declare const getSplitButtonVerticalDividerClassNames: (theme: ITheme) => IVerticalDividerClassNames;
/**
 * @deprecated Will be removed in \>= 7.0.
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * @internal
 */
export declare const getItemClassNames: (theme: ITheme, disabled: boolean, expanded: boolean, checked: boolean, isAnchorLink: boolean, knownIcon: boolean, itemClassName?: string | undefined, dividerClassName?: string | undefined, iconClassName?: string | undefined, subMenuClassName?: string | undefined, primaryDisabled?: boolean | undefined, className?: string | undefined) => IContextualMenuItemStyles;
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props the ContextualMenuItem style props used to generate its styles.
 */
export declare const getItemStyles: (props: IContextualMenuItemStyleProps) => IContextualMenuItemStyles;
