import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Panier() {
    const {isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const [commande, setCommande] = useState({});
    const [lignes, setLignes] = useState({});
    const user = JSON.parse(localStorage.getItem("user"));

    const RecupCommande = async () => {
        if (user) {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/commande/client/ouvert/${user.id}`
                )
                setCommande(response.data)
                void RecupLignesCommande();
            } catch (error) {
                console.error("Erreur de chargement de la dernière commande du client", error);
            }
        }
    }

    const RecupLignesCommande = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/ligne/commande/${commande.ID_commande}`
            )
            setLignes(response.data)
        } catch (error) {
            console.error("Erreur de chargement de la dernière commande du client", error);
        }
    }

    if (!commande.ID_commande){
        void RecupCommande();
    }

    if (!lignes[0]){
        void RecupLignesCommande();
        console.log(lignes)
    }
    console.log(commande);
    console.log(lignes);


    return (
        <div>
            {/*<Produits produits={produitsData} ajouterAuPanier={ajouterAuPanier} />*/}
            <h2>Panier</h2>
            <ul>
                {commande.ID_commande ? (
                    lignes.map((produit, index) => (
                        <li key={index}>
                            {produit[0].nom} - {produit[0].prix} € x{produit[0].quantity}
                        </li>
                    ))
                ) :
                ""}
            </ul>
            <h3>Total:  €</h3>
        </div>
    );
}

export default Panier;
