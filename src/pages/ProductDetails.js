import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [produit, setProduit] = useState();

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/produits/${id}`,
        );
        setProduit(response.data);
      } catch (error) {
        console.error("Erreur au chargement du produit ", error);
      }
    };

    void fetchProduit();
  }, [id]);

  if (!produit) {
    return <p>Produit introuvable ou erreur.</p>;
  }

  return (
    <div className="product-details">
      {/* image */}
      <h2>{produit.nom}</h2>
      <p>{produit.description}</p>
      <p>
        <strong>Prix TTC :</strong> {produit.prix_ttc} euros
      </p>
      <p>
        <strong>Stock :</strong> {produit.stock} unités
      </p>
    </div>
  );
}

export default ProductDetails;
