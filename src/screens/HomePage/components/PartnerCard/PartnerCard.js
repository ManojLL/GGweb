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
                    <div className="columns is-mobile has-text-centered is-vcentered bg-white px-4 py-5">
                        <div className="column logo-padding">
                            <img src={GCF}/>
                        </div>
                        <div className="column logo-padding">
                            <img src={VOR} className="vor-padding"/>
                        </div>
                    </div> 
                </div>
                <div className="column is-half has-text-left">
                    <div className=" paragraph-right">
                    <p className="">If you wish to partner up with us to create a positive impact to the community, feel free to reach out.</p>
                    <a className="button is-warning has-text-weight-bold mt-4">
                        <span>Contact us</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerCard;