"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var BasePicker_1 = require("../BasePicker");
var BasePicker_types_1 = require("../BasePicker.types");
var PeoplePickerItem_1 = require("./PeoplePickerItems/PeoplePickerItem");
var PeoplePickerItemSuggestion_1 = require("./PeoplePickerItems/PeoplePickerItemSuggestion");
var BasePicker_styles_1 = require("../BasePicker.styles");
/**
 * {@docCategory PeoplePicker}
 */
var BasePeoplePicker = /** @class */ (function (_super) {
    tslib_1.__extends(BasePeoplePicker, _super);
    function BasePeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePeoplePicker;
}(BasePicker_1.BasePicker));
exports.BasePeoplePicker = BasePeoplePicker;
/**
 * {@docCategory PeoplePicker}
 */
var MemberListPeoplePicker = /** @class */ (function (_super) {
    tslib_1.__extends(MemberListPeoplePicker, _super);
    function MemberListPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MemberListPeoplePicker;
}(BasePicker_1.BasePickerListBelow));
exports.MemberListPeoplePicker = MemberListPeoplePicker;
/**
 * Standard People Picker.
 * {@docCategory PeoplePicker}
 */
var NormalPeoplePickerBase = /** @class */ (function (_super) {
    tslib_1.__extends(NormalPeoplePickerBase, _super);
    function NormalPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for NormalPeoplePicker. */
    NormalPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(PeoplePickerItem_1.PeoplePickerItem, tslib_1.__assign({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (React.createElement(PeoplePickerItemSuggestion_1.PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return NormalPeoplePickerBase;
}(BasePeoplePicker));
exports.NormalPeoplePickerBase = NormalPeoplePickerBase;
/**
 * Compact layout. It uses personas without secondary text when displaying search results.
 * {@docCategory PeoplePicker}
 */
var CompactPeoplePickerBase = /** @class */ (function (_super) {
    tslib_1.__extends(CompactPeoplePickerBase, _super);
    function CompactPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for CompactPeoplePicker. */
    CompactPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(PeoplePickerItem_1.PeoplePickerItem, tslib_1.__assign({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (React.createElement(PeoplePickerItemSuggestion_1.PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps, compact: true })); },
        createGenericItem: createGenericItem,
    };
    return CompactPeoplePickerBase;
}(BasePeoplePicker));
exports.CompactPeoplePickerBase = CompactPeoplePickerBase;
/**
 * MemberList layout. The selected people show up below the search box.
 * {@docCategory PeoplePicker}
 */
var ListPeoplePickerBase = /** @class */ (function (_super) {
    tslib_1.__extends(ListPeoplePickerBase, _super);
    function ListPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for ListPeoplePicker. */
    ListPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(PeoplePickerItem_1.PeoplePickerItem, tslib_1.__assign({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (React.createElement(PeoplePickerItemSuggestion_1.PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return ListPeoplePickerBase;
}(MemberListPeoplePicker));
exports.ListPeoplePickerBase = ListPeoplePickerBase;
/**
 * {@docCategory PeoplePicker}
 */
function createGenericItem(name, currentValidationState) {
    var personaToConvert = {
        key: name,
        primaryText: name,
        imageInitials: '!',
        ValidationState: currentValidationState,
    };
    if (currentValidationState !== BasePicker_types_1.ValidationState.warning) {
        personaToConvert.imageInitials = Utilities_1.getInitials(name, Utilities_1.getRTL());
    }
    return personaToConvert;
}
exports.createGenericItem = createGenericItem;
exports.NormalPeoplePicker = Utilities_1.styled(NormalPeoplePickerBase, BasePicker_styles_1.getStyles, undefined, {
    scope: 'NormalPeoplePicker',
});
exports.CompactPeoplePicker = Utilities_1.styled(CompactPeoplePickerBase, BasePicker_styles_1.getStyles, undefined, {
    scope: 'CompactPeoplePicker',
});
exports.ListPeoplePicker = Utilities_1.styled(ListPeoplePickerBase, BasePicker_styles_1.getStyles, undefined, {
    scope: 'ListPeoplePickerBase',
});
//# sourceMappingURL=PeoplePicker.js.map