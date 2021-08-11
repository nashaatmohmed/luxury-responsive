import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import Stuff5 from '../images/2-hr-massage-with-moproccan-bath-luxury-arab-spa-best-massage-in-dubai.jpg';
import BgGround from '../images/background-web.jpg';
import { Link } from 'react-router-dom';
import Bbg from '../images/simple2.jpg';


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

const MorocArabic = () => {
    return (
        <Arabic>
            <ArabicHeader>
                <img src={Stuff5} alt="" />
            </ArabicHeader>
            <ArabicInfo>
                <div>
                    <Tittle>
                     Massage with Moroccan Bath                    
                     <p><span className="mr-2">2 hr</span>500 AED</p>
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
                        <Button to="/ContactPg" primary="true" >
                            Book Now
                        </Button>
                    </ArabicBook>
                </div>

            </ArabicInfo>

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
   
    <ArabicLink to="/Royal">
        <li>
        Royal Package
        </li>
    </ArabicLink>
    <ArabicLink  to="/TurkishMassage">
        <li className="mb-5">
        Turkish Hammam Bath Massage
        </li>
    </ArabicLink>
    </ArabicOffer>

</ArabicWrapper>

</ArabicLinks>
            
            
        </Arabic>
    )
}

export default MorocArabic
