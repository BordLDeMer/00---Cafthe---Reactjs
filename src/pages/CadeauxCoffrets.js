/*import React, { useEffect, useState } from 'react';

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
                console.log(datay)
            } catch (error) {
                console.error('Error fetching random products:', error);
            } finally {
                setLoading(false);
            }
        };

        void fetchRandomProducts();
    }, []);

    return (
        <div>
            <h1>Produits aléatoires par rayon</h1>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.ID_produit}>
                            Rayon {product.ID_rayon}: Produit ID {product.ID_produit}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RandomProducts;


 */
