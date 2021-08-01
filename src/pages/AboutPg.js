import React from 'react';
import styled from 'styled-components';
import Head from '../images/about.jpg';

const About = styled.section`
    background-color: #000;
   
    
`;

const AboutImg = styled.img`
     width: 100%;
    height: 70vh;
    object-fit: cover;
    filter: brightness(.5);
`;

const AboutPg = () => {
    return (
        <About>
            <AboutImg src={Head} alt="head-pic" />
        </About>
    )
}

export default AboutPg;
