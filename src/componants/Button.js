import styled from "styled-components";
import {Link} from "react-router-dom";

export const Button = styled(Link)`

    background: ${({primary}) => (primary ? '#630F00' : '#fff')};
    white-space: nowrap;
    outline: none;
    border: 2px solid #630F00;
    border-radius: 20px;
    min-width: 100px;
    max-width: 300px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) =>(big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000')};
    font-size: ${({big}) =>(big ? '20px' : '14px')};
    

    &:hover{
        transform: translateY(-2px);
        border: none;
        background: #630F00;
        color: #fff;
        text-decoration: none;
    }

   
    

`;
 





























