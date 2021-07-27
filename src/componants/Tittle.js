import styled from 'styled-components';

export const Tittle = styled.h3`
    font-size: clamp(2rem, 8vw, 3rem);
    text-align: center;
    margin: 2rem 0;
    position: relative;
    color: #fff;
    /* display: block; */
/* 
    &::before{
        content: "";
        width: 4%;
        height: 5px;
        position: absolute;
        bottom: -15px;
        left: 47.3%;
        background-color: #fff;
        z-index: 2;
    } */

    p{
        font-size: 1rem;
        text-transform: capitalize;
    }

    @media screen and (max-width: 768px){
        margin-bottom: 6rem;
    }


`;