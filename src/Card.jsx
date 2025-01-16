import "./Card.css"
import { FiShoppingCart } from "react-icons/fi";

export function Card({ href, imgAlt, imgSrc, children }) {
    return (
        <div className="card">
            {imgSrc && (
                <img className="card-img"
                    src={imgSrc}
                    alt={imgAlt}
                />
            )}
            {children}
            {href && (
                <a href={href} className="buy-button"><FiShoppingCart />Add to cart</a>
            )}
        </div>
    )
}