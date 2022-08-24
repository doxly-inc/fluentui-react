define(["require", "exports", "tslib", "../../../Styling"], function (require, exports, tslib_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-Suggestions',
        suggestionsContainer: 'ms-Suggestions-container',
        title: 'ms-Suggestions-title',
        forceResolveButton: 'ms-forceResolve-button',
        searchForMoreButton: 'ms-SearchMore-button',
        spinner: 'ms-Suggestions-spinner',
        noSuggestions: 'ms-Suggestions-none',
        suggestionsAvailable: 'ms-Suggestions-suggestionsAvailable',
        isSelected: 'is-selected',
    };
    function getStyles(props) {
        var _a;
        var className = props.className, suggestionsClassName = props.suggestionsClassName, theme = props.theme, forceResolveButtonSelected = props.forceResolveButtonSelected, searchForMoreButtonSelected = props.searchForMoreButtonSelected;
        var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var actionButtonStyles = {
            backgroundColor: 'transparent',
            border: 0,
            cursor: 'pointer',
            margin: 0,
            paddingLeft: 8,
            position: 'relative',
            borderTop: "1px solid " + palette.neutralLight,
            height: 40,
            textAlign: 'left',
            width: '100%',
            fontSize: fonts.small.fontSize,
            selectors: {
                ':hover': {
                    backgroundColor: semanticColors.menuItemBackgroundPressed,
                    cursor: 'pointer',
                },
                ':focus, :active': {
                    backgroundColor: palette.themeLight,
                },
                '.ms-Button-icon': {
                    fontSize: fonts.mediumPlus.fontSize,
                    width: 25,
                },
                '.ms-Button-label': {
                    margin: '0 4px 0 9px',
                },
            },
        };
        var actionButtonSelectedStyles = {
            backgroundColor: palette.themeLight,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'Highlight', borderColor: 'Highlight', color: 'HighlightText' }, Styling_1.getHighContrastNoAdjustStyle()),
                _a),
        };
        return {
            root: [
                classNames.root,
                {
                    minWidth: 260,
                },
                className,
            ],
            suggestionsContainer: [
                classNames.suggestionsContainer,
                {
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    maxHeight: 300,
                    transform: 'translate3d(0,0,0)',
                },
                suggestionsClassName,
            ],
            title: [
                classNames.title,
                {
                    padding: '0 12px',
                    fontSize: fonts.small.fontSize,
                    color: palette.themePrimary,
                    lineHeight: 40,
                    borderBottom: "1px solid " + semanticColors.menuItemBackgroundPressed,
                },
            ],
            forceResolveButton: [
                classNames.forceResolveButton,
                actionButtonStyles,
                forceResolveButtonSelected && [classNames.isSelected, actionButtonSelectedStyles],
            ],
            searchForMoreButton: [
                classNames.searchForMoreButton,
                actionButtonStyles,
                searchForMoreButtonSelected && [classNames.isSelected, actionButtonSelectedStyles],
            ],
            noSuggestions: [
                classNames.noSuggestions,
                {
                    textAlign: 'center',
                    color: palette.neutralSecondary,
                    fontSize: fonts.small.fontSize,
                    lineHeight: 30,
                },
            ],
            suggestionsAvailable: [classNames.suggestionsAvailable, Styling_1.hiddenContentStyle],
            subComponentStyles: {
                spinner: {
                    root: [
                        classNames.spinner,
                        {
                            margin: '5px 0',
                            paddingLeft: 14,
                            textAlign: 'left',
                            whiteSpace: 'nowrap',
                            lineHeight: 20,
                            fontSize: fonts.small.fontSize,
                        },
                    ],
                    circle: {
                        display: 'inline-block',
                        verticalAlign: 'middle',
                    },
                    label: {
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '0 10px 0 16px',
                    },
                },
            },
        };
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=Suggestions.styles.js.map