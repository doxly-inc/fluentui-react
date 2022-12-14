define(["require", "exports", "tslib", "react", "../../Utilities", "./Layer.notification"], function (require, exports, tslib_1, React, Utilities_1, Layer_notification_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LayerHost = function (props) {
        var id = props.id, className = props.className;
        React.useEffect(function () {
            Layer_notification_1.notifyHostChanged(id);
            // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on first render
        }, []);
        useUnmount(function () {
            Layer_notification_1.notifyHostChanged(id);
        });
        return React.createElement("div", tslib_1.__assign({}, props, { className: Utilities_1.css('ms-LayerHost', className) }));
    };
    var useUnmount = function (unmountFunction) {
        var unmountRef = React.useRef(unmountFunction);
        unmountRef.current = unmountFunction;
        React.useEffect(function () { return function () {
            if (unmountRef.current) {
                unmountRef.current();
            }
        }; }, []);
    };
});
//# sourceMappingURL=LayerHost.js.map