import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'
import logo from '../img/logo.png'

//!!!React ta 3 türlü link kullanılabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalısınız? React uygulamanız içinde, etkinken stil gerektirmeyen bir bağlantı oluşturmak istiyorsanız, Link bileşenini kullanın. React uygulamanız içinde, etkin durumdayken stil gerektiren bir bağlantı oluşturmak istiyorsanız, NavLink bileşenini kullanın. Son olarak, React uygulamanızda harici bir sayfaya veya rota olmayan bir sayfaya bağlantı oluşturmak istiyorsanız, <a></a>  etiketini kullanın.
const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg='light' >
      <Container>
        <Link to="/"><img src={logo} alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link' to="/" style={({isActive})=>({backgroundColor:isActive && 'red', borderRadius:10})}>Home</NavLink>
            <NavLink style={({isActive})=>({border:isActive ? '2px solid blue':'', borderRadius:10})} className='nav-link' to="/teacher">Teacher</NavLink>
            <NavLink style={({isActive})=>({fontSize:isActive && '30px', borderRadius:10})} className='nav-link' to="/courses">Courses</NavLink>
            <NavLink style={({isActive})=>({color:isActive && 'aqua', borderRadius:10})} className='nav-link' to="/contact">Contact</NavLink>
            <a className='nav-link' href="https://github.com/clarusway"
              target="blank">Github</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar