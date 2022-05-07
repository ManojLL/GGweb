import React from "react";
import './TeamCard.css'
import '../../index.css'
import TeamCard from "./TeamCard";
import Fade from 'react-reveal/Fade';
import data from "./Data";

function TeamSection(){
    return(
        <Fade bottom cascade>
            {data.map((data)=>{
                return(
                <div className="column is-one-third">
                    <div className="container is-centered">
                    <TeamCard image={data.image} title={data.title} name={data.name} intro={data.intro} discord={data.discord} twitter={data.twitter} linkedin={data.linkedin}/>
                    </div>
                </div>
                )
            })}
        </Fade>
    )
}

export default TeamSection;