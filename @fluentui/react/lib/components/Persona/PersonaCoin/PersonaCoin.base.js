import { __assign } from "tslib";
import * as React from 'react';
import { classNamesFunction, divProperties, memoizeFunction, getInitials, getNativeProps, getRTL, getPropsWithDefaults, } from '../../../Utilities';
import { mergeStyles } from '../../../Styling';
import { PersonaPresence } from '../PersonaPresence/index';
import { Icon } from '../../../Icon';
import { Image, ImageFit, ImageLoadState } from '../../../Image';
import { PersonaPresence as PersonaPresenceEnum, PersonaSize, } from '../Persona.types';
import { getPersonaInitialsColor } from '../PersonaInitialsColor';
import { sizeToPixels } from '../PersonaConsts';
import { useWarnings } from '@fluentui/react-hooks';
var getClassNames = classNamesFunction({
    // There can be many PersonaCoin rendered with different sizes.
    // Therefore setting a larger cache size.
    cacheSize: 100,
});
var getInitialsStyles = memoizeFunction(function (className, initialsColor, initialsTextColor, text, primaryText, showUnknownPersonaCoin) {
    return mergeStyles(className, !showUnknownPersonaCoin && {
        backgroundColor: getPersonaInitialsColor({ text: text, initialsColor: initialsColor, primaryText: primaryText }),
        color: initialsTextColor,
    });
});
var DEFAULT_PROPS = {
    size: PersonaSize.size48,
    presence: PersonaPresenceEnum.none,
    imageAlt: '',
};
function useDebugWarnings(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        useWarnings({
            name: 'PersonaCoin',
            props: props,
            deprecations: { primaryText: 'text' },
        });
    }
}
function useImageLoadState(_a) {
    var onPhotoLoadingStateChange = _a.onPhotoLoadingStateChange, imageUrl = _a.imageUrl;
    var _b = React.useState(ImageLoadState.notLoaded), imageLoadState = _b[0], setImageLoadstate = _b[1];
    React.useEffect(function () {
        setImageLoadstate(ImageLoadState.notLoaded);
    }, [imageUrl]);
    var onLoadingStateChange = function (loadState) {
        var _a;
        setImageLoadstate(loadState);
        (_a = onPhotoLoadingStateChange) === null || _a === void 0 ? void 0 : _a(loadState);
    };
    return [imageLoadState, onLoadingStateChange];
}
/**
 * PersonaCoin with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
export var PersonaCoinBase = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
    var props = getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
    useDebugWarnings(props);
    var _a = useImageLoadState(props), imageLoadState = _a[0], onLoadingStateChange = _a[1];
    var renderCoin = getCoinRenderer(onLoadingStateChange);
    var className = props.className, coinProps = props.coinProps, showUnknownPersonaCoin = props.showUnknownPersonaCoin, coinSize = props.coinSize, styles = props.styles, imageUrl = props.imageUrl, initialsColor = props.initialsColor, initialsTextColor = props.initialsTextColor, isOutOfOffice = props.isOutOfOffice, 
    // eslint-disable-next-line deprecation/deprecation
    _b = props.onRenderCoin, 
    // eslint-disable-next-line deprecation/deprecation
    onRenderCoin = _b === void 0 ? renderCoin : _b, 
    // eslint-disable-next-line deprecation/deprecation
    _c = props.onRenderPersonaCoin, 
    // eslint-disable-next-line deprecation/deprecation
    onRenderPersonaCoin = _c === void 0 ? onRenderCoin : _c, _d = props.onRenderInitials, onRenderInitials = _d === void 0 ? renderPersonaCoinInitials : _d, presence = props.presence, presenceTitle = props.presenceTitle, presenceColors = props.presenceColors, 
    // eslint-disable-next-line deprecation/deprecation
    primaryText = props.primaryText, showInitialsUntilImageLoads = props.showInitialsUntilImageLoads, text = props.text, theme = props.theme, size = props.size;
    var divProps = getNativeProps(props, divProperties);
    var divCoinProps = getNativeProps(coinProps || {}, divProperties);
    var coinSizeStyle = coinSize ? { width: coinSize, height: coinSize } : undefined;
    var hideImage = showUnknownPersonaCoin;
    var personaPresenceProps = {
        coinSize: coinSize,
        isOutOfOffice: isOutOfOffice,
        presence: presence,
        presenceTitle: presenceTitle,
        presenceColors: presenceColors,
        size: size,
        theme: theme,
    };
    // Use getStyles from props, or fall back to getStyles from styles file.
    var classNames = getClassNames(styles, {
        theme: theme,
        className: coinProps && coinProps.className ? coinProps.className : className,
        size: size,
        coinSize: coinSize,
        showUnknownPersonaCoin: showUnknownPersonaCoin,
    });
    var shouldRenderInitials = Boolean(imageLoadState !== ImageLoadState.loaded &&
        ((showInitialsUntilImageLoads && imageUrl) || !imageUrl || imageLoadState === ImageLoadState.error || hideImage));
    return (React.createElement("div", __assign({ role: "presentation" }, divProps, { className: classNames.coin, ref: forwardedRef }),
        // eslint-disable-next-line deprecation/deprecation
        size !== PersonaSize.size8 && size !== PersonaSize.size10 && size !== PersonaSize.tiny ? (React.createElement("div", __assign({ role: "presentation" }, divCoinProps, { className: classNames.imageArea, style: coinSizeStyle }),
            shouldRenderInitials && (React.createElement("div", { className: getInitialsStyles(classNames.initials, initialsColor, initialsTextColor, text, primaryText, showUnknownPersonaCoin), style: coinSizeStyle, "aria-hidden": "true" }, onRenderInitials(props, renderPersonaCoinInitials))),
            !hideImage && onRenderPersonaCoin(props, renderCoin),
            React.createElement(PersonaPresence, __assign({}, personaPresenceProps)))) : // Otherwise, render just PersonaPresence.
            props.presence ? (React.createElement(PersonaPresence, __assign({}, personaPresenceProps))) : (
            // Just render Contact Icon if there isn't a Presence prop.
            React.createElement(Icon, { iconName: "Contact", className: classNames.size10WithoutPresenceIcon })),
        props.children));
});
PersonaCoinBase.displayName = 'PersonaCoinBase';
var getCoinRenderer = function (onLoadingStateChange) { return function (_a) {
    var coinSize = _a.coinSize, styles = _a.styles, imageUrl = _a.imageUrl, imageAlt = _a.imageAlt, imageShouldFadeIn = _a.imageShouldFadeIn, imageShouldStartVisible = _a.imageShouldStartVisible, theme = _a.theme, showUnknownPersonaCoin = _a.showUnknownPersonaCoin, _b = _a.size, size = _b === void 0 ? DEFAULT_PROPS.size : _b;
    // Render the Image component only if an image URL is provided
    if (!imageUrl) {
        return null;
    }
    var classNames = getClassNames(styles, {
        theme: theme,
        size: size,
        showUnknownPersonaCoin: showUnknownPersonaCoin,
    });
    var dimension = coinSize || sizeToPixels[size];
    return (React.createElement(Image, { className: classNames.image, imageFit: ImageFit.cover, src: imageUrl, width: dimension, height: dimension, alt: imageAlt, shouldFadeIn: imageShouldFadeIn, shouldStartVisible: imageShouldStartVisible, onLoadingStateChange: onLoadingStateChange }));
}; };
var renderPersonaCoinInitials = function (_a) {
    var imageInitials = _a.imageInitials, allowPhoneInitials = _a.allowPhoneInitials, showUnknownPersonaCoin = _a.showUnknownPersonaCoin, text = _a.text, 
    // eslint-disable-next-line deprecation/deprecation
    primaryText = _a.primaryText, theme = _a.theme;
    if (showUnknownPersonaCoin) {
        return React.createElement(Icon, { iconName: "Help" });
    }
    var isRTL = getRTL(theme);
    imageInitials = imageInitials || getInitials(text || primaryText || '', isRTL, allowPhoneInitials);
    return imageInitials !== '' ? React.createElement("span", null, imageInitials) : React.createElement(Icon, { iconName: "Contact" });
};
//# sourceMappingURL=PersonaCoin.base.js.map