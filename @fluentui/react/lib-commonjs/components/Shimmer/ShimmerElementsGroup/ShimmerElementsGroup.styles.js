"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var GlobalClassNames = {
    root: 'ms-ShimmerElementsGroup-root',
};
function getStyles(props) {
    var flexWrap = props.flexWrap, theme = props.theme;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: 'center',
                flexWrap: flexWrap ? 'wrap' : 'nowrap',
                position: 'relative',
            },
        ],
    };
}
exports.getStyles = getStyles;
//# sourceMappingURL=ShimmerElementsGroup.styles.js.map