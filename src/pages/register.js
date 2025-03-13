import React from 'react';
import {Link} from "react-router-dom";

function Register(props) {
    return (
        <div>
                <meta charSet="utf-8"/>
                <title>Register</title>
            <form action="test.php" target="_blank">
                <p>
                    <label>Nom Prénom: <input type="text" name="nom_prénom"/></label>
                </p>
                <p>
                    <label>Téléphone: <input type="text" name="Téléphone"/></label>
                </p>
                <p>
                    <label>Mail: <input type="text" name="Mail"/></label>
                </p>
                <p>
                    <label>Mot de Passe<input type="password" name="Mot de passe"/></label>
                </p>
                <p>
                    <button>S'inscrire</button>
                </p>
            </form>
            <button> <Link to={"/login"}>Se connecter</Link> </button>

        </div>
    );
}

export default Register;
