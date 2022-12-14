"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
exports.getIsChecked = getIsChecked;
function hasSubmenu(item) {
    return !!(item.subMenuProps || item.items);
}
exports.hasSubmenu = hasSubmenu;
function isItemDisabled(item) {
    return !!(item.isDisabled || item.disabled);
}
exports.isItemDisabled = isItemDisabled;
function getMenuItemAriaRole(item) {
    var isChecked = getIsChecked(item);
    var canCheck = isChecked !== null;
    return canCheck ? 'menuitemcheckbox' : 'menuitem';
}
exports.getMenuItemAriaRole = getMenuItemAriaRole;
//# sourceMappingURL=contextualMenuUtility.js.map