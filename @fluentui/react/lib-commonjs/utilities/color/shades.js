"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var Utilities_1 = require("../../Utilities");
var clamp_1 = require("./clamp");
var getColorFromRGBA_1 = require("./getColorFromRGBA");
var hsv2hsl_1 = require("./hsv2hsl");
var hsv2rgb_1 = require("./hsv2rgb");
// Soften: to get closer to the background color's luminance
// (softening with a white background would be lightening, with black it'd be darkening)
// Strongen: opposite of soften
// Luminance multiplier constants for generating shades of a given color
var WhiteShadeTableBG = [0.027, 0.043, 0.082, 0.145, 0.184, 0.216, 0.349, 0.537]; // white bg
var BlackTintTableBG = [0.537, 0.45, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043]; // black bg
var WhiteShadeTable = [0.537, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043, 0.027]; // white fg
var BlackTintTable = [0.537, 0.45, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043]; // black fg
var LumTintTable = [0.88, 0.77, 0.66, 0.55, 0.44, 0.33, 0.22, 0.11]; // light (strongen all)
var LumShadeTable = [0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88]; // dark (soften all)
var ColorTintTable = [0.96, 0.84, 0.7, 0.4, 0.12]; // default soften
var ColorShadeTable = [0.1, 0.24, 0.44]; // default strongen
// If the given shade's luminance is below/above these values, we'll swap to using the White/Black tables above
var LowLuminanceThreshold = 0.2;
var HighLuminanceThreshold = 0.8;
/** Shades of a given color, from softest to strongest. */
var Shade;
(function (Shade) {
    Shade[Shade["Unshaded"] = 0] = "Unshaded";
    Shade[Shade["Shade1"] = 1] = "Shade1";
    Shade[Shade["Shade2"] = 2] = "Shade2";
    Shade[Shade["Shade3"] = 3] = "Shade3";
    Shade[Shade["Shade4"] = 4] = "Shade4";
    Shade[Shade["Shade5"] = 5] = "Shade5";
    Shade[Shade["Shade6"] = 6] = "Shade6";
    Shade[Shade["Shade7"] = 7] = "Shade7";
    Shade[Shade["Shade8"] = 8] = "Shade8";
    // remember to update isValidShade()!
})(Shade = exports.Shade || (exports.Shade = {}));
/**
 * Returns true if the argument is a valid Shade value
 * @param shade - The Shade value to validate.
 */
function isValidShade(shade) {
    return typeof shade === 'number' && shade >= Shade.Unshaded && shade <= Shade.Shade8;
}
exports.isValidShade = isValidShade;
function _isBlack(color) {
    return color.r === 0 && color.g === 0 && color.b === 0;
}
function _isWhite(color) {
    return color.r === consts_1.MAX_COLOR_RGB && color.g === consts_1.MAX_COLOR_RGB && color.b === consts_1.MAX_COLOR_RGB;
}
function _darken(hsv, factor) {
    return {
        h: hsv.h,
        s: hsv.s,
        v: clamp_1.clamp(hsv.v - hsv.v * factor, 100, 0),
    };
}
function _lighten(hsv, factor) {
    return {
        h: hsv.h,
        s: clamp_1.clamp(hsv.s - hsv.s * factor, 100, 0),
        v: clamp_1.clamp(hsv.v + (100 - hsv.v) * factor, 100, 0),
    };
}
function isDark(color) {
    return hsv2hsl_1.hsv2hsl(color.h, color.s, color.v).l < 50;
}
exports.isDark = isDark;
/**
 * Given a color and a shade specification, generates the requested shade of the color.
 * Logic:
 * if white
 *  darken via tables defined above
 * if black
 *  lighten
 * if light
 *  strongen
 * if dark
 *  soften
 * else default
 *  soften or strongen depending on shade#
 * @param color - The base color whose shade is to be computed
 * @param shade - The shade of the base color to compute
 * @param isInverted - Default false. Whether the given theme is inverted (reverse strongen/soften logic)
 */
