"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Tooltip_1 = require("../../Tooltip");
var PersonaCoin_1 = require("./PersonaCoin/PersonaCoin");
var Persona_types_1 = require("./Persona.types");
var react_hooks_1 = require("@fluentui/react-hooks");
var DirectionalHint_1 = require("../../common/DirectionalHint");
var getClassNames = Utilities_1.classNamesFunction();
var DEFAULT_PROPS = {
    size: Persona_types_1.PersonaSize.size48,
    presence: Persona_types_1.PersonaPresence.none,
    imageAlt: '',
};
function useDebugWarnings(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        react_hooks_1.useWarnings({
            name: 'Persona',
            props: props,
            deprecations: { primaryText: 'text' },
        });
    }
}
/**
 * Persona with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
exports.PersonaBase = React.forwardRef(function (propsWithoutDefaults, forwardedRef) {
    var props = Utilities_1.getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);
    useDebugWarnings(props);
    var rootRef = React.useRef(null);
    var mergedRootRef = react_hooks_1.useMergedRefs(forwardedRef, rootRef);
    /**
     * Deprecation helper for getting text.
     */
    var getText = function () {
        // eslint-disable-next-line deprecation/deprecation
        return props.text || props.primaryText || '';
    };
    /**
     * Renders various types of Text (primaryText, secondaryText, etc)
     * based on the classNames passed
     * @param elementClassNames - element className
     * @param renderFunction - render function
     * @param defaultRenderFunction - default render function
     */
    var renderElement = function (elementClassNames, renderFunction, defaultRenderFunction) {
        return (React.createElement("div", { dir: "auto", className: elementClassNames }, renderFunction && renderFunction(props, defaultRenderFunction)));
    };
    /**
     * using closure to wrap the default render behavior
     * to make it independent of the type of text passed
     * @param text - text to render
     */
    var onRenderText = function (text) {
        // return default render behavior for valid text or undefined
        return text
            ? function () {
                // default onRender behavior
                return (React.createElement(Tooltip_1.TooltipHost, { content: text, overflowMode: Tooltip_1.TooltipOverflowMode.Parent, directionalHint: DirectionalHint_1.DirectionalHint.topLeftEdge }, text));
            }
            : undefined;
    };
    var onInternalRenderPersonaCoin = function (providedCoinProps) {
        return React.createElement(PersonaCoin_1.PersonaCoin, tslib_1.__assign({}, providedCoinProps));
    };
    // wrapping default render behavior based on various props properties
    var onInternalRenderPrimaryText = onRenderText(getText());
    var onInternalRenderSecondaryText = onRenderText(props.secondaryText);
    var onInternalRenderTertiaryText = onRenderText(props.tertiaryText);
    var onInternalRenderOptionalText = onRenderText(props.optionalText);
    var hidePersonaDetails = props.hidePersonaDetails, _a = props.onRenderOptionalText, onRenderOptionalText = _a === void 0 ? onInternalRenderOptionalText : _a, _b = props.onRenderPrimaryText, onRenderPrimaryText = _b === void 0 ? onInternalRenderPrimaryText : _b, _c = props.onRenderSecondaryText, onRenderSecondaryText = _c === void 0 ? onInternalRenderSecondaryText : _c, _d = props.onRenderTertiaryText, onRenderTertiaryText = _d === void 0 ? onInternalRenderTertiaryText : _d, _e = props.onRenderPersonaCoin, onRenderPersonaCoin = _e === void 0 ? onInternalRenderPersonaCoin : _e;
    var size = props.size;
    // These properties are to be explicitly passed into PersonaCoin because they are the only props directly used
    var allowPhoneInitials = props.allowPhoneInitials, className = props.className, coinProps = props.coinProps, showUnknownPersonaCoin = props.showUnknownPersonaCoin, coinSize = props.coinSize, styles = props.styles, imageAlt = props.imageAlt, imageInitials = props.imageInitials, imageShouldFadeIn = props.imageShouldFadeIn, imageShouldStartVisible = props.imageShouldStartVisible, imageUrl = props.imageUrl, initialsColor = props.initialsColor, initialsTextColor = props.initialsTextColor, isOutOfOffice = props.isOutOfOffice, onPhotoLoadingStateChange = props.onPhotoLoadingStateChange, 
    // eslint-disable-next-line deprecation/deprecation
    onRenderCoin = props.onRenderCoin, onRenderInitials = props.onRenderInitials, presence = props.presence, presenceTitle = props.presenceTitle, presenceColors = props.presenceColors, showInitialsUntilImageLoads = props.showInitialsUntilImageLoads, showSecondaryText = props.showSecondaryText, theme = props.theme;
    var personaCoinProps = tslib_1.__assign({ allowPhoneInitials: allowPhoneInitials,
        showUnknownPersonaCoin: showUnknownPersonaCoin,
        coinSize: coinSize,
        imageAlt: imageAlt,
        imageInitials: imageInitials,
        imageShouldFadeIn: imageShouldFadeIn,
        imageShouldStartVisible: imageShouldStartVisible,
        imageUrl: imageUrl,
        initialsColor: initialsColor,
        initialsTextColor: initialsTextColor,
        onPhotoLoadingStateChange: onPhotoLoadingStateChange,
        onRenderCoin: onRenderCoin,
        onRenderInitials: onRenderInitials,
        presence: presence,
        presenceTitle: presenceTitle,
        showInitialsUntilImageLoads: showInitialsUntilImageLoads,
        size: size, text: getText(), isOutOfOffice: isOutOfOffice,
        presenceColors: presenceColors }, coinProps);
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        showSecondaryText: showSecondaryText,
        presence: presence,
        size: size,
    });
    var divProps = Utilities_1.getNativeProps(props, Utilities_1.divProperties);
    var personaDetails = (React.createElement("div", { className: classNames.details },
        renderElement(classNames.primaryText, onRenderPrimaryText, onInternalRenderPrimaryText),
        renderElement(classNames.secondaryText, onRenderSecondaryText, onInternalRenderSecondaryText),
        renderElement(classNames.tertiaryText, onRenderTertiaryText, onInternalRenderTertiaryText),
        renderElement(classNames.optionalText, onRenderOptionalText, onInternalRenderOptionalText),
        props.children));
    return (React.createElement("div", tslib_1.__assign({}, divProps, { ref: mergedRootRef, className: classNames.root, style: coinSize ? { height: coinSize, minWidth: coinSize } : undefined }),
        onRenderPersonaCoin(personaCoinProps, onRenderPersonaCoin),
        (!hidePersonaDetails ||
            size === Persona_types_1.PersonaSize.size8 ||
            size === Persona_types_1.PersonaSize.size10 ||
            size === Persona_types_1.PersonaSize.tiny) &&
            personaDetails
    /* eslint-enable deprecation/deprecation */
    ));
});
exports.PersonaBase.displayName = 'PersonaBase';
//# sourceMappingURL=Persona.base.js.map