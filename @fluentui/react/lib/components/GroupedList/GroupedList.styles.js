import { getGlobalClassNames, AnimationVariables } from '../../Styling';
var GlobalClassNames = {
    root: 'ms-GroupedList',
    compact: 'ms-GroupedList--Compact',
    group: 'ms-GroupedList-group',
    link: 'ms-Link',
    listCell: 'ms-List-cell',
};
var beziers = {
    easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
};
export var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, compact = props.compact;
    var palette = theme.palette;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                selectors: (_a = {},
                    _a["." + classNames.listCell] = {
                        minHeight: 38,
                    },
                    _a),
            },
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            className,
        ],
        group: [
            classNames.group,
            {
                transition: "background-color " + AnimationVariables.durationValue2 + " " + beziers.easeInOutSine,
            },
        ],
        groupIsDropping: {
            backgroundColor: palette.neutralLight,
        },
    };
};
//# sourceMappingURL=GroupedList.styles.js.map