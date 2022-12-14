import { __assign, __rest } from "tslib";
import * as React from 'react';
import { defaultMappedProps } from './defaultMappedProps';
import { mergeSlotProp } from './mergeSlotProp';
export var NullRender = function () { return null; };
/**
 * Helper utility which resolves the slots and slot props derived from user input.
 */
export function resolveSlotProps(result, options) {
    var state = result.state, slots = result.slots, slotProps = result.slotProps;
    // Derive the default slot props from the config, if provided.
    options.slotProps.forEach(function (definition) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var nextSlotProps = definition(state);
        Object.keys(nextSlotProps).forEach(function (key) {
            slotProps[key] = __assign(__assign({}, slotProps[key]), nextSlotProps[key]);
        });
    });
    //  Mix unrecognized props onto root, appropriate, excluding the handled props.
    assignToMapObject(slotProps, 'root', getUnhandledProps(state, options));
    // Iterate through slots and resolve shorthand values.
    Object.keys(slots).forEach(function (slotName) {
        var slot = slots[slotName];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var slotProp = state[slotName];
        if (slot && slotProp !== undefined && slotProp !== null) {
            var mergedSlotProp = mergeSlotProp(slotProp, slotProps[slotName], (slot && slot.shorthandConfig && slot.shorthandConfig.mappedProp) || defaultMappedProps[slot]);
            if (typeof mergedSlotProp.children === 'function') {
                var children = slotProp.children, restProps = __rest(slotProp, ["children"]);
                // If the children is a function, replace the slot.
                slots[slotName] = React.Fragment;
                slotProps[slotName] = {
                    children: slotProp.children(slot, __assign(__assign({}, slotProps[slotName]), restProps)),
                };
            }
            else {
                slotProps[slotName] = mergedSlotProp;
            }
        }
        // Ensure no slots are falsey
        if (!slots[slotName] || slotProp === null) {
            slots[slotName] = NullRender;
        }
    });
    return result;
}
function assignToMapObject(map, key, value) {
    if (value) {
        if (!map[key]) {
            map[key] = {};
        }
        map[key] = __assign(__assign({}, map[key]), value);
    }
}
function getUnhandledProps(props, options) {
    var unhandledProps = {};
    var slots = Object.keys(options.slots);
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'className' &&
            key !== 'as' &&
            options.handledProps.indexOf(key) === -1 &&
            slots.indexOf(key) === -1) {
            unhandledProps[key] = props[key];
        }
    }
    return unhandledProps;
}
//# sourceMappingURL=resolveSlotProps.js.map