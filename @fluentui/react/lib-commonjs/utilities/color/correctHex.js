"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
/**
 * Corrects a hex color to have length 3 or 6. Defaults to white if too short.
 * Does NOT check anything besides the length (such as valid characters) and does NOT handle
 * hex values starting with # sign.
 */
function correctHex(hex) {
    if (!hex || hex.length < consts_1.MIN_HEX_LENGTH) {
        return 'ffffff'; // not a valid color--default to white
    }
    if (hex.length >= consts_1.MAX_HEX_LENGTH) {
        return hex.substring(0, consts_1.MAX_HEX_LENGTH);
    }
    return hex.substring(0, consts_1.MIN_HEX_LENGTH);
}
exports.correctHex = correctHex;
//# sourceMappingURL=correctHex.js.map