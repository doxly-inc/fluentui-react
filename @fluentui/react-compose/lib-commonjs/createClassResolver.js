"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendClasses_1 = require("./appendClasses");
/**
 * `createClassResolver` is a factory function which creates a state to classmap resolver for
 * slot specific class names. It can be used in conjunction with the `compose` option `classes` to
 * inject css modules without writing cx(...) logic manually distributing classnames.
 *
 * Class names which map to slots are automatically distributed to correct slot props.
 *
 * Class names with an underscore are interpretted as enum matchable classes. For example,
 * the class "size_large" would be applied to the `root` slot when the component's state contains
 * a prop `size` with a value `large`.
 *
 * Remaining class names would be interpretted as modifiers, applied to the `root` slot when
 * the component `state` contains a truthy matching prop name.
 */
exports.createClassResolver = function (classes) {
    // This is in creation time, so this will happen once per css file.
    var _a = createResolvedMap(classes), slots = _a.slots, modifiers = _a.modifiers, enums = _a.enums;
    // Everything in the function below will happen at runtime, so it's very critical that this
    // code is as minimal as possible.
    return function classResolver(state) {
        var resolvedClasses = {};
        var modifierClasses = '';
        for (var _i = 0, _a = Object.keys(modifiers); _i < _a.length; _i++) {
            var modifierName = _a[_i];
            if (state[modifierName]) {
                modifierClasses = appendClasses_1.appendClasses(modifierClasses, modifiers[modifierName]);
            }
        }
        var enumClasses = '';
        for (var _b = 0, _c = Object.keys(enums); _b < _c.length; _b++) {
            var enumName = _c[_b];
            var enumValues = enums[enumName];
            // if we have a class which matches the enumName and current state value, add it.
            if (enumValues[state[enumName]]) {
                enumClasses = appendClasses_1.appendClasses(enumClasses, enumValues[state[enumName]]);
            }
        }
        for (var _d = 0, _e = Object.keys(slots); _d < _e.length; _d++) {
            var slotName = _e[_d];
            resolvedClasses[slotName] = appendClasses_1.appendClasses(slots[slotName], modifierClasses, enumClasses);
        }
        return resolvedClasses;
    };
};
/**
 * Helper to take a css module map and translate it into { slots, modifiers, enums } where
 * slots are a matched name in the slotNames array, enums have underscores splitting the matched
 * name/value, and modifiers are everything else. Creating this split definition keeps runtime
 * resolution work to a minimum.
 */
function createResolvedMap(classes) {
    var resolvedMap = {
        slots: {},
        modifiers: {},
        enums: {},
    };
    var slots = resolvedMap.slots, modifiers = resolvedMap.modifiers, enums = resolvedMap.enums;
    // Iterate through classes
    Object.keys(classes).forEach(function (key) {
        var classValue = classes[key];
        if (classValue) {
            var classParts = key.split('_');
            // If the class is named the same as a slot, add it to the slot.
            switch (classParts.length) {
                case 2: // modifier (_modifierName)
                    modifiers[classParts[1]] = classValue;
                    break;
                case 3: // enum (_enumName_enumValue)
                    var enumName = classParts[1];
                    var enumValue = classParts[2];
                    var enumValues = (enums[enumName] = enums[enumName] || {});
                    enumValues[enumValue] = classValue;
                    break;
                default:
                    // slot (root)
                    slots[key] = classValue;
            }
        }
    });
    return resolvedMap;
}
exports.createResolvedMap = createResolvedMap;
//# sourceMappingURL=createClassResolver.js.map