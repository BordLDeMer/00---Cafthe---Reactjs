import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LignePanier from "../components/LignePanier";
import "../styles/Panier.css";

function Panier() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [commande, setCommande] = useState(undefined);
  const [lignes, setLignes] = useState(undefined);
  const [prix, setPrix] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const Reload = () => {
    void RecupCommande();
  };

  const RecupCommande = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/commande/client/ouvert/${user.id}`,
        );
        setCommande(response.data);
      } catch (error) {
        console.error(
          "Erreur de chargement de la dernière commande du client",
          error,
        );
      }
    }
  };

  const RecupLignesCommande = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/ligne/commande/${commande.ID_commande}`,
      );
      setLignes(response.data);
    } catch (error) {
      console.error(
        "Erreur de chargement de la dernière commande du client",
        error,
      );
    }
  };

  const CalculPrixTot = async () => {
    let tempPrix = 0;

    for (let i = 0; i < lignes.length; i++) {
      let temp = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/produit/${lignes[i].ID_produit}`,
      );
      tempPrix += temp.data.prix_ttc * lignes[i].qte_pdt_ligne_panier;
    }
    setPrix(tempPrix);
  };

  if (commande === undefined) {
    void RecupCommande();
  }

  if (lignes === undefined && commande !== undefined) {
    console.log(commande.NB_ligne_cmd);
    if (!commande.NB_ligne_cmd == 0) {
      void RecupLignesCommande();
    }
  }

  if (lignes !== undefined && prix === null) {
    void CalculPrixTot();
  }
  console.log(lignes);

  return (
    <div>
      {/*<Produits produits={produitsData} ajouterAuPanier={ajouterAuPanier} />*/}
      <h2>Panier</h2>
      <div>
        <div className="ligneDiv" style={{ marginBottom: "5px" }}>
          <div className="Colonne">
            <h3>Nom</h3>
          </div>
          <div className="Colonne">
            <h3>Quantité</h3>
          </div>
          <div className="Colonne">
            <h3>Prix total</h3>
          </div>
          <div className="Colonne">
            <h3>Action</h3>
          </div>
        </div>
      </div>
      <div>
        {lignes !== undefined
          ? lignes.map((produit) => (
              <LignePanier
                id={produit.ID_produit}
                quantite={produit.qte_pdt_ligne_panier}
                commande={commande}
                Reload={Reload}
              />
            ))
          : ""}
      </div>
      <h3>Total: {prix !== null ? prix : "0"} €</h3>
      <button>
        <Link to="/Commande">Commande précédente</Link>
      </button>
      <button style={{ marginLeft: "1110px" }}>
        <Link to="/Livraison">Options de livraison</Link>
      </button>
    </div>
  );
}

export default Panier;
