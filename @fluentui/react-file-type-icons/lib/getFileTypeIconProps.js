import { FileTypeIconMap } from './FileTypeIconMap';
import { FileIconType } from './FileIconType';
var _extensionToIconName;
var GENERIC_FILE = 'genericfile';
var FOLDER = 'folder';
var SHARED_FOLDER = 'sharedfolder';
var DOCSET_FOLDER = 'docset';
var LIST_ITEM = 'listitem';
var LIST = 'splist';
var MULTIPLE_ITEMS = 'multiple';
var NEWS = 'sponews';
var STREAM = 'stream';
var DESKTOP_FOLDER = 'desktopfolder';
var DOCUMENTS_FOLDER = 'documentfolder';
var PICTURES_FOLDER = 'picturesfolder';
var LINKED_FOLDER = 'linkedfolder';
export var DEFAULT_ICON_SIZE = 16;
/**
 * This function returns properties for a file type icon given the IFileTypeIconOptions.
 * It accounts for different device pixel ratios. For example,
 * `getFileTypeIconProps({ extension: 'doc', size: 16, imageFileType: 'png' })`
 * will return `{ iconName: 'docx16_2x_png' }` if the `devicePixelRatio` is 2.
 * @param options
 */
export function getFileTypeIconProps(options) {
    // First, obtain the base name of the icon using the extension or type.
    var iconBaseName;
    var extension = options.extension, type = options.type, size = options.size, imageFileType = options.imageFileType;
    iconBaseName = getFileTypeIconNameFromExtensionOrType(extension, type);
    // Next, obtain the suffix using the icon size, user's device pixel ration, and
    // preference for svg or png
    var _size = size || DEFAULT_ICON_SIZE;
    var suffix = getFileTypeIconSuffix(_size, imageFileType);
    return { iconName: iconBaseName + suffix };
}
export function getFileTypeIconNameFromExtensionOrType(extension, type) {
    var iconBaseName;
    if (extension) {
        if (!_extensionToIconName) {
            _extensionToIconName = {};
            for (var iconName in FileTypeIconMap) {
                if (FileTypeIconMap.hasOwnProperty(iconName)) {
                    var extensions = FileTypeIconMap[iconName].extensions;
                    if (extensions) {
                        for (var i = 0; i < extensions.length; i++) {
                            _extensionToIconName[extensions[i]] = iconName;
                        }
                    }
                }
            }
        }
        // Strip periods, force lowercase.
        extension = extension.replace('.', '').toLowerCase();
        return _extensionToIconName[extension] || GENERIC_FILE;
    }
    else if (type) {
        switch (type) {
            case FileIconType.docset:
                iconBaseName = DOCSET_FOLDER;
                break;
            case FileIconType.folder:
                iconBaseName = FOLDER;
                break;
            case FileIconType.listItem:
                iconBaseName = LIST_ITEM;
                break;
            case FileIconType.sharedFolder:
                iconBaseName = SHARED_FOLDER;
                break;
            case FileIconType.stream:
                iconBaseName = STREAM;
                break;
            case FileIconType.multiple:
                iconBaseName = MULTIPLE_ITEMS;
                break;
            case FileIconType.news:
                iconBaseName = NEWS;
                break;
            case FileIconType.desktopFolder:
                iconBaseName = DESKTOP_FOLDER;
                break;
            case FileIconType.documentsFolder:
                iconBaseName = DOCUMENTS_FOLDER;
                break;
            case FileIconType.picturesFolder:
                iconBaseName = PICTURES_FOLDER;
                break;
            case FileIconType.linkedFolder:
                iconBaseName = LINKED_FOLDER;
                break;
            case FileIconType.list:
                iconBaseName = LIST;
                break;
        }
    }
    return iconBaseName || GENERIC_FILE;
}
export function getFileTypeIconSuffix(size, imageFileType) {
    if (imageFileType === void 0) { imageFileType = 'svg'; }
    var devicePixelRatio = window.devicePixelRatio;
    var devicePixelRatioSuffix = ''; // Default is 1x
    // SVGs scale well, so you can generally use the default image.
    // 1.5x is a special case where SVGs need a different image.
    if (imageFileType === 'svg' && devicePixelRatio > 1 && devicePixelRatio <= 1.5) {
        // Currently missing 1.5x SVGs at size 20, snap to 1x for now
        if (size !== 20) {
            devicePixelRatioSuffix = '_1.5x';
        }
    }
    else if (imageFileType === 'png') {
        // To look good, PNGs should use a different image for higher device pixel ratios
        if (devicePixelRatio > 1 && devicePixelRatio <= 1.5) {
            // Currently missing 1.5x icons for size 20, snap to 2x for now
            devicePixelRatioSuffix = size === 20 ? '_2x' : '_1.5x';
        }
        else if (devicePixelRatio > 1.5 && devicePixelRatio <= 2) {
            devicePixelRatioSuffix = '_2x';
        }
        else if (devicePixelRatio > 2 && devicePixelRatio <= 3) {
            devicePixelRatioSuffix = '_3x';
        }
        else if (devicePixelRatio > 3) {
            devicePixelRatioSuffix = '_4x';
        }
    }
    return size + devicePixelRatioSuffix + '_' + imageFileType;
}
//# sourceMappingURL=getFileTypeIconProps.js.map