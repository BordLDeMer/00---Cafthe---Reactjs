import React, {useEffect, useState} from 'react';
import axios from "axios";

const TheInfusions = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/produit/rayon/2`);
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
            <h1>Liste des produits</h1>
            <ul>
                {produits.length === 0 ? (
                    <li>Aucun produit trouvé</li>
                ) : (produits.map((r) => (
                    <li key={r.ID_produit}>
                        <strong>{r.type_produit}</strong> - {r.designation_produit} - {r.prix_ttc}€
                    </li>
                )))}
            </ul>
        </div>
    )
}

export default TheInfusions;