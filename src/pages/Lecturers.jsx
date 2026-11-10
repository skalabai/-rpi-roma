import { useMemo, useState } from 'react'
import { lecturers } from '../data/lecturers.js'
import LecturerCard from '../components/LecturerCard.jsx'

function Lecturers({ onOpenLecturer }) {
  const [filter, setFilter] = useState('all')

  const list = useMemo(() => {
    if (filter === 'all') return lecturers
    return lecturers.filter((item) => item.gender === filter)
  }, [filter])

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Каталог</p>
          <h1>Лекторы</h1>
          <p className="lead">
            Контент заполнен по материалам задания: образование, стаж, дисциплины,
            темы занятий и тарифы.
          </p>
          <div className="filters">
            {[
              { id: 'all', label: 'Все' },
              { id: 'male', label: 'Мужчины' },
              { id: 'female', label: 'Женщины' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                className={`chip${filter === item.id ? ' is-active' : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container lecturer-grid">
          {list.map((lecturer) => (
            <LecturerCard
              key={lecturer.id}
              lecturer={lecturer}
              onOpen={onOpenLecturer}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Lecturers
