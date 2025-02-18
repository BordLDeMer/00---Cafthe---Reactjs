import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar(props) {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
      <nav>
          <button><Link to="/">Accueil</Link></button>
          <button><Link to="/panier">Panier</Link></button>
          <button><Link to="/nos-thes-infusions">Nos Thés & Infusions</Link></button>
          <button><Link to="/nos-cafes">Nos Cafés</Link></button>
          <button><Link to="/nos-machines">Nos Machines</Link></button>
          <button><Link to="/nos-cadeaux-coffrets">Nos Cadeaux & Coffrets Découverte</Link></button>
          <button><Link to="/faq">FAQ</Link></button>
          <button><Link to="/en-savoir-plus">En Savoir Plus</Link></button>
          <button><Link to="/votre-espace">Votre Espace</Link></button>
          <button><Link to="/mentions-legales">Mentions Légales</Link></button>

          <div>
              {isAuthenticated ? (
                  <>
            <span>
              Bonjour {user.prenom} {user.nom}
            </span>
                      <button onClick={handleLogout}>Se déconnecter</button>
                  </>
              ) : (
                  <button>< Link to="/login">Se connecter < /Link></button>
              )}
          </div>
      </nav>
  );
}

export default Navbar;
