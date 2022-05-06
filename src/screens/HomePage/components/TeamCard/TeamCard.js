import React from "react";
import './TeamCard.css'
import '../../index.css'
import OGY from '../../../../images/ogy.png'

function TeamCard(){
    return(
        <div className="teamcard">
                <div className="icon-card">
                    <figure class="image m-5">
                        <img class="is-rounded" src={OGY}/>
                    </figure>
                </div>
                <p className="subtitle">FOUNDER</p>
                <p className="title">NMZ</p>
                <p>The Goofiest of all Giraffes. It is he who founded the Goofy Giraffes project.</p>
                <div className="my-4">
                    <a><span className="icon link m-2">
                        <li class="fab fa-discord fa-2x"></li>
                    </span></a>
                    <a><span className="icon link m-2">
                        <li class="fab fa-twitter fa-2x"></li>
                    </span></a>
                    <a><span className="icon link m-2">
                        <li class="fab fa-linkedin fa-2x"></li>
                    </span></a>
                </div>
        </div>
    )
}

export default TeamCard;