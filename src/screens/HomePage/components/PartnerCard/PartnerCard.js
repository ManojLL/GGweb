import React from "react";
import './PartnerCard.css'
import '../../index.css'
import GCF from '../../../../images/GCF-white.png'
import VOR from '../../../../images/VOR-white.png'

function PartnerCard(){
    return(
        <div className="container center-container pt-6">
            <div className="columns is-vcentered">
                <div className="column is-half">
                    <div className="columns is-mobile has-text-centered is-vcentered bg-white p-4">
                        <div className="column px-6">
                            <img src={GCF}/>
                        </div>
                        <div className="column pr-6">
                            <img src={VOR} className="px-5"/>
                        </div>
                    </div> 
                </div>
                <div className="column is-half p-6 has-text-left">
                    <p>If you wish to partner up with us to create a positive impact to the community, feel free to reach out.</p>
                    <a className="button is-warning has-text-weight-bold mt-6">
                        <span>Contact us</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PartnerCard;