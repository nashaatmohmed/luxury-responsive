import styled from "styled-components";
import {Link} from "react-router-dom";

export const Button = styled(Link)`

    background: ${({primary}) => (primary ? '#A88E6F' : '#fff')};
    white-space: nowrap;
    outline: none;
    border: 2px solid #A88E6F;
    border-radius: 20px;
    min-width: 55px;
    max-width: 120px;
    margin: 0 auto;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) =>(big ? '16px 40px' :  '7px 23px')};
    color: ${({primary}) => (primary ? '#fff' : '#000')};
    font-size: ${({big}) =>(big ? '20px' : '14px')};
    

    &:hover{
        transform: translateY(-2px);
        border: none;
        background: #A88E6F;
        color: #fff;
        text-decoration: none;
    }

   
    

`;
 





























