import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var CropIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 1536v129h-385v383h-127v-383H383V512H0V385h383V0h129v385h1061l365-366 91 90-366 366v1061h385zM512 512v933l933-933H512zm1024 1024V603l-933 933h933z" })));
    },
    displayName: 'CropIcon',
});
export default CropIcon;
//# sourceMappingURL=CropIcon.js.map