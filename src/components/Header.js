import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import "../styles/Header.css";

function Header() {
    const { user, isAuthenticated, logout } = useContext(AuthContext);


    //function handleLogout() {}

    return (
        <div className="header">
            <h1>Bob</h1><br/>
            <p>LOREM IPSUM</p>
            <img className="imgtitre" src="/coffee-8861674_1280.png" alt="Café accueil" width="300" height="auto"/>

        </div>
    );
}

export default Header;