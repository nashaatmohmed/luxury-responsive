import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import Stuff3 from '../images/maincur-pedicure-face-mask-foot-massage-luxury-sp-arab--in-ubai-d.jpg';
import BgGround from '../images/background-web.jpg';
import { Link } from 'react-router-dom';
import Bbg from '../images/simple2.jpg';

const Manicure = styled.div`
    margin-top: 80px;


`;

const ManicureHeader = styled.div`
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

const ManicureInfo = styled.div`
    margin: 50px auto;

    .tittle{
        font-size: clamp(1.7rem,5vw,2.5rem);
        width: 90%;
        margin: 0 auto;
    }

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

const ManicureDescrption = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin: 0 50px;

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr ;
        grid-gap: 0;
    }
`;


const LeftSide = styled.div`
    width: 90%;
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


const ManicureBook = styled.div`
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

const ManicureFaceFoot = () => {
    return (
        <Manicure>
            <ManicureHeader>
                <img src={Stuff3} alt="" />
            </ManicureHeader>
            <ManicureInfo>
                <div>
                    <Tittle className="tittle">
                    Maincur Pedicure and Face Mask and Foot Massage
                    <p>400 AED</p>
                    </Tittle>

                    <ManicureDescrption>
                        <LeftSide>
                            <h4>Descrption</h4>
                            <ul>
                                <li>
                                    Are You Looking For a Personal Care, Manicure, Pedicure, Face Mask, And Foot Massage? You Got Right Place. we have Professional Staff, Who are Ready to Make You Better feeling than Before with Freshness.                                
                                </li>
                                <li>
                                    Our trained therapists are from Morocco, Tunisia, Egypt, Algeria, China And Thailand!
                                </li>
                                <li>
                                    Manicure and Pedicure by Luxury Spa is an amazing and magical spa that you can try, as the Luxury Spa is one of the most recommended spa in Dubai by thousands of guests not only from the United Arab Emirates but also from all over the world. During a manicure and pedicure session at the best massage center in Dubai (Luxury Arab Spa Bur Dubai) you will explore many new manicure and pedicure steps, starting with soaking sea salt, cutting toenails, pushing rough spots on your foot file, exfoliating, pushing on and shrinking excess skin and many other great steps, to get your skin moisturized .
                                </li>
                            
                            
                           
                            </ul>
                        </LeftSide>

                        <RightSide>
                            <h4>
                                Benefits
                            </h4>

                            <ul>
                                <li>
                                    We all know that a foot massage every now and then can really help us relax, particularly after a long day of standing up and walking around, when our feet tend to swell up. Sure, everyone enjoys it
                                </li>
                                <li>
                                    The first action of the heat is that it dilates the blood vessels which And Also, Face masks are great additions to any skincare routine to target specific skin care concerns.                                </li>
                                <li>
                                    Masks can help hydrate skin, remove excess oils and help improve the appearance of pores—while providing a relaxing, spa-like experience at home.                                
                                </li>
                               
                           
                            </ul>
                        </RightSide>
                    </ManicureDescrption>

                    <ManicureBook>
                        <Button to="/ContactPg" primary="true" >
                            Book Now
                        </Button>
                    </ManicureBook>
                </div>

            </ManicureInfo>

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
    <ArabicLink  to="/TurkishMassage">
        <li className="mb-5">
        Turkish Hammam Bath Massage
        </li>
    </ArabicLink>
    </ArabicOffer>

</ArabicWrapper>

</ArabicLinks>
            
            
        </Manicure>
    )
}

export default ManicureFaceFoot
