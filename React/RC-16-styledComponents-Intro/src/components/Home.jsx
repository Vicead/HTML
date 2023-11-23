import React from 'react'
import Header, { Link } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import Button, { TomatoButton } from './style/ButonStyle'


const Home = () => {
  return (
    <DivStyle>
      <Header>
        STYLED COMPONENTS
      </Header>
      <Link href='#'>
        LINK
      </Link>
      <Button esra >TIKLA1</Button>
      <Button cihan >TIKLA2</Button>
      <Button>TIKLA3</Button>
      <TomatoButton>TIKLA4</TomatoButton>
      <TomatoButton murat >TIKLA5</TomatoButton>
    </DivStyle>
  )
}

export default Home