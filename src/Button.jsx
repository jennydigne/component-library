import "./Button.css";

const sizes = {
    large: "buttonLarge",
    small: "buttonSmall"
}

const colors = {
    blue: "buttonBlue",
    gray: "buttonGray"
}

export function Button({ size, color, disabled, children }) {

    const buttonClasses = `${sizes[size] || ""} ${colors[color] || ""}`;

    return (
        <button className={buttonClasses} disabled={disabled}>
            {children}</button>
    );
}