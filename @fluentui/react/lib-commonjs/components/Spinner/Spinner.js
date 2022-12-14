"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Spinner_base_1 = require("./Spinner.base");
var Spinner_styles_1 = require("./Spinner.styles");
exports.Spinner = Utilities_1.styled(Spinner_base_1.SpinnerBase, Spinner_styles_1.getStyles, undefined, { scope: 'Spinner' });
//# sourceMappingURL=Spinner.js.map