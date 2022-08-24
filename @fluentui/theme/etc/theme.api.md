## API Report File for "@fluentui/theme"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { IFontWeight } from '@fluentui/merge-styles';
import { IRawStyle } from '@fluentui/merge-styles';
import { IStyleFunctionOrObject } from '@fluentui/utilities';

// @public
export const AnimationStyles: IAnimationStyles;

// @public
export const AnimationVariables: IAnimationVariables;

// @public (undocumented)
export namespace CommunicationColors {
    const // (undocumented)
    shade30 = "#004578";
    const // (undocumented)
    shade20 = "#005a9e";
    const // (undocumented)
    shade10 = "#106ebe";
    const // (undocumented)
    primary = "#0078d4";
    const // (undocumented)
    tint10 = "#2b88d8";
    const // (undocumented)
    tint20 = "#c7e0f4";
    const // (undocumented)
    tint30 = "#deecf9";
    const // (undocumented)
    tint40 = "#eff6fc";
}

// @public
export type ComponentsStyles = {
    [componentName: string]: ComponentStyles;
};

// @public
export interface ComponentStyles {
    styles?: IStyleFunctionOrObject<any, any>;
}

// @public (undocumented)
export function createFontStyles(localeCode: string | null): IFontStyles;

// @public
export function createTheme(theme?: PartialTheme, depComments?: boolean): Theme;

// @public (undocumented)
export const DefaultEffects: IEffects;

// @public (undocumented)
export const DefaultFontStyles: IFontStyles;

// @public (undocumented)
export const DefaultPalette: IPalette;

// Warning: (ae-incompatible-release-tags) The symbol "DefaultSpacing" is marked as @public, but its signature references "ISpacing" which is marked as @internal
//
// @public (undocumented)
export const DefaultSpacing: ISpacing;

// @public (undocumented)
export namespace Depths {
    const // (undocumented)
    depth0 = "0 0 0 0 transparent";
    const // (undocumented)
    depth4 = "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)";
    const // (undocumented)
    depth8 = "0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)";
    const // (undocumented)
    depth16 = "0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)";
    const // (undocumented)
    depth64 = "0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)";
}

// @public (undocumented)
export const FluentTheme: ITheme;

// @public (undocumented)
export namespace FontSizes {
    const // (undocumented)
    size10 = "10px";
    const // (undocumented)
    size12 = "12px";
    const // (undocumented)
    size14 = "14px";
    const // (undocumented)
    size16 = "16px";
    const // (undocumented)
    size18 = "18px";
    const // (undocumented)
    size20 = "20px";
    const // (undocumented)
    size24 = "24px";
    const // (undocumented)
    size28 = "28px";
    const // (undocumented)
    size32 = "32px";
    const // (undocumented)
    size42 = "42px";
    const // (undocumented)
    size68 = "68px";
    const // (undocumented)
    mini: string;
    const // (undocumented)
    xSmall: string;
    const // (undocumented)
    small: string;
    const // (undocumented)
    smallPlus: string;
    const // (undocumented)
    medium: string;
    const // (undocumented)
    mediumPlus: string;
    const // (undocumented)
    icon: string;
    const // (undocumented)
    large: string;
    const // (undocumented)
    xLarge: string;
    const // (undocumented)
    xLargePlus: string;
    const // (undocumented)
    xxLarge: string;
    const // (undocumented)
    xxLargePlus: string;
    const // (undocumented)
    superLarge: string;
    const // (undocumented)
    mega: string;
}

// @public (undocumented)
export namespace FontWeights {
    const // (undocumented)
    light: IFontWeight;
    const // (undocumented)
    semilight: IFontWeight;
    const // (undocumented)
    regular: IFontWeight;
    const // (undocumented)
    semibold: IFontWeight;
    const // (undocumented)
    bold: IFontWeight;
}

