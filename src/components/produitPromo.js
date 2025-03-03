// Produits en promotion
import {useState} from "react";

const produitPromo = () => {
    const [prixMax, setPrixMax] = useState(10);

    // Filtrer les produits en dessous du prixMax (10€)
    const produitsFiltres = produits.filter((produit) => produit.prix < prixMax);

    return (
        <div>
            <h1>Liste des produits</h1>
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
export default produitPromo;