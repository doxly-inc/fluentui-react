define(["require", "exports", "react", "@fluentui/react-hooks", "@fluentui/utilities", "./observeResize"], function (require, exports, React, react_hooks_1, utilities_1, observeResize_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Track whether any items don't fit within their container, and move them to the overflow menu.
     * Items are moved into the overflow menu from back to front, excluding pinned items.
     *
     * The overflow menu button must be the last sibling of all of the items that can be put into the overflow, and it
     * must be hooked up to the `setMenuButtonRef` setter function that's returned by `useOverflow`:
     * ```ts
     * const overflow = useOverflow(...);
     * ```
     * ```jsx
     * <Container>
     *  <Item /> // Index 0
     *  <Item /> // Index 1
     *  ...
     *  <Button ref={overflow.setMenuButtonRef} /> // Can be any React.Component or HTMLElement
     * </Container>
     * ```
     */
    exports.useOverflow = function (_a) {
        var onOverflowItemsChanged = _a.onOverflowItemsChanged, rtl = _a.rtl, pinnedIndex = _a.pinnedIndex;
        var updateOverflowRef = React.useRef();
        var containerWidthRef = React.useRef();
        // Attach a resize observer to the container
        var containerRef = react_hooks_1.useRefEffect(function (container) {
            var cleanupObserver = observeResize_1.observeResize(container, function (entries) {
                containerWidthRef.current = entries ? entries[0].contentRect.width : container.clientWidth;
                if (updateOverflowRef.current) {
                    updateOverflowRef.current();
                }
            });
            return function () {
                cleanupObserver();
                containerWidthRef.current = undefined;
            };
        });
        var menuButtonRef = react_hooks_1.useRefEffect(function (menuButton) {
            containerRef(menuButton.parentElement);
            return function () { return containerRef(null); };
        });
        React.useLayoutEffect(function () {
            var container = containerRef.current;
            var menuButton = menuButtonRef.current;
            if (!container || !menuButton) {
                return;
            }
            // items contains the container's children, excluding the overflow menu button itself
            var items = [];
            for (var i = 0; i < container.children.length; i++) {
                var item = container.children[i];
                if (item instanceof HTMLElement && item !== menuButton) {
                    items.push(item);
                }
            }
            // Keep track of the minimum width of the container to fit each child index.
            // This cache is an integral part of the algorithm and not just a performance optimization: it allows us to
            // recalculate the overflowIndex on subsequent resizes even if some items are already inside the overflow.
            var minContainerWidth = [];
            var extraWidth = 0; // The accumulated width of items that don't move into the overflow
            updateOverflowRef.current = function () {
                var containerWidth = containerWidthRef.current;
                if (containerWidth === undefined) {
                    return;
                }
                // Iterate the items in reverse order until we find one that fits within the bounds of the container
                for (var i = items.length - 1; i >= 0; i--) {
                    // Calculate the min container width for this item if we haven't done so yet
                    if (minContainerWidth[i] === undefined) {
                        var itemOffsetEnd = rtl ? containerWidth - items[i].offsetLeft : items[i].offsetLeft + items[i].offsetWidth;
                        // If the item after this one is pinned, reserve space for it
                        if (i + 1 < items.length && i + 1 === pinnedIndex) {
                            // Use distance between the end of the previous item and this one (rather than the
                            // pinned item's offsetWidth), to account for any margin between the items.
                            extraWidth = minContainerWidth[i + 1] - itemOffsetEnd;
                        }
                        // Reserve space for the menu button after the first item was added to the overflow
                        if (i === items.length - 2) {
                            extraWidth += menuButton.offsetWidth;
                        }
                        minContainerWidth[i] = itemOffsetEnd + extraWidth;
                    }
                    if (containerWidth > minContainerWidth[i]) {
                        setOverflowIndex(i + 1);
                        return;
                    }
                }
                // If we got here, nothing fits outside the overflow
                setOverflowIndex(0);
            };
            var prevOverflowIndex = items.length;
            var setOverflowIndex = function (overflowIndex) {
                if (prevOverflowIndex !== overflowIndex) {
                    prevOverflowIndex = overflowIndex;
                    onOverflowItemsChanged(overflowIndex, items.map(function (ele, index) { return ({
                        ele: ele,
                        isOverflowing: index >= overflowIndex && index !== pinnedIndex,
                    }); }));
                }
            };
            var cancelAnimationFrame = undefined;
            // If the container width is already known from a previous render, update the overflow with its width.
            // Do this in an animation frame to avoid forcing layout to happen early.
            if (containerWidthRef.current !== undefined) {
                var win_1 = utilities_1.getWindow(container);
                if (win_1) {
                    var animationFrameId_1 = win_1.requestAnimationFrame(updateOverflowRef.current);
                    cancelAnimationFrame = function () { return win_1.cancelAnimationFrame(animationFrameId_1); };
                }
            }
            return function () {
                if (cancelAnimationFrame) {
                    cancelAnimationFrame();
                }
                // On cleanup, need to remove all items from the overflow
                // so they don't have stale properties on the next render
                setOverflowIndex(items.length);
                updateOverflowRef.current = undefined;
            };
        });
        return { menuButtonRef: menuButtonRef };
    };
});
//# sourceMappingURL=useOverflow.js.map