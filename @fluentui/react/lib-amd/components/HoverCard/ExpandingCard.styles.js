define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-ExpandingCard-root',
        compactCard: 'ms-ExpandingCard-compactCard',
        expandedCard: 'ms-ExpandingCard-expandedCard',
        expandedCardScroll: 'ms-ExpandingCard-expandedCardScrollRegion',
    };
    function getStyles(props) {
        var _a;
        var theme = props.theme, needsScroll = props.needsScroll, expandedCardFirstFrameRendered = props.expandedCardFirstFrameRendered, compactCardHeight = props.compactCardHeight, expandedCardHeight = props.expandedCardHeight, className = props.className;
        var palette = theme.palette;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                {
                    width: 320,
                    pointerEvents: 'none',
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            border: '1px solid WindowText',
                        },
                        _a),
                },
                className,
            ],
            compactCard: [
                classNames.compactCard,
                {
                    pointerEvents: 'auto',
                    position: 'relative',
                    height: compactCardHeight,
                },
            ],
            expandedCard: [
                classNames.expandedCard,
                {
                    height: 1,
                    overflowY: 'hidden',
                    pointerEvents: 'auto',
                    transition: 'height 0.467s cubic-bezier(0.5, 0, 0, 1)',
                    selectors: {
                        ':before': {
                            content: '""',
                            position: 'relative',
                            display: 'block',
                            top: 0,
                            left: 24,
                            width: 272,
                            height: 1,
                            backgroundColor: palette.neutralLighter,
                        },
                    },
                },
                expandedCardFirstFrameRendered && {
                    height: expandedCardHeight,
                },
            ],
            expandedCardScroll: [
                classNames.expandedCardScroll,
                needsScroll && {
                    height: '100%',
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                },
            ],
        };
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=ExpandingCard.styles.js.map