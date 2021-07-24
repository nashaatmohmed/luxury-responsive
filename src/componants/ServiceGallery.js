import React, {useState} from 'react';

import styled from 'styled-components';
import Menu from '../data/ServiceData';
import { Button } from './Button';
import { Tittle } from './Tittle';
import Fade from 'react-reveal/Fade';




const Service = styled.section`
  
    padding: 1rem;

`;

const ServiceCategory = styled.div`
   

`;

const ServiceListContent = styled.div`
    .btn{
        height: 50px;
        
    }
    @media screen and (max-width : 600px){
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        margin: auto;

    }
`;

const ServiceItemsBox = styled.div`
    
   



`;


const ServiceRow = styled.div`


`;

const ServiceCol = styled.div`


`;

const ServiceItemCard = styled.div`


`;

const CardItems = styled.div`

    background: white;
    margin: 1rem;
    height: 80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    

    @media screen and (max-width : 1024px){
        height: 50vh;
        .btn{
            margin-top: 3rem;
            margin-left: 1.5rem;
        }
    }

    @media screen and (max-width : 768px){
        height: 60vh ;
        .btn{
            margin-top: 2rem;
            margin-left: 0rem;
        }
    }
    @media screen and (max-width : 600px){
        height: 80vh !important;
        .btn{
           
            margin-left: 2rem;
        }
    }

    @media screen and (max-width : 450px){
        height: 80vh !important;
        .btn{
            margin-top: 3rem;
            margin-left: 0rem;
        }

    }

    @media screen and (max-width : 380px){
        height: 85vh !important;
        .btn{
            margin-top: 0rem;
            margin-left: 0rem;
        }
    }
    @media screen and (max-width : 320px){
        height: 100vh !important;
        .btn{
            margin-top: 0rem;
            margin-left: 0rem;
        }
    }
`;

const CardImage = styled.div`
    padding: 0;
    position: relative;
    bottom: 10px;
    transition: .3s ease-in-out;
    overflow: hidden; 
    

    img{
        width: 100%;
        height: 300px;
        object-fit: cover; 
    }
     

       
    &:hover
         {
            transform: scale(1.1);
        }
    
    
`;

const CardInfo = styled.div`

        height: 50%;
        width: 100%;
        
        text-align: center;

        .name-tittle{
            margin-bottom: 3rem;
            position: relative;
            h3{
            width: 100%;
            white-space: nowrap;
            font-size: clamp(1rem, 6vw, 1.5rem);
            font-weight: bold;
           
            
        }
        i{
            
            position: absolute;
            top: 2.5rem;
            left: 39%;
            font-weight: bold;
            color: #DFCAA0;
            
        }

        }
   
        
        .price-book-divide{
            flex-direction: column;
        }
        .btn{
            text-decoration: none;
            
        }
`;




const ServiceGallery = () => {
    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
    return (
        <Service>
            <Tittle>
                Services
                <p>what we do ?</p>
            </Tittle>
            
            <ServiceCategory className="menu-tabs container">
                <ServiceListContent className="menu-tab d-flex justify-content-center">
                    <Fade top>
                        <Button className="btn mr-3 mt-5" onClick={() => setItems(Menu)}>All Servicse</Button>
                        <Button className="btn mr-4 mt-5" onClick={() => filterItem('massage')}>Massage</Button>
                        <Button className="btn mr-4 mt-5" onClick={() => filterItem('moroccan')}>Moroccan Bath</Button>
                        <Button className="btn mr-4 mt-5" onClick={() => filterItem('body')}>Body Care</Button>
                    </Fade>
                    
                </ServiceListContent>
            </ServiceCategory>

            {/* my main items section  */}
            <ServiceItemsBox className="menu-items container-fluid mt-5">
                <ServiceRow className="row">
                    <ServiceCol className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { name, image, description, price, small } = elem;

                                    return (
                                    
                                        <ServiceItemCard className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <Fade bottom>
                                                <CardItems className="row Item-inside">
                                                    {/* for images */}
                                                    <CardImage className="img-div">
                                                        <img src={image} alt={name} />
                                                    </CardImage>

                                                    {/* menu items description */}
                                                    <CardInfo className="col-12 col-md-12 col-lg-12">
                                                        <div className="main-title mt-2">
                                                            <div className="name-tittle">
                                                            <h3>{name}</h3>                                                           
                                                            <i>{small}</i>

                                                            </div>
                                                        
                                                            
                                                            <p>{description }</p>
                                                        </div>
                                                        <div className="menu-price-book">
                                                            <div className="price-book-divide d-flex">
                                                                <h4>Price : {price}</h4>
                                                            
                                                                <Button to="/ServicesPg" className="btn" primary="true">Order Now</Button>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </CardInfo>
                                                </CardItems>
                                            </Fade>
                                        </ServiceItemCard>
                                    )
                                })
                            }

                             
                        </div>
                    </ServiceCol>
                </ServiceRow>
            </ServiceItemsBox>
        </Service>
    )
}


export default ServiceGallery;
