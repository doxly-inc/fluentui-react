import * as React from 'react';
import { classNamesFunction } from '../../../Utilities';
import { Icon } from '../../../Icon';
import { PersonaPresence as PersonaPresenceEnum, } from '../Persona.types';
import { sizeBoolean } from '../PersonaConsts';
import { useMergedRefs } from '@fluentui/react-hooks';
var coinSizeFontScaleFactor = 6;
var coinSizePresenceScaleFactor = 3;
var presenceMaxSize = 40;
var presenceFontMaxSize = 20;
var getClassNames = classNamesFunction({
    // There can be many PersonaPresence rendered with different sizes.
    // Therefore setting a larger cache size.
    cacheSize: 100,
});
/**
 * PersonaPresence with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
export var PersonaPresenceBase = React.forwardRef(function (props, forwardedRef) {
    var coinSize = props.coinSize, isOutOfOffice = props.isOutOfOffice, styles = props.styles, // Use getStyles from props.
    presence = props.presence, theme = props.theme, presenceTitle = props.presenceTitle, presenceColors = props.presenceColors;
    var rootRef = React.useRef(null);
    var mergedRootRef = useMergedRefs(forwardedRef, rootRef);
    var size = sizeBoolean(props.size);
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
    if (presence === PersonaPresenceEnum.none) {
        return null;
    }
    return (React.createElement("div", { role: "presentation", className: classNames.presence, style: coinSizeWithPresenceStyle, title: presenceTitle, ref: mergedRootRef }, renderIcon && (React.createElement(Icon, { className: classNames.presenceIcon, iconName: determineIcon(props.presence, props.isOutOfOffice), style: coinSizeWithPresenceIconStyle }))));
});
PersonaPresenceBase.displayName = 'PersonaPresenceBase';
function determineIcon(presence, isOutOfOffice) {
    if (!presence) {
        return undefined;
    }
    var oofIcon = 'SkypeArrow';
    switch (PersonaPresenceEnum[presence]) {
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
//# sourceMappingURL=PersonaPresence.base.js.map