define(["require", "exports", "../../Utilities", "./Dropdown.base", "./Dropdown.styles"], function (require, exports, Utilities_1, Dropdown_base_1, Dropdown_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dropdown = Utilities_1.styled(Dropdown_base_1.DropdownBase, Dropdown_styles_1.getStyles, undefined, {
        scope: 'Dropdown',
    });
    exports.Dropdown.displayName = 'Dropdown';
});
//# sourceMappingURL=Dropdown.js.map