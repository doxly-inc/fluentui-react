import { ISchemeNames } from '@fluentui/style-utilities';
import { IStyle } from '@fluentui/style-utilities';
import { IStyleSet } from '@fluentui/style-utilities';
import { ITheme } from '@fluentui/style-utilities';
import { styled as legacyStyled } from '@fluentui/utilities';
import * as React_2 from 'react';

/**
 * Assembles a higher order component based on the following: styles, theme, view, and state.
 * Imposes a separation of concern and centralizes styling processing to increase ease of use and robustness
 * in how components use and apply styling and theming.
 *
 * Automatically merges and applies themes and styles with theme / styleprops having the highest priority.
 * State component, if provided, is passed in props for processing. Props from state / user are automatically processed
 * and styled before finally being passed to view.
 *
 * State components should contain all stateful behavior and should not generate any JSX, but rather simply call
 * the view prop.
 *
 * Views should simply be stateless pure functions that receive all props needed for rendering their output.
 *
 * State component is optional. If state is not provided, created component is essentially a functional
 * stateless component.
 *
 * @param options - component Component options. See IComponentOptions for more detail.
 */
export declare function createComponent<TComponentProps extends ValidProps, TTokens, TStyleSet extends IStyleSet<TStyleSet>, TViewProps extends TComponentProps = TComponentProps, TStatics = {}>(view: IViewComponent<TViewProps>, options?: IComponentOptions<TComponentProps, TTokens, TStyleSet, TViewProps, TStatics>): React_2.FunctionComponent<TComponentProps> & TStatics;

/**
 * This function creates factories that render ouput depending on the user ISlotProp props passed in.
 * @param DefaultComponent - Base component to render when not overridden by user props.
 * @param options - Factory options, including defaultProp value for shorthand prop mapping.
 * @returns ISlotFactory function used for rendering slots.
 */
export declare function createFactory<TProps extends ValidProps, TShorthandProp extends ValidShorthand = never>(DefaultComponent: React_2.ComponentType<TProps>, options?: IFactoryOptions<TProps>): ISlotFactory<TProps, TShorthandProp>;

/**
 * Extracts props type from ISlotProp definition.
 */
export declare type ExtractProps<TUnion> = TUnion extends ISlotProp<infer TProps> ? TProps : never;

/**
 * Extracts shorthand type from union of ValidShorthand types.
 */
export declare type ExtractShorthand<TUnion> = TUnion extends boolean ? boolean : TUnion extends number ? number : TUnion extends string ? string : never;

/**
 * Simple controlled helper that gives priority to props value and falls back to derived value.
 *
 * @param props - The props object containing controlled prop values.
 * @param propName - The controlled prop name.
 * @param derivedValue - Derived value. Returned when controlled value is not present.
 */
export declare function getControlledDerivedProps<TProps, TProp extends keyof TProps>(props: Readonly<TProps>, propName: TProp, derivedValue: TProps[TProp]): TProps[TProp];

/**
 * This function generates slots that can be used in JSX given a definition of slots and their corresponding types.
 * @param userProps - Props as pass to component.
 * @param slots - Slot definition object defining the default slot component for each slot.
 * @returns A set of created slots that components can render in JSX.
 */
export declare function getSlots<TComponentProps extends ISlottableProps<TComponentSlots>, TComponentSlots>(userProps: TComponentProps, slots: ISlotDefinition<Required<TComponentSlots>>): ISlots<Required<TComponentSlots>>;

/**
 * Component helper that defines options as required for ease of use by component consumers.
 */
export declare type IComponent<TComponentProps, TTokens, TStyleSet extends IStyleSet<TStyleSet>, TViewProps = TComponentProps, TStatics = {}> = Required<IComponentOptions<TComponentProps, TTokens, TStyleSet, TViewProps, TStatics>> & {
    /**
     * Component that generates view output.
     */
    view: IViewComponent<TViewProps>;
};

/**
 * Component options used by foundation to tie elements together.
 *
 * * TComponentProps: A styleable props interface for the created component.
 * * TTokens: The type for tokens props.
 * * TStyleSet: The type for styles properties.
 * * TViewProps: The props specific to the view, including processed properties outputted by optional state component.
 * If state component is not provided, TComponentProps is the same as TViewProps.
 * * TStatics: Static type for statics applied to created component object.
 */
export declare interface IComponentOptions<TComponentProps, TTokens, TStyleSet extends IStyleSet<TStyleSet>, TViewProps = TComponentProps, TStatics = {}> {
    /**
     * Display name to identify component in React hierarchy. This parameter is required for targeted component styling
     * via theming.
     */
    displayName?: string;
    /**
     * List of fields which can be customized.
     */
    fields?: string[];
    /**
     * Styles prop to pass into component.
     */
    styles?: IStylesFunctionOrObject<TViewProps, TTokens, TStyleSet>;
    /**
     * Optional state component that processes TComponentProps into TViewProps.
     */
    state?: IStateComponentType<TComponentProps, TViewProps>;
    /**
     * Optional static object to assign to constructed component.
     */
    statics?: TStatics;
    /**
     * Tokens prop to pass into component.
     */
    tokens?: ITokenFunctionOrObject<TViewProps, TTokens>;
    /**
     * Default prop for which to map primitive values.
     */
    factoryOptions?: IFactoryOptions<TComponentProps>;
}

