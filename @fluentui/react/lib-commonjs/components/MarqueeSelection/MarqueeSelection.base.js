"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
// We want to make the marquee selection start when the user drags a minimum distance. Otherwise we'd start
// the drag even if they just click an item without moving.
var MIN_DRAG_DISTANCE = 5;
/**
 * MarqueeSelection component abstracts managing a draggable rectangle which sets items selected/not selected.
 * Elements which have data-selectable-index attributes are queried and measured once to determine if they
 * fall within the bounds of the rectangle. The measure is memoized during the drag as a performance optimization
 * so if the items change sizes while dragging, that could cause incorrect results.
 */
var MarqueeSelectionBase = /** @class */ (function (_super) {
    tslib_1.__extends(MarqueeSelectionBase, _super);
    function MarqueeSelectionBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        _this._onMouseDown = function (ev) {
            var _a = _this.props, isEnabled = _a.isEnabled, onShouldStartSelection = _a.onShouldStartSelection;
            // Ensure the mousedown is within the boundaries of the target. If not, it may have been a click on a scrollbar.
            if (_this._isMouseEventOnScrollbar(ev)) {
                return;
            }
            if (_this._isInSelectionToggle(ev)) {
                return;
            }
            if (!_this._isTouch &&
                isEnabled &&
                !_this._isDragStartInSelection(ev) &&
                (!onShouldStartSelection || onShouldStartSelection(ev))) {
                if (_this._scrollableSurface && ev.button === 0 && _this._root.current) {
                    _this._selectedIndicies = {};
                    _this._preservedIndicies = undefined;
                    _this._events.on(window, 'mousemove', _this._onAsyncMouseMove, true);
                    _this._events.on(_this._scrollableParent, 'scroll', _this._onAsyncMouseMove);
                    _this._events.on(window, 'click', _this._onMouseUp, true);
                    _this._autoScroll = new Utilities_1.AutoScroll(_this._root.current);
                    _this._scrollTop = _this._scrollableSurface.scrollTop;
                    _this._scrollLeft = _this._scrollableSurface.scrollLeft;
                    _this._rootRect = _this._root.current.getBoundingClientRect();
                    _this._onMouseMove(ev);
                }
            }
        };
        _this._onTouchStart = function (ev) {
            _this._isTouch = true;
            _this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 0);
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._isTouch = true;
                _this._async.setTimeout(function () {
                    _this._isTouch = false;
                }, 0);
            }
        };
        Utilities_1.initializeComponentRef(_this);
        _this._async = new Utilities_1.Async(_this);
        _this._events = new Utilities_1.EventGroup(_this);
        _this.state = {
            dragRect: undefined,
        };
        return _this;
    }
    MarqueeSelectionBase.prototype.componentDidMount = function () {
        this._scrollableParent = Utilities_1.findScrollableParent(this._root.current);
        this._scrollableSurface = this._scrollableParent === window ? document.body : this._scrollableParent;
        // When scroll events come from window, we need to read scrollTop values from the body.
        var hitTarget = this.props.isDraggingConstrainedToRoot ? this._root.current : this._scrollableSurface;
        this._events.on(hitTarget, 'mousedown', this._onMouseDown);
        this._events.on(hitTarget, 'touchstart', this._onTouchStart, true);
        this._events.on(hitTarget, 'pointerdown', this._onPointerDown, true);
    };
    MarqueeSelectionBase.prototype.componentWillUnmount = function () {
        if (this._autoScroll) {
            this._autoScroll.dispose();
        }
        delete this._scrollableParent;
        delete this._scrollableSurface;
        this._events.dispose();
        this._async.dispose();
    };
    MarqueeSelectionBase.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, children = _a.children, theme = _a.theme, className = _a.className, styles = _a.styles;
        var dragRect = this.state.dragRect;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return (React.createElement("div", tslib_1.__assign({}, rootProps, { className: classNames.root, ref: this._root }),
            children,
            dragRect && React.createElement("div", { className: classNames.dragMask }),
            dragRect && (React.createElement("div", { className: classNames.box, style: dragRect },
                React.createElement("div", { className: classNames.boxFill })))));
    };
    /** Determine if the mouse event occured on a scrollbar of the target element. */
    MarqueeSelectionBase.prototype._isMouseEventOnScrollbar = function (ev) {
        var targetElement = ev.target;
        var targetScrollbarWidth = targetElement.offsetWidth - targetElement.clientWidth;
        if (targetScrollbarWidth) {
            var targetRect = targetElement.getBoundingClientRect();
            // Check vertical scroll
            if (Utilities_1.getRTL(this.props.theme)) {
                if (ev.clientX < targetRect.left + targetScrollbarWidth) {
                    return true;
                }
            }
            else {
                if (ev.clientX > targetRect.left + targetElement.clientWidth) {
                    return true;
                }
            }
            // Check horizontal scroll
            if (ev.clientY > targetRect.top + targetElement.clientHeight) {
                return true;
            }
        }
        return false;
    };
    MarqueeSelectionBase.prototype._getRootRect = function () {
        return {
            left: this._rootRect.left + (this._scrollLeft - this._scrollableSurface.scrollLeft),
            top: this._rootRect.top + (this._scrollTop - this._scrollableSurface.scrollTop),
            width: this._rootRect.width,
            height: this._rootRect.height,
        };
    };
    MarqueeSelectionBase.prototype._onAsyncMouseMove = function (ev) {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            _this._onMouseMove(ev);
        });
        ev.stopPropagation();
        ev.preventDefault();
    };
    MarqueeSelectionBase.prototype._onMouseMove = function (ev) {
        if (!this._autoScroll) {
            return;
        }
        if (ev.clientX !== undefined) {
            this._lastMouseEvent = ev;
        }
        var rootRect = this._getRootRect();
        var currentPoint = { left: ev.clientX - rootRect.left, top: ev.clientY - rootRect.top };
        if (!this._dragOrigin) {
            this._dragOrigin = currentPoint;
        }
        if (ev.buttons !== undefined && ev.buttons === 0) {
            this._onMouseUp(ev);
        }
        else {
            if (this.state.dragRect || Utilities_1.getDistanceBetweenPoints(this._dragOrigin, currentPoint) > MIN_DRAG_DISTANCE) {
                if (!this.state.dragRect) {
                    var selection = this.props.selection;
                    if (!ev.shiftKey) {
                        selection.setAllSelected(false);
                    }
                    this._preservedIndicies = selection && selection.getSelectedIndices && selection.getSelectedIndices();
                }
                // We need to constrain the current point to the rootRect boundaries.
                var constrainedPoint = this.props.isDraggingConstrainedToRoot
                    ? {
                        left: Math.max(0, Math.min(rootRect.width, this._lastMouseEvent.clientX - rootRect.left)),
                        top: Math.max(0, Math.min(rootRect.height, this._lastMouseEvent.clientY - rootRect.top)),
                    }
                    : {
                        left: this._lastMouseEvent.clientX - rootRect.left,
                        top: this._lastMouseEvent.clientY - rootRect.top,
                    };
                var dragRect = {
                    left: Math.min(this._dragOrigin.left || 0, constrainedPoint.left),
                    top: Math.min(this._dragOrigin.top || 0, constrainedPoint.top),
                    width: Math.abs(constrainedPoint.left - (this._dragOrigin.left || 0)),
                    height: Math.abs(constrainedPoint.top - (this._dragOrigin.top || 0)),
                };
                this._evaluateSelection(dragRect, rootRect);
                this.setState({ dragRect: dragRect });
            }
        }
        return false;
    };
    MarqueeSelectionBase.prototype._onMouseUp = function (ev) {
        this._events.off(window);
        this._events.off(this._scrollableParent, 'scroll');
        if (this._autoScroll) {
            this._autoScroll.dispose();
        }
        this._autoScroll = this._dragOrigin = this._lastMouseEvent = undefined;
        this._selectedIndicies = this._itemRectCache = undefined;
        if (this.state.dragRect) {
            this.setState({
                dragRect: undefined,
            });
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    MarqueeSelectionBase.prototype._isPointInRectangle = function (rectangle, point) {
        return (!!point.top &&
            rectangle.top < point.top &&
            rectangle.bottom > point.top &&
            !!point.left &&
            rectangle.left < point.left &&
            rectangle.right > point.left);
    };
    /**
     * We do not want to start the marquee if we're trying to marquee
     * from within an existing marquee selection.
     */
    MarqueeSelectionBase.prototype._isDragStartInSelection = function (ev) {
        var selection = this.props.selection;
        if (!this._root.current || (selection && selection.getSelectedCount() === 0)) {
            return false;
        }
        var allElements = this._root.current.querySelectorAll('[data-selection-index]');
        for (var i = 0; i < allElements.length; i++) {
            var element = allElements[i];
            var index = Number(element.getAttribute('data-selection-index'));
            if (selection.isIndexSelected(index)) {
                var itemRect = element.getBoundingClientRect();
                if (this._isPointInRectangle(itemRect, { left: ev.clientX, top: ev.clientY })) {
                    return true;
                }
            }
        }
        return false;
    };
    MarqueeSelectionBase.prototype._isInSelectionToggle = function (ev) {
        var element = ev.target;
        while (element && element !== this._root.current) {
            if (element.getAttribute('data-selection-toggle') === 'true') {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    };
    MarqueeSelectionBase.prototype._evaluateSelection = function (dragRect, rootRect) {
        // Break early if we don't need to evaluate.
        if (!dragRect || !this._root.current) {
            return;
        }
        var selection = this.props.selection;
        var allElements = this._root.current.querySelectorAll('[data-selection-index]');
        if (!this._itemRectCache) {
            this._itemRectCache = {};
        }
        for (var i = 0; i < allElements.length; i++) {
            var element = allElements[i];
            var index = element.getAttribute('data-selection-index');
            // Pull the memoized rectangle for the item, or the get the rect and memoize.
            var itemRect = this._itemRectCache[index];
            if (!itemRect) {
                itemRect = element.getBoundingClientRect();
                // Normalize the item rect to the dragRect coordinates.
                itemRect = {
                    left: itemRect.left - rootRect.left,
                    top: itemRect.top - rootRect.top,
                    width: itemRect.width,
                    height: itemRect.height,
                    right: itemRect.left - rootRect.left + itemRect.width,
                    bottom: itemRect.top - rootRect.top + itemRect.height,
                };
                if (itemRect.width > 0 && itemRect.height > 0) {
                    this._itemRectCache[index] = itemRect;
                }
            }
            if (itemRect.top < dragRect.top + dragRect.height &&
                itemRect.bottom > dragRect.top &&
                itemRect.left < dragRect.left + dragRect.width &&
                itemRect.right > dragRect.left) {
                this._selectedIndicies[index] = true;
            }
            else {
                delete this._selectedIndicies[index];
            }
        }
        // set previousSelectedIndices to be all of the selected indices from last time
        var previousSelectedIndices = this._allSelectedIndices || {};
        this._allSelectedIndices = {};
        // set all indices that are supposed to be selected in _allSelectedIndices
        for (var index in this._selectedIndicies) {
            if (this._selectedIndicies.hasOwnProperty(index)) {
                this._allSelectedIndices[index] = true;
            }
        }
        if (this._preservedIndicies) {
            for (var _i = 0, _a = this._preservedIndicies; _i < _a.length; _i++) {
                var index = _a[_i];
                this._allSelectedIndices[index] = true;
            }
        }
        // check if needs to update selection, only when current _allSelectedIndices
        // is different than previousSelectedIndices
        var needToUpdate = false;
        for (var index in this._allSelectedIndices) {
            if (this._allSelectedIndices[index] !== previousSelectedIndices[index]) {
                needToUpdate = true;
                break;
            }
        }
        if (!needToUpdate) {
            for (var index in previousSelectedIndices) {
                if (this._allSelectedIndices[index] !== previousSelectedIndices[index]) {
                    needToUpdate = true;
                    break;
                }
            }
        }
        // only update selection when needed
        if (needToUpdate) {
            // Stop change events, clear selection to re-populate.
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            for (var _b = 0, _c = Object.keys(this._allSelectedIndices); _b < _c.length; _b++) {
                var index = _c[_b];
                selection.setIndexSelected(Number(index), true, false);
            }
            selection.setChangeEvents(true);
        }
    };
    MarqueeSelectionBase.defaultProps = {
        rootTagName: 'div',
        rootProps: {},
        isEnabled: true,
    };
    return MarqueeSelectionBase;
}(React.Component));
exports.MarqueeSelectionBase = MarqueeSelectionBase;
//# sourceMappingURL=MarqueeSelection.base.js.map