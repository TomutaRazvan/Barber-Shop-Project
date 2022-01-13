import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import './menu.scss';

export function Menu() {

    return (
        <header>
            <div className='logo'>
                <NavLink to="/"><img src={require('../Assets/logo.png')} /></NavLink>
                
            </div>

            <nav>
                <NavLink to="/whyus">WHY US</NavLink>
            </nav>
        </header>
    )
}
