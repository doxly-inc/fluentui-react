import * as React from 'react';
/**
 * Context for providing the window.
 */
export var WindowContext = React.createContext({
    window: typeof window === 'object' ? window : undefined,
});
/**
 * Hook to access the window object. This can be overridden contextually using the `WindowProvider`.
 */
export var useWindow = function () { return React.useContext(WindowContext).window; };
/**
 * Hook to access the document object. This can be overridden contextually using the `WindowProvider`.
 */
export var useDocument = function () { var _a; return (_a = React.useContext(WindowContext).window) === null || _a === void 0 ? void 0 : _a.document; };
/**
 * Component to provide the window object contextually. This is useful when rendering content to an element
 * contained within a child window or iframe element, where event handlers and styling must be projected
 * to an alternative window or document.
 */
export var WindowProvider = function (props) {
    return React.createElement(WindowContext.Provider, { value: props }, props.children);
};
//# sourceMappingURL=WindowProvider.js.map