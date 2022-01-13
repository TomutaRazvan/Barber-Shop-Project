import React, { useState } from "react";
import "./whyUs.scss";
import { Menu } from "../../Header_Footer/menu";

export function WhyUs() {
    const [newClass, setNewClass] = useState("whyUsSection");

    return (
        <section className={newClass}>

            <Menu />

            <div className='whyUsFlex'>
                <div className='whyUsTitlu'>
                    <h4>WHY US</h4>
                
                    <h1>MODERN & PROFESSIONAL BARBER STUDIO</h1>
                
                    <span>Specialized in classic cuts inspired by the 1920s to 1950s.Barbero was born out of passion. The passion of being a barber but doing it the right way.</span>
                </div>
                
                <div className='whyUsContent'>
                    <div className='whyUsBox'>
                        <h3>FREE COFFEE</h3>
                
                        <span>You will always be offered a cup of coffee or a glass of soda</span>
                    </div>
                
                    <div className='whyUsBox'>
                        <h3>SERVICE GUARANTEE</h3>
                
                        <span>At Barbero you’re not just get-ting a service, you’re getting an experience. </span>
                    </div>
                
                    <div className='whyUsBox'>
                        <h3>HOT TOWEL FINISH</h3>
                
                        <span>A refreshing beverage of your choice, and a hot towel finish – you’ll never want to leave </span>
                    </div>
                
                    <div className='whyUsBox'>
                        <h3>BEST EXPERIENCES</h3>
                
                        <span>Three signature treatments that will ensure that a gentleman leaves our barbershop perfectly  </span>
                    </div>
                </div>
            </div>

        </section>
    )
}
