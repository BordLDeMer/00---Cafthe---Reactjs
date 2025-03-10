import React from 'react';

function Register(props) {
    return (
        <div>
            <html>
            <head>
                <meta charSet="utf-8"/>
                <title>Register</title>
            </head>
            <body>
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
            </body>
            </html>
        </div>
    );
}

export default Register;
