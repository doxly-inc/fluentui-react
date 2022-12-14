import { ITheme } from '../../Styling';
import { IComboBoxOptionStyles, IComboBoxStyles } from './ComboBox.types';
import { IButtonStyles } from '../../Button';
export declare const getOptionStyles: (theme: ITheme, customStylesForAllOptions?: Partial<IComboBoxOptionStyles> | undefined, customOptionStylesForCurrentOption?: Partial<IComboBoxOptionStyles> | undefined, isPending?: boolean | undefined, isHidden?: boolean | undefined) => Partial<IComboBoxOptionStyles>;
export declare const getCaretDownButtonStyles: (theme: ITheme, customStyles?: Partial<IButtonStyles> | undefined) => IButtonStyles;
export declare const getStyles: (theme: ITheme, customStyles?: Partial<IComboBoxStyles> | undefined, comboBoxOptionWidth?: string | undefined) => Partial<IComboBoxStyles>;
