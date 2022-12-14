
/**
 * Returns a date offset from the given date by the specified number of days.
 * @param date - The origin date
 * @param days - The number of days to offset. 'days' can be negative.
 * @returns A new Date object offset from the origin date by the given number of days
 */
export declare function addDays(date: Date, days: number): Date;

/**
 * Returns a date offset from the given date by the specified number of minutes.
 * @param date - The origin date
 * @param minutes - The number of minutes to offset. 'minutes' can be negative.
 * @returns A new Date object offset from the origin date by the given number of minutes
 */
export declare const addMinutes: (date: Date, minutes: number) => Date;

/**
 * Returns a date offset from the given date by the specified number of months.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param date - The origin date
 * @param months - The number of months to offset. 'months' can be negative.
 * @returns A new Date object offset from the origin date by the given number of months
 */
export declare function addMonths(date: Date, months: number): Date;

/**
 * Returns a date offset from the given date by the specified number of weeks.
 * @param date - The origin date
 * @param weeks - The number of weeks to offset. 'weeks' can be negative.
 * @returns A new Date object offset from the origin date by the given number of weeks
 */
export declare function addWeeks(date: Date, weeks: number): Date;

/**
 * Returns a date offset from the given date by the specified number of years.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param date - The origin date
 * @param years - The number of years to offset. 'years' can be negative.
 * @returns A new Date object offset from the origin date by the given number of years
 */
export declare function addYears(date: Date, years: number): Date;

/**
 * Rounds the date's minute up to the next available increment. For example, if `date` has time 1:21
 * and `increments` is 5, the resulting time will be 1:25.
 * @param date - Date to ceil minutes
 * @param increments - Time increments
 * @returns Date with ceiled minute
 */
export declare const ceilMinuteToIncrement: (date: Date, increments: number) => Date;

/**
 * Compare the date parts of two dates
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @returns A negative value if date1 is earlier than date2, 0 if the dates are equal, or a positive value
 * if date1 is later than date2.
 */
export declare function compareDatePart(date1: Date, date2: Date): Number;

/**
 * Compares two dates, and returns true if the two dates (not accounting for time-of-day) are equal.
 * @returns True if the two dates represent the same date (regardless of time-of-day), false otherwise.
 */
export declare function compareDates(date1: Date, date2: Date): boolean;

/**
 * The supported date range types
 * {@docCategory DateTimeUtilities}
 */
export declare enum DateRangeType {
    Day = 0,
    Week = 1,
    Month = 2,
    WorkWeek = 3
}

/**
 * The days of the week
 * {@docCategory DateTimeUtilities}
 */
export declare enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

export declare const DAYS_IN_WEEK = 7;

export declare const DEFAULT_CALENDAR_STRINGS: ICalendarStrings;

export declare const DEFAULT_DATE_FORMATTING: IDateFormatting;

export declare const DEFAULT_DATE_GRID_STRINGS: IDateGridStrings;

/**
 * Returns closest available date given the restriction `options`, or undefined otherwise
 * @param options - list of search options
 */
export declare const findAvailableDate: (options: IAvailableDateOptions) => Date | undefined;

/**
 * First week of the year settings types
 * {@docCategory DateTimeUtilities}
 */
export declare enum FirstWeekOfYear {
    FirstDay = 0,
    FirstFullWeek = 1,
    FirstFourDayWeek = 2
}

/**
 * Format date to a day string representation
 * @param date - input date to format
 */
export declare const formatDay: (date: Date) => string;

/**
 * Format date to a month string
 * @param date - input date to format
 * @param strings - localized strings
 */
export declare const formatMonth: (date: Date, strings: IDateGridStrings) => string;

/**
 * Format date to a month-day-year string
 * @param date - input date to format
 * @param strings - localized strings
 */
export declare const formatMonthDayYear: (date: Date, strings: IDateGridStrings) => string;

/**
 * Format date to a month-year string
 * @param date - input date to format
 * @param strings - localized strings
 */
export declare const formatMonthYear: (date: Date, strings: IDateGridStrings) => string;

/**
 * Format a date object to a localized time string using the browser's default locale
 * @param date - Input date to format
 * @param showSeconds - Whether to show seconds in the formatted string
 * @param useHour12 - Whether to use 12-hour time
 */
