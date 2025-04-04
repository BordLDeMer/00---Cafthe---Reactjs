import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

function Login(props) {
  const { login } = useContext(AuthContext); // fonction login venant du contexte
  const navigate = useNavigate(); // la navigation

  const [email, setEmail] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/clients/login`,
        {
          email,
          mot_de_passe,
        },
      );
      console.log(response)

      const { token, client } = response.data;

      // On met à jour contexte d'authentification
      login(token, client);

      // Redirection du client vers une page
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la connexion : ", error);
      if (error.response.data.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Erreur");
      }
    }
  };

  return (
  <div style={{ margin: "50px auto", maxWidth: 400 }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Email :</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Mot de passe :</label>
          <br />
          <input
            type="password"
            value={mot_de_passe}
            onChange={(e) => setMot_de_passe(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        {errorMsg && (
          /*<button type="submit"><Link to="/inscription">S'inscrire</Link></button>*/
          <div style={{ color: "red", marginBottom: 10 }}>{errorMsg}</div>
        )}
        <button type="submit">Se connecter</button>
      </form>
    <button> <Link to={"/register"}>S'inscrire</Link></button>
    <div>  </div>
  </div>
  );
}

export default Login;
