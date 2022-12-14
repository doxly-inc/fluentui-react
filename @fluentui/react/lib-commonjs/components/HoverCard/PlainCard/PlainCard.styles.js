"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var GlobalClassNames = {
    root: 'ms-PlainCard-root',
};
function getStyles(props) {
    var _a;
    var theme = props.theme, className = props.className;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                pointerEvents: 'auto',
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        border: '1px solid WindowText',
                    },
                    _a),
            },
            className,
        ],
    };
}
exports.getStyles = getStyles;
//# sourceMappingURL=PlainCard.styles.js.map