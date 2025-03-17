// npm install react-slick slick-carousel
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Footer() {

    // Afficher pdt en promo & en caroussel

    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/solde`);
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits ", error);
            }
        };
        void fetchProduits();
    }, []);

    if (!produits) {
        return (
            <p></p>
        )
    }

    // Paramètres de configuration du carrousel
    const settings = {
        dots: true, // Affiche les points de navigation en bas du carrousel
        infinite: true, // Permet au carrousel de boucler
        speed: 500, // Vitesse de transition
        slidesToShow: 2, // Nombre de produits affichés par slide
        slidesToScroll: 1, // Nombre de produits défilés par scroll
        responsive: [
            {
                breakpoint: 640, // Si la largeur de l'écran est inférieure à 640px
                settings: {
                    slidesToShow: 2, // Afficher 2 produits
                    slidesToScroll: 1, // Faire défiler 1 produit à la fois
                },
            },
            {
                breakpoint: 768, // Si la largeur de l'écran est inférieure à 768px
                settings: {
                    slidesToShow: 3, // Afficher 3 produits
                    slidesToScroll: 1, // Faire défiler 1 produit à la fois
                },
            },
        ],
    };

    /*return (

      <div className="Footer" >
          <div className="promo">
              <div className="product-list">
                  {produits.map((produit) => (
                      <ProductCard key={produit.id} produit={produit} />
                  ))}
              </div>
          </div>

        <button><Link to="/mentions-legales">Mentions Légales</Link></button>
    </div>
  );
}*/

   /* const Footer = ({produits}) => {
        // Paramètres de configuration du carrousel
        const settings = {
            dots: true, // Affiche les points de navigation en bas du carrousel
            infinite: true, // Permet au carrousel de boucler
            speed: 500, // Vitesse de transition
            slidesToShow: 1, // Nombre de produits affichés par slide
            slidesToScroll: 1, // Nombre de produits défilés par scroll
            responsive: [
                {
                    breakpoint: 640, // Si la largeur de l'écran est inférieure à 640px
                    settings: {
                        slidesToShow: 2, // Afficher 2 produits
                        slidesToScroll: 1, // Faire défiler 1 produit à la fois
                    },
                },
                {
                    breakpoint: 768, // Si la largeur de l'écran est inférieure à 768px
                    settings: {
                        slidesToShow: 3, // Afficher 3 produits
                        slidesToScroll: 1, // Faire défiler 1 produit à la fois
                    },
                },
            ],
        };*/

        return (
            <div className="Footer">
                <div>
                    <Slider {...settings}>
                        {produits.map((produit) => (
                            <div key={produit.id}>
                                <ProductCard produit={produit}/>
                            </div>
                        ))}
                    </Slider>
                </div>

                <button>
                    <Link to="/mentions-legales">Mentions Légales</Link>
                </button>
            </div>
        );
   // };
};
    export default Footer;