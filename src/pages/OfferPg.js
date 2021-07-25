import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import MainImg from '../images/offer.jpg';

const OfferSection = styled.section`
    position: relative;
`;



const OfferHeader = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: center;
   background-image: url(${MainImg});
   background-attachment: fixed;
   background-size: contain;
   background-blend-mode: darken;
   background-position: 100% 80%;
   width : 100%;
   height: 80vh;
   text-align: center;
   

`;

// const OfferImg = styled.img`
//     width: 100%;
//     height: 80vh;
//     filter: brightness(.5);
// `;

const OfferMainText = styled.h2`
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: #fff;
    margin-bottom: 1rem;
    
`;

const OfferP = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;

`;



const OfferPg = () => {
    return (
        <OfferSection>
         
             {/* <OfferImg src={MainImg} alt="" /> */}
            <OfferHeader>
               
                <OfferMainText>
                    Limited Offers
                </OfferMainText>
                <OfferP>
                   Hurry,take advantage of our best offer ever
                </OfferP>
                <Button primary="true">
                    Book Now
                </Button>
            </OfferHeader>
            <Tittle>
                Our spicial Offers
            </Tittle>
            
        </OfferSection>
    )
}

export default OfferPg
