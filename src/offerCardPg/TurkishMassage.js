import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import Stuff2 from '../images/turkish-bath-with-massage-luxury-arab-spa-Best-massage-in-dubai.jpg';

import BgGround from '../images/background-web.jpg';

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
                        <Button primary="true" >
                            Book Now
                        </Button>
                    </TurkishBook>
                </div>

            </TurkishInfo>
            
            
        </Turkish>
    )
}

export default TurkishMassage
