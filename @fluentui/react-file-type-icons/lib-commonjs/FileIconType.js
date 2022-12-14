"use strict";
/**
 * Enumerates special file type icons that do not map to any file extensions.
 * For example, the 'pptx' icon maps to the extensions 'ppt', 'pptm', 'pptx',
 * but the 'folder' icon does not map to any extensions and should be obtained
 * via this enum.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var FileIconType;
(function (FileIconType) {
    FileIconType[FileIconType["docset"] = 1] = "docset";
    FileIconType[FileIconType["folder"] = 2] = "folder";
    FileIconType[FileIconType["genericFile"] = 3] = "genericFile";
    FileIconType[FileIconType["listItem"] = 4] = "listItem";
    FileIconType[FileIconType["sharedFolder"] = 5] = "sharedFolder";
    FileIconType[FileIconType["multiple"] = 6] = "multiple";
    FileIconType[FileIconType["stream"] = 7] = "stream";
    FileIconType[FileIconType["news"] = 8] = "news";
    FileIconType[FileIconType["desktopFolder"] = 9] = "desktopFolder";
    FileIconType[FileIconType["documentsFolder"] = 10] = "documentsFolder";
    FileIconType[FileIconType["picturesFolder"] = 11] = "picturesFolder";
    FileIconType[FileIconType["linkedFolder"] = 12] = "linkedFolder";
    FileIconType[FileIconType["list"] = 13] = "list";
})(FileIconType = exports.FileIconType || (exports.FileIconType = {}));
//# sourceMappingURL=FileIconType.js.map