define(["require", "exports", "react", "../../../Utilities", "./TagItemSuggestion.styles"], function (require, exports, React, Utilities_1, TagItemSuggestion_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory TagPicker}
     */
    exports.TagItemSuggestionBase = function (props) {
        var styles = props.styles, theme = props.theme, children = props.children;
        var classNames = getClassNames(styles, {
            theme: theme,
        });
        return React.createElement("div", { className: classNames.suggestionTextOverflow },
            " ",
            children,
            " ");
    };
    exports.TagItemSuggestion = Utilities_1.styled(exports.TagItemSuggestionBase, TagItemSuggestion_styles_1.getStyles, undefined, { scope: 'TagItemSuggestion' });
});
//# sourceMappingURL=TagItemSuggestion.js.map