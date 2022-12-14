define(["require", "exports", "tslib", "react", "../../Utilities", "./TeachingBubbleContent", "../../Callout", "../../common/DirectionalHint", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Utilities_1, TeachingBubbleContent_1, Callout_1, DirectionalHint_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var COMPONENT_NAME = 'TeachingBubble';
    var defaultCalloutProps = {
        beakWidth: 16,
        gapSpace: 0,
        setInitialFocus: true,
        doNotLayer: false,
        directionalHint: DirectionalHint_1.DirectionalHint.rightCenter,
    };
    var getClassNames = Utilities_1.classNamesFunction();
    var useComponentRef = function (componentRef, rootElementRef) {
        React.useImperativeHandle(componentRef, function () { return ({
            focus: function () { var _a; return (_a = rootElementRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        }); }, [rootElementRef]);
    };
    exports.TeachingBubbleBase = React.forwardRef(function (props, forwardedRef) {
        var rootElementRef = React.useRef(null);
        var mergedRootRef = react_hooks_1.useMergedRefs(rootElementRef, forwardedRef);
        var setCalloutProps = props.calloutProps, 
        // eslint-disable-next-line deprecation/deprecation
        targetElement = props.targetElement, onDismiss = props.onDismiss, 
        // eslint-disable-next-line deprecation/deprecation
        _a = props.hasCloseButton, 
        // eslint-disable-next-line deprecation/deprecation
        hasCloseButton = _a === void 0 ? props.hasCloseIcon : _a, isWide = props.isWide, styles = props.styles, theme = props.theme, target = props.target;
        var calloutProps = React.useMemo(function () { return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, defaultCalloutProps), setCalloutProps), { theme: theme })); }, [setCalloutProps, theme]);
        var stylesProps = {
            theme: theme,
            isWide: isWide,
            calloutProps: calloutProps,
            hasCloseButton: hasCloseButton,
        };
        var classNames = getClassNames(styles, stylesProps);
        var calloutStyles = classNames.subComponentStyles
            ? classNames.subComponentStyles.callout
            : undefined;
        useComponentRef(props.componentRef, rootElementRef);
        return (React.createElement(Callout_1.Callout, tslib_1.__assign({ target: target || targetElement, onDismiss: onDismiss }, calloutProps, { className: classNames.root, styles: calloutStyles, hideOverflow: true }),
            React.createElement("div", { ref: mergedRootRef },
                React.createElement(TeachingBubbleContent_1.TeachingBubbleContent, tslib_1.__assign({}, props)))));
    });
    exports.TeachingBubbleBase.displayName = COMPONENT_NAME;
});
//# sourceMappingURL=TeachingBubble.base.js.map