// @public
export interface IAnimationStyles {
    // (undocumented)
    fadeIn100: IRawStyle;
    // (undocumented)
    fadeIn200: IRawStyle;
    // (undocumented)
    fadeIn400: IRawStyle;
    // (undocumented)
    fadeIn500: IRawStyle;
    // (undocumented)
    fadeOut100: IRawStyle;
    // (undocumented)
    fadeOut200: IRawStyle;
    // (undocumented)
    fadeOut400: IRawStyle;
    // (undocumented)
    fadeOut500: IRawStyle;
    // (undocumented)
    rotate90deg: IRawStyle;
    // (undocumented)
    rotateN90deg: IRawStyle;
    // (undocumented)
    scaleDownIn100: IRawStyle;
    // (undocumented)
    scaleDownOut98: IRawStyle;
    // (undocumented)
    scaleUpIn100: IRawStyle;
    // (undocumented)
    scaleUpOut103: IRawStyle;
    // (undocumented)
    slideDownIn10: IRawStyle;
    // (undocumented)
    slideDownIn20: IRawStyle;
    // (undocumented)
    slideDownOut10: IRawStyle;
    // (undocumented)
    slideDownOut20: IRawStyle;
    // (undocumented)
    slideLeftIn10: IRawStyle;
    // (undocumented)
    slideLeftIn20: IRawStyle;
    // (undocumented)
    slideLeftIn40: IRawStyle;
    // (undocumented)
    slideLeftIn400: IRawStyle;
    // (undocumented)
    slideLeftOut10: IRawStyle;
    // (undocumented)
    slideLeftOut20: IRawStyle;
    // (undocumented)
    slideLeftOut40: IRawStyle;
    // (undocumented)
    slideLeftOut400: IRawStyle;
    // (undocumented)
    slideRightIn10: IRawStyle;
    // (undocumented)
    slideRightIn20: IRawStyle;
    // (undocumented)
    slideRightIn40: IRawStyle;
    // (undocumented)
    slideRightIn400: IRawStyle;
    // (undocumented)
    slideRightOut10: IRawStyle;
    // (undocumented)
    slideRightOut20: IRawStyle;
    // (undocumented)
    slideRightOut40: IRawStyle;
    // (undocumented)
    slideRightOut400: IRawStyle;
    // (undocumented)
    slideUpIn10: IRawStyle;
    // (undocumented)
    slideUpIn20: IRawStyle;
    // (undocumented)
    slideUpOut10: IRawStyle;
    // (undocumented)
    slideUpOut20: IRawStyle;
}

// @public (undocumented)
export interface IAnimationVariables {
    // (undocumented)
    durationValue1: string;
    // (undocumented)
    durationValue2: string;
    // (undocumented)
    durationValue3: string;
    // (undocumented)
    durationValue4: string;
    // (undocumented)
    easeFunction1: string;
    // (undocumented)
    easeFunction2: string;
}

// @public (undocumented)
export namespace IconFontSizes {
    const // (undocumented)
    xSmall: string;
    const // (undocumented)
    small: string;
    const // (undocumented)
    medium: string;
    const // (undocumented)
    large: string;
}

// @public
export interface IEffects {
    elevation16: string;
    elevation4: string;
    elevation64: string;
    elevation8: string;
    roundedCorner2: string;
    roundedCorner4: string;
    roundedCorner6: string;
}

// @public
export interface IFontStyles {
    // (undocumented)
    large: IRawStyle;
    // (undocumented)
    medium: IRawStyle;
    // (undocumented)
    mediumPlus: IRawStyle;
    // (undocumented)
    mega: IRawStyle;
    // (undocumented)
    small: IRawStyle;
    // (undocumented)
    smallPlus: IRawStyle;
    // (undocumented)
    superLarge: IRawStyle;
    // (undocumented)
    tiny: IRawStyle;
    // (undocumented)
    xLarge: IRawStyle;
    // @deprecated (undocumented)
    xLargePlus: IRawStyle;
    // (undocumented)
    xSmall: IRawStyle;
    // (undocumented)
    xxLarge: IRawStyle;
    // @deprecated (undocumented)
    xxLargePlus: IRawStyle;
}

// @public
export interface IPalette {
    accent: string;
    black: string;
    blackTranslucent40: string;
    blue: string;
    blueDark: string;
    blueLight: string;
    blueMid: string;
    green: string;
    greenDark: string;
    greenLight: string;
    magenta: string;
    magentaDark: string;
    magentaLight: string;
    neutralDark: string;
    neutralLight: string;
    neutralLighter: string;
    neutralLighterAlt: string;
    neutralPrimary: string;
    neutralPrimaryAlt: string;
    neutralQuaternary: string;
    neutralQuaternaryAlt: string;
    neutralSecondary: string;
    neutralSecondaryAlt: string;
    neutralTertiary: string;
    neutralTertiaryAlt: string;
    orange: string;
    orangeLight: string;
    orangeLighter: string;
    purple: string;
    purpleDark: string;
    purpleLight: string;
    red: string;
    redDark: string;
    teal: string;
    tealDark: string;
    tealLight: string;
    themeDark: string;
    themeDarkAlt: string;
    themeDarker: string;
    themeLight: string;
    themeLighter: string;
    themeLighterAlt: string;
    themePrimary: string;
    themeSecondary: string;
    themeTertiary: string;
    white: string;
    whiteTranslucent40: string;
    yellow: string;
    yellowDark: string;
    yellowLight: string;
}

