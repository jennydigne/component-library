import "./Badge.css"

const sizes = {
    large: "badgeLarge",
    small: "badgeSmall"
}

export function Badge({ color, textColor, size, icon: Icon, children }) {

const sizeClassName = sizes[size];
console.log("Size:", size); // Kontrollera värdet på size
console.log("ClassName:", sizeClassName); // Kontrollera tillämpad klass

    return (
        <span className={sizeClassName} style={{ backgroundColor: color, color: textColor}}>
            <icon className="badge-icon" />
            {Icon && <Icon />}
            {children}</span>
    );
}