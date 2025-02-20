import React from "react";
import {Link} from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({produit}) {
    return (
        <div className="product-card">
            <img src="/ai-generated-7789179_1280.jpg"></img>
            <h3>{produit.designation_produit}</h3>
            <p>{produit.prix_ttc}€</p>
            <Link to={`/produit/${produit.id}`} className="details-btn">
                Voir détails
            </Link>
        </div>
    );
}

export default ProductCard;
