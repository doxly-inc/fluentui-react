define(["require", "exports", "tslib", "./Panel.types", "../../Styling"], function (require, exports, tslib_1, Panel_types_1, Styling_1) {
    "use strict";
    var _a, _b, _c, _d, _e;
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-Panel',
        main: 'ms-Panel-main',
        commands: 'ms-Panel-commands',
        contentInner: 'ms-Panel-contentInner',
        scrollableContent: 'ms-Panel-scrollableContent',
        navigation: 'ms-Panel-navigation',
        closeButton: 'ms-Panel-closeButton ms-PanelAction-close',
        header: 'ms-Panel-header',
        headerText: 'ms-Panel-headerText',
        content: 'ms-Panel-content',
        footer: 'ms-Panel-footer',
        footerInner: 'ms-Panel-footerInner',
        isOpen: 'is-open',
        hasCloseButton: 'ms-Panel--hasCloseButton',
        smallFluid: 'ms-Panel--smFluid',
        smallFixedNear: 'ms-Panel--smLeft',
        smallFixedFar: 'ms-Panel--sm',
        medium: 'ms-Panel--md',
        large: 'ms-Panel--lg',
        largeFixed: 'ms-Panel--fixed',
        extraLarge: 'ms-Panel--xl',
        custom: 'ms-Panel--custom',
        customNear: 'ms-Panel--customLeft',
    };
    var panelWidth = {
        full: '100%',
        auto: 'auto',
        xs: 272,
        sm: 340,
        md1: 592,
        md2: 644,
        lg: 940,
    };
    var panelMargin = {
        auto: 'auto',
        none: 0,
        md: 48,
        lg: 428,
        xl: 176,
    };
    // Following consts are used below in `getPanelBreakpoints()` function to provide
    // necessary fallbacks for different types of Panel in different breakpoints.
    var smallPanelSelectors = (_a = {},
        _a["@media (min-width: " + Styling_1.ScreenWidthMinMedium + "px)"] = {
            width: panelWidth.sm,
        },
        _a);
    var mediumPanelSelectors = (_b = {},
        _b["@media (min-width: " + Styling_1.ScreenWidthMinLarge + "px)"] = {
            width: panelWidth.md1,
        },
        _b["@media (min-width: " + Styling_1.ScreenWidthMinXLarge + "px)"] = {
            width: panelWidth.md2,
        },
        _b);
    var largePanelSelectors = (_c = {},
        _c["@media (min-width: " + Styling_1.ScreenWidthMinUhfMobile + "px)"] = {
            left: panelMargin.md,
            width: panelWidth.auto,
        },
        _c["@media (min-width: " + Styling_1.ScreenWidthMinXXLarge + "px)"] = {
            left: panelMargin.lg,
        },
        _c);
    var largeFixedPanelSelectors = (_d = {},
        _d["@media (min-width: " + Styling_1.ScreenWidthMinXXLarge + "px)"] = {
            left: panelMargin.auto,
            width: panelWidth.lg,
        },
        _d);
    var extraLargePanelSelectors = (_e = {},
        _e["@media (min-width: " + Styling_1.ScreenWidthMinXXLarge + "px)"] = {
            left: panelMargin.xl,
        },
        _e);
    // Make sure Panels have fallbacks to different breakpoints by reusing same selectors.
    // This is done in the effort to follow design redlines.
    var getPanelBreakpoints = function (type) {
        var selectors;
        // Panel types `smallFluid`, `smallFixedNear`, `custom` and `customNear`
        // are not checked in here because they render the same in all the breakpoints
        // and have the checks done separately in the `getStyles` function below.
        switch (type) {
            case Panel_types_1.PanelType.smallFixedFar:
                selectors = tslib_1.__assign({}, smallPanelSelectors);
                break;
            case Panel_types_1.PanelType.medium:
                selectors = tslib_1.__assign(tslib_1.__assign({}, smallPanelSelectors), mediumPanelSelectors);
                break;
            case Panel_types_1.PanelType.large:
                selectors = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors);
                break;
            case Panel_types_1.PanelType.largeFixed:
                selectors = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors), largeFixedPanelSelectors);
                break;
            case Panel_types_1.PanelType.extraLarge:
                selectors = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors), extraLargePanelSelectors);
                break;
            default:
                break;
        }
        return selectors;
    };
    var commandBarHeight = '44px';
    var sharedPaddingStyles = {
        paddingLeft: '24px',
        paddingRight: '24px',
    };
    exports.getStyles = function (props) {
        var _a;
        var className = props.className, focusTrapZoneClassName = props.focusTrapZoneClassName, hasCloseButton = props.hasCloseButton, headerClassName = props.headerClassName, isAnimating = props.isAnimating, isFooterSticky = props.isFooterSticky, isFooterAtBottom = props.isFooterAtBottom, isOnRightSide = props.isOnRightSide, isOpen = props.isOpen, isHiddenOnDismiss = props.isHiddenOnDismiss, hasCustomNavigation = props.hasCustomNavigation, theme = props.theme, _b = props.type, type = _b === void 0 ? Panel_types_1.PanelType.smallFixedFar : _b;
        var effects = theme.effects, fonts = theme.fonts, semanticColors = theme.semanticColors;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var isCustomPanel = type === Panel_types_1.PanelType.custom || type === Panel_types_1.PanelType.customNear;
        return {
            root: [
                classNames.root,
                theme.fonts.medium,
                isOpen && classNames.isOpen,
                hasCloseButton && classNames.hasCloseButton,
                {
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
                isCustomPanel && isOnRightSide && classNames.custom,
                isCustomPanel && !isOnRightSide && classNames.customNear,
                className,
            ],
            overlay: [
                {
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                },
                isOpen && isAnimating && Styling_1.AnimationClassNames.fadeIn100,
                !isOpen && isAnimating && Styling_1.AnimationClassNames.fadeOut100,
            ],
            hiddenPanel: [
                !isOpen &&
                    !isAnimating &&
                    isHiddenOnDismiss && {
                    visibility: 'hidden',
                },
            ],
            main: [
                classNames.main,
                {
                    backgroundColor: semanticColors.bodyBackground,
                    boxShadow: effects.elevation64,
                    pointerEvents: 'auto',
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    bottom: 0,
                    top: 0,
                    // left, right, width are overridden depending on the type of the Panel and the screen breakpoint.
                    left: panelMargin.auto,
                    right: panelMargin.none,
                    width: panelWidth.full,
                    selectors: tslib_1.__assign((_a = {}, _a[Styling_1.HighContrastSelector] = {
                        borderLeft: "3px solid " + semanticColors.variantBorder,
                        borderRight: "3px solid " + semanticColors.variantBorder,
                    }, _a), getPanelBreakpoints(type)),
                },
                type === Panel_types_1.PanelType.smallFluid && {
                    left: panelMargin.none,
                },
                type === Panel_types_1.PanelType.smallFixedNear && {
                    left: panelMargin.none,
                    right: panelMargin.auto,
                    width: panelWidth.xs,
                },
                type === Panel_types_1.PanelType.customNear && {
                    right: 'auto',
                    left: 0,
                },
                isCustomPanel && {
                    maxWidth: '100vw',
                },
                isOpen && isAnimating && !isOnRightSide && Styling_1.AnimationClassNames.slideRightIn40,
                isOpen && isAnimating && isOnRightSide && Styling_1.AnimationClassNames.slideLeftIn40,
                !isOpen && isAnimating && !isOnRightSide && Styling_1.AnimationClassNames.slideLeftOut40,
                !isOpen && isAnimating && isOnRightSide && Styling_1.AnimationClassNames.slideRightOut40,
                focusTrapZoneClassName,
            ],
            commands: [
                classNames.commands,
                {
                    marginTop: 18,
                },
                hasCustomNavigation && {
                    marginTop: 'inherit',
                },
            ],
            navigation: [
                classNames.navigation,
                {
                    display: 'flex',
                    justifyContent: 'flex-end',
                },
                hasCustomNavigation && {
                    height: commandBarHeight,
                },
            ],
            contentInner: [
                classNames.contentInner,
                {
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    overflowY: 'hidden',
                },
            ],
            header: [
                classNames.header,
                sharedPaddingStyles,
                {
                    alignSelf: 'flex-start',
                },
                hasCloseButton &&
                    !hasCustomNavigation && {
                    flexGrow: 1,
                },
                hasCustomNavigation && {
                    // Ensure that title doesn't shrink if screen is too small
                    flexShrink: 0,
                },
            ],
            headerText: [
                classNames.headerText,
                fonts.xLarge,
                {
                    color: semanticColors.bodyText,
                    lineHeight: '27px',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                },
                headerClassName,
            ],
            scrollableContent: [
                classNames.scrollableContent,
                {
                    overflowY: 'auto',
                },
                isFooterAtBottom && {
                    flexGrow: 1,
                },
            ],
            content: [
                classNames.content,
                sharedPaddingStyles,
                {
                    paddingBottom: 20,
                },
            ],
            footer: [
                classNames.footer,
                {
                    // Ensure that footer doesn't shrink if screen is too small
                    flexShrink: 0,
                    borderTop: '1px solid transparent',
                    transition: "opacity " + Styling_1.AnimationVariables.durationValue3 + " " + Styling_1.AnimationVariables.easeFunction2,
                },
                isFooterSticky && {
                    background: semanticColors.bodyBackground,
                    borderTopColor: semanticColors.variantBorder,
                },
            ],
            footerInner: [
                classNames.footerInner,
                sharedPaddingStyles,
                {
                    paddingBottom: 16,
                    paddingTop: 16,
                },
            ],
            subComponentStyles: {
                closeButton: {
                    root: [
                        classNames.closeButton,
                        {
                            marginRight: 14,
                            color: theme.palette.neutralSecondary,
                            fontSize: Styling_1.IconFontSizes.large,
                        },
                        hasCustomNavigation && {
                            marginRight: 0,
                            height: 'auto',
                            width: '44px',
                        },
                    ],
                    rootHovered: {
                        color: theme.palette.neutralPrimary,
                    },
                },
            },
        };
    };
});
//# sourceMappingURL=Panel.styles.js.map