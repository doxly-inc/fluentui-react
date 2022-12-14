import { __assign } from "tslib";
import * as React from 'react';
import { divProperties, getNativeProps } from '../../Utilities';
import { ResizeGroupDirection } from './ResizeGroup.types';
import { useConst, useMergedRefs, useAsync, useOnEvent, useWarnings } from '@fluentui/react-hooks';
import { useWindow } from '../../WindowProvider';
var RESIZE_DELAY = 16;
/**
 * Returns a simple object is able to store measurements with a given key.
 */
export var getMeasurementCache = function () {
    var measurementsCache = {};
    return {
        /**
         * Checks if the provided data has a cacheKey. If it has a cacheKey and there is a
         * corresponding entry in the measurementsCache, then it will return that value.
         * Returns undefined otherwise.
         */
        getCachedMeasurement: function (data) {
            if (data && data.cacheKey && measurementsCache.hasOwnProperty(data.cacheKey)) {
                return measurementsCache[data.cacheKey];
            }
            return undefined;
        },
        /**
         * Should be called whenever there is a new measurement associated with a given data object.
         * If the data has a cacheKey, store that measurement in the measurementsCache.
         */
        addMeasurementToCache: function (data, measurement) {
            if (data.cacheKey) {
                measurementsCache[data.cacheKey] = measurement;
            }
        },
    };
};
/**
 * Returns a function that is able to compute the next state for the ResizeGroup given the current
 * state and any measurement updates.
 */
