import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var EncryptionIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1920 256v512q0 151-38 285t-105 253-158 223-198 195-224 171-237 150q-119-70-236-149t-224-171-198-196-159-223-105-253T0 768V256q83 0 161-6t152-22 146-45 144-75q85-55 170-81T960 0q51 0 97 6t89 20 86 34 85 48q72 46 144 75t146 45 152 22 161 6zm-128 512V382q-149-8-285-48t-263-121q-68-44-135-64t-149-21q-81 0-148 20t-136 65q-126 81-262 121t-286 48v386q0 127 33 244t92 222 138 200 172 178 193 155 204 130q102-59 203-130t194-154 172-178 138-200 91-223 34-244zM960 320q66 0 124 25t101 69 69 102 26 124v128h128v640H512V768h128V640q0-66 25-124t68-101 102-69 125-26zm320 960V896H640v384h640zM768 768h384V640q0-40-15-75t-41-61-61-41-75-15q-40 0-75 15t-61 41-41 61-15 75v128z" })));
    },
    displayName: 'EncryptionIcon',
});
export default EncryptionIcon;
//# sourceMappingURL=EncryptionIcon.js.map