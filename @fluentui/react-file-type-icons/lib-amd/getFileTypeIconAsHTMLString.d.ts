import { IFileTypeIconOptions } from './getFileTypeIconProps';
/**
 * Given the `fileTypeIconOptions`, this function returns the DOM element for the `FileTypeIcon`
 * as an HTML string. Similar to `getFileTypeIconProps`, this also accepts the same type of object
 * but rather than returning the `iconName`, this returns the entire DOM element as a string.
 * @param options
 * @param baseUrl - optionally provide a custom CDN base url to fetch icons from
 */
export declare function getFileTypeIconAsHTMLString(options: IFileTypeIconOptions, baseUrl?: string): string | undefined;
