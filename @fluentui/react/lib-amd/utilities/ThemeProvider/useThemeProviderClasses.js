define(["require", "exports", "react", "@fluentui/utilities", "@fluentui/react-window-provider", "./makeStyles"], function (require, exports, React, utilities_1, react_window_provider_1, makeStyles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var useThemeProviderStyles = makeStyles_1.makeStyles(function (theme) {
        var semanticColors = theme.semanticColors, fonts = theme.fonts;
        return {
            body: [
                {
                    color: semanticColors.bodyText,
                    background: semanticColors.bodyBackground,
                    fontFamily: fonts.medium.fontFamily,
                    fontWeight: fonts.medium.fontWeight,
                    fontSize: fonts.medium.fontSize,
                    MozOsxFontSmoothing: fonts.medium.MozOsxFontSmoothing,
                    WebkitFontSmoothing: fonts.medium.WebkitFontSmoothing,
                },
            ],
        };
    });
    /**
     * Hook to add class to body element.
     */
    function useApplyClassToBody(state, classesToApply) {
        var _a;
        var applyTo = state.applyTo;
        var applyToBody = applyTo === 'body';
        var body = (_a = react_window_provider_1.useDocument()) === null || _a === void 0 ? void 0 : _a.body;
        React.useEffect(function () {
            if (!applyToBody || !body) {
                return;
            }
            for (var _i = 0, classesToApply_1 = classesToApply; _i < classesToApply_1.length; _i++) {
                var classToApply = classesToApply_1[_i];
                if (classToApply) {
                    body.classList.add(classToApply);
                }
            }
            return function () {
                if (!applyToBody || !body) {
                    return;
                }
                for (var _i = 0, classesToApply_2 = classesToApply; _i < classesToApply_2.length; _i++) {
                    var classToApply = classesToApply_2[_i];
                    if (classToApply) {
                        body.classList.remove(classToApply);
                    }
                }
            };
        }, [applyToBody, body, classesToApply]);
    }
    function useThemeProviderClasses(state) {
        var classes = useThemeProviderStyles(state);
        var className = state.className, applyTo = state.applyTo;
        useApplyClassToBody(state, [classes.root, classes.body]);
        state.className = utilities_1.css(className, classes.root, applyTo === 'element' && classes.body);
    }
    exports.useThemeProviderClasses = useThemeProviderClasses;
});
//# sourceMappingURL=useThemeProviderClasses.js.map