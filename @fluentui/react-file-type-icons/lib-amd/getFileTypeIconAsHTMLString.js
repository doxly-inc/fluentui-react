define(["require", "exports", "./initializeFileTypeIcons", "./getFileTypeIconProps"], function (require, exports, initializeFileTypeIcons_1, getFileTypeIconProps_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Given the `fileTypeIconOptions`, this function returns the DOM element for the `FileTypeIcon`
     * as an HTML string. Similar to `getFileTypeIconProps`, this also accepts the same type of object
     * but rather than returning the `iconName`, this returns the entire DOM element as a string.
     * @param options
     * @param baseUrl - optionally provide a custom CDN base url to fetch icons from
     */
    function getFileTypeIconAsHTMLString(options, baseUrl) {
        if (baseUrl === void 0) { baseUrl = initializeFileTypeIcons_1.DEFAULT_BASE_URL; }
        var extension = options.extension, _a = options.size, size = _a === void 0 ? getFileTypeIconProps_1.DEFAULT_ICON_SIZE : _a, type = options.type, imageFileType = options.imageFileType;
        var baseIconName = getFileTypeIconProps_1.getFileTypeIconNameFromExtensionOrType(extension, type); // eg: docx
        var baseSuffix = getFileTypeIconProps_1.getFileTypeIconSuffix(size, imageFileType); // eg: 96_3x_svg or 96_png
        var suffixArray = baseSuffix.split('_'); // eg: ['96', '3x', 'svg']
        var src;
        if (suffixArray.length === 3) {
            /** suffix is of type 96_3x_svg  - it has a pixel ratio > 1*/
            src = "" + baseUrl + size + "_" + suffixArray[1] + "/" + baseIconName + "." + suffixArray[2];
            return "<img src=\"" + src + "\" height=\"100%\" width=\"100%\" />";
        }
        else if (suffixArray.length === 2) {
            /** suffix is of type 96_svg  - it has a pixel ratio of 1*/
            src = "" + baseUrl + size + "/" + baseIconName + "." + suffixArray[1];
            return "<img src=\"" + src + "\" alt=\"\" />";
        }
    }
    exports.getFileTypeIconAsHTMLString = getFileTypeIconAsHTMLString;
});
//# sourceMappingURL=getFileTypeIconAsHTMLString.js.map