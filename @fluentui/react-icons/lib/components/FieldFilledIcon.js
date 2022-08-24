import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var FieldFilledIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 256v1408H0V256h2048zm-128 128H128v1152h1792V384zm-128 1024H256V512h1536v896z" })));
    },
    displayName: 'FieldFilledIcon',
});
export default FieldFilledIcon;
//# sourceMappingURL=FieldFilledIcon.js.map