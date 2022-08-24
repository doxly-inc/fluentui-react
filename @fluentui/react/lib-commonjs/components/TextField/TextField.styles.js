"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Styling_1 = require("../../Styling");
var globalClassNames = {
    root: 'ms-TextField',
    description: 'ms-TextField-description',
    errorMessage: 'ms-TextField-errorMessage',
    field: 'ms-TextField-field',
    fieldGroup: 'ms-TextField-fieldGroup',
    prefix: 'ms-TextField-prefix',
    suffix: 'ms-TextField-suffix',
    wrapper: 'ms-TextField-wrapper',
    revealButton: 'ms-TextField-reveal',
    multiline: 'ms-TextField--multiline',
    borderless: 'ms-TextField--borderless',
    underlined: 'ms-TextField--underlined',
    unresizable: 'ms-TextField--unresizable',
    required: 'is-required',
    disabled: 'is-disabled',
    active: 'is-active',
};
function getLabelStyles(props) {
    var underlined = props.underlined, disabled = props.disabled, focused = props.focused, theme = props.theme;
    var palette = theme.palette, fonts = theme.fonts;
    return function () {
        var _a;
        return ({
            root: [
                underlined &&
                    disabled && {
                    color: palette.neutralTertiary,
                },
                underlined && {
                    fontSize: fonts.medium.fontSize,
                    marginRight: 8,
                    paddingLeft: 12,
                    paddingRight: 0,
                    lineHeight: '22px',
                    height: 32,
                },
                underlined &&
                    focused && {
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            height: 31,
                        },
                        _a),
                },
            ],
        });
    };
}
function getStyles(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var theme = props.theme, className = props.className, disabled = props.disabled, focused = props.focused, required = props.required, multiline = props.multiline, hasLabel = props.hasLabel, borderless = props.borderless, underlined = props.underlined, hasIcon = props.hasIcon, resizable = props.resizable, hasErrorMessage = props.hasErrorMessage, inputClassName = props.inputClassName, autoAdjustHeight = props.autoAdjustHeight, hasRevealButton = props.hasRevealButton;
    var semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var classNames = Styling_1.getGlobalClassNames(globalClassNames, theme);
    var fieldPrefixSuffix = {
        // Suffix/Prefix are not editable so the disabled slot perfectly fits.
        background: semanticColors.disabledBackground,
        color: !disabled ? semanticColors.inputPlaceholderText : semanticColors.disabledText,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        selectors: (_a = {},
            _a[Styling_1.HighContrastSelector] = {
                background: 'Window',
                color: disabled ? 'GrayText' : 'WindowText',
            },
            _a),
    };
    // placeholder style constants
    var placeholderStyles = [
        fonts.medium,
        {
            color: semanticColors.inputPlaceholderText,
            opacity: 1,
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    color: 'GrayText',
                },
                _b),
        },
    ];
    var disabledPlaceholderStyles = {
        color: semanticColors.disabledText,
        selectors: (_c = {},
            _c[Styling_1.HighContrastSelector] = {
                color: 'GrayText',
            },
            _c),
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            required && classNames.required,
            disabled && classNames.disabled,
            focused && classNames.active,
            multiline && classNames.multiline,
            borderless && classNames.borderless,
            underlined && classNames.underlined,
            Styling_1.normalize,
            {
                position: 'relative',
            },
            className,
        ],
        wrapper: [
            classNames.wrapper,
            underlined && [
                {
                    display: 'flex',
                    borderBottom: "1px solid " + (!hasErrorMessage ? semanticColors.inputBorder : semanticColors.errorText),
                    width: '100%',
                },
                disabled && {
                    borderBottomColor: semanticColors.disabledBackground,
                    selectors: (_d = {},
                        _d[Styling_1.HighContrastSelector] = tslib_1.__assign({ borderColor: 'GrayText' }, Styling_1.getHighContrastNoAdjustStyle()),
                        _d),
                },
                !disabled && {
                    selectors: {
                        ':hover': {
                            borderBottomColor: !hasErrorMessage ? semanticColors.inputBorderHovered : semanticColors.errorText,
                            selectors: (_e = {},
                                _e[Styling_1.HighContrastSelector] = tslib_1.__assign({ borderBottomColor: 'Highlight' }, Styling_1.getHighContrastNoAdjustStyle()),
                                _e),
                        },
                    },
                },
                focused && [
                    {
                        position: 'relative',
                    },
                    Styling_1.getInputFocusStyle(!hasErrorMessage ? semanticColors.inputFocusBorderAlt : semanticColors.errorText, 0, 'borderBottom'),
                ],
            ],
        ],
        fieldGroup: [
            classNames.fieldGroup,
            Styling_1.normalize,
            {
                border: "1px solid " + semanticColors.inputBorder,
                borderRadius: effects.roundedCorner2,
                background: semanticColors.inputBackground,
                cursor: 'text',
                height: 32,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                position: 'relative',
            },
            multiline && {
                minHeight: '60px',
                height: 'auto',
                display: 'flex',
            },
            !focused &&
                !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: semanticColors.inputBorderHovered,
                        selectors: (_f = {},
                            _f[Styling_1.HighContrastSelector] = tslib_1.__assign({ borderColor: 'Highlight' }, Styling_1.getHighContrastNoAdjustStyle()),
                            _f),
                    },
                },
            },
            focused &&
                !underlined &&
                Styling_1.getInputFocusStyle(!hasErrorMessage ? semanticColors.inputFocusBorderAlt : semanticColors.errorText, effects.roundedCorner2),
            disabled && {
                borderColor: semanticColors.disabledBackground,
                selectors: (_g = {},
                    _g[Styling_1.HighContrastSelector] = tslib_1.__assign({ borderColor: 'GrayText' }, Styling_1.getHighContrastNoAdjustStyle()),
                    _g),
                cursor: 'default',
            },
            borderless && {
                border: 'none',
            },
            borderless &&
                focused && {
                border: 'none',
                selectors: {
                    ':after': {
                        border: 'none',
                    },
                },
            },
            underlined && {
                flex: '1 1 0px',
                border: 'none',
                textAlign: 'left',
            },
            underlined &&
                disabled && {
                backgroundColor: 'transparent',
            },
            hasErrorMessage &&
                !underlined && {
                borderColor: semanticColors.errorText,
                selectors: {
                    '&:hover': {
                        borderColor: semanticColors.errorText,
                    },
                },
            },
            !hasLabel &&
                required && {
                selectors: (_h = {
                        ':before': {
                            content: "'*'",
                            color: semanticColors.errorText,
                            position: 'absolute',
                            top: -5,
                            right: -10,
                        }
                    },
                    _h[Styling_1.HighContrastSelector] = {
                        selectors: {
                            ':before': {
                                color: 'WindowText',
                                right: -14,
                            },
                        },
                    },
                    _h),
            },
        ],
        field: [
            fonts.medium,
            classNames.field,
            Styling_1.normalize,
            {
                borderRadius: 0,
                border: 'none',
                background: 'none',
                backgroundColor: 'transparent',
                color: semanticColors.inputText,
                padding: '0 8px',
                width: '100%',
                minWidth: 0,
                textOverflow: 'ellipsis',
                outline: 0,
                selectors: (_j = {
                        '&:active, &:focus, &:hover': { outline: 0 },
                        '::-ms-clear': {
                            display: 'none',
                        }
                    },
                    _j[Styling_1.HighContrastSelector] = {
                        background: 'Window',
                        color: disabled ? 'GrayText' : 'WindowText',
                    },
                    _j),
            },
            Styling_1.getPlaceholderStyles(placeholderStyles),
            multiline &&
                !resizable && [
                classNames.unresizable,
                {
                    resize: 'none',
                },
            ],
            multiline && {
                minHeight: 'inherit',
                lineHeight: 17,
                flexGrow: 1,
                paddingTop: 6,
                paddingBottom: 6,
                overflow: 'auto',
                width: '100%',
            },
            multiline &&
                autoAdjustHeight && {
                overflow: 'hidden',
            },
            hasIcon &&
                !hasRevealButton && {
                paddingRight: 24,
            },
            multiline &&
                hasIcon && {
                paddingRight: 40,
            },
            disabled && [
                {
                    backgroundColor: semanticColors.disabledBackground,
                    color: semanticColors.disabledText,
                    borderColor: semanticColors.disabledBackground,
                },
                Styling_1.getPlaceholderStyles(disabledPlaceholderStyles),
            ],
            underlined && {
                textAlign: 'left',
            },
            focused &&
                !borderless && {
                selectors: (_k = {},
                    _k[Styling_1.HighContrastSelector] = {
                        paddingLeft: 11,
                        paddingRight: 11,
                    },
                    _k),
            },
            focused &&
                multiline &&
                !borderless && {
                selectors: (_l = {},
                    _l[Styling_1.HighContrastSelector] = {
                        paddingTop: 4,
                    },
                    _l),
            },
            inputClassName,
        ],
        icon: [
            multiline && {
                paddingRight: 24,
                alignItems: 'flex-end',
            },
            {
                pointerEvents: 'none',
                position: 'absolute',
                bottom: 6,
                right: 8,
                top: 'auto',
                fontSize: Styling_1.IconFontSizes.medium,
                lineHeight: 18,
            },
            disabled && {
                color: semanticColors.disabledText,
            },
        ],
        description: [
            classNames.description,
            {
                color: semanticColors.bodySubtext,
                fontSize: fonts.xSmall.fontSize,
            },
        ],
        errorMessage: [
            classNames.errorMessage,
            Styling_1.AnimationClassNames.slideDownIn20,
            fonts.small,
            {
                color: semanticColors.errorText,
                margin: 0,
                paddingTop: 5,
                display: 'flex',
                alignItems: 'center',
            },
        ],
        prefix: [classNames.prefix, fieldPrefixSuffix],
        suffix: [classNames.suffix, fieldPrefixSuffix],
        revealButton: [
            classNames.revealButton,
            'ms-Button',
            'ms-Button--icon',
            {
                height: 30,
                width: 32,
                border: 'none',
                padding: '0px 4px',
                backgroundColor: 'transparent',
                color: semanticColors.link,
                selectors: {
                    ':hover': {
                        outline: 0,
                        color: semanticColors.primaryButtonBackgroundHovered,
                        backgroundColor: semanticColors.buttonBackgroundHovered,
                        selectors: (_m = {},
                            _m[Styling_1.HighContrastSelector] = {
                                borderColor: 'Highlight',
                                color: 'Highlight',
                            },
                            _m),
                    },
                    ':focus': { outline: 0 },
                },
            },
            hasIcon && {
                marginRight: 28,
            },
        ],
        revealSpan: {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
        },
        revealIcon: {
            margin: '0px 4px',
            pointerEvents: 'none',
            bottom: 6,
            right: 8,
            top: 'auto',
            fontSize: Styling_1.IconFontSizes.medium,
            lineHeight: 18,
        },
        subComponentStyles: {
            label: getLabelStyles(props),
        },
    };
}
exports.getStyles = getStyles;
//# sourceMappingURL=TextField.styles.js.map