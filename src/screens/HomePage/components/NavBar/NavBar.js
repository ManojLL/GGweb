import React from "react";
import './NavBar.css'
import logo from '../../../../images/GoofyGiraffes_logo.png'

function NavBar(){
    return(
        <nav className="navbar is-black p-4 is-fixed-top">
            <div className="container center-container">
                <div className="navbar-brand">
                    <a class="navbar-item" href="#">
                        <img src={logo} width="120" height="37"/>
                    </a>
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navContent">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu" id="navContent">
                    <div className="navbar-end">
                        <a className="navbar-item nav-text">
                            Goofyverse
                        </a>
                        <a className="navbar-item nav-text">
                            Roadmap
                        </a>
                        <a className="navbar-item nav-text">
                            Partners
                        </a>
                        <a className="navbar-item nav-text">
                            Rarity
                        </a>
                        <a className="navbar-item nav-text">
                            Team
                        </a>
                        <a className="navbar-item nav-text">
                            FAQ
                        </a>
                        <div className="navbar-item ">
                            <a className="button has-text-weight-bold nav-button">
                                Join our Discord
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;