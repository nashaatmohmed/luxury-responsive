import React, {useState} from 'react';
import About from './componants/About';
import Dropdown from './componants/Dropdown';
import GlobalStyle from './componants/globalStyles';
import HeaderSlider from './componants/HeaderSlider';
import Navbar from "./componants/Navbar";

// import TopMenu from './componants/TopMenu';
// import ServiceGallery from './componants/ServiceGallery';
import { AboutData } from './data/AboutData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPg from './pages/AboutPg';
import ServicesPg from './pages/ServicesPg';
import BlogsPg from './pages/BlogsPg';
import ContactPg from './pages/ContactPg';
import Testimonials from './componants/Testimonials';
import SocialMain from './componants/SoialMain';
// import PropagateLoader from "react-spinners/PropagateLoader";
import "../src/App.css";
import OfferPg from './pages/OfferPg';
import Goals from './componants/Goals';
import Stuff from './pages/Stuff';
import Footer from './componants/Footer';
import VideoHeader from './componants/VideoHeader';
import ScrollToTop from './componants/ScrollToTop';
import MorocArabic from './offerCardPg/MorocArabic';
import TurkishMassage from './offerCardPg/TurkishMassage';
import ManicureFaceFoot from './offerCardPg/ManicureFaceFoot';
import FaceMassage from './offerCardPg/FaceMassage';
import MorocoMassage from './offerCardPg/MorocoMassage';
import Royal from './offerCardPg/Royal';
import FootMassage from './ServiceCardPg/FootMassage';
import Turkish from './ServiceCardPg/Turkish';
import Head from './ServiceCardPg/Head';
import Moroccan from './ServiceCardPg/Moroccan';
import Body from './ServiceCardPg/Body';
import RoyalBath from './ServiceCardPg/RoyalBath';
import Stone from './ServiceCardPg/Stone';

import WaxingOne from './ServiceCardPg/WaxingOne';
import FourHand from './ServiceCardPg/FourHand';
import WaxingFull from './ServiceCardPg/WaxingFull';
import Scurb from './ServiceCardPg/Scurb';
import Pedicure from './ServiceCardPg/Pedicure';
import Face from './ServiceCardPg/Face';

import { DataEight, DataEleven, DataFive, DataFour, DataNine, DataOne, DataSeven, DataSix, DataTen, DataThree, DataThrteen, DataTwelve, DataTwo } from './data/ServicePageData';
// import ProductDetails from './componants/ProductDetails';









function App() {

  



 

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const [loading, setLoading] = useState(false);

  // useEffect(() =>{
  //     setLoading(true)
  //     setTimeout(() =>{
  //       setLoading(false)
  //     },3000)
  // },[]);

 
  return (

    <div className="app">
      {/* {loading ? (
      
      <PropagateLoader

       size={20} 
       color={"#DFCAA0"} 
       loading={loading} 
       speedMultiplier={1.5} 
      /> )

      : ( */}
    <Router>
     <ScrollToTop />
      <Switch>
          

          <Route path="/AboutPg">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <AboutPg />
            <Footer />
          </Route>

          <Route path="/OfferPg">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <OfferPg />
            <Footer />
          </Route>

          <Route path="/STuff">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Stuff />
            <Footer />
          </Route>

          <Route path="/ServicesPg">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <ServicesPg />
            <Footer />
          </Route>

          {/* <Route>
            <ProductDetails />
          </Route> */}

          <Route path="/BlogsPg">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <HeaderSlider />
            <SocialMain />
            <BlogsPg />
            <Footer />
          </Route>

          <Route path="/ContactPg">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <ContactPg />
            <Footer />
          </Route>

          {/* offerCardPg start */}

          <Route path="/MorocArabic">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <MorocArabic />
            <Footer />
          </Route>

          <Route path="/TurkishMassage">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <TurkishMassage />
            <Footer />
          </Route>

          <Route path="/ManicureFaceFoot">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <ManicureFaceFoot />
            <Footer />
          </Route>

          
          <Route path="/FaceMassage">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <FaceMassage/>
            <Footer />
          </Route>

          <Route path="/MorocoMassage">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <MorocoMassage />
            <Footer />
          </Route>

          <Route path="/Royal">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Royal />
            <Footer />
          </Route>


            {/* start ServiceCardPg */}

          <Route path="/FootMassage">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <FootMassage  {...DataOne}/>
            <Footer />
          </Route>

          <Route path="/Turkish">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Turkish {...DataTwo}/>
            <Footer />
          </Route>

          
          <Route path="/Head">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Head {...DataThree}/>
            <Footer />
          </Route>

          
          <Route path="/Moroccan">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Moroccan {...DataFour} />
            
            <Footer />
          </Route>

          
          <Route path="/Body">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Body {...DataFive}/>
            <Footer />
          </Route>

          
          <Route path="/RoyalBath">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <RoyalBath {...DataSix}/>
            <Footer />
          </Route>

          
          <Route path="/Stone">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Stone {...DataSeven}/>
            <Footer />
          </Route>

          
          <Route path="/WaxingOne">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <WaxingOne {...DataEight}/>
            <Footer />
          </Route>

          
          <Route path="/FourHand">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <FourHand {...DataNine}/>
            <Footer />
          </Route>

          
          <Route path="/WaxingFull">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <WaxingFull {...DataTen}/>
            <Footer />
          </Route>

          
          <Route path="/Scurb">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Scurb {...DataEleven}/>
            <Footer />
          </Route>

          
          <Route path="/Pedicure">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Pedicure {...DataTwelve}/>
            <Footer />
          </Route>

          
          <Route path="/Face">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <SocialMain />
            <Face {...DataThrteen}/>
            <Footer />
          </Route>

          
          
          {/* end ServiceCardPg */}

          

          <Route path="/">
            <GlobalStyle />
            {/* <TopMenu />           */}
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <VideoHeader />
            
            <SocialMain />
            <Goals />
            <About {...AboutData}/>
            {/* <ServiceGallery /> */}
            <Testimonials />
            <Footer />
          </Route>
      </Switch>

    </Router>
     
    </div>
  );
}

export default App;
