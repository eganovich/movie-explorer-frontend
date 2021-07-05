import './AboutProject.css';

function AboutProject() {
    return(
        <section className="about" id="about-project">
        <h2 className="about__title">О проекте</h2>
        <div className="about__texts">
          <article className="about__text-block">
            <h3 className="about__text-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className="about__text-block">
            <h3 className="about__text-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className="about__chart">
          <p className="about__chart-element about__chart-element_type_backend">1 неделя</p>
          <p className="about__chart-element about__chart-element_type_frontend">4 недели</p>
          <p className="about__chart-caption">Back-end</p>
          <p className="about__chart-caption">Front-end</p>
        </div>
      </section>
    );
  }
  
  export default AboutProject;