export var getNextResizeGroupStateProvider = function (measurementCache) {
    if (measurementCache === void 0) { measurementCache = getMeasurementCache(); }
    var _measurementCache = measurementCache;
    var _containerDimension;
    /**
     * Gets the width/height of the data rendered in a hidden div.
     * @param measuredData - The data corresponding to the measurement we wish to take.
     * @param getElementToMeasureDimension - A function that returns the measurement of the rendered data.
     * Only called when the measurement is not in the cache.
     */
    function _getMeasuredDimension(measuredData, getElementToMeasureDimension) {
        var cachedDimension = _measurementCache.getCachedMeasurement(measuredData);
        if (cachedDimension !== undefined) {
            return cachedDimension;
        }
        var measuredDimension = getElementToMeasureDimension();
        _measurementCache.addMeasurementToCache(measuredData, measuredDimension);
        return measuredDimension;
    }
    /**
     * Will get the next IResizeGroupState based on the current data while trying to shrink contents
     * to fit in the container.
     * @param data - The initial data point to start measuring.
     * @param onReduceData - Function that transforms the data into something that should render with less width/height.
     * @param getElementToMeasureDimension - A function that returns the measurement of the rendered data.
     * Only called when the measurement is not in the cache.
     */
    function _shrinkContentsUntilTheyFit(data, onReduceData, getElementToMeasureDimension) {
        var dataToMeasure = data;
        var measuredDimension = _getMeasuredDimension(data, getElementToMeasureDimension);
        while (measuredDimension > _containerDimension) {
            var nextMeasuredData = onReduceData(dataToMeasure);
            // We don't want to get stuck in an infinite render loop when there are no more
            // scaling steps, so implementations of onReduceData should return undefined when
            // there are no more scaling states to apply.
            if (nextMeasuredData === undefined) {
                return {
                    renderedData: dataToMeasure,
                    resizeDirection: undefined,
                    dataToMeasure: undefined,
                };
            }
            measuredDimension = _measurementCache.getCachedMeasurement(nextMeasuredData);
            // If the measurement isn't in the cache, we need to re-render with some data in a hidden div
            if (measuredDimension === undefined) {
                return {
                    dataToMeasure: nextMeasuredData,
                    resizeDirection: 'shrink',
                };
            }
            dataToMeasure = nextMeasuredData;
        }
        return {
            renderedData: dataToMeasure,
            resizeDirection: undefined,
            dataToMeasure: undefined,
        };
    }
    /**
     * This function should be called when the state changes in a manner that might allow for more content to fit
     * on the screen, such as the window width/height growing.
     * @param data - The initial data point to start measuring.
     * @param onGrowData - Function that transforms the data into something that may take up more space when rendering.
     * @param getElementToMeasureDimension - A function that returns the measurement of the rendered data.
     * Only called when the measurement is not in the cache.
     */
    function _growDataUntilItDoesNotFit(data, onGrowData, getElementToMeasureDimension, onReduceData) {
        var dataToMeasure = data;
        var measuredDimension = _getMeasuredDimension(data, getElementToMeasureDimension);
        while (measuredDimension < _containerDimension) {
            var nextMeasuredData = onGrowData(dataToMeasure);
            // We don't want to get stuck in an infinite render loop when there are no more
            // scaling steps, so implementations of onGrowData should return undefined when
            // there are no more scaling states to apply.
            if (nextMeasuredData === undefined) {
                return {
                    renderedData: dataToMeasure,
                    resizeDirection: undefined,
                    dataToMeasure: undefined,
                };
            }
            measuredDimension = _measurementCache.getCachedMeasurement(nextMeasuredData);
            // If the measurement isn't in the cache, we need to re-render with some data in a hidden div
            if (measuredDimension === undefined) {
                return {
                    dataToMeasure: nextMeasuredData,
                };
            }
            dataToMeasure = nextMeasuredData;
        }
        // Once the loop is done, we should now shrink until the contents fit.
        return __assign({ resizeDirection: 'shrink' }, _shrinkContentsUntilTheyFit(dataToMeasure, onReduceData, getElementToMeasureDimension));
    }
    /**
     * Handles an update to the container width/height.
     * Should only be called when we knew the previous container width/height.
     * @param newDimension - The new width/height of the container.
     * @param fullDimensionData - The initial data passed in as a prop to resizeGroup.
     * @param renderedData - The data that was rendered prior to the container size changing.
     * @param onGrowData - Set to true if the Resize group has an onGrowData function.
     */
    function _updateContainerDimension(newDimension, fullDimensionData, renderedData, onGrowData) {
        var nextState;
        if (newDimension > _containerDimension) {
            if (onGrowData) {
                nextState = {
                    resizeDirection: 'grow',
                    dataToMeasure: onGrowData(renderedData),
                };
            }
            else {
                nextState = {
                    resizeDirection: 'shrink',
                    dataToMeasure: fullDimensionData,
                };
            }
        }
        else {
            nextState = {
                resizeDirection: 'shrink',
                dataToMeasure: renderedData,
            };
        }
        _containerDimension = newDimension;
        return __assign(__assign({}, nextState), { measureContainer: false });
    }
    function getNextState(props, currentState, getElementToMeasureDimension, newContainerDimension) {
        // If there is no new container width/height or data to measure, there is no need for a new state update
        if (newContainerDimension === undefined && currentState.dataToMeasure === undefined) {
            return undefined;
        }
        if (newContainerDimension) {
            // If we know the last container size and we rendered data at that width/height, we can do an optimized render
            if (_containerDimension && currentState.renderedData && !currentState.dataToMeasure) {
                return __assign(__assign({}, currentState), _updateContainerDimension(newContainerDimension, props.data, currentState.renderedData, props.onGrowData));
            }
            // If we are just setting the container width/height for the first time, we can't do any optimizations
            _containerDimension = newContainerDimension;
        }
        var nextState = __assign(__assign({}, currentState), { measureContainer: false });
        if (currentState.dataToMeasure) {
            if (currentState.resizeDirection === 'grow' && props.onGrowData) {
                nextState = __assign(__assign({}, nextState), _growDataUntilItDoesNotFit(currentState.dataToMeasure, props.onGrowData, getElementToMeasureDimension, props.onReduceData));
            }
            else {
                nextState = __assign(__assign({}, nextState), _shrinkContentsUntilTheyFit(currentState.dataToMeasure, props.onReduceData, getElementToMeasureDimension));
            }
        }
        return nextState;
    }
    /** Function that determines if we need to render content for measurement based on the measurement cache contents. */
    function shouldRenderDataForMeasurement(dataToMeasure) {
        if (!dataToMeasure || _measurementCache.getCachedMeasurement(dataToMeasure) !== undefined) {
            return false;
        }
        return true;
    }
    function getInitialResizeGroupState(data) {
        return {
            dataToMeasure: __assign({}, data),
            resizeDirection: 'grow',
            measureContainer: true,
        };
    }
    return {
        getNextState: getNextState,
        shouldRenderDataForMeasurement: shouldRenderDataForMeasurement,
        getInitialResizeGroupState: getInitialResizeGroupState,
    };
};
// Provides a context property that (if true) tells any child components that
// they are only being used for measurement purposes and will not be visible.
export var MeasuredContext = React.createContext({ isMeasured: false });
// Styles for the hidden div used for measurement
var hiddenDivStyles = { position: 'fixed', visibility: 'hidden' };
var hiddenParentStyles = { position: 'relative' };
var COMPONENT_NAME = 'ResizeGroup';
/**
 * Use useReducer instead of userState because React is not batching the state updates
 * when state is set in callbacks of setTimeout or requestAnimationFrame.
 * See issue: https://github.com/facebook/react/issues/14259
 */
