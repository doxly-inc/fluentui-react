define(["require", "exports", "../../../Utilities", "./PersonaCoin.base", "./PersonaCoin.styles"], function (require, exports, Utilities_1, PersonaCoin_base_1, PersonaCoin_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * PersonaCoin is used to render an individual's avatar and presence.
     */
    exports.PersonaCoin = Utilities_1.styled(PersonaCoin_base_1.PersonaCoinBase, PersonaCoin_styles_1.getStyles, undefined, {
        scope: 'PersonaCoin',
    });
});
//# sourceMappingURL=PersonaCoin.js.map