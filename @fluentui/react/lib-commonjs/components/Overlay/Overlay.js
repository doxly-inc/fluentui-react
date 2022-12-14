"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Overlay_base_1 = require("./Overlay.base");
var Overlay_styles_1 = require("./Overlay.styles");
exports.Overlay = Utilities_1.styled(Overlay_base_1.OverlayBase, Overlay_styles_1.getStyles, undefined, {
    scope: 'Overlay',
});
//# sourceMappingURL=Overlay.js.map