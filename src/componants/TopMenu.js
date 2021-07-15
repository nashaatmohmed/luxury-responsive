import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';


const TopNav = styled.div`

    height: 30px;
    width: 100%;
    background: #DFCAA0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    @media screen and (max-width : 768px){
        display: none !important;
    }
    
    

`;

const LinkStyle = css`
    color: #000;
    
`;

const Social = styled(Link)`
    cursor: pointer;

    i{
        ${LinkStyle}
        margin-left: 1rem;
        
        
    }
       
        


  


  

`;

const SocialNum = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    text-align: center;
    ${LinkStyle}

    p{
        margin:5px 10px;
    }

    &:hover{
        text-decoration: none;
    }
`;

const TopLang = styled(Link)`
       ${LinkStyle}
`;



const TopMenu = () => {
    return (
        <TopNav>
            <Social to="/">
                <i >
                    <FacebookIcon />
                </i>

                <i >
                    <TwitterIcon />
                </i>

                <i >
                    <InstagramIcon />
                </i>

                <i >
                    <WhatsAppIcon />
                </i>

                <i >
                    <PinterestIcon />
                </i>

                <i >
                    <LinkedInIcon />
                </i>

                <i to="/home">
                    <YouTubeIcon />
                </i>

            </Social>

            <SocialNum >
              
                    <PhoneIcon />
               
                
                <p>
                +971528082776
                </p>

            </SocialNum>

            <TopLang to="/home">

              
                    <LanguageIcon />
               
              
                    
                

            </TopLang>
            
        </TopNav>
    )
}

export default TopMenu
