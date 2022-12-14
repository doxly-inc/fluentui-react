define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-Overlay',
        rootDark: 'ms-Overlay--dark',
    };
    exports.getStyles = function (props) {
        var _a;
        var className = props.className, theme = props.theme, isNone = props.isNone, isDark = props.isDark;
        var palette = theme.palette;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                theme.fonts.medium,
                {
                    backgroundColor: palette.whiteTranslucent40,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    position: 'absolute',
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            border: '1px solid WindowText',
                            opacity: 0,
                        },
                        _a),
                },
                isNone && {
                    visibility: 'hidden',
                },
                isDark && [
                    classNames.rootDark,
                    {
                        backgroundColor: palette.blackTranslucent40,
                    },
                ],
                className,
            ],
        };
    };
});
//# sourceMappingURL=Overlay.styles.js.map