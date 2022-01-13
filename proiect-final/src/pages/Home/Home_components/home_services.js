import React from 'react';
import { NavLink } from "react-router-dom";
import "../Home_scss/home_services.scss";
import "../../../Scss_files/main.scss";

export function HomeServices() {

    return (
        <section className="servicesSection">
            <div className="servicesTitle">
                <h4>OUR SERVICES</h4>
                <h3>MODERN & PROFESSIONAL BARBER STUDIO</h3>
            </div>

            <div className="servicesContainer">
                <div className="servicesBox">
                    <img src={ require("../../../Assets/scissors.png") } alt="scissors"/>
                    <h4>STYLE & MASTERSHIP</h4>
                    <h3>HAIRCUT</h3>
                </div>

                <div className="servicesBox">
                    <img src={ require("../../../Assets/scissors.png") } alt="scissors"/>
                    <h4>FOR CONNNOISSEURS</h4>
                    <h3>ROYAL SHAVING</h3>
                </div>

                <div className="servicesBox">
                    <img src={ require("../../../Assets/scissors.png") } alt="scissors"/>
                    <h4>BEST PROFESSIONALS</h4>
                    <h3>BEARD STYLING</h3>
                </div>
            </div>

            <div className="servicesButton">
                <button>
                    <NavLink to="/">Make an appointment</NavLink>
                </button>
            </div>

        </section>
    )
}

