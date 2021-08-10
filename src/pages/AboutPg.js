import React from 'react';
import styled from 'styled-components';
import Head from '../images/about.jpg';
import { Tittle } from '../componants/Tittle';

const About = styled.section`
    background-color: #000;
   
    
`;

const AboutImg = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
    filter: brightness(.5);
`;

const AboutSectionOne = styled.div`

`;

const AboutSectionTwo = styled.div`

`;

const AboutSectionThree = styled.div`

`;

const AboutPg = () => {
    return (
        <About>
            <AboutImg src={Head} alt="head-pic" />

            <AboutSectionOne>
                <Tittle>
                    Our Vision
                    <p></p>
                </Tittle>
            </AboutSectionOne>

            <AboutSectionTwo>
                <Tittle>
                    Our Vision
                    <p></p>
                </Tittle>
            </AboutSectionTwo>

            <AboutSectionThree>
                <Tittle>
                    Our Vision
                    <p></p>
                </Tittle>
            </AboutSectionThree>
        </About>
    )
}

export default AboutPg;
