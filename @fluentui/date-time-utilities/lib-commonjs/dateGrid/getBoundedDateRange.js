"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoundedDateRange = void 0;
var tslib_1 = require("tslib");
var dateMath_1 = require("../dateMath/dateMath");
/**
 * Generates a list of dates, bounded by min and max dates
 * @param dateRange - input date range
 * @param minDate - min date to limit the range
 * @param maxDate - max date to limit the range
 */
var getBoundedDateRange = function (dateRange, minDate, maxDate) {
    var boundedDateRange = tslib_1.__spreadArrays(dateRange);
    if (minDate) {
        boundedDateRange = boundedDateRange.filter(function (date) { return dateMath_1.compareDatePart(date, minDate) >= 0; });
    }
    if (maxDate) {
        boundedDateRange = boundedDateRange.filter(function (date) { return dateMath_1.compareDatePart(date, maxDate) <= 0; });
    }
    return boundedDateRange;
};
exports.getBoundedDateRange = getBoundedDateRange;
//# sourceMappingURL=getBoundedDateRange.js.map