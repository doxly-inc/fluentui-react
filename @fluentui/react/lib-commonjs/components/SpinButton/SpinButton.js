"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var SpinButton_base_1 = require("./SpinButton.base");
var SpinButton_styles_1 = require("./SpinButton.styles");
/**
 * The SpinButton control and related tabs pattern are used for navigating frequently accessed,
 * distinct content categories. SpinButtons allow for navigation between two or more content
 * views and relies on text headers to articulate the different sections of content.
 */
exports.SpinButton = Utilities_1.styled(SpinButton_base_1.SpinButtonBase, SpinButton_styles_1.getStyles, undefined, {
    scope: 'SpinButton',
});
//# sourceMappingURL=SpinButton.js.map