import React, { useState } from "react";
import "../Home_scss/home_form.scss"
import "../Home_scss/home_main.scss";


export function HomeForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] =useState("");
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState("false");

    function handleName(e) {
        setName(e.target.value)
    }

    function handlePhone(e) {
        setPhone(e.target.value)
    }
    
    function handleMsg(e) {
        setMsg(e.target.value)
    }

    function handleSubmit(e) {
        // setShow(!show);
        e.preventDefault();
    }

    return (
        <section className='form' id="formScroll">

            <h2 id="scroll">GET IN TOUCH</h2>

            <form onSubmit={handleSubmit} /*className={`${show ? "block" : "hide"}`}*/>

                <input type="text" value={name} onChange={handleName} placeholder="Your Name"/>

                <input type="number" value={phone} onChange={handlePhone} placeholder="Phone Number"/>

                <textarea value={msg} onChange={handleMsg} placeholder="Insert your message"/>

                <input type="submit" value="Submit"/>

            </form>


            <div className={`${show ? "hide" : "message"}`}>
                <p>YOUR MESSAGE HAS BEEN SENT!</p>
            </div>

        </section>
    )
}
