define(["require", "exports", "tslib", "../../../Styling", "../../../Utilities"], function (require, exports, tslib_1, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SuggestionsItemGlobalClassNames = {
        root: 'ms-Suggestions-item',
        itemButton: 'ms-Suggestions-itemButton',
        closeButton: 'ms-Suggestions-closeButton',
        isSuggested: 'is-suggested',
    };
    function getStyles(props) {
        var _a, _b, _c, _d, _e, _f;
        var className = props.className, theme = props.theme, suggested = props.suggested;
        var palette = theme.palette, semanticColors = theme.semanticColors;
        var classNames = Styling_1.getGlobalClassNames(exports.SuggestionsItemGlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                {
                    display: 'flex',
                    alignItems: 'stretch',
                    boxSizing: 'border-box',
                    width: '100%',
                    position: 'relative',
                    selectors: {
                        '&:hover': {
                            background: semanticColors.menuItemBackgroundHovered,
                        },
                        '&:hover .ms-Suggestions-closeButton': {
                            display: 'block',
                        },
                    },
                },
                suggested && {
                    selectors: (_a = {},
                        _a["." + Utilities_1.IsFocusVisibleClassName + " &"] = {
                            selectors: (_b = {},
                                _b["." + classNames.closeButton] = {
                                    display: 'block',
                                    background: semanticColors.menuItemBackgroundPressed,
                                },
                                _b),
                        },
                        _a[':after'] = {
                            pointerEvents: 'none',
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            right: 0,
                            border: "1px solid " + theme.semanticColors.focusBorder,
                        },
                        _a),
                },
                className,
            ],
            itemButton: [
                classNames.itemButton,
                {
                    width: '100%',
                    padding: 0,
                    border: 'none',
                    height: '100%',
                    // Force the item button to be collapsible so it can always shrink
                    // to accommodate the close button as a peer in its flex container.
                    minWidth: 0,
                    // Require for IE11 to truncate the component.
                    overflow: 'hidden',
                    selectors: (_c = {},
                        _c[Styling_1.HighContrastSelector] = {
                            color: 'WindowText',
                            selectors: {
                                ':hover': tslib_1.__assign({ background: 'Highlight', color: 'HighlightText' }, Styling_1.getHighContrastNoAdjustStyle()),
                            },
                        },
                        _c[':hover'] = {
                            color: semanticColors.menuItemTextHovered,
                        },
                        _c),
                },
                suggested && [
                    classNames.isSuggested,
                    {
                        background: semanticColors.menuItemBackgroundPressed,
                        selectors: (_d = {
                                ':hover': {
                                    background: semanticColors.menuDivider,
                                }
                            },
                            _d[Styling_1.HighContrastSelector] = tslib_1.__assign({ background: 'Highlight', color: 'HighlightText' }, Styling_1.getHighContrastNoAdjustStyle()),
                            _d),
                    },
                ],
            ],
            closeButton: [
                classNames.closeButton,
                {
                    display: 'none',
                    color: palette.neutralSecondary,
                    padding: '0 4px',
                    height: 'auto',
                    width: 32,
                    selectors: (_e = {
                            ':hover, :active': {
                                background: palette.neutralTertiaryAlt,
                                color: palette.neutralDark,
                            }
                        },
                        _e[Styling_1.HighContrastSelector] = {
                            color: 'WindowText',
                        },
                        _e),
                },
                suggested && (_f = {},
                    _f["." + Utilities_1.IsFocusVisibleClassName + " &"] = {
                        selectors: {
                            ':hover, :active': {
                                background: palette.neutralTertiary,
                            },
                        },
                    },
                    _f.selectors = {
                        ':hover, :active': {
                            background: palette.neutralTertiary,
                            color: palette.neutralPrimary,
                        },
                    },
                    _f),
            ],
        };
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=SuggestionsItem.styles.js.map