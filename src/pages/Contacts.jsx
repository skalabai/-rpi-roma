import { useState } from 'react'

function Contacts() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    goal: 'Индивидуальные занятия',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Контакты</p>
          <h1>Оставьте заявку</h1>
          <p className="lead">
            Расскажите, какую дисциплину хотите изучить — подберем лектора и
            тариф.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contacts-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Имя
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Как к вам обращаться"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@email.ru"
              />
            </label>
            <label>
              Цель
              <select name="goal" value={form.goal} onChange={onChange}>
                <option>Индивидуальные занятия</option>
                <option>Пакет занятий</option>
                <option>Подготовка к экзамену</option>
                <option>Корпоративный тренинг</option>
              </select>
            </label>
            <label>
              Комментарий
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows="5"
                placeholder="Дисциплина, удобный формат, сроки"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Отправить
            </button>
            {sent && (
              <p className="form-success">
                Заявка принята (демо). Мы свяжемся с вами по email.
              </p>
            )}
          </form>

          <aside className="contact-aside">
            <h2>Связь напрямую</h2>
            <p>hello@uchebapro.ru</p>
            <p>+7 (495) 120‑45‑67</p>
            <p>Пн–Сб, 10:00–20:00</p>
            <p className="footer__muted">
              Для юрлиц доступны договор, закрывающие документы и корпоративные
              программы.
            </p>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Contacts
