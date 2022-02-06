import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import "../Scss_files/main.scss"

export function Footer() {
    return (
        <footer>

            <div className="footerSection">
                <div className="footerLeft">
                    <h4>CONTACT US</h4>

                    <a href="mailto:tomuta.razvan1@gmail.com">tomuta.razvan1@gmail.com</a> <br/>
                    <a href="tel:+40753892923">+40 753 892 923</a>
                </div>

                <div className="footerRight">
                    <h4>VISIT US</h4>

                    <span>9779 Woodside Drive <br/>
                        Granger, IN 46530 </span>
                </div>

            </div>

            <div className="footerBottom">
                <p>Copyright © 2021 Barbero. All rights reserved </p>

                <div className="socialIcons">
                    <a href="/">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a href="/">
                        <i class="fab fa-facebook-square"></i>
                    </a>

                    <a href="/">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>

        </footer>
    )
}