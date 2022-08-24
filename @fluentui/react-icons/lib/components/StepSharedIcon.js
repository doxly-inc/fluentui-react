import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var StepSharedIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 768v1152H896v-256H128v-640h512V640h512V256h768v512h128zM896 1536v-256h512V768h384V384h-512v384H768v384H256v384h640zm1024-640h-384v512h-512v384h896V896z" })));
    },
    displayName: 'StepSharedIcon',
});
export default StepSharedIcon;
//# sourceMappingURL=StepSharedIcon.js.map