import styled from "styled-components";
import {Link} from "react-router-dom";

export const Button = styled(Link)`

    background: ${({primary}) => (primary ? '#DFCAA0' : '#000')};
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 20px;
    min-width: 100px;
    max-width: 300px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) =>(big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#000' : '#fff')};
    font-size: ${({big}) =>(big ? '20px' : '14px')};
    

    &:hover{
        transform: translateY(-2px);
        border: 2px solid #DFCAA0;
        background: transparent;
        color: #DFCAA0;
        text-decoration: none;
    }

   
    

`;
 





























