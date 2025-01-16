import "./Alert.css";

export function Alert({ color, textColor, children, Icon }) {
    return (
        <div className="alert" style={{ backgroundColor: color, color: textColor }}>
            {Icon && <Icon />}
            {children}</div>
    );
}