import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var EventIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1664 128h384v1792H0V128h384V0h128v128h1024V0h128v128zM384 256H128v256h1792V256h-256v128h-128V256H512v128H384V256zM128 1792h1792V640H128v1152z" })));
    },
    displayName: 'EventIcon',
});
export default EventIcon;
//# sourceMappingURL=EventIcon.js.map