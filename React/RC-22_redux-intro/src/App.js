import React from 'react'
import "./App.css"
import counterReducer from "./redux/reducers/counterReducer"
import todoReducer from "./redux/reducers/todoReducer"
import {combineReducers, legacy_createStore as createStore} from "redux"
import {Provider} from "react-redux"
import Counter from './components/counter/Counter'
import Todo from './components/todo/Todo'

const App = () => {
  const totalReducer=combineReducers({counterReducer:counterReducer,todoReducer:todoReducer})
  const store=createStore(totalReducer)
  return (
    <div className='app'>
      <Provider store={store}>
        <Counter/>
        <Todo/>
      </Provider>
    </div>
  )
}

export default App