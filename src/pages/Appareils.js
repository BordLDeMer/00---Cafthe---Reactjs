import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsByType = ({ typeProduit }) => {
    // État pour stocker les produits récupérés
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fonction pour récupérer les produits par type
        const fetchProductsByType = async () => {
            try {
                // Remplacer l'URL par l'URL de votre API
                const response = await axios.get(`https://votre-api.com/produits?type_produit=${typeProduit}`);
                setProduits(response.data);
                setLoading(false);
            } catch (error) {
                setError('Erreur lors de la récupération des produits');
                setLoading(false);
            }
        };

        fetchProductsByType();
    }, [typeProduit]); // Refaire la requête lorsque le type_produit change

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (produits.length === 0) {
        return <div>Aucun produit trouvé pour ce type.</div>;
    }

    return (
        <div>
            <h1>Produits de type : {typeProduit}</h1>
            <div className="produits-list">
                {produits.map((produit) => (
                    <div key={produit.id_produit} className="produit-item">
                        <h2>{produit.nom}</h2>
                        <p>{produit.description}</p>
                        <p>Prix : {produit.prix}€</p>
                        <img src={produit.imageUrl} alt={produit.nom} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsByType;
