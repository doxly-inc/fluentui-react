/**
 * Given input/parent options, which are both assumed to be defined and populated with
 * displayNames array, return a string array of display names.
 */
export function computeDisplayNames(inputOptions, parentOptions) {
    if (inputOptions.overrideStyles) {
        return [inputOptions.displayName].filter(Boolean);
    }
    // To support styles composition we need to properly pick up display names
    return inputOptions.displayName
        ? parentOptions.displayNames.concat(inputOptions.displayName)
        : parentOptions.displayNames;
}
//# sourceMappingURL=computeDisplayNames.js.map