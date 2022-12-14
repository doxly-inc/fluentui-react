define(["require", "exports", "@fluentui/style-utilities", "@fluentui/utilities"], function (require, exports, style_utilities_1, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-WeeklyDayPicker-root',
    };
    exports.styles = function (props) {
        var _a;
        var className = props.className, theme = props.theme;
        var palette = theme.palette;
        var classNames = style_utilities_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                style_utilities_1.normalize,
                {
                    width: 220,
                    padding: 12,
                    boxSizing: 'content-box',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                },
                className,
            ],
            dayButton: {
                borderRadius: '100%',
            },
            dayIsToday: {},
            dayCell: {
                borderRadius: '100%!important',
            },
            daySelected: {},
            navigationIconButton: [
                style_utilities_1.getFocusStyle(theme, { inset: 0 }),
                {
                    width: 12,
                    minWidth: 12,
                    height: 0,
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: palette.neutralLighter,
                    fontSize: style_utilities_1.FontSizes.small,
                    fontFamily: 'inherit',
                    selectors: (_a = {},
                        _a["." + classNames.root + ":hover &, ." + utilities_1.IsFocusVisibleClassName + " ." + classNames.root + ":focus &, " +
                            ("." + utilities_1.IsFocusVisibleClassName + " &:focus")] = {
                            height: 53,
                            minHeight: 12,
                            overflow: 'initial',
                        },
                        _a["." + utilities_1.IsFocusVisibleClassName + " ." + classNames.root + ":focus-within &"] = {
                            // edge does not recognize focus-within, so separate it out
                            height: 53,
                            minHeight: 12,
                            overflow: 'initial',
                        },
                        _a['&:hover'] = {
                            cursor: 'pointer',
                            backgroundColor: palette.neutralLight,
                        },
                        _a['&:active'] = {
                            backgroundColor: palette.neutralTertiary,
                        },
                        _a),
                },
            ],
            disabledStyle: {
                selectors: {
                    '&, &:disabled, & button': {
                        color: palette.neutralTertiaryAlt,
                        pointerEvents: 'none',
                    },
                },
            },
        };
    };
});
//# sourceMappingURL=WeeklyDayPicker.styles.js.map