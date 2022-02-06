import React from 'react';
import { NavLink } from "react-router-dom";
import "../Home_scss/home_services.scss";
import "../../../Scss_files/main.scss";

export function HomeServices() {

    return (
        <section className="servicesSection">
            <div className="servicesTitle">
                <h3>OUR SERVICES</h3>
                <h2>A RANGE OF PREMIUM <br/>BARBER SERVICES</h2>
            </div>

            <div className="servicesContainer">
                <div className="servicesBox up">
                    <img src={ require("../../../Assets/scissors.png") } alt="scissors"/>
                    <h4>STYLE & MASTERSHIP</h4>
                    <h5>HAIRCUT</h5>
                </div>

                <div className="servicesBox bot">
                    <img src={ require("../../../Assets/barber.png") } alt="shaving"/>
                    <h4>FOR CONNNOISSEURS</h4>
                    <h5>ROYAL SHAVING</h5>
                </div>

                <div className="servicesBox up">
                    <img src={ require("../../../Assets/beard.png") } alt="beard"/>
                    <h4>BEST PROFESSIONALS</h4>
                    <h5>BEARD STYLING</h5>
                </div>

                <div className="servicesBox bot">
                    <img src={ require("../../../Assets/seat.png") } alt="chair"/>
                    <h4>COMPREHENSIVE CARE</h4>
                    <h5>BARBER-SPA</h5>
                </div>
            </div>

            <div className="servicesButton">
                <NavLink to="/services">OUR SERVICES</NavLink>
            </div>

        </section>
    )
}

