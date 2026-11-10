import { useMemo, useState } from 'react'
import { getAllCourses } from '../data/lecturers.js'

function Courses({ onOpenLecturer }) {
  const courses = useMemo(() => getAllCourses(), [])
  const [query, setQuery] = useState('')

  const filtered = courses.filter((course) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      course.title.toLowerCase().includes(q) ||
      course.lecturerName.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q)
    )
  })

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Программы</p>
          <h1>Курсы и дисциплины</h1>
          <p className="lead">
            Сводный каталог всех дисциплин платформы. Дополнительный раздел поверх
            макета — чтобы быстрее найти нужную тему.
          </p>
          <input
            className="search"
            type="search"
            placeholder="Поиск по курсу или лектору"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </section>

      <section className="section">
        <div className="container course-grid">
          {filtered.map((course) => (
            <article
              key={`${course.lecturerId}-${course.title}`}
              className="course-card"
            >
              <div className="course-card__top">
                <img src={course.photo} alt="" />
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
              <p className="course-card__meta">
                Лектор: {course.lecturerName}
              </p>
              <ul>
                {course.topics.slice(0, 4).map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <button
                type="button"
                className="btn"
                onClick={() => onOpenLecturer(course.lecturerId)}
              >
                К профилю лектора
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Courses
