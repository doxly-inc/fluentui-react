import { getGlobalClassNames, FontWeights } from '../../Styling';
import { CONTEXTUAL_MENU_ITEM_HEIGHT } from './ContextualMenu.cnstyles';
var GlobalClassNames = {
    root: 'ms-ContextualMenu',
    container: 'ms-ContextualMenu-container',
    list: 'ms-ContextualMenu-list',
    header: 'ms-ContextualMenu-header',
    title: 'ms-ContextualMenu-title',
    isopen: 'is-open',
};
export var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
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
                fontWeight: FontWeights.semibold,
                color: semanticColors.menuHeader,
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
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
//# sourceMappingURL=ContextualMenu.styles.js.map