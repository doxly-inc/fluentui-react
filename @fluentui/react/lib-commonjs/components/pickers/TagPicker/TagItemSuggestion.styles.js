"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var GlobalClassNames = {
    suggestionTextOverflow: 'ms-TagItem-TextOverflow',
};
function getStyles(props) {
    var className = props.className, theme = props.theme;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    return {
        suggestionTextOverflow: [
            classNames.suggestionTextOverflow,
            {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '60vw',
                padding: '6px 12px 7px',
                whiteSpace: 'nowrap',
            },
            className,
        ],
    };
}
exports.getStyles = getStyles;
//# sourceMappingURL=TagItemSuggestion.styles.js.map