/**
 * Helper type defining style sections, one for each component slot.
 */
export declare type IComponentStyles<TSlots> = {
    [key in keyof TSlots]?: IStyle;
};

export declare interface IControlledStateOptions<TProps, TProp extends keyof TProps, TDefaultProp extends keyof TProps> {
    defaultPropValue?: TProps[TProp];
    defaultPropName?: TDefaultProp;
}

export declare type ICustomizationProps<TViewProps, TTokens, TStyleSet extends IStyleSet<TStyleSet>> = IStyleableComponentProps<TViewProps, TTokens, TStyleSet> & Required<Pick<IStyleableComponentProps<TViewProps, TTokens, TStyleSet>, 'theme'>>;

/**
 * Defines user properties that are automatically applied by Slot utilities using slot name.
 */
export declare interface IDefaultSlotProps<TSlots> {
    _defaultStyles: IComponentStyles<TSlots>;
}

/**
 * Factory options for creating component.
 */
export declare interface IFactoryOptions<TProps> {
    /**
     * Default prop for which to map primitive values.
     */
    defaultProp?: keyof TProps | 'children';
}

/**
 * Optional HTML element typing to confine or expand HTML attribute usage for an intrinsic slot.
 * Useful for slots that need to allow access to specialized HTML attributes, such as for buttons and inputs.
 * Example usage: root?: IHTMLElementSlot\<'button'\>;
 */
export declare type IHTMLElementSlot<TElement extends keyof JSX.IntrinsicElements> = ISlotProp<JSX.IntrinsicElements[TElement]>;

/**
 * Generic slot definition allowing common HTML attributes. Applicable for most intrinsic slots. Please note certain
 * elements such as buttons and inputs should make use of IHTMLElementSlot to provide access to specialized attributes
 * of those elements.
 */
export declare type IHTMLSlot = ISlotProp<React_2.DetailedHTMLProps<React_2.HTMLAttributes<any>, any>>;

/**
 * Props generated by Foundation.
 */
export declare interface IProcessedSlotProps {
    className?: string;
}

/**
 * Helper interface for accessing user props children.
 * @deprecated Use React.PropsWithChildren.
 */
export declare type IPropsWithChildren<TProps> = React_2.PropsWithChildren<TProps>;

/**
 * Created Slot structure used for rendering by components.
 */
export declare interface ISlot<TProps> {
    (componentProps: React_2.PropsWithChildren<TProps> | undefined | null): ReturnType<React_2.FunctionComponent>;
    isSlot?: boolean;
}

/**
 * Signature of components that have component factories.
 */
export declare interface ISlotCreator<TProps extends ValidProps, TShorthandProp extends ValidShorthand> {
    create?: ISlotFactory<TProps, TShorthandProp>;
}

/**
 * An interface for defining slots. Each key in TSlot must point to an ISlottableType.
 */
export declare type ISlotDefinition<TSlots> = {
    [slot in keyof TSlots]: React_2.ElementType<ExtractProps<TSlots[slot]>>;
};

/**
 * Interface for a slot factory that consumes both component and user slot prop and generates rendered output.
 */
export declare type ISlotFactory<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = (componentProps: TProps & IProcessedSlotProps, userProps: ISlotProp<TProps, TShorthandProp>, slotOptions: ISlotOptions<TProps> | undefined, defaultStyles: IStyle, theme?: ITheme) => ReturnType<React_2.FunctionComponent<TProps>>;

/**
 * Defines the slot options object for all slot props:
 *    1. ISlotRender function.
 *    2. React component with TProps interface.
 */
export declare interface ISlotOptions<TProps> {
    component?: React_2.ElementType<TProps>;
    render?: ISlotRender<TProps>;
}

/**
 * Defines the primary slot prop interface components should use to define their slot props.
 */
export declare type ISlotProp<TProps extends ValidProps, TShorthandProp extends ValidShorthand = never> = TShorthandProp | TProps;

/**
 * Content rendering provided by component.
 */
export declare type ISlotRender<TProps> = (props: React_2.PropsWithChildren<TProps>, defaultComponent: React_2.ComponentType<TProps>) => ReturnType<React_2.FunctionComponent<TProps>>;

/**
 * Interface for aggregated slots objects used internally by components. Extract the TProps type passed
 * into ISlotProp<TProps> to define the ISlot using TProps.
 */
export declare type ISlots<TSlots> = {
    [slot in keyof TSlots]: ISlot<ExtractProps<TSlots[slot]>>;
};

/**
 * Slottable version of React.ComponentType.
 */
export declare type ISlottableComponentType<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = React_2.ComponentType<TProps> & ISlotCreator<TProps, TShorthandProp>;

/**
 * Automatically defines 'slots' prop based on TSlots props.
 */
