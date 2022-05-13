import React, { useEffect, useState } from "react";
import './FAQ.css';
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "what's the total supply of giraffes?",
            content: `10,000`,
        },
        {
            title: "what's the minting price of a giraffe?",
            content: `The mint price for the collection is TBA. Initial collection mint price will be lower. It may change along the way.`,
        },
        {
            title: "what blockchain does the project live on?",
            content:`Goofieverse (wait whaaat?) will live on the Ethereum Blockchain.`,
        },
        {
            title: "is there a white-list?",
            content: `Yes, of course. You can earn your own White-List spot by various kinds of contests. We will be hand picking most of them. 
            However, if it feels like you're spamming, you might end up being muted or kicked from the server.`,
        },
        {
            title: "how many can i mint?",
            content: `Max per person is 2 Giraffes.`,
        },
    ],
};

const styles = {
    bgColor: 'transparet',
    titleTextColor: "blue",
    rowTitleColor: "white",
    rowContentColor: '#FFCC54',
    rowContentPaddingBottom: '20px',
    arrowColor: "white",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

export default function FAQnew() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}