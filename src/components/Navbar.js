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
      <Link to="/">Mon Site</Link>

      <div>
        {isAuthenticated ? (
          <>
            <span>
              Bonjour {user.prenom} {user.nom}
            </span>
            <button onClick={handleLogout}>Se déconnecter</button>
          </>
        ) : (
          <Link to="/login">Se connecter </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
