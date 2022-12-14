define(["require", "exports", "tslib", "react", "./BaseDecorator", "../../Utilities"], function (require, exports, tslib_1, React, BaseDecorator_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function withContainsFocus(ComposedComponent) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(WithContainsFocusComponent, _super);
            function WithContainsFocusComponent(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    containsFocus: false,
                };
                _this._async = new Utilities_1.Async(_this);
                _this._delayedSetContainsFocus = _this._async.debounce(_this._setContainsFocus, 20);
                _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
                _this._handleFocus = _this._handleFocus.bind(_this);
                _this._handleBlur = _this._handleBlur.bind(_this);
                return _this;
            }
            WithContainsFocusComponent.prototype.componentWillUnmount = function () {
                this._async.dispose();
            };
            WithContainsFocusComponent.prototype.render = function () {
                var containsFocus = this.state.containsFocus;
                return (React.createElement("div", { onFocus: this._handleFocus, onBlur: this._handleBlur },
                    React.createElement(ComposedComponent, tslib_1.__assign({ ref: this._updateComposedComponentRef, containsFocus: containsFocus }, this.props))));
            };
            WithContainsFocusComponent.prototype.forceUpdate = function () {
                this._composedComponentInstance.forceUpdate();
            };
            WithContainsFocusComponent.prototype._handleFocus = function (ev) {
                this._newContainsFocus = true;
                this._delayedSetContainsFocus();
            };
            WithContainsFocusComponent.prototype._handleBlur = function (ev) {
                this._newContainsFocus = false;
                this._delayedSetContainsFocus();
            };
            WithContainsFocusComponent.prototype._setContainsFocus = function () {
                if (this.state.containsFocus !== this._newContainsFocus) {
                    this.setState({ containsFocus: this._newContainsFocus });
                }
            };
            return WithContainsFocusComponent;
        }(BaseDecorator_1.BaseDecorator));
    }
    exports.withContainsFocus = withContainsFocus;
});
//# sourceMappingURL=withContainsFocus.js.map