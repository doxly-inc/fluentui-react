import { __assign, __spreadArrays } from "tslib";
import * as React from 'react';
import { mergeStyles } from '@fluentui/merge-styles';
import { concatStyleSets } from '@fluentui/style-utilities';
import { Customizations, CustomizerContext } from '@fluentui/utilities';
import { createFactory, getSlots } from '../slots';
import { assign } from '../utilities';
var memoizedClassNamesMap = {};
/**
 * Assembles a higher order component based on a set of options or recomposes a functional component based on a
 * base component and the a set of options. This set of options is comprised by: styles, theme, view, and state.
 *
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
 * @param baseComponentOrOptions - base component to recompose or component Component options to compose an HOC.
 * See IComponentOptions for more detail.
 * @param recompositionOptions - component Component recomposition options. See IComponentOptions for more detail.
 */
export function composed(baseComponentOrOptions, recompositionOptions) {
    if (baseComponentOrOptions === void 0) { baseComponentOrOptions = {}; }
    // Check if we are composing or recomposing.
    var options;
    if (typeof baseComponentOrOptions === 'function' && baseComponentOrOptions.__options) {
        var baseComponentOptions_1 = baseComponentOrOptions.__options;
        var recompositionSlots_1 = recompositionOptions ? recompositionOptions.slots : undefined;
        options = __assign(__assign(__assign({}, baseComponentOptions_1), recompositionOptions), { slots: function (props) { return (__assign(__assign({}, resolveSlots(baseComponentOptions_1.slots, props)), resolveSlots(recompositionSlots_1, props))); } });
    }
    else {
        options = baseComponentOrOptions;
    }
    var _a = options.factoryOptions, factoryOptions = _a === void 0 ? {} : _a, view = options.view;
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
        var styles;
        var finalStyles = {};
        // We get the entry in the memoized classNamesMap for the current component or create one if it doesn't exist.
        var displayName = options.displayName;
        // If no displayName has been specified, then do not use caching.
        if (displayName) {
            if (!memoizedClassNamesMap.hasOwnProperty(displayName)) {
                memoizedClassNamesMap[displayName] = { map: {} };
            }
            var current = memoizedClassNamesMap[displayName];
            // Memoize based on the tokens definition.
            var tokenKeys = Object.keys(tokens).sort();
            for (var _i = 0, tokenKeys_1 = tokenKeys; _i < tokenKeys_1.length; _i++) {
                var key = tokenKeys_1[_i];
                var nextToken = tokens[key];
                if (nextToken === undefined) {
                    nextToken = '__undefined__';
                }
                if (!current.map.hasOwnProperty(nextToken)) {
                    current.map[nextToken] = { map: {} };
                }
                current = current.map[nextToken];
            }
            // Memoize the slots so we only have to get Object.keys once.
            var slots = memoizedClassNamesMap[displayName].slots;
            var defaultStyles = void 0;
            if (!slots) {
                defaultStyles = _resolveStyles(componentProps, theme, tokens, options.styles, settings.styles);
                memoizedClassNamesMap[displayName].slots = Object.keys(defaultStyles);
                slots = memoizedClassNamesMap[displayName].slots;
            }
            // Memoize based on the base styling of the component (i.e. without user specified props).
            for (var _a = 0, slots_1 = slots; _a < slots_1.length; _a++) {
                var key = slots_1[_a];
                if (!current.map.hasOwnProperty(key)) {
                    // Get default styles once if we didn't get them before.
                    if (!defaultStyles) {
                        defaultStyles = _resolveStyles(componentProps, theme, tokens, options.styles, settings.styles);
                    }
                    current.map[key] = { className: mergeStyles(defaultStyles[key]), map: {} };
                }
                finalStyles[key] = current.map[key].className;
            }
            if (componentProps.styles) {
                var userStyles = typeof componentProps.styles === 'function'
                    ? componentProps.styles(componentProps, theme, tokens)
                    : componentProps.styles;
                styles = concatStyleSets(styles, userStyles);
                if (userStyles) {
                    var userStyleKeys = Object.keys(userStyles);
                    for (var _b = 0, userStyleKeys_1 = userStyleKeys; _b < userStyleKeys_1.length; _b++) {
                        var key = userStyleKeys_1[_b];
                        if (finalStyles.hasOwnProperty(key)) {
                            finalStyles[key] = mergeStyles([current.map[key].className], userStyles[key]);
                        }
                        else {
                            finalStyles[key] = mergeStyles(userStyles[key]);
                        }
                    }
                }
            }
        }
        else {
            styles = _resolveStyles(componentProps, theme, tokens, options.styles, settings.styles, componentProps.styles);
        }
        var viewProps = __assign(__assign({}, componentProps), { styles: styles,
            tokens: tokens, _defaultStyles: displayName ? finalStyles : styles });
        if (!options.slots) {
            throw new Error("Component " + (options.displayName || (view && view.name) || '') + " is missing slot definitions.");
        }
        var Slots = typeof options.slots === 'function'
            ? getSlots(viewProps, options.slots(viewProps))
            : getSlots(viewProps, options.slots);
        return view ? view(viewProps, Slots) : null;
    };
    ResultComponent.displayName = options.displayName || (view && view.name);
    // If a shorthand prop is defined, create a factory for the component.
    // TODO: This shouldn't be a concern of createComponent.. factoryOptions should just be forwarded.
    //       Need to weigh creating default factories on component creation vs. memoizing them on use in slots.tsx.
    if (defaultProp) {
        ResultComponent.create = createFactory(ResultComponent, { defaultProp: defaultProp });
    }
    ResultComponent.__options = options;
    assign(ResultComponent, options.statics);
    // Later versions of TypeSript should allow us to merge objects in a type safe way and avoid this cast.
    return ResultComponent;
}
/**
 * Resolve the passed slots as a function or an object.
 *
 * @param slots - Slots that need to be resolved as a function or an object.
 * @param data - Data to pass to resolve if the first argument was a function.
 */
export function resolveSlots(slots, data) {
    var resolvedSlots = slots ? (typeof slots === 'function' ? slots(data) : slots) : {};
    return resolvedSlots;
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
//# sourceMappingURL=composed.js.map