import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="container center-container">
            <div className="columns mt-6">
                <div className="column is-half">
                    <p className="title">Goofy Giraffes</p>
                    <p>Goofy Giraffes are a set of animals that mutated <br/>to have human-like traits while still maintaining <br/>the appearance of a Giraffe. </p>
                </div>
                <div className="column is-half has-text-right has-text-centered-mobile">
                    <a><p className="subtitle link py-2">Roadmap</p></a>
                    <a><p className="subtitle link py-2">Partners</p></a>
                    <a><p className="subtitle link py-2">Rarity</p></a>
                    <a><p className="subtitle link py-2">Team</p></a>
                </div>
            </div>
            <div className="mb-6 has-text-left has-text-centered-mobile mt-6">
                <a className="icon link mr-6">
                    <li class="fab fa-twitter fa-2x"></li>
                </a>
                <a className="icon link mr-6">
                    <li class="fab fa-instagram fa-2x"></li>
                </a>
                <a className="icon link mr-6">
                    <li class="fab fa-discord fa-2x"></li>
                </a>
                <a className="icon link">
                    <li class="fab fa-facebook fa-2x"></li>
                </a>
            </div>
            <hr/>

            <div className="columns my-4">
                <div className="column is-two-thirds has-text-centered-mobile">
                   © 2022 Goofy Giraffes | All Rights Reserved | Designed &n Developed by VOR 
                </div>
                <div className="column has-text-right has-text-centered-mobile">
                    Privacy Policy
                </div>
                <div className="column has-text-right has-text-centered-mobile">
                    Terms of Use
                </div>
                <div className="column has-text-right has-text-centered-mobile">
                    Cookie Policy
                </div>
            </div>
        </div>
    )
}

export default Footer;