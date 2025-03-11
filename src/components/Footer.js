import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Footer() {

    // Afficher pdt en promo

    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/solde`);
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits ", error);
            }
        };
        void fetchProduits();
    }, []);

    if(!produits) {
        return (
            <p></p>
        )
    }

    return (
      <div className="Footer" >
          <div>
              <div className="product-list">
                  {produits.map((produit) => (
                      <ProductCard key={produit.id} produit={produit} />
                  ))}
              </div>
          </div>

        <button><Link to="/mentions-legales">Mentions Légales</Link></button>
    </div>
  );
}
export default Footer;