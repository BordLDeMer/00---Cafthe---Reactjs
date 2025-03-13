import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
      <nav>
          <div className="navbar-logo">
              <Link to="/">
                  <img src="/lolgo.png" alt="Logo" className="logo"/>
              </Link>
          </div>
          <Link to="/nos-thes-infusions">Nos Thés & Infusions</Link>
          <Link to="/Cafés">Nos Cafés</Link>
          <Link to="/nos-machines">Nos Machines</Link>
          <Link to="/nos-cadeaux-coffrets">Nos Cadeaux & Coffrets Découverte</Link>
          <Link to="/panier">Panier</Link>
          <div>
              {isAuthenticated ? (
                  <>
                    <span>
                      Bonjour {user.prenom} {user.nom}
                    </span>
                    <button onClick={handleLogout}>Se déconnecter</button>
                  </>
              ) : (
                  <>
                      <button><Link to="/login">Se connecter </Link></button>
                  </>
              )}
          </div>
      </nav>
  )
}

export default Navbar;
