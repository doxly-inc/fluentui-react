import { __assign, __spreadArrays } from "tslib";
import { AnimationVariables, getGlobalClassNames, HighContrastSelector, normalize, FontWeights, getHighContrastNoAdjustStyle, } from '@fluentui/style-utilities';
import { IsFocusVisibleClassName } from '@fluentui/utilities';
var globalClassNames = {
    count: 'ms-Pivot-count',
    icon: 'ms-Pivot-icon',
    linkIsSelected: 'is-selected',
    link: 'ms-Pivot-link',
    linkContent: 'ms-Pivot-linkContent',
    root: 'ms-Pivot',
    rootIsLarge: 'ms-Pivot--large',
    rootIsTabs: 'ms-Pivot--tabs',
    text: 'ms-Pivot-text',
    linkInMenu: 'ms-Pivot-linkInMenu',
    overflowMenuButton: 'ms-Pivot-overflowMenuButton',
};
var getLinkStyles = function (props, classNames, isLinkInOverflowMenu) {
    var _a, _b, _c;
    if (isLinkInOverflowMenu === void 0) { isLinkInOverflowMenu = false; }
    var linkSize = props.linkSize, linkFormat = props.linkFormat;
    var _d = props.theme, semanticColors = _d.semanticColors, fonts = _d.fonts;
    var rootIsLarge = linkSize === 'large';
    var rootIsTabs = linkFormat === 'tabs';
    return [
        fonts.medium,
        {
            color: semanticColors.actionLink,
            padding: '0 8px',
            position: 'relative',
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: 0,
            selectors: (_a = {
                    ':hover': {
                        backgroundColor: semanticColors.buttonBackgroundHovered,
                        color: semanticColors.buttonTextHovered,
                        cursor: 'pointer',
                    },
                    ':active': {
                        backgroundColor: semanticColors.buttonBackgroundPressed,
                        color: semanticColors.buttonTextHovered,
                    },
                    ':focus': {
                        outline: 'none',
                    }
                },
                _a["." + IsFocusVisibleClassName + " &:focus"] = {
                    outline: "1px solid " + semanticColors.focusBorder,
                },
                _a["." + IsFocusVisibleClassName + " &:focus:after"] = {
                    content: 'attr(data-content)',
                    position: 'relative',
                    border: 0,
                },
                _a),
        },
        !isLinkInOverflowMenu && [
            {
                display: 'inline-block',
                lineHeight: 44,
                height: 44,
                marginRight: 8,
                textAlign: 'center',
                selectors: {
                    ':before': {
                        backgroundColor: 'transparent',
                        bottom: 0,
                        content: '""',
                        height: 2,
                        left: 8,
                        position: 'absolute',
                        right: 8,
                        transition: "left " + AnimationVariables.durationValue2 + " " + AnimationVariables.easeFunction2 + ",\n                        right " + AnimationVariables.durationValue2 + " " + AnimationVariables.easeFunction2,
                    },
                    ':after': {
                        color: 'transparent',
                        content: 'attr(data-content)',
                        display: 'block',
                        fontWeight: FontWeights.bold,
                        height: 1,
                        overflow: 'hidden',
                        visibility: 'hidden',
                    },
                },
            },
            rootIsLarge && {
                fontSize: fonts.large.fontSize,
            },
            rootIsTabs && [
                {
                    marginRight: 0,
                    height: 44,
                    lineHeight: 44,
                    backgroundColor: semanticColors.buttonBackground,
                    padding: '0 10px',
                    verticalAlign: 'top',
                    selectors: (_b = {
                            ':focus': {
                                outlineOffset: '-1px',
                            }
                        },
                        _b["." + IsFocusVisibleClassName + " &:focus::before"] = {
                            height: 'auto',
                            background: 'transparent',
                            transition: 'none',
                        },
                        _b['&:hover, &:focus'] = {
                            color: semanticColors.buttonTextCheckedHovered,
                        },
                        _b['&:active, &:hover'] = {
                            color: semanticColors.primaryButtonText,
                            backgroundColor: semanticColors.primaryButtonBackground,
                        },
                        _b["&." + classNames.linkIsSelected] = {
                            backgroundColor: semanticColors.primaryButtonBackground,
                            color: semanticColors.primaryButtonText,
                            fontWeight: FontWeights.regular,
                            selectors: (_c = {
                                    ':before': {
                                        backgroundColor: 'transparent',
                                        transition: 'none',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        content: '""',
                                        height: 0,
                                    },
                                    ':hover': {
                                        backgroundColor: semanticColors.primaryButtonBackgroundHovered,
                                        color: semanticColors.primaryButtonText,
                                    },
                                    '&:active': {
                                        backgroundColor: semanticColors.primaryButtonBackgroundPressed,
                                        color: semanticColors.primaryButtonText,
                                    }
                                },
                                _c[HighContrastSelector] = __assign({ fontWeight: FontWeights.semibold, color: 'HighlightText', background: 'Highlight' }, getHighContrastNoAdjustStyle()),
                                _c),
                        },
                        _b),
                },
            ],
        ],
    ];
};
export var getStyles = function (props) {
    var _a, _b, _c, _d;
    var className = props.className, linkSize = props.linkSize, linkFormat = props.linkFormat, theme = props.theme;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = getGlobalClassNames(globalClassNames, theme);
    var rootIsLarge = linkSize === 'large';
    var rootIsTabs = linkFormat === 'tabs';
    return {
        root: [
            classNames.root,
            fonts.medium,
            normalize,
            {
                position: 'relative',
                color: semanticColors.link,
                whiteSpace: 'nowrap',
            },
            rootIsLarge && classNames.rootIsLarge,
            rootIsTabs && classNames.rootIsTabs,
            className,
        ],
        itemContainer: {
            selectors: {
                '&[hidden]': {
                    display: 'none',
                },
            },
        },
        link: __spreadArrays([
            classNames.link
        ], getLinkStyles(props, classNames), [
            (_a = {},
                _a["&[data-is-overflowing='true']"] = {
                    display: 'none',
                },
                _a),
        ]),
        overflowMenuButton: [
            classNames.overflowMenuButton,
            (_b = {
                    visibility: 'hidden',
                    position: 'absolute',
                    right: 0
                },
                _b["." + classNames.link + "[data-is-overflowing='true'] ~ &"] = {
                    visibility: 'visible',
                    position: 'relative',
                },
                _b),
        ],
        linkInMenu: __spreadArrays([
            classNames.linkInMenu
        ], getLinkStyles(props, classNames, true), [
            {
                textAlign: 'left',
                width: '100%',
                height: 36,
                lineHeight: 36,
            },
        ]),
        linkIsSelected: [
            classNames.link,
            classNames.linkIsSelected,
            {
                fontWeight: FontWeights.semibold,
                selectors: (_c = {
                        ':before': {
                            backgroundColor: semanticColors.inputBackgroundChecked,
                            selectors: (_d = {},
                                _d[HighContrastSelector] = {
                                    backgroundColor: 'Highlight',
                                },
                                _d),
                        },
                        ':hover::before': {
                            left: 0,
                            right: 0,
                        }
                    },
                    _c[HighContrastSelector] = {
                        color: 'Highlight',
                    },
                    _c),
            },
        ],
        linkContent: [
            classNames.linkContent,
            {
                flex: '0 1 100%',
                selectors: {
                    '& > * ': {
                        marginLeft: 4,
                    },
                    '& > *:first-child': {
                        marginLeft: 0,
                    },
                },
            },
        ],
        text: [
            classNames.text,
            {
                display: 'inline-block',
                verticalAlign: 'top',
            },
        ],
        count: [
            classNames.count,
            {
                display: 'inline-block',
                verticalAlign: 'top',
            },
        ],
        icon: classNames.icon,
    };
};
//# sourceMappingURL=Pivot.styles.js.map