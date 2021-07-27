import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Tittle } from './Tittle';
import Slide from 'react-reveal/Slide';

const AboutSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;

`;

const AboutContainer = styled.div`
    /* padding: 3rem calc((100vw -1000px) / 2); */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 300px;
        margin: auto;
    }

`;

const AboutRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    padding: 1rem 2rem;
    order: ${({reverse}) =>(reverse ? '2' : '1')};

    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        color: #fff;
    }
    p{
        margin-bottom: 2.5rem;
        width: 80%;
        text-align: center;
        color: gray;
    }
    .BTN{
        height: 50px !important;
    }

`;

const AboutLeft = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) =>(reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({reverse}) =>(reverse ? '2' : '1')};
    }

    img{
        width: 100%;
        height: 90%;
        object-fit: fill;
        border-radius: 10%;

        
    @media screen and (max-width: 768px) {
       width: 90%;
       height: 80%;
    }
    }

`;

const About = ({heading,paragraphOne,buttonLabel,reverse,image}) => {
    return (
        <AboutSection>
            <Tittle>
                About us
                <p>what we do ?</p>
            </Tittle>
            <AboutContainer>
                <AboutLeft>
                    <Slide left>
                        <img src={image} alt='home' />
                       
                    
                    </Slide>
                </AboutLeft>
                <AboutRight>
                    <Slide right>
                        <h1>{heading}</h1>
                        <p>{paragraphOne} </p>
                    
                        <Button className="BTN" to="/AboutPg"  primary="true"  big="true">{buttonLabel} </Button>
                    
                        
                    </Slide>    
                </AboutRight>
            </AboutContainer>
        </AboutSection>
    )
}

export default About;
