import { FileIconType, FileIconTypeInput } from './FileIconType';
export declare const DEFAULT_ICON_SIZE: FileTypeIconSize;
export declare type FileTypeIconSize = 16 | 20 | 24 | 32 | 40 | 48 | 64 | 96;
export declare type ImageFileType = 'svg' | 'png';
export interface IFileTypeIconOptions {
    /**
     * The file extension, such as .pptx, for which you need an icon.
     * For file type icons that are not associated with a file
     * extension, such as folder, use the type property.
     */
    extension?: string;
    /**
     * The type of file type icon you need. Use this property for
     * file type icons that are not associated with a file extension,
     * such as folder.
     */
    type?: FileIconTypeInput;
    /**
     * The size of the icon in pixels.
     * @default 16
     */
    size?: FileTypeIconSize;
    /**
     * The type of image file to use. Can be svg or png.
     * @default 'svg'
     */
    imageFileType?: ImageFileType;
}
/**
 * This function returns properties for a file type icon given the IFileTypeIconOptions.
 * It accounts for different device pixel ratios. For example,
 * `getFileTypeIconProps({ extension: 'doc', size: 16, imageFileType: 'png' })`
 * will return `{ iconName: 'docx16_2x_png' }` if the `devicePixelRatio` is 2.
 * @param options
 */
export declare function getFileTypeIconProps(options: IFileTypeIconOptions): {
    iconName: string;
};
export declare function getFileTypeIconNameFromExtensionOrType(extension: string | undefined, type: FileIconType | undefined): string;
export declare function getFileTypeIconSuffix(size: FileTypeIconSize, imageFileType?: ImageFileType): string;
