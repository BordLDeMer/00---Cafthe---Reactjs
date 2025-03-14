import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import "../styles/Header.css";

function Header() {
    const { user, isAuthenticated, logout } = useContext(AuthContext);


    //function handleLogout() {}

    return (
        <div className="header">
            <div classname="text-content">
                <h1>Notre astuce du jour</h1><br/>
                <p>Boire du café salé est une astuce de grand-mère pour réduire l'amertume de la boisson.
                Plusieurs études scientifiques ont cependant démontré que c'est véritablement le cas. Le sel a non seulement le pouvoir d'adoucir le goût amer du café, mais aussi de faire ressortir ses autres saveurs.</p>
            </div>
            <img className="imgtitre" src="/coffee-8861674_1280.png" alt="Café accueil" width="300" height="auto"/>
        </div>
    );
}

export default Header;