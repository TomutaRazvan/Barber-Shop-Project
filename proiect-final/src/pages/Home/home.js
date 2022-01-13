import React from 'react';
import { HomeMain } from "../Home/Home_components/home_main.js";
import { HomeServices } from "./Home_components/home_services";
import { HomeForm } from "./Home_components/home_form"

export function Home() {

    return (
        
            <>
                <HomeMain />
                <HomeServices />
                <HomeForm />
            </>
        
    )
}
