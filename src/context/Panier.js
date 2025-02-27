import React, { useState } from "react";
//import ProduitCard from "./ProduitCard";
//import productDetail from "./data";

function App() {
    const [panier, setPanier] = useState([]);

    const ajouterAuPanier = (produit) => {
        const produitExistant = panier.find((item) => item.id === produit.id);
        if (produitExistant) {
            setPanier(
                panier.map((item) =>
                    item.id === produit.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setPanier([...panier, { ...produit, quantity: 1 }]);
        }
    };

    const supprimerDuPanier = (id) => {
        setPanier(panier.filter((produit) => produit.id !== id));
    };

    const calculerTotal = () => {
        return panier.reduce((total, produit) => total + produit.prix * produit.quantity, 0);
    };

    return (
        <div>
            {/*<Produits produits={produitsData} ajouterAuPanier={ajouterAuPanier} />*/}
            <h2>Panier</h2>
            <ul>
                {panier.map((produit, index) => (
                    <li key={index}>
                        {produit.nom} - {produit.prix} € x{produit.quantity}
                        <button onClick={() => supprimerDuPanier(produit.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <h3>Total: {calculerTotal()} €</h3>
        </div>
    );
}

export default App;