export declare const formatTimeString: (date: Date, showSeconds?: boolean | undefined, useHour12?: boolean | undefined) => string;

/**
 * Format date to a year string representation
 * @param date - input date to format
 */
export declare const formatYear: (date: Date) => string;

/**
 * Generates a list of dates, bounded by min and max dates
 * @param dateRange - input date range
 * @param minDate - min date to limit the range
 * @param maxDate - max date to limit the range
 */
export declare const getBoundedDateRange: (dateRange: Date[], minDate?: Date | undefined, maxDate?: Date | undefined) => Date[];

/**
 * Helper function to assist in date comparisons
 */
export declare function getDatePartHashValue(date: Date): number;

/**
 * Gets the date range array including the specified date. The date range array is calculated as the list
 * of dates accounting for the specified first day of the week and date range type.
 * @param date - The input date
 * @param dateRangeType - The desired date range type, i.e., day, week, month, etc.
 * @param firstDayOfWeek - The first day of the week.
 * @param workWeekDays - The allowed days in work week. If not provided, assumes all days are allowed.
 * @param daysToSelectInDayView - The number of days to include when using dateRangeType === DateRangeType.Day
 * for multiday view. Defaults to 1
 * @returns An array of dates representing the date range containing the specified date.
 */
export declare function getDateRangeArray(date: Date, dateRangeType: DateRangeType, firstDayOfWeek: DayOfWeek, workWeekDays?: DayOfWeek[], daysToSelectInDayView?: number): Date[];

/**
 * Return corrected date range type, given `dateRangeType` and list of working days.
 * For non-contiguous working days and working week range type, returns general week range type.
 * For other cases returns input date range type.
 * @param dateRangeType - input type of range
 * @param workWeekDays - list of working days in a week
 */
export declare const getDateRangeTypeToUse: (dateRangeType: DateRangeType, workWeekDays: DayOfWeek[] | undefined, firstDayOfWeek: DayOfWeek) => DateRangeType;

/**
 * Generates a grid of days, given the `options`.
 * Returns one additional week at the begining from the previous range
 * and one at the end from the future range
 * @param options - parameters to specify date related restrictions for the resulting grid
 */
export declare const getDayGrid: (options: IDayGridOptions) => IDay[][];

/**
 * Gets the date for the last day of the week based on the given date assuming
 * the specified first day of the week.
 * @param date - The date to find the beginning of the week date for.
 * @returns A new date object representing the first day of the week containing the input date.
 */
export declare function getEndDateOfWeek(date: Date, firstDayOfWeek: DayOfWeek): Date;

/**
 * Returns a date that is the last day of the month of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the last day of the month.
 */
export declare function getMonthEnd(date: Date): Date;

/**
 * Returns a date that is the first day of the month of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the first day of the month.
 */
export declare function getMonthStart(date: Date): Date;

/**
 * Gets the date for the first day of the week based on the given date assuming
 * the specified first day of the week.
 * @param date - The date to find the beginning of the week date for.
 * @returns A new date object representing the first day of the week containing the input date.
 */
export declare function getStartDateOfWeek(date: Date, firstDayOfWeek: DayOfWeek): Date;

/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param date - A date to find the week number for.
 * @param firstDayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param firstWeekOfYear - The first week of the year (1-2)
 * @returns The week's number in the year.
 */
export declare function getWeekNumber(date: Date, firstDayOfWeek: DayOfWeek, firstWeekOfYear: FirstWeekOfYear): number;

/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param navigatedDate - A date to find the week number for.
 * @param firstDayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param firstWeekOfYear - The first week of the year (1-2)
 * @returns The weeks number array for the current month.
 */
export declare function getWeekNumbersInMonth(weeksInMonth: number, firstDayOfWeek: DayOfWeek, firstWeekOfYear: FirstWeekOfYear, navigatedDate: Date): number[];

/**
 * Returns a date that is the last day of the year of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the last day of the year.
 */
export declare function getYearEnd(date: Date): Date;

/**
 * Returns a date that is the first day of the year of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the first day of the year.
 */
export declare function getYearStart(date: Date): Date;

export declare interface IAvailableDateOptions extends IRestrictedDatesOptions {
    /** Date from which we start the search */
    initialDate: Date;
    /** Ideal available date */
    targetDate: Date;
    /** Direction of search (`1` - search in future / `-1` search in past) */
    direction: number;
}

