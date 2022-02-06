import React, { useState } from "react";
import "./Services.scss";
import { Menu } from "../../Header_Footer/menu";

export function Services() {

    return (
        <>
            <main className="servicesMain">
            
                <div>
                    <Menu />
            
                    <h1>SERVICES</h1>
                </div>
            </main>
            
            <section className="serviceSection">
                <h2>CUTS</h2>
                
                <div className="serviceContainer">
                    <div className="serviceBox">
                        <img src={ require("../../Assets/service-pic1.jpg") } alt="cut 1"/>

                        <h5>CLASSIC CUT</h5>
                        <h5>$15</h5>

                        <span>Style cut, hairline tidy up & hot towel finish.</span>
                    </div>
    
                    <div className="serviceBox">
                        <img src={ require("../../Assets/service-pic2.jpg") } alt="cut 1"/>

                        <h5>BUZZ CUT</h5>
                        <h5>$17</h5>

                        <span>All over clipper cut, hairline tidy up & hot towel finish. </span>
                    </div>

                    <div className="serviceBox">
                        <img src={ require("../../Assets/service-pic3.jpg") } alt="cut 1"/>

                        <h5>TO BE A MAN</h5>
                        <h5>$21</h5>

                        <span>Kids style cut, hairline tidy up & hot towel finish.</span>
                    </div>
                </div>

                {/* CONTAINER 2 */}

                <h2>SHAVES</h2>

                <div className="serviceContainer">
                    <div className="serviceBox">
                        <img src={ require("../../Assets/service-pic5.jpg") } alt="cut 1"/>

                        <h5>CLASSIC SHAVE</h5>
                        <h5>$15</h5>

                        <span>Styled to your needs plus a trademark barber finish.</span>
                    </div>

                    <div className="serviceBox">
                        <img src={ require("../../Assets/service-pic6.jpg") } alt="cut 1"/>

                        <h5>DELUXE SHAVE</h5>
                        <h5>$17</h5>

                        <span>All over clipper cut, hairline tidy up & hot towel finish.</span>
                    </div>

                    <div className="serviceBox boxBackground">

                        <h5>SHINER SHAVES</h5>
                        <h5>$21</h5>

                        <span>Styled to your needs plus a trademark barber finish.</span>
                    </div>
                </div>

                {/* CONTAINER 3 */}

                <h2>BEARD STYLING</h2>

                <div className="serviceContainer">
                    <div className="serviceBox boxBackground2">
                        <h5>MODERN SHAVE</h5>
                        <h5>$20</h5>

                        <span>Styled to your needs plus a trademark barber finish.</span>
                    </div>

                    <div className="serviceBox">
                        <img src={ require("../../Assets/service-pic10.jpg") } alt="cut 1"/>

                        <h5>BROW WAX</h5>
                        <h5>$15</h5>

                        <span>Styled to your needs plus a trademark barber finish.</span>
                    </div>

                    <div className="serviceBox">
                        <img src={ require("../../Assets/service-pic9.jpg") } alt="cut 1"/>

                        <h5>COLOUER CAMO</h5>
                        <h5>$21</h5>

                        <span>Kids style cut, hairline tidy up & hot towel finish</span>
                    </div>

                </div>
            </section>
            
        </>
    )
}
