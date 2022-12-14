define(["require", "exports", "react", "enzyme"], function (require, exports, React, enzyme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validate that value(s) returned by a hook do not change in identity.
     * @param testDescription - Custom test description
     * @param useHook - Function to invoke the hook and return an array of return values which
     * should not change
     * @param useHookAgain - If you want to verify that the return value doesn't change when hook
     * parameters change, you can pass this second callback which calls the hook differently.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function validateHookValueNotChanged(testDescription, useHook, useHookAgain) {
        it(testDescription || 'returns the same value(s) each time', function () {
            var latestValues;
            var callCount = 0;
            var TestComponent = function () {
                callCount++;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                latestValues = callCount === 1 ? useHook() : (useHookAgain || useHook)();
                return React.createElement("div", null);
            };
            var wrapper = enzyme_1.mount(React.createElement(TestComponent, null));
            expect(callCount).toBe(1);
            var firstValues = latestValues;
            expect(firstValues).toBeDefined();
            latestValues = undefined;
            wrapper.setProps({});
            expect(callCount).toBe(2);
            expect(latestValues).toBeDefined();
            expect(latestValues).toHaveLength(firstValues.length);
            for (var i = 0; i < latestValues.length; i++) {
                try {
                    expect(latestValues[i]).toBe(firstValues[i]);
                }
                catch (err) {
                    // Make a more informative error message
                    var valueText = latestValues[i].toString();
                    expect('').toBe("Identity of value at index " + i + " has changed. This might help identify it:\n" + valueText);
                }
            }
        });
    }
    exports.validateHookValueNotChanged = validateHookValueNotChanged;
});
//# sourceMappingURL=testUtilities.js.map