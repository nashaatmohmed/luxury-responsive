import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import Stuff1 from '../images/75-min-Moroccan-bath-with-arabic-massage-350-AEDluxury-arab-spa-best-massage-in-d.jpg';
import BgGround from '../images/background-web.jpg';

const Arabic = styled.div`
    margin-top: 80px;


`;

const ArabicHeader = styled.div`
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

const ArabicInfo = styled.div`
    margin: 50px auto;

    h4{
        color: #500500;
        margin-bottom: 20px;
    }
`;

const ArabicDescrption = styled.div`
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


const ArabicBook = styled.div`
    margin: 10px auto;
    height: 50px;
`;

const MorocArabic = () => {
    return (
        <Arabic>
            <ArabicHeader>
                <img src={Stuff1} alt="" />
            </ArabicHeader>
            <ArabicInfo>
                <div>
                    <Tittle>
                    75 Min Moroccan Bath with Arabic Massage
                        <p></p>
                    </Tittle>

                    <ArabicDescrption>
                        <LeftSide>
                            <h4>Descrption</h4>
                            <ul>
                                <li>
                                    Do you want to have an Arabic massage and Moroccan bath by a beautiful and professional Arab staff? You've got the right place, we have different types of body massages It's LUXURY ARAB SPA In BUR DUBAI
                                </li>
                                <li>
                                    Your massage should be as unique as you are. Our therapists will tailor each session to fit your exact needs. Therapists at the Luxury Arab SPA center may use different techniques and combine different types of massage to provide the best experience possible.
                                </li>
                                <li>
                                    The Moroccan bath with aromatic oils at Luxury BUR DUBAI Center is used for many different reasons, including relaxation, pain management and mood improvement. These are also some of the primary benefits of massage therapy. The addition of essential oils is thought to enhance these benefits.
                                </li>
                            
                            
                           
                            </ul>
                        </LeftSide>

                        <RightSide>
                            <h4>
                                Benefits
                            </h4>

                            <ul>
                                <li>
                                We have listed some of the amazing benefits that LUXURY ARAB SPA CENTER offers in Massage and Moroccan bath :
                                </li>
                                <li>
                                It is very relaxing.
                                </li>
                                <li>
                                It is a deep cleansing.
                                </li>
                                <li>
                                It helps in improving blood circulation.
                                </li>
                                <li>
                                It helps in exfoliating.
                                </li>
                                <li>
                                It hydrates your skin.
                                </li>
                                <li>
                                It also helps in relieving muscle tension
                                </li>
                                <li>
                                It also helps in anti-aging
                                </li>
                           
                            </ul>
                        </RightSide>
                    </ArabicDescrption>

                    <ArabicBook>
                        <Button primary="true" >
                            Book Now
                        </Button>
                    </ArabicBook>
                </div>

            </ArabicInfo>
            
            
        </Arabic>
    )
}

export default MorocArabic
