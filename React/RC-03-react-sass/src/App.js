import React from "react"
import Header from "./components/header/Header"
import Card from "./components/card/Card"

import "./App.scss"

import data from "./data"

// import "./scss/_button.scss"
// import "./scss/_reset.scss"
// import "./scss/_variable.scss"

const App = () => {
  return (
    <div>
      <Header/>
      <Card data={data}/>
    </div>
  )
}

export default App
