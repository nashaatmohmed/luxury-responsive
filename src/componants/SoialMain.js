import React from 'react';
import styled from 'styled-components';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';


const SocialContainer = styled.section`
    position: fixed;
    bottom: 19%;
    right: 0px;
    max-width: 100px;
    height: 60px;
    z-index: 100;


`;

const SocialWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;


const SocialTele = styled(Link)`
    background: #990404;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 26px 0px 0px 25px;
    transform: translate(128px, -10px);
    transition: all .2s ease-in-out;
    text-decoration: none !important;
    box-shadow: 0px 3px 5px rgba(0,0,0,1);
    padding: .5rem;
    color: #fff;
    font-weight: bold;

    &:hover{
        transform: translate(0, -10px);
        color: #fff;
      
    }
    span{
        text-decoration: none !important;
        margin-left: 5px;
    }
    
   
`;

const SocialWhats = styled(Link)`
    background: #990404;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 26px 0px 0px 25px;
    transform: translate(95px, -10px);
    transition: all .2s ease-in-out;
    text-decoration: none !important;
    box-shadow: 0px 3px 5px rgba(0,0,0,1);
    padding: .5rem;
    color: #fff;
    font-weight: bold;

    &:hover{
        transform: translate(0, -10px);
        color: #fff;
      
    }
    span{
        text-decoration: none !important;
        white-space: nowrap;
        margin-left: 5px;
    }
`;

// const SocialInsta = styled(Link)`
//     background: #990404;
//     height: 40px;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 26px 0px 0px 25px;
//     transform: translate(95px, -10px);
//     transition: all .2s ease-in-out;
//     text-decoration: none !important;
//     box-shadow: 0px 3px 5px rgba(0,0,0,1);
//     padding: .5rem;
//     color: #fff;
//     font-weight: bold;

//     &:hover{
//         transform: translate(0, -10px);
//         color: #fff;
      
//     }
//     span{
//         text-decoration: none !important;
//         white-space: nowrap;
//         margin-left: 5px;
//     }
// `;


const SoialMain = () => {
    return (
        <SocialContainer>
            <SocialWrapper>
                <SocialTele to="/">
                    <SettingsPhoneIcon style={{ fontSize: 30 }}/>
                    <span>+971528082776</span>
                </SocialTele>
            
                <SocialWhats to="/">
                    <WhatsAppIcon style={{ fontSize: 30 }}/>
                    <span>Massage Us</span>
                </SocialWhats>

                {/* <SocialInsta to="/">
                    <InstagramIcon style={{ fontSize: 30 }}/>
                    <span>Massage Us</span>
                </SocialInsta> */}
            </SocialWrapper>
        </SocialContainer>
    )
}

export default SoialMain
