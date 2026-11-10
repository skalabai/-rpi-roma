const links = [
  { id: 'home', label: 'Главная' },
  { id: 'lecturers', label: 'Лекторы' },
  { id: 'courses', label: 'Курсы' },
  { id: 'about', label: 'О платформе' },
  { id: 'contacts', label: 'Контакты' },
]

function Header({ current, onNavigate }) {
  const active =
    current === 'lecturer' ? 'lecturers' : current === 'home' ? 'home' : current

  return (
    <header className="header">
      <div className="container header__inner">
        <button className="brand" onClick={() => onNavigate('home')} type="button">
          <span className="brand__mark">УП</span>
          <span className="brand__text">
            <strong>УчёбаПро</strong>
            <small>онлайн и оффлайн обучение</small>
          </span>
        </button>

        <nav className="nav" aria-label="Основная навигация">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
