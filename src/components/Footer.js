import React from "react";
import {Link} from "react-router-dom";
import React, { useState } from 'react';

function Footer(props) {
  return (
      <div>
          <h1>Nos promotions du moment</h1>

          <button><Link to="/mentions-legales">Mentions Légales</Link></button>
      </div>
  );
}

export default Footer;

// Produits en promo
const App = () => {
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
// Filtre dynamique?
const App = () => {
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


export default App;
