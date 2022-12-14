"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowProvider = exports.useDocument = exports.useWindow = exports.WindowContext = void 0;
var React = require("react");
/**
 * Context for providing the window.
 */
exports.WindowContext = React.createContext({
    window: typeof window === 'object' ? window : undefined,
});
/**
 * Hook to access the window object. This can be overridden contextually using the `WindowProvider`.
 */
var useWindow = function () { return React.useContext(exports.WindowContext).window; };
exports.useWindow = useWindow;
/**
 * Hook to access the document object. This can be overridden contextually using the `WindowProvider`.
 */
var useDocument = function () { var _a; return (_a = React.useContext(exports.WindowContext).window) === null || _a === void 0 ? void 0 : _a.document; };
exports.useDocument = useDocument;
/**
 * Component to provide the window object contextually. This is useful when rendering content to an element
 * contained within a child window or iframe element, where event handlers and styling must be projected
 * to an alternative window or document.
 */
var WindowProvider = function (props) {
    return React.createElement(exports.WindowContext.Provider, { value: props }, props.children);
};
exports.WindowProvider = WindowProvider;
//# sourceMappingURL=WindowProvider.js.map