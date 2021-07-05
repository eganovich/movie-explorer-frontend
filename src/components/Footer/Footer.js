import './Footer.css';

function Footer() {
  return(
    <footer className="root__footer footer">
      <p className="footer__caption">Учебный проект «Яндекс.Практикум» x BeatFilm</p>
      <div className="footer__links">
        <address className="footer__copyright">© 2021 Елена Ганович</address>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://praktikum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >«Яндекс.Практикум»</a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://github.com/eganovich"
              target="_blank"
              rel="noreferrer"
            >GitHub</a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://t.me/eganovich"
              target="_blank"
              rel="noreferrer"
            >Telegram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;