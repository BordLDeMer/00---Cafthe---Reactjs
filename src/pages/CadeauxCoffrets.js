import React, { useState } from 'react';

const CadeauxCoffrets = () => {
    const [motCle, setMotCle] = useState('');
    const [produits, setProduits] = useState([])



    // Filtrer les produits en fonction du mot-clé dans la description
    const produitsFiltres = produits.filter((produit) =>
        produit.description.toLowerCase().includes(motCle.toLowerCase())
    );

    // Fonction pour gérer la modification du mot-clé
    const handleMotCleChange = (event) => {
        setMotCle(event.target.value);
    };

    return (
        <div>
            <h1>Liste des produits</h1>
            <label htmlFor="motCle">Rechercher un produit :</label>
            <input
                id="motCle"
                type="text"
                value={motCle}
                onChange={handleMotCleChange}
                placeholder="Rechercher dans la description"
            />
            <ul>
                {produitsFiltres.length === 0 ? (
                    <li>Aucun produit trouvé</li>
                ) : (
                    produitsFiltres.map((produit) => (
                        <li key={produit.id}>
                            <strong>{produit.nom}</strong> - {produit.description} - {produit.prix}€
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default CadeauxCoffrets;