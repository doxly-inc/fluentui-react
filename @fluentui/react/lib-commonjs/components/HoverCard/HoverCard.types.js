"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * {@docCategory HoverCard}
 */
var OpenCardMode;
(function (OpenCardMode) {
    /**
     * Open card by hover
     */
    OpenCardMode[OpenCardMode["hover"] = 0] = "hover";
    /**
     * Open card by hot key
     */
    OpenCardMode[OpenCardMode["hotKey"] = 1] = "hotKey";
})(OpenCardMode = exports.OpenCardMode || (exports.OpenCardMode = {}));
/**
 * {@docCategory HoverCard}
 */
var HoverCardType;
(function (HoverCardType) {
    /**
     * Plain card consisting of one part responsive to the size of content.
     */
    HoverCardType["plain"] = "PlainCard";
    /**
     * File card consisting of two parts: compact and expanded. Has some default sizes if not specified.
     */
    HoverCardType["expanding"] = "ExpandingCard";
})(HoverCardType = exports.HoverCardType || (exports.HoverCardType = {}));
//# sourceMappingURL=HoverCard.types.js.map