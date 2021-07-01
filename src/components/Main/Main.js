import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main({ loggedIn, menuProps }) {
  return ( 
   <>
    <Header
        place="main"
        loggedIn={loggedIn}
      />
    <Promo />
    <NavTab />
    <AboutProject />
    <Techs />
    <AboutMe />
    <Portfolio />
    <Footer />
    </>
  );
}

export default Main;