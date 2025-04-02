import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const HandleRegister = async (e) => {
    e.preventDefault();

    const nom = e.target[0].value;
    const tel = e.target[1].value;
    const mail = e.target[2].value;
    const mdp = e.target[3].value;

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/clients/register`,
        { nom_prenom: nom, tel: tel, mail: mail, mdp: mdp },
      );
    } catch (error) {
      console.error("Erreur appel register client", error);
    } finally {
      navigate("/login");
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Register</title>
      <form onSubmit={(e) => HandleRegister(e)}>
        <p>
          <label>
            Nom Prénom: <input type="text" name="nom_prénom" />
          </label>
        </p>
        <p>
          <label>
            Téléphone: <input type="text" name="Téléphone" />
          </label>
        </p>
        <p>
          <label>
            Mail: <input type="text" name="Mail" />
          </label>
        </p>
        <p>
          <label>
            Mot de Passe
            <input type="password" name="Mot de passe" />
          </label>
        </p>
        <p>
          <button>S'inscrire</button>
        </p>
      </form>
      <button>Se connecter</button>
    </div>
  );
}

export default Register;
