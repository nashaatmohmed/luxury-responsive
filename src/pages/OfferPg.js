import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import ImageOne from '../images/special-offer.jpg';
import Stuff1 from '../images/75-min-Moroccan-bath-with-arabic-massage-350-AEDluxury-arab-spa-best-massage-in-d.jpg';
import Stuff2 from '../images/turkish-bath-with-massage-luxury-arab-spa-Best-massage-in-dubai.jpg';
import Stuff3 from '../images/maincur-pedicure-face-mask-foot-massage-luxury-sp-arab--in-ubai-d.jpg';
import Stuff4 from '../images/Massage-Manicure-pedicure-face-mask--luxury-arab-spa-best-massage-in-dubai.jpg';
import Stuff5 from '../images/2-hr-massage-with-moproccan-bath-luxury-arab-spa-best-massage-in-dubai.jpg';
import Stuff6 from '../images/2hr Royal package.jpg';
import CardBg from '../images/back-ground-card.webp';
import HeadLeft from '../images/background-web.jpg';

const OfferSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const OfferHeader = styled.div`
  
    display: block;
    background-image: url(${HeadLeft});
    
    width: 100%;
    height: 100%;

   

`;

const OfferMainImg = styled.img`
    width: 100%;
    height: 71vh;
    object-fit: contain;
    /* filter: brightness(.5); */
    margin-top: 80px;

    
    @media screen and (max-width : 768px){
        height: 60vh;
    }

    @media screen and (max-width : 420px){
        height: 40vh;
    }

`;

const OfferWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    
    }

    @media screen and (max-width: 550px){
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
    max-height: 600px;
    height: 450px;
    max-width: 300px;
    padding: 20px;
    margin: 50px 10px;
    background-image: url(${CardBg});
    background-size: contain;
    background-repeat: no-repeat;


    @media screen and (max-width: 550px){
        margin: 50px -10px;
    }
    
    

    img{
        max-height: 340px;
        max-width: 250px;
        border-radius: 10px;
    }

    h4{
        width: 100%;
        height: 20%;
        font-size: 1.1rem;
        white-space: nowrap;
        margin: 20px 0 20px 0;
        color: #000;

        @media screen and (max-width : 768px){
           white-space: normal;
        }
    }
    P{
        margin: 50px auto;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 50px;
       
    }
 
   

`;



const OfferPg = () => {
    return (
        <OfferSection>
            <OfferHeader>
                <OfferMainImg src={ImageOne} alt="head-pic" />
            </OfferHeader>
            <Tittle>
            Our Special Offer
            <p></p>
            </Tittle>
            <OfferWrapper>
                <OfferCard>
                    <h4>75 Min Moroccan Bath<br/> with Arabic Massage</h4>
                    <img src={Stuff1} alt="" />
                    <p>Price : 400</p>
                    <div className="btn">
                    <Button  className="mr-3">Book Now</Button>
                    <Button primary="true">More Details</Button>
                    </div>                
                </OfferCard>
                <OfferCard>
                    <h4>75 Min Turkish Hammam<br/> Bath Massage</h4>
                    <img src={Stuff2} alt="" />
                    <p>Price : 400</p>
                    <div className="btn">
                    <Button  className="mr-3">Book Now</Button>
                    <Button primary="true">More Details</Button>
                    </div>                
                </OfferCard>
                <OfferCard>
                    <h4>Manicure Pedicure Face Mask<br/> Foot Massage</h4>
                    <img src={Stuff3} alt="" />
                    <p>Price : 400</p>
                    <div className="btn">
                    <Button  className="mr-3">Book Now</Button>

                    <Button primary="true">More Details</Button>
                    </div>                
                </OfferCard>
                <OfferCard>
                    <h4>Massage Manicure Pedicure<br/> Face Mask</h4>
                    <img src={Stuff4} alt="" />
                    <p>Price : 350</p>
                    <div className="btn">
                    <Button  className="mr-3">Book Now</Button>
                    <Button primary="true">More Details</Button>
                    </div>                
                </OfferCard>
                <OfferCard>
                    <h4>2 HR Massage with <br/>Moroccan Bath</h4>
                    <img src={Stuff5} alt="" />
                    <p>Price : 500</p>
                    <div className="btn">
                    <Button  className="mr-3">Book Now</Button>
                    <Button primary="true">More Details</Button>
                    </div>                
                </OfferCard>
                <OfferCard>
                    <h4>2 HR Royal<br/> Package</h4>
                    <img src={Stuff6} alt="" />
                    <p>Price : 600</p>

                    <div className="btn">
                    <Button  className="mr-3">Book Now</Button>
                    <Button primary="true">More Details</Button>
                    </div>

                </OfferCard>
            </OfferWrapper>
            
        </OfferSection>
    )
}

export default OfferPg;
