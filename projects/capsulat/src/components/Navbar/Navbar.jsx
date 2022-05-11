import React from "react";

import {images} from "../../constants"
import "./Navbar.css"

const Navbar = ()=>(
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo256} alt="app logo"/>
        </div>
        <ul className="app__navbar-links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#turmas">Turmas</a></li>
            <li className="p__opensans"><a href="#login">Login</a></li>
            <li className="p__opensans"><a href="#cadastro">Cadastro</a></li>
        </ul>
    </nav>
);

export default Navbar;