/**
 * {@docCategory DateTimeUtilities}
 */
export declare interface ICalendarStrings extends IDateGridStrings {
    /**
     * String to render for button to direct the user to today's date.
     */
    goToToday: string;
    /**
     * Aria-label for the "previous month" button in day picker.
     */
    prevMonthAriaLabel?: string;
    /**
     * Aria-label for the "next month" button in day picker.
     */
    nextMonthAriaLabel?: string;
    /**
     * Aria-label for the "previous year" button in month picker.
     */
    prevYearAriaLabel?: string;
    /**
     * Aria-label for the "next year" button in month picker.
     */
    nextYearAriaLabel?: string;
    /**
     * Aria-label for the "previous year range" button in year picker.
     */
    prevYearRangeAriaLabel?: string;
    /**
     * Aria-label for the "next year range" button in year picker.
     */
    nextYearRangeAriaLabel?: string;
    /**
     * Aria-label format string for the header button in the month picker. Should have 1 string param, e.g. "`{0}`,
     * select to change the year". This aria-label will only be applied if the year picker is enabled; otherwise
     * the label will default to the header string, e.g. "2019".
     */
    monthPickerHeaderAriaLabel?: string;
    /**
     * Aria-label format string for the header button in the year picker.
     * Should have 1 string param, e.g. "`{0}`, select to change the month"
     */
    yearPickerHeaderAriaLabel?: string;
    /**
     * Aria-label for the "close" button.
     */
    closeButtonAriaLabel?: string;
    /**
     * Aria-label format string for the week number header. Should have 1 string param, e.g. "week number `{0}`"
     */
    weekNumberFormatString?: string;
    /**
     * Aria-label format string for the currently selected date. Should have 1 string param, e.g. "Selected date `{0}`"
     */
    selectedDateFormatString?: string;
    /**
     * Aria-label format string for today's date. Should have 1 string param, e.g. "Today's date `{0}`"
     */
    todayDateFormatString?: string;
    /**
     * Aria-label for when a date is marked
     */
    dayMarkedAriaLabel?: string;
}

/**
 * {@docCategory DateTimeUtilities}
 */
export declare interface IDateFormatting {
    /**
     * Get a localized string for a day.
     */
    formatDay: (date: Date) => string;
    /**
     * Get a localized string for a month.
     */
    formatMonth: (date: Date, strings: IDateGridStrings) => string;
    /**
     * Get a localized string for a year.
     */
    formatYear: (date: Date) => string;
    /**
     * Get a localized string for a month, day, and year.
     */
    formatMonthDayYear: (date: Date, strings: IDateGridStrings) => string;
    /**
     * Get a localized string for a month and year.
     */
    formatMonthYear: (date: Date, strings: IDateGridStrings) => string;
}

/**
 * {@docCategory DateTimeUtilities}
 */
export declare interface IDateGridStrings {
    /**
     * An array of strings for the full names of months.
     * The array is 0-based, so months[0] should be the full name of January.
     */
    months: string[];
    /**
     * An array of strings for the short names of months.
     * The array is 0-based, so shortMonths[0] should be the short name of January.
     */
    shortMonths: string[];
    /**
     * An array of strings for the full names of days of the week.
     * The array is 0-based, so days[0] should be the full name of Sunday.
     */
    days: string[];
    /**
     * An array of strings for the initials of the days of the week.
     * The array is 0-based, so days[0] should be the initial of Sunday.
     */
    shortDays: string[];
}

export declare interface IDay {
    /** `Date.toString()` value of current date */
    key: string;
    /** `Date.getDate()` value of current date */
    date: string;
    /** `Date` object of current date */
    originalDate: Date;
    /** Is current date is in the same month as "today" date */
    isInMonth: boolean;
    /** Is current date is "today" date */
    isToday: boolean;
    /** Is current date is selected */
    isSelected: boolean;
    /** Is current date within restriction boundaries */
    isInBounds: boolean;
    /** Is current date marked */
    isMarked: boolean;
}

/**
 * {@docCategory DateTimeUtilities}
 */
