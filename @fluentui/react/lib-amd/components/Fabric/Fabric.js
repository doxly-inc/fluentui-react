define(["require", "exports", "../../Utilities", "./Fabric.base", "./Fabric.styles"], function (require, exports, Utilities_1, Fabric_base_1, Fabric_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @deprecated This component is deprecated as of `@fluentui/react` version 8. Use `ThemeProvider` instead.
     */
    exports.Fabric = Utilities_1.styled(Fabric_base_1.FabricBase, Fabric_styles_1.getStyles, undefined, {
        scope: 'Fabric',
    });
});
//# sourceMappingURL=Fabric.js.map