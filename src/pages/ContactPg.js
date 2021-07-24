import React from 'react';
import styled from 'styled-components';
import Head from '../images/contact.jpg';

const Contact = styled.section`
   
`;

const ContactImg = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    filter: brightness(.5);
`;

const ContactPg = () => {
    return (
        <Contact>
           <ContactImg src={Head} alt="" />
        </Contact>
    )
}

export default ContactPg
