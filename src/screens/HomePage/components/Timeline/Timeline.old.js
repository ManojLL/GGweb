import React from "react";
import './Timeline.css';

import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
 } from 'vertical-timeline-component-react';
 
 const TimelineSection = () => {
	const customTheme = {
		yearColor: '#405b73',
		lineColor: '#d0cdc4',
		dotColor: '#262626',
		borderDotColor: '#d0cdc4',
		titleColor: '#ffffff',
		subtitleColor: '#bf9765',
		textColor: '#262626',
	};

	return (
		<Timeline theme={customTheme} dateFormat='full'>
			<Container>
				<YearContent startDate='2022'/>
				<BodyContent>
					<Section title='Pre-Mint'>
						<Description text='For us Art & Community comes first. We believe that if the underlying art (NFT) 
                  is not desirable enough then there’s no value to anything built around it. Further, we have been 
                  working behind the scenes to build an organic community and we are proud of where our community stands today.' />
					</Section>

					<Section title='Mint'>
						<Description text='We have a lot of plans for Cabu Cats and at the core of it will lie the development of Intellectual Property. 
                  We plan to build everything from Metaverse ready avatars to toys. Cabu Cats have been conceptualised to cater to 
                  a larger spectrum of audience, with personal expression being at the forefront of our creative process.' />
					</Section>

               <Section title='10% Sold'>
						<Description text='Announcing the First Generation Holders and start NFT giveaways on daily basis to all our holders for upto total of 10 NFTs.' />
					</Section>

               <Section title='25% Sold'>
						<Description text='ETH and NFT Giveaway for the Top Holders. A Giveaway will take place where we will give away a 
                  Goofy within 0-100 rarity for one of the top holders in the collection!' />
					</Section>

               <Section title='50% Sold'>
						<Description text='Wearables and Merch Store. Exclusive wearables and merch will be given to everyone who holds an NFT from a specific launch.' />
					</Section>

               <Section title='75% Sold'>
						<Description text='Wearables and Merch Store. Exclusive wearables and merch will be given to everyone who holds an NFT from a specific launch.' />
					</Section>

               <Section title='100% Sold'>
						<Description text='Airdropping US$25,000 to the Top 10 Goofy Giraffe holders.' />
					</Section>

               <Section title='Post-Mint'>
						<Description text='Launching our own F2P Discord game for the members to grind and earn GGC (game based currency) 
                  which enables the users to purchase Merch from our store.  ' />
					</Section>
				</BodyContent>
			</Container>
		</Timeline>
	);
};

export default TimelineSection;