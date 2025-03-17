import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [produit, setProduit] = useState( []);

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/${id}`);
        setProduit(response.data);
      } catch (error) {
        console.error("Erreur au chargement du produit ", error);
      }
    };

    void fetchProduit();
  }, [id]);

    if(!produit) {
        return (
            <p>Erreur...</p>
        )
    }

    console.log(produit)

  return (
  <div className="centrage">
    <div className="product-details">
      {/* image */}
      <div key={produit.ID_produit}>
          <h2>{produit.type_produit}</h2>
          <p>{produit.designation_produit}</p>
          <p>
              <strong>Prix TTC :</strong> {produit.prix_ttc} euros
          </p>
          {/*<p>
            <strong>Stock :</strong> {produit.stock} unités
           </p>*/}
      </div>
    </div>
  </div>
  );
}

export default ProductDetails;
