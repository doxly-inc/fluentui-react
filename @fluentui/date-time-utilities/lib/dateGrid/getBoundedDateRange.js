import { __spreadArrays } from "tslib";
import { compareDatePart } from '../dateMath/dateMath';
/**
 * Generates a list of dates, bounded by min and max dates
 * @param dateRange - input date range
 * @param minDate - min date to limit the range
 * @param maxDate - max date to limit the range
 */
export var getBoundedDateRange = function (dateRange, minDate, maxDate) {
    var boundedDateRange = __spreadArrays(dateRange);
    if (minDate) {
        boundedDateRange = boundedDateRange.filter(function (date) { return compareDatePart(date, minDate) >= 0; });
    }
    if (maxDate) {
        boundedDateRange = boundedDateRange.filter(function (date) { return compareDatePart(date, maxDate) <= 0; });
    }
    return boundedDateRange;
};
//# sourceMappingURL=getBoundedDateRange.js.map