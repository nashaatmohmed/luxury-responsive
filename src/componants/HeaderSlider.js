import React from 'react';
import {Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../images/slides.webp';
import ImageTwo from '../images/slide-hom.jpg';
import ImageThree from '../images/special-offer.jpg';
// import { Button } from './Button';
// import Slide from 'react-reveal/Slide';



const Header = styled.div`
        width: 100%;
        height: 70vh; 
        position: relative;
        overflow: hidden;
       
       

    .content{
       
        width: 100%;
        height: 100%;

        
     
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: fill;
        background-clip: content-box;
        background-attachment: fixed;
        filter: brightness(.5);
        /* margin-top: 30px; */
        /* padding-bottom: 2rem; */
       
        
       
    }
  
    `;



const HeaderSlider = () => {

    return (
        <Header>
            
            <Carousel touch fade className="content">

                
                <Carousel.Item interval="4000">
                <img
                    className="d-block w-100"
                    src={ImageOne}
                    alt="First slide"
                />
               
              
                </Carousel.Item>
                <Carousel.Item interval="4000">
                <img
                    className="d-block w-100"
                    src={ImageTwo}
                    alt="Second slide"
                />
            
                
                </Carousel.Item>
                <Carousel.Item interval="4000">
                <img
                    className="d-block w-100"
                    src={ImageThree}
                    alt="Third slide"
                />
            
                
                </Carousel.Item>
            </Carousel>

           


        </Header>  
        
    )
}

export default HeaderSlider;
