import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var MessageIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 128h2048v1408H731l-475 475v-475H0V128zm1920 1280V256H128v1152h256v293l293-293h1243z" })));
    },
    displayName: 'MessageIcon',
});
export default MessageIcon;
//# sourceMappingURL=MessageIcon.js.map