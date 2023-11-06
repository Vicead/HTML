import React from 'react'
import logo from '../assets/nba-logo.png'
import { Container, Image } from 'react-bootstrap'
const Header = () => {
  return (
    <Container>
        <Image src={logo} width={200}/>
        <h1 className='display-4 my-2 fw-bold'>NBA Legends</h1>
    </Container>
  )
}

export default Header