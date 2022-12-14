define(["require", "exports", "react", "../../Utilities"], function (require, exports, React, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    exports.SeparatorBase = React.forwardRef(function (props, ref) {
        var styles = props.styles, theme = props.theme, className = props.className, vertical = props.vertical, alignContent = props.alignContent, children = props.children;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            alignContent: alignContent,
            vertical: vertical,
        });
        return (React.createElement("div", { className: classNames.root, ref: ref },
            React.createElement("div", { className: classNames.content, role: "separator", "aria-orientation": vertical ? 'vertical' : 'horizontal' }, children)));
    });
});
//# sourceMappingURL=Separator.base.js.map