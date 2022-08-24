export var getStyles = function (props) {
    // eslint-disable-next-line deprecation/deprecation
    var theme = props.theme, getClassNames = props.getClassNames, className = props.className;
    if (!theme) {
        throw new Error('Theme is undefined or null.');
    }
    if (getClassNames) {
        var names = getClassNames(theme);
        return {
            wrapper: [names.wrapper],
            divider: [names.divider],
        };
    }
    return {
        wrapper: [
            {
                display: 'inline-flex',
                height: '100%',
                alignItems: 'center',
            },
            className,
        ],
        divider: [
            {
                width: 1,
                height: '100%',
                backgroundColor: theme.palette.neutralTertiaryAlt,
            },
        ],
    };
};
//# sourceMappingURL=VerticalDivider.styles.js.map