// @public (undocumented)
export interface IPartialTheme extends PartialTheme {
}

// @public (undocumented)
export interface IScheme {
    disableGlobalClassNames: boolean;
    // (undocumented)
    effects: IEffects;
    // (undocumented)
    fonts: IFontStyles;
    // (undocumented)
    isInverted: boolean;
    // (undocumented)
    palette: IPalette;
    // (undocumented)
    rtl?: boolean;
    // (undocumented)
    semanticColors: ISemanticColors;
    // @internal
    spacing: ISpacing;
}

// Warning: (ae-internal-missing-underscore) The name "ISchemeNames" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export type ISchemeNames = 'default' | 'neutral' | 'soft' | 'strong';

// @public
export interface ISemanticColors extends ISemanticTextColors {
    accentButtonBackground: string;
    blockingBackground: string;
    blockingIcon: string;
    bodyBackground: string;
    bodyBackgroundChecked: string;
    bodyBackgroundHovered: string;
    bodyDivider: string;
    bodyFrameBackground: string;
    bodyFrameDivider: string;
    bodyStandoutBackground: string;
    buttonBackground: string;
    buttonBackgroundChecked: string;
    buttonBackgroundCheckedHovered: string;
    buttonBackgroundDisabled: string;
    buttonBackgroundHovered: string;
    buttonBackgroundPressed: string;
    buttonBorder: string;
    buttonBorderDisabled: string;
    cardShadow: string;
    cardShadowHovered: string;
    cardStandoutBackground: string;
    defaultStateBackground: string;
    disabledBackground: string;
    disabledBorder: string;
    errorBackground: string;
    errorIcon: string;
    focusBorder: string;
    infoBackground: string;
    infoIcon: string;
    inputBackground: string;
    inputBackgroundChecked: string;
    inputBackgroundCheckedHovered: string;
    inputBorder: string;
    inputBorderHovered: string;
    inputFocusBorderAlt: string;
    inputForegroundChecked: string;
    inputIcon: string;
    inputIconDisabled: string;
    inputIconHovered: string;
    inputPlaceholderBackgroundChecked: string;
    listBackground: string;
    listHeaderBackgroundHovered: string;
    listHeaderBackgroundPressed: string;
    listItemBackgroundChecked: string;
    listItemBackgroundCheckedHovered: string;
    listItemBackgroundHovered: string;
    listText: string;
    menuBackground: string;
    menuDivider: string;
    menuHeader: string;
    menuIcon: string;
    // @deprecated (undocumented)
    menuItemBackgroundChecked: string;
    menuItemBackgroundHovered: string;
    menuItemBackgroundPressed: string;
    menuItemText: string;
    menuItemTextHovered: string;
    messageLink: string;
    messageLinkHovered: string;
    primaryButtonBackground: string;
    primaryButtonBackgroundDisabled: string;
    primaryButtonBackgroundHovered: string;
    primaryButtonBackgroundPressed: string;
    primaryButtonBorder: string;
    severeWarningBackground: string;
    severeWarningIcon: string;
    smallInputBorder: string;
    successBackground: string;
    successIcon: string;
    variantBorder: string;
    variantBorderHovered: string;
    warningBackground: string;
    // @deprecated (undocumented)
    warningHighlight: string;
    warningIcon: string;
}

// @public (undocumented)
export interface ISemanticTextColors {
    accentButtonText: string;
    actionLink: string;
    actionLinkHovered: string;
    bodySubtext: string;
    bodyText: string;
    bodyTextChecked: string;
    buttonText: string;
    buttonTextChecked: string;
    buttonTextCheckedHovered: string;
    buttonTextDisabled: string;
    buttonTextHovered: string;
    buttonTextPressed: string;
    disabledBodySubtext: string;
    disabledBodyText: string;
    disabledSubtext: string;
    disabledText: string;
    errorText: string;
    inputPlaceholderText: string;
    inputText: string;
    inputTextHovered: string;
    link: string;
    linkHovered: string;
    listText: string;
    // @deprecated (undocumented)
    listTextColor: string;
    messageText: string;
    primaryButtonText: string;
    primaryButtonTextDisabled: string;
    primaryButtonTextHovered: string;
    primaryButtonTextPressed: string;
    // @deprecated (undocumented)
    successText: string;
    // @deprecated (undocumented)
    warningText: string;
}

