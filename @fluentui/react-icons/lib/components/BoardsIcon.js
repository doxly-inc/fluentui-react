import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var BoardsIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1664 512h256v1536H640v-256H384v-256H128V0h1280v256h256v256zM384 1408V256h896V128H256v1280h128zm256 256V512h896V384H512v1280h128zm1152 256V640H768v1280h1024z" })));
    },
    displayName: 'BoardsIcon',
});
export default BoardsIcon;
//# sourceMappingURL=BoardsIcon.js.map