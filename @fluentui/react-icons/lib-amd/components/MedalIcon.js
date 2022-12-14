define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MedalIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 256q0 67-20 120t-56 109l-516 775q39 62 59 132t21 144q0 106-40 199t-109 163-163 110-200 40q-106 0-199-40t-163-109-110-163-40-200q0-73 20-143t60-133L76 485q-36-55-56-108T0 256q0-53 20-99t55-82 81-55T256 0h1536q53 0 99 20t82 55 55 81 20 100zm-472-128H472l170 256h764l170-256zM728 512l296 445 296-445H728zM128 256q0 46 14 82t39 74l498 746q51-47 112-78t131-46L318 128h-62q-27 0-50 10t-40 27-28 41-10 50zm896 1664q79 0 149-30t122-82 83-122 30-150q0-79-30-149t-82-122-123-83-149-30q-80 0-149 30t-122 82-83 123-30 149q0 80 30 149t82 122 122 83 150 30zm844-1510q25-34 38-73t14-81q0-27-10-50t-27-40-41-28-50-10h-62l-604 906q69 14 130 45t113 79l499-747v-1z" })));
        },
        displayName: 'MedalIcon',
    });
    exports.default = MedalIcon;
});
//# sourceMappingURL=MedalIcon.js.map