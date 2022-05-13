import React from "react";
import './NavBar.css'
import logo from '../../../../images/GoofyGiraffes_logo.png'

function NavBar(){
    return(
        <nav className="navbar is-black p-4" role="navigation" aria-label="main navigation">
            <div className="container center-container">
                <div className="navbar-brand">
                    <a class="navbar-item" href="#">
                        <img src={logo} width="120" height="37"/>
                    </a>
                    <a role="button" class="navbar-burger" id="nav-toggle" aria-label="menu" aria-expanded="false" data-target="nav-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu" id="nav-menu">
                    <div className="navbar-end">
                        <a className="navbar-item nav-text" href="/#goofyverse">
                            Goofiverse
                        </a>
                        <a className="navbar-item nav-text" href="/#roadmap">
                            Roadmap
                        </a>
                        <a className="navbar-item nav-text" href="/#partners">
                            Partners
                        </a>
                        <a className="navbar-item nav-text" href="/#rarity">
                            Rarity
                        </a>
                        <a className="navbar-item nav-text" href="/#team">
                            Team
                        </a>
                        <a className="navbar-item nav-text" href="/#faq">
                            FAQ
                        </a>
                        <div className="navbar-item ">
                            <a className="button has-text-weight-bold nav-button px-5">
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