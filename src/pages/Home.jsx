import { lecturers } from '../data/lecturers.js'
import LecturerCard from '../components/LecturerCard.jsx'

const features = [
  {
    title: 'Онлайн и оффлайн',
    text: 'Занятия в Zoom или в аудитории — выбираете формат под свой график.',
  },
  {
    title: 'Проверенные лекторы',
    text: 'Кандидаты и доктора наук, практики из МФТИ, МГУ, ВШЭ и МГИМО.',
  },
  {
    title: 'Гибкие тарифы',
    text: 'Разовые встречи, пакеты занятий, интенсивы и корпоративные тренинги.',
  },
  {
    title: 'Программы под цель',
    text: 'ЕГЭ, олимпиады, карьерный рост или глубокое освоение дисциплины.',
  },
]

function Home({ onNavigate, onOpenLecturer }) {
  const preview = lecturers.slice(0, 4)

  return (
    <div className="page">
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Учебная платформа</p>
            <h1>
              Знания от сильных преподавателей — для учебы, работы и олимпиад
            </h1>
            <p className="lead">
              УчёбаПро помогает физическим и юридическим лицам подобрать
              лектора и программу: от алгоритмов и биохимии до дизайна,
              психологии и международных отношений.
            </p>
            <div className="hero__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate('lecturers')}
              >
                Смотреть лекторов
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => onNavigate('contacts')}
              >
                Оставить заявку
              </button>
            </div>
          </div>
          <div className="hero__panel" aria-hidden="true">
            <div className="hero__stat">
              <strong>10</strong>
              <span>лекторов</span>
            </div>
            <div className="hero__stat">
              <strong>30</strong>
              <span>дисциплин</span>
            </div>
            <div className="hero__stat">
              <strong>онлайн</strong>
              <span>и оффлайн</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Почему выбирают УчёбаПро</h2>
            <p>Расширили макет: добавили форматы обучения, цели и понятные тарифы.</p>
          </div>
          <div className="feature-grid">
            {features.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head section__head--row">
            <div>
              <h2>Лекторы платформы</h2>
              <p>Мужчины и женщины — эксперты по техническим, естественным и гуманитарным направлениям.</p>
            </div>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => onNavigate('lecturers')}
            >
              Все лекторы
            </button>
          </div>
          <div className="lecturer-grid">
            {preview.map((lecturer) => (
              <LecturerCard
                key={lecturer.id}
                lecturer={lecturer}
                onOpen={onOpenLecturer}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div>
            <h2>Нужна программа под компанию или школу?</h2>
            <p>
              Подберем корпоративный тренинг, пакет занятий или сопровождение
              проекта под ваши задачи.
            </p>
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onNavigate('contacts')}
          >
            Связаться
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
