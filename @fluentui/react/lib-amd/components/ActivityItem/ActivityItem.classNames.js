define(["require", "exports", "../../Styling", "../../Utilities"], function (require, exports, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClassNames = Utilities_1.memoizeFunction(function (styles, className, activityPersonas, isCompact) {
        return {
            root: Styling_1.mergeStyles('ms-ActivityItem', className, styles.root, isCompact && styles.isCompactRoot),
            pulsingBeacon: Styling_1.mergeStyles('ms-ActivityItem-pulsingBeacon', styles.pulsingBeacon),
            personaContainer: Styling_1.mergeStyles('ms-ActivityItem-personaContainer', styles.personaContainer, isCompact && styles.isCompactPersonaContainer),
            activityPersona: Styling_1.mergeStyles('ms-ActivityItem-activityPersona', styles.activityPersona, isCompact && styles.isCompactPersona, !isCompact && activityPersonas && activityPersonas.length === 2 && styles.doublePersona),
            activityTypeIcon: Styling_1.mergeStyles('ms-ActivityItem-activityTypeIcon', styles.activityTypeIcon, isCompact && styles.isCompactIcon),
            activityContent: Styling_1.mergeStyles('ms-ActivityItem-activityContent', styles.activityContent, isCompact && styles.isCompactContent),
            activityText: Styling_1.mergeStyles('ms-ActivityItem-activityText', styles.activityText),
            commentText: Styling_1.mergeStyles('ms-ActivityItem-commentText', styles.commentText),
            timeStamp: Styling_1.mergeStyles('ms-ActivityItem-timeStamp', styles.timeStamp, isCompact && styles.isCompactTimeStamp),
        };
    });
});
//# sourceMappingURL=ActivityItem.classNames.js.map