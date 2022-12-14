define(["require", "exports", "../../../Utilities", "../../../Styling"], function (require, exports, Utilities_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClassNames = Utilities_1.memoizeFunction(function () {
        var _a;
        return Styling_1.mergeStyleSets({
            root: [
                {
                    position: 'absolute',
                    boxSizing: 'border-box',
                    border: '1px solid ${}',
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            border: '1px solid WindowText',
                        },
                        _a),
                },
                Styling_1.focusClear(),
            ],
            container: {
                position: 'relative',
            },
            main: {
                backgroundColor: '#ffffff',
                overflowX: 'hidden',
                overflowY: 'hidden',
                position: 'relative',
            },
            overFlowYHidden: {
                overflowY: 'hidden',
            },
        });
    });
});
//# sourceMappingURL=PositioningContainer.styles.js.map