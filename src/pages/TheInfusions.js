import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";

const TheInfusions = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/rayon/2`);
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
        <div>
            <div className="product-list">
                {produits.map((produit) => (
                    <ProductCard key={produit.id} produit={produit} />
                ))}
            </div>
        </div>
    )
}

export default TheInfusions;