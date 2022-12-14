define(["require", "exports", "../../Styling", "./ContextualMenu.cnstyles"], function (require, exports, Styling_1, ContextualMenu_cnstyles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-ContextualMenu',
        container: 'ms-ContextualMenu-container',
        list: 'ms-ContextualMenu-list',
        header: 'ms-ContextualMenu-header',
        title: 'ms-ContextualMenu-title',
        isopen: 'is-open',
    };
    exports.getStyles = function (props) {
        var className = props.className, theme = props.theme;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var fonts = theme.fonts, semanticColors = theme.semanticColors, effects = theme.effects;
        return {
            root: [
                theme.fonts.medium,
                classNames.root,
                classNames.isopen,
                {
                    backgroundColor: semanticColors.menuBackground,
                    minWidth: '180px',
                },
                className,
            ],
            container: [
                classNames.container,
                {
                    selectors: {
                        ':focus': { outline: 0 },
                    },
                },
            ],
            list: [
                classNames.list,
                classNames.isopen,
                {
                    listStyleType: 'none',
                    margin: '0',
                    padding: '0',
                },
            ],
            header: [
                classNames.header,
                fonts.small,
                {
                    fontWeight: Styling_1.FontWeights.semibold,
                    color: semanticColors.menuHeader,
                    background: 'none',
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: ContextualMenu_cnstyles_1.CONTEXTUAL_MENU_ITEM_HEIGHT,
                    lineHeight: ContextualMenu_cnstyles_1.CONTEXTUAL_MENU_ITEM_HEIGHT,
                    cursor: 'default',
                    padding: '0px 6px',
                    userSelect: 'none',
                    textAlign: 'left',
                },
            ],
            title: [
                classNames.title,
                {
                    fontSize: fonts.mediumPlus.fontSize,
                    paddingRight: '14px',
                    paddingLeft: '14px',
                    paddingBottom: '5px',
                    paddingTop: '5px',
                    backgroundColor: semanticColors.menuItemBackgroundPressed,
                },
            ],
            subComponentStyles: {
                callout: {
                    root: {
                        boxShadow: effects.elevation8,
                    },
                },
                menuItem: {},
            },
        };
    };
});
//# sourceMappingURL=ContextualMenu.styles.js.map