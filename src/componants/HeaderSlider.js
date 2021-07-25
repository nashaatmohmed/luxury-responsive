import React from 'react';
import {Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../images/slides.webp';
import ImageTwo from '../images/slide-hom.jpg';
import ImageThree from '../images/special-offer.jpg';
// import { Button } from './Button';
import Slide from 'react-reveal/Slide';



const Header = styled.div`
        width: 100%;
        height: 70vh; 
        position: relative;
        background: #fff;
        overflow: hidden;
       
      
        
        

        &::before{
            content: "";
            width: 100%;
            height: 70vh;
            background:linear-gradient(0deg,
                rgba(0,0,0,.2) 0%,
                rgba(0,0,0,.2) 50%,
                rgba(0,0,0,.6) 100%
                ) ;
                
               
            position: absolute;
            right: 0;
            bottom: 0;
            overflow: hidden;
            opacity: .4;
            z-index: 1;

        }


        
        
       
       

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
     
        /* filter: brightness(.2); */
        overflow: hidden !important;
       
    }
    .Info{
        width: 500px;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* position: absolute;
        top: 30%;
        left: 8%;
        z-index: 2;
        line-height: 2;
        text-align: left; */


        @media screen and (max-width: 768px){
            width: 300px;          
            text-align: center;
            
    
    }
           
    }

    h4{
        font-size: clamp(.7rem, 5vw, 1.5rem);
        

        span{
            color: #5A0101;
        }
    }

    h2{
        /* font-size: clamp(2rem, 8vw, 4rem); */
        font-size: 40px;
        margin: 10px 0;
    }

    p{
        min-width: 200px;
        max-width: 300;
        font-size: clamp(1rem, 8vw, .4rem);
      

    .carousel-control-next, .carousel-control-prev{
        z-index: 9;
        width: 100px;

        @media screen and (max-width: 768px){
            display: none;
        }
       
    }
    .carousel-control-next{
        right: 0;
    }
    .carousel-control-prev{
        left: 0;

    }
}
`;

// const CarouselBtn = styled.div`
//     display: flex;
//     align-items: center;
//     margin-top: 1rem;
   

//     Button{
//         z-index: 10;
//     }
    

//     @media screen and (max-width: 768px){
//         justify-content: center;
//     }

// `;



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
               
                <Carousel.Caption className="Info">
                    <Slide left>
                        {/* <h4>Welcome To <span>LUXURY</span> SPA</h4>
                        <h2>Health {"& "} Relaxation</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing</p> */}

                        {/* <CarouselBtn>
                            <Button to="/ContactPg" primary="true"  >
                            Register Now
                            </Button>
                            
                            
                        </CarouselBtn> */}
                    </Slide>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="4000">
                <img
                    className="d-block w-100"
                    src={ImageTwo}
                    alt="Second slide"
                />
            
                <Carousel.Caption className="Info">
                    <Slide left>
                        {/* <h4>Welcome To <span>LUXURY</span> SPA</h4>
                        <h2>Health {"& "} Relaxation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing</p> */}

                        {/* <CarouselBtn>
                            <Button primary="true"  >
                            Register Now
                            </Button>
                            
                            
                        </CarouselBtn> */}
                    </Slide>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="4000">
                <img
                    className="d-block w-100"
                    src={ImageThree}
                    alt="Third slide"
                />
            
                <Carousel.Caption className="Info">
                    <Slide left>
                        {/* <h4>Welcome To <span>LUXURY</span> SPA</h4>
                        <h2>Health {"& "} Relaxation</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing</p> */}

                        {/* <CarouselBtn>
                            <Button primary="true"  >
                            Register Now
                            </Button>
                            
                            
                        </CarouselBtn> */}
                    </Slide>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

           


        </Header>  
        
    )
}

export default HeaderSlider;
