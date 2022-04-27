import React from "react";
import './Rarity.css';
import OGY from '../../../../images/ogy.png'

function RarityCard(){
    return(
        <div className="raritycard m-6">
                <div className="icon-card">
                    <figure class="image m-5">
                        <img class="is-rounded" src={OGY}/>
                    </figure>
                </div>
                <p className="subtitle">55% CHANCE DROP</p>
                <p className="title">WW</p>
                <p>The most common goofy in the First Gen. As you may know, once they were a furious army.</p>
        </div>
    )
}

export default RarityCard;