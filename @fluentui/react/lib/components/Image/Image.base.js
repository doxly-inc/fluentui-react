import { __assign } from "tslib";
import * as React from 'react';
import { classNamesFunction, getNativeProps, imgProperties } from '../../Utilities';
import { ImageCoverStyle, ImageFit, ImageLoadState } from './Image.types';
import { useMergedRefs } from '@fluentui/react-hooks';
var getClassNames = classNamesFunction();
var SVG_REGEX = /\.svg$/i;
var KEY_PREFIX = 'fabricImage';
function useLoadState(props, imageElement) {
    var onLoadingStateChange = props.onLoadingStateChange, onLoad = props.onLoad, onError = props.onError, src = props.src;
    var _a = React.useState(ImageLoadState.notLoaded), loadState = _a[0], setLoadState = _a[1];
    React.useLayoutEffect(function () {
        // If the src property changes, reset the load state
        // (does nothing if the load state is already notLoaded)
        setLoadState(ImageLoadState.notLoaded);
    }, [src]);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intended to run every render
    React.useEffect(function () {
        if (loadState === ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = imageElement.current
                ? (src && imageElement.current.naturalWidth > 0 && imageElement.current.naturalHeight > 0) ||
                    (imageElement.current.complete && SVG_REGEX.test(src))
                : false;
            if (isLoaded) {
                setLoadState(ImageLoadState.loaded);
            }
        }
    });
    React.useEffect(function () {
        var _a;
        (_a = onLoadingStateChange) === null || _a === void 0 ? void 0 : _a(loadState);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run when loadState changes
    }, [loadState]);
    var onImageLoaded = React.useCallback(function (ev) {
        var _a;
        (_a = onLoad) === null || _a === void 0 ? void 0 : _a(ev);
        if (src) {
            setLoadState(ImageLoadState.loaded);
        }
    }, [src, onLoad]);
    var onImageError = React.useCallback(function (ev) {
        var _a;
        (_a = onError) === null || _a === void 0 ? void 0 : _a(ev);
        setLoadState(ImageLoadState.error);
    }, [onError]);
    return [loadState, onImageLoaded, onImageError];
}
export var ImageBase = React.forwardRef(function (props, forwardedRef) {
    var frameElement = React.useRef();
    var imageElement = React.useRef();
    var _a = useLoadState(props, imageElement), loadState = _a[0], onImageLoaded = _a[1], onImageError = _a[2];
    var imageProps = getNativeProps(props, imgProperties, [
        'width',
        'height',
    ]);
    var src = props.src, alt = props.alt, width = props.width, height = props.height, _b = props.shouldFadeIn, shouldFadeIn = _b === void 0 ? true : _b, shouldStartVisible = props.shouldStartVisible, className = props.className, imageFit = props.imageFit, role = props.role, maximizeFrame = props.maximizeFrame, styles = props.styles, theme = props.theme, loading = props.loading;
    var coverStyle = useCoverStyle(props, loadState, imageElement, frameElement);
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        width: width,
        height: height,
        maximizeFrame: maximizeFrame,
        shouldFadeIn: shouldFadeIn,
        shouldStartVisible: shouldStartVisible,
        isLoaded: loadState === ImageLoadState.loaded || (loadState === ImageLoadState.notLoaded && props.shouldStartVisible),
        isLandscape: coverStyle === ImageCoverStyle.landscape,
        isCenter: imageFit === ImageFit.center,
        isCenterContain: imageFit === ImageFit.centerContain,
        isCenterCover: imageFit === ImageFit.centerCover,
        isContain: imageFit === ImageFit.contain,
        isCover: imageFit === ImageFit.cover,
        isNone: imageFit === ImageFit.none,
        isError: loadState === ImageLoadState.error,
        isNotImageFit: imageFit === undefined,
    });
    // If image dimensions aren't specified, the natural size of the image is used.
    return (React.createElement("div", { className: classNames.root, style: { width: width, height: height }, ref: frameElement },
        React.createElement("img", __assign({}, imageProps, { onLoad: onImageLoaded, onError: onImageError, key: KEY_PREFIX + props.src || '', className: classNames.image, ref: useMergedRefs(imageElement, forwardedRef), src: src, alt: alt, role: role, loading: loading }))));
});
ImageBase.displayName = 'ImageBase';
function useCoverStyle(props, loadState, imageElement, frameElement) {
    var previousLoadState = React.useRef(loadState);
    var coverStyle = React.useRef();
    if (coverStyle === undefined ||
        (previousLoadState.current === ImageLoadState.notLoaded && loadState === ImageLoadState.loaded)) {
        coverStyle.current = computeCoverStyle(props, loadState, imageElement, frameElement);
    }
    previousLoadState.current = loadState;
    return coverStyle.current;
}
function computeCoverStyle(props, loadState, imageElement, frameElement) {
    var imageFit = props.imageFit, width = props.width, height = props.height;
    // Do not compute cover style if it was already specified in props
    if (props.coverStyle !== undefined) {
        return props.coverStyle;
    }
    else if (loadState === ImageLoadState.loaded &&
        (imageFit === ImageFit.cover ||
            imageFit === ImageFit.contain ||
            imageFit === ImageFit.centerContain ||
            imageFit === ImageFit.centerCover) &&
        imageElement.current &&
        frameElement.current) {
        // Determine the desired ratio using the width and height props.
        // If those props aren't available, measure measure the frame.
        var desiredRatio = void 0;
        if (typeof width === 'number' &&
            typeof height === 'number' &&
            imageFit !== ImageFit.centerContain &&
            imageFit !== ImageFit.centerCover) {
            desiredRatio = width / height;
        }
        else {
            desiredRatio = frameElement.current.clientWidth / frameElement.current.clientHeight;
        }
        // Examine the source image to determine its original ratio.
        var naturalRatio = imageElement.current.naturalWidth / imageElement.current.naturalHeight;
        // Should we crop from the top or the sides?
        if (naturalRatio > desiredRatio) {
            return ImageCoverStyle.landscape;
        }
    }
    return ImageCoverStyle.portrait;
}
//# sourceMappingURL=Image.base.js.map