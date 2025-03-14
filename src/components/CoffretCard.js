import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "./ProductCard";
import "../styles/CoffretCard.css";

function CoffretCard(ID_produit) {
    const [produit, setProduit] = useState( []);

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/${ID_produit.ID_produit}`);
                setProduit(response.data);
            } catch (error) {
                console.error("Erreur au chargement du produit ", error);
            }
        };

        void fetchProduit();
    }, [ID_produit]);

    return (
        <div className="coffretcard">
            <ProductCard  key={produit.id} produit={produit} />
            <ProductCard  key={produit.id} produit={produit} />
        </div>
    );
}

export default CoffretCard;