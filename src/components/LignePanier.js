import React, { use, useEffect, useState } from "react";
import axios from "axios";
import "../styles/Panier.css";

function LignePanier({ id, quantite, commande, Reload }) {
  const [produit, setProduit] = useState(null);
  const [lignes, setLignes] = useState(null);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const fetchLigne = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/produit/${id}`,
        );
        setProduit(response.data);
      } catch (error) {}
    };
    void fetchLigne();
  }, []);

  const supprimerLignePanier = async () => {
    try {
      // Supposons que vous avez ID_commande disponible dans votre composant
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ligne/supprimer`,
        {
          ID_commande: commande.ID_commande,
          ID_produit: id,
        },
      );
      // Peut-être rafraîchir le panier après ?
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  // Fonction pour diminuer la quantité
  const handleDecrement = () => {
    void supprimerLignePanier();
    Reload();
  };

  return (
    <div>
      {produit !== null ? (
        <div className="ligneDiv">
          <div className="Colonne">
            <h3>{produit.designation_produit}</h3>
          </div>
          <div className="Colonne">
            <p>{quantite}</p>
          </div>
          <div className="Colonne">
            <p>{produit.prix_ttc * quantite} €</p>
          </div>
          <button onClick={handleDecrement}>-</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default LignePanier;
