"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var BaseDecorator_1 = require("./BaseDecorator");
var Utilities_1 = require("../../Utilities");
var WindowProvider_1 = require("../../WindowProvider");
var ResponsiveMode;
(function (ResponsiveMode) {
    /** Width \<= 479px */
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    /** Width \> 479px and \<= 639px */
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    /** Width \> 639px and \<= 1023px */
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    /** Width \> 1023px and \<= 1365px */
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    /** Width \> 1365px and \<= 1919px */
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    /** Width \> 1919px */
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
    ResponsiveMode[ResponsiveMode["unknown"] = 999] = "unknown";
})(ResponsiveMode = exports.ResponsiveMode || (exports.ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];
/**
 * User specified mode to default to, useful for server side rendering scenarios.
 */
var _defaultMode;
/**
 * Tracking the last mode we successfully rendered, which allows us to
 * paint initial renders with the correct size.
 */
var _lastMode;
/**
 * Allows a server rendered scenario to provide a **default** responsive mode.
 * This WILL NOT trigger any updates to components that have already consumed the responsive mode!
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
exports.setResponsiveMode = setResponsiveMode;
/**
 * Initializes the responsive mode to the current window size. This can be used to avoid
 * a re-render during first component mount since the window would otherwise not be measured
 * until after mounting.
 *
 * This WILL NOT trigger any updates to components that have already consumed the responsive mode!
 */
function initializeResponsiveMode(element) {
    var currentWindow = Utilities_1.getWindow(element);
    if (currentWindow) {
        getResponsiveMode(currentWindow);
    }
}
exports.initializeResponsiveMode = initializeResponsiveMode;
function getInitialResponsiveMode() {
    return _defaultMode || _lastMode || ResponsiveMode.large;
}
exports.getInitialResponsiveMode = getInitialResponsiveMode;
/**
 * @deprecated Decorator usage is deprecated. Either call `getResponsiveMode` manually, or
 * use the `useResponsiveMode` hook within a function component.
 */
function withResponsiveMode(ComposedComponent) {
    var _a;
    // eslint-disable-next-line deprecation/deprecation
    var resultClass = (_a = /** @class */ (function (_super) {
            tslib_1.__extends(WithResponsiveMode, _super);
            function WithResponsiveMode(props) {
                var _this = _super.call(this, props) || this;
                _this._onResize = function () {
                    var responsiveMode = getResponsiveMode(_this.context.window);
                    if (responsiveMode !== _this.state.responsiveMode) {
                        _this.setState({
                            responsiveMode: responsiveMode,
                        });
                    }
                };
                _this._events = new Utilities_1.EventGroup(_this);
                _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
                _this.state = {
                    responsiveMode: getInitialResponsiveMode(),
                };
                return _this;
            }
            WithResponsiveMode.prototype.componentDidMount = function () {
                this._events.on(this.context.window, 'resize', this._onResize);
                this._onResize();
            };
            WithResponsiveMode.prototype.componentWillUnmount = function () {
                this._events.dispose();
            };
            WithResponsiveMode.prototype.render = function () {
                var responsiveMode = this.state.responsiveMode;
                return responsiveMode === ResponsiveMode.unknown ? null : (React.createElement(ComposedComponent, tslib_1.__assign({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
            };
            return WithResponsiveMode;
        }(BaseDecorator_1.BaseDecorator)),
        _a.contextType = WindowProvider_1.WindowContext,
        _a);
    return Utilities_1.hoistStatics(ComposedComponent, resultClass);
}
exports.withResponsiveMode = withResponsiveMode;
/**
 * Hook to get the current responsive mode (window size category).
 * @param currentWindow - Use this window when determining the responsive mode.
 */
function getResponsiveMode(currentWindow) {
    var responsiveMode = ResponsiveMode.small;
    if (currentWindow) {
        try {
            while (currentWindow.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                responsiveMode++;
            }
        }
        catch (e) {
            // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
            responsiveMode = getInitialResponsiveMode();
        }
        // Tracking last mode just gives us a better default in future renders,
        // which avoids starting with the wrong value if we've measured once.
        _lastMode = responsiveMode;
    }
    else {
        if (_defaultMode !== undefined) {
            responsiveMode = _defaultMode;
        }
        else {
            throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                'Call setResponsiveMode to define what the responsive mode is.');
        }
    }
    return responsiveMode;
}
exports.getResponsiveMode = getResponsiveMode;
//# sourceMappingURL=withResponsiveMode.js.map