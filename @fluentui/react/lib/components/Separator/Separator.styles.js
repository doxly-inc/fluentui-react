import { HighContrastSelector } from '../../Styling';
export var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, alignContent = props.alignContent, vertical = props.vertical, className = props.className;
    var alignStart = alignContent === 'start';
    var alignCenter = alignContent === 'center';
    var alignEnd = alignContent === 'end';
    return {
        root: [
            theme.fonts.medium,
            {
                position: 'relative',
            },
            alignContent && {
                textAlign: alignContent,
            },
            !alignContent && {
                textAlign: 'center',
            },
            vertical &&
                (alignCenter || !alignContent) && {
                verticalAlign: 'middle',
            },
            vertical &&
                alignStart && {
                verticalAlign: 'top',
            },
            vertical &&
                alignEnd && {
                verticalAlign: 'bottom',
            },
            vertical && {
                padding: '0 4px',
                height: 'inherit',
                display: 'table-cell',
                zIndex: 1,
                selectors: {
                    ':after': (_a = {
                            backgroundColor: theme.palette.neutralLighter,
                            width: '1px',
                            content: '""',
                            position: 'absolute',
                            top: '0',
                            bottom: '0',
                            left: '50%',
                            right: '0',
                            zIndex: -1
                        },
                        _a[HighContrastSelector] = {
                            backgroundColor: 'WindowText',
                        },
                        _a),
                },
            },
            !vertical && {
                padding: '4px 0',
                selectors: {
                    ':before': (_b = {
                            backgroundColor: theme.palette.neutralLighter,
                            height: '1px',
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: '50%',
                            bottom: '0',
                            left: '0',
                            right: '0'
                        },
                        _b[HighContrastSelector] = {
                            backgroundColor: 'WindowText',
                        },
                        _b),
                },
            },
            className,
        ],
        content: [
            {
                position: 'relative',
                display: 'inline-block',
                padding: '0 12px',
                color: theme.semanticColors.bodyText,
                background: theme.semanticColors.bodyBackground,
            },
            vertical && {
                padding: '12px 0',
            },
        ],
    };
};
//# sourceMappingURL=Separator.styles.js.map