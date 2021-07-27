import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import ImageOne from '../images/slides.webp';
import Stuff1 from '../images/75-min-Moroccan-bath-with-arabic-massage-350-AEDluxury-arab-spa-best-massage-in-d.jpg';
import Stuff2 from '../images/turkish-bath-with-massage-luxury-arab-spa-Best-massage-in-dubai.jpg';
import Stuff3 from '../images/maincur-pedicure-face-mask-foot-massage-luxury-sp-arab--in-ubai-d.jpg';
import Stuff4 from '../images/Massage-Manicure-pedicure-face-mask--luxury-arab-spa-best-massage-in-dubai.jpg';
import Stuff5 from '../images/2-hr-massage-with-moproccan-bath-luxury-arab-spa-best-massage-in-dubai.jpg';
import Stuff6 from '../images/2hr Royal package.jpg';
import CardBg from '../images/back-ground-card.webp';

const OfferSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const OfferHeader = styled.div`
  
    display: block;

`;

const OfferMainImg = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: fill;
    filter: brightness(.7);

`;

const OfferWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

const OfferCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    max-height: 440px;
    max-width: 450px;
    padding: 20px;
    margin: 50px 0;
    background-image: url(${CardBg});
    background-size: contain;
    
    

    img{
        max-height: 340px;
        max-width: 350px;
        border-radius: 10px;
    }

    h4{
        width: 100%;
        height: 20%;
        font-size: 1.1rem;
        white-space: nowrap;
        margin: 20px 0 20px 0;
        color: #000;
    }
    P{
        margin: 20px auto;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
 
   

`;



const OfferPg = () => {
    return (
        <OfferSection>
            <OfferHeader>
                <OfferMainImg src={ImageOne} alt="" />
            </OfferHeader>
            <Tittle>
            Our special offer
            </Tittle>
            <OfferWrapper>
                <OfferCard>
                    <h4>75 Min Moroccan Bath with Arabic Massage</h4>
                    <img src={Stuff1} alt="" />
                    <p>Price : 400</p>
                    <Button primary="true">see more</Button>
                </OfferCard>
                <OfferCard>
                    <h4>75 Min Turkish Hammam Bath Massage</h4>
                    <img src={Stuff2} alt="" />
                    <p>Price : 400</p>
                    <Button primary="true">see more</Button>
                </OfferCard>
                <OfferCard>
                    <h4>Manicure Pedicure Face Mask Foot Massage</h4>
                    <img src={Stuff3} alt="" />
                    <p>Price : 400</p>
                    <Button primary="true">see more</Button>
                </OfferCard>
                <OfferCard>
                    <h4>Massage Manicure Pedicure Face Mask</h4>
                    <img src={Stuff4} alt="" />
                    <p>Price : 350</p>
                    <Button primary="true">see more</Button>
                </OfferCard>
                <OfferCard>
                    <h4>2 HR Massage with Moroccan Bath</h4>
                    <img src={Stuff5} alt="" />
                    <p>Price : 500</p>
                    <Button primary="true">see more</Button>
                </OfferCard>
                <OfferCard>
                    <h4>2 HR Royal Package</h4>
                    <img src={Stuff6} alt="" />
                    <p>Price : 600</p>
                    <Button primary="true">see more</Button>
                </OfferCard>
            </OfferWrapper>
            
        </OfferSection>
    )
}

export default OfferPg;
