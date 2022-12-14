define(["require", "exports", "tslib", "react", "../../Utilities", "../../Button", "../../Stack", "../../FocusTrapZone", "../../Image", "@fluentui/react-hooks", "../../WindowProvider"], function (require, exports, tslib_1, React, Utilities_1, Button_1, Stack_1, FocusTrapZone_1, Image_1, react_hooks_1, WindowProvider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var useComponentRef = function (componentRef, rootElementRef) {
        React.useImperativeHandle(componentRef, function () { return ({
            focus: function () { var _a; return (_a = rootElementRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        }); }, [rootElementRef]);
    };
    exports.TeachingBubbleContentBase = React.forwardRef(function (props, forwardedRef) {
        var rootElementRef = React.useRef(null);
        var documentRef = WindowProvider_1.useDocument();
        var mergedRootRef = react_hooks_1.useMergedRefs(rootElementRef, forwardedRef);
        var illustrationImage = props.illustrationImage, primaryButtonProps = props.primaryButtonProps, secondaryButtonProps = props.secondaryButtonProps, headline = props.headline, hasCondensedHeadline = props.hasCondensedHeadline, 
        // eslint-disable-next-line deprecation/deprecation
        _a = props.hasCloseButton, 
        // eslint-disable-next-line deprecation/deprecation
        hasCloseButton = _a === void 0 ? props.hasCloseIcon : _a, onDismiss = props.onDismiss, closeButtonAriaLabel = props.closeButtonAriaLabel, hasSmallHeadline = props.hasSmallHeadline, isWide = props.isWide, styles = props.styles, theme = props.theme, ariaDescribedBy = props.ariaDescribedBy, ariaLabelledBy = props.ariaLabelledBy, customFooterContent = props.footerContent, focusTrapZoneProps = props.focusTrapZoneProps;
        var classNames = getClassNames(styles, {
            theme: theme,
            hasCondensedHeadline: hasCondensedHeadline,
            hasSmallHeadline: hasSmallHeadline,
            hasCloseButton: hasCloseButton,
            hasHeadline: !!headline,
            isWide: isWide,
            primaryButtonClassName: primaryButtonProps ? primaryButtonProps.className : undefined,
            secondaryButtonClassName: secondaryButtonProps ? secondaryButtonProps.className : undefined,
        });
        var onKeyDown = React.useCallback(function (ev) {
            if (onDismiss) {
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === Utilities_1.KeyCodes.escape) {
                    onDismiss(ev);
                }
            }
        }, [onDismiss]);
        react_hooks_1.useOnEvent(documentRef, 'keydown', onKeyDown);
        var imageContent;
        var headerContent;
        var bodyContent;
        var footerContent;
        var closeButton;
        if (illustrationImage && illustrationImage.src) {
            imageContent = (React.createElement("div", { className: classNames.imageContent },
                React.createElement(Image_1.Image, tslib_1.__assign({}, illustrationImage))));
        }
        if (headline) {
            var HeaderWrapperAs = typeof headline === 'string' ? 'p' : 'div';
            headerContent = (React.createElement("div", { className: classNames.header },
                React.createElement(HeaderWrapperAs, { role: "heading", className: classNames.headline, id: ariaLabelledBy }, headline)));
        }
        if (props.children) {
            var BodyContentWrapperAs = typeof props.children === 'string' ? 'p' : 'div';
            bodyContent = (React.createElement("div", { className: classNames.body },
                React.createElement(BodyContentWrapperAs, { className: classNames.subText, id: ariaDescribedBy }, props.children)));
        }
        if (primaryButtonProps || secondaryButtonProps || customFooterContent) {
            footerContent = (React.createElement(Stack_1.Stack, { className: classNames.footer, horizontal: true, horizontalAlign: customFooterContent ? 'space-between' : 'end' },
                React.createElement(Stack_1.Stack.Item, { align: "center" }, React.createElement("span", null, customFooterContent)),
                React.createElement(Stack_1.Stack.Item, null,
                    secondaryButtonProps && React.createElement(Button_1.DefaultButton, tslib_1.__assign({}, secondaryButtonProps, { className: classNames.secondaryButton })),
                    primaryButtonProps && React.createElement(Button_1.PrimaryButton, tslib_1.__assign({}, primaryButtonProps, { className: classNames.primaryButton })))));
        }
        if (hasCloseButton) {
            closeButton = (React.createElement(Button_1.IconButton, { className: classNames.closeButton, iconProps: { iconName: 'Cancel' }, title: closeButtonAriaLabel, ariaLabel: closeButtonAriaLabel, onClick: onDismiss }));
        }
        useComponentRef(props.componentRef, rootElementRef);
        return (React.createElement("div", { className: classNames.content, ref: mergedRootRef, role: 'dialog', tabIndex: -1, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "data-is-focusable": true },
            imageContent,
            React.createElement(FocusTrapZone_1.FocusTrapZone, tslib_1.__assign({ isClickableOutsideFocusTrap: true }, focusTrapZoneProps),
                React.createElement("div", { className: classNames.bodyContent },
                    headerContent,
                    bodyContent,
                    footerContent,
                    closeButton))));
    });
});
//# sourceMappingURL=TeachingBubbleContent.base.js.map