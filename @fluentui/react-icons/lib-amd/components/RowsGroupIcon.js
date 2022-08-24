define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RowsGroupIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 896q53 0 99-20t82-55 55-81 20-100q0-80 30-150t82-122 122-82 150-30v128q-53 0-99 20t-82 55-55 81-20 100q0 97-45 181T213 960q81 54 126 138t45 182q0 53 20 99t55 82 81 55 100 20v128q-80 0-150-30t-122-82-82-122-30-150q0-53-20-99t-55-82-81-55-100-20V896zm2048-640v640H768V256h1280zm-128 128H896v384h1024V384zM768 1024h1280v640H768v-640zm128 512h1024v-384H896v384z" })));
        },
        displayName: 'RowsGroupIcon',
    });
    exports.default = RowsGroupIcon;
});
//# sourceMappingURL=RowsGroupIcon.js.map