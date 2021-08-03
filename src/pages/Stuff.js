import React from 'react';
import styled from 'styled-components';
import { Tittle } from '../componants/Tittle';
import ImageOne from '../images/slides.webp';
import Stuff1 from '../images/stuff1.jpg';
import Stuff2 from '../images/stuff2.webp';
import Stuff3 from '../images/stuff3.jpg';
import Stuff4 from '../images/stuff4.jpg';
import Stuff5 from '../images/stuff5.jpg';
import CardBg from '../images/back-ground-card.webp';

const StuffSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const StuffHeader = styled.div`
  
    display: block;

`;

const StuufMainImg = styled.img`
    width: 100%;
    height: 71vh;
    object-fit: cover;
    /* filter: brightness(.7); */
    margin-top: 80px;

    @media screen and (max-width : 768px){
        height: 29vh;
    }

    @media screen and (max-width : 420px){
        height: 22vh;
    }
    

`;

const StuffWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    padding: 0 20px;
    margin: 50px auto;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    
    }

    @media screen and (max-width: 420px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

const StuffCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${CardBg});
    background-size: contain;
    max-height: 440px;
    max-width: 450px;
    /* padding-bottom: 40px; */
    border-radius: 10px;
    
   

    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: fill;
    }
   

`;


const Stuff = () => {
    return (
        <StuffSection>
            <StuffHeader>
                <StuufMainImg src={ImageOne} alt="head-pic" />
            </StuffHeader>
            <Tittle>
            Our Professional Masseuse
            <p></p>
            </Tittle>
            <StuffWrapper>
                <StuffCard>
                    <img src={Stuff1} alt="num-1" />
                </StuffCard>
                <StuffCard>
                    <img src={Stuff2} alt="num-2" />
                </StuffCard>
                <StuffCard>
                    <img src={Stuff3} alt="num-3" />
                </StuffCard>
                <StuffCard>
                    <img src={Stuff4} alt="num-4" />
                </StuffCard>
                <StuffCard>
                    <img src={Stuff5} alt="num-5" />
                </StuffCard>
            </StuffWrapper>
            
        </StuffSection>
    )
}

export default Stuff
