import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon1 from '../images/light1.gif';
import Icon2 from '../images/service.gif';
import Icon3 from '../images/speci.gif';
import CardBg from '../images/back-ground-card.webp';

const GoalsSection = styled.section`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    
    /* #010606; */

    @media screen and (max-width: 1024px){
        height: 600px;
        
    }

    @media screen and (max-width: 768px){
        height: 900px;
        margin-top: 0;
        padding-bottom: 0rem;
        
     
        
    }

    @media screen and (max-width: 580px){
        height: 1000px;
        padding-bottom: 1rem;
        margin-top: 50px;
    }
`;

const GoalLink = styled(Link)`
   
    &:hover{
        text-decoration: none;
    }
`;

const GoalsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    padding: 0 20px;
  

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
       
        /* width: 70%;
        margin-top: 2rem; */
    }

    @media screen and (max-width: 420px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-top: 50px;
    }

`;

const GoalsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    background-image: url(${CardBg});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 3px 6px rgba(0,0,0,1); 
    transition: all 0.2s ease-in-out;
    margin-right: 5px;
    

    &:hover{
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
        cursor: pointer;
        text-decoration: none;
    }
    @media screen and (max-width: 768px){
    
        margin-bottom: 10px;
    }
`;

const GoalsIcon = styled.img`
    height: 160px;
    width: 100%;
    margin-bottom: 10px;
`;

const GoalsHeading = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: large;
    margin-bottom: 1rem;
    transition: 0.3s ease-in-out;

    &:hover{
        text-decoration: none;
        color: #fff;

    }
`;

const GoalsText = styled.p`
    color: lightgrey;
`;




const Goals = () => {
    return (
        <GoalsSection>
            <GoalsWrapper>
                <GoalLink to="/OfferPg">
                    <GoalsCard>                  
                        <GoalsIcon src={Icon1}/>
                        <GoalsHeading to="/OfferPg">
                        Special Offers
                        </GoalsHeading>
                    
                        <GoalsText>
                        We provide hand sanitizers at the front desk, and sterilize credit card machines, tables, and more.
                        </GoalsText>
                    </GoalsCard>
                </GoalLink>
                <GoalLink to="/Stuff">
                    <GoalsCard>                  
                        <GoalsIcon src={Icon2}/>
                        <GoalsHeading to="/Stuff">
                        Our Professional Massuse

                        </GoalsHeading>
                    
                        <GoalsText>
                        We provide hand sanitizers at the front desk, and sterilize credit card machines, tables, and more.
                        </GoalsText>
                    </GoalsCard>
                </GoalLink>
                <GoalLink to="/ServicesPg">
                    <GoalsCard>                  
                        <GoalsIcon src={Icon3}/>
                        <GoalsHeading to="/ServicesPg">
                        Our Service

                        </GoalsHeading>
                    
                        <GoalsText>
                        We provide hand sanitizers at the front desk, and sterilize credit card machines, tables, and more.
                        </GoalsText>
                    </GoalsCard>
                </GoalLink>
            </GoalsWrapper>
                   
        </GoalsSection>
    )
}

export default Goals
