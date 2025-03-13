import React, { useEffect, useState } from 'react';
import ProductCard from "../components/ProductCard";
import CoffretCard from "../components/CoffretCard";

const RandomProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fonction pour récupérer les produits aléatoires de chaque rayon
        const fetchRandomProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/random-product-by-rayon`);
                const data = await response.json();
                setProducts(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching random products:', error);
            } finally {
                setLoading(false);
            }
        };

        void fetchRandomProducts();
    }, []);

    console.log(products)

    return (
        <div>
            <h1>Coffrets découverte</h1>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                products.map((product) => (
                    <CoffretCard ID_produit={product.ID_produit} />
                    ))
            )}
        </div>
    );
};

export default RandomProducts;