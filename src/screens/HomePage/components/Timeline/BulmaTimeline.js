import React from "react";
import './Timeline.css';

function BulmaTimeline(){
    return(
        <div className="timeline">
            <header className="timeline-header">
                <span className="tag is-medium is-warning">Start</span>
            </header>
            <div className="timeline-item is-achived">
                <div className="timeline-marker is-warning is-icon">
                <i className="fa fa-check fa-lg"></i>
                </div>
                <div className="timeline-content">
                <p className="milestone achived">Pre-Mint</p>
                <p>The Community is #1 for us here at Goofy Giraffes. To satisfy our community, we understand that the artwork itself is not sufficient. 
                    We are working towards expanding our community organically and we are proud of where we are at today. </p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker is-icon">
                <i className="fa"></i>
                </div>
                <div className="timeline-content">
                <p className="milestone">Mint</p>
                <p>Building a community of like-minded individuals is what ‘Goofy Giraffes’ is all about. Having people who are equally interested in 
                    NFTs as well as TV Shows is what we strive to achieve. The core of the project revolves around the development of our artwork 
                    that has traits of the characters you watch and adore.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker is-icon">
                <i className="fa"></i>
                </div>
                <div className="timeline-content">
                <p className="milestone">25% Sold</p>
                <p>Announcing the First Generation Holders and start NFT giveaways on daily basis to all our holders for upto total of 10 NFTs.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker is-icon">
                <i className="fa"></i>
                </div>
                <div className="timeline-content">
                <p className="milestone">50% Sold</p>
                <p>Providing our community with a steady flow of much anticipated Whitelists in other projects, available to our holders via our website. 
                    (Announcement to be made soon)</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker is-icon">
                <i className="fa"></i>
                </div>
                <div className="timeline-content">
                <p className="milestone">75% Sold</p>
                <p>Wearables and Merch Store. Exclusive wearables and merch will be given to everyone who holds an NFT from a specific launch.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker is-icon">
                <i className="fa"></i>
                </div>
                <div className="timeline-content">
                <p className="milestone">100% Sold</p>
                <p>Why reinvent the wheel when perfectly good ones exist already? We will partner with a top tier utility focused project to provide our 
                    holders access to a full suite of alpha tools; ranging from sniping tools, to private nodes, to top tier analytics.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker is-icon">
                <i className="fa"></i>
                </div>
                <div className="timeline-content">
                <p className="milestone">Post-Mint</p>
                <p>Stake your NFTs of selected projects with us to obtain the liquidity you need for a quick flip.
                    The list of qualifying projects will be announced, and updated weekly. Holders of Goofy Giraffes will be able to stake 
                    their NFTs to obtain 50% of the current floor price in ETH.</p><br/>

                <p>i.e.: If you own an NFT of a project which is eligible for staking, and the floor price of that project is 
                    currently at 0.5 ETH, you will be eligible to obtain up to 0.25 ETH, to be paid within a fixed period for 0% interest.</p>
                </div>
            </div>
            <header className="timeline-header">
                <span className="tag is-medium">End</span>
            </header>
            </div>
    )
}

export default BulmaTimeline;