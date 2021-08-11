import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import Stuff2 from '../images/turkish-bath-with-massage-luxury-arab-spa-Best-massage-in-dubai.jpg';
import BgGround from '../images/background-web.jpg';
import { Link } from 'react-router-dom';
import Bbg from '../images/simple2.jpg';


const Turkish = styled.div`
    margin-top: 80px;


`;

const TurkishHeader = styled.div`
    background-image: url(${BgGround});
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: 71vh;
        object-fit: contain;
        /* filter: brightness(.5); */
   

    
    @media screen and (max-width : 768px){
        height: 60vh;
    }

    @media screen and (max-width : 420px){
        height: 40vh;
    }
    }
`;

const TurkishInfo = styled.div`
    margin: 50px auto;

    h4{
        color: #500500;
        margin-bottom: 20px;
    }
    p{
        font-size: 30px;
        font-weight: bold;
        text-shadow: 1px 1px 1px #000;

        span{
            font-size: 16px;
            color: #000;
           
        }
    }
`;

const TurkishDescrption = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin: 0 50px;

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr ;
    }
`;


const LeftSide = styled.div`
    width: 80%;
    margin: 20px auto;

 

    ul{
        list-style-type: square;
        

        li{
            margin: 10px auto;

           &::marker {
            color: #500500;
            } 
        }
        
    }
`;


const RightSide = styled.div`
    width: 90%;
    margin: 20px auto;
    ul{
        list-style-type: square;

        li{
            margin: 10px auto;
            line-height: 2;

           &::marker {
            color: #500500;
            } 
        }
        
    }
`;


const TurkishBook = styled.div`
    margin: 10px auto;
    height: 50px;
`;

const ArabicLinks = styled.div`
    width: 100%;
    margin: 40px 0 0;

    background-image: url(${Bbg});
    background-size: cover;
    background-attachment: fixed;
    /* filter: brightness(.5); */
`;

const ArabicWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
`;

const ArabicService = styled.div`
    text-align: start;
    width: 90%;
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
   
    
    
`;

const ArabicOffer = styled.div`
    text-align: start;
    width: 90%;
    margin: 0 auto;
`;

const Box = styled.div`
    margin-top: 1.5rem;

    h4{
        font-size: clamp(1,3rem, 4vw, 2rem);
        color: #500500;
        font-weight: bold;
    }

    img{
        width: 90px;

    }
`;

const ArabicLink = styled(Link)`
     text-decoration: none;
     color: rgba(0, 0, 0, 0.6);
     

     &:hover{
        color: rgba(0, 0, 0, 1);
        text-decoration: none;
     }

     li{
        font-weight: bold;
        margin-top: .7rem;
        margin-bottom: 1.7rem;
        margin: .7rem 3rem 1.7rem;
        list-style-type: square;
        &::marker {
            color: #500500;
            } 
    }
`;

