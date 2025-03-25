import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "../styles/index.css";

function Command() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [command, setCommand] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCommand = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/commande/client/${user.id}`,
        );
        setCommand(response.data);
      } catch (error) {
        console.error("Erreur de chargement des produits", error);
      } finally {
        setIsLoading(
          false,
        ); /* On arrête d'afficher le chargement (squelette) */
      }
    };

    void fetchCommand();
  }, []);
  return (
    <div>
      <h3>Historique des commandes</h3>
      <div>
        {command.map((commande) => (
          <div className={"box-commande"}>
            <p>Date de la commande : {commande.date_prise_commande}</p>
            <p>ID de votre conseiller : {commande.ID_Vendeur}</p>
            <p>Montant TTC de la commande : {commande.montant_commande} €</p>
            <Link
              to={`/commande/${commande.id_commande}`}
              className={"details-btn"}
            >
              Voir le détail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Command;
