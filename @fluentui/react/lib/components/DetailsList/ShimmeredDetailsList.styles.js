export var getStyles = function (props) {
    var theme = props.theme;
    var palette = theme.palette;
    return {
        root: {
            position: 'relative',
            selectors: {
                ':after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    // eslint-disable-next-line @fluentui/max-len
                    backgroundImage: "linear-gradient(to bottom, transparent 30%, " + palette.whiteTranslucent40 + " 65%," + palette.white + " 100%)",
                },
            },
        },
    };
};
//# sourceMappingURL=ShimmeredDetailsList.styles.js.map