import React from 'react';
import styled from 'styled-components';
import { Tittle } from './Tittle';
import Icon1 from '../images/header1.jpg';
import Icon2 from '../images/header2.jpg';
import Icon3 from '../images/header3.jpg';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const TestimonialsContainer = styled.section`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    /* #010606; */

    @media screen and (max-width: 1024px){
        height: 1200px;
        
    }

    @media screen and (max-width: 768px){
        height: 2200px;
        
    }

    @media screen and (max-width: 580px){
        height: 2400px;
    }
`;

const TestimonialsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    align-items: center;
    padding: 0 30px;
    margin-top: 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

const TestimonialsCard = styled.div`
    background: rgba(0,0,0,.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2); 
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
    width: 160px;
    margin-bottom: 10px;
`;

const TestimonialsHeading = styled.h3`
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


const TestimonialsText = styled.p`
    font-size: 1rem;
    height: 30%;
    text-align: center;
    color: lightgrey;
    max-width: 400px;
   
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

                <Fade bottom>
                    <TestimonialsCard>                  
                        <TestimonialsIcon src={Icon3}/>
                        <TestimonialsHeading>
                        Luxury Arap Spa
                        </TestimonialsHeading>
                        <TestimonialsText>
                        Employees are required to wear clean and sterile uniforms to be changed between clients
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

            </TestimonialsWrapper>
            
        </TestimonialsContainer>
    )
}

export default Testimonials
