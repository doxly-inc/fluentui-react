define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Persona}
     */
    var PersonaSize;
    (function (PersonaSize) {
        /**
         * Deprecated in favor of standardized numeric sizing.
         * @deprecated Use `size8` instead.
         */
        PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
        /**
         * Deprecated in favor of standardized numeric sizing.
         * @deprecated Use `size24` instead.
         */
        PersonaSize[PersonaSize["extraExtraSmall"] = 1] = "extraExtraSmall";
        /**
         * Deprecated in favor of standardized numeric sizing.
         * @deprecated Use `size32` instead.
         */
        PersonaSize[PersonaSize["extraSmall"] = 2] = "extraSmall";
        /**
         * Deprecated in favor of standardized numeric sizing.
         * @deprecated Use `size40` instead.
         */
        PersonaSize[PersonaSize["small"] = 3] = "small";
        /**
         * Deprecated in favor of standardized numeric sizing.
         * @deprecated Use `size48` instead.
         */
        PersonaSize[PersonaSize["regular"] = 4] = "regular";
        /**
         * Deprecated in favor of standardized numeric sizing.
         * @deprecated Use `size72` instead.
         */
        PersonaSize[PersonaSize["large"] = 5] = "large";
        /**
         * Deprecated in favor of standardized numeric sizing.
         * @deprecated Use `size100` instead.
         */
        PersonaSize[PersonaSize["extraLarge"] = 6] = "extraLarge";
        /**
         * No `PersonaCoin` is rendered.
         */
        PersonaSize[PersonaSize["size8"] = 17] = "size8";
        /**
         * No `PersonaCoin` is rendered. Deprecated to align with design specifications.
         * @deprecated Use `size8` instead.
         */
        PersonaSize[PersonaSize["size10"] = 9] = "size10";
        /**
         * Renders a 16px `PersonaCoin`.
         * @deprecated Deprecated due to not being in the design specification.
         */
        PersonaSize[PersonaSize["size16"] = 8] = "size16";
        /**
         * Renders a 24px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size24"] = 10] = "size24";
        /**
         * Renders a 28px `PersonaCoin`.
         * @deprecated Deprecated due to not being in the design specification.
         */
        PersonaSize[PersonaSize["size28"] = 7] = "size28";
        /**
         * Renders a 32px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size32"] = 11] = "size32";
        /**
         * Renders a 40px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size40"] = 12] = "size40";
        /**
         * Renders a 48px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size48"] = 13] = "size48";
        /**
         * Renders a 56px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size56"] = 16] = "size56";
        /**
         * Renders a 72px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size72"] = 14] = "size72";
        /**
         * Renders a 100px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size100"] = 15] = "size100";
        /**
         * Renders a 120px `PersonaCoin`.
         */
        PersonaSize[PersonaSize["size120"] = 18] = "size120";
    })(PersonaSize = exports.PersonaSize || (exports.PersonaSize = {}));
    /**
     * {@docCategory Persona}
     */
    var PersonaPresence;
    (function (PersonaPresence) {
        PersonaPresence[PersonaPresence["none"] = 0] = "none";
        PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
        PersonaPresence[PersonaPresence["online"] = 2] = "online";
        PersonaPresence[PersonaPresence["away"] = 3] = "away";
        PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
        PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
        PersonaPresence[PersonaPresence["busy"] = 6] = "busy";
    })(PersonaPresence = exports.PersonaPresence || (exports.PersonaPresence = {}));
    /**
     * {@docCategory Persona}
     */
    var PersonaInitialsColor;
    (function (PersonaInitialsColor) {
        PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
        PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
        PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
        PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
        PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
        PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
        PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
        PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
        PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
        PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
        PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
        /**
         * @deprecated `black` is a color that can result in offensive persona coins with some initials combinations,
         * so it can only be set with overrides. Will be removed in a future major release.
         */
        PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
        PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
        /**
         * @deprecated `red` is a color that often has a special meaning, so it is considered a reserved color and
         * can only be set with overrides. Will be removed in a future major release.
         */
        PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
        PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
        /**
         * Transparent is not intended to be used with typical initials due to accessibility issues.
         * Its primary use is for overflow buttons, so it is considered a reserved color and can only be set with overrides.
         */
        PersonaInitialsColor[PersonaInitialsColor["transparent"] = 15] = "transparent";
        PersonaInitialsColor[PersonaInitialsColor["violet"] = 16] = "violet";
        PersonaInitialsColor[PersonaInitialsColor["lightRed"] = 17] = "lightRed";
        PersonaInitialsColor[PersonaInitialsColor["gold"] = 18] = "gold";
        PersonaInitialsColor[PersonaInitialsColor["burgundy"] = 19] = "burgundy";
        PersonaInitialsColor[PersonaInitialsColor["warmGray"] = 20] = "warmGray";
        PersonaInitialsColor[PersonaInitialsColor["coolGray"] = 21] = "coolGray";
        /**
         * `gray` is a color that can result in offensive persona coins with some initials combinations,
         * so it can only be set with overrides.
         */
        PersonaInitialsColor[PersonaInitialsColor["gray"] = 22] = "gray";
        PersonaInitialsColor[PersonaInitialsColor["cyan"] = 23] = "cyan";
        PersonaInitialsColor[PersonaInitialsColor["rust"] = 24] = "rust";
    })(PersonaInitialsColor = exports.PersonaInitialsColor || (exports.PersonaInitialsColor = {}));
});
//# sourceMappingURL=Persona.types.js.map