"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Styling_1 = require("../../Styling");
var react_hooks_1 = require("@fluentui/react-hooks");
var getClassNames = Utilities_1.classNamesFunction();
var getFabricTheme = Utilities_1.memoizeFunction(function (theme, isRTL) { return Styling_1.createTheme(tslib_1.__assign(tslib_1.__assign({}, theme), { rtl: isRTL })); });
var getDir = function (_a) {
    var theme = _a.theme, dir = _a.dir;
    var contextDir = Utilities_1.getRTL(theme) ? 'rtl' : 'ltr';
    var pageDir = Utilities_1.getRTL() ? 'rtl' : 'ltr';
    var componentDir = dir ? dir : contextDir;
    return {
        // If Fabric dir !== contextDir
        // Or If contextDir !== pageDir
        // Then we need to set dir of the Fabric root
        rootDir: componentDir !== contextDir || componentDir !== pageDir ? componentDir : dir,
        // If dir !== contextDir || pageDir
        // then set contextual theme around content
        needsTheme: componentDir !== contextDir,
    };
};
exports.FabricBase = React.forwardRef(function (props, ref) {
    var className = props.className, theme = props.theme, applyTheme = props.applyTheme, applyThemeToBody = props.applyThemeToBody, styles = props.styles;
    var classNames = getClassNames(styles, {
        theme: theme,
        applyTheme: applyTheme,
        className: className,
    });
    var rootElement = React.useRef(null);
    useApplyThemeToBody(applyThemeToBody, classNames, rootElement);
    Utilities_1.useFocusRects(rootElement);
    return React.createElement(React.Fragment, null, useRenderedContent(props, classNames, rootElement, ref));
});
exports.FabricBase.displayName = 'FabricBase';
function useRenderedContent(props, _a, rootElement, ref) {
    var root = _a.root;
    var _b = props.as, Root = _b === void 0 ? 'div' : _b, dir = props.dir, theme = props.theme;
    var divProps = Utilities_1.getNativeProps(props, Utilities_1.divProperties, ['dir']);
    var _c = getDir(props), rootDir = _c.rootDir, needsTheme = _c.needsTheme;
    var renderedContent = React.createElement(Root, tslib_1.__assign({ dir: rootDir }, divProps, { className: root, ref: react_hooks_1.useMergedRefs(rootElement, ref) }));
    // Create the contextual theme if component direction does not match parent direction.
    if (needsTheme) {
        // Disabling ThemeProvider here because theme doesn't need to be re-provided by ThemeProvider if dir has changed.
        renderedContent = (React.createElement(Utilities_1.Customizer, { settings: { theme: getFabricTheme(theme, dir === 'rtl') } }, renderedContent));
    }
    return renderedContent;
}
function useApplyThemeToBody(applyThemeToBody, _a, rootElement) {
    var bodyThemed = _a.bodyThemed;
    React.useEffect(function () {
        if (applyThemeToBody) {
            var currentDoc_1 = Utilities_1.getDocument(rootElement.current);
            if (currentDoc_1) {
                currentDoc_1.body.classList.add(bodyThemed);
                return function () {
                    currentDoc_1.body.classList.remove(bodyThemed);
                };
            }
        }
    }, [bodyThemed, applyThemeToBody, rootElement]);
    return rootElement;
}
//# sourceMappingURL=Fabric.base.js.map