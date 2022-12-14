"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_hooks_1 = require("@fluentui/react-hooks");
var utilities_1 = require("@fluentui/utilities");
var Label_1 = require("../Label/Label");
var useSlider_1 = require("./useSlider");
var COMPONENT_NAME = 'SliderBase';
exports.SliderBase = React.forwardRef(function (props, ref) {
    var slotProps = useSlider_1.useSlider(props, ref);
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        react_hooks_1.useWarnings({
            name: COMPONENT_NAME,
            props: props,
            mutuallyExclusive: { value: 'defaultValue' },
        });
    }
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
//# sourceMappingURL=Slider.base.js.map