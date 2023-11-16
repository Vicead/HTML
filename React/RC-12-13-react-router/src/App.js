import React from 'react'
import Home from './pages/Home'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import MyNavbar from './components/MyNavbar'
import Teacher from './pages/Teacher'
import CourseCard from './pages/CourseCard'
import ContactForms from './pages/ContactForm'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CardDetails from './pages/CardDetails'
const App = () => {
  return (
    <Router>
      <MyNavbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/teacher' element={<Teacher/>} />
          <Route path='/courses' element={<CourseCard/>} />
          <Route path='/courses/:name' element={<CardDetails/>} />
          <Route path='/contact' element={<ContactForms/>} />
        </Routes>

      <Footer/>
    </Router>
  )
}

export default App