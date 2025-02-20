import React from "react";
import {Link} from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({produit}) {
    return (
        <div className="product-card">
            <image src="public/ai-generated-7789179_1280.jpg"></image>
            <h3>{produit.designation_produit}</h3>
            <p>{produit.prix_ttc}€</p>
            <Link to={`/produit/${produit.id}`} className="details-btn">
                Voir détails
            </Link>
        </div>
    );
}

export default ProductCard;
