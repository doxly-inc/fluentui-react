define(["require", "exports", "tslib", "react", "@fluentui/merge-styles", "@fluentui/utilities", "./utilities"], function (require, exports, tslib_1, React, merge_styles_1, utilities_1, utilities_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSlots = exports.createFactory = exports.withSlots = void 0;
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
    // Can't use typeof on React.createElement since it's overloaded. Approximate createElement's signature for now
    // and widen as needed.
    function withSlots(type, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var slotType = type;
        if (slotType.isSlot) {
            // Since we are bypassing createElement, use React.Children.toArray to make sure children are
            // properly assigned keys.
            // TODO: should this be mutating? does React mutate children subprop with createElement?
            // TODO: will toArray clobber existing keys?
            // TODO: React generates warnings because it doesn't detect hidden member _store that is set in createElement.
            //        Even children passed to createElement without keys don't generate this warning.
            //        Is there a better way to prevent slots from appearing in hierarchy? toArray doesn't address root issue.
            children = React.Children.toArray(children);
            // TODO: There is something weird going on here with children embedded in props vs. rest args.
            // Comment out these lines to see. Make sure this function is doing the right things.
            if (children.length === 0) {
                return slotType(props);
            }
            return slotType(tslib_1.__assign(tslib_1.__assign({}, props), { children: children }));
        }
        else {
            // TODO: Are there some cases where children should NOT be spread? Also, spreading reraises perf question.
            //        Children had to be spread to avoid breaking KeytipData in Toggle.view:
            //        react-dom.development.js:18931 Uncaught TypeError: children is not a function
            //        Without spread, function child is a child array of one element
            // TODO: is there a reason this can't be:
            // return React.createElement.apply(this, arguments);
            return React.createElement.apply(React, tslib_1.__spreadArrays([type, props], children));
        }
    }
    exports.withSlots = withSlots;
    /**
     * This function creates factories that render ouput depending on the user ISlotProp props passed in.
     * @param DefaultComponent - Base component to render when not overridden by user props.
     * @param options - Factory options, including defaultProp value for shorthand prop mapping.
     * @returns ISlotFactory function used for rendering slots.
     */
    function createFactory(DefaultComponent, options) {
        if (options === void 0) { options = {}; }
        var _a = options.defaultProp, defaultProp = _a === void 0 ? 'children' : _a;
        var result = function (componentProps, userProps, userSlotOptions, defaultStyles, theme) {
            // If they passed in raw JSX, just return that.
            if (React.isValidElement(userProps)) {
                return userProps;
            }
            var flattenedUserProps = _translateShorthand(defaultProp, userProps);
            var finalProps = _constructFinalProps(defaultStyles, theme, componentProps, flattenedUserProps);
            if (userSlotOptions) {
                if (userSlotOptions.component) {
                    // TODO: Remove cast if possible. This cast is needed because TS errors on the intrinsic portion of ReactType.
                    // return <userSlotOptions.component {...finalProps} />;
                    var UserComponent = userSlotOptions.component;
                    return React.createElement(UserComponent, tslib_1.__assign({}, finalProps));
                }
                if (userSlotOptions.render) {
                    return userSlotOptions.render(finalProps, DefaultComponent);
                }
            }
            return React.createElement(DefaultComponent, tslib_1.__assign({}, finalProps));
        };
        return result;
    }
    exports.createFactory = createFactory;
    /**
     * Default factory for components without explicit factories.
     */
    var defaultFactory = utilities_1.memoizeFunction(function (type) { return createFactory(type); });
    /**
     * This function generates slots that can be used in JSX given a definition of slots and their corresponding types.
     * @param userProps - Props as pass to component.
     * @param slots - Slot definition object defining the default slot component for each slot.
     * @returns A set of created slots that components can render in JSX.
     */
    function getSlots(userProps, slots) {
        var result = {};
        // userProps already has default props mixed in by createComponent. Recast here to gain typing for this function.
        var mixedProps = userProps;
        var _loop_1 = function (name_1) {
            if (slots.hasOwnProperty(name_1)) {
                // This closure method requires the use of withSlots to prevent unnecessary rerenders. This is because React
                // detects each closure as a different component (since it is a new instance) from the previous one and then
                // forces a rerender of the entire slot subtree. For now, the only way to avoid this is to use withSlots, which
                // bypasses the call to React.createElement.
                var slot = function (componentProps) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (args.length > 0) {
                        // If React.createElement is being incorrectly used with slots, there will be additional arguments.
                        // We can detect these additional arguments and error on their presence.
                        throw new Error('Any module using getSlots must use withSlots. Please see withSlots javadoc for more info.');
                    }
                    // TODO: having TS infer types here seems to cause infinite loop.
                    //   use explicit types or casting to preserve typing if possible.
                    // TODO: this should be a lookup on TProps property instead of being TProps directly, which is probably
                    //   causing the infinite loop
                    return _renderSlot(slots[name_1], 
                    // TODO: this cast to any is hiding a relationship issue between the first two args
                    componentProps, mixedProps[name_1], mixedProps.slots && mixedProps.slots[name_1], 
                    // _defaultStyles should always be present, but a check for existence is added to make view tests
                    // easier to use.
                    mixedProps._defaultStyles && mixedProps._defaultStyles[name_1], mixedProps.theme);
                };
                slot.isSlot = true;
                result[name_1] = slot;
            }
        };
        for (var name_1 in slots) {
            _loop_1(name_1);
        }
        return result;
    }
    exports.getSlots = getSlots;
    /**
     * Helper function that translates shorthand as needed.
     * @param defaultProp
     * @param slotProps
     */
    function _translateShorthand(defaultProp, slotProps) {
        var _a;
        var transformedProps;
        if (typeof slotProps === 'string' || typeof slotProps === 'number' || typeof slotProps === 'boolean') {
            transformedProps = (_a = {},
                _a[defaultProp] = slotProps,
                _a);
        }
        else {
            transformedProps = slotProps;
        }
        return transformedProps;
    }
    /**
     * Helper function that constructs final styles and props given a series of props ordered by increasing priority.
     */
    function _constructFinalProps(defaultStyles, theme) {
        var allProps = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            allProps[_i - 2] = arguments[_i];
        }
        var finalProps = {};
        var classNames = [];
        for (var _a = 0, allProps_1 = allProps; _a < allProps_1.length; _a++) {
            var props = allProps_1[_a];
            classNames.push(props && props.className);
            utilities_2.assign(finalProps, props);
        }
        finalProps.className = merge_styles_1.mergeCss([defaultStyles, classNames], { rtl: utilities_1.getRTL(theme) });
        return finalProps;
    }
    /**
     * Render a slot given component and user props. Uses component factory if available, otherwise falls back
     * to default factory.
     * @param ComponentType Factory component type.
     * @param componentProps The properties passed into slot from within the component.
     * @param userProps The user properties passed in from outside of the component.
     */
    function _renderSlot(ComponentType, componentProps, userProps, slotOptions, defaultStyles, theme) {
        if (ComponentType.create !== undefined) {
            return ComponentType.create(componentProps, userProps, slotOptions, defaultStyles);
        }
        else {
            // TODO: need to resolve typing / generic issues passing through memoizeFunction. for now, cast to 'unknown'
            return defaultFactory(ComponentType)(componentProps, userProps, slotOptions, defaultStyles, theme);
        }
    }
});
//# sourceMappingURL=slots.js.map