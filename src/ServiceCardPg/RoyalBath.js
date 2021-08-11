import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import BgGround from '../images/background-web.jpg';
import { DataSix } from '../data/ServicePageData';
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

    .tittle{
        font-size: clamp(1.7rem,5vw,2.5rem);
        width: 90%;
        margin: 20px auto;
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

const ArabicDescrption = styled.div`
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


const ArabicBook = styled.div`
    margin: 10px auto;
    height: 50px;
`;

const RoyalBath = () => {
    return (
        <Arabic>
            

            {DataSix.map((item, index) =>(
                <ArabicInfo key={index}>
                    <ArabicHeader>
                <img src={item.image} alt="Foot-img" />
            </ArabicHeader>
                <div>
                    <Tittle className="tittle">
                   {item.name}
                    <p><span>{item.time}</span>{item.price}</p>                       
                    </Tittle>

                    <ArabicDescrption>
                        <LeftSide>
                            <h4>{item.description}</h4>
                            <ul>
                                <li>
                                   {item.descriptionListOne}                              
                                </li>
                                <li>
                                    {item.descriptionListTwo}                                   
                                </li>
                       
                            </ul>
                        </LeftSide>

                        <RightSide>
                            <h4>
                                {item.benfits}
                            </h4>

                            <ul>
                                <li>
                                    {item.benfitsListOne}
                                </li>
                                <li>
                                    {item.benfitsListTwo}
                                </li>
                                <li>
                                    {item.benfitsListThree}
                                </li>
                                <li>
                                    {item.benfitsListFour}
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
            ))}
            
            <ArabicLinks>


<ArabicWrapper>
    <ArabicService>
        <Box>
            <h4 className="mb-4">
            Special Services
            </h4>
           
        </Box>
        
       
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
        <ArabicLink to="/Body">
            <li>
            Body Massage
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

export default RoyalBath;



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