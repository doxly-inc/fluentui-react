import { __assign, __extends } from "tslib";
import * as React from 'react';
import { getRTL, getInitials, styled } from '../../../Utilities';
import { BasePicker, BasePickerListBelow } from '../BasePicker';
import { ValidationState, } from '../BasePicker.types';
import { PeoplePickerItem } from './PeoplePickerItems/PeoplePickerItem';
import { PeoplePickerItemSuggestion } from './PeoplePickerItems/PeoplePickerItemSuggestion';
import { getStyles } from '../BasePicker.styles';
/**
 * {@docCategory PeoplePicker}
 */
var BasePeoplePicker = /** @class */ (function (_super) {
    __extends(BasePeoplePicker, _super);
    function BasePeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePeoplePicker;
}(BasePicker));
export { BasePeoplePicker };
/**
 * {@docCategory PeoplePicker}
 */
var MemberListPeoplePicker = /** @class */ (function (_super) {
    __extends(MemberListPeoplePicker, _super);
    function MemberListPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MemberListPeoplePicker;
}(BasePickerListBelow));
export { MemberListPeoplePicker };
/**
 * Standard People Picker.
 * {@docCategory PeoplePicker}
 */
var NormalPeoplePickerBase = /** @class */ (function (_super) {
    __extends(NormalPeoplePickerBase, _super);
    function NormalPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for NormalPeoplePicker. */
    NormalPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(PeoplePickerItem, __assign({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (React.createElement(PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return NormalPeoplePickerBase;
}(BasePeoplePicker));
export { NormalPeoplePickerBase };
/**
 * Compact layout. It uses personas without secondary text when displaying search results.
 * {@docCategory PeoplePicker}
 */
var CompactPeoplePickerBase = /** @class */ (function (_super) {
    __extends(CompactPeoplePickerBase, _super);
    function CompactPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for CompactPeoplePicker. */
    CompactPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(PeoplePickerItem, __assign({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (React.createElement(PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps, compact: true })); },
        createGenericItem: createGenericItem,
    };
    return CompactPeoplePickerBase;
}(BasePeoplePicker));
export { CompactPeoplePickerBase };
/**
 * MemberList layout. The selected people show up below the search box.
 * {@docCategory PeoplePicker}
 */
var ListPeoplePickerBase = /** @class */ (function (_super) {
    __extends(ListPeoplePickerBase, _super);
    function ListPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for ListPeoplePicker. */
    ListPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(PeoplePickerItem, __assign({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (React.createElement(PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return ListPeoplePickerBase;
}(MemberListPeoplePicker));
export { ListPeoplePickerBase };
/**
 * {@docCategory PeoplePicker}
 */
export function createGenericItem(name, currentValidationState) {
    var personaToConvert = {
        key: name,
        primaryText: name,
        imageInitials: '!',
        ValidationState: currentValidationState,
    };
    if (currentValidationState !== ValidationState.warning) {
        personaToConvert.imageInitials = getInitials(name, getRTL());
    }
    return personaToConvert;
}
export var NormalPeoplePicker = styled(NormalPeoplePickerBase, getStyles, undefined, {
    scope: 'NormalPeoplePicker',
});
export var CompactPeoplePicker = styled(CompactPeoplePickerBase, getStyles, undefined, {
    scope: 'CompactPeoplePicker',
});
export var ListPeoplePicker = styled(ListPeoplePickerBase, getStyles, undefined, {
    scope: 'ListPeoplePickerBase',
});
//# sourceMappingURL=PeoplePicker.js.map