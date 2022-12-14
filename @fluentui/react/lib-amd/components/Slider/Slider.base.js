define(["require", "exports", "tslib", "react", "@fluentui/react-hooks", "@fluentui/utilities", "../Label/Label", "./useSlider"], function (require, exports, tslib_1, React, react_hooks_1, utilities_1, Label_1, useSlider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var COMPONENT_NAME = 'SliderBase';
    exports.SliderBase = React.forwardRef(function (props, ref) {
        var slotProps = useSlider_1.useSlider(props, ref);
        
        return (React.createElement("div", tslib_1.__assign({}, slotProps.root),
            slotProps && React.createElement(Label_1.Label, tslib_1.__assign({}, slotProps.label)),
            React.createElement("div", tslib_1.__assign({}, slotProps.container),
                props.ranged &&
                    (props.vertical
                        ? slotProps.valueLabel && React.createElement(Label_1.Label, tslib_1.__assign({}, slotProps.valueLabel))
                        : slotProps.lowerValueLabel && React.createElement(Label_1.Label, tslib_1.__assign({}, slotProps.lowerValueLabel))),
                React.createElement("div", tslib_1.__assign({}, slotProps.sliderBox),
                    React.createElement("div", tslib_1.__assign({}, slotProps.sliderLine),
                        props.ranged && React.createElement("span", tslib_1.__assign({}, slotProps.lowerValueThumb)),
                        React.createElement("span", tslib_1.__assign({}, slotProps.thumb)),
                        slotProps.zeroTick && React.createElement("span", tslib_1.__assign({}, slotProps.zeroTick)),
                        React.createElement("span", tslib_1.__assign({}, slotProps.bottomInactiveTrack)),
                        React.createElement("span", tslib_1.__assign({}, slotProps.activeTrack)),
                        React.createElement("span", tslib_1.__assign({}, slotProps.topInactiveTrack)))),
                props.ranged && props.vertical
                    ? slotProps.lowerValueLabel && React.createElement(Label_1.Label, tslib_1.__assign({}, slotProps.lowerValueLabel))
                    : slotProps.valueLabel && React.createElement(Label_1.Label, tslib_1.__assign({}, slotProps.valueLabel))),
            React.createElement(utilities_1.FocusRects, null)));
    });
    exports.SliderBase.displayName = COMPONENT_NAME;
});
//# sourceMappingURL=Slider.base.js.map