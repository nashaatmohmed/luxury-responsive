import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import ServiceGallery from '../componants/ServiceGallery';
import Head from '../images/head-service-pic.jpeg';
import HeadLeft from '../images/background-web.jpg';
import BrandLogo from '../images/logo2.png';

const Service = styled.section`
 
    
`;


const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-template-areas: 200px;
    align-items: center;
    background-image: url(${HeadLeft});

   
    

    @media screen and (max-width : 768px){
        grid-template-columns: 1fr;
    }
    
`;

const ServiceRight = styled.div`
    flex: .5;
 
    
`;

const ServiceImg = styled.img`
    width: 100%;
    height: 89vh;
    object-fit: fill;
    margin-top: 80px;
    filter: brightness(.5);

    @media screen and (max-width : 1024px){
        height: 60vh;
    }

    @media screen and (max-width : 768px){
        height: 60vh;
    }
`;

const ServiceLeft = styled.div`
      flex: .5;


    
`;

const ServiceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    flex: 1;

    .pic-logo{
        flex: .4;
        margin-bottom: auto;
        height: 200px;
        
        @media screen and (max-width : 1024px){
            margin-bottom: 100px;
    }

    @media screen and (max-width : 768px){
            margin-bottom: 50px;
    }

    @media screen and (max-width : 420px){
            margin-bottom: 0px;
            height: 150px;
    }
    }


    img{
            width: 151px;
            height: 162px;
        
       
        @media screen and (max-width : 768px){
            margin-top: 50px;
            width: 151px;
            height: 162px;

        
    
        }

        @media screen and (max-width : 420px){
            margin-top: 0;
            height: 90px;
            width: 100px;
            
          
        }
    }

    .text-info{
        height: 200px;
        flex: .6;
        margin-bottom: auto;
        justify-content: space-around;
        align-items: flex-end;

        @media screen and (max-width : 768px){
        margin-top: 20px;
        flex-direction: row;
        margin-bottom: none;
     

    }
    }

    h2{
        color: #fff;
        font-weight: bold;
        font-size: clamp(1rem, 4vw, 2.5rem);
        line-height: 1.5;
       
    }

    @media screen and (max-width : 768px){
        margin-top: 20px;
        flex-direction: row;
        margin-bottom: 49px;
        height: 150px;

    }
    @media screen and (max-width : 420px){
        margin-top: 20px;
        flex-direction: row;
        margin-bottom: 50px;

    }
`;



const ServicesPg = () => {
    return (
        <Service>
            <ServiceContainer>
                <ServiceRight>
                    <ServiceImg src={Head} alt="header-pic" />
                </ServiceRight>
                <ServiceLeft>
                    <ServiceInfo>
                        <div className="pic-logo">
                            <img src={BrandLogo} alt="logo"/>
                        </div>
                       
                        <div className="text-info">
                            <h2>
                                <Typed 
                                    className="work"
                                    strings={["You are one massage away from a good mood."]}
                                    typeSpeed = {70}
                                    backSpeed = {20}
                                    delay = {4000}
                                    loop
                                    infinty
                                
                                    /> 
                            </h2>
                                        
                        </div>
                       

                    </ServiceInfo>
                </ServiceLeft>

            </ServiceContainer>
           
            <ServiceGallery />
           
        </Service>
    )
}

export default ServicesPg;
