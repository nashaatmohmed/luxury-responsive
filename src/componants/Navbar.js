import React, {useState} from 'react';
import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';
import BrandLogo from '../images/logo.png';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/menu.svg';



const Nav = styled.nav`

    height: 100px;
    width: 100%;
    display: flex;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 1rem 2rem;
    margin-top: 2rem;
    z-index: 100;
    transition: .3s ease-in-out;

    @media screen and (max-width : 768px){
        margin-top: 0rem;
    }
    
`;


const NavLinks = css`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    padding: 0 1rem;
`;

const Logo = styled(Link)`
    ${NavLinks}

    img{
        object-fit: cover;
        width: 90px;
        height: 70px;
    }
    
`;

const NavBars = styled.i`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        transform: translate(-58%, 25%);
       
    }
    

    
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5rem;

    @media screen and (max-width: 768px){
        display: none;
    }
  
    
    
`;

const NavMenuLinks = styled(Link)`
      ${NavLinks}
`;

const NavBtn = styled.div`
    

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    const [navbar,setNavbar] = useState(false);
    const changBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };
    
    window.addEventListener("scroll", changBackground);
    
    return (
        <Nav className={navbar ? "active" : null}>
            
            <Logo to="/">
                <img src={BrandLogo} alt="logo" />
                

            </Logo>

            <NavBars onClick={toggle}/>

            <NavMenu>
                {menuData.map((item, index) =>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.tittle}

                    </NavMenuLinks>

                ))}
                
            </NavMenu>

            <NavBtn>
                <Button to="/ContactPg" primary='true'>
                    click me
                </Button>
            </NavBtn>
            
        </Nav>
    )
}

export default Navbar;