// Warning: (ae-internal-missing-underscore) The name "ISpacing" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export interface ISpacing {
    // (undocumented)
    l1: string;
    // (undocumented)
    l2: string;
    // (undocumented)
    m: string;
    // (undocumented)
    s1: string;
    // (undocumented)
    s2: string;
}

// @public (undocumented)
export interface ITheme extends Theme {
}

// @public (undocumented)
export namespace LocalizedFontFamilies {
    const // (undocumented)
    Arabic: string;
    const // (undocumented)
    ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    const // (undocumented)
    ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    const // (undocumented)
    Cyrillic: string;
    const // (undocumented)
    EastEuropean: string;
    const // (undocumented)
    Greek: string;
    const // (undocumented)
    Hebrew: string;
    const // (undocumented)
    Hindi = "'Nirmala UI'";
    const // (undocumented)
    Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    const // (undocumented)
    Korean = "'Malgun Gothic', Gulim";
    const // (undocumented)
    Selawik: string;
    const // (undocumented)
    Thai = "'Leelawadee UI Web', 'Kmer UI'";
    const // (undocumented)
    Vietnamese: string;
    const // (undocumented)
    WestEuropean: string;
    const // (undocumented)
    Armenian: string;
    const // (undocumented)
    Georgian: string;
}

// @public (undocumented)
export namespace LocalizedFontNames {
    const // (undocumented)
    Arabic = "Segoe UI Web (Arabic)";
    const // (undocumented)
    Cyrillic = "Segoe UI Web (Cyrillic)";
    const // (undocumented)
    EastEuropean = "Segoe UI Web (East European)";
    const // (undocumented)
    Greek = "Segoe UI Web (Greek)";
    const // (undocumented)
    Hebrew = "Segoe UI Web (Hebrew)";
    const // (undocumented)
    Thai = "Leelawadee UI Web";
    const // (undocumented)
    Vietnamese = "Segoe UI Web (Vietnamese)";
    const // (undocumented)
    WestEuropean = "Segoe UI Web (West European)";
    const // (undocumented)
    Selawik = "Selawik Web";
    const // (undocumented)
    Armenian = "Segoe UI Web (Armenian)";
    const // (undocumented)
    Georgian = "Segoe UI Web (Georgian)";
}

// @public
export function mergeThemes(theme: Theme, partialTheme?: PartialTheme): Theme;

// @public (undocumented)
export namespace MotionAnimations {
    const // (undocumented)
    fadeIn: string;
    const // (undocumented)
    fadeOut: string;
    const // (undocumented)
    scaleDownIn: string;
    const // (undocumented)
    scaleDownOut: string;
    const // (undocumented)
    slideLeftOut: string;
    const // (undocumented)
    slideRightOut: string;
    const // (undocumented)
    slideLeftIn: string;
    const // (undocumented)
    slideRightIn: string;
    const // (undocumented)
    slideUpOut: string;
    const // (undocumented)
    slideDownOut: string;
    const // (undocumented)
    slideUpIn: string;
    const // (undocumented)
    slideDownIn: string;
}

// @public (undocumented)
export namespace MotionDurations {
    const // (undocumented)
    duration1 = "100ms";
    const // (undocumented)
    duration2 = "200ms";
    const // (undocumented)
    duration3 = "300ms";
    const // (undocumented)
    duration4 = "400ms";
}

// @public (undocumented)
export namespace MotionTimings {
    const // (undocumented)
    accelerate = "cubic-bezier(0.9, 0.1, 1, 0.2)";
    const // (undocumented)
    decelerate = "cubic-bezier(0.1, 0.9, 0.2, 1)";
    const // (undocumented)
    linear = "cubic-bezier(0, 0, 1, 1)";
    const // (undocumented)
    standard = "cubic-bezier(0.8, 0, 0.2, 1)";
}