export declare type ISlottableProps<TSlots> = TSlots & {
    slots?: {
        [key in keyof TSlots]+?: ISlotOptions<ExtractProps<TSlots[key]>>;
    };
};

/**
 * Slottable version of React.ReactType.
 */
export declare type ISlottableReactType<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = React_2.ElementType<TProps> & ISlotCreator<TProps, TShorthandProp>;

/**
 * Defines the contract for state components.
 */
export declare type IStateComponentType<TComponentProps, TViewProps> = (props: Readonly<TComponentProps>) => TViewProps;

/**
 * Optional props for styleable components. If these props are present, they will automatically be
 * used by Foundation when applying theming and styling.
 */
export declare interface IStyleableComponentProps<TViewProps, TTokens, TStyleSet extends IStyleSet<TStyleSet>> {
    className?: string;
    styles?: IStylesFunctionOrObject<TViewProps, TTokens, TStyleSet>;
    theme?: ITheme;
    tokens?: ITokenFunctionOrObject<TViewProps, TTokens>;
}

/**
 * Function declaration for component styles functions.
 */
export declare type IStylesFunction<TViewProps, TTokens, TStyleSet extends IStyleSet<TStyleSet>> = (props: TViewProps, theme: ITheme, tokens: TTokens) => TStyleSet;

/**
 * Composite type for component styles functions and objects.
 */
export declare type IStylesFunctionOrObject<TViewProps, TTokens, TStyleSet extends IStyleSet<TStyleSet>> = IStylesFunction<TViewProps, TTokens, TStyleSet> | TStyleSet;

export declare interface IThemeProviderProps {
    scheme?: ISchemeNames;
    theme?: ITheme;
}

/**
 * Tokens can be defined as an object, function, or an array of objects and functions.
 */
export declare type IToken<TViewProps, TTokens> = ITokenBase<TViewProps, TTokens> | ITokenBaseArray<TViewProps, TTokens>;

/**
 * Composite base type that includes all possible resolutions of token functions in an array.
 */
export declare type ITokenBase<TViewProps, TTokens> = ITokenFunctionOrObject<TViewProps, TTokens> | false | null | undefined;

/**
 * Composite token base array type allowing for token objects, functions, and function resolutions.
 */
export declare interface ITokenBaseArray<TViewProps, TTokens> extends Array<IToken<TViewProps, TTokens>> {
}

/**
 * Function declaration for component token functions.
 */
export declare type ITokenFunction<TViewProps, TTokens> = (props: TViewProps, theme: ITheme) => IToken<TViewProps, TTokens>;

/**
 * Composite type for component token functions and objects.
 */
export declare type ITokenFunctionOrObject<TViewProps, TTokens> = ITokenFunction<TViewProps, TTokens> | TTokens;

/**
 * Defines the contract for view components.
 */
export declare type IViewComponent<TViewProps> = (props: React_2.PropsWithChildren<TViewProps>) => ReturnType<React_2.FunctionComponent>;
export { legacyStyled }

/**
 * Theme provider is a simplified version of Customizer that activates the appropriate theme data
 * for a given scheme name.
 *
 * @param providers - Injected providers for accessing theme data and providing it via a Customizer component.
 * @deprecated This is an old ThemeProvider implementation. New code should use the ThemeProvider exported from
 * `@fluentui/react` (or `@fluentui/react/lib/Theme`) instead.
 */
export declare const ThemeProvider: React_2.FunctionComponent<IThemeProviderProps>;

/**
 * Controlled state helper that gives priority to props value. Useful for components that have props with both
 * controlled and uncontrolled modes. Any props values will override state, but will not update internal state.
 * If prop is defined and then later undefined, state will revert to its previous value.
 *
 * @param props - The props object containing controlled prop values.
 * @param propName - The controlled prop name.
 * @param options - Options. defaultPropValue is only used if defaultPropName (or its value) is undefined.
 */
export declare function useControlledState<TProps, TProp extends keyof TProps, TDefaultProp extends keyof TProps>(props: Readonly<TProps>, propName: TProp, options?: IControlledStateOptions<TProps, TProp, TDefaultProp>): [TProps[TProp] | undefined, React_2.Dispatch<React_2.SetStateAction<TProps[TProp]>>];

/**
 * Defines valid prop types.
 */
export declare type ValidProps = object;

/**
 * Defines valid shorthand prop types. These should match the defaultProp type provided to createComponent.
 */
export declare type ValidShorthand = string | number | boolean;

/**
 * This function is required for any module that uses slots.
 *
 * This function is a slot resolver that automatically evaluates slot functions to generate React elements.
 * A byproduct of this resolver is that it removes slots from the React hierarchy by bypassing React.createElement.
 *
 * To use this function on a per-file basis, use the jsx directive targeting withSlots.
 * This directive must be the FIRST LINE in the file to work correctly.
 * Usage of this pragma also requires withSlots import statement.
 *
 * See React.createElement
 */
export declare function withSlots<P>(type: ISlot<P> | React_2.FunctionComponent<P> | string, props?: (React_2.Attributes & P) | null, ...children: React_2.ReactNode[]): ReturnType<React_2.FunctionComponent<P>>;

export { }
