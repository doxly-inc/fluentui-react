"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Layer_notification_1 = require("./Layer.notification");
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
//# sourceMappingURL=LayerHost.js.map