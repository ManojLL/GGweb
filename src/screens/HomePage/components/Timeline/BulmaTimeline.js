import React from "react";
import './Timeline.css';

function BulmaTimeline(){
    return(
        <div class="timeline">
            <header class="timeline-header">
                <span class="tag is-medium is-warning">Start</span>
            </header>
            <div class="timeline-item">
                <div class="timeline-marker is-warning is-icon">
                <i class="fa fa-check fa-lg"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone achived">Pre-Mint</p>
                <p>For us Art & Community comes first. We believe that if the underlying art (NFT) is not desirable enough then there’s 
                    no value to anything built around it. Further, we have been working behind the scenes to build an organic community 
                    and we are proud of where our community stands today. </p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker is-icon">
                <i class="fa"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone">Mint</p>
                <p>We have a lot of plans for Cabu Cats and at the core of it will lie the development of Intellectual Property. 
                    We plan to build everything from Metaverse ready avatars to toys. Cabu Cats have been conceptualised to cater 
                    to a larger spectrum of audience, with personal expression being at the forefront of our creative process.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker is-icon">
                <i class="fa"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone">10% Sold</p>
                <p>Announcing the First Generation Holders and start NFT giveaways on daily basis to all our holders for upto total of 10 NFTs.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker is-icon">
                <i class="fa"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone">25% Sold</p>
                <p>ETH and NFT Giveaway for the Top Holders. A Giveaway will take place where we will give away a Goofy 
                    within 0-100 rarity for one of the top holders in the collection!</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker is-icon">
                <i class="fa"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone">50% Sold</p>
                <p>Wearables and Merch Store. Exclusive wearables and merch will be given to everyone who holds an NFT from a specific launch.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker is-icon">
                <i class="fa"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone">75% Sold</p>
                <p>Wearables and Merch Store. Exclusive wearables and merch will be given to everyone who holds an NFT from a specific launch.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker is-icon">
                <i class="fa"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone">100% Sold</p>
                <p>Airdropping US$25,000 to the Top 10 Goofy Giraffe holders.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker is-icon">
                <i class="fa"></i>
                </div>
                <div class="timeline-content">
                <p className="milestone">Post-Mint</p>
                <p>Launching our own F2P Discord game for the members to grind and earn GGC (game based currency) which enables the users to purchase Merch from our store.  </p>
                </div>
            </div>
            <header class="timeline-header">
                <span class="tag is-medium">End</span>
            </header>
            </div>
    )
}

export default BulmaTimeline;