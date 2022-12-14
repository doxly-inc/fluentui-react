define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        host: 'ms-HoverCard-host',
    };
    function getStyles(props) {
        var className = props.className, theme = props.theme;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            host: [classNames.host, className],
        };
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=HoverCard.styles.js.map