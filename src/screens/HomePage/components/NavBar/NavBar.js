import React from "react";
import './NavBar.css'
import logo from '../../../../images/GoofyGiraffes_logo.png'

function NavBar(){
    return(
        <nav className="navbar is-black p-4 is-fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
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
                        <a className="navbar-item">
                            Goofyverse
                        </a>
                        <a className="navbar-item">
                            Roadmap
                        </a>
                        <a className="navbar-item">
                            Partners
                        </a>
                        <a className="navbar-item">
                            Rarity
                        </a>
                        <a className="navbar-item">
                            Team
                        </a>
                        <a className="navbar-item">
                            FAQ
                        </a>
                        <div className="navbar-item">
                            <a className="button has-text-weight-bold">
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