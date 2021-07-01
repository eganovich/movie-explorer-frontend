import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return(
    <section className="author" id="author"> 
      <h2 className="author__title">Студент</h2>
      <div className="author__content">
        <div className="author__main">
          <h3 className="author__name">Елена Ганович</h3>
          <p className="author__subtitle">Фронтенд-разработчик, 31 год</p>
          <p className="author__biography">Я родилась и живу в Люберцах. В 2012 году я закончила
            Университет "Дубна" по специальности информационные системы и технологии, и с тех пор работаю менеджером проектов в Департаменте образования и науки города Москвы</p>
          <p className="author__biography">В 2020 году я начала заниматься вебом, в 2021 году закончила
            факультет веб-разработки
            в <a className="author__link" href="https://praktikum.yandex.ru">«Яндекс.Практикуме»</a>.
          </p>
          <p className="author__biography">Сейчас я в поисках первой работы по новой специальности.</p>
          <ul className="author__list">
            <li className="author__list-item">
              <a className="author__link author__link_type_social" href="https://vk.com/parfenovalena">VK</a>
            </li>
            <li className="author__list-item">
              <a className="author__link author__link_type_social" href="https://github.com/eganovich">GitHub</a>
            </li>
          </ul>
        </div>
        <img
          className="author__photo"
          src={photo}
          alt="Фотография автора"
        />
      </div>
    </section>
  );
}

export default AboutMe;