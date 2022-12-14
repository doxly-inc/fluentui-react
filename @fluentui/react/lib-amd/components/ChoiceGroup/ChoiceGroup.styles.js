define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-ChoiceFieldGroup',
        flexContainer: 'ms-ChoiceFieldGroup-flexContainer',
    };
    exports.getStyles = function (props) {
        var className = props.className, optionsContainIconOrImage = props.optionsContainIconOrImage, theme = props.theme;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                className,
                classNames.root,
                theme.fonts.medium,
                {
                    display: 'block',
                },
            ],
            flexContainer: [
                classNames.flexContainer,
                optionsContainIconOrImage && {
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                },
            ],
        };
    };
});
//# sourceMappingURL=ChoiceGroup.styles.js.map