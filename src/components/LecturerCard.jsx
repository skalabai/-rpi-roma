function LecturerCard({ lecturer, onOpen }) {
  return (
    <article className="lecturer-card">
      <div className="lecturer-card__media">
        <img src={lecturer.photo} alt={lecturer.name} loading="lazy" />
      </div>
      <div className="lecturer-card__body">
        <h3>{lecturer.name}</h3>
        <p className="lecturer-card__meta">
          Стаж {lecturer.experience} лет
          {lecturer.degree !== 'нет' ? ` · ${lecturer.degree}` : ''}
        </p>
        <p>{lecturer.short}</p>
        <button type="button" className="btn" onClick={() => onOpen(lecturer.id)}>
          Подробнее
        </button>
      </div>
    </article>
  )
}

export default LecturerCard
