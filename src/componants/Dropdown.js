import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { menuData } from '../data/MenuData';
// import SoialMain from './SoialMain';

const DropdownContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: #990404;
    display: grid;
    align-items: flex-start;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) =>(isOpen ? '1' : '0')};
    top: ${({isOpen}) =>(isOpen ? '0' : '-100%')};

  
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    

`;

const Close = styled(CloseIcon)`
    color: #fff;
    font-weight: bold;

    &:hover{
        color: #000;
    }
`;

const DropdownWrapper = styled.div`
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
`;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
    margin-bottom: 4rem;
 
    

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5, 100px);
    }

`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        color: #000d1a;
        text-decoration: none;
    }

`;

const BtnWrap = styled.div`
    display: flex;
   
    justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Close/>                
            </Icon>

            

            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.tittle}

                        </DropdownLink>
                    ))}
                    
                </DropdownMenu>
                <BtnWrap>
                    <Button >
                        Click me
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
            {/* <SoialMain className="social"/> */}
            
        </DropdownContainer>
    )
}

export default Dropdown
