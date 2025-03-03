import React, {useEffect, useState} from 'react';
import axios from "axios";
import login from "./Login";

const App = () => {
    const [motCle, setMotCle] = useState('Café');
    const [produits, setProduits] = useState('');
    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/produit");
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits ", error);
            }
        };

        void fetchProduits();
    }, []);

    console.log(produits[0])
    // Filtrer les produits en fonction du mot-clé dans la description
    const produitsFiltres = produits.filter((produit) =>
        produit.designation_produit.toLowerCase().includes(motCle.toLowerCase())
    );

    // Fonction pour gérer la modification du mot-clé
    const handleMotCleChange = (event) => {
        setMotCle(event.target.value);
    };

    console.log(produitsFiltres);

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

export default App;