import React from "react";
import './PartnerCard.css'
import '../../index.css'
import GCF from '../../../../images/GCF-logo.png'

function PartnerCard(){
    return(
        <div className="">
            <div className="columns is-vcentered">
                <div className="column is-half p-6">
                    <img src={GCF}/>
                </div>
                <div className="column is-half p-6 has-text-left">
                    <p>United by a common goal, GCF is a family shared commitment to a sustainable 
                        future for all giraffe populations in the wild is governed by a Memorandum of Understanding.</p>
                    <div className="buttons mt-6">
                        <a className="button is-warning has-text-weight-bold p-4">
                        <span>Explore</span>
                        </a>
                        <a className="button is-white is-outlined ml-2 has-text-weight-bold p-4">
                        <span>Our Partnership</span>
                        </a>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerCard;