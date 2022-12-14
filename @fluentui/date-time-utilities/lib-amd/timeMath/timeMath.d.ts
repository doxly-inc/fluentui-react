/**
 * Returns a date offset from the given date by the specified number of minutes.
 * @param date - The origin date
 * @param minutes - The number of minutes to offset. 'minutes' can be negative.
 * @returns A new Date object offset from the origin date by the given number of minutes
 */
export declare const addMinutes: (date: Date, minutes: number) => Date;
/**
 * Rounds the date's minute up to the next available increment. For example, if `date` has time 1:21
 * and `increments` is 5, the resulting time will be 1:25.
 * @param date - Date to ceil minutes
 * @param increments - Time increments
 * @returns Date with ceiled minute
 */
export declare const ceilMinuteToIncrement: (date: Date, increments: number) => Date;
