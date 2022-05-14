import React from "react";
import './Rarity.css';
import OGY from '../../../../images/ogy.png'

function RarityCard(props){
    return(
        <div className="raritycard m-6">
                <div className="icon-card">
                    <figure className="image m-5">
                        <img className="is-rounded" src={props.image}/>
                    </figure>
                </div>
                <p className="subtitle">{props.rarity}</p>
                <p className="title-res mobile-special">{props.name}</p>
                <p>{props.info}</p>
        </div>
    )
}

export default RarityCard;