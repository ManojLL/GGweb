import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="container px-6">
            <div className="columns mt-6">
                <div className="column is-half">
                    <p className="title">Goofy Giraffes</p>
                    <p>Goofy Giraffes are a set of animals that mutated <br/>to have human-like traits while still maintaining <br/>the appearance of a Giraffe. </p>
                </div>
                <div className="column is-half has-text-right">
                    <div className="columns is-mobile">
                        <div className="column">
                            <p className="subtitle">Roadmap</p>
                        </div>
                        <div className="column">
                            <p className="subtitle">Partners</p>
                        </div>
                        <div className="column">
                            <p className="subtitle">Rarity</p>
                        </div>
                        <div className="column">
                            <p className="subtitle">Team</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6 has-text-left mt-6">
                <span className="icon mr-6">
                    <li class="fab fa-twitter fa-2x"></li>
                </span>
                <span className="icon mr-6">
                    <li class="fab fa-instagram fa-2x"></li>
                </span>
                <span className="icon mr-6">
                    <li class="fab fa-discord fa-2x"></li>
                </span>
                <span className="icon">
                    <li class="fab fa-facebook fa-2x"></li>
                </span>
            </div>
            <hr/>

            <div className="columns my-4">
                <div className="column is-two-thirds">
                   © 2022 Goofy Giraffes | All Rights Reserved | Designed &n Developed by VOR 
                </div>
                <div className="column has-text-right">
                    Privacy Policy
                </div>
                <div className="column has-text-right">
                    Terms of Use
                </div>
                <div className="column has-text-right">
                    Cookie Policy
                </div>
            </div>
        </div>
    )
}

export default Footer;