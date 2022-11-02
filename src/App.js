import { Fragment, useEffect } from "react";
import Discovery from "./components/Discovery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Number from "./components/Number";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benefit from "./components/Benefit";
import Watch from "./components/Watch";
import Why from "./components/Why";
import Team from "./components/Team";
import Journey from "./components/Journey";
import Become from "./components/Become";
import Quiz from "./components/Quiz";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { PopupProvider } from "./contexts/popupContext";
import PopupRegister from "./components/commons/PopupRegister";
import CoachMB from "./components/CoachMB";
import NumberMB from "./components/NumberMB";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "./components/commons/BackToTop";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Fragment>
      <PopupProvider>
        <Header></Header>
        <Hero></Hero>
        <CoachMB></CoachMB>
        <NumberMB></NumberMB>
        <Number></Number>
        <Discovery></Discovery>
        <Benefit></Benefit>
        <Watch></Watch>
        <Why></Why>
        <Team></Team>
        <Journey></Journey>
        <Become></Become>
        <Quiz></Quiz>
        <Register></Register>
        <Footer></Footer>
        <button className="phone">
          <a href="tel:(+84) 287 107 7979">
            <img
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
              src="/icons/phone-2.png"
              alt=""
            />
          </a>
        </button>
        <BackToTop></BackToTop>
        <PopupRegister></PopupRegister>
      </PopupProvider>
    </Fragment>
  );
}

export default App;
