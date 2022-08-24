import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Icon } from '../../Icon';
import { Image } from '../../Image';
import { Link } from '../../Link';
import { classNamesFunction, css, initializeComponentRef } from '../../Utilities';
var DEFAULT_DISPLAY_COUNT = 3;
var getClassNames = classNamesFunction();
/**
 * {@docCategory DocumentCard}
 */
var DocumentCardPreviewBase = /** @class */ (function (_super) {
    __extends(DocumentCardPreviewBase, _super);
    function DocumentCardPreviewBase(props) {
        var _this = _super.call(this, props) || this;
        _this._renderPreviewList = function (previewImages) {
            var _a = _this.props, getOverflowDocumentCountText = _a.getOverflowDocumentCountText, _b = _a.maxDisplayCount, maxDisplayCount = _b === void 0 ? DEFAULT_DISPLAY_COUNT : _b;
            // Determine how many documents we won't be showing
            var overflowDocumentCount = previewImages.length - maxDisplayCount;
            // Determine the overflow text that will be rendered after the preview list.
            var overflowText = overflowDocumentCount
                ? getOverflowDocumentCountText
                    ? getOverflowDocumentCountText(overflowDocumentCount)
                    : '+' + overflowDocumentCount
                : null;
            // Create list items for the documents to be shown
            var fileListItems = previewImages.slice(0, maxDisplayCount).map(function (file, fileIndex) { return (React.createElement("li", { key: fileIndex },
                React.createElement(Image, { className: _this._classNames.fileListIcon, src: file.iconSrc, role: "presentation", alt: "", width: "16px", height: "16px" }),
                React.createElement(Link, __assign({ className: _this._classNames.fileListLink }, (file.linkProps, { href: (file.linkProps && file.linkProps.href) || file.url })), file.name))); });
            return (React.createElement("div", null,
                React.createElement("ul", { className: _this._classNames.fileList }, fileListItems),
                overflowText && React.createElement("span", { className: _this._classNames.fileListOverflowText }, overflowText)));
        };
        initializeComponentRef(_this);
        return _this;
    }
    DocumentCardPreviewBase.prototype.render = function () {
        var _a = this.props, previewImages = _a.previewImages, styles = _a.styles, theme = _a.theme, className = _a.className;
        var style;
        var preview;
        var isFileList = previewImages.length > 1;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isFileList: isFileList,
        });
        if (previewImages.length > 1) {
            // Render a list of files
            preview = this._renderPreviewList(previewImages);
        }
        else if (previewImages.length === 1) {
            // Render a single preview
            preview = this._renderPreviewImage(previewImages[0]);
            // Override the border color if an accent color was provided
            /* eslint-disable deprecation/deprecation */
            if (previewImages[0].accentColor) {
                style = {
                    borderBottomColor: previewImages[0].accentColor,
                };
            }
            /* eslint-enable deprecation/deprecation */
        }
        return (React.createElement("div", { className: this._classNames.root, style: style }, preview));
    };
    DocumentCardPreviewBase.prototype._renderPreviewImage = function (previewImage) {
        var width = previewImage.width, height = previewImage.height, imageFit = previewImage.imageFit, previewIconProps = previewImage.previewIconProps, previewIconContainerClass = previewImage.previewIconContainerClass;
        if (previewIconProps) {
            return (React.createElement("div", { className: css(this._classNames.previewIcon, previewIconContainerClass), style: { width: width, height: height } },
                React.createElement(Icon, __assign({}, previewIconProps))));
        }
        var image = (React.createElement(Image, { width: width, height: height, imageFit: imageFit, src: previewImage.previewImageSrc, role: "presentation", alt: "" }));
        var icon;
        if (previewImage.iconSrc) {
            icon = React.createElement(Image, { className: this._classNames.icon, src: previewImage.iconSrc, role: "presentation", alt: "" });
        }
        return (React.createElement("div", null,
            image,
            icon));
    };
    return DocumentCardPreviewBase;
}(React.Component));
export { DocumentCardPreviewBase };
//# sourceMappingURL=DocumentCardPreview.base.js.map