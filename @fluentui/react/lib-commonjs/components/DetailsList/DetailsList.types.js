"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum to describe how a particular column header behaves.
 * This is used to to specify the property `IColumn.columnActionsMode`.
 * If `IColumn.columnActionsMode` is undefined, it's equivalent to `ColumnActionsMode.clickable`.
 * {@docCategory DetailsList}
 */
var ColumnActionsMode;
(function (ColumnActionsMode) {
    /** Renders the column header as disabled. */
    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
    /** Renders the column header as clickable. Default value. */
    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
    /** Renders the column header as clickable and displays the dropdown chevron. */
    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode = exports.ColumnActionsMode || (exports.ColumnActionsMode = {}));
/**
 * {@docCategory DetailsList}
 */
var ConstrainMode;
(function (ConstrainMode) {
    /** Lets the content grow which allows the page to manage scrolling. */
    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
    /** Constrains the list to the given layout space. */
    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode = exports.ConstrainMode || (exports.ConstrainMode = {}));
/**
 * Enum to describe where the column has been dropped, after starting the drag
 * {@docCategory DetailsList}
 */
var ColumnDragEndLocation;
(function (ColumnDragEndLocation) {
    /** Drag ended outside of current list */
    ColumnDragEndLocation[ColumnDragEndLocation["outside"] = 0] = "outside";
    /** Drag ended within current list */
    ColumnDragEndLocation[ColumnDragEndLocation["surface"] = 1] = "surface";
    /** Drag ended on header */
    ColumnDragEndLocation[ColumnDragEndLocation["header"] = 2] = "header";
})(ColumnDragEndLocation = exports.ColumnDragEndLocation || (exports.ColumnDragEndLocation = {}));
/**
 * {@docCategory DetailsList}
 */
var DetailsListLayoutMode;
(function (DetailsListLayoutMode) {
    /**
     * Lets the user resize columns and makes not attempt to fit them.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
    /**
     * Manages which columns are visible, tries to size them according to their min/max rules and drops
     * off columns that can't fit and have isCollapsible set.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode = exports.DetailsListLayoutMode || (exports.DetailsListLayoutMode = {}));
/**
 * {@docCategory DetailsList}
 */
var CheckboxVisibility;
(function (CheckboxVisibility) {
    /** Visible on hover. */
    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
    /** Visible always. */
    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
    /** Hide checkboxes. */
    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility = exports.CheckboxVisibility || (exports.CheckboxVisibility = {}));
//# sourceMappingURL=DetailsList.types.js.map