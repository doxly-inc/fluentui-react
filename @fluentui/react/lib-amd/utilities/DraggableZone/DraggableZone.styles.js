define(["require", "exports", "../../Utilities", "../../Styling"], function (require, exports, Utilities_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClassNames = Utilities_1.memoizeFunction(function (className, isDragging) {
        return {
            root: Styling_1.mergeStyles(className, isDragging && {
                touchAction: 'none',
                selectors: {
                    '& *': {
                        userSelect: 'none',
                    },
                },
            }),
        };
    });
});
//# sourceMappingURL=DraggableZone.styles.js.map