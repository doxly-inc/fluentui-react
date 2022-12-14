"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Icon_1 = require("../../Icon");
var Image_1 = require("../../Image");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory DocumentCard}
 */
var DocumentCardImageBase = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentCardImageBase, _super);
    function DocumentCardImageBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onImageLoad = function () {
            _this.setState({ imageHasLoaded: true });
        };
        Utilities_1.initializeComponentRef(_this);
        _this.state = { imageHasLoaded: false };
        return _this;
    }
    DocumentCardImageBase.prototype.render = function () {
        var _a = this.props, styles = _a.styles, width = _a.width, height = _a.height, imageFit = _a.imageFit, imageSrc = _a.imageSrc;
        this._classNames = getClassNames(styles, this.props);
        return (React.createElement("div", { className: this._classNames.root },
            imageSrc && (React.createElement(Image_1.Image, { width: width, height: height, imageFit: imageFit, src: imageSrc, role: "presentation", alt: "", onLoad: this._onImageLoad })),
            this.state.imageHasLoaded ? this._renderCornerIcon() : this._renderCenterIcon()));
    };
    DocumentCardImageBase.prototype._renderCenterIcon = function () {
        var iconProps = this.props.iconProps;
        return (React.createElement("div", { className: this._classNames.centeredIconWrapper },
            React.createElement(Icon_1.Icon, tslib_1.__assign({ className: this._classNames.centeredIcon }, iconProps))));
    };
    DocumentCardImageBase.prototype._renderCornerIcon = function () {
        var iconProps = this.props.iconProps;
        return React.createElement(Icon_1.Icon, tslib_1.__assign({ className: this._classNames.cornerIcon }, iconProps));
    };
    return DocumentCardImageBase;
}(React.Component));
exports.DocumentCardImageBase = DocumentCardImageBase;
//# sourceMappingURL=DocumentCardImage.base.js.map