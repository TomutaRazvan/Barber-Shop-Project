import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import "../Scss_files/main.scss"

export function Footer() {
    return (
        <footer>

            <div className="footerSection">
                <div className="footerBox">
                    <h4>OUR LOCATION</h4>

                    <span>9779 Woodside Drive <br/>
                        Granger, IN 46530 </span>
                </div>

                <div className="footerBox">
                    <h4>Contact</h4>

                    <a href="mailto:webmaster@example.com">tomuta.razvan1@gmail.com</a> <br/>
                    <a href="tel:5551234567">0438 439 341</a>
                </div>
            </div>

            <div className="footerCopyright">
                <p>Copyright © 2021 Barbero. All rights reserved </p>
            </div>

        </footer>
    )
}