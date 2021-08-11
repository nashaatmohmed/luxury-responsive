import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BrandLogo from '../images/logo.png';
import {FaFacebook, FaInstagram, FaPinterestP, FaBloggerB, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { TiLocation } from "react-icons/ti";
import MainBg from '../images/background-web.jpg';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';




const FooterSection = styled.footer`
    background-image: url(${MainBg});

`;

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 1100; */
    margin: 0 auto;

    @media screen and (max-width: 768px){
        padding-top: 0;
    }

`;

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }

`;

const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 820px){
       flex-direction: column;
    }
`;

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto 0 ; 
    text-align: left;
    width: 340px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 820px){
        text-align: center;
        padding: 10px;
    }

    @media screen and (max-width: 420px){
       margin: 0;
       padding: 10px;
       width: 100%;
    }


`;

const FooterLinkTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 2;
    span{
        margin-right: 5px;
        font-size: 20px;
    }

    
    

`;

const FooterAdress = styled.p`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    line-height: 2;
`;

const FooterLink = styled(Link)`
    
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    line-height: 2;

    &:hover{
        color: #A88E6F;
        transition: 0.3s ease-out;
        text-decoration: none;
    }
`;

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;

    }
`;

const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    img{
        object-fit: cover;
        width: 90px;
        height: 70px;
    }

`;

const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;
const FooterLinks = styled.div`
    a{
        text-decoration: none;
        color: #fff;

        &:hover{
            text-decoration: none;
            color: #A88E6F;
        }
    }
`;



const Footer = () => {
    return (
        <FooterSection>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <span>
                                <TiLocation />
                                </span>
                               
                                    Adress
                            </FooterLinkTitle>    
                                <FooterAdress>
                                - Kuwait Road, Al Mankhool, Burdubai <br/> Dubai - United Arab Emirates
                                </FooterAdress>
                                <FooterAdress>
                                - Grand Excelsior Hotel Bur Dubai <br/>Free Parking
                                </FooterAdress>
                                 <FooterLinks>
                                 <a href="tel:971528082776">
                                    <SettingsPhoneIcon style={{ fontSize: 30 }}/>
                                    <span>+971528082776</span>
                                </a>

                                </FooterLinks>
                                {/*
                                <FooterLink to="/">
                                    About Us
                                </FooterLink>
                                <FooterLink to="/">
                                    About Us
                                </FooterLink>
                                <FooterLink to="/">
                                    About Us
                                </FooterLink> */}
                        </FooterLinkItems>

                       

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                    Category
                            </FooterLinkTitle>    
                                <FooterLink to="/">
                                    Home
                                </FooterLink>
                                {/* <FooterLink to="/AboutPg">
                                    About Us
                                </FooterLink> */}
                                <FooterLink to="/Stuff">
                                MASSEUSE
                                </FooterLink>
                                <FooterLink to="/servicesPg">
                                    Services
                                </FooterLink>
                                <FooterLink to="/OfferPg">
                                    Offer
                                </FooterLink>
                                <FooterLink to="/ContactPg">
                                    Contact Us
                                </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                    Booking
                            </FooterLinkTitle>    
                                <FooterLink to="/ContactPg">
                                    
                                    Book Special Offers
                                </FooterLink>
                                <FooterLink to="/ContactPg">
                                    book Services
                                </FooterLink>
                                {/* <FooterLink to="/">
                                    
                                </FooterLink>
                                <FooterLink to="/">
                                    Services
                                </FooterLink>
                                <FooterLink to="/">
                                    Offer
                                </FooterLink>
                                <FooterLink to="/">
                                    Contact Us
                                </FooterLink> */}
                        </FooterLinkItems>


                    </FooterLinksWrapper>

                   
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <img src={BrandLogo} alt="" />
                        </SocialLogo>
                        <SocialIcon>

                      
                            <SocialIconLink 
                                href="https://www.facebook.com/luxuryarab"
                                target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />

                            </SocialIconLink>
                            <SocialIconLink
                                href="https://www.instagram.com/luxuryarabspa/" 
                                target="_blank" 
                                aria-label="Instagram">
                                <FaInstagram />

                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank" 
                                aria-label="Pinterest">
                                <FaPinterestP />

                            </SocialIconLink>
                            <SocialIconLink 
                                href="https://luxuryarabspa.blogspot.com/" 
                                target="_blank" 
                                aria-label="Blogspot">
                                <FaBloggerB />

                            </SocialIconLink>
                            <SocialIconLink 
                                href="https://twitter.com/luxuryarabspa" 
                                target="_blank" 
                                aria-label="Twitter">
                                <FaTwitter />

                            </SocialIconLink>
                            <SocialIconLink 
                                href="https://www.linkedin.com/company/luxuryarabspa/" 
                                target="_blank" 
                                aria-label="Linkedin">
                                <FaLinkedin/>

                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>           
        </FooterSection>
    )
}

export default Footer
