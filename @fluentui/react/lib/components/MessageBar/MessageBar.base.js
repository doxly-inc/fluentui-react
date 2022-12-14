var _a;
import { __assign } from "tslib";
import * as React from 'react';
import { DelayedRender, classNamesFunction, getNativeProps, htmlElementProperties, css } from '../../Utilities';
import { IconButton } from '../../Button';
import { Icon } from '../../Icon';
import { MessageBarType } from './MessageBar.types';
import { useId, useBoolean } from '@fluentui/react-hooks';
var ICON_MAP = (_a = {},
    _a[MessageBarType.info] = 'Info',
    _a[MessageBarType.warning] = 'Info',
    _a[MessageBarType.error] = 'ErrorBadge',
    _a[MessageBarType.blocked] = 'Blocked2',
    _a[MessageBarType.severeWarning] = 'Warning',
    _a[MessageBarType.success] = 'Completed',
    _a);
var COMPONENT_NAME = 'MessageBar';
var getClassNames = classNamesFunction();
var getAnnouncementPriority = function (messageBarType) {
    switch (messageBarType) {
        case MessageBarType.blocked:
        case MessageBarType.error:
        case MessageBarType.severeWarning:
            return 'assertive';
    }
    return 'polite';
};
export var MessageBarBase = React.forwardRef(function (props, ref) {
    var _a = useBoolean(false), expandSingleLine = _a[0], toggleExpandSingleLine = _a[1].toggle;
    var labelId = useId('MessageBar');
    var actions = props.actions, className = props.className, children = props.children, overflowButtonAriaLabel = props.overflowButtonAriaLabel, dismissIconProps = props.dismissIconProps, styles = props.styles, theme = props.theme, _b = props.messageBarType, messageBarType = _b === void 0 ? MessageBarType.info : _b, _c = props.onDismiss, onDismiss = _c === void 0 ? undefined : _c, _d = props.isMultiline, isMultiline = _d === void 0 ? true : _d, truncated = props.truncated, dismissButtonAriaLabel = props.dismissButtonAriaLabel, messageBarIconProps = props.messageBarIconProps;
    var nativeProps = getNativeProps(props, htmlElementProperties, [
        'className',
    ]);
    var classNames = getClassNames(styles, {
        theme: theme,
        messageBarType: messageBarType || MessageBarType.info,
        onDismiss: onDismiss !== undefined,
        actions: actions !== undefined,
        truncated: truncated,
        isMultiline: isMultiline,
        expandSingleLine: expandSingleLine,
        className: className,
    });
    var expandIconProps = { iconName: expandSingleLine ? 'DoubleChevronUp' : 'DoubleChevronDown' };
    var regionProps = actions || onDismiss ? { 'aria-describedby': labelId, role: 'region' } : {};
    var actionsDiv = actions ? React.createElement("div", { className: classNames.actions }, actions) : null;
    var dismissButton = onDismiss ? (React.createElement(IconButton, { disabled: false, className: classNames.dismissal, onClick: onDismiss, iconProps: dismissIconProps ? dismissIconProps : { iconName: 'Clear' }, title: dismissButtonAriaLabel, ariaLabel: dismissButtonAriaLabel })) : null;
    return (React.createElement("div", __assign({ ref: ref, className: classNames.root }, regionProps),
        React.createElement("div", { className: classNames.content },
            React.createElement("div", { className: classNames.iconContainer, "aria-hidden": true }, messageBarIconProps ? (React.createElement(Icon, __assign({}, messageBarIconProps, { className: css(classNames.icon, messageBarIconProps.className) }))) : (React.createElement(Icon, { iconName: ICON_MAP[messageBarType], className: classNames.icon }))),
            React.createElement("div", { className: classNames.text, id: labelId, role: "status", "aria-live": getAnnouncementPriority(messageBarType) },
                React.createElement("span", __assign({ className: classNames.innerText }, nativeProps),
                    React.createElement(DelayedRender, null,
                        React.createElement("span", null, children)))),
            !isMultiline && !actionsDiv && truncated && (React.createElement("div", { className: classNames.expandSingleLine },
                React.createElement(IconButton, { disabled: false, className: classNames.expand, onClick: toggleExpandSingleLine, iconProps: expandIconProps, ariaLabel: overflowButtonAriaLabel, "aria-expanded": expandSingleLine }))),
            !isMultiline && actionsDiv,
            !isMultiline && dismissButton && (React.createElement("div", { className: classNames.dismissSingleLine }, dismissButton)),
            isMultiline && dismissButton),
        isMultiline && actionsDiv));
});
MessageBarBase.displayName = COMPONENT_NAME;
//# sourceMappingURL=MessageBar.base.js.map