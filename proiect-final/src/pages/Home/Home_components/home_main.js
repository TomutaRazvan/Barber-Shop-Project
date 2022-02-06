import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import "../Home_scss/home_main.scss";
import { Menu } from "../../../Header_Footer/menu";



export function HomeMain({refToLastComp}) {

    return (
        <main className='homeMain'>

            <Menu />

            <div className='mainFlex'>
                <div className='mainContent'>
                    <div className='titleDiv'>
                        
                        <h1>Welcome to <br/><span className='titleSpan'>Barber Shop</span></h1>
                    </div>
                    
                    <div className="slogan">
                        <span>Finest barbers make your first impression count.</span>
                    </div>
                    
                    <div className="mainButton">
                        <button onClick={() => {refToLastComp?.current?.scrollIntoView()}}>
                            <NavLink to="/">MAKE AN APPOINTMENT</NavLink>
                        </button>
                    </div>
                </div>
            </div>

            <div className='mainContact'>
                <div className='mainContactBox'>
                    <h3>OPENING HOURS</h3>
                    <span>Monday - Sunday: 11:00 am - 8:00 pm</span>
                </div>

                <div className='mainContactBox'>
                    <h3>BOOKING NUMBER</h3>
                    <span>+844 - 946 888 3355 / +844 922 888 8800</span>
                </div>

                <div className='mainContactBox'>
                    <h3>LOCATION</h3>
                    <span>10 West Chestnut Ave, Clarksburg</span>
                </div>
            </div>

        </main>
    )
}

