import { getLecturerById } from '../data/lecturers.js'
import TariffList from '../components/TariffList.jsx'

function LecturerDetail({ id, onBack }) {
  const lecturer = getLecturerById(id)

  if (!lecturer) {
    return (
      <div className="page">
        <div className="container section">
          <h1>Лектор не найден</h1>
          <button type="button" className="btn" onClick={onBack}>
            Назад к списку
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <button type="button" className="back-link" onClick={onBack}>
            ← Все лекторы
          </button>

          <div className="profile">
            <div className="profile__media">
              <img src={lecturer.photo} alt={lecturer.name} />
            </div>
            <div className="profile__info">
              <p className="eyebrow">Профиль лектора</p>
              <h1>{lecturer.name}</h1>
              <p className="lead">{lecturer.short}</p>
              <dl className="profile__facts">
                <div>
                  <dt>Образование</dt>
                  <dd>{lecturer.education}</dd>
                </div>
                <div>
                  <dt>Стаж</dt>
                  <dd>{lecturer.experience} лет</dd>
                </div>
                <div>
                  <dt>Учёная степень</dt>
                  <dd>{lecturer.degree}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="profile__blocks">
            <section>
              <h2>Преподаваемые дисциплины</h2>
              <div className="discipline-list">
                {lecturer.disciplines.map((discipline) => (
                  <article key={discipline.title} className="discipline-card">
                    <h3>{discipline.title}</h3>
                    <p>{discipline.description}</p>
                    <ul>
                      {discipline.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2>Тарифы</h2>
              <TariffList tariffs={lecturer.tariffs} />
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LecturerDetail
