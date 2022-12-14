define(["require", "exports", "tslib", "../../utilities/keytips/index", "./useKeytipData"], function (require, exports, tslib_1, index_1, useKeytipData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A small element to help the target component correctly read out its aria-describedby for its Keytip
     * {@docCategory Keytips}
     */
    exports.KeytipData = function (props) {
        var _a;
        var children = props.children, keytipDataProps = tslib_1.__rest(props, ["children"]);
        var _b = useKeytipData_1.useKeytipData(keytipDataProps), keytipId = _b.keytipId, ariaDescribedBy = _b.ariaDescribedBy;
        return children((_a = {},
            _a[index_1.DATAKTP_TARGET] = keytipId,
            _a[index_1.DATAKTP_EXECUTE_TARGET] = keytipId,
            _a['aria-describedby'] = ariaDescribedBy,
            _a));
    };
});
//# sourceMappingURL=KeytipData.js.map