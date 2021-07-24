import React from 'react';
import styled from 'styled-components';
import Head from '../images/service.jpg';

const Service = styled.section`
 
    
`;

const ServiceImg = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    filter: brightness(.5);
`;

const ServicesPg = () => {
    return (
        <Service>
            <ServiceImg src={Head} alt="" />
           
        </Service>
    )
}

export default ServicesPg;
