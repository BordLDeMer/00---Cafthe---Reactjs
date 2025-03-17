import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../styles/Panier.css"

function LignePanier({id, quantite}) {
    const [produit, setProduit] = useState(null);

    useEffect(() => {
        const fetchLigne = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/${id}`)
                setProduit(response.data);
            } catch (error) {}
        }
        void fetchLigne();
    }, []);

    return (
        <div>
                {produit !== null ?
                    <div className="ligneDiv">
                        <div className="Colonne"><h3>{produit.designation_produit}</h3></div>
                        <div className="Colonne"><p>{quantite}</p></div>
                        <div className="Colonne"><p>{produit.prix_ttc * quantite} €</p></div>
                    </div> : ""}
            </div>
    );
}

export default LignePanier;