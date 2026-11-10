function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">УчёбаПро</p>
          <p className="footer__muted">
            Учебная платформа для физических и юридических лиц: индивидуальные
            занятия, пакеты и корпоративные программы.
          </p>
        </div>
        <div>
          <p className="footer__title">Разделы</p>
          <div className="footer__links">
            <button type="button" onClick={() => onNavigate('lecturers')}>
              Лекторы
            </button>
            <button type="button" onClick={() => onNavigate('courses')}>
              Курсы
            </button>
            <button type="button" onClick={() => onNavigate('contacts')}>
              Заявка
            </button>
          </div>
        </div>
        <div>
          <p className="footer__title">Контакты</p>
          <p className="footer__muted">hello@uchebapro.ru</p>
          <p className="footer__muted">+7 (495) 120‑45‑67</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} УчёбаПро. Учебный проект ЛР2.</span>
      </div>
    </footer>
  )
}

export default Footer
