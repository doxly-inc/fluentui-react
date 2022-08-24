import { IStyle, ITheme } from '../../Styling';
import { IStyleFunctionOrObject } from '../../Utilities';
/**
 * {@docCategory GroupedList}
 */
export interface IGroupSpacerProps {
    /**
     * @deprecated Unused. Will be removed in \>= 7.0
     */
    theme?: ITheme;
    /**
     * @deprecated Unused. Will be removed in \>= 7.0
     */
    styles?: IStyleFunctionOrObject<IGroupSpacerStyleProps, IGroupSpacerStyles>;
    /** Count of spacer(s) */
    count: number;
    /** How much to indent */
    indentWidth?: number;
    /** Override the default role (presentation) */
    role?: string;
}
/**
 * {@docCategory GroupedList}
 * @deprecated Unused. Use `IGroupSpacerProps.indentWidth`. Will be removed in \>= 7.0.
 */
export declare type IGroupSpacerStyleProps = Required<Pick<IGroupSpacerProps, 'theme'>> & {
    width?: number;
};
/**
 * {@docCategory GroupedList}
 * @deprecated Unused. Will be removed in \>= 7.0.
 */
export interface IGroupSpacerStyles {
    root: IStyle;
}
