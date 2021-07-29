import React from 'react';
import styled from 'styled-components';
import Head from '../images/contact.jpg';
// import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap';
import emailjs from 'emailjs-com';


const Contact = styled.section`

  form{
    width: 100%;
  }
  
   label{
     font-weight: bold;
     color: #000;
   }
`;

const ContactImg = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
    filter: brightness(.5);
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
           <ContactImg src={Head} alt="" />
            <div className="container-fluid">
            <form  onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                {/* <div className="d-none" name="book">
                  Booking Services Request
                </div> */}
                <div className="col-5 align-center form-group pt-2 mx-auto">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="your name" name="name" />
                </div>

                <div className="col-5 align-center form-group pt-2 mx-auto">
                  <label>E-mail</label>
                  <input type="email" className="form-control" placeholder="example@gmail.com" name="email" />
                </div>

                <div className="col-5 align-center form-group pt-2 mx-auto">
                  <label>Phone</label>
                  <input type="num" className="form-control" placeholder="subject" name="phone" />
                </div>

                <div className="col-5 align-center form-group pt-2 mx-auto">
                  <label>Service / Offer</label>
                  <select class="form-control" name="service">
                    <option>Default select 1</option>
                    <option>Default select 2</option>
                    <option>Default select 3</option>
                    <option>Default select 4</option>
                    <option>Default select 5</option>
                    <option>Default select 6</option>
                    <option>Default select 7</option>
                    <option>Default select 8</option>
                    <option>Default select 9</option>
                  </select>
                  
                  
                </div>

                <div className="col-5 align-center form-group pt-2 mx-auto">
                  <label for="booking">Book Date:</label>
                  <input type="date" className="form-control" id="book" name="date" />
                </div>

                <div className="col-5 align-center form-group pt-2 mx-auto">
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

               

                <div className="col-7 align-center form-group pt-2 mx-auto">
                  <textarea type="text" className="form-control" placeholder="put your message" 
                  name="message"
                  col="30"
                  row="8"
                  ></textarea>
                </div>
                <div className="col-6 d-block pt-2 mx-auto ">
                  <input type="submit" className="btn btn-info align-center" value="send massage"></input>
                </div>
                
              </div>
            </form>

            </div>
           
      
           
        </Contact>
    )
}

export default ContactPg




