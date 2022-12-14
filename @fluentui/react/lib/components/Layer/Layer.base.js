import { __assign } from "tslib";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fabric } from '../../Fabric';
import { classNamesFunction, setPortalAttribute, setVirtualParent } from '../../Utilities';
import { registerLayer, getDefaultTarget, unregisterLayer } from './Layer.notification';
import { useMergedRefs, useWarnings } from '@fluentui/react-hooks';
import { useDocument } from '../../WindowProvider';
var getClassNames = classNamesFunction();
export var LayerBase = React.forwardRef(function (props, ref) {
    var _a = React.useState(), layerElement = _a[0], setLayerElement = _a[1];
    var refLayerElement = React.useRef(layerElement);
    refLayerElement.current = layerElement;
    var rootRef = React.useRef(null);
    var mergedRef = useMergedRefs(rootRef, ref);
    var doc = useDocument();
    var eventBubblingEnabled = props.eventBubblingEnabled, styles = props.styles, theme = props.theme, className = props.className, children = props.children, hostId = props.hostId, _b = props.onLayerDidMount, onLayerDidMount = _b === void 0 ? function () { return undefined; } : _b, 
    // eslint-disable-next-line deprecation/deprecation
    _c = props.onLayerMounted, 
    // eslint-disable-next-line deprecation/deprecation
    onLayerMounted = _c === void 0 ? function () { return undefined; } : _c, onLayerWillUnmount = props.onLayerWillUnmount, insertFirst = props.insertFirst;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        isNotHost: !hostId,
    });
    // Returns the user provided hostId props element, the default target selector,
    // or undefined if document doesn't exist.
    var getHost = function () {
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            var defaultHostSelector = getDefaultTarget();
            return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
        }
    };
    // Removes the current layer element's parentNode and runs onLayerWillUnmount prop if provided.
    var removeLayerElement = function () {
        var _a;
        (_a = onLayerWillUnmount) === null || _a === void 0 ? void 0 : _a();
        var elem = refLayerElement.current;
        if (elem && elem.parentNode) {
            var parentNode = elem.parentNode;
            if (parentNode) {
                parentNode.removeChild(elem);
            }
        }
    };
    // If a doc or host exists, it will remove and update layer parentNodes.
    var createLayerElement = function () {
        var _a, _b;
        var host = getHost();
        if (!doc || !host) {
            return;
        }
        // Remove and re-create any previous existing layer elements.
        removeLayerElement();
        var el = doc.createElement('div');
        el.className = classNames.root;
        setPortalAttribute(el);
        setVirtualParent(el, rootRef.current);
        insertFirst ? host.insertBefore(el, host.firstChild) : host.appendChild(el);
        setLayerElement(el);
        (_a = onLayerMounted) === null || _a === void 0 ? void 0 : _a();
        (_b = onLayerDidMount) === null || _b === void 0 ? void 0 : _b();
    };
    React.useLayoutEffect(function () {
        createLayerElement();
        // Check if the user provided a hostId prop and register the layer with the ID.
        if (hostId) {
            registerLayer(hostId, createLayerElement);
        }
        return function () {
            removeLayerElement();
            if (hostId) {
                unregisterLayer(hostId, createLayerElement);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should run if the hostId updates.
    }, [hostId]);
    useDebugWarnings(props);
    return (React.createElement("span", { className: "ms-layer", ref: mergedRef }, layerElement &&
        ReactDOM.createPortal(React.createElement(Fabric, __assign({}, (!eventBubblingEnabled && getFilteredEvents()), { className: classNames.content }), children), layerElement)));
});
LayerBase.displayName = 'LayerBase';
var filteredEventProps;
var onFilterEvent = function (ev) {
    // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though
    // mouseenter and mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on
    // event name rather than ev.bubble.
    if (ev.eventPhase === Event.BUBBLING_PHASE &&
        ev.type !== 'mouseenter' &&
        ev.type !== 'mouseleave' &&
        ev.type !== 'touchstart' &&
        ev.type !== 'touchend') {
        ev.stopPropagation();
    }
};
function getFilteredEvents() {
    if (!filteredEventProps) {
        filteredEventProps = {};
        [
            'onClick',
            'onContextMenu',
            'onDoubleClick',
            'onDrag',
            'onDragEnd',
            'onDragEnter',
            'onDragExit',
            'onDragLeave',
            'onDragOver',
            'onDragStart',
            'onDrop',
            'onMouseDown',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseOver',
            'onMouseOut',
            'onMouseUp',
            'onTouchMove',
            'onTouchStart',
            'onTouchCancel',
            'onTouchEnd',
            'onKeyDown',
            'onKeyPress',
            'onKeyUp',
            'onFocus',
            'onBlur',
            'onChange',
            'onInput',
            'onInvalid',
            'onSubmit',
        ].forEach(function (name) { return (filteredEventProps[name] = onFilterEvent); });
    }
    return filteredEventProps;
}
function useDebugWarnings(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        useWarnings({
            name: 'Layer',
            props: props,
            deprecations: { onLayerMounted: 'onLayerDidMount' },
        });
    }
}
//# sourceMappingURL=Layer.base.js.map