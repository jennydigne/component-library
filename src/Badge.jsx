import "./Badge.css"

const sizes = {
    large: "badgeLarge",
    small: "badgeSmall"
}

export function Badge({ color, textColor, size, Icon, children }) {

const sizeClassName = sizes[size];

    return (
        <span className={sizeClassName} style={{ backgroundColor: color, color: textColor}}>
            {Icon && <Icon />}
            {children}</span>
    );
}