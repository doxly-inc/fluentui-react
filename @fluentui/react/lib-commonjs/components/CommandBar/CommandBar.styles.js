"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Utilities_1 = require("../../Utilities");
var COMMAND_BAR_HEIGHT = 44;
exports.getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var semanticColors = theme.semanticColors;
    return {
        root: [
            theme.fonts.medium,
            'ms-CommandBar',
            {
                display: 'flex',
                backgroundColor: semanticColors.bodyBackground,
                padding: '0 14px 0 24px',
                height: COMMAND_BAR_HEIGHT,
            },
            className,
        ],
        primarySet: [
            'ms-CommandBar-primaryCommand',
            {
                flexGrow: '1',
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
        secondarySet: [
            'ms-CommandBar-secondaryCommand',
            {
                flexShrink: '0',
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
    };
};
exports.getCommandButtonStyles = Utilities_1.memoizeFunction(function (customStyles) {
    var rootStyles = {
        height: '100%',
    };
    var labelStyles = {
        whiteSpace: 'nowrap',
    };
    var _a = customStyles || {}, root = _a.root, label = _a.label, restCustomStyles = tslib_1.__rest(_a, ["root", "label"]);
    return tslib_1.__assign(tslib_1.__assign({}, restCustomStyles), { root: root ? [rootStyles, root] : rootStyles, label: label ? [labelStyles, label] : labelStyles });
});
//# sourceMappingURL=CommandBar.styles.js.map