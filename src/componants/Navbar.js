import React, {useState} from 'react';
import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';
import BrandLogo from '../images/logo2.png';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/menu.svg';



const Nav = styled.nav`

    height: 80px;
    width: 100%;
    display: flex;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem 2rem;
    /* margin-top: 2rem; */
    background-color:#260500;
    
    z-index: 100;
    transition:all .3s ease-in-out;
    

    @media screen and (max-width : 768px){
        margin-top: 0rem;
        height: 80px;
    }

   
    
`;


const NavLinks = css`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    list-style: none;
    color: #fff;
    padding: 0 1rem;
    
`;

const Logo = styled(Link)`
   padding: 0 1rem;

    img{
        object-fit: cover;
        width: 59px;
        height: 68px;

    @media screen and (max-width : 768px){
            width: 60px;
            height: 74px;
        }
    }
    
`;

const NavBars = styled.i`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        transform: translate(-58%, 25%);
        z-index: 99;
       
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
      position: relative;
      text-transform: uppercase;
      text-decoration: none !important;


    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 16px;   
        transition: 0.3s ease-in-out;
        
    }

    &:hover{
        color: #A88E6F;
        font-weight: bold;

            &::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 16px;
            width: 25%;
            height: 2px;
            background-color: #A88E6F;
        }
    }
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
                <Button to="/ContactPg">
                    Contact Us
                </Button>
            </NavBtn>
            
        </Nav>
    )
}

export default Navbar;
