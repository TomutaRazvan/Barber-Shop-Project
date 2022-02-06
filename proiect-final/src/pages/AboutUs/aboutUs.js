import React, { useState } from "react";
import "./aboutUs.scss";
import { Menu } from "../../Header_Footer/menu";

export function AboutUs() {

    return (
        <>
            <main className="aboutMain">
            
                <div className="aboutHeader">
                    <Menu />
            
                    <h1>ABOUT US</h1>
                </div>
            </main>
            
            <section className="aboutSection">

                <div className="aboutTitle">
                    <h3>OUR STORY</h3>
                    <h2>REDEFINING THE BARBERSHOP <br/> EXPERIENCE</h2>
                    <span className="since">Since <span className="year" style={{color: "#dca44e"}}>1987</span></span>
                </div>

                <div className="aboutContent">
                    <p>Since the opening of Barbershop in Lisbon in 2014, it’s been dedicated to preserving the art of traditional men’s grooming.

                    Specialized in classic cuts inspired by the 1920s to 1950s.Barbero was born out of passion. The passion of being a barber but doing it the right way.
                    
                    Since the opening of Barbershop in Lisbon in 2014, it’s been dedicated to preserving the art of traditional men’s grooming.Since the opening of Barbershop in Lisbon in 2014, it’s been dedicated to preserving the art of traditional men’s grooming.</p>

                    <p>Barbershop Lisboa offers men the possibility to have an experience that is not just a classic haircut or a shave, but the old school atmosphere that surrounds you when you enter a classical barbershop. 

                    We have everything what a real man needs: atmosphere of masculinity, a spirit of good fellowship, professionalism of barbers and keeping European barbering traditions, as well as fine coffee and pleasant company.We have everything what a real man needs: atmosphere of masculinity, a spirit of good fellowship, professionalism of barbers and keeping European barbering traditions, as well as fine coffee and pleasant company.</p>
                </div>
            </section>

            <section className="aboutTeam">
                <div className="teamTitle">
                    <h3>OUR TEAM</h3>
                    <h2>MEET THE ARTISTS</h2>
                </div>

                <div className="teamContainer">
                    <div className="teamBox">
                        <img src={ require("../../Assets/teambox_01.jpg") } alt="member 1"/>
                        <h5>HARVEY JONES</h5>
                        <h4>Barber Artist</h4>
                    </div>

                    <div className="teamBox">
                        <img src={ require("../../Assets/teambox_02.jpg") } alt="member 2"/>
                        <h5>ORLANDO EVANS</h5>
                        <h4>Hairdresser</h4>
                    </div>

                    <div className="teamBox">
                        <img src={ require("../../Assets/teambox_03.jpg") } alt="member 3"/>
                        <h5>LEE CORTER</h5>
                        <h4>Tattoo Artist</h4>
                    </div>

                    <div className="teamBox">
                        <img src={ require("../../Assets/teambox_04.jpg") } alt="member 4"/>
                        <h5>ALONZO WRIGHT</h5>
                        <h4>Tattoo Artist</h4>
                    </div>
                </div>
            </section>
        </>
    )
}
