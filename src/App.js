import React, {useState, useEffect} from 'react';
import About from './componants/About';
import Dropdown from './componants/Dropdown';
import GlobalStyle from './componants/globalStyles';
import HeaderSlider from './componants/HeaderSlider';
import Navbar from "./componants/Navbar";
import TopMenu from './componants/TopMenu';
import ServiceGallery from './componants/ServiceGallery';
import { AboutData } from './data/AboutData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPg from './pages/AboutPg';
import ServicesPg from './pages/ServicesPg';
import BlogsPg from './pages/BlogsPg';
import ContactPg from './pages/ContactPg';
import Testimonials from './componants/Testimonials';
import PropagateLoader from "react-spinners/PropagateLoader";
import "../src/App.css";









function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() =>{
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      },3000)
  },[]);

 
  return (

    <div className="app">
      {loading ? (
      
      <PropagateLoader

       size={20} 
       color={"#DFCAA0"} 
       loading={loading} 
       speedMultiplier={1.5} 
      /> )

      : (
    <Router>
     
      <Switch>
          

          <Route path="/AboutPg">
            <GlobalStyle />
            <TopMenu />          
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            
            <AboutPg />
          </Route>

          <Route path="/ServicesPg">
            <GlobalStyle />
            <TopMenu />          
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            
            <ServicesPg />
          </Route>

          <Route path="/BlogsPg">
            <GlobalStyle />
            <TopMenu />          
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            
            <BlogsPg />
          </Route>

          <Route path="/ContactPg">
            <GlobalStyle />
            <TopMenu />          
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            
            <ContactPg />
          </Route>

          <Route path="/">
            <GlobalStyle />
            <TopMenu />          
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <HeaderSlider />
            <About {...AboutData}/>
            <ServiceGallery />
            <Testimonials />
          </Route>
      </Switch>

    </Router>
      )}
    </div>
  );
}

export default App;