// @public (undocumented)
export namespace NeutralColors {
    const // (undocumented)
    black = "#000000";
    const // (undocumented)
    gray220 = "#11100f";
    const // (undocumented)
    gray210 = "#161514";
    const // (undocumented)
    gray200 = "#1b1a19";
    const // (undocumented)
    gray190 = "#201f1e";
    const // (undocumented)
    gray180 = "#252423";
    const // (undocumented)
    gray170 = "#292827";
    const // (undocumented)
    gray160 = "#323130";
    const // (undocumented)
    gray150 = "#3b3a39";
    const // (undocumented)
    gray140 = "#484644";
    const // (undocumented)
    gray130 = "#605e5c";
    const // (undocumented)
    gray120 = "#797775";
    const // (undocumented)
    gray110 = "#8a8886";
    const // (undocumented)
    gray100 = "#979593";
    const // (undocumented)
    gray90 = "#a19f9d";
    const // (undocumented)
    gray80 = "#b3b0ad";
    const // (undocumented)
    gray70 = "#bebbb8";
    const // (undocumented)
    gray60 = "#c8c6c4";
    const // (undocumented)
    gray50 = "#d2d0ce";
    const // (undocumented)
    gray40 = "#e1dfdd";
    const // (undocumented)
    gray30 = "#edebe9";
    const // (undocumented)
    gray20 = "#f3f2f1";
    const // (undocumented)
    gray10 = "#faf9f8";
    const // (undocumented)
    white = "#ffffff";
}

// @public
export interface PartialTheme {
    // (undocumented)
    components?: ComponentsStyles;
    defaultFontStyle?: IRawStyle;
    // (undocumented)
    disableGlobalClassNames?: boolean;
    // (undocumented)
    effects?: Partial<IEffects>;
    // (undocumented)
    fonts?: Partial<IFontStyles>;
    // (undocumented)
    isInverted?: boolean;
    // (undocumented)
    palette?: Partial<IPalette>;
    // (undocumented)
    rtl?: boolean;
    // @internal
    schemes?: {
        [P in ISchemeNames]?: IScheme;
    };
    // (undocumented)
    semanticColors?: Partial<ISemanticColors>;
    // Warning: (ae-incompatible-release-tags) The symbol "spacing" is marked as @public, but its signature references "ISpacing" which is marked as @internal
    //
    // (undocumented)
    spacing?: Partial<ISpacing>;
}

// @public (undocumented)
export function registerDefaultFontFaces(baseUrl: string): void;

// @public (undocumented)
export namespace SharedColors {
    const // (undocumented)
    pinkRed10 = "#750b1c";
    const // (undocumented)
    red20 = "#a4262c";
    const // (undocumented)
    red10 = "#d13438";
    const // (undocumented)
    redOrange20 = "#603d30";
    const // (undocumented)
    redOrange10 = "#da3b01";
    const // (undocumented)
    orange30 = "#8e562e";
    const // (undocumented)
    orange20 = "#ca5010";
    const // (undocumented)
    orange10 = "#ffaa44";
    const // (undocumented)
    yellow10 = "#fce100";
    const // (undocumented)
    orangeYellow20 = "#986f0b";
    const // (undocumented)
    orangeYellow10 = "#c19c00";
    const // (undocumented)
    yellowGreen10 = "#8cbd18";
    const // (undocumented)
    green20 = "#0b6a0b";
    const // (undocumented)
    green10 = "#498205";
    const // (undocumented)
    greenCyan10 = "#00ad56";
    const // (undocumented)
    cyan40 = "#005e50";
    const // (undocumented)
    cyan30 = "#005b70";
    const // (undocumented)
    cyan20 = "#038387";
    const // (undocumented)
    cyan10 = "#00b7c3";
    const // (undocumented)
    cyanBlue20 = "#004e8c";
    const // (undocumented)
    cyanBlue10 = "#0078d4";
    const // (undocumented)
    blue10 = "#4f6bed";
    const // (undocumented)
    blueMagenta40 = "#373277";
    const // (undocumented)
    blueMagenta30 = "#5c2e91";
    const // (undocumented)
    blueMagenta20 = "#8764b8";
    const // (undocumented)
    blueMagenta10 = "#8378de";
    const // (undocumented)
    magenta20 = "#881798";
    const // (undocumented)
    magenta10 = "#c239b3";
    const // (undocumented)
    magentaPink20 = "#9b0062";
    const // (undocumented)
    magentaPink10 = "#e3008c";
    const // (undocumented)
    gray40 = "#393939";
    const // (undocumented)
    gray30 = "#7a7574";
    const // (undocumented)
    gray20 = "#69797e";
    const // (undocumented)
    gray10 = "#a0aeb2";
}

// @public
export interface Theme extends IScheme {
    components?: ComponentsStyles;
    // @internal
    id?: string;
    // @internal
    schemes?: {
        [P in ISchemeNames]?: IScheme;
    };
}


// (No @packageDocumentation comment for this package)

```