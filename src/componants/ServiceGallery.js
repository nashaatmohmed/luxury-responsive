import React, {useState} from 'react';

import styled from 'styled-components';
import Menu from '../data/ServiceData';
import { Button } from './Button';
import { Tittle } from './Tittle';
import Fade from 'react-reveal/Fade';
import CardBg from '../images/back-ground-card.webp';
import { Link } from 'react-router-dom';




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








const ServiceGallery = () => {
    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);


    }




    // const [switchToggled, setSwitchToggled] = useState(false);


    // const toggleSwitch = ({action, index})=>{
    //     switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);

      



    //     console.log(switchToggled);
    // };

  
    // const rotate = (style) =>{
    //     setStyle
    // }
    

    
    return (
        <Service>
            <Tittle>
                Services
                <p>what we have ?</p>
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
                        <div className="row">
                            
                            {
                                items.map((elem) => {
                                    const { name, image, description, price, small, time, info} = elem;

                                    return (
                                    
                                        

                                        <ServiceItemCard key={elem.id} className="col-xl-4 col-l-4 col-md-6 col-sm-12">
                                            <CardItems >
                                                <Card className="card">
                                                    
                                                    <CardInfo class>
                                                        <CardImage className="img-div">
                                                            <img src={image} alt={name} />
                                                        </CardImage>
                                                        <div className="name-tittle">
                                                            <h3>{name}</h3>

                                                            <i>{small}</i>
                                                        </div>
                                                        <div className="info">
                                                            <p>{description }</p>
                                                            <h4>Price : {price}</h4>
                                                                
                                                        </div>
                                                        <div className="price-book-divide d-flex">
                                                            <Button className="btn" >Book Now</Button>
                                                            
                                                        </div> 
                                                    </CardInfo>
                                                    <CardBackFace>
                                                        <TotalTime>
                                                            {time}

                                                        </TotalTime>
                                                        <Descrip>
                                                            <p>
                                                                {info}
                                                            </p>
                                                        </Descrip>
                                                        {/* <div className="price-book-divide d-flex">
                                                            <Button  className="btn" >Book Now</Button>
                                                            <Button className="btn" onClick={toggleSwitch}>More details..</Button>
                                                            
                                                        </div> */}

                                                            
                                                    </CardBackFace> 
                                                </Card>
                                                
                                               
                                                 
                                            </CardItems>

                                            
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


const ServiceItemCard = styled.div`
    width: 100%;


    color: #fff;
      &:hover{
            text-decoration: none;
            color: #fff;
        }

`;

const CardItems = styled(Link)`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    border-radius: 12px;
    padding: 0 20px;
    text-decoration: none;

    &:hover{
        text-decoration: none;
    }

    &:active .card,
    :focus .card{
        transform: rotateY(180deg);
        text-decoration: none;
        }
    

        
        /* .active{
            transform: rotateY(180deg);
        }
        .notActive{
            transform: rotateY(0deg);
        } */
`;

const Card = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    max-height: 600px;
    height: 470px;
    max-width: 300px;
    padding: 20px;
    margin: 20px 10px;
    background-image: url(${CardBg});
    background-size: cover;
    background-repeat: no-repeat;
    transition:  all 1s ease-in-out;
    transform-style: preserve-3d;
    
   

    @media screen and (max-width: 550px){
        margin: 50px -10px;
    }
    

    
`;


const CardInfo = styled.div`

        height: 100%;
        width: 100%;
        text-decoration: none;
        text-align: center;
        backface-visibility: hidden;
        z-index: 2;
        color: #fff;

        .price-book-divide{
            justify-content: space-between;
            align-items: center;
            flex: 1;
            margin-top: 2rem;
            position: relative;
            bottom: 0;
            left: 0;

        }
       
 
        .name-tittle{
            margin-bottom: 1.5rem;
            backface-visibility: hidden;

            /* @media screen and (max-width : 1024px){
                margin-top: 0.5rem!important;
            } */
            &:Hover{
                color: #fff;
            }

            h3{
            width: 100%;
            white-space: nowrap;
            font-size: clamp(1rem, 5vw, 1.5rem);
            font-weight: bold;
            color: #fff;
       
           
            
            }
            i{
                position: absolute;
                font-weight: bold;
                top: 50%;
                color: #DFCAA0;
                right: 39%;
                
                
            }

       

        }
        .info{
            height: 120px;
        }
   
        
        
        .btn{
            text-decoration: none;
            flex: .5;
            cursor: pointer;
            
        }

      
`;

const CardImage = styled.div`
    padding: 3px;
    bottom: 0px;
    transition: .3s ease-in-out;
    overflow: hidden; 
    width: 100%;


    

    img{
        max-height: 340px;
        max-width: 250px;
        border-radius: 10px;
        object-fit: contain;
    }
       
  
    
    
`;




// const More = styled(Link)`
    
//     text-decoration: none;
//     color: green;
//     font-size: 12px;
//     background-color: #fff;
//     flex: .5;
//     margin-left: 1rem;
//     white-space: nowrap;
//     cursor: pointer;

//     &:hover{
//         text-decoration: none;
//         color: green;
//     }
// `;

const CardBackFace = styled.div`
    transform: rotateY(180deg);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 1rem;
    bottom: 0;
   
`;

const TotalTime = styled.h2`
    color: #fff;
    
    font-size: clamp(1.5rem, 5vw, 2rem);

`;

const Descrip = styled.div`
   
    color: #fff;
    width: 90%;
    margin: .5rem auto;
    padding: 2rem;
    line-height: 2;
`;
