import React from "react";
import { NavLink } from "react-router-dom";
import "../Home_scss/home_whyUs.scss";

export function WhyUs() {

    return (
        <section className="whyUsSection">
            <div className="leftSection">
                <h3>WHY US</h3>

                <h2>EXPLORE COOL MANLY INTERIOR <br/> DECORATING INSPIRATION</h2>

                <p>Barbershop offers men the possibility to have an experience that is not just a classic haircut or a shave, but the old school atmosphere that surrounds you when you enter a classical barbershop. </p>
                
                <NavLink to="/aboutus">MORE ABOUT US</NavLink>
            </div>

            <div className="rightSection"></div>
        </section>
    )
}