import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var ChartSeriesIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M512 640h384v1280H0V384h512v256zM384 512H128v1280h256V512zm128 256v1024h256V768H512zm1536 128v1024h-896V128h512v768h384zm-512-640h-256v1536h256V256zm384 768h-256v768h256v-768z" })));
    },
    displayName: 'ChartSeriesIcon',
});
export default ChartSeriesIcon;
//# sourceMappingURL=ChartSeriesIcon.js.map