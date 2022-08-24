import { __assign } from "tslib";
import { AnimationClassNames, AnimationStyles, HighContrastSelector, getFocusStyle, getGlobalClassNames, FontWeights, getHighContrastNoAdjustStyle, } from '../../Styling';
import { IsFocusVisibleClassName } from '../../Utilities';
export var DetailsRowGlobalClassNames = {
    root: 'ms-DetailsRow',
    // TODO: in Fabric 7.0 lowercase the 'Compact' for consistency across other components.
    compact: 'ms-DetailsList--Compact',
    cell: 'ms-DetailsRow-cell',
    cellAnimation: 'ms-DetailsRow-cellAnimation',
    cellCheck: 'ms-DetailsRow-cellCheck',
    check: 'ms-DetailsRow-check',
    cellMeasurer: 'ms-DetailsRow-cellMeasurer',
    listCellFirstChild: 'ms-List-cell:first-child',
    isContentUnselectable: 'is-contentUnselectable',
    isSelected: 'is-selected',
    isCheckVisible: 'is-check-visible',
    isRowHeader: 'is-row-header',
    fields: 'ms-DetailsRow-fields',
};
var IsFocusableSelector = "[data-is-focusable='true']";
export var DEFAULT_CELL_STYLE_PROPS = {
    cellLeftPadding: 12,
    cellRightPadding: 8,
    cellExtraRightPadding: 24,
};
// Source of default row heights to share.
export var DEFAULT_ROW_HEIGHTS = {
    rowHeight: 42,
    compactRowHeight: 32,
};
// Constant values
var values = __assign(__assign({}, DEFAULT_ROW_HEIGHTS), { rowVerticalPadding: 11, compactRowVerticalPadding: 6 });
export var getDetailsRowStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var theme = props.theme, isSelected = props.isSelected, canSelect = props.canSelect, droppingClassName = props.droppingClassName, anySelected = props.anySelected, isCheckVisible = props.isCheckVisible, checkboxCellClassName = props.checkboxCellClassName, compact = props.compact, className = props.className, _o = props.cellStyleProps, cellStyleProps = _o === void 0 ? DEFAULT_CELL_STYLE_PROPS : _o, enableUpdateAnimations = props.enableUpdateAnimations;
    var palette = theme.palette, fonts = theme.fonts;
    var neutralPrimary = palette.neutralPrimary, white = palette.white, neutralSecondary = palette.neutralSecondary, neutralLighter = palette.neutralLighter, neutralLight = palette.neutralLight, neutralDark = palette.neutralDark, neutralQuaternaryAlt = palette.neutralQuaternaryAlt;
    var focusBorder = theme.semanticColors.focusBorder;
    var classNames = getGlobalClassNames(DetailsRowGlobalClassNames, theme);
    var colors = {
        // Default
        defaultHeaderText: neutralPrimary,
        defaultMetaText: neutralSecondary,
        defaultBackground: white,
        // Default Hover
        defaultHoverHeaderText: neutralDark,
        defaultHoverMetaText: neutralPrimary,
        defaultHoverBackground: neutralLighter,
        // Selected
        selectedHeaderText: neutralDark,
        selectedMetaText: neutralPrimary,
        selectedBackground: neutralLight,
        // Selected Hover
        selectedHoverHeaderText: neutralDark,
        selectedHoverMetaText: neutralPrimary,
        selectedHoverBackground: neutralQuaternaryAlt,
        // Focus
        focusHeaderText: neutralDark,
        focusMetaText: neutralPrimary,
        focusBackground: neutralLight,
        focusHoverBackground: neutralQuaternaryAlt,
    };
    var rowHighContrastFocus = {
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
    };
    // Selected row styles
    var selectedStyles = [
        getFocusStyle(theme, {
            inset: -1,
            borderColor: focusBorder,
            outlineColor: white,
            highContrastStyle: rowHighContrastFocus,
        }),
        classNames.isSelected,
        {
            color: colors.selectedMetaText,
            background: colors.selectedBackground,
            borderBottom: "1px solid " + white,
            selectors: (_a = {
                    '&:before': {
                        position: 'absolute',
                        display: 'block',
                        top: -1,
                        height: 1,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        content: '',
                        borderTop: "1px solid " + white,
                    },
                    // Selected State hover
                    '&:hover': {
                        background: colors.selectedHoverBackground,
                        color: colors.selectedHoverMetaText,
                        selectors: (_b = {},
                            // Selected State hover meta cell
                            _b["." + classNames.cell + " " + HighContrastSelector] = {
                                color: 'HighlightText',
                                selectors: {
                                    '> a': {
                                        color: 'HighlightText',
                                    },
                                },
                            },
                            // Selected State hover Header cell
                            _b["." + classNames.isRowHeader] = {
                                color: colors.selectedHoverHeaderText,
                                selectors: (_c = {},
                                    _c[HighContrastSelector] = {
                                        color: 'HighlightText',
                                    },
                                    _c),
                            },
                            // Ensure high-contrast mode overrides default hover background
                            _b[HighContrastSelector] = {
                                background: 'Highlight',
                            },
                            _b),
                    },
                    // Focus state
                    '&:focus': {
                        background: colors.focusBackground,
                        selectors: (_d = {},
                            // Selected State hover meta cell
                            _d["." + classNames.cell] = {
                                color: colors.focusMetaText,
                                selectors: (_e = {},
                                    _e[HighContrastSelector] = {
                                        color: 'HighlightText',
                                        selectors: {
                                            '> a': {
                                                color: 'HighlightText',
                                            },
                                        },
                                    },
                                    _e),
                            },
                            // Row header cell
                            _d["." + classNames.isRowHeader] = {
                                color: colors.focusHeaderText,
                                selectors: (_f = {},
                                    _f[HighContrastSelector] = {
                                        color: 'HighlightText',
                                    },
                                    _f),
                            },
                            // Ensure high-contrast mode overrides default focus background
                            _d[HighContrastSelector] = {
                                background: 'Highlight',
                            },
                            _d),
                    }
                },
                _a[HighContrastSelector] = __assign(__assign({ background: 'Highlight', color: 'HighlightText' }, getHighContrastNoAdjustStyle()), { selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    } }),
                // Focus and hover state
                _a['&:focus:hover'] = {
                    background: colors.focusHoverBackground,
                },
                _a),
        },
    ];
    var cannotSelectStyles = [
        classNames.isContentUnselectable,
        {
            userSelect: 'none',
            cursor: 'default',
        },
    ];
    var rootCompactStyles = {
        minHeight: values.compactRowHeight,
        border: 0,
    };
    var cellCompactStyles = {
        minHeight: values.compactRowHeight,
        paddingTop: values.compactRowVerticalPadding,
        paddingBottom: values.compactRowVerticalPadding,
        paddingLeft: cellStyleProps.cellLeftPadding + "px",
    };
    var defaultCellStyles = [
        getFocusStyle(theme, { inset: -1 }),
        classNames.cell,
        {
            display: 'inline-block',
            position: 'relative',
            boxSizing: 'border-box',
            minHeight: values.rowHeight,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingTop: values.rowVerticalPadding,
            paddingBottom: values.rowVerticalPadding,
            paddingLeft: cellStyleProps.cellLeftPadding + "px",
            selectors: (_g = {
                    '& > button': {
                        maxWidth: '100%',
                    }
                },
                _g[IsFocusableSelector] = getFocusStyle(theme, { inset: -1, borderColor: neutralSecondary, outlineColor: white }),
                _g),
        },
        isSelected && {
            selectors: (_h = {},
                _h[HighContrastSelector] = __assign(__assign({ background: 'Highlight', color: 'HighlightText' }, getHighContrastNoAdjustStyle()), { selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    } }),
                _h),
        },
        compact && cellCompactStyles,
    ];
    return {
        root: [
            classNames.root,
            AnimationClassNames.fadeIn400,
            droppingClassName,
            theme.fonts.small,
            isCheckVisible && classNames.isCheckVisible,
            getFocusStyle(theme, { borderColor: focusBorder, outlineColor: white }),
            {
                borderBottom: "1px solid " + neutralLighter,
                background: colors.defaultBackground,
                color: colors.defaultMetaText,
                // This ensures that the row always tries to consume is minimum width and does not compress.
                display: 'inline-flex',
                minWidth: '100%',
                minHeight: values.rowHeight,
                whiteSpace: 'nowrap',
                padding: 0,
                boxSizing: 'border-box',
                verticalAlign: 'top',
                textAlign: 'left',
                selectors: (_j = {},
                    _j["." + classNames.listCellFirstChild + " &:before"] = {
                        display: 'none',
                    },
                    _j['&:hover'] = {
                        background: colors.defaultHoverBackground,
                        color: colors.defaultHoverMetaText,
                        selectors: (_k = {},
                            _k["." + classNames.isRowHeader] = {
                                color: colors.defaultHoverHeaderText,
                            },
                            _k),
                    },
                    _j["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j["." + IsFocusVisibleClassName + " &:focus ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j['.ms-GroupSpacer'] = {
                        flexShrink: 0,
                        flexGrow: 0,
                    },
                    _j),
            },
            isSelected && selectedStyles,
            !canSelect && cannotSelectStyles,
            compact && rootCompactStyles,
            className,
        ],
        cellUnpadded: {
            paddingRight: cellStyleProps.cellRightPadding + "px",
        },
        cellPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding + "px",
            selectors: (_l = {},
                _l["&." + classNames.cellCheck] = {
                    paddingRight: 0,
                },
                _l),
        },
        cell: defaultCellStyles,
        cellAnimation: enableUpdateAnimations && AnimationStyles.slideLeftIn40,
        cellMeasurer: [
            classNames.cellMeasurer,
            {
                overflow: 'visible',
                whiteSpace: 'nowrap',
            },
        ],
        checkCell: [
            defaultCellStyles,
            classNames.cellCheck,
            checkboxCellClassName,
            {
                padding: 0,
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                flexShrink: 0,
            },
        ],
        checkCover: {
            position: 'absolute',
            top: -1,
            left: 0,
            bottom: 0,
            right: 0,
            display: anySelected ? 'block' : 'none',
        },
        fields: [
            classNames.fields,
            {
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
        isRowHeader: [
            classNames.isRowHeader,
            {
                color: colors.defaultHeaderText,
                fontSize: fonts.medium.fontSize,
            },
            isSelected && {
                color: colors.selectedHeaderText,
                fontWeight: FontWeights.semibold,
                selectors: (_m = {},
                    _m[HighContrastSelector] = {
                        color: 'HighlightText',
                    },
                    _m),
            },
        ],
        isMultiline: [
            defaultCellStyles,
            {
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                textOverflow: 'clip',
            },
        ],
        check: [classNames.check],
    };
};
//# sourceMappingURL=DetailsRow.styles.js.map