"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var Beak_styles_1 = require("./Beak.styles");
var Positioning_1 = require("../../../Positioning");
exports.BEAK_HEIGHT = 10;
exports.BEAK_WIDTH = 18;
exports.Beak = React.forwardRef(function (props, forwardedRef) {
    var left = props.left, top = props.top, bottom = props.bottom, right = props.right, color = props.color, _a = props.direction, direction = _a === void 0 ? Positioning_1.RectangleEdge.top : _a;
    var svgHeight;
    var svgWidth;
    if (direction === Positioning_1.RectangleEdge.top || direction === Positioning_1.RectangleEdge.bottom) {
        svgHeight = exports.BEAK_HEIGHT;
        svgWidth = exports.BEAK_WIDTH;
    }
    else {
        svgHeight = exports.BEAK_WIDTH;
        svgWidth = exports.BEAK_HEIGHT;
    }
    var pointOne;
    var pointTwo;
    var pointThree;
    var transform;
    switch (direction) {
        case Positioning_1.RectangleEdge.top:
        default:
            pointOne = exports.BEAK_WIDTH / 2 + ", 0";
            pointTwo = exports.BEAK_WIDTH + ", " + exports.BEAK_HEIGHT;
            pointThree = "0, " + exports.BEAK_HEIGHT;
            transform = 'translateY(-100%)';
            break;
        case Positioning_1.RectangleEdge.right:
            pointOne = "0, 0";
            pointTwo = exports.BEAK_HEIGHT + ", " + exports.BEAK_HEIGHT;
            pointThree = "0, " + exports.BEAK_WIDTH;
            transform = 'translateX(100%)';
            break;
        case Positioning_1.RectangleEdge.bottom:
            pointOne = "0, 0";
            pointTwo = exports.BEAK_WIDTH + ", 0";
            pointThree = exports.BEAK_WIDTH / 2 + ", " + exports.BEAK_HEIGHT;
            transform = 'translateY(100%)';
            break;
        case Positioning_1.RectangleEdge.left:
            pointOne = exports.BEAK_HEIGHT + ", 0";
            pointTwo = "0, " + exports.BEAK_HEIGHT;
            pointThree = exports.BEAK_HEIGHT + ", " + exports.BEAK_WIDTH;
            transform = 'translateX(-100%)';
            break;
    }
    var getClassNames = Utilities_1.classNamesFunction();
    var classNames = getClassNames(Beak_styles_1.getStyles, {
        left: left,
        top: top,
        bottom: bottom,
        right: right,
        height: svgHeight + "px",
        width: svgWidth + "px",
        transform: transform,
        color: color,
    });
    return (React.createElement("div", { className: classNames.root, role: "presentation", ref: forwardedRef },
        React.createElement("svg", { height: svgHeight, width: svgWidth, className: classNames.beak },
            React.createElement("polygon", { points: pointOne + ' ' + pointTwo + ' ' + pointThree }))));
});
exports.Beak.displayName = 'Beak';
//# sourceMappingURL=Beak.js.map