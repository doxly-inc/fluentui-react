"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var utilities_1 = require("@fluentui/utilities");
var ThemeContext_1 = require("./ThemeContext");
exports.renderThemeProvider = function (state) {
    var theme = state.theme, customizerContext = state.customizerContext;
    var Root = state.as || 'div';
    var rootProps = typeof state.as === 'string' ? utilities_1.getNativeElementProps(state.as, state) : utilities_1.omit(state, ['as']);
    return (React.createElement(ThemeContext_1.ThemeContext.Provider, { value: theme },
        React.createElement(utilities_1.CustomizerContext.Provider, { value: customizerContext },
            React.createElement(Root, tslib_1.__assign({}, rootProps)))));
};
//# sourceMappingURL=renderThemeProvider.js.map