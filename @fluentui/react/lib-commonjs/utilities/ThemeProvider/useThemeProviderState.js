"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("@fluentui/theme");
var React = require("react");
var useTheme_1 = require("./useTheme");
var utilities_1 = require("@fluentui/utilities");
var themeToIdMap = new Map();
var getThemeId = function () {
    var themes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        themes[_i] = arguments[_i];
    }
    var ids = [];
    for (var _a = 0, themes_1 = themes; _a < themes_1.length; _a++) {
        var theme = themes_1[_a];
        if (theme) {
            var id = theme.id || themeToIdMap.get(theme);
            if (!id) {
                id = utilities_1.getId('');
                themeToIdMap.set(theme, id);
            }
            ids.push(id);
        }
    }
    return ids.join('-');
};
exports.useThemeProviderState = function (draftState) {
    var userTheme = draftState.theme;
    // Pull contextual theme.
    var parentTheme = useTheme_1.useTheme();
    // Update the incoming theme with a memoized version of the merged theme.
    var theme = (draftState.theme = React.useMemo(function () {
        var mergedTheme = theme_1.mergeThemes(parentTheme, userTheme);
        mergedTheme.id = getThemeId(parentTheme, userTheme);
        return mergedTheme;
    }, [parentTheme, userTheme]));
    draftState.customizerContext = React.useMemo(function () { return ({
        customizations: {
            inCustomizerContext: true,
            settings: { theme: theme },
            scopedSettings: theme.components || {},
        },
    }); }, [theme]);
    if (draftState.theme.rtl !== parentTheme.rtl) {
        draftState.dir = draftState.theme.rtl ? 'rtl' : 'ltr';
    }
};
//# sourceMappingURL=useThemeProviderState.js.map