import React , {useRef}from 'react';
import { HomeMain } from "../Home/Home_components/home_main.js";
import { HomeServices } from "./Home_components/home_services";
import { WhyUs } from "./Home_components/home_whyUs";
import { HomeForm } from "./Home_components/home_form";
import { HomeReview } from "./Home_components/home_review";


export function Home() {
    // here create a ref which will be the ref to HomeReview comp
    // and it will be used inside the HomeMain
    // now the will have the method we declareed inside the HomeReview comp to this parent componet
    const ref = useRef(null);

    console.log(ref)


    return (
        
            <>
                {/* we can pass the method we have added to the above ref as a prop */}
                {/* ref.current is the object that will have the method. you can read bout refs */}
                <HomeMain refToLastComp={ref}/>
                <HomeServices />
                <WhyUs />
                <HomeForm ref={ref}/>
                {/*// we need to update the HomeReview to bind the function to to the scrolling*/}
                <HomeReview />
            </>
        
    )
}
