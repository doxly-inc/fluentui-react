"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../Styling");
var PersonaConsts_1 = require("./PersonaConsts");
var GlobalClassNames = {
    root: 'ms-Persona',
    size8: 'ms-Persona--size8',
    size10: 'ms-Persona--size10',
    size16: 'ms-Persona--size16',
    size24: 'ms-Persona--size24',
    size28: 'ms-Persona--size28',
    size32: 'ms-Persona--size32',
    size40: 'ms-Persona--size40',
    size48: 'ms-Persona--size48',
    size56: 'ms-Persona--size56',
    size72: 'ms-Persona--size72',
    size100: 'ms-Persona--size100',
    size120: 'ms-Persona--size120',
    available: 'ms-Persona--online',
    away: 'ms-Persona--away',
    blocked: 'ms-Persona--blocked',
    busy: 'ms-Persona--busy',
    doNotDisturb: 'ms-Persona--donotdisturb',
    offline: 'ms-Persona--offline',
    details: 'ms-Persona-details',
    primaryText: 'ms-Persona-primaryText',
    secondaryText: 'ms-Persona-secondaryText',
    tertiaryText: 'ms-Persona-tertiaryText',
    optionalText: 'ms-Persona-optionalText',
    textContent: 'ms-Persona-textContent',
};
exports.getStyles = function (props) {
    var className = props.className, showSecondaryText = props.showSecondaryText, theme = props.theme;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var size = PersonaConsts_1.sizeBoolean(props.size);
    var presence = PersonaConsts_1.presenceBoolean(props.presence);
    var showSecondaryTextDefaultHeight = '16px';
    var sharedTextStyles = {
        color: semanticColors.bodySubtext,
        fontWeight: Styling_1.FontWeights.regular,
        fontSize: fonts.small.fontSize,
    };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            Styling_1.normalize,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                height: PersonaConsts_1.personaSize.size48,
                minWidth: PersonaConsts_1.personaSize.size48,
                display: 'flex',
                alignItems: 'center',
                selectors: {
                    '.contextualHost': {
                        display: 'none',
                    },
                },
            },
            size.isSize8 && [
                classNames.size8,
                {
                    height: PersonaConsts_1.personaSize.size8,
                    minWidth: PersonaConsts_1.personaSize.size8,
                },
            ],
            // TODO: Deprecated size and needs to be removed in a future major release.
            size.isSize10 && [
                classNames.size10,
                {
                    height: PersonaConsts_1.personaSize.size10,
                    minWidth: PersonaConsts_1.personaSize.size10,
                },
            ],
            // TODO: Deprecated size and needs to be removed in a future major release.
            size.isSize16 && [
                classNames.size16,
                {
                    height: PersonaConsts_1.personaSize.size16,
                    minWidth: PersonaConsts_1.personaSize.size16,
                },
            ],
            size.isSize24 && [
                classNames.size24,
                {
                    height: PersonaConsts_1.personaSize.size24,
                    minWidth: PersonaConsts_1.personaSize.size24,
                },
            ],
            size.isSize24 &&
                showSecondaryText && {
                height: '36px',
            },
            // TODO: Deprecated size and needs to be removed in a future major release.
            size.isSize28 && [
                classNames.size28,
                {
                    height: PersonaConsts_1.personaSize.size28,
                    minWidth: PersonaConsts_1.personaSize.size28,
                },
            ],
            size.isSize28 &&
                showSecondaryText && {
                height: '32px',
            },
            size.isSize32 && [
                classNames.size32,
                {
                    height: PersonaConsts_1.personaSize.size32,
                    minWidth: PersonaConsts_1.personaSize.size32,
                },
            ],
            size.isSize40 && [
                classNames.size40,
                {
                    height: PersonaConsts_1.personaSize.size40,
                    minWidth: PersonaConsts_1.personaSize.size40,
                },
            ],
            size.isSize48 && classNames.size48,
            size.isSize56 && [
                classNames.size56,
                {
                    height: PersonaConsts_1.personaSize.size56,
                    minWidth: PersonaConsts_1.personaSize.size56,
                },
            ],
            size.isSize72 && [
                classNames.size72,
                {
                    height: PersonaConsts_1.personaSize.size72,
                    minWidth: PersonaConsts_1.personaSize.size72,
                },
            ],
            size.isSize100 && [
                classNames.size100,
                {
                    height: PersonaConsts_1.personaSize.size100,
                    minWidth: PersonaConsts_1.personaSize.size100,
                },
            ],
            size.isSize120 && [
                classNames.size120,
                {
                    height: PersonaConsts_1.personaSize.size120,
                    minWidth: PersonaConsts_1.personaSize.size120,
                },
            ],
            /**
             * Modifiers: presence
             */
            presence.isAvailable && classNames.available,
            presence.isAway && classNames.away,
            presence.isBlocked && classNames.blocked,
            presence.isBusy && classNames.busy,
            presence.isDoNotDisturb && classNames.doNotDisturb,
            presence.isOffline && classNames.offline,
            className,
        ],
        details: [
            classNames.details,
            {
                padding: '0 24px 0 16px',
                minWidth: 0,
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            },
            (size.isSize8 || size.isSize10) && {
                paddingLeft: 17,
            },
            (size.isSize24 || size.isSize28 || size.isSize32) && {
                padding: '0 8px',
            },
            (size.isSize40 || size.isSize48) && {
                padding: '0 12px',
            },
        ],
        primaryText: [
            classNames.primaryText,
            Styling_1.noWrap,
            {
                color: semanticColors.bodyText,
                fontWeight: Styling_1.FontWeights.regular,
                fontSize: fonts.medium.fontSize,
                selectors: {
                    ':hover': {
                        color: semanticColors.inputTextHovered,
                    },
                },
            },
            showSecondaryText && {
                height: showSecondaryTextDefaultHeight,
                lineHeight: showSecondaryTextDefaultHeight,
                overflowX: 'hidden',
            },
            (size.isSize8 || size.isSize10) && {
                fontSize: fonts.small.fontSize,
                lineHeight: PersonaConsts_1.personaSize.size8,
            },
            size.isSize16 && {
                lineHeight: PersonaConsts_1.personaSize.size28,
            },
            (size.isSize24 || size.isSize28 || size.isSize32 || size.isSize40 || size.isSize48) &&
                showSecondaryText && {
                height: 18,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) && {
                fontSize: fonts.xLarge.fontSize,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) &&
                showSecondaryText && {
                height: 22,
            },
        ],
        secondaryText: [
            classNames.secondaryText,
            Styling_1.noWrap,
            sharedTextStyles,
            (size.isSize8 || size.isSize10 || size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32) && {
                display: 'none',
            },
            showSecondaryText && {
                display: 'block',
                height: showSecondaryTextDefaultHeight,
                lineHeight: showSecondaryTextDefaultHeight,
                overflowX: 'hidden',
            },
            size.isSize24 &&
                showSecondaryText && {
                height: 18,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) && {
                fontSize: fonts.medium.fontSize,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) &&
                showSecondaryText && {
                height: 18,
            },
        ],
        tertiaryText: [
            classNames.tertiaryText,
            Styling_1.noWrap,
            sharedTextStyles,
            {
                display: 'none',
                fontSize: fonts.medium.fontSize,
            },
            (size.isSize72 || size.isSize100 || size.isSize120) && {
                display: 'block',
            },
        ],
        optionalText: [
            classNames.optionalText,
            Styling_1.noWrap,
            sharedTextStyles,
            {
                display: 'none',
                fontSize: fonts.medium.fontSize,
            },
            (size.isSize100 || size.isSize120) && {
                display: 'block',
            },
        ],
        textContent: [classNames.textContent, Styling_1.noWrap],
    };
};
//# sourceMappingURL=Persona.styles.js.map