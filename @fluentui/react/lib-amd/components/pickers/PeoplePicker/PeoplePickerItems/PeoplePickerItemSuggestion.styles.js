define(["require", "exports", "../../../../Styling", "../../Suggestions/SuggestionsItem.styles"], function (require, exports, Styling_1, SuggestionsItem_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-PeoplePicker-personaContent',
        personaWrapper: 'ms-PeoplePicker-Persona',
    };
    function getStyles(props) {
        var _a, _b, _c;
        var className = props.className, theme = props.theme;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var textSelectorsStyles = {
            selectors: (_a = {},
                _a["." + SuggestionsItem_styles_1.SuggestionsItemGlobalClassNames.isSuggested + " &"] = {
                    selectors: (_b = {},
                        _b[Styling_1.HighContrastSelector] = {
                            color: 'HighlightText',
                        },
                        _b),
                },
                _a["." + classNames.root + ":hover &"] = {
                    selectors: (_c = {},
                        _c[Styling_1.HighContrastSelector] = {
                            color: 'HighlightText',
                        },
                        _c),
                },
                _a),
        };
        return {
            root: [
                classNames.root,
                {
                    width: '100%',
                    padding: '4px 12px',
                },
                className,
            ],
            personaWrapper: [
                classNames.personaWrapper,
                {
                    width: 180,
                },
            ],
            subComponentStyles: {
                persona: {
                    primaryText: textSelectorsStyles,
                    secondaryText: textSelectorsStyles,
                },
            },
        };
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=PeoplePickerItemSuggestion.styles.js.map