"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../../Utilities");
var PersonaCoin_base_1 = require("./PersonaCoin.base");
var PersonaCoin_styles_1 = require("./PersonaCoin.styles");
/**
 * PersonaCoin is used to render an individual's avatar and presence.
 */
exports.PersonaCoin = Utilities_1.styled(PersonaCoin_base_1.PersonaCoinBase, PersonaCoin_styles_1.getStyles, undefined, {
    scope: 'PersonaCoin',
});
//# sourceMappingURL=PersonaCoin.js.map