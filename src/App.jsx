import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Lecturers from './pages/Lecturers.jsx'
import LecturerDetail from './pages/LecturerDetail.jsx'
import Courses from './pages/Courses.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'

function App() {
  const [page, setPage] = useState({ name: 'home' })

  const navigate = (name, params = {}) => {
    setPage({ name, ...params })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let content = null
  switch (page.name) {
    case 'lecturers':
      content = <Lecturers onOpenLecturer={(id) => navigate('lecturer', { id })} />
      break
    case 'lecturer':
      content = (
        <LecturerDetail
          id={page.id}
          onBack={() => navigate('lecturers')}
          onOpenCourse={() => navigate('courses')}
        />
      )
      break
    case 'courses':
      content = (
        <Courses onOpenLecturer={(id) => navigate('lecturer', { id })} />
      )
      break
    case 'about':
      content = <About />
      break
    case 'contacts':
      content = <Contacts />
      break
    default:
      content = (
        <Home
          onNavigate={navigate}
          onOpenLecturer={(id) => navigate('lecturer', { id })}
        />
      )
  }

  return (
    <div className="app">
      <Header current={page.name} onNavigate={navigate} />
      <main className="main">{content}</main>
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
