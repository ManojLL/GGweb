import React from "react";
import './TeamCard.css'
import '../../index.css'

function TeamCard(props){
    return(
            <div className="teamcard">
                <div className="icon-card">
                    <figure className="image m-5">
                        <img className="is-rounded" src={props.image}/>
                    </figure>
                </div>
                <p className="subtitle">{props.title}</p>
                <p className="title-res">{props.name}</p>
                <p>{props.intro}</p>
                <div className="my-4">
                    <a href={props.discord}><span className="icon white link m-2">
                        <li className="fab fa-discord fa-lg"></li>
                    </span></a>
                    <a href={props.twitter}><span className="icon white link m-2">
                        <li className="fab fa-twitter fa-lg"></li>
                    </span></a>
                    <a href={props.linkedin}><span className="icon white link m-2">
                        <li className="fab fa-linkedin fa-lg"></li> {/* fa-2x */}
                    </span></a>
                </div>
            </div>   
    )
}

export default TeamCard;