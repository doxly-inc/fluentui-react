"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Styling_1 = require("../../Styling");
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
//# sourceMappingURL=DraggableZone.styles.js.map