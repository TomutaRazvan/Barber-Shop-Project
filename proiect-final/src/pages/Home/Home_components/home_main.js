import React from 'react';
import { NavLink } from "react-router-dom";
import "../Home_scss/home_main.scss";
import { Menu } from "../../../Header_Footer/menu"

export function HomeMain() {

    return (
        <main>

            <Menu />

            <div className='mainFlex'>
                <div className='mainContent'>
                    <div className='titleDiv'>
                        <h1>Welcome to Barber Shop</h1>
                    </div>
                    
                    <div className="slogan">
                        <h3>get 20% off on your first online appointment</h3>
                    </div>
                    
                    <div className="mainButton">
                        <button>
                            <NavLink to="/">GET IN CONTACT</NavLink>
                            
                        </button>
                    </div>
                </div>
            </div>

        </main>
    )
}
