"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
// if the percentComplete is near 0, don't animate it.
// This prevents animations on reset to 0 scenarios
var ZERO_THRESHOLD = 0.01;
/**
 * ProgressIndicator with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var ProgressIndicatorBase = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressIndicatorBase, _super);
    function ProgressIndicatorBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderProgress = function (props) {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, ariaValueText = _a.ariaValueText, barHeight = _a.barHeight, className = _a.className, description = _a.description, _b = _a.label, label = _b === void 0 ? _this.props.title : _b, styles = _a.styles, theme = _a.theme;
            var percentComplete = typeof _this.props.percentComplete === 'number'
                ? Math.min(100, Math.max(0, _this.props.percentComplete * 100))
                : undefined;
            var classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                barHeight: barHeight,
                indeterminate: percentComplete === undefined ? true : false,
            });
            var progressBarStyles = {
                width: percentComplete !== undefined ? percentComplete + '%' : undefined,
                transition: percentComplete !== undefined && percentComplete < ZERO_THRESHOLD ? 'none' : undefined,
            };
            var ariaValueMin = percentComplete !== undefined ? 0 : undefined;
            var ariaValueMax = percentComplete !== undefined ? 100 : undefined;
            var ariaValueNow = percentComplete !== undefined ? Math.floor(percentComplete) : undefined;
            return (React.createElement("div", { className: classNames.itemProgress },
                React.createElement("div", { className: classNames.progressTrack }),
                React.createElement("div", { className: classNames.progressBar, style: progressBarStyles, role: "progressbar", "aria-describedby": description ? _this._descriptionId : undefined, "aria-labelledby": label ? _this._labelId : undefined, "aria-valuemin": ariaValueMin, "aria-valuemax": ariaValueMax, "aria-valuenow": ariaValueNow, "aria-valuetext": ariaValueText })));
        };
        var id = Utilities_1.getId('progress-indicator');
        _this._labelId = id + '-label';
        _this._descriptionId = id + '-description';
        return _this;
    }
    ProgressIndicatorBase.prototype.render = function () {
        var _a = this.props, barHeight = _a.barHeight, className = _a.className, 
        // eslint-disable-next-line deprecation/deprecation
        _b = _a.label, 
        // eslint-disable-next-line deprecation/deprecation
        label = _b === void 0 ? this.props.title : _b, // Fall back to deprecated value.
        description = _a.description, styles = _a.styles, theme = _a.theme, progressHidden = _a.progressHidden, _c = _a.onRenderProgress, onRenderProgress = _c === void 0 ? this._onRenderProgress : _c;
        var percentComplete = typeof this.props.percentComplete === 'number'
            ? Math.min(100, Math.max(0, this.props.percentComplete * 100))
            : undefined;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            barHeight: barHeight,
            indeterminate: percentComplete === undefined ? true : false,
        });
        return (React.createElement("div", { className: classNames.root },
            label ? (React.createElement("div", { id: this._labelId, className: classNames.itemName }, label)) : null,
            !progressHidden
                ? onRenderProgress(tslib_1.__assign(tslib_1.__assign({}, this.props), { percentComplete: percentComplete }), this._onRenderProgress)
                : null,
            description ? (React.createElement("div", { id: this._descriptionId, className: classNames.itemDescription }, description)) : null));
    };
    ProgressIndicatorBase.defaultProps = {
        label: '',
        description: '',
        width: 180,
    };
    return ProgressIndicatorBase;
}(React.Component));
exports.ProgressIndicatorBase = ProgressIndicatorBase;
//# sourceMappingURL=ProgressIndicator.base.js.map