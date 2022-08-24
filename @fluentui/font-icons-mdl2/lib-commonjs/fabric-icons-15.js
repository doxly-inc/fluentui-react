"use strict";
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeIcons = void 0;
var style_utilities_1 = require("@fluentui/style-utilities");
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-15\"",
            src: "url('" + baseUrl + "fabric-icons-15-3807251b.woff') format('woff')"
        },
        icons: {
            'CalendarSettings': '\uF558',
            'CalendarSettingsMirrored': '\uF559',
            'HardDriveLock': '\uF55A',
            'HardDriveUnlock': '\uF55B',
            'AccountManagement': '\uF55C',
            'ReportWarning': '\uF569',
            'TransitionPop': '\uF5B2',
            'TransitionPush': '\uF5B3',
            'TransitionEffect': '\uF5B4',
            'LookupEntities': '\uF5B5',
            'ExploreData': '\uF5B6',
            'AddBookmark': '\uF5B7',
            'SearchBookmark': '\uF5B8',
            'DrillThrough': '\uF5B9',
            'MasterDatabase': '\uF5BA',
            'CertifiedDatabase': '\uF5BB',
            'MaximumValue': '\uF5BC',
            'MinimumValue': '\uF5BD',
            'VisualStudioIDELogo32': '\uF5D0',
            'PasteAsText': '\uF5D5',
            'PasteAsCode': '\uF5D6',
            'BrowserTab': '\uF5D7',
            'BrowserTabScreenshot': '\uF5D8',
            'DesktopScreenshot': '\uF5D9',
            'FileYML': '\uF5DA',
            'ClipboardSolid': '\uF5DC',
            'FabricUserFolder': '\uF5E5',
            'FabricNetworkFolder': '\uF5E6',
            'BullseyeTarget': '\uF5F0',
            'AnalyticsView': '\uF5F1',
            'Video360Generic': '\uF609',
            'Untag': '\uF60B',
            'Leave': '\uF627',
            'Trending12': '\uF62D',
            'Blocked12': '\uF62E',
            'Warning12': '\uF62F',
            'CheckedOutByOther12': '\uF630',
            'CheckedOutByYou12': '\uF631',
            'CircleShapeSolid': '\uF63C',
            'SquareShapeSolid': '\uF63D',
            'TriangleShapeSolid': '\uF63E',
            'DropShapeSolid': '\uF63F',
            'RectangleShapeSolid': '\uF640',
            'ZoomToFit': '\uF649',
            'InsertColumnsLeft': '\uF64A',
            'InsertColumnsRight': '\uF64B',
            'InsertRowsAbove': '\uF64C',
            'InsertRowsBelow': '\uF64D',
            'DeleteColumns': '\uF64E',
            'DeleteRows': '\uF64F',
            'DeleteRowsMirrored': '\uF650',
            'DeleteTable': '\uF651',
            'AccountBrowser': '\uF652',
            'VersionControlPush': '\uF664',
            'StackedColumnChart2': '\uF666',
            'TripleColumnWide': '\uF66E',
            'QuadColumn': '\uF66F',
            'WhiteBoardApp16': '\uF673',
            'WhiteBoardApp32': '\uF674',
            'PinnedSolid': '\uF676',
            'InsertSignatureLine': '\uF677',
            'ArrangeByFrom': '\uF678',
            'Phishing': '\uF679',
            'CreateMailRule': '\uF67A',
            'PublishCourse': '\uF699',
            'DictionaryRemove': '\uF69A',
            'UserRemove': '\uF69B',
            'UserEvent': '\uF69C',
            'Encryption': '\uF69D',
            'PasswordField': '\uF6AA',
            'OpenInNewTab': '\uF6AB',
            'Hide3': '\uF6AC',
            'VerifiedBrandSolid': '\uF6AD',
            'MarkAsProtected': '\uF6AE',
            'AuthenticatorApp': '\uF6B1',
            'WebTemplate': '\uF6B2',
            'DefenderTVM': '\uF6B3',
            'MedalSolid': '\uF6B9',
            'D365TalentLearn': '\uF6BB',
            'D365TalentInsight': '\uF6BC',
            'D365TalentHRCore': '\uF6BD',
            'BacklogList': '\uF6BF',
            'ButtonControl': '\uF6C0',
            'TableGroup': '\uF6D9',
            'MountainClimbing': '\uF6DB',
            'TagUnknown': '\uF6DF',
            'TagUnknownMirror': '\uF6E0',
            'TagUnknown12': '\uF6E1',
            'TagUnknown12Mirror': '\uF6E2',
            'Link12': '\uF6E3',
            'Presentation': '\uF6E4',
            'Presentation12': '\uF6E5',
            'Lock12': '\uF6E6',
            'BuildDefinition': '\uF6E9',
            'ReleaseDefinition': '\uF6EA',
            'SaveTemplate': '\uF6EC',
            'UserGauge': '\uF6ED',
            'BlockedSiteSolid12': '\uF70A',
            'TagSolid': '\uF70E',
            'OfficeChat': '\uF70F'
        }
    };
    style_utilities_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;
//# sourceMappingURL=fabric-icons-15.js.map