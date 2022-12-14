import { __assign, __spreadArrays } from "tslib";
import * as React from 'react';
import { concatStyleSets } from '@fluentui/style-utilities';
import { Customizations, CustomizerContext } from '@fluentui/utilities';
import { createFactory } from './slots';
import { assign } from './utilities';
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
export function createComponent(view, options) {
    if (options === void 0) { options = {}; }
    var _a = options.factoryOptions, factoryOptions = _a === void 0 ? {} : _a;
    var defaultProp = factoryOptions.defaultProp;
    var ResultComponent = function (componentProps) {
        var settings = _getCustomizations(options.displayName, React.useContext(CustomizerContext), options.fields);
        var stateReducer = options.state;
        if (stateReducer) {
            // Don't assume state will return all props, so spread useState result over component props.
            componentProps = __assign(__assign({}, componentProps), stateReducer(componentProps));
        }
        var theme = componentProps.theme || settings.theme;
        var tokens = _resolveTokens(componentProps, theme, options.tokens, settings.tokens, componentProps.tokens);
        var styles = _resolveStyles(componentProps, theme, tokens, options.styles, settings.styles, componentProps.styles);
        var viewProps = __assign(__assign({}, componentProps), { styles: styles,
            tokens: tokens, _defaultStyles: styles, theme: theme });
        return view(viewProps);
    };
    ResultComponent.displayName = options.displayName || view.name;
    // If a shorthand prop is defined, create a factory for the component.
    // TODO: This shouldn't be a concern of createComponent.. factoryOptions should just be forwarded.
    //       Need to weigh creating default factories on component creation vs. memoizing them on use in slots.tsx.
    if (defaultProp) {
        ResultComponent.create = createFactory(ResultComponent, { defaultProp: defaultProp });
    }
    assign(ResultComponent, options.statics);
    // Later versions of TypeSript should allow us to merge objects in a type safe way and avoid this cast.
    return ResultComponent;
}
/**
 * Resolve all styles functions with both props and tokens and flatten results along with all styles objects.
 */
function _resolveStyles(props, theme, tokens) {
    var allStyles = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        allStyles[_i - 3] = arguments[_i];
    }
    return concatStyleSets.apply(void 0, allStyles.map(function (styles) {
        return typeof styles === 'function' ? styles(props, theme, tokens) : styles;
    }));
}
/**
 * Resolve all tokens functions with props flatten results along with all tokens objects.
 */
function _resolveTokens(props, theme) {
    var allTokens = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allTokens[_i - 2] = arguments[_i];
    }
    var tokens = {};
    for (var _a = 0, allTokens_1 = allTokens; _a < allTokens_1.length; _a++) {
        var currentTokens = allTokens_1[_a];
        if (currentTokens) {
            // TODO: why is this cast needed? TS seems to think there is a (TToken | Function) union from somewhere.
            currentTokens =
                typeof currentTokens === 'function'
                    ? currentTokens(props, theme)
                    : currentTokens;
            if (Array.isArray(currentTokens)) {
                currentTokens = _resolveTokens.apply(void 0, __spreadArrays([props, theme], currentTokens));
            }
            assign(tokens, currentTokens);
        }
    }
    return tokens;
}
/**
 * Helper function for calling Customizations.getSettings falling back to default fields.
 *
 * @param displayName Displayable name for component.
 * @param context React context passed to component containing contextual settings.
 * @param fields Optional list of properties to grab from global store and context.
 */
function _getCustomizations(displayName, context, fields) {
    // TODO: do we want field props? should fields be part of IComponent and used here?
    // TODO: should we centrally define DefaultFields? (not exported from styling)
    // TODO: tie this array to ICustomizationProps, such that each array element is keyof ICustomizationProps
    var DefaultFields = ['theme', 'styles', 'tokens'];
    return Customizations.getSettings(fields || DefaultFields, displayName, context.customizations);
}
//# sourceMappingURL=createComponent.js.map