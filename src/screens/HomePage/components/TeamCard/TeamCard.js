import React from "react";
import './TeamCard.css'
import '../../index.css'
import OGY from '../../../../images/ogy.png'

function TeamCard(props){
    return(
            <div className="teamcard">
                <div className="icon-card">
                    <figure class="image m-5">
                        <img class="is-rounded" src={props.image}/>
                    </figure>
                </div>
                <p className="subtitle">{props.title}</p>
                <p className="title">{props.name}</p>
                <p>{props.intro}</p>
                <div className="my-4">
                    <a href={props.discord}><span className="icon link m-2">
                        <li class="fab fa-discord fa-2x"></li>
                    </span></a>
                    <a href={props.twitter}><span className="icon link m-2">
                        <li class="fab fa-twitter fa-2x"></li>
                    </span></a>
                    <a href={props.linkedin}><span className="icon link m-2">
                        <li class="fab fa-linkedin fa-2x"></li>
                    </span></a>
                </div>
            </div>   
    )
}

export default TeamCard;