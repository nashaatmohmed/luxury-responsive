import React from 'react';
import styled from 'styled-components';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import InstagramIcon from '@material-ui/icons/Instagram';




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

    a{
        background: #6B1100;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 26px 0px 0px 25px;
    transform: translate(130px,-10px);
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
    }
`;


// const SocialTele = styled(a)`
//     background: #6B1100;
//     height: 40px;
//     margin-bottom: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 26px 0px 0px 25px;
//     transform: translate(125px, -10px);
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
//         margin-left: 5px;
//     }
    
   
// `;

const SocialWhats = styled.div`

    a{
        background: #6B1100;
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
                <a href="tel:971528082776">
                    <SettingsPhoneIcon style={{ fontSize: 30 }}/>
                    <span>+971528082776</span>
                </a>
            
                <SocialWhats>
                   

                   {/* <a target="_blank" href="https://api.whatsapp.com/send?phone=2001069966454"  rel="noopener noreferrer">
                   
                   </a> */}

                   <a
                        href="https://wa.me/+971528082776"
                        class="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer">
                       <WhatsAppIcon style={{ fontSize: 30 }}/>
                    
                   

                    <span>Massage Us</span>
                    </a>
                  
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
