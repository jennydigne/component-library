import "./Alert.css";

export function Alert({ color, textColor, children, icon: Icon }) {
    return (
        <div className="alert" style={{ backgroundColor: color, color: textColor }}>
            <icon className="alert-icon" />
            {Icon && <Icon />}
            {children}</div>
    );
}