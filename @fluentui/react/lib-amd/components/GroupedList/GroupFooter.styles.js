define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-groupFooter',
    };
    exports.getStyles = function (props) {
        var theme = props.theme, className = props.className;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                theme.fonts.medium,
                classNames.root,
                {
                    position: 'relative',
                    padding: '5px 38px',
                },
                className,
            ],
        };
    };
});
//# sourceMappingURL=GroupFooter.styles.js.map