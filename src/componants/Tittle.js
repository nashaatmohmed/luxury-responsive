import styled from 'styled-components';

export const Tittle = styled.h3`
    font-size: clamp(2rem, 8vw, 3rem);
    text-align: center;
    margin: 2rem 0;
    
    color: #000;
    /* display: block; */


    p{
        font-size: 1rem;
        text-transform: capitalize;
        color: rgba(99, 15, 0, 1);
        position: relative;

        
    &::before{
        content: "";
        width: 5%;
        height: 5px;
        position: absolute;
        bottom: -15px;
        left: 47.3%;
        background-color: rgba(99, 15, 0, 1);
        z-index: 2;
    }
    }

    @media screen and (max-width: 768px){
        margin-bottom: 2rem;
    }


`;