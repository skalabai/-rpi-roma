function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">О платформе</p>
          <h1>УчёбаПро — учебная платформа нового формата</h1>
          <p className="lead">
            Мы предоставляем онлайн и оффлайн услуги физическим и юридическим
            лицам по преподаванию дисциплин: от фундаментальных наук до
            прикладных навыков.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <article className="about-card">
            <h2>Как устроено обучение</h2>
            <ol>
              <li>Выбираете лектора или дисциплину в каталоге.</li>
              <li>Согласовываете формат: индивидуально, пакет или интенсив.</li>
              <li>Занимаетесь онлайн или оффлайн по удобному расписанию.</li>
              <li>Получаете материалы, практику и обратную связь.</li>
            </ol>
          </article>
          <article className="about-card">
            <h2>Что добавили сверх макета</h2>
            <ul>
              <li>Каталог курсов с поиском</li>
              <li>Фильтрацию лекторов по полу</li>
              <li>Отдельные профили с темами и тарифами</li>
              <li>Страницу контактов и заявки</li>
              <li>Блок корпоративных форматов</li>
            </ul>
          </article>
          <article className="about-card">
            <h2>Технологии ЛР2</h2>
            <p>
              Приложение собрано на стандартном React без сторонних UI‑библиотек.
              Навигация реализована через состояние компонентов, стили — на
              чистом CSS.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default About
