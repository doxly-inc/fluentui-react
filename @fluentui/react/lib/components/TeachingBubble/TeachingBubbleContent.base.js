import { __assign } from "tslib";
import * as React from 'react';
import { classNamesFunction, KeyCodes } from '../../Utilities';
import { PrimaryButton, DefaultButton, IconButton } from '../../Button';
import { Stack } from '../../Stack';
import { FocusTrapZone } from '../../FocusTrapZone';
import { Image } from '../../Image';
import { useOnEvent, useMergedRefs } from '@fluentui/react-hooks';
import { useDocument } from '../../WindowProvider';
var getClassNames = classNamesFunction();
var useComponentRef = function (componentRef, rootElementRef) {
    React.useImperativeHandle(componentRef, function () { return ({
        focus: function () { var _a; return (_a = rootElementRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
    }); }, [rootElementRef]);
};
export var TeachingBubbleContentBase = React.forwardRef(function (props, forwardedRef) {
    var rootElementRef = React.useRef(null);
    var documentRef = useDocument();
    var mergedRootRef = useMergedRefs(rootElementRef, forwardedRef);
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
            if (ev.which === KeyCodes.escape) {
                onDismiss(ev);
            }
        }
    }, [onDismiss]);
    useOnEvent(documentRef, 'keydown', onKeyDown);
    var imageContent;
    var headerContent;
    var bodyContent;
    var footerContent;
    var closeButton;
    if (illustrationImage && illustrationImage.src) {
        imageContent = (React.createElement("div", { className: classNames.imageContent },
            React.createElement(Image, __assign({}, illustrationImage))));
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
        footerContent = (React.createElement(Stack, { className: classNames.footer, horizontal: true, horizontalAlign: customFooterContent ? 'space-between' : 'end' },
            React.createElement(Stack.Item, { align: "center" }, React.createElement("span", null, customFooterContent)),
            React.createElement(Stack.Item, null,
                secondaryButtonProps && React.createElement(DefaultButton, __assign({}, secondaryButtonProps, { className: classNames.secondaryButton })),
                primaryButtonProps && React.createElement(PrimaryButton, __assign({}, primaryButtonProps, { className: classNames.primaryButton })))));
    }
    if (hasCloseButton) {
        closeButton = (React.createElement(IconButton, { className: classNames.closeButton, iconProps: { iconName: 'Cancel' }, title: closeButtonAriaLabel, ariaLabel: closeButtonAriaLabel, onClick: onDismiss }));
    }
    useComponentRef(props.componentRef, rootElementRef);
    return (React.createElement("div", { className: classNames.content, ref: mergedRootRef, role: 'dialog', tabIndex: -1, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "data-is-focusable": true },
        imageContent,
        React.createElement(FocusTrapZone, __assign({ isClickableOutsideFocusTrap: true }, focusTrapZoneProps),
            React.createElement("div", { className: classNames.bodyContent },
                headerContent,
                bodyContent,
                footerContent,
                closeButton))));
});
//# sourceMappingURL=TeachingBubbleContent.base.js.map