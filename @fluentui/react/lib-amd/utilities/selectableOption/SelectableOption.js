define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getAllSelectedOptions(options, selectedIndices) {
        var selectedOptions = [];
        for (var _i = 0, selectedIndices_1 = selectedIndices; _i < selectedIndices_1.length; _i++) {
            var index = selectedIndices_1[_i];
            var option = options[index];
            if (option) {
                selectedOptions.push(option);
            }
        }
        return selectedOptions;
    }
    exports.getAllSelectedOptions = getAllSelectedOptions;
});
//# sourceMappingURL=SelectableOption.js.map