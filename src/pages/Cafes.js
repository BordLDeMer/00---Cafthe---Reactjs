import React, {useEffect, useState} from 'react';
import axios from "axios";
import login from "./Login";
import {useParams} from "react-router-dom";

const Cafes = () => {
   const [produits, setProduits] = useState([]);

   useEffect(() => {
       const fetchProduits = async () => {
           try {
               const response = await axios.get(`${process.env.REACT_APP_API_URL}=https://api.benjamin.bidou.dev-campus.fr/api/produit/rayon/1`);
               setProduits(response.data);
           } catch (error) {
               console.error("Erreur de chargement des produits ", error);
           }
       };
         void fetchProduits();
      }, []);

      if(!produits) {
          return (
              <p></p>
          )
      }

      return (
          <div>
              <h1>Liste des produits</h1>
              <ul>
                  {produits.length === 0 ? (
                      <li>Aucun produit trouvé</li>
                  ) : (produits.map((r) => (
                      <li key={r.ID_produit}>
                          <strong>{r.type_produit}</strong> - {r.designation_produit} - {r.prix_ttc}€
                      </li>
                  )))}
              </ul>
          </div>
      )
  }
export default Cafes;