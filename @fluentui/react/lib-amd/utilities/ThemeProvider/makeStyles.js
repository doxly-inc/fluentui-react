define(["require", "exports", "./useTheme", "@fluentui/react-window-provider", "./styleRenderers/mergeStylesRenderer"], function (require, exports, useTheme_1, react_window_provider_1, mergeStylesRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var graphGet = function (graphNode, path) {
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var key = path_1[_i];
            graphNode = graphNode.get(key);
            if (!graphNode) {
                return;
            }
        }
        return graphNode;
    };
    var graphSet = function (graphNode, path, value) {
        for (var i = 0; i < path.length - 1; i++) {
            var key = path[i];
            var current = graphNode.get(key);
            if (!current) {
                current = new Map();
                graphNode.set(key, current);
            }
            graphNode = current;
        }
        graphNode.set(path[path.length - 1], value);
    };
    /**
     * Registers a css object, optionally as a function of the theme.
     *
     * @param styleOrFunction - Either a css javascript object, or a function which takes in `ITheme`
     * and returns a css javascript object.
     */
    function makeStyles(styleOrFunction) {
        // Create graph of inputs to map to output.
        var graph = new Map();
        return function (options) {
            if (options === void 0) { options = {}; }
            var theme = options.theme;
            var win = react_window_provider_1.useWindow();
            var contextualTheme = useTheme_1.useTheme();
            theme = theme || contextualTheme;
            var renderer = mergeStylesRenderer_1.mergeStylesRenderer;
            var id = renderer.getId();
            var isStyleFunction = typeof styleOrFunction === 'function';
            var path = isStyleFunction ? [id, win, theme] : [id, win];
            var value = graphGet(graph, path);
            if (!value) {
                var styles = isStyleFunction ? styleOrFunction(theme) : styleOrFunction;
                value = mergeStylesRenderer_1.mergeStylesRenderer.renderStyles(styles, { targetWindow: win, rtl: !!theme.rtl });
                graphSet(graph, path, value);
            }
            return value;
        };
    }
    exports.makeStyles = makeStyles;
});
//# sourceMappingURL=makeStyles.js.map