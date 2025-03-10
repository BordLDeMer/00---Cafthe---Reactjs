import React from "react";
import {Link} from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({produit}) {
    return (
        <div className="product-card">
            <div><img src="/ai-generated-7789179_1280.jpg"></img></div>
            <div className="details-product-card">
                <Link to={`/produit/${produit.ID_produit}`} className="details-btn">
                    <h3>{produit.designation_produit}</h3>
                </Link>

                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</h3>

                <div className="prix-btn2">
                    <p>{produit.prix_ttc}€</p>
                    <Link to={`/`} className="details-btn2"><h2>ADD</h2></Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
