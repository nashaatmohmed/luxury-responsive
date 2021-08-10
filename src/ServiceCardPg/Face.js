import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import BgGround from '../images/background-web.jpg';
import { DataThrteen } from '../data/ServicePageData';

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

const FootMassage = () => {
    return (
        <Arabic>
            

            {DataThrteen.map((item, index) =>(
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
                                    Special Offer From ''Luxury ARAB SPA'' You Can Get Full Body Massage, Manicure, Pedicure, And Face Mask                                </li>
                                <li>
                                    Our trained therapists are from Morocco, Tunisia, Egypt, Algeria, China And Thailand!                                
                                </li>
                       
                            </ul>
                        </LeftSide>

                        <RightSide>
                            <h4>
                                {item.benfits}
                            </h4>

                            <ul>
                                <li>
                                Relieve stress                                
                                </li>
                                <li>
                                Helps with fibromyalgia pain
                                </li>
                                <li>
                                Reducing muscle tension
                                </li>
                                <li>
                                Enhancing exercise performance
                                </li>
                                <li>
                                Relief from tension headaches
                                </li>
                                <li>
                                Improving balance in the elderly
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
            ))}
            
            
            
            
        </Arabic>
    )
}

export default FootMassage;
