"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style_utilities_1 = require("@fluentui/style-utilities");
var FileTypeIconMap_1 = require("./FileTypeIconMap");
var PNG_SUFFIX = '_png';
var SVG_SUFFIX = '_svg';
exports.DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20210115.001/assets/item-types/';
exports.ICON_SIZES = [16, 20, 24, 32, 40, 48, 64, 96];
function initializeFileTypeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = exports.DEFAULT_BASE_URL; }
    exports.ICON_SIZES.forEach(function (size) {
        _initializeIcons(baseUrl, size, options);
    });
}
exports.initializeFileTypeIcons = initializeFileTypeIcons;
function _initializeIcons(baseUrl, size, options) {
    var iconTypes = Object.keys(FileTypeIconMap_1.FileTypeIconMap);
    var fileTypeIcons = {};
    iconTypes.forEach(function (type) {
        var baseUrlSizeType = baseUrl + size + '/' + type;
        fileTypeIcons[type + size + PNG_SUFFIX] = React.createElement("img", { src: baseUrlSizeType + '.png', alt: "" });
        fileTypeIcons[type + size + SVG_SUFFIX] = React.createElement("img", { src: baseUrlSizeType + '.svg', alt: "" });
        // For high resolution screens, register additional versions
        // Apply height=100% and width=100% to force image to fit into containing element
        // SVGs scale well, so you can generally use the default image.
        // 1.5x is a special case where both SVGs and PNGs need a different image.
        fileTypeIcons[type + size + '_1.5x' + PNG_SUFFIX] = (React.createElement("img", { src: baseUrl + size + '_1.5x/' + type + '.png', height: "100%", width: "100%" }));
        fileTypeIcons[type + size + '_1.5x' + SVG_SUFFIX] = (React.createElement("img", { src: baseUrl + size + '_1.5x/' + type + '.svg', height: "100%", width: "100%" }));
        fileTypeIcons[type + size + '_2x' + PNG_SUFFIX] = (React.createElement("img", { src: baseUrl + size + '_2x/' + type + '.png', height: "100%", width: "100%" }));
        fileTypeIcons[type + size + '_3x' + PNG_SUFFIX] = (React.createElement("img", { src: baseUrl + size + '_3x/' + type + '.png', height: "100%", width: "100%" }));
        fileTypeIcons[type + size + '_4x' + PNG_SUFFIX] = (React.createElement("img", { src: baseUrl + size + '_4x/' + type + '.png', height: "100%", width: "100%" }));
    });
    style_utilities_1.registerIcons({
        fontFace: {},
        style: {
            width: size,
            height: size,
            overflow: 'hidden',
        },
        icons: fileTypeIcons,
    }, options);
}
//# sourceMappingURL=initializeFileTypeIcons.js.map