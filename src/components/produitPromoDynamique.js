// Filtre dynamique?
import {useState} from "react";

const produitPromoDynamique = () => {
    const [prixMax, setPrixMax] = useState(10);

    // Filtrer les produits en dessous du prixMax
    const produitsFiltres = produits.filter((produit) => produit.prix < prixMax);

    // Fonction pour gérer le changement du prix maximal
    const handlePrixMaxChange = (event) => {
        setPrixMax(event.target.value);
    };

    return (
        <div>
            <h1>Liste des produits</h1>
            <label htmlFor="prixMax">Prix maximal :</label>
            <input
                id="prixMax"
                type="number"
                value={prixMax}
                onChange={handlePrixMaxChange}
            />
            <ul>
                {produitsFiltres.map((produit) => (
                    <li key={produit.id}>
                        {produit.nom} - {produit.prix}€
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default produitPromoDynamique;