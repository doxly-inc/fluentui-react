"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
/**
 * Merge props for a slot to a slot prop.
 * @param slotProp - Slot prop.
 * @param slotProps - Props for the slot.
 * @param mappedProp - Optional mapped prop name for the slotProp after merging.
 */
function mergeSlotProp(slotProp, slotProps, mappedProp) {
    var _a;
    if (mappedProp === void 0) { mappedProp = 'children'; }
    if (typeof slotProp === 'object' && !React.isValidElement(slotProp)) {
        return tslib_1.__assign(tslib_1.__assign({}, slotProp), slotProps);
    }
    else {
        return tslib_1.__assign((_a = {}, _a[mappedProp] = slotProp, _a), slotProps);
    }
}
exports.mergeSlotProp = mergeSlotProp;
//# sourceMappingURL=mergeSlotProp.js.map