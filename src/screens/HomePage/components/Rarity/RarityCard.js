import React from "react";
import './Rarity.css';
import OGY from '../../../../images/ogy.png'

function RarityCard(props){
    return(
        <div className="raritycard m-6">
                <div className="icon-card">
                    <figure class="image m-5">
                        <img class="is-rounded" src={props.image}/>
                    </figure>
                </div>
                <p className="subtitle">{props.rarity}</p>
                <p className="title-res">{props.name}</p>
                <p>{props.info}</p>
        </div>
    )
}

export default RarityCard;