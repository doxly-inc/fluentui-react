define(["require", "exports", "tslib", "react", "../../Utilities", "../../Icon", "../../FocusZone", "./Rating.types", "@fluentui/react-hooks"], function (require, exports, tslib_1, React, Utilities_1, Icon_1, FocusZone_1, Rating_types_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var RatingStar = function (props) {
        return (React.createElement("div", { className: props.classNames.ratingStar },
            React.createElement(Icon_1.Icon, { className: props.classNames.ratingStarBack, iconName: props.icon }),
            !props.disabled && (React.createElement(Icon_1.Icon, { className: props.classNames.ratingStarFront, iconName: props.icon, style: { width: props.fillPercentage + '%' } }))));
    };
    var useComponentRef = function (componentRef, rating) {
        React.useImperativeHandle(componentRef, function () { return ({
            rating: rating,
        }); }, [rating]);
    };
    var useDebugWarnings = function (props) {
        
    };
    var getClampedRating = function (rating, min, max) {
        return Math.min(Math.max((rating !== null && rating !== void 0 ? rating : min), min), max);
    };
    var getFillingPercentage = function (starNum, displayRating) {
        var ceilValue = Math.ceil(displayRating);
        var fillPercentage = 100;
        if (starNum === displayRating) {
            fillPercentage = 100;
        }
        else if (starNum === ceilValue) {
            fillPercentage = 100 * (displayRating % 1);
        }
        else if (starNum > ceilValue) {
            fillPercentage = 0;
        }
        return fillPercentage;
    };
    var getStarId = function (id, starNum) {
        return id + "-star-" + (starNum - 1);
    };
    exports.RatingBase = React.forwardRef(function (props, ref) {
        var _a;
        var id = react_hooks_1.useId('Rating');
        var labelId = react_hooks_1.useId('RatingLabel');
        var ariaLabel = props.ariaLabel, ariaLabelFormat = props.ariaLabelFormat, disabled = props.disabled, getAriaLabel = props.getAriaLabel, styles = props.styles, 
        // eslint-disable-next-line deprecation/deprecation
        _b = props.min, 
        // eslint-disable-next-line deprecation/deprecation
        minFromProps = _b === void 0 ? props.allowZeroStars ? 0 : 1 : _b, _c = props.max, max = _c === void 0 ? 5 : _c, readOnly = props.readOnly, size = props.size, theme = props.theme, _d = props.icon, icon = _d === void 0 ? 'FavoriteStarFill' : _d, _e = props.unselectedIcon, unselectedIcon = _e === void 0 ? 'FavoriteStar' : _e, onRenderStar = props.onRenderStar;
        // Ensure min is >= 0 to avoid issues elsewhere
        var min = Math.max(minFromProps, 0);
        var _f = react_hooks_1.useControllableValue(props.rating, props.defaultRating, props.onChange), rating = _f[0], setRating = _f[1];
        /** Rating clamped within valid range. Will be `min` if `rating` is undefined. */
        var displayRating = getClampedRating(rating, min, max);
        useDebugWarnings(props);
        useComponentRef(props.componentRef, displayRating);
        var divProps = Utilities_1.getNativeProps(props, Utilities_1.divProperties);
        var classNames = getClassNames(styles, {
            disabled: disabled,
            readOnly: readOnly,
            theme: theme,
        });
        var readOnlyAriaLabel = (_a = getAriaLabel) === null || _a === void 0 ? void 0 : _a(displayRating, max);
        var normalModeAriaLabel = ariaLabel ? ariaLabel : readOnlyAriaLabel;
        var stars = [];
        var renderStar = function (starProps, renderer) {
            return renderer ? renderer(starProps) : React.createElement(RatingStar, tslib_1.__assign({}, starProps));
        };
        var _loop_1 = function (starNum) {
            var fillPercentage = getFillingPercentage(starNum, displayRating);
            var onSelectStar = function (ev) {
                // Use the actual rating (not display value) here, to ensure that we update if the actual
                // rating is undefined and the user clicks the first star.
                if (rating === undefined || Math.ceil(rating) !== starNum) {
                    setRating(starNum, ev);
                }
            };
            stars.push(React.createElement("button", tslib_1.__assign({ className: Utilities_1.css(classNames.ratingButton, size === Rating_types_1.RatingSize.Large ? classNames.ratingStarIsLarge : classNames.ratingStarIsSmall), id: getStarId(id, starNum), key: starNum }, (starNum === Math.ceil(displayRating) && { 'data-is-current': true }), { onFocus: onSelectStar, onClick: onSelectStar, disabled: !!(disabled || readOnly), role: "radio", "aria-hidden": readOnly ? 'true' : undefined, type: "button", "aria-checked": starNum === Math.ceil(displayRating) }),
                React.createElement("span", { id: labelId + "-" + starNum, className: classNames.labelText }, Utilities_1.format(ariaLabelFormat || '', starNum, max)),
                renderStar({
                    fillPercentage: fillPercentage,
                    disabled: disabled,
                    classNames: classNames,
                    icon: fillPercentage > 0 ? icon : unselectedIcon,
                    starNum: starNum,
                }, onRenderStar)));
        };
        for (var starNum = 1; starNum <= max; starNum++) {
            _loop_1(starNum);
        }
        var rootSizeClass = size === Rating_types_1.RatingSize.Large ? classNames.rootIsLarge : classNames.rootIsSmall;
        return (React.createElement("div", tslib_1.__assign({ ref: ref, className: Utilities_1.css('ms-Rating-star', classNames.root, rootSizeClass), "aria-label": !readOnly ? normalModeAriaLabel : undefined, id: id, role: !readOnly ? 'radiogroup' : undefined }, divProps),
            React.createElement(FocusZone_1.FocusZone, tslib_1.__assign({ direction: FocusZone_1.FocusZoneDirection.bidirectional, className: Utilities_1.css(classNames.ratingFocusZone, rootSizeClass), defaultActiveElement: '#' + getStarId(id, Math.ceil(displayRating)) }, (readOnly && {
                allowFocusRoot: true,
                disabled: true,
                role: 'textbox',
                'aria-label': readOnlyAriaLabel,
                'aria-readonly': true,
                'data-is-focusable': true,
                tabIndex: 0,
            })), stars)));
    });
    exports.RatingBase.displayName = 'RatingBase';
});
//# sourceMappingURL=Rating.base.js.map