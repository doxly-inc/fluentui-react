define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Pickers}
     */
    var SuggestionsController = /** @class */ (function () {
        function SuggestionsController() {
            var _this = this;
            this._isSuggestionModel = function (value) {
                return value.item !== undefined;
            };
            this._ensureSuggestionModel = function (suggestion) {
                if (_this._isSuggestionModel(suggestion)) {
                    return suggestion;
                }
                else {
                    return {
                        item: suggestion,
                        selected: false,
                        ariaLabel: suggestion.name || suggestion.primaryText,
                    };
                }
            };
            this.suggestions = [];
            this.currentIndex = -1;
        }
        SuggestionsController.prototype.updateSuggestions = function (newSuggestions, selectedIndex) {
            if (newSuggestions && newSuggestions.length > 0) {
                this.suggestions = this.convertSuggestionsToSuggestionItems(newSuggestions);
                this.currentIndex = selectedIndex ? selectedIndex : 0;
                if (selectedIndex === -1) {
                    this.currentSuggestion = undefined;
                }
                else if (selectedIndex !== undefined) {
                    this.suggestions[selectedIndex].selected = true;
                    this.currentSuggestion = this.suggestions[selectedIndex];
                }
            }
            else {
                this.suggestions = [];
                this.currentIndex = -1;
                this.currentSuggestion = undefined;
            }
        };
        /**
         * Increments the suggestion index and gets the next suggestion in the list.
         */
        SuggestionsController.prototype.nextSuggestion = function () {
            if (this.suggestions && this.suggestions.length) {
                if (this.currentIndex < this.suggestions.length - 1) {
                    this.setSelectedSuggestion(this.currentIndex + 1);
                    return true;
                }
                else if (this.currentIndex === this.suggestions.length - 1) {
                    this.setSelectedSuggestion(0);
                    return true;
                }
            }
            return false;
        };
        /**
         * Decrements the suggestion index and gets the previous suggestion in the list.
         */
        SuggestionsController.prototype.previousSuggestion = function () {
            if (this.suggestions && this.suggestions.length) {
                if (this.currentIndex > 0) {
                    this.setSelectedSuggestion(this.currentIndex - 1);
                    return true;
                }
                else if (this.currentIndex === 0) {
                    this.setSelectedSuggestion(this.suggestions.length - 1);
                    return true;
                }
            }
            return false;
        };
        SuggestionsController.prototype.getSuggestions = function () {
            return this.suggestions;
        };
        SuggestionsController.prototype.getCurrentItem = function () {
            return this.currentSuggestion;
        };
        SuggestionsController.prototype.getSuggestionAtIndex = function (index) {
            return this.suggestions[index];
        };
        SuggestionsController.prototype.hasSelectedSuggestion = function () {
            return this.currentSuggestion ? true : false;
        };
        SuggestionsController.prototype.removeSuggestion = function (index) {
            this.suggestions.splice(index, 1);
        };
        SuggestionsController.prototype.createGenericSuggestion = function (itemToConvert) {
            var itemToAdd = this.convertSuggestionsToSuggestionItems([itemToConvert])[0];
            this.currentSuggestion = itemToAdd;
        };
        SuggestionsController.prototype.convertSuggestionsToSuggestionItems = function (suggestions) {
            return Array.isArray(suggestions) ? suggestions.map(this._ensureSuggestionModel) : [];
        };
        SuggestionsController.prototype.deselectAllSuggestions = function () {
            if (this.currentIndex > -1) {
                this.suggestions[this.currentIndex].selected = false;
                this.currentIndex = -1;
            }
        };
        SuggestionsController.prototype.setSelectedSuggestion = function (index) {
            if (index > this.suggestions.length - 1 || index < 0) {
                this.currentIndex = 0;
                this.currentSuggestion.selected = false;
                this.currentSuggestion = this.suggestions[0];
                this.currentSuggestion.selected = true;
            }
            else {
                if (this.currentIndex > -1) {
                    this.suggestions[this.currentIndex].selected = false;
                }
                this.suggestions[index].selected = true;
                this.currentIndex = index;
                this.currentSuggestion = this.suggestions[index];
            }
        };
        return SuggestionsController;
    }());
    exports.SuggestionsController = SuggestionsController;
});
//# sourceMappingURL=SuggestionsController.js.map