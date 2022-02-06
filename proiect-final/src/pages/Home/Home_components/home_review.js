import React, { useState } from 'react';
import "../Home_scss/home_main.scss";
import "../../../Scss_files/main.scss";
import "../Home_scss/home_review.scss";

export function HomeReview() {
    
    let [count, setCount] = useState(0);

    function plusCount(e) {
        setCount(count += 1)
        e.preventDefault();
    };

    function minusCount(e) {
        setCount(count -= 1)
        e.preventDefault();
    };

    let review = [
        <>
            <p>Great barber shop. Walked in and they took me immediately without an appointment. Quick haircut, great service and reasonable price.</p>            
            <h5>RON BLACK</h5>
            <span>32 years old</span>
        </>,

        <>
            <p>I enjoy The Barbers because the staff truly want to get to know you as a person and treat you like family.</p>            
            <h5>JOHN DOE</h5>
            <span>23 years old</span>
        </>,

        <>
            <p>I’ve never been in the same barbershop until I came to this place. They are consistent and very talented in what they do. Highly recommended.</p>            
            <h5>BEN JEREMY</h5>
            <span>51 years old</span>
        </>,
    ]


    if(count > review.length - 1) {
        count = 0
    } else if (count < 0) {
        count = review.length - 1
    }


    return(
        <section className='reviewSection'>
            <div className='reviewContainer'>
                <h3>WHAT OUR CLIENTS SAY</h3>

                <div className='reviewContent'>
                    {review[count]}
                </div>

                <div className='reviewButtons'>
                    <a href='#' onClick={ minusCount }>
                        <i class="fas fa-arrow-left"></i>
                    </a>

                    <a href='#' onClick={ plusCount }>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}