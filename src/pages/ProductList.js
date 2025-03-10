import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
/* npm install axios */
/* npm install react-loading-skeleton */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/ProductList.css";

function ProductList(props) {
  const [produits, setProduits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/produit");
        console.log(response.data)
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur de chargement des produits ", error);
      } finally {
        setIsLoading(false);
        /* On arrête d'afficher le chargement (squelettes) */
      }
    };

    void fetchProduits();
  }, []);

  if (isLoading) {
    return (
      <div className="product-list">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="product-skeleton">
            {/* Image*/}
            <Skeleton height={200} width={300} />

            <div style={{ marginTop: "5px" }}>
              <Skeleton height={20} width="70%" />
            </div>

            <div style={{ marginTop: "5px" }}>
              <Skeleton height={20} width="40%" />
            </div>
          </div>
        ))}
      </div>
    );

  }

  return (
    <div>
        <div className="product-list">
        {produits.map((produit) => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;