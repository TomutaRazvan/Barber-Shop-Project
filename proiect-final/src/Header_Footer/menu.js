import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import './menu.scss';

export function Menu() {
    let [menu, showMenu] = useState("false");

    function handleMenu() {
        showMenu(!menu)
    }

    return (
        <header>
            <div className='logo'>
                <NavLink to="/"><img src={require('../Assets/logo.png')} /></NavLink>
                
            </div>

            <nav>
                <NavLink to="/aboutus" activeClassName="active">ABOUT US</NavLink>
                <NavLink to="/services" activeClassName="active">SERVICES</NavLink>
                <NavLink to="/contactus" activeClassName="active">CONTACT US</NavLink>
            </nav>

            <div className='hamburger'>
                <i onClick={handleMenu} className={`fas fa-bars fa-2x ${menu ? "white" : "brown"}`}></i>
            </div>

            <div className={`dropdownMenu ${menu ? "hide" : "show"}`}>
                <NavLink to="/aboutus" activeClassName="active">ABOUT US</NavLink>
                <NavLink to="/services" activeClassName="active">SERVICES</NavLink>
                <NavLink to="/contactus" activeClassName="active">CONTACT US</NavLink>
            </div>
        </header>
    )
}