function resizeDataReducer(state, action) {
    var _a;
    switch (action.type) {
        case 'resizeData':
            return __assign({}, action.value);
        case 'dataToMeasure':
            return __assign(__assign({}, state), { dataToMeasure: action.value, resizeDirection: 'grow', measureContainer: true });
        default:
            return __assign(__assign({}, state), (_a = {}, _a[action.type] = action.value, _a));
    }
}
function useResizeState(props, nextResizeGroupStateProvider, rootRef) {
    var initialStateData = useConst(function () { return nextResizeGroupStateProvider.getInitialResizeGroupState(props.data); });
    var _a = React.useReducer(resizeDataReducer, initialStateData), resizeData = _a[0], dispatchResizeDataAction = _a[1];
    // Reset state when new data is provided
    React.useEffect(function () {
        dispatchResizeDataAction({
            type: 'dataToMeasure',
            value: props.data,
        });
    }, [props.data]);
    // Because it's possible that we may force more than one re-render per animation frame, we
    // want to make sure that the RAF request is using the most recent data.
    var stateRef = React.useRef(initialStateData);
    stateRef.current = __assign({}, resizeData);
    var updateResizeState = React.useCallback(function (nextState) {
        if (nextState) {
            dispatchResizeDataAction({
                type: 'resizeData',
                value: nextState,
            });
        }
    }, []);
    var remeasure = React.useCallback(function () {
        if (rootRef.current) {
            dispatchResizeDataAction({
                type: 'measureContainer',
                value: true,
            });
        }
    }, [rootRef]);
    return [stateRef, updateResizeState, remeasure];
}
function useResizingBehavior(props, rootRef) {
    var nextResizeGroupStateProvider = useConst(getNextResizeGroupStateProvider);
    // A div that can be used for the initial measurement so that we can avoid mounting a second instance
    // of the component being measured for the initial render.
    var initialHiddenDiv = React.useRef(null);
    // A hidden div that is used for mounting a new instance of the component for measurement in a hidden
    // div without unmounting the currently visible content.
    var updateHiddenDiv = React.useRef(null);
    // Tracks if any content has been rendered to the user. This enables us to do some performance optimizations
    // for the initial render.
    var hasRenderedContent = React.useRef(false);
    var async = useAsync();
    var _a = useResizeState(props, nextResizeGroupStateProvider, rootRef), stateRef = _a[0], updateResizeState = _a[1], remeasure = _a[2];
    React.useEffect(function () {
        var _a, _b;
        if (stateRef.current.renderedData) {
            hasRenderedContent.current = true;
            (_b = (_a = props).dataDidRender) === null || _b === void 0 ? void 0 : _b.call(_a, stateRef.current.renderedData);
        }
    });
    React.useEffect(function () {
        async.requestAnimationFrame(function () {
            var containerDimension = undefined;
            if (stateRef.current.measureContainer && rootRef.current) {
                var boundingRect = rootRef.current.getBoundingClientRect();
                containerDimension =
                    props.direction === ResizeGroupDirection.vertical ? boundingRect.height : boundingRect.width;
            }
            var nextState = nextResizeGroupStateProvider.getNextState(props, stateRef.current, function () {
                var refToMeasure = !hasRenderedContent.current ? initialHiddenDiv : updateHiddenDiv;
                if (!refToMeasure.current) {
                    return 0;
                }
                return props.direction === ResizeGroupDirection.vertical
                    ? refToMeasure.current.scrollHeight
                    : refToMeasure.current.scrollWidth;
            }, containerDimension);
            updateResizeState(nextState);
        });
    });
    var win = useWindow();
    useOnEvent(win, 'resize', async.debounce(remeasure, RESIZE_DELAY, { leading: true }));
    var dataNeedsMeasuring = nextResizeGroupStateProvider.shouldRenderDataForMeasurement(stateRef.current.dataToMeasure);
    var isInitialMeasure = !hasRenderedContent.current && dataNeedsMeasuring;
    return [
        stateRef.current.dataToMeasure,
        stateRef.current.renderedData,
        remeasure,
        initialHiddenDiv,
        updateHiddenDiv,
        dataNeedsMeasuring,
        isInitialMeasure,
    ];
}
function useDebugWarnings(props) {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
        useWarnings({
            name: COMPONENT_NAME,
            props: props,
            deprecations: { styles: 'className' },
        });
    }
}
var measuredContextValue = { isMeasured: true };
export var ResizeGroupBase = React.forwardRef(function (props, forwardedRef) {
    var rootRef = React.useRef(null);
    // The root div which is the container inside of which we are trying to fit content.
    var mergedRootRef = useMergedRefs(rootRef, forwardedRef);
    var _a = useResizingBehavior(props, rootRef), dataToMeasure = _a[0], renderedData = _a[1], remeasure = _a[2], initialHiddenDiv = _a[3], updateHiddenDiv = _a[4], dataNeedsMeasuring = _a[5], isInitialMeasure = _a[6];
    React.useImperativeHandle(props.componentRef, function () { return ({ remeasure: remeasure }); }, [remeasure]);
    useDebugWarnings(props);
    var className = props.className, onRenderData = props.onRenderData;
    var divProps = getNativeProps(props, divProperties, ['data']);
    // We only ever render the final content to the user. All measurements are done in a hidden div.
    // For the initial render, we want this to be as fast as possible, so we need to make sure that we only mount one
    // version of the component for measurement and the final render. For renders that update what is on screen, we
    // want to make sure that there are no jarring effects such as the screen flashing as we apply scaling steps for
    // measurement. In the update case, we mount a second version of the component just for measurement purposes and
    // leave the rendered content untouched until we know the next state to show to the user.
    return (React.createElement("div", __assign({}, divProps, { className: className, ref: mergedRootRef }),
        React.createElement("div", { style: hiddenParentStyles },
            dataNeedsMeasuring && !isInitialMeasure && (React.createElement("div", { style: hiddenDivStyles, ref: updateHiddenDiv },
                React.createElement(MeasuredContext.Provider, { value: measuredContextValue }, onRenderData(dataToMeasure)))),
            React.createElement("div", { ref: initialHiddenDiv, style: isInitialMeasure ? hiddenDivStyles : undefined, "data-automation-id": "visibleContent" }, isInitialMeasure ? onRenderData(dataToMeasure) : renderedData && onRenderData(renderedData)))));
});
ResizeGroupBase.displayName = 'ResizeGroupBase';
//# sourceMappingURL=ResizeGroup.base.js.map