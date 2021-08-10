import React from 'react';
import styled from 'styled-components';
import { Button } from '../componants/Button';
import { Tittle } from '../componants/Tittle';
import Stuff3 from '../images/maincur-pedicure-face-mask-foot-massage-luxury-sp-arab--in-ubai-d.jpg';

import BgGround from '../images/background-web.jpg';

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
                        <Button primary="true" >
                            Book Now
                        </Button>
                    </ManicureBook>
                </div>

            </ManicureInfo>
            
            
        </Manicure>
    )
}

export default ManicureFaceFoot