function getShade(color, shade, isInverted) {
    if (isInverted === void 0) { isInverted = false; }
    if (!color) {
        return null;
    }
    if (shade === Shade.Unshaded || !isValidShade(shade)) {
        return color;
    }
    var hsl = hsv2hsl_1.hsv2hsl(color.h, color.s, color.v);
    var hsv = { h: color.h, s: color.s, v: color.v };
    var tableIndex = shade - 1;
    var _soften = _lighten;
    var _strongen = _darken;
    if (isInverted) {
        _soften = _darken;
        _strongen = _lighten;
    }
    if (_isWhite(color)) {
        // white
        hsv = _darken(hsv, WhiteShadeTable[tableIndex]);
    }
    else if (_isBlack(color)) {
        // black
        hsv = _lighten(hsv, BlackTintTable[tableIndex]);
    }
    else if (hsl.l / 100 > HighLuminanceThreshold) {
        // light
        hsv = _strongen(hsv, LumShadeTable[tableIndex]);
    }
    else if (hsl.l / 100 < LowLuminanceThreshold) {
        // dark
        hsv = _soften(hsv, LumTintTable[tableIndex]);
    }
    else {
        // default
        if (tableIndex < ColorTintTable.length) {
            hsv = _soften(hsv, ColorTintTable[tableIndex]);
        }
        else {
            hsv = _strongen(hsv, ColorShadeTable[tableIndex - ColorTintTable.length]);
        }
    }
    return getColorFromRGBA_1.getColorFromRGBA(Utilities_1.assign(hsv2rgb_1.hsv2rgb(hsv.h, hsv.s, hsv.v), { a: color.a }));
}
exports.getShade = getShade;
// Background shades/tints are generated differently. The provided color will be guaranteed
//   to be the darkest or lightest one. If it is <50% luminance, it will always be the darkest,
//   otherwise it will always be the lightest.
function getBackgroundShade(color, shade, isInverted) {
    if (isInverted === void 0) { isInverted = false; }
    if (!color) {
        return null;
    }
    if (shade === Shade.Unshaded || !isValidShade(shade)) {
        return color;
    }
    var hsv = { h: color.h, s: color.s, v: color.v };
    var tableIndex = shade - 1;
    if (!isInverted) {
        // lightish
        hsv = _darken(hsv, WhiteShadeTableBG[tableIndex]);
    }
    else {
        // default: if (hsl.l / 100 < .5) { // darkish
        hsv = _lighten(hsv, BlackTintTableBG[BlackTintTable.length - 1 - tableIndex]);
    }
    return getColorFromRGBA_1.getColorFromRGBA(Utilities_1.assign(hsv2rgb_1.hsv2rgb(hsv.h, hsv.s, hsv.v), { a: color.a }));
}
exports.getBackgroundShade = getBackgroundShade;
/* Calculates the contrast ratio between two colors. Used for verifying
 * color pairs meet minimum accessibility requirements.
 * See: https://www.w3.org/TR/WCAG20/ section 1.4.3
 */
function getContrastRatio(color1, color2) {
    // Formula defined by: http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef
    // relative luminance: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    /* calculate the intermediate value needed to calculating relative luminance */
    function _getThing(x) {
        if (x <= 0.03928) {
            return x / 12.92;
        }
        else {
            return Math.pow((x + 0.055) / 1.055, 2.4);
        }
    }
    var r1 = _getThing(color1.r / consts_1.MAX_COLOR_RGB);
    var g1 = _getThing(color1.g / consts_1.MAX_COLOR_RGB);
    var b1 = _getThing(color1.b / consts_1.MAX_COLOR_RGB);
    var L1 = 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1; // relative luminance of first color
    L1 += 0.05;
    var r2 = _getThing(color2.r / consts_1.MAX_COLOR_RGB);
    var g2 = _getThing(color2.g / consts_1.MAX_COLOR_RGB);
    var b2 = _getThing(color2.b / consts_1.MAX_COLOR_RGB);
    var L2 = 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2; // relative luminance of second color
    L2 += 0.05;
    // return the lighter color divided by darker
    return L1 / L2 > 1 ? L1 / L2 : L2 / L1;
}
exports.getContrastRatio = getContrastRatio;
//# sourceMappingURL=shades.js.map