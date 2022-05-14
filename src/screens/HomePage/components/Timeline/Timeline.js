import React from "react";
import "./Timeline.css";

const TimelineSection = () => {
  return (
    <ul className="timeline-list">
      <li className="timeline-block-active">
        <div className="timeline-content">
          <h3 className="title is-4 timeline-heading">Pre-Mint</h3>
          <p className="timeline-description">
            The Community is #1 for us here at Goofy Giraffes. To satisfy our
            community, we understand that the artwork itself is not sufficient.
            We are working towards expanding our community organically and we
            are proud of where we are at today.
          </p>
        </div>
      </li>
      <li className="timeline-block-not-active">
        <div className="content">
          <h3 className="title is-4 timeline-heading">Mint</h3>
          <p className="timeline-description">
            Building a community of like-minded individuals is what ‘Goofy
            Giraffes’ is all about. Having people who are equally interested in
            NFTs as well as TV Shows is what we strive to achieve. The core of
            the project revolves around the development of our artwork that has
            traits of the characters you watch and adore.
          </p>
        </div>
      </li>
      <li className="timeline-block-not-active">
        <div className="content">
          <h3 className="title is-4 timeline-heading">25% Sold</h3>
          <p className="timeline-description">
            Announcing the First Generation Holders and start NFT giveaways on
            daily basis to all our holders for upto total of 10 NFTs.
          </p>
        </div>
      </li>
      <li className="timeline-block-not-active">
        <div className="content">
          <h3 className="title is-4 timeline-heading">50% Sold</h3>
          <p className="timeline-description">
            Providing our community with a steady flow of much anticipated
            Whitelists in other projects, available to our holders via our
            website. (Announcement to be made soon)
          </p>
        </div>
      </li>
      <li className="timeline-block-not-active">
        <div className="content">
          <h3 className="title is-4 timeline-heading">75% Sold</h3>
          <p className="timeline-description">
            Wearables and Merch Store. Exclusive wearables and merch will be
            given to everyone who holds an NFT from a specific launch.
          </p>
        </div>
      </li>
      <li className="timeline-block-not-active">
        <div className="content">
          <h3 className="title is-4 timeline-heading">100% Sold</h3>
          <p className="timeline-description">
            Why reinvent the wheel when perfectly good ones exist already? We
            will partner with a top tier utility focused project to provide our
            holders access to a full suite of alpha tools; ranging from sniping
            tools, to private nodes, to top tier analytics.
          </p>
        </div>
      </li>
      <li className="timeline-block-not-active">
        <div className="content">
          <h3 className="title is-4 timeline-heading">Post-Mint</h3>
          <p className="timeline-description">
            Stake your NFTs of selected projects with us to obtain the liquidity
            you need for a quick flip. The list of qualifying projects will be
            announced, and updated weekly. Holders of Goofy Giraffes will be
            able to stake their NFTs to obtain 50% of the current floor price in
            ETH.
            <br /> <br />
            <span>
              i.e.: If you own an NFT of a project which is eligible for
              staking, and the floor price of that project is currently at 0.5
              ETH, you will be eligible to obtain up to 0.25 ETH, to be paid
              within a fixed period for 0% interest.
            </span>
          </p>
        </div>
      </li>
    </ul>
  );
};

export default TimelineSection;
