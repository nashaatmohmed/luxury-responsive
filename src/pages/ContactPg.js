import React from 'react';
import styled from 'styled-components';
import Head from '../images/contact-us.jpg';
// import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Menu from '../data/ServiceData';
import { Button } from '../componants/Button';


const Contact = styled.section`

  .container{
    margin: 2rem auto;
    
  }

  .row{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    background-color: #500500;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, .6);

    @media screen and (max-width : 600px){
      grid-template-columns: 1fr;
    }
  }
  
   label{
     font-weight: bold;
     color: #000;
   }

   .col-8{
    display: block !important;
  
  
   }

   .btn-info{
    margin: 2rem auto;
    height: 50px;
    text-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 800;
  
   }
`;

const ContactImg = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: fill;
    filter: brightness(.5);
    margin-top: 80px;

    @media screen and (max-width: 768px){
      height: 35vh;
    }

    @media screen and (max-width: 420px){
      height: 25vh;
    }
`;



const ContactPg = () => {
  //   const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_57290uf', 'template_i3p28cm', e.target, 'user_atSwxTiSJfcdhAIgU5AWu')
    .then((result) => {
        console.log(result.text);
        alert("submit sent");
    }, (error) => {
        console.log(error.text);
    });
      e.target.reset()
  }
    return (
        <Contact>
           <ContactImg src={Head} alt="head-pic" />
            <div className="container">
              <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                  {/* <div className="d-none" name="book">
                    Booking Services Request
                  </div> */}
                  <div className="col-12 align-center form-group pt-2 mx-auto">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="your name" name="name" />
                  </div>

                  <div className="col-12 align-center form-group pt-2 mx-auto">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="example@gmail.com" name="email" />
                  </div>
                

                  <div className="col-12 align-center form-group pt-2 mx-auto">
                    <label>Phone</label>
                    <input type="num" className="form-control" placeholder="subject" name="phone" />
                  </div>

                  <div className="col-12 align-center form-group pt-2 mx-auto">
                    <label>Service / Offer</label>
                    <select class="form-control" name="service">
                      {Menu.map((item, index) => (
                        
                        <option key={index}>
                          {item.name}
                        </option>
                    
                      ))}
                        
                        <option>75 Min Moroccan Bath with Arabic Massage</option>
                        <option>75 Min Turkish Hammam Bath Massage</option>
                        <option>Manicure Pedicure Face Mask Foot Massage</option>
                        <option>Massage Manicure Pedicure Face Mask</option>
                        <option>2 HR Massage with Moroccan Bath</option>
                        <option>2 HR Royal Package</option>
                                  
                    </select>
                    
                    
                  </div>

                  <div className="col-12 align-center form-group pt-2 mx-auto">
                    <label for="booking">Book Date:</label>
                    <input type="date" className="form-control" id="book" name="date" />
                  </div>

                  <div className="col-12 align-center form-group pt-2 mx-auto">
                    <label>Book Time</label>
                    <select class="form-control" name="time">
                      <option>select your time</option>
                      <option>10:00 am 11:00 am</option>
                      <option>11:00 am 12:00 pm</option>
                      <option>12:00 pm 01:00 pm</option>
                      <option>01:00 pm 02:00 pm</option>
                      <option>02:00 pm 03:00 pm</option>
                      <option>03:00 pm 04:00 pm</option>
                      <option>04:00 pm 05:00 pm</option>
                      <option>05:00 pm 06:00 pm</option>
                      <option>06:00 pm 07:00 pm</option>
                      <option>07:00 pm 08:00 pm</option>
                      <option>08:00 pm 09:00 pm</option>
                      <option>09:00 pm 10:00 pm</option>
                      <option>10:00 pm 11:00 pm</option>
                      <option>11:00 pm 12:00 am</option>
                    </select>
                    
                    
                  </div>

                

                  <div className="col-12 align-center form-group  pt-2 mx-auto">
                    <textarea type="text" className="form-control" placeholder="put your message" 
                    name="message"
                    col="30"
                    row="8"
                    ></textarea>
                  </div>
                
                  
                </div>
                <div className="col-12 d-block pt-2 mx-auto ">
                    <Button big="true" type="submit" className="btn btn-info align-center" value="send massage">Send </Button>
                  </div>
              </form>

            </div>
           
      
           
        </Contact>
    )
}

export default ContactPg




