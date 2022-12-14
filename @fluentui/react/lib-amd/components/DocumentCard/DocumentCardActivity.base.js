define(["require", "exports", "tslib", "react", "../../Utilities", "../../Persona", "../../PersonaCoin"], function (require, exports, tslib_1, React, Utilities_1, Persona_1, PersonaCoin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory DocumentCard}
     */
    var DocumentCardActivityBase = /** @class */ (function (_super) {
        tslib_1.__extends(DocumentCardActivityBase, _super);
        function DocumentCardActivityBase(props) {
            var _this = _super.call(this, props) || this;
            Utilities_1.initializeComponentRef(_this);
            return _this;
        }
        DocumentCardActivityBase.prototype.render = function () {
            var _a = this.props, activity = _a.activity, people = _a.people, styles = _a.styles, theme = _a.theme, className = _a.className;
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                multiplePeople: people.length > 1,
            });
            if (!people || people.length === 0) {
                return null;
            }
            return (React.createElement("div", { className: this._classNames.root },
                this._renderAvatars(people),
                React.createElement("div", { className: this._classNames.details },
                    React.createElement("span", { className: this._classNames.name }, this._getNameString(people)),
                    React.createElement("span", { className: this._classNames.activity }, activity))));
        };
        DocumentCardActivityBase.prototype._renderAvatars = function (people) {
            return (React.createElement("div", { className: this._classNames.avatars },
                people.length > 1 ? this._renderAvatar(people[1]) : null,
                this._renderAvatar(people[0])));
        };
        DocumentCardActivityBase.prototype._renderAvatar = function (person) {
            return (React.createElement("div", { className: this._classNames.avatar },
                React.createElement(PersonaCoin_1.PersonaCoin, { imageInitials: person.initials, text: person.name, imageUrl: person.profileImageSrc, initialsColor: person.initialsColor, allowPhoneInitials: person.allowPhoneInitials, role: "presentation", size: Persona_1.PersonaSize.size32 })));
        };
        DocumentCardActivityBase.prototype._getNameString = function (people) {
            var nameString = people[0].name;
            if (people.length >= 2) {
                nameString += ' +' + (people.length - 1);
            }
            return nameString;
        };
        return DocumentCardActivityBase;
    }(React.Component));
    exports.DocumentCardActivityBase = DocumentCardActivityBase;
});
//# sourceMappingURL=DocumentCardActivity.base.js.map