const TurkishMassage = () => {
    return (
        <Turkish>
            <TurkishHeader>
                <img src={Stuff2} alt="" />
            </TurkishHeader>
            <TurkishInfo>
                <div>
                    <Tittle>
                    Turkish Bath & Body Massage
                    <p><span className="mr-2">75 Min</span>400 AED</p>
                    </Tittle>

                    <TurkishDescrption>
                        <LeftSide>
                            <h4>Descrption</h4>
                            <ul>
                                <li>
                                    LUXURY ARAB SPA provides the best massage in Dubai and relaxing Turkish Baths in Dubai The relaxing Turkish Baths experience will leave you refreshed and invigorated as the gentle moist heat. relaxes your                                
                                </li>
                                <li>
                                    A Turkish bath is a hot steam hydro-therapy treatment which has a miraculous effect on both the mental and physical state of everyone able to enjoy its benefits to the full. A Turkish bath is a perfect remedy for stress and the uncomfortable physiological reactions it can provoke thanks to the soothing and all-round relaxing effect the hot steam has on both body and mind.
                                </li>
                                <li>
                                    The Turkish bath is the perfect antidote to Luxury ARAB SPA for all those tensions that build up during the working day, relieving all kinds of stress. The luxurious feeling in a steam bath isn't just about breathing.
                                </li>
                            
                            
                           
                            </ul>
                        </LeftSide>

                        <RightSide>
                            <h4>
                                Benefits
                            </h4>

                            <ul>
                                <li>
                                Here are some good things your body can benefit from a Turkish bath:

                                </li>
                                <li>
                                    The first action of the heat is that it dilates the blood vessels which immediately improves the circulation, producing a positive tonic effect. The pores in the skin also dilate making possible deep cleansing of the skin and thorough purification, all of which translates into softer, more elastic skin with a great glow. Alongside cell renewal the steam has a soothing effect on skin problems, reducing acne and dermatitis.                                
                                </li>
                                <li>
                                    The beneficial properties of a Turkish bath can also help people suffering from localised aches and pains since better blood circulation carries more oxygen to damaged areas and inevitably brings about an immediate reduction in pain and more rapid healing. The heat helps to shift lingering cold symptoms decongesting the nose and chest and making it easier to get rid of excess mucous.
                                </li>
                                
                           
                            </ul>
                        </RightSide>
                    </TurkishDescrption>

                    <TurkishBook>
                        <Button to="/ContactPg" primary="true" >
                            Book Now
                        </Button>
                    </TurkishBook>
                </div>

            </TurkishInfo>

            <ArabicLinks>


                <ArabicWrapper>
                    <ArabicService>
                        <Box>
                            <h4 className="mb-4">
                            Special Services
                            </h4>
                           
                        </Box>
                        
                        <ArabicLink to="/Body">
                            <li>
                         Body Massage
                            </li>

                        </ArabicLink>
                        <ArabicLink to="/Face">
                            <li>
                            Face Mask
                            </li>

                        </ArabicLink>
                        <ArabicLink to="/FootMassage">
                            <li>
                            Foot Massage
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/FourHand">
                            <li>
                            Four Hand Massage
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/Head">
                            <li>
                            Head Massage
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/Moroccan">
                            <li>
                            Moroccan Bath
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/Padicure">
                            <li>
                            Manicure and pedicure
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/RoyalBath">
                            <li>
                            Royal Bath
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/Scurb">
                            <li>
                            Foot Scurb
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/Stone">
                            <li>
                            Hot Stone Massage
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/Turkish">
                            <li>
                            Turkish Bath
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/WaxingFull">
                            <li>
                            Waxing or Shaving Full Body
                            </li>
                        </ArabicLink>
                        <ArabicLink to="/WaxingOne">
                            <li>
                            Waxing or Shaving One Part
                            </li>
                        </ArabicLink>

                    
                    
                    </ArabicService>

                    <ArabicOffer>
                        <Box>
                            <h4 className="mb-4">
                            Special Offers
                            </h4>
                          
                        </Box>
                    <ArabicLink to="/FaceMassage">
                        <li>
                        Massage Manicure Pedicure Face Mask
                        </li>
                    </ArabicLink>
                    <ArabicLink to="/ManicureFaceFoot">
                        <li>
                        Manicure Pedicure Face Mask Foot Massage
                        </li>
                    </ArabicLink>
                    <ArabicLink to="/MorocArabic">
                        <li>
                         Moroccan Bath with Arabic Massage

                        </li>
                    </ArabicLink>
                    <ArabicLink to="/MorocoMassage">
                        <li>
                        2 HR Massage with Moroccan Bath
                        </li>
                    </ArabicLink>
                    <ArabicLink to="/Royal">
                        <li>
                        Royal Package
                        </li>
                    </ArabicLink>
                   
                    </ArabicOffer>

                </ArabicWrapper>
                
            </ArabicLinks>
            
            
        </Turkish>
    )
}

export default TurkishMassage
