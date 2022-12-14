define(["require", "exports", "tslib", "react", "../../Utilities", "../../Button", "../../Icon", "./MessageBar.types", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Utilities_1, Button_1, Icon_1, MessageBar_types_1, react_hooks_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ICON_MAP = (_a = {},
        _a[MessageBar_types_1.MessageBarType.info] = 'Info',
        _a[MessageBar_types_1.MessageBarType.warning] = 'Info',
        _a[MessageBar_types_1.MessageBarType.error] = 'ErrorBadge',
        _a[MessageBar_types_1.MessageBarType.blocked] = 'Blocked2',
        _a[MessageBar_types_1.MessageBarType.severeWarning] = 'Warning',
        _a[MessageBar_types_1.MessageBarType.success] = 'Completed',
        _a);
    var COMPONENT_NAME = 'MessageBar';
    var getClassNames = Utilities_1.classNamesFunction();
    var getAnnouncementPriority = function (messageBarType) {
        switch (messageBarType) {
            case MessageBar_types_1.MessageBarType.blocked:
            case MessageBar_types_1.MessageBarType.error:
            case MessageBar_types_1.MessageBarType.severeWarning:
                return 'assertive';
        }
        return 'polite';
    };
    exports.MessageBarBase = React.forwardRef(function (props, ref) {
        var _a = react_hooks_1.useBoolean(false), expandSingleLine = _a[0], toggleExpandSingleLine = _a[1].toggle;
        var labelId = react_hooks_1.useId('MessageBar');
        var actions = props.actions, className = props.className, children = props.children, overflowButtonAriaLabel = props.overflowButtonAriaLabel, dismissIconProps = props.dismissIconProps, styles = props.styles, theme = props.theme, _b = props.messageBarType, messageBarType = _b === void 0 ? MessageBar_types_1.MessageBarType.info : _b, _c = props.onDismiss, onDismiss = _c === void 0 ? undefined : _c, _d = props.isMultiline, isMultiline = _d === void 0 ? true : _d, truncated = props.truncated, dismissButtonAriaLabel = props.dismissButtonAriaLabel, messageBarIconProps = props.messageBarIconProps;
        var nativeProps = Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties, [
            'className',
        ]);
        var classNames = getClassNames(styles, {
            theme: theme,
            messageBarType: messageBarType || MessageBar_types_1.MessageBarType.info,
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
        var dismissButton = onDismiss ? (React.createElement(Button_1.IconButton, { disabled: false, className: classNames.dismissal, onClick: onDismiss, iconProps: dismissIconProps ? dismissIconProps : { iconName: 'Clear' }, title: dismissButtonAriaLabel, ariaLabel: dismissButtonAriaLabel })) : null;
        return (React.createElement("div", tslib_1.__assign({ ref: ref, className: classNames.root }, regionProps),
            React.createElement("div", { className: classNames.content },
                React.createElement("div", { className: classNames.iconContainer, "aria-hidden": true }, messageBarIconProps ? (React.createElement(Icon_1.Icon, tslib_1.__assign({}, messageBarIconProps, { className: Utilities_1.css(classNames.icon, messageBarIconProps.className) }))) : (React.createElement(Icon_1.Icon, { iconName: ICON_MAP[messageBarType], className: classNames.icon }))),
                React.createElement("div", { className: classNames.text, id: labelId, role: "status", "aria-live": getAnnouncementPriority(messageBarType) },
                    React.createElement("span", tslib_1.__assign({ className: classNames.innerText }, nativeProps),
                        React.createElement(Utilities_1.DelayedRender, null,
                            React.createElement("span", null, children)))),
                !isMultiline && !actionsDiv && truncated && (React.createElement("div", { className: classNames.expandSingleLine },
                    React.createElement(Button_1.IconButton, { disabled: false, className: classNames.expand, onClick: toggleExpandSingleLine, iconProps: expandIconProps, ariaLabel: overflowButtonAriaLabel, "aria-expanded": expandSingleLine }))),
                !isMultiline && actionsDiv,
                !isMultiline && dismissButton && (React.createElement("div", { className: classNames.dismissSingleLine }, dismissButton)),
                isMultiline && dismissButton),
            isMultiline && actionsDiv));
    });
    exports.MessageBarBase.displayName = COMPONENT_NAME;
});
//# sourceMappingURL=MessageBar.base.js.map