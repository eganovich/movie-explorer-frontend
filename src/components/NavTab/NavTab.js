import './NavTab.css'; 


function NavTab() {
    return(
      <section className="nav-tab">
        <li className="nav-tab__link-list">
          <a className="nav-tab__link" href="#about-project">О проекте</a>
          <a className="nav-tab__link" href="#techs">Технологии</a>
          <a className="nav-tab__link" href="#author">Студент</a>
        </li>
      </section>
    );
  }
  
  export default NavTab;