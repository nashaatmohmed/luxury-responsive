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
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

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

const OfferCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    max-height: 600px;
    height: 400px;
    max-width: 300px;
    padding: 20px;
    margin: 50px 10px;
    background-image: url(${CardBg});
    background-size: cover;
    background-repeat: no-repeat;
    text-decoration: none;
    transition:  all 1s ease-in-out;
    transform-style: preserve-3d;

    &:hover{
        text-decoration: none;
    }

    &:active,
    :focus{
        transform: rotateY(180deg);
        text-decoration: none;
        }

    .front-box{
        backface-visibility: hidden;
        z-index: 2;
    }

    .back-box{
        transform: rotateY(180deg);
        z-index: 1;
        position: absolute;
        width: 100%;
        text-align: center;
        top: 0;
        bottom: 0;
        padding: 0 .5rem ;

        p{
            font-size: 15px;
            font-weight: 500;
            margin: 10px auto;
            line-height: 1.8;
        }
    }


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
        margin: 20px 0 0 0;
        color: #000;

        @media screen and (max-width : 768px){
           white-space: normal;
        }
    }
    P{
        margin: 30px auto;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 auto;
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
                <Slide left>
                    <OfferCard className="card">
                        <div className="front-box">
                            <h4>75 Min Moroccan Bath<br/> with Arabic Massage</h4>
                            <img src={Stuff1} alt="" />
                            <p>Price : 400</p>
                            <div className="btn">
                                <Button  className="mb-5">Book Now</Button>
                            
                            </div>
                        </div> 
                        <div className="back-box">
                            <p>
                            Do you want to have an Arabic massage and Moroccan bath by a beautiful and professional Arab staff? You've got the right place, we have different types of body massages It's LUXURY ARAB SPA In BUR DUBAI
                            Your massage should be as unique as you are. Our therapists will tailor each session to fit your exact needs. Therapists at the Luxury Arab SPA center may use different techniques and combine different types of massage to provide the best experience possible.
                            
                            </p>
                        </div>               
                    </OfferCard>
                </Slide>
                <Fade top>
                    <OfferCard className="card">
                        <div className="front-box">
                            <h4>75 Min Turkish Hammam<br/> Bath Massage</h4>
                            <img src={Stuff2} alt="" />
                            <p>Price : 400</p>
                            <div className="btn">
                            <Button  className="mb-5">Book Now</Button>
                            
                            </div>   
                        </div>
                        <div className="back-box">
                            <p>
                            LUXURY ARAB SPA provides the best massage in Dubai and relaxing Turkish Baths in Dubai The relaxing Turkish Baths experience will leave you refreshed and invigorated as the gentle moist heat. relaxes your
                            A Turkish bath is a hot steam hydro-therapy treatment which has a miraculous effect on both the mental and physical state of everyone able to enjoy its benefits to the full.

                            
                            </p>
                        </div>                 
                    </OfferCard>
                </Fade>
                <Slide right>
                    <OfferCard className="card">
                        <div className="front-box">
                            <h4>Manicure Pedicure Face Mask<br/> Foot Massage</h4>
                            <img src={Stuff3} alt="" />
                            <p>Price : 400</p>
                            <div className="btn">
                            <Button  className="mb-5">Book Now</Button>

                            </div>
                        </div>
                        <div className="back-box">
                            <p>
                            Manicure and Pedicure by Luxury Spa is an amazing and magical spa that you can try, as the Luxury Spa is one of the most recommended spa in Dubai by thousands of guests not only from the United Arab Emirates but also from all over the world. During a manicure and pedicure session at the best massage center in Dubai (Luxury Arab Spa Bur Dubai) you will explore many new manicure and pedicure steps, starting with soaking sea salt, cutting toenails, pushing rough spots on your foot file, exfoliating.
                            
                            </p>
                        </div>                
                    </OfferCard>
                </Slide>
                <Slide left>
                    <OfferCard className="card">
                        <div className="front-box">
                            <h4>Massage Manicure Pedicure<br/> Face Mask</h4>
                            <img src={Stuff4} alt="" />
                            <p>Price : 350</p>
                            <div className="btn">
                            <Button  className="mb-5">Book Now</Button>
                            </div>
                        </div>
                        <div className="back-box">
                            <p>
                            Special Offer From ''Luxury ARAB SPA'' You Can Get Full Body Massage, Manicure, Pedicure, And Face Mask
                            Our trained therapists are from Morocco, Tunisia, Egypt, Algeria, China And Thailand!
                            
                            </p>
                        </div>                
                    </OfferCard>
                </Slide>
                <Fade bottom>
                    <OfferCard className="card">
                        <div className="front-box">
                            <h4>2 HR Massage with <br/>Moroccan Bath</h4>
                            <img src={Stuff5} alt="" />
                            <p>Price : 500</p>
                            <div className="btn">
                            <Button  className="mb-5">Book Now</Button>
                            </div>
                        </div>
                        <div className="back-box">
                            <p>
                            In this amazing package Moroccan Bath & Massage from Dubai Spa center "LUXURY ARAB SPA", you will get many benefits combined more than you can imagine, firstly the Morocco Massages benefits and the deep effects of Moroccan hammer Dubai, let’s know more Enjoy everything during your Moroccan hammer Dubai and massage, especially the Black Moroccan scrub, and the most popular effective Moroccan loaf, wet and warm, amazing warm shower and many other surprises you will explore with us.
                            
                            </p>
                        </div>                
                    </OfferCard>
                </Fade>
                <Slide right>
                    <OfferCard className="card">
                        <div className="front-box">
                            <h4>2 HR Royal<br/> Package</h4>
                            <img src={Stuff6} alt="" />
                            <p>Price : 600</p>

                            <div className="btn">
                            <Button  className="mb-5">Book Now</Button>
                            </div>
                        </div>
                        <div className="back-box">
                            <p>
                            In this amazing package Moroccan Bath & Massage from Dubai Spa center "LUXURY ARAB SPA", you will get many benefits combined more than you can imagine, firstly the Morocco Massages benefits and the deep effects of Moroccan hammer Dubai, let’s know more Enjoy everything during your Moroccan hammer Dubai and massage, especially the Black Moroccan scrub, and the most popular effective Moroccan loaf, wet and warm, amazing warm shower and many other surprises you will explore with us
                            
                            </p>
                        </div>
                    </OfferCard>
                </Slide>
            </OfferWrapper>
            
        </OfferSection>
    )
}

export default OfferPg;
