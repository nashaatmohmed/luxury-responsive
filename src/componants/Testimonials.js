import React from 'react';
import styled from 'styled-components';
import { Tittle } from './Tittle';
import Icon1 from '../images/covid-1.jpg';
import Icon2 from '../images/covid-2.jpg';
import Icon3 from '../images/covid-3.jpg';
import Icon4 from '../images/covid-4.jpg';
import Icon5 from '../images/covid-5.jpg';
import Icon6 from '../images/covid-6.jpg';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import CardBg from '../images/back-ground-card.webp';

const TestimonialsContainer = styled.section`
    /* height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    width: 100%;
    height: 100%;
    padding: 2rem 0rem;

    @media screen and (max-width: 768px){
        padding: 0rem;
    }
    
    

    /* @media screen and (max-width: 1024px){
        height: 1200px;
        
    }

    @media screen and (max-width: 768px){
        height: 2200px;
        
    }

    @media screen and (max-width: 580px){
        height: 2400px;
    } */

    
`;

const TestimonialsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    padding: 0 30px;
    margin-top: 50px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 420px){
        grid-template-columns: 1fr ;
        padding: 0 20px;
    }

    .none{
        @media screen and (max-width : 420px){
            display: none;
        }
    }

`;

const TestimonialsCard = styled.div`
    background-image: url(${CardBg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 2px 3px #000; 
    transition: all 0.2s ease-in-out;
 

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
    
        margin-bottom: 10px;
    }
    
`;


const TestimonialsIcon = styled.img`
    height: 160px;
    width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
`;

const TestimonialsHeading = styled.h4`
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 1rem;
        margin-bottom: 20px;
    }

`;

// const TestimonialsHeadingTwo = styled.h4`
//     font-size: 1rem;
//     /* color: #fff; */
//     margin-bottom: 10px;

//     @media screen and (max-width: 480px){
//         font-size: 2rem;
//     }

// `;


const TestimonialsText = styled.small`
    font-size: 1rem;
    height: 30%;
    text-align: center;
    max-width: 400px;
    color: #fff;
   
`;

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <Tittle>
                Covid - 19
                <p>our protection rules !!</p>
            </Tittle>
            
           
            <TestimonialsWrapper>
                <Slide left>
                    <TestimonialsCard>                  
                        <TestimonialsIcon src={Icon1}/>
                        <TestimonialsHeading>
                            Luxury Arap Spa
                        </TestimonialsHeading>
                    
                        <TestimonialsText>
                            We provide hand sanitizers at the front desk, and sterilize credit card machines, tables, and more.
                        </TestimonialsText>
                    </TestimonialsCard>
                </Slide>

                <Fade top>
                    <TestimonialsCard>                    
                    <TestimonialsIcon src={Icon2}/>
                        <TestimonialsHeading>
                        Luxury Arap Spa
                        </TestimonialsHeading>
                        <TestimonialsText>
                        Employees are required to wear a mask and face shield and changed between clients at all times
                        </TestimonialsText>
                    </TestimonialsCard>
                </Fade>

                <Slide right> 
                    <TestimonialsCard> 
                                
                        <TestimonialsIcon src={Icon3}/>
                        <TestimonialsHeading>
                        Luxury Arap Spa
                        </TestimonialsHeading>
                        <TestimonialsText>
                        Employees are required to wear clean and sterile uniforms to be changed between clients
                        </TestimonialsText>
                    </TestimonialsCard>
                </Slide>


                <Slide left>
                    <TestimonialsCard className="none">                  
                        <TestimonialsIcon src={Icon4}/>
                        <TestimonialsHeading>
                        Luxury Arap Spa
                        </TestimonialsHeading>
                        <TestimonialsText>
                        Employees are required to wear clean and sterile uniforms to be changed between clients
                        </TestimonialsText>
                    </TestimonialsCard>
                </Slide>

                <Fade bottom>
                    <TestimonialsCard className="none">                  
                        <TestimonialsIcon src={Icon5}/>
                        <TestimonialsHeading>
                        Luxury Arap Spa
                        </TestimonialsHeading>
                        <TestimonialsText>
                        Employees are required to wear clean and sterile uniforms to be changed between clients
                        </TestimonialsText>
                    </TestimonialsCard>
                </Fade>

                <Slide right>
                    <TestimonialsCard className="none">                  
                        <TestimonialsIcon src={Icon6}/>
                        <TestimonialsHeading>
                        Luxury Arap Spa
                        </TestimonialsHeading>
                        <TestimonialsText>
                        Employees are required to wear clean and sterile uniforms to be changed between clients
                        </TestimonialsText>
                    </TestimonialsCard>
                </Slide>

            </TestimonialsWrapper>
            
        </TestimonialsContainer>
    )
}

export default Testimonials
