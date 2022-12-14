define(["require", "exports", "react", "../../../Utilities", "../../../Icon", "../Persona.types", "../PersonaConsts", "@fluentui/react-hooks"], function (require, exports, React, Utilities_1, Icon_1, Persona_types_1, PersonaConsts_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var coinSizeFontScaleFactor = 6;
    var coinSizePresenceScaleFactor = 3;
    var presenceMaxSize = 40;
    var presenceFontMaxSize = 20;
    var getClassNames = Utilities_1.classNamesFunction({
        // There can be many PersonaPresence rendered with different sizes.
        // Therefore setting a larger cache size.
        cacheSize: 100,
    });
    /**
     * PersonaPresence with no default styles.
     * [Use the `getStyles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
     */
    exports.PersonaPresenceBase = React.forwardRef(function (props, forwardedRef) {
        var coinSize = props.coinSize, isOutOfOffice = props.isOutOfOffice, styles = props.styles, // Use getStyles from props.
        presence = props.presence, theme = props.theme, presenceTitle = props.presenceTitle, presenceColors = props.presenceColors;
        var rootRef = React.useRef(null);
        var mergedRootRef = react_hooks_1.useMergedRefs(forwardedRef, rootRef);
        var size = PersonaConsts_1.sizeBoolean(props.size);
        // Render Presence Icon if Persona is above size 32.
        var renderIcon = !(size.isSize8 || size.isSize10 || size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32) &&
            (coinSize ? coinSize > 32 : true);
        var presenceHeightWidth = coinSize
            ? coinSize / coinSizePresenceScaleFactor < presenceMaxSize
                ? coinSize / coinSizePresenceScaleFactor + 'px'
                : presenceMaxSize + 'px'
            : '';
        var presenceFontSize = coinSize
            ? coinSize / coinSizeFontScaleFactor < presenceFontMaxSize
                ? coinSize / coinSizeFontScaleFactor + 'px'
                : presenceFontMaxSize + 'px'
            : '';
        var coinSizeWithPresenceIconStyle = coinSize
            ? { fontSize: presenceFontSize, lineHeight: presenceHeightWidth }
            : undefined;
        var coinSizeWithPresenceStyle = coinSize ? { width: presenceHeightWidth, height: presenceHeightWidth } : undefined;
        // Use getStyles from props, or fall back to getStyles from styles file.
        var classNames = getClassNames(styles, {
            theme: theme,
            presence: presence,
            size: props.size,
            isOutOfOffice: isOutOfOffice,
            presenceColors: presenceColors,
        });
        if (presence === Persona_types_1.PersonaPresence.none) {
            return null;
        }
        return (React.createElement("div", { role: "presentation", className: classNames.presence, style: coinSizeWithPresenceStyle, title: presenceTitle, ref: mergedRootRef }, renderIcon && (React.createElement(Icon_1.Icon, { className: classNames.presenceIcon, iconName: determineIcon(props.presence, props.isOutOfOffice), style: coinSizeWithPresenceIconStyle }))));
    });
    exports.PersonaPresenceBase.displayName = 'PersonaPresenceBase';
    function determineIcon(presence, isOutOfOffice) {
        if (!presence) {
            return undefined;
        }
        var oofIcon = 'SkypeArrow';
        switch (Persona_types_1.PersonaPresence[presence]) {
            case 'online':
                return 'SkypeCheck';
            case 'away':
                return isOutOfOffice ? oofIcon : 'SkypeClock';
            case 'dnd':
                return 'SkypeMinus';
            case 'offline':
                return isOutOfOffice ? oofIcon : '';
        }
        return '';
    }
});
//# sourceMappingURL=PersonaPresence.base.js.map