export function getStyles(props) {
    return {
        root: [
            {
                position: 'absolute',
                boxShadow: 'inherit',
                border: 'none',
                boxSizing: 'border-box',
                transform: props.transform,
                width: props.width,
                height: props.height,
                left: props.left,
                top: props.top,
                right: props.right,
                bottom: props.bottom,
            },
        ],
        beak: {
            fill: props.color,
            display: 'block',
        },
    };
}
//# sourceMappingURL=Beak.styles.js.map