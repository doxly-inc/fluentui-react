import { __assign } from "tslib";
import * as React from 'react';
import { getNativeProps, divProperties, classNamesFunction, getDocument, memoizeFunction, getRTL, Customizer, useFocusRects, } from '../../Utilities';
import { createTheme } from '../../Styling';
import { useMergedRefs } from '@fluentui/react-hooks';
var getClassNames = classNamesFunction();
var getFabricTheme = memoizeFunction(function (theme, isRTL) { return createTheme(__assign(__assign({}, theme), { rtl: isRTL })); });
var getDir = function (_a) {
    var theme = _a.theme, dir = _a.dir;
    var contextDir = getRTL(theme) ? 'rtl' : 'ltr';
    var pageDir = getRTL() ? 'rtl' : 'ltr';
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
export var FabricBase = React.forwardRef(function (props, ref) {
    var className = props.className, theme = props.theme, applyTheme = props.applyTheme, applyThemeToBody = props.applyThemeToBody, styles = props.styles;
    var classNames = getClassNames(styles, {
        theme: theme,
        applyTheme: applyTheme,
        className: className,
    });
    var rootElement = React.useRef(null);
    useApplyThemeToBody(applyThemeToBody, classNames, rootElement);
    useFocusRects(rootElement);
    return React.createElement(React.Fragment, null, useRenderedContent(props, classNames, rootElement, ref));
});
FabricBase.displayName = 'FabricBase';
function useRenderedContent(props, _a, rootElement, ref) {
    var root = _a.root;
    var _b = props.as, Root = _b === void 0 ? 'div' : _b, dir = props.dir, theme = props.theme;
    var divProps = getNativeProps(props, divProperties, ['dir']);
    var _c = getDir(props), rootDir = _c.rootDir, needsTheme = _c.needsTheme;
    var renderedContent = React.createElement(Root, __assign({ dir: rootDir }, divProps, { className: root, ref: useMergedRefs(rootElement, ref) }));
    // Create the contextual theme if component direction does not match parent direction.
    if (needsTheme) {
        // Disabling ThemeProvider here because theme doesn't need to be re-provided by ThemeProvider if dir has changed.
        renderedContent = (React.createElement(Customizer, { settings: { theme: getFabricTheme(theme, dir === 'rtl') } }, renderedContent));
    }
    return renderedContent;
}
function useApplyThemeToBody(applyThemeToBody, _a, rootElement) {
    var bodyThemed = _a.bodyThemed;
    React.useEffect(function () {
        if (applyThemeToBody) {
            var currentDoc_1 = getDocument(rootElement.current);
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