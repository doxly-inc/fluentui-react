define(["require", "exports", "@fluentui/react-conformance"], function (require, exports, react_conformance_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isConformant(testInfo) {
        var defaultOptions = {
            disabledTests: ['has-docblock', 'kebab-aria-attributes', 'is-static-property-of-parent'],
            componentPath: module.parent.filename.replace('.test', ''),
        };
        react_conformance_1.isConformant(defaultOptions, testInfo);
    }
    exports.isConformant = isConformant;
});
//# sourceMappingURL=isConformant.js.map