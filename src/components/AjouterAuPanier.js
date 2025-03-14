import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function AjouterAuPanier({id}) {
    const {isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const [commande, setCommande] = useState({});
    const user = JSON.parse(localStorage.getItem("user"));

    // Route qui récupère le dernier panier de user si user
    const RecupCommande = async () => {
        if (user) {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/commande/client/ouvert/${user.id}`
                )
                setCommande(response.data)
            } catch (error) {
                console.error("Erreur de chargement de la dernière commande du client", error);
            }
        }
    }

    // Route qui ajoute l'article dans le panier récupéré si commande.ID_commande Fonction : AjouterArticle()
    const AjouterArticle = async () => {
        if (commande.ID_commande){
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/ligne/ajouter`,
                    {ID_commande: commande.ID_commande, ID_produit: id})
            } catch (error) {
                console.error("Erreur lors de l'ajout au panier", error)
            }
        }
    }

    const HandleAdd = async () => {
        if (!isAuthenticated) {
            navigate("/login");
        } else {
            void ( AjouterArticle());
        }
    }

    if (!commande.ID_commande) {
        void RecupCommande();
    }

    return (
        <div>
            <button onClick={HandleAdd}> Ajouter </button>
        </div>
    );
}

export default AjouterAuPanier;