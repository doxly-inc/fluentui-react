import { __assign } from "tslib";
import * as React from 'react';
import { classNamesFunction, DelayedRender, getNativeProps, divProperties } from '../../Utilities';
import { ShimmerElementsGroup } from './ShimmerElementsGroup/ShimmerElementsGroup';
import { useSetTimeout, useConst } from '@fluentui/react-hooks';
var TRANSITION_ANIMATION_INTERVAL = 200; /* ms */
var COMPONENT_NAME = 'Shimmer';
var getClassNames = classNamesFunction();
/**
 * {@docCategory Shimmer}
 */
export var ShimmerBase = React.forwardRef(function (props, ref) {
    var styles = props.styles, shimmerElements = props.shimmerElements, children = props.children, width = props.width, className = props.className, customElementsGroup = props.customElementsGroup, theme = props.theme, ariaLabel = props.ariaLabel, shimmerColors = props.shimmerColors, _a = props.isDataLoaded, isDataLoaded = _a === void 0 ? false : _a;
    var divProps = getNativeProps(props, divProperties);
    var classNames = getClassNames(styles, {
        theme: theme,
        isDataLoaded: isDataLoaded,
        className: className,
        transitionAnimationInterval: TRANSITION_ANIMATION_INTERVAL,
        shimmerColor: shimmerColors && shimmerColors.shimmer,
        shimmerWaveColor: shimmerColors && shimmerColors.shimmerWave,
    });
    var internalState = useConst({
        lastTimeoutId: 0,
    });
    var _b = useSetTimeout(), setTimeout = _b.setTimeout, clearTimeout = _b.clearTimeout;
    /**
     * Flag for knowing when to remove the shimmerWrapper from the DOM.
     */
    var _c = React.useState(isDataLoaded), contentLoaded = _c[0], setContentLoaded = _c[1];
    var divStyleProp = { width: width ? width : '100%' };
    React.useEffect(function () {
        if (isDataLoaded !== contentLoaded) {
            if (isDataLoaded) {
                internalState.lastTimeoutId = setTimeout(function () {
                    setContentLoaded(true);
                }, TRANSITION_ANIMATION_INTERVAL);
                return function () { return clearTimeout(internalState.lastTimeoutId); };
            }
            else {
                setContentLoaded(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- Should only run when isDataLoaded changes.
    }, [isDataLoaded]);
    return (React.createElement("div", __assign({}, divProps, { className: classNames.root, ref: ref }),
        !contentLoaded && (React.createElement("div", { style: divStyleProp, className: classNames.shimmerWrapper },
            React.createElement("div", { className: classNames.shimmerGradient }),
            customElementsGroup ? (customElementsGroup) : (React.createElement(ShimmerElementsGroup, { shimmerElements: shimmerElements, backgroundColor: shimmerColors && shimmerColors.background })))),
        children && React.createElement("div", { className: classNames.dataWrapper }, children),
        ariaLabel && !isDataLoaded && (React.createElement("div", { role: "status", "aria-live": "polite" },
            React.createElement(DelayedRender, null,
                React.createElement("div", { className: classNames.screenReaderText }, ariaLabel))))));
});
ShimmerBase.displayName = COMPONENT_NAME;
//# sourceMappingURL=Shimmer.base.js.map