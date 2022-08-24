import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var TabIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1920 384v1664H512v-384H128V0h1408v384h384zM256 1536h1152V128H256v1408zM1792 512h-256v1152H640v256h1152V512z" })));
    },
    displayName: 'TabIcon',
});
export default TabIcon;
//# sourceMappingURL=TabIcon.js.map