import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="container center-container">
            <div className="columns mt-6">
                <div className="column is-half">
                    <p className="title-res">Goofy Giraffes</p>
                    <p>Goofy Giraffes are a set of animals that mutated <br/>to have human-like traits while still maintaining <br/>the appearance of a Giraffe. </p>

                    <div className="has-text-left has-text-centered-mobile mt-6">
                        <a className="icon white link mr-6">
                            <li className="fab fa-twitter fa-2x"></li>
                        </a>
                        <a className="icon white link mr-6">
                            <li className="fab fa-instagram fa-2x"></li>
                        </a>
                        <a className="icon white link mr-6">
                            <li className="fab fa-discord fa-2x"></li>
                        </a>
                        <a className="icon white link">
                            <li className="fab fa-facebook fa-2x"></li>
                        </a>
                    </div>
                </div>
                <div className="column is-half has-text-right has-text-centered-mobile is-hidden-mobile">
                    <a><p className="subtitle link pb-4">Roadmap</p></a>
                    <a><p className="subtitle link py-4">Partners</p></a>
                    <a><p className="subtitle link py-4">Rarity</p></a>
                    <a><p className="subtitle link pt-4">Team</p></a>
                </div>
            </div>
            
            <hr/>

            <div className="columns my-2">
                <div className="column is-three-fifths has-text-centered-mobile">
                   © 2022 Goofy Giraffes | All Rights Reserved | Designed & Developed by VOR 
                </div>
                {/* <div className="column has-text-right has-text-centered-mobile">
                    Privacy Policy
                </div> */}
                <div className="column has-text-right has-text-centered-mobile">
                    Terms of Use
                </div>
                {/* <div className="column has-text-right has-text-centered-mobile">
                    Cookie Policy
                </div> */}
            </div>
        </div>
    )
}

export default Footer;