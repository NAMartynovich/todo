import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  )
}

const AppHeader = () => {
  return (
    <h1>Мой список дел</h1>
  )
}

const SearchPanel = () => {
  return (
    <input placeholder='поиск' />
  )
}

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