export declare interface IDayGridOptions extends IRestrictedDatesOptions {
    /**
     * The first day of the week for your locale.
     */
    firstDayOfWeek: DayOfWeek;
    /**
     * Defines when the first week of the year should start, FirstWeekOfYear.FirstDay,
     * FirstWeekOfYear.FirstFullWeek or FirstWeekOfYear.FirstFourDayWeek are the possible values
     */
    firstWeekOfYear: FirstWeekOfYear;
    /**
     * The date range type indicating how  many days should be selected as the user
     * selects days
     */
    dateRangeType: DateRangeType;
    /**
     * The number of days to select while dateRangeType === DateRangeType.Day. Used in order to have multi-day
     * views.
     */
    daysToSelectInDayView?: number;
    /**
     * Value of today. If unspecified, current time in client machine will be used.
     */
    today?: Date;
    /**
     * Whether the calendar should show the week number (weeks 1 to 53) before each week row
     */
    showWeekNumbers?: boolean;
    /**
     * The days that are selectable when `dateRangeType` is WorkWeek.
     * If `dateRangeType` is not WorkWeek this property does nothing.
     */
    workWeekDays?: DayOfWeek[];
    /**
     * Which days in the generated grid should be marked.
     */
    markedDays?: Date[];
    /**
     * The currently selected date
     */
    selectedDate: Date;
    /**
     * The currently navigated date
     */
    navigatedDate: Date;
    /**
     * How many weeks to show by default. If not provided, will show enough weeks to display the current
     * month, between 4 and 6 depending
     */
    weeksToShow?: number;
}

/**
 * {@docCategory DateTimeUtilities}
 */
export declare interface IRestrictedDatesOptions {
    /**
     * If set the Calendar will not allow navigation to or selection of a date earlier than this value.
     */
    minDate?: Date;
    /**
     * If set the Calendar will not allow navigation to or selection of a date later than this value.
     */
    maxDate?: Date;
    /**
     * If set the Calendar will not allow selection of dates in this array.
     */
    restrictedDates?: Date[];
}

/**
 * Checks if `date` happens later than max date
 * @param date - date to check
 * @param options - object with max date to check against
 */
export declare const isAfterMaxDate: (date: Date, options: IRestrictedDatesOptions) => boolean;

/**
 * Checks if `date` happens earlier than min date
 * @param date - date to check
 * @param options - object with min date to check against
 */
export declare const isBeforeMinDate: (date: Date, options: IRestrictedDatesOptions) => boolean;

/**
 * Returns whether provided week days are contiguous.
 * @param days - list of days in a week
 * @param isSingleWeek - decides whether the contiguous logic applies across week boundaries or not
 * @param firstDayOfWeek - decides which day of week is the first one in the order.
 */
export declare const isContiguous: (days: DayOfWeek[], isSingleWeek: boolean, firstDayOfWeek: DayOfWeek) => boolean;

/**
 * Checks whether the specified date is in the given date range.
 * @param date - The origin date
 * @param dateRange - An array of dates to do the lookup on
 * @returns True if the date matches one of the dates in the specified array, false otherwise.
 */
export declare function isInDateRangeArray(date: Date, dateRange: Date[]): boolean;

/**
 * Checks if `date` falls into the restricted `options`
 * @param date - date to check
 * @param options - restriction options (min date, max date and list of restricted dates)
 */
export declare const isRestrictedDate: (date: Date, options: IRestrictedDatesOptions) => boolean;

/**
 * The months
 * {@docCategory DateTimeUtilities}
 */
export declare enum MonthOfYear {
    January = 0,
    February = 1,
    March = 2,
    April = 3,
    May = 4,
    June = 5,
    July = 6,
    August = 7,
    September = 8,
    October = 9,
    November = 10,
    December = 11
}

/**
 * Returns a date that is a copy of the given date, aside from the month changing to the given month.
 *  The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param date - The origin date
 * @param month - The 0-based index of the month to set on the date.
 * @returns A new Date object with the given month set.
 */
export declare function setMonth(date: Date, month: number): Date;

export declare const TimeConstants: {
    MillisecondsInOneDay: number;
    MillisecondsIn1Sec: number;
    MillisecondsIn1Min: number;
    MillisecondsIn30Mins: number;
    MillisecondsIn1Hour: number;
    MinutesInOneDay: number;
    MinutesInOneHour: number;
    DaysInOneWeek: number;
    MonthInOneYear: number;
    HoursInOneDay: number;
};

export { }
