"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../Styling");
var Utilities_1 = require("../../Utilities");
var DocumentCardPreview_styles_1 = require("./DocumentCardPreview.styles");
var DocumentCardActivity_styles_1 = require("./DocumentCardActivity.styles");
var DocumentCardTitle_styles_1 = require("./DocumentCardTitle.styles");
var DocumentCardLocation_styles_1 = require("./DocumentCardLocation.styles");
var GlobalClassNames = {
    root: 'ms-DocumentCard',
    rootActionable: 'ms-DocumentCard--actionable',
    rootCompact: 'ms-DocumentCard--compact',
};
exports.getStyles = function (props) {
    var _a, _b;
    var className = props.className, theme = props.theme, actionable = props.actionable, compact = props.compact;
    var palette = theme.palette, fonts = theme.fonts, effects = theme.effects;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                WebkitFontSmoothing: 'antialiased',
                backgroundColor: palette.white,
                border: "1px solid " + palette.neutralLight,
                maxWidth: '320px',
                minWidth: '206px',
                userSelect: 'none',
                position: 'relative',
                selectors: (_a = {
                        ':focus': {
                            outline: '0px solid',
                        }
                    },
                    _a["." + Utilities_1.IsFocusVisibleClassName + " &:focus"] = Styling_1.getInputFocusStyle(palette.neutralSecondary, effects.roundedCorner2),
                    _a["." + DocumentCardLocation_styles_1.DocumentCardLocationGlobalClassNames.root + " + ." + DocumentCardTitle_styles_1.DocumentCardTitleGlobalClassNames.root] = {
                        paddingTop: '4px',
                    },
                    _a),
            },
            actionable && [
                classNames.rootActionable,
                {
                    selectors: {
                        ':hover': {
                            cursor: 'pointer',
                            borderColor: palette.neutralTertiaryAlt,
                        },
                        ':hover:after': {
                            content: '" "',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            border: "1px solid " + palette.neutralTertiaryAlt,
                            pointerEvents: 'none',
                        },
                    },
                },
            ],
            compact && [
                classNames.rootCompact,
                {
                    display: 'flex',
                    maxWidth: '480px',
                    height: '108px',
                    selectors: (_b = {},
                        _b["." + DocumentCardPreview_styles_1.DocumentCardPreviewGlobalClassNames.root] = {
                            borderRight: "1px solid " + palette.neutralLight,
                            borderBottom: 0,
                            maxHeight: '106px',
                            maxWidth: '144px',
                        },
                        _b["." + DocumentCardPreview_styles_1.DocumentCardPreviewGlobalClassNames.icon] = {
                            maxHeight: '32px',
                            maxWidth: '32px',
                        },
                        _b["." + DocumentCardActivity_styles_1.DocumentCardActivityGlobalClassNames.root] = {
                            paddingBottom: '12px',
                        },
                        _b["." + DocumentCardTitle_styles_1.DocumentCardTitleGlobalClassNames.root] = {
                            paddingBottom: '12px 16px 8px 16px',
                            fontSize: fonts.mediumPlus.fontSize,
                            lineHeight: '16px',
                        },
                        _b),
                },
            ],
            className,
        ],
    };
};
//# sourceMappingURL=DocumentCard.styles.js.map