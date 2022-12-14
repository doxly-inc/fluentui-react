define(["require", "exports", "../../../Styling", "../../../Utilities"], function (require, exports, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
        return Styling_1.concatStyleSets({
            root: [
                Styling_1.getFocusStyle(theme, {
                    inset: 1,
                    highContrastStyle: {
                        outlineOffset: '-4px',
                        outline: '1px solid Window',
                    },
                    borderColor: 'transparent',
                }),
                {
                    height: 24,
                },
            ],
        }, customStyles);
    });
});
//# sourceMappingURL=MessageBarButton.styles.js.map