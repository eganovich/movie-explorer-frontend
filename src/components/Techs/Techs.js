import './Techs.css';

function Techs() {
    return(
      <section className="techs" id="techs"> 
        <h2 className="techs__title section-title">Технологии</h2>
        <h3 className="techs__main-text">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list-item">
            <p className="techs__technology">HTML</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__technology">CSS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__technology">JS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__technology">React</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__technology">Git</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__technology">Express.js</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__technology">mongoDB</p>
          </li>
        </ul>
      </section>
    );
  }
  
  export default Techs;