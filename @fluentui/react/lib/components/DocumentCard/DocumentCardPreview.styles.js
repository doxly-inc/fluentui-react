import { getFocusStyle, getGlobalClassNames, HighContrastSelector } from '../../Styling';
import { IsFocusVisibleClassName } from '../../Utilities';
export var DocumentCardPreviewGlobalClassNames = {
    root: 'ms-DocumentCardPreview',
    icon: 'ms-DocumentCardPreview-icon',
    iconContainer: 'ms-DocumentCardPreview-iconContainer',
};
export var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, isFileList = props.isFileList;
    var palette = theme.palette, fonts = theme.fonts;
    var classNames = getGlobalClassNames(DocumentCardPreviewGlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            fonts.small,
            {
                backgroundColor: isFileList ? palette.white : palette.neutralLighterAlt,
                borderBottom: "1px solid " + palette.neutralLight,
                overflow: "hidden",
                position: 'relative',
            },
            className,
        ],
        previewIcon: [
            classNames.iconContainer,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            },
        ],
        icon: [
            classNames.icon,
            {
                left: '10px',
                bottom: '10px',
                position: 'absolute',
            },
        ],
        fileList: {
            padding: '16px 16px 0 16px',
            listStyleType: 'none',
            margin: 0,
            selectors: {
                li: {
                    height: '16px',
                    lineHeight: '16px',
                    marginBottom: '8px',
                    overflow: 'hidden',
                },
            },
        },
        fileListIcon: {
            display: 'inline-block',
            marginRight: '8px',
        },
        fileListLink: [
            getFocusStyle(theme, {
                highContrastStyle: {
                    border: '1px solid WindowText',
                    outline: 'none',
                },
            }),
            {
                boxSizing: 'border-box',
                color: palette.neutralDark,
                overflow: 'hidden',
                display: 'inline-block',
                textDecoration: 'none',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: 'calc(100% - 24px)',
                selectors: (_a = {
                        ':hover': {
                            color: palette.themePrimary,
                        }
                    },
                    _a["." + IsFocusVisibleClassName + " &:focus"] = {
                        selectors: (_b = {},
                            _b[HighContrastSelector] = {
                                outline: 'none',
                            },
                            _b),
                    },
                    _a),
            },
        ],
        fileListOverflowText: {
            padding: '0px 16px 8px 16px',
            display: 'block',
        },
    };
};
//# sourceMappingURL=DocumentCardPreview.